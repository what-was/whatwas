import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react';
import { z } from 'zod';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { Switch } from '~/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ReminderFrequency, ReminderStatus, ReminderPriority } from '@prisma/client';
import { Page, PageContent, PageHeader } from '~/components/page';
import { formatDate } from '~/lib/utils';
import { Badge } from '~/components/ui/badge';
import { useState } from 'react';
import { X } from 'lucide-react';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().min(1, 'Due date is required'),
  isRecurring: z.enum(['true', 'false']).transform((val) => val === 'true'),
  frequency: z.nativeEnum(ReminderFrequency).optional(),
  priority: z.nativeEnum(ReminderPriority),
  status: z.nativeEnum(ReminderStatus),
  tags: z.string().optional(),
  contactIds: z.string().transform((val) => val.split(',').filter(Boolean)),
  _action: z.enum(['update', 'delete']),
});

const priorityColors: Record<ReminderPriority, string> = {
  LOW: 'bg-blue-100 text-blue-800',
  MEDIUM: 'bg-yellow-100 text-yellow-800',
  HIGH: 'bg-red-100 text-red-800',
};

const statusColors: Record<ReminderStatus, string> = {
  PENDING: 'bg-blue-100 text-blue-800',
  COMPLETED: 'bg-green-100 text-green-800',
  SNOOZED: 'bg-yellow-100 text-yellow-800',
};

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const reminderId = args.params.reminderId;

  if (!reminderId) {
    throw new Error('Reminder ID is required');
  }

  const [reminder, contacts] = await Promise.all([
    prisma.reminder.findFirst({
      where: {
        id: reminderId,
        userId,
      },
      include: {
        contacts: {
          include: {
            contact: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
    }),
    prisma.contact.findMany({
      where: { userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
      orderBy: [
        { firstName: 'asc' },
        { lastName: 'asc' },
      ],
    }),
  ]);

  if (!reminder) {
    throw new Response('Reminder not found', { status: 404 });
  }

  return json({
    reminder: {
      ...reminder,
      createdAt: reminder.createdAt.toISOString(),
      updatedAt: reminder.updatedAt.toISOString(),
      dueDate: reminder.dueDate.toISOString(),
      contacts: reminder.contacts.map(rc => rc.contact),
    },
    contacts,
  });
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await requireUserId(args);
  const reminderId = args.params.reminderId;

  if (!reminderId) {
    throw new Error('Reminder ID is required');
  }

  const formData = await args.request.formData();
  const data = Object.fromEntries(formData);

  try {
    const parsed = schema.parse(data);

    if (parsed._action === 'delete') {
      await prisma.reminder.delete({
        where: {
          id: reminderId,
          userId,
        },
      });
      return redirect('/crm/reminders');
    }

    // Validate contacts if provided
    if (parsed.contactIds.length > 0) {
      const contacts = await prisma.contact.findMany({
        where: {
          id: { in: parsed.contactIds },
          userId,
        },
        select: { id: true },
      });

      if (contacts.length !== parsed.contactIds.length) {
        return json(
          { error: 'One or more invalid contacts selected' },
          { status: 400 }
        );
      }
    }

    // Update reminder
    await prisma.$transaction(async (tx) => {
      // Update reminder
      await tx.reminder.update({
        where: {
          id: reminderId,
          userId,
        },
        data: {
          title: parsed.title,
          description: parsed.description,
          dueDate: new Date(parsed.dueDate),
          isRecurring: parsed.isRecurring,
          frequency: parsed.isRecurring ? parsed.frequency : null,
          status: parsed.status,
          priority: parsed.priority,
          tags: parsed.tags ? parsed.tags.split(',').map(tag => tag.trim()) : [],
        },
      });

      // Delete existing contact associations
      await tx.reminderContact.deleteMany({
        where: {
          reminderId,
          userId,
        },
      });

      // Create new contact associations
      if (parsed.contactIds.length > 0) {
        await tx.reminderContact.createMany({
          data: parsed.contactIds.map(contactId => ({
            reminderId,
            contactId,
            userId,
          })),
        });
      }
    });

    return json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return json(
        { errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

export default function ReminderDetails() {
  const { reminder, contacts } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const [isRecurring, setIsRecurring] = useState(reminder.isRecurring);
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>(
    reminder.contacts.map(contact => contact.id)
  );

  const selectedContacts = contacts.filter(contact =>
    selectedContactIds.includes(contact.id)
  );

  const handleContactSelect = (contactId: string) => {
    if (!selectedContactIds.includes(contactId)) {
      setSelectedContactIds(prev => [...prev, contactId]);
    }
  };

  const removeContact = (contactId: string) => {
    setSelectedContactIds(prev => prev.filter(id => id !== contactId));
  };

  const isPending = reminder.status === ReminderStatus.PENDING;
  const isOverdue = isPending && new Date(reminder.dueDate) < new Date();

  return (
    <Page>
      <PageHeader
        title={reminder.title}
        subtitle={`Created ${formatDate(reminder.createdAt)}`}
      />

      <PageContent>
        <div className="max-w-2xl space-y-6">
          {/* Status Banner */}
          <div className={`p-4 rounded-lg ${isOverdue
            ? 'bg-red-50 text-red-800'
            : reminder.status === ReminderStatus.COMPLETED
              ? 'bg-green-50 text-green-800'
              : reminder.status === ReminderStatus.SNOOZED
                ? 'bg-yellow-50 text-yellow-800'
                : 'bg-blue-50 text-blue-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <Badge className={statusColors[reminder.status]}>
                {reminder.status}
              </Badge>
              <Badge className={priorityColors[reminder.priority]}>
                {reminder.priority} Priority
              </Badge>
              {isOverdue && (
                <Badge variant="destructive">OVERDUE</Badge>
              )}
            </div>
            <p className="text-sm mt-1">
              Due: {formatDate(reminder.dueDate)}
            </p>
          </div>

          <Form method="post" className="space-y-8">
            <input type="hidden" name="_action" value="update" />

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={reminder.title}
                required
              />
              {actionData?.errors?.title && (
                <p className="text-sm text-red-500">
                  {actionData.errors.title[0]}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                defaultValue={reminder.description || ''}
              />
            </div>

            {/* Contact Selection */}
            <div className="space-y-2">
              <Label>Associated Contacts</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedContacts.map((contact) => (
                  <Badge
                    key={contact.id}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {contact.firstName} {contact.lastName}
                    <button
                      type="button"
                      onClick={() => removeContact(contact.id)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={handleContactSelect}
                value=""
                disabled={contacts.length === selectedContactIds.length}
              >
                <SelectTrigger>
                  <SelectValue placeholder={
                    contacts.length === selectedContactIds.length
                      ? "All contacts selected"
                      : "Select contacts..."
                  } />
                </SelectTrigger>
                <SelectContent>
                  {contacts
                    .filter(contact => !selectedContactIds.includes(contact.id))
                    .map((contact) => (
                      <SelectItem key={contact.id} value={contact.id}>
                        {contact.firstName} {contact.lastName}
                        {contact.email && ` (${contact.email})`}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="contactIds"
                value={selectedContactIds.join(',')}
              />
            </div>

            {/* Due Date */}
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                type="datetime-local"
                id="dueDate"
                name="dueDate"
                defaultValue={reminder.dueDate.slice(0, 16)}
                required
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select name="status" defaultValue={reminder.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(ReminderStatus).map(([key, value]) => (
                    <SelectItem key={value} value={value}>
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue={reminder.priority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(ReminderPriority).map(([key, value]) => (
                    <SelectItem key={value} value={value}>
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                name="tags"
                defaultValue={reminder.tags?.join(', ') || ''}
                placeholder="work, personal, important"
              />
            </div>

            {/* Recurring Toggle */}
            <div className="flex items-center space-x-2">
              <Switch
                id="isRecurring"
                name="isRecurring"
                value="true"
                checked={isRecurring}
                onCheckedChange={setIsRecurring}
              />
              <Label htmlFor="isRecurring">Recurring Reminder</Label>
            </div>

            {/* Frequency Selection (only shown if recurring) */}
            {isRecurring && (
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select
                  name="frequency"
                  defaultValue={reminder.frequency || undefined}
                  required={isRecurring}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ReminderFrequency).map(([key, value]) => (
                      <SelectItem key={value} value={value}>
                        {key}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Error Message */}
            {actionData?.error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-500">{actionData.error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>

              <Form method="post" className="flex-1">
                <input type="hidden" name="_action" value="delete" />
                <Button
                  type="submit"
                  variant="destructive"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Delete Reminder
                </Button>
              </Form>
            </div>
          </Form>
        </div>
      </PageContent>
    </Page>
  );
}
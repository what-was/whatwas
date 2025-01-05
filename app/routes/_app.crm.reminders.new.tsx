import { json, redirect, type ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useNavigation, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { z } from 'zod';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Page, PageContent, PageHeader } from '~/components/page';
import { ReminderFrequency, ReminderStatus, ReminderPriority } from '@prisma/client';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';
import { cn } from '~/lib/utils';
import { Badge } from '~/components/ui/badge';
import { X } from 'lucide-react';
import { zfd } from "zod-form-data";

const zschema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().min(1, 'Due date is required'),
  isRecurring: z.boolean(),
  frequency: z.nativeEnum(ReminderFrequency).optional(),
  priority: z.nativeEnum(ReminderPriority).default('MEDIUM'),
  tags: z.string().optional(),
  contactIds: z.string().transform((val) => val.split(',').filter(Boolean)),
});

const schema = zfd.formData({
  title: zfd.text(z.string().min(1, 'Title is required')),
  description: zfd.text().optional(),
  dueDate: zfd.text(z.string().min(1, 'Due date is required')),
  isRecurring: zfd.text(z.enum(['true', 'false']).transform((val) => val === 'true')),
  frequency: zfd.text(z.nativeEnum(ReminderFrequency)).optional(),
  priority: zfd.text(z.nativeEnum(ReminderPriority).default('MEDIUM')).optional(),
  tags: zfd.text().optional(),
  contactIds: zfd.repeatable(z.string().transform((val) => val.split(',').filter(Boolean))).optional(),
});

type ActionData = {
  errors?: {
    title?: string[];
    description?: string[];
    dueDate?: string[];
    frequency?: string[];
    priority?: string[];
    tags?: string[];
    contactIds?: string[];
  };
  error?: string;
};

const priorityOptions = [
  { label: 'Low', value: 'LOW' },
  { label: 'Medium', value: 'MEDIUM' },
  { label: 'High', value: 'HIGH' },
] as const;

export async function loader(args: ActionFunctionArgs) {
  const { userId } = await requireUserId(args);

  const contacts = await prisma.contact.findMany({
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
  });

  return json({ contacts });
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await requireUserId(args);
  const formData = await args.request.formData();
  const data = Object.fromEntries(formData);

  try {
    const parsed = schema.parse(formData);
    console.log(parsed);

    // Validate contacts if provided
    if (parsed.contactIds && parsed.contactIds.length > 0) {
      const contacts = await prisma.contact.findMany({
        where: {
          id: { in: parsed.contactIds },
          userId,
        },
        select: { id: true },
      });

      if (contacts.length !== parsed.contactIds.length) {
        return json<ActionData>(
          { error: 'One or more invalid contacts selected' },
          { status: 400 }
        );
      }
    }

    // Create the reminder
    const reminder = await prisma.reminder.create({
      data: {
        title: parsed.title,
        description: parsed.description,
        dueDate: new Date(parsed.dueDate),
        isRecurring: parsed.isRecurring,
        frequency: parsed.isRecurring ? parsed.frequency : null,
        status: ReminderStatus.PENDING,
        priority: parsed.priority,
        tags: parsed.tags ? parsed.tags.split(',').map(tag => tag.trim()) : [],
        userId,
      },
    });

    // Create contact associations
    if (parsed.contactIds && parsed.contactIds.length > 0) {
      await prisma.reminderContact.createMany({
        data: parsed.contactIds.map(contactId => ({
          reminderId: reminder.id,
          contactId,
          userId,
        })),
      });
    }

    return redirect('/crm/reminders');
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.flatten().fieldErrors);
      return json<ActionData>(
        { errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return json<ActionData>(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

export default function NewReminder() {
  const { contacts = [] } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([]);

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

  return (
    <Page>
      <PageHeader
        title="Create Reminder"
        subtitle="Set up a new reminder"
      />

      <PageContent>
        <div className="max-w-2xl">
          <Form method="post" className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                required
                aria-describedby="title-error"
              />
              {actionData?.errors?.title && (
                <p className="text-sm text-red-500" id="title-error">
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
              />
              {actionData?.errors?.description && (
                <p className="text-sm text-red-500">
                  {actionData.errors.description[0]}
                </p>
              )}
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
              {actionData?.errors?.contactIds && (
                <p className="text-sm text-red-500">
                  {actionData.errors.contactIds[0]}
                </p>
              )}
            </div>

            {/* Due Date */}
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                type="datetime-local"
                id="dueDate"
                name="dueDate"
                required
                min={new Date().toISOString().slice(0, 16)}
              />
              {actionData?.errors?.dueDate && (
                <p className="text-sm text-red-500">
                  {actionData.errors.dueDate[0]}
                </p>
              )}
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue="MEDIUM">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorityOptions.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {actionData?.errors?.priority && (
                <p className="text-sm text-red-500">
                  {actionData.errors.priority[0]}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                name="tags"
                placeholder="work, personal, important"
              />
              {actionData?.errors?.tags && (
                <p className="text-sm text-red-500">
                  {actionData.errors.tags[0]}
                </p>
              )}
            </div>

            {/* Recurring Toggle */}
            <div className="flex items-center space-x-2">
              <Switch
                id="isRecurring"
                name="isRecurring"
                value={isRecurring ? 'true' : 'false'}
                checked={isRecurring}
                onCheckedChange={setIsRecurring}
              />
              <Label htmlFor="isRecurring">Recurring Reminder</Label>
            </div>

            {/* Frequency Selection (only shown if recurring) */}
            <div
              className={cn(
                'space-y-2',
                !isRecurring && 'hidden'
              )}
            >
              <Label htmlFor="frequency">Frequency</Label>
              <Select
                name="frequency"
                required={isRecurring}
                defaultValue="WEEKLY"
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
              {actionData?.errors?.frequency && (
                <p className="text-sm text-red-500">
                  {actionData.errors.frequency[0]}
                </p>
              )}
            </div>

            {/* Error Message */}
            {actionData?.error && (
              <p className="text-sm text-red-500">
                {actionData.error}
              </p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Creating...' : 'Create Reminder'}
            </Button>
          </Form>
        </div>
      </PageContent>
    </Page>
  );
}
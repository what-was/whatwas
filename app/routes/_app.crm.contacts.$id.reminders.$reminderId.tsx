import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react';
import { z } from 'zod';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { Checkbox } from '~/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ReminderFrequency, ReminderStatus } from '@prisma/client';
import { Page, PageContent, PageHeader } from '~/components/page';
import { formatDate } from '~/lib/utils';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().min(1, 'Due date is required'),
  isRecurring: z.enum(['true', 'false']).transform((val) => val === 'true'),
  frequency: z.nativeEnum(ReminderFrequency).optional(),
  status: z.nativeEnum(ReminderStatus),
});

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const { id: contactId, reminderId } = args.params;

  if (!contactId || !reminderId) {
    throw new Error('Contact ID and Reminder ID are required');
  }

  const reminder = await prisma.reminder.findFirst({
    where: {
      id: reminderId,
      userId,
    },
    include: {
      contacts: {
        select: {
          contact: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });

  if (!reminder) {
    throw new Response('Reminder not found', { status: 404 });
  }

  return json({
    reminder: {
      ...reminder,
      createdAt: reminder.createdAt.toISOString(),
      updatedAt: reminder.updatedAt.toISOString(),
      dueDate: reminder.dueDate.toISOString(),
    },
  });
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await requireUserId(args);
  const { id: contactId, reminderId } = args.params;

  if (!contactId || !reminderId) {
    throw new Error('Contact ID and Reminder ID are required');
  }

  const formData = Object.fromEntries(await args.request.formData());
  const intent = formData._action;

  // Handle special actions
  switch (intent) {
    case 'delete':
      await prisma.reminder.deleteMany({
        where: {
          id: reminderId,
          userId,
        },
      });
      return redirect(`/crm/contacts/${contactId}`);

    case 'complete':
      await prisma.reminder.update({
        where: {
          id: reminderId,
        },
        data: {
          status: ReminderStatus.COMPLETED,
        },
      });
      return redirect(`/crm/contacts/${contactId}`);

    case 'snooze':
      const snoozeDuration = parseInt(formData.snoozeDuration as string);
      const newDueDate = new Date();
      newDueDate.setHours(newDueDate.getHours() + snoozeDuration);

      await prisma.reminder.update({
        where: {
          id: reminderId,
        },
        data: {
          dueDate: newDueDate,
          status: ReminderStatus.SNOOZED,
        },
      });
      return redirect(`/crm/contacts/${contactId}`);
  }

  // Handle update
  try {
    const data = schema.parse(formData);
    const { isRecurring, frequency, ...reminderData } = data;

    await prisma.reminder.update({
      where: {
        id: reminderId,
      },
      data: {
        ...reminderData,
        dueDate: new Date(data.dueDate),
        isRecurring,
        frequency: isRecurring ? frequency : null,
      },
    });

    return redirect(`/crm/contacts/${contactId}`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return json({ errors: error.flatten().fieldErrors }, { status: 400 });
    }
    return json(
      { errors: { _form: ['An unexpected error occurred'] } },
      { status: 500 }
    );
  }
}

export default function ReminderDetails() {
  const { reminder } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const isPending = reminder.status === ReminderStatus.PENDING;
  const isOverdue = isPending && new Date(reminder.dueDate) < new Date();

  return (
    <Page>
      <PageHeader
        title={`Reminder: ${reminder.title}`}
        subtitle={`${reminder.contact ? `For ${reminder.contact.firstName} ${reminder.contact.lastName || ''}` : ''}`}
      />
      <PageContent>
        <div className="max-w-2xl space-y-6">
          {/* Status Banner */}
          <div
            className={`p-4 rounded-lg ${isOverdue
              ? 'bg-red-50 text-red-800'
              : reminder.status === ReminderStatus.COMPLETED
                ? 'bg-green-50 text-green-800'
                : reminder.status === ReminderStatus.SNOOZED
                  ? 'bg-yellow-50 text-yellow-800'
                  : 'bg-blue-50 text-blue-800'
              }`}
          >
            <p className="font-medium">
              Status: {reminder.status}
              {isOverdue && ' (OVERDUE)'}
            </p>
            <p className="text-sm mt-1">
              Due: {formatDate(reminder.dueDate)}
            </p>
          </div>

          {/* Quick Actions */}
          {isPending && (
            <div className="flex gap-4">
              <Form method="post">
                <input type="hidden" name="_action" value="complete" />
                <Button type="submit" variant="outline">
                  Mark as Complete
                </Button>
              </Form>

              <Form method="post" className="flex gap-2">
                <input type="hidden" name="_action" value="snooze" />
                <Select name="snoozeDuration" defaultValue="1">
                  <SelectTrigger>
                    <SelectValue placeholder="Snooze for..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="24">1 day</SelectItem>
                    <SelectItem value="72">3 days</SelectItem>
                    <SelectItem value="168">1 week</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" variant="outline">
                  Snooze
                </Button>
              </Form>
            </div>
          )}

          {/* Edit Form */}
          <Form method="post" className="space-y-6">
            <input type="hidden" name="status" value={reminder.status} />

            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  defaultValue={reminder.title}
                  aria-describedby="title-error"
                />
                {/* {actionData?.errors?.title && (
                  <p className="text-sm text-red-500" id="title-error">
                    {actionData.errors.title[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={3}
                  defaultValue={reminder.description || ''}
                  aria-describedby="description-error"
                />
                {/* {actionData?.errors?.description && (
                  <p className="text-sm text-red-500" id="description-error">
                    {actionData.errors.description[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="dueDate">Due Date and Time *</Label>
                <Input
                  type="datetime-local"
                  id="dueDate"
                  name="dueDate"
                  required
                  defaultValue={reminder.dueDate.slice(0, 16)}
                  min={new Date().toISOString().slice(0, 16)}
                  aria-describedby="dueDate-error"
                />
                {/* {actionData?.errors?.dueDate && (
                  <p className="text-sm text-red-500" id="dueDate-error">
                    {actionData.errors.dueDate[0]}
                  </p>
                )} */}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isRecurring"
                  name="isRecurring"
                  value="true"
                  defaultChecked={reminder.isRecurring}
                />
                <Label htmlFor="isRecurring">Recurring Reminder</Label>
              </div>

              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select name="frequency" defaultValue={reminder.frequency || undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(ReminderFrequency).map((freq) => (
                      <SelectItem key={freq} value={freq}>
                        {freq.charAt(0) + freq.slice(1).toLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* {actionData?.errors?.frequency && (
                  <p className="text-sm text-red-500" id="frequency-error">
                    {actionData.errors.frequency[0]}
                  </p>
                )} */}
              </div>
            </div>

            {actionData?.errors?._form && (
              <div className="rounded-md bg-red-50 p-4 mb-4">
                <p className="text-sm text-red-500">{actionData.errors._form[0]}</p>
              </div>
            )}

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
              </Button>
              <Button
                type="submit"
                name="_action"
                value="delete"
                variant="destructive"
                disabled={isSubmitting}
              >
                Delete Reminder
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </PageContent>
    </Page>
  );
}
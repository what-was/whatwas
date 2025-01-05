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
import { useState } from 'react';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().min(1, 'Due date is required'),
  isRecurring: z.enum(['true', 'false']).transform((val) => val === 'true'),
  frequency: z.nativeEnum(ReminderFrequency).optional(),
});

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const contactId = args.params.id;

  if (!contactId) {
    throw new Error('Contact ID is required');
  }

  const contact = await prisma.contact.findFirst({
    where: {
      id: contactId,
      userId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });

  if (!contact) {
    throw new Response('Contact not found', { status: 404 });
  }

  return json({ contact });
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await requireUserId(args);
  const contactId = args.params.id;

  if (!contactId) {
    throw new Error('Contact ID is required');
  }

  const formData = Object.fromEntries(await args.request.formData());

  try {
    const data = schema.parse(formData);
    const { isRecurring, frequency, ...reminderData } = data;

    await prisma.reminder.create({
      data: {
        ...reminderData,
        dueDate: new Date(data.dueDate),
        isRecurring,
        frequency: isRecurring ? frequency : null,
        status: ReminderStatus.PENDING,
        userId,
        contacts: {
          create: {
            contactId,
            userId,
          },
        },
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

export default function NewReminder() {
  const [isRecurring, setIsRecurring] = useState(false);
  const { contact } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  console.log({ isRecurring })
  return (
    <Page>
      <PageHeader
        title={`New Reminder for ${contact.firstName} ${contact.lastName || ''}`}
      />
      <PageContent>
        <div className="max-w-2xl">
          <Form method="post" className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  required
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
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(!!checked)}
                />
                <Label htmlFor="isRecurring">Recurring Reminder</Label>
              </div>
              {isRecurring && (
                <div>
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select name="frequency">
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
              )}
            </div>

            {actionData?.errors?._form && (
              <div className="rounded-md bg-red-50 p-4 mb-4">
                <p className="text-sm text-red-500">{actionData.errors._form[0]}</p>
              </div>
            )}

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Reminder...' : 'Create Reminder'}
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
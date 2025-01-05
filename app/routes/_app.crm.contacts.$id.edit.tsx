import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react';
import { z } from 'zod';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ContactCategory } from '@prisma/client';
import { Page, PageContent, PageHeader } from '~/components/page';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  phone: z.string().optional(),
  category: z.nativeEnum(ContactCategory),
  customCategory: z.string().optional(),
  notes: z.string().optional(),
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
  const intent = formData._action;

  if (intent === 'delete') {
    await prisma.contact.deleteMany({
      where: {
        id: contactId,
        userId,
      },
    });
    return redirect('/crm');
  }

  try {
    const data = schema.parse(formData);

    await prisma.contact.update({
      where: {
        id: contactId,
      },
      data,
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

export default function EditContact() {
  const { contact } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Page>
      <PageHeader title={`Edit ${contact.firstName} ${contact.lastName || ''}`} />
      <PageContent>
        <div className="max-w-2xl">
          <Form method="post" className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    defaultValue={contact.firstName}
                    aria-describedby="firstName-error"
                  />
                  {/* {actionData?.errors?.firstName && (
                    <p className="text-sm text-red-500" id="firstName-error">
                      {actionData.errors.firstName[0]}
                    </p>
                  )} */}
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    defaultValue={contact.lastName || ''}
                    aria-describedby="lastName-error"
                  />
                  {/* {actionData?.errors?.lastName && (
                    <p className="text-sm text-red-500" id="lastName-error">
                      {actionData.errors.lastName[0]}
                    </p>
                  )} */}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={contact.email || ''}
                  aria-describedby="email-error"
                />
                {/* {actionData?.errors?.email && (
                  <p className="text-sm text-red-500" id="email-error">
                    {actionData.errors.email[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  defaultValue={contact.phone || ''}
                  aria-describedby="phone-error"
                />
                {/* {actionData?.errors?.phone && (
                  <p className="text-sm text-red-500" id="phone-error">
                    {actionData.errors.phone[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select name="category" required defaultValue={contact.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(ContactCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* {actionData?.errors?.category && (
                  <p className="text-sm text-red-500" id="category-error">
                    {actionData.errors.category[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="customCategory">Custom Category</Label>
                <Input
                  id="customCategory"
                  name="customCategory"
                  defaultValue={contact.customCategory || ''}
                  aria-describedby="customCategory-error"
                />
                {/* {actionData?.errors?.customCategory && (
                  <p className="text-sm text-red-500" id="customCategory-error">
                    {actionData.errors.customCategory[0]}
                  </p>
                )} */}
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  defaultValue={contact.notes || ''}
                  aria-describedby="notes-error"
                />
                {/* {actionData?.errors?.notes && (
                  <p className="text-sm text-red-500" id="notes-error">
                    {actionData.errors.notes[0]}
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
                Delete Contact
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
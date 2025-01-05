import { redirect, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData, useSearchParams } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { ContactList } from '~/components/crm/contact-list';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { MaybeJsonified } from '~/types';
import { Contact } from '@prisma/client';
import { Page, PageContent, PageHeader } from '~/components/page';

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const url = new URL(args.request.url);
  const searchParam = url.searchParams.get('search');

  if (searchParam === '') {
    url.searchParams.delete('search');
    throw redirect(url.toString());
  }

  const search = searchParam || '';

  const contacts = await prisma.contact.findMany({
    where: {
      userId,
      OR: [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: { updatedAt: 'desc' },
    take: 50,
  });

  return { contacts };
}

export default function CRMIndex() {
  const { contacts } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  return (
    <Page>
      <PageHeader title="Contacts" />
      <PageContent>
        <div className="mb-6">
          <form method="get" className="flex gap-4">
            <Input
              type="search"
              name="search"
              placeholder="Search contacts..."
              className="max-w-sm"
              value={search}
              onChange={(e) => setSearchParams({ search: e.target.value })}
            />
            <Button type="submit">Search</Button>
          </form>
        </div>

        <ContactList
          contacts={contacts.map((contact) => ({
            ...contact,
            createdAt: contact.createdAt.toISOString(),
            updatedAt: contact.updatedAt.toISOString(),
          }))}
        />
      </PageContent>
    </Page>
  );
}

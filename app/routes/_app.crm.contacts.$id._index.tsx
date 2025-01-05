import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Page, PageContent, PageHeader } from '~/components/page';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { formatDate } from '~/lib/utils';
import { ContactCategory, ReminderStatus } from '@prisma/client';
import { Typography } from '~/components/ui/typography';

const categoryColors: Record<ContactCategory, string> = {
  FAMILY: 'bg-red-100 text-red-800',
  FRIENDS: 'bg-blue-100 text-blue-800',
  COLLEAGUES: 'bg-green-100 text-green-800',
  CLIENTS: 'bg-purple-100 text-purple-800',
  OTHERS: 'bg-gray-100 text-gray-800',
};

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
    include: {
      reminders: {
        where: {
          reminder: {
            status: ReminderStatus.PENDING,
          }
        },
        orderBy: {
          reminder: {
            dueDate: 'asc',
          }
        },
      },
      eventTags: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 5,
      },
    },
  });

  if (!contact) {
    throw new Response('Contact not found', { status: 404 });
  }

  return json({
    contact: {
      ...contact,
      createdAt: contact.createdAt.toISOString(),
      updatedAt: contact.updatedAt.toISOString(),
      reminders: contact.reminders.map(reminder => ({
        ...reminder,
        createdAt: reminder.createdAt.toISOString(),
      })),
      eventTags: contact.eventTags.map(tag => ({
        ...tag,
        createdAt: tag.createdAt.toISOString(),
      })),
    },
  });
}

export default function ContactDetails() {
  const { contact } = useLoaderData<typeof loader>();

  return (
    <Page>
      <PageHeader
        title={`${contact.firstName} ${contact.lastName || ''}`}
        subtitle={contact.email}
        actions={
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="edit">Edit Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="reminders/new">Add Reminder</Link>
            </Button>
          </div>
        }
      />

      <PageContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Details Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Contact Details</CardTitle>
                <Badge className={categoryColors[contact.category]}>
                  {contact.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {contact.phone && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                  <dd className="mt-1">📱 {contact.phone}</dd>
                </div>
              )}
              {contact.customCategory && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Custom Category</dt>
                  <dd className="mt-1">{contact.customCategory}</dd>
                </div>
              )}
              {contact.notes && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Notes</dt>
                  <dd className="mt-1 whitespace-pre-wrap">📝 {contact.notes}</dd>
                </div>
              )}
              {contact.socialLinks && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Social Links</dt>
                  <dd className="mt-1">
                    {Object.entries(contact.socialLinks as Record<string, string>).map(([platform, url]) => (
                      <Link
                        key={platform}
                        to={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:underline"
                      >
                        {platform}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Last Updated</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {formatDate(contact.updatedAt)}
                </dd>
              </div>
            </CardContent>
          </Card>

          {/* Reminders Card */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reminders</CardTitle>
              <CardDescription>
                Next {contact.reminders.length} reminder{contact.reminders.length === 1 ? '' : 's'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contact.reminders.length === 0 ? (
                <Typography variant="muted" size="sm">
                  No upcoming reminders
                </Typography>
              ) : (
                <div className="space-y-4">
                  {contact.reminders.map((reminder) => (
                    <div
                      key={reminder.id}
                      className="flex items-start justify-between border-b pb-4 last:border-0"
                    >
                      <div>
                        <Typography variant="h4">
                          {reminder.title}
                        </Typography>
                        {reminder.description && (
                          <Typography variant="muted" size="sm">
                            {reminder.description}
                          </Typography>
                        )}
                        <Typography variant="muted" size="sm">
                          Due: {formatDate(reminder.dueDate)}
                        </Typography>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <Link to={`reminders/${reminder.id}`}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Events Card */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Events</CardTitle>
              <CardDescription>Last 5 events with this contact</CardDescription>
            </CardHeader>
            <CardContent>
              {contact.eventTags.length === 0 ? (
                <Typography variant="muted" size="sm">
                  No recent events
                </Typography>
              ) : (
                <div className="space-y-4">
                  {contact.eventTags.map((tag) => (
                    <div key={tag.id} className="flex items-center justify-between">
                      <div>
                        <Link
                          to={`/events/${tag.eventId}`}
                          className="text-blue-600 hover:underline"
                        >
                          View Event
                        </Link>
                        <Typography variant="muted" size="sm">
                          {formatDate(tag.createdAt)}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </Page>
  );
}
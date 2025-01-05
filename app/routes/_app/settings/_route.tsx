import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { PageContent } from '~/components/page';
import { Typography } from '~/components/ui/typography';
import { requireUserId } from '~/lib/auth';
import { prisma } from '~/lib/db';
import { clerkClient } from '@clerk/express';
import { getCalendarClient } from '~/lib/google-calendar';


export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const userMeta = await prisma.userMeta.findUnique({
    where: { clerkId: userId },
    include: {
      googleCalendarIntegration: true,
    },
  });

  const calendarClient = await getCalendarClient(userId);

  const { data: calendar } = await calendarClient.calendars.get({ calendarId: 'burak@okbrk.com' })
  const { data: calendarList } = await calendarClient.calendarList.list();
  // console.log({ calendarList: calendarList.items, calendar })

  if (!calendar?.id) {
    throw new Error('Calendar not found');
  }

  const { data: eventsData } = await calendarClient.events.list({
    timeMin: new Date().toISOString(), // Today
    timeMax: new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString(), // Tomorrow
    calendarId: calendar.id,
  })
  const { items: events } = eventsData
  console.log({ events })

  if (!userMeta) {
    throw new Error('User not found');
  }

  const url = new URL(args.request.url);
  const success = url.searchParams.get('success');
  const error = url.searchParams.get('error');

  return {
    hasGoogleCalendar: !!userMeta.googleCalendarIntegration,
    success,
    error,
  };
}

export default function SettingsPage() {
  const { hasGoogleCalendar, success, error } = useLoaderData<typeof loader>();

  return (
    <PageContent>
      <div className="max-w-2xl mx-auto py-8">
        <Typography variant="h1" className="mb-8">
          Settings
        </Typography>

        <Card className="p-6">
          <Typography variant="h2" className="mb-4">
            Integrations
          </Typography>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Typography variant="h3" className="mb-1">
                  Google Calendar
                </Typography>
                <Typography variant="muted">
                  Sync your habits with Google Calendar
                </Typography>
              </div>

              {hasGoogleCalendar ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button asChild>
                  <Link to="/api/google/connect">Connect</Link>
                </Button>
              )}
            </div>

            {success === 'google-connected' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md">
                Successfully connected to Google Calendar!
              </div>
            )}

            {error === 'google-auth-failed' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md">
                Failed to connect to Google Calendar. Please try again.
              </div>
            )}
          </div>
        </Card>
      </div>
    </PageContent>
  );
}
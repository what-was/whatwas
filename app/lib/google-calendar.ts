import { clerkClient } from '@clerk/express';
import { google } from 'googleapis';
import { prisma } from '~/lib/db';
import { getSession } from '~/services/session.server';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export const getGoogleAccessToken = async (userId: string) => {
  const { data } = await clerkClient.users.getUserOauthAccessToken(userId, 'oauth_google');
  const googleAccessToken = data.find(token => token.provider === 'oauth_google');
  return googleAccessToken;
}


const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.APP_URL}/api/google/callback`
);

export async function getGoogleAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
}

export async function handleGoogleCallback(code: string, userId: string) {
  const { tokens } = await oauth2Client.getToken(code);

  await prisma.googleCalendarIntegration.create({
    data: {
      accessToken: tokens.access_token!,
      refreshToken: tokens.refresh_token!,
      expiresAt: new Date(tokens.expiry_date!),
      userMetaId: userId,
    },
  });
}

export async function getCalendarClient(userId: string) {
  const accessToken = await getGoogleAccessToken(userId);

  if (!accessToken?.token) {
    throw new Error('Google Calendar not connected');
  }

  // if (new Date() >= integration.expiresAt) {
  //   oauth2Client.setCredentials({
  //     refresh_token: integration.refreshToken,
  //   });

  //   const { credentials } = await oauth2Client.refreshAccessToken();

  //   await prisma.googleCalendarIntegration.update({
  //     where: { id: integration.id },
  //     data: {
  //       accessToken: credentials.access_token!,
  //       expiresAt: new Date(credentials.expiry_date!),
  //     },
  //   });
  // }

  oauth2Client.setCredentials({
    access_token: accessToken.token,
    // refresh_token: integration.refreshToken,
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export async function syncHabitToGoogleCalendar(habitId: string, userId: string) {
  const calendar = await getCalendarClient(userId);

  const habit = await prisma.habit.findUnique({
    where: { id: habitId },
    include: { events: true },
  });

  if (!habit) throw new Error('Habit not found');

  // Create or update events in Google Calendar
  for (const event of habit.events) {
    const eventDate = await prisma.date.findUnique({
      where: { id: event.dateId },
    });

    if (!eventDate) continue;

    const googleEvent = {
      summary: habit.name,
      description: habit.description,
      start: {
        dateTime: eventDate.date.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: new Date(eventDate.date.getTime() + 60 * 60 * 1000).toISOString(), // 1 hour duration
        timeZone: 'UTC',
      },
    };

    await calendar.events.insert({
      calendarId: 'primary',
      requestBody: googleEvent,
    });
  }
}

export async function createHabitEventInGoogleCalendar(
  habitId: string,
  dateId: string,
  userId: string
) {
  const calendar = await getCalendarClient(userId);

  const habit = await prisma.habit.findUnique({
    where: { id: habitId },
  });

  const date = await prisma.date.findUnique({
    where: { id: dateId },
  });

  if (!habit || !date) throw new Error('Habit or date not found');

  const googleEvent = {
    summary: habit.name,
    description: habit.description,
    start: {
      dateTime: date.date.toISOString(),
      timeZone: 'UTC',
    },
    end: {
      dateTime: new Date(date.date.getTime() + 60 * 60 * 1000).toISOString(), // 1 hour duration
      timeZone: 'UTC',
    },
  };

  await calendar.events.insert({
    calendarId: 'primary',
    requestBody: googleEvent,
  });
}
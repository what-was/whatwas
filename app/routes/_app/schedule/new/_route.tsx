import { redirect } from '@remix-run/node';
import type { ActionFunctionArgs } from '@remix-run/node';
import { HabitForm } from '~/components/habit-form';
import { prisma } from '~/lib/db';
import { HabitFrequency } from '@prisma/client';
import { getUserFromRequest } from '~/lib/auth';
import { Typography } from '~/components/ui/typography';
import { PageContent } from '~/components/page';
import { HabitSidebar } from '~/components/habit-sidebar';
import { syncHabitToGoogleCalendar } from '~/lib/google-calendar';

export async function action(args: ActionFunctionArgs) {
  const { id: userId } = await getUserFromRequest(args);
  if (!userId) {
    return redirect('/sign-in');
  }

  const formData = await args.request.formData();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const frequency = formData.get('frequency') as HabitFrequency;
  const reminderEnabled = formData.get('reminderEnabled') === 'on';
  const reminderTime = formData.get('reminderTime') as string;

  const userMeta = await prisma.userMeta.findUnique({
    where: { clerkId: userId },
  });

  if (!userMeta) {
    throw new Error('User not found');
  }

  const habit = await prisma.habit.create({
    data: {
      name,
      description,
      frequency,
      reminderEnabled,
      reminderTime: reminderTime ? new Date(`1970-01-01T${reminderTime}`) : null,
      userMetaId: userMeta.id,
    },
  });

  // Try to sync with Google Calendar if integration exists
  try {
    const hasGoogleIntegration = await prisma.googleCalendarIntegration.findUnique({
      where: { userMetaId: userMeta.id },
    });

    if (hasGoogleIntegration) {
      await syncHabitToGoogleCalendar(habit.id, userMeta.id);
    }
  } catch (error) {
    console.error('Failed to sync with Google Calendar:', error);
    // Continue without Google Calendar sync
  }

  return redirect('/schedule');
}

export default function NewHabitPage() {
  return (
    <HabitForm />
  );
}
import { json, redirect } from '@remix-run/node';
import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { useLoaderData, useSubmit } from '@remix-run/react';
import { HabitTracker, type Habit } from '~/components/habit-tracker';
import { Page, PageContent, PageHeader } from '~/components/page';
import { prisma } from '~/lib/db';
import { authenticatedRequest, getUserFromRequest } from '~/lib/auth';
import type { Habit as PrismaHabit, Event, Date } from '@prisma/client';

type HabitWithEvents = PrismaHabit & {
  events: (Event & {
    date: Date;
  })[];
};

export async function loader(args: LoaderFunctionArgs) {
  const { id: userId } = await getUserFromRequest(args);
  if (!userId) {
    return redirect('/sign-in');
  }

  const userMeta = await prisma.userMeta.findUnique({
    where: { clerkId: userId },
    include: {
      habits: {
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' },
        include: {
          events: {
            where: { deletedAt: null },
            include: {
              date: true,
            },
            orderBy: {
              date: { date: 'asc' },
            },
          },
        },
      },
    },
  });

  if (!userMeta) {
    throw new Error('User not found');
  }

  // Process habits data
  const habitsWithData = userMeta.habits.map((habit: HabitWithEvents) => {
    // Calculate streak and progress
    let streakCount = 0;
    let currentStreak = 0;
    let totalDays = 0;
    let completedDays = 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completionData = habit.events.map((event) => {
      const eventDate = event.date.date;
      const eventDateObj = new Date(eventDate);
      eventDateObj.setHours(0, 0, 0, 0);

      // Update streak
      if (eventDateObj.getTime() === today.getTime() - currentStreak * 86400000) {
        currentStreak++;
        if (currentStreak > streakCount) {
          streakCount = currentStreak;
        }
      } else {
        currentStreak = 0;
      }

      // Update progress
      if (habit.frequency === 'DAILY') {
        const daysDiff = Math.floor(
          (today.getTime() - eventDateObj.getTime()) / 86400000
        );
        if (daysDiff <= 30) {
          // Only count last 30 days for progress
          totalDays++;
          if (event) completedDays++;
        }
      }

      return {
        date: eventDate.toISOString(),
        count: 1,
        level: 4, // Maximum level for completed
      };
    });

    const progress = totalDays > 0 ? (completedDays / totalDays) * 100 : 0;

    return {
      id: habit.id,
      name: habit.name,
      description: habit.description,
      frequency: habit.frequency,
      customDays: habit.customDays,
      reminderEnabled: habit.reminderEnabled,
      reminderTime: habit.reminderTime,
      streakCount,
      progress,
      completionData,
    } satisfies Habit;
  });

  return { habits: habitsWithData };
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await authenticatedRequest(args);
  if (!userId) {
    throw redirect('/sign-in');
  }

  const formData = await args.request.formData();
  const habitId = formData.get('habitId') as string;

  const userMeta = await prisma.userMeta.findUnique({
    where: { clerkId: userId },
  });

  if (!userMeta) {
    throw new Error('User not found');
  }

  // Create or get today's date record
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateRecord = await prisma.date.findFirst({
    where: {
      date: today,
      userMeta: {
        id: userMeta.id,
      },
    },
  });

  const newDateRecord = dateRecord || await prisma.date.create({
    data: {
      date: today,
      userMeta: {
        connect: {
          id: userMeta.id,
        },
      },
    },
  });

  // Create event for habit completion
  await prisma.event.create({
    data: {
      date: {
        connect: {
          id: newDateRecord.id,
        },
      },
      userMeta: {
        connect: {
          id: userMeta.id,
        },
      },
      habit: {
        connect: {
          id: habitId,
        },
      },
    },
  });

  return { success: true };
}

export default function ScheduleIndexRoute() {
  const { habits } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleTrackHabit = (habitId: string) => {
    const formData = new FormData();
    formData.append('habitId', habitId);
    submit(formData, { method: 'post' });
  };

  return (
    <Page>
      <PageHeader title="Schedule" />
      <PageContent>
        <HabitTracker habits={habits} onTrackHabit={handleTrackHabit} />
      </PageContent>
    </Page>
  );
}


import { Link } from '@remix-run/react';
import { HabitFrequency } from '@prisma/client';
import { Progress } from '~/components/ui/progress';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { HabitCalendar } from './habit-calendar';
import { HabitCarousel } from './habit-carousel';
import { Activity } from 'react-activity-calendar';

export interface Habit {
  id: string;
  name: string;
  description?: string | null;
  frequency: HabitFrequency;
  customDays: number[];
  reminderEnabled: boolean;
  reminderTime?: Date | null;
  progress: number;
  streakCount: number;
  completionData?: {
    date?: string;
    count?: number;
    level?: number;
  }[];
}

interface HabitTrackerProps {
  habits: Habit[];
  onTrackHabit: (habitId: string) => void;
}

export function HabitTracker({ habits, onTrackHabit }: HabitTrackerProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Habits</h2>
        <Button asChild>
          <Link to="new">Create New Habit</Link>
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {habits.map((habit) => (
              <Card key={habit.id}>
                <CardHeader>
                  <CardTitle>{habit.name}</CardTitle>
                  {habit.description && (
                    <CardDescription>{habit.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{habit.progress}%</span>
                    </div>
                    <Progress value={habit.progress} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">
                        Streak: {habit.streakCount} days
                      </span>
                      <span className="text-sm">
                        Frequency: {habit.frequency.toLowerCase()}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => onTrackHabit(habit.id)}
                    className="w-full"
                  >
                    Track Today
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <div className="space-y-8">
            {habits.map((habit) => {
              const completionData = habit.completionData?.filter((data) => !!data.date && !!data.count && !!data.level) as Activity[];
              return (
                <div key={habit.id} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{habit.name}</h3>
                    <Button
                      onClick={() => onTrackHabit(habit.id)}
                      variant="outline"
                      size="sm"
                    >
                      Track Today
                    </Button>
                  </div>
                  <HabitCarousel data={mapIntoThisYear(completionData)} />
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}



const mapIntoThisYear = (completionData: Activity[]) => {
  const eventsMap = new Map<string, Activity>();
  completionData.forEach((event) => {
    eventsMap.set(new Date(event.date).toISOString().split('T')[0], event);
  });

  // Start from the first day of the year
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  return Array.from({ length: 365 }, (_, index) => {
    const date = new Date(startOfYear);
    date.setDate(date.getDate() + index);
    return eventsMap.get(date.toISOString().split('T')[0]) || {
      date: date.toISOString().split('T')[0],
      count: 0,
      level: 0,
    };
  });
};

import { ActivityCalendar, Activity } from 'react-activity-calendar';
import { Theme, useTheme } from 'remix-themes';

/**
 * @param data - The data to display in the calendar.
 * - date: The date of the activity.
 * - count: The number of times the habit was completed on the date.
 * - level: 0 - 4 -> 0: No activity, 1: Low achievement, 2: Medium achievement, 3: High achievement, 4: Very high achievement
 */
type HabitCalendarProps = {
  data: Activity[];
};

export function HabitCalendar({ data }: HabitCalendarProps) {
  const [theme] = useTheme();

  return (
    <ActivityCalendar
      data={data}
      labels={{
        totalCount: 'Total: {{count}}',
      }}
      colorScheme={theme === Theme.DARK ? 'dark' : 'light'}
      theme={{
        light: ['#fefefe', '#c4edde', '#7ac7c4', '#f73859', '#FFD700'],
        dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#FFD700'],
      }}
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
      weekStart={1}
    />
  );
}
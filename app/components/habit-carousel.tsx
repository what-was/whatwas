import { ActivityCalendar, Activity } from 'react-activity-calendar';
import { Theme, useTheme } from 'remix-themes';
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
import { useScroll } from "motion/react"


// TODO: convert date from ISO string to "YYYY-MM-DD"
const formatDate = (date: string) => {
  return date.split('T')[0]
}

export function HabitCarousel({ data }: { data: Activity[] }) {
  const [theme] = useTheme();

  const { scrollYProgress } = useScroll()

  return (
    <ScrollArea className='w-full py-4'>
      <ActivityCalendar
        data={data.map((activity) => ({
          date: formatDate(activity.date),
          count: activity.count,
          level: activity.level,
        }))}
        // labels={{
        //   totalCount: 'Total: {{count}}',
        // }}
        colorScheme={theme === Theme.DARK ? 'dark' : 'light'}
        theme={{
          light: ['#fefefe', '#c4edde', '#7ac7c4', '#f73859', '#FFD700'],
          dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#FFD700'],
        }}
        blockMargin={8}
        blockRadius={2}
        blockSize={24}
        weekStart={1}
        hideTotalCount
        hideColorLegend
        eventHandlers={{
          onClick: (event) => (activity) => {
            alert(JSON.stringify(activity));
          },
          onMouseEnter: (event) => (activity) => {
            console.log('on mouse enter', activity);
          },
        }}
      />

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
import { useUser } from '@clerk/remix';
import { Link, Outlet } from '@remix-run/react';
import { BreadcrumbItem } from '~/components/breadcrumbs';
import { HabitCalendar } from '~/components/habit-calendar';
import { Page, PageContent, PageHeader } from '~/components/page';

const ROUTE_PATH = '/habits';
export const handle = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumb: (match: any, isActive?: boolean) => {
    return (
      <BreadcrumbItem path={ROUTE_PATH} isActive={isActive}>
        Habits
      </BreadcrumbItem>
    );
  },
};

export default function HabitsRoute() {

  const { user } = useUser();
  const data = [
    {
      date: '2024-01-01',
      count: 0,
      level: 0,
    },
    {
      date: '2024-01-02',
      count: 5,
      level: 1,
    },
    {
      date: '2024-02-23',
      count: 10,
      level: 2,
    },
    {
      date: '2024-06-23',
      count: 15,
      level: 2,
    },
    {
      date: '2024-08-02',
      count: 50,
      level: 3,
    },
    {
      date: '2024-11-29',
      count: 100,
      level: 4,
    },
    {
      date: '2024-12-31',
      count: 11,
      level: 2,
    },

    {
      date: '2025-02-06',
      count: 1,
      level: 3,
    },
    {
      date: '2025-02-07',
      count: 1,
      level: 3,
    },
    {
      date: '2025-02-08',
      count: 11,
      level: 4,
    },
  ];



  return (
    <>
      <PageContent>
        <HabitCalendar data={data} />
      </PageContent>
    </>
  );
}


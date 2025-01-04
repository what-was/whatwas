import { useUser } from '@clerk/remix';
import { Link, Outlet } from '@remix-run/react';
import { BreadcrumbItem } from '~/components/breadcrumbs';
import { HabitCalendar } from '~/components/habit-calendar';
import { Page, PageContent, PageHeader } from '~/components/page';



export default function HabitsRoute() {

  const { user } = useUser();



  return (
    <>

    </>
  );
}


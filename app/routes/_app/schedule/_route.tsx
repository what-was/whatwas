import { Outlet } from '@remix-run/react';
import { BreadcrumbItem } from '~/components/breadcrumbs';
import { HabitCalendar } from '~/components/habit-calendar';
import { LayoutShell } from '~/components/layout';
import { PageContent, PageHeader } from '~/components/page';
import { Sidebar, SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { cn } from '~/lib/utils';

const ROUTE_PATH = '/schedule';
export const handle = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumb: (match: any, isActive?: boolean) => {
    return (
      <BreadcrumbItem path={ROUTE_PATH} isActive={isActive}>
        Schedule
      </BreadcrumbItem>
    );
  },
};

export default function HabitsRoute() {
  return (
    <>
      {/* <SidebarInset> */}
      {/* <PageContent className={
            cn(
              "relative flex flex-1 flex-col",
              "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
            )
          }> */}
      {/* </PageContent> */}
      {/* </SidebarInset> */}

      <Outlet />
    </>
  );
}
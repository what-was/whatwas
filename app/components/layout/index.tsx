// import { Breadcrumbs } from '~/components/breadcrumbs';
import { AppSidebar } from '~/components/layout/sidebar';
import { Separator } from '~/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar';
import { type MaybeJsonified } from '~/types';
import { AuthUser } from '~/lib/auth';
import { ScrollArea } from '~/components/ui/scroll-area';
import { useUser } from '@clerk/remix';
import { HabitSidebar } from '~/components/habit-sidebar';
import { Breadcrumbs } from '~/components/breadcrumbs';

export function LayoutShell({
  userId,
  children,
  rightChildren,
}: {
  userId?: string;
  children?: React.ReactNode;
  rightChildren?: React.ReactNode;
}) {
  const { user } = useUser();
  const canSeeSidebar = !!user || !!userId;
  return (
    <SidebarProvider>
      {canSeeSidebar && <AppSidebar user={user} />}
      <SidebarInset>
        {canSeeSidebar && (
          <nav className="flex h-16 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </nav>
        )}
        <ScrollArea className="flex flex-1 flex-col gap-4">
          {children}
        </ScrollArea>
      </SidebarInset>
      {rightChildren}
    </SidebarProvider>
  );
}

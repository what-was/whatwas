import type * as React from 'react';
import { Link } from '@remix-run/react';
import { Command } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';
import { siteConfig } from '~/lib/brand/config';
import { mainNav, secondaryNav } from '~/lib/routes';
import { cn } from '~/lib/utils';
import { NavMain } from './nav-main';
import { NavSecondary } from './nav-secondary';
import { NavUser, type NavUserProps } from './nav-user';
import { Logo } from '~/components/logo';

const AppHeader = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to="/dashboard">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <Logo size='sm' />
              {siteConfig.environment === 'development' && (
                <span className={cn('truncate text-xs text-orange-500')}>
                  {siteConfig.environment}
                </span>
              )}
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & NavUserProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <NavUser user={user} />

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNav} />
        <NavSecondary items={secondaryNav} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <AppHeader />
      </SidebarFooter>
    </Sidebar>
  );
}

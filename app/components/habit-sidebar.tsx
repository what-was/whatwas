import { Link } from '@remix-run/react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar'

export const HabitSidebar = () => {
  return (
    <Sidebar variant="inset" side='right'>
      <SidebarHeader>
        {/* <SidebarMenu>
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
        </SidebarMenu> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip="Habits"
              >
                <Link to="/habits">
                  Habits
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

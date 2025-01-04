import { Link } from '@remix-run/react'
import { HabitForm } from '~/components/habit-form'
import { PageContent } from '~/components/page'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar'
import { Typography } from '~/components/ui/typography'

export const HabitSidebar = () => {
  return (
    <Sidebar
      variant="inset"
      side='right'
      style={{
        "--sidebar-width": "24rem",
      }}
      className='min-h-fit h-auto bg-background'
    >
      <SidebarHeader>
        <SidebarGroup>
          <Typography variant="h2" as="h1">Create New Habit</Typography>
        </SidebarGroup>
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
          <HabitForm />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

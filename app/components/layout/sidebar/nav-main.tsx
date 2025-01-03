import { Link, useLocation } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '~/components/ui/sidebar';
import { useRoute } from '~/hooks/use-route';
import { isCurrentItemOrChildActive } from '~/lib/navigation';
import { type NavMenuItem } from '~/lib/routes';

export function NavMain({ items }: { items: NavMenuItem[] }) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items
          .filter((i) => !i.menuInvisible)
          .map((item) => {
            const { active, childrenActive } = isCurrentItemOrChildActive(
              item,
              location.pathname,
            );

            return (
              <Collapsible
                key={item.url}
                asChild
                defaultOpen={active || childrenActive}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={active}
                  >
                    <Link to={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>

                  {item.childrenInvisible ? null : item.items?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                          <ChevronRight />
                          <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items
                            ?.filter((i) => !i.menuInvisible)
                            .map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={
                                    isCurrentItemOrChildActive(
                                      subItem,
                                      location.pathname,
                                    ).active
                                  }
                                >
                                  <Link to={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

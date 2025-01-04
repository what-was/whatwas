import { Link } from '@remix-run/react';
import { DropdownMenuItem } from '~/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '~/components/ui/sidebar';
import { type MaybeJsonified } from '~/types';
import { AuthUser } from '~/lib/auth';
import { UserButton } from '@clerk/remix';
import { ModeToggle } from '~/components/mode-toggle';
import { Typography } from '~/components/ui/typography';
import { useTimelyString } from '~/hooks/use-timely-string';
import { useTime } from '~/hooks/use-time';

export type NavUserProps = { user?: MaybeJsonified<AuthUser> | null };

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar();

  const nameToUse = user?.fullName || `${user?.firstName} ${user?.lastName}` || user?.username;
  const emailToUse = user?.emailAddresses[0]?.emailAddress;
  const imageUrlToUse = user?.imageUrl;

  const time = useTime();
  const greeting = useTimelyString({
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Night',
  });

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <Typography variant='h3'>
            {greeting}
          </Typography>
          <Typography variant='h3'>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}

          </Typography>
        </div>
        <div>


          <UserButton />
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="border data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src={imageUrlToUse} alt={nameToUse || ''} />
                <AvatarFallback className="rounded-lg">
                  {nameToUse?.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{nameToUse}</span>
                <span className="truncate text-xs">{emailToUse}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src={imageUrlToUse} alt={nameToUse || ''} />
                  <AvatarFallback className="rounded-lg">
                    {nameToUse?.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{nameToUse}</span>
                  <span className="truncate text-xs">{emailToUse}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <MenuItem icon={Sparkles} title="Upgrade to Pro" />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <MenuItem icon={BadgeCheck} title="Account" />
              <MenuItem icon={CreditCard} title="Billing" />
              <MenuItem icon={Bell} title="Notifications" />
            </DropdownMenuGroup>
            <DropdownMenuSeparator /> */}
        {/* <MenuItem icon={LogOut} title="Log out"> */}
        {/* <DropdownMenuItem asChild>
              <ModeToggle />
            </DropdownMenuItem> */}
        {/* </MenuItem> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <MenuItem icon={LogOut} title="Log out" to="/auth/sign-out" /> */}
        {/* <DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </div>
  );
}

const MenuItem = ({
  icon,
  title,
  to,
}: {
  icon: React.ElementType;
  title: string;
  to?: string;
}) => {
  const Icon = icon;
  return (
    <DropdownMenuItem className="gap-2" asChild>
      <Link to={to || '#'}>
        <Icon className="size-4" />
        {title}
      </Link>
    </DropdownMenuItem>
  );
};

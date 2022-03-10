import { useState } from 'react';
import { useLocation } from 'remix';
import { Navbar, ScrollArea, ActionIcon, Box, NavbarProps } from '@mantine/core';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

import { Logo } from '../../../components/Logo';
import { UserNavbarItem } from '../../../components/UserNavbarItem';
import { APP_ROUTES } from '~/shared/routes';
import { SidebarRouteItem } from '~/components/SidebarRouteItem';

export default function Sidebar(props: Omit<NavbarProps, 'children'>) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const location = useLocation();
  const currentPathName = location.pathname.split('/')[1];

  return (
    <>
      <Navbar
        padding="sm"
        width={{ xs: 120, sm: 256, md: 320, lg: 360 }}
        sx={{ border: 0, backgroundColor: '#1f1f1f' }}
        {...props}
      >
        <Navbar.Section>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <ActionIcon ml="auto" onClick={() => setIsNavbarOpen(isOpen => !isOpen)}>
              {isNavbarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </ActionIcon>
          </Box>
        </Navbar.Section>

        <Navbar.Section grow component={ScrollArea} ml={-10} mr={-10} sx={{ paddingLeft: 10, paddingRight: 10 }}>
          {APP_ROUTES.map(route => {
            const isActive = currentPathName === route.path;
            return <SidebarRouteItem key={route.path} route={route} isActive={isActive} />;
          })}
        </Navbar.Section>
        <Navbar.Section>
          <UserNavbarItem />
        </Navbar.Section>
      </Navbar>
    </>
  );
}

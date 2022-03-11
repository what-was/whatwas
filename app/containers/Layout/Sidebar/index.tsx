import { useState } from 'react';
import { Navbar, ScrollArea, ActionIcon, Box, NavbarProps } from '@mantine/core';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

import { Logo } from '../../../components/Logo';
import { UserNavbarItem } from '../../../components/UserNavbarItem';
import { APP_ROUTES } from '~/shared/routes';
import { SidebarRouteItem } from '~/components/SidebarRouteItem';

export default function Sidebar(props: Omit<NavbarProps, 'children'>) {
  const [isSidebarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <Navbar
        padding="sm"
        width={isSidebarOpen ? { xs: 120, sm: 256, md: 320, lg: 360 } : { xs: 78 }}
        hidden={!isSidebarOpen}
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
              {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </ActionIcon>
          </Box>
        </Navbar.Section>

        <Navbar.Section
          component={ScrollArea}
          ml={-10}
          mr={-10}
          grow
          sx={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {APP_ROUTES.map(route => (
            <SidebarRouteItem key={route.path} route={route} isSidebarOpen={isSidebarOpen} />
          ))}
        </Navbar.Section>

        <Navbar.Section>
          <UserNavbarItem shouldRenderMeta={isSidebarOpen} />
        </Navbar.Section>
      </Navbar>
    </>
  );
}

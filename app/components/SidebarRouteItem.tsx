import { NavLink } from 'remix';
import { Box, Text, useMantineTheme } from '@mantine/core';

import { Route } from '~/shared/routes';

type RouteItemProps = {
  route: Route;
  isSidebarOpen?: boolean;
};

export function SidebarRouteItem({ route, isSidebarOpen = true }: RouteItemProps) {
  const { colors, colorScheme } = useMantineTheme();

  return (
    <NavLink
      to={route.path}
      style={{
        textDecoration: 'none',
      }}
    >
      {({ isActive }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            gap: '8px',
            width: '100%',
            padding: '.75rem 1rem',
            color: colorScheme === 'dark' ? 'white' : 'black',
            borderRadius: 8,
            textDecoration: 'none',
            listStyle: 'none',
            backgroundColor: isActive ? colors.dark[8] : 'transparent',
            transition: 'background-color 100ms ease-in-out',
            '&:hover': {
              color: 'blue',
              backgroundColor: colors.dark[9],
              cursor: 'pointer',
            },
          }}
        >
          <route.Icon />
          {isSidebarOpen && <Text size="sm">{route.displayName}</Text>}
        </Box>
      )}
    </NavLink>
  );
}

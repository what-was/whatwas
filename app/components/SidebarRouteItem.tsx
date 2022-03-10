import { Link } from 'remix';
import { Anchor, useMantineColorScheme } from '@mantine/core';

import { Route } from '~/shared/routes';

type RouteItemProps = {
  route: Route;
  isActive: boolean;
};

export function SidebarRouteItem({ route, isActive }: RouteItemProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Anchor
      component={Link}
      key={route.path}
      to={route.path}
      size="sm"
      sx={theme => ({
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        padding: '.75rem 1rem',
        color: colorScheme === 'dark' ? 'white' : 'black',
        borderRadius: 8,
        textDecoration: 'none',
        listStyle: 'none',
        backgroundColor: isActive ? theme.colors.dark[8] : 'transparent',
        transition: 'background-color 100ms ease-in-out',
        '&:hover': {
          backgroundColor: theme.colors.dark[9],
          cursor: 'pointer',
          textDecoration: 'none',
        },
      })}
    >
      {route.displayName}
    </Anchor>
  );
}

import { useMatches, useLocation } from 'remix';
import { Avatar, Box, Menu, Text } from '@mantine/core';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { signout } from '~/utils/supabase';

export function UserNavbarItem() {
  const location = useLocation();
  const matches = useMatches();
  const currentRouteData = matches.find(route => route.pathname === location.pathname);

  const user = currentRouteData?.data;

  return (
    <Menu
      position="right"
      placement="center"
      withinPortal
      sx={{
        width: '100%',
      }}
      control={
        <Box
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '.75rem 1rem',
            borderRadius: 8,
            '&:hover, &:focus-within': {
              cursor: 'pointer',
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          <Box
            sx={{
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Avatar radius="xl" src={user?.meta?.picture ?? user?.meta?.avatar_url} />
            <Box
              hidden={false} // TODO: find a way to hide on "sm" breakpoint
            >
              <Text size="sm" weight="bold">
                {user?.meta?.name}
              </Text>
              <Text size="xs">{user?.email}</Text>
            </Box>
          </Box>
          <ChevronRightIcon />
        </Box>
      }
      trigger="hover"
      delay={400}
    >
      <Menu.Item color="red" onClick={signout}>
        Logout
      </Menu.Item>
    </Menu>
  );
}

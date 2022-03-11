import { Avatar, Box, Menu, Text } from '@mantine/core';
import { ChevronRightIcon, SymbolIcon } from '@radix-ui/react-icons';

import { signout } from '~/utils/supabase';
import { useUser } from '~/hooks/useUser';
import { getInitials } from '~/utils/helper';

export function UserNavbarItem({ shouldRenderMeta }: { shouldRenderMeta?: boolean }) {
  const { user } = useUser();

  return (
    <Menu
      position="right"
      placement="center"
      withinPortal
      sx={{
        width: '100%',
      }}
      control={
        user === null ? (
          <SymbolIcon />
        ) : (
          <Box
            sx={theme => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: shouldRenderMeta ? '.75rem 1rem' : '.5rem',
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
              <Avatar
                radius="xl"
                src={user?.user_metadata?.picture ?? user?.user_metadata?.avatar_url}
                alt={user?.user_metadata?.name ?? user?.email}
              >
                {getInitials(user?.user_metadata?.name)}
              </Avatar>
              <Box
                hidden={!shouldRenderMeta} // TODO: find a way to hide on "sm" breakpoint
              >
                <Text size="sm" weight="bold">
                  {user?.user_metadata?.name}
                </Text>
                <Text size="xs">{user?.email}</Text>
              </Box>
            </Box>
            <Box hidden={!shouldRenderMeta}>
              <ChevronRightIcon />
            </Box>
          </Box>
        )
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

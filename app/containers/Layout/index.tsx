import { AppShell, Container } from '@mantine/core';

import Sidebar from './Sidebar';
import { NetworkPresence } from '~/components/NetworkStatus';
import { useUser } from '~/hooks';

export { Document } from './Document';

export function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  return (
    <AppShell
      navbar={user ? <Sidebar /> : undefined}
      styles={theme => ({
        main: {
          minHeight: '100vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[theme.colors.dark.length - 1] : theme.colors.gray[0],
        },
      })}
    >
      <Container
        fluid
        sx={{
          height: '100%',
        }}
      >
        {process.env.NODE_ENV === 'development' && <NetworkPresence />}
        {children}
      </Container>
    </AppShell>
  );
}

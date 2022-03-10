import { AppShell } from '@mantine/core';

import Header from './Header';
import Sidebar from './Sidebar';

export { Document } from './Document';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      // // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      // navbarOffsetBreakpoint="sm"
      // // fixed prop on AppShell will be automatically added to Header and Navbar
      // fixed
      navbar={<Sidebar />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[theme.colors.dark.length - 1] : theme.colors.gray[0],
        },
      })}
    >
      <>
        <Header />
        {children}
      </>
    </AppShell>
  );
}

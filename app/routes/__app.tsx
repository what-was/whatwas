import { json } from '@remix-run/node';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useLoaderData, NavLink, Outlet, useLocation } from '@remix-run/react';
import { getAuth } from '@clerk/remix/ssr.server';
import { AppShell, Button, useCollapse } from '@saas-ui/react';
import { NavItem, Sidebar, SidebarSection } from '@saas-ui/sidebar';
import { getUser, getUserMeta } from '~/services/user/user.server';
import { getSession } from '~/services/session.server';
import { Logo } from '~/components/logo';
import { authenticatedRequest } from '~/lib/utils/request';
import type { Location } from '@remix-run/react';
import type { DataFunctionArgs } from '@remix-run/node';

export async function updateUserMetaSession(request: Request) {
  const { userId } = await getAuth(request);
  if (!userId) return;

  const session = await getSession(request.headers.get('Cookie'));
  const userMetaInSession = session.get('userMeta');
  if (userMetaInSession) {
    return userMetaInSession;
  }

  const user = await getUserMeta(userId);

  return json({ user });
}

export async function loader(args: DataFunctionArgs) {
  const { userId } = await authenticatedRequest(args);
  const user = await getUser(userId);

  return json({ user });
}

const isActiveRoute = (route: string, location: Location) => {
  return location.pathname.startsWith(route);
};

export default function Layout() {
  const { user } = useLoaderData<typeof loader>();
  const sidebarBreakingPoint = useBreakpointValue(
    {
      sm: false,
      md: true,
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'sm',
    },
  );

  const { onToggle, isOpen } = useCollapse({
    defaultIsOpen: sidebarBreakingPoint,
  });
  const location = useLocation();

  return (
    <AppShell
      navbar={
        <Box
          as="header"
          display="flex"
          alignItems="center"
          py="2"
          px="4"
          gap="2"
        >
          <Logo />

          <Button size="xs" onClick={onToggle}>
            Collapse
          </Button>
        </Box>
      }
      sidebar={
        isOpen ? (
          <Sidebar
            position="sticky"
            top="40px"
            border={0}
            // display={{ sm: 'none', md: 'block' }}
          >
            <SidebarSection>
              <NavItem
                as={NavLink}
                to="/"
                // isActive={isActiveRoute('/', location)}
              >
                Home
              </NavItem>
              <NavItem
                as={NavLink}
                to={`/${user.username}/wallet`}
                isActive={isActiveRoute(`/${user.username}/wallet`, location)}
              >
                Wallet
              </NavItem>
            </SidebarSection>
          </Sidebar>
        ) : null
      }
    >
      <Box as="main" flex="1" py="2" px="4">
        <Outlet />
      </Box>
    </AppShell>
  );
}

// {/* <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//   {/* Navigation. */}
//   {user && (
//     // <Navigation
//     //   name={
//     //     user?.firstName
//     //       ? `${user.firstName} ${user.lastName}`
//     //       : 'Anonymous User'
//     //   }
//     //   email={user?.emailAddresses[0].emailAddress ?? ''}
//     //   image={user?.profileImageUrl ?? ''}
//     // />
//     <Sidebar />
//   )}

//   <Box
//     ml={{ base: 0, md: 60 }}
//     p="4"
//     bgColor={useColorModeValue('gray.50', 'gray.800')}
//   >
//     {/* Outlet. */}
//     <Outlet />
//   </Box>
// </Box>; */}

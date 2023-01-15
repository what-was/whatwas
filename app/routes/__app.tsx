import { json } from '@remix-run/node';
import { Box } from '@chakra-ui/react';
import { NavLink, Outlet, useLocation, Link } from '@remix-run/react';
import { AppShell, Button, useCollapse } from '@saas-ui/react';
import { NavItem, Sidebar, SidebarSection } from '@saas-ui/sidebar';
import { UserButton, useUser } from '@clerk/remix';
import { authenticatedRequest } from '~/lib/user.server';
import { Logo } from '~/components/logo';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { Location } from '@remix-run/react';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await authenticatedRequest(request);

  return json({ userId });
}

const isActiveRoute = (route: string, location: Location) => {
  return location.pathname.startsWith(route);
};

export default function Layout() {
  const { user } = useUser();

  const { onToggle, isOpen } = useCollapse({
    defaultIsOpen: true,
  });

  const location = useLocation();

  return (
    <AppShell
      navbar={
        <Box
          as="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py="2"
          px="4"
          gap="4"
          borderBlockEnd="1px solid"
          borderColor={'chakra-border-color'}
        >
          <Box display="flex" alignItems="center" gap="4">
            <Link to={REDIRECT_ROUTES.AUTHENTICATED}>
              <Logo />
            </Link>

            <Button size="xs" onClick={onToggle}>
              Collapse
            </Button>
          </Box>

          <UserButton afterSignOutUrl={REDIRECT_ROUTES.GUEST} />
        </Box>
      }
      sidebar={
        isOpen ? (
          <Sidebar position="sticky" top="40px">
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
                to={`/${user?.username}/wallet`}
                isActive={isActiveRoute(`/${user?.username}/wallet`, location)}
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

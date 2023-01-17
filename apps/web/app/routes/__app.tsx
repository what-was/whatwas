import { json } from '@remix-run/node';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink, Outlet, useLocation, Link } from '@remix-run/react';
import { AppShell, Button, useCollapse } from '@saas-ui/react';
import { NavItem, Sidebar, SidebarSection } from '@saas-ui/sidebar';
import { UserButton } from '@clerk/remix';
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
  return location.pathname === route;
};

export default function Layout() {
  const sidebarWidth = useBreakpointValue(
    { base: 0, md: '96' },
    { fallback: '96', ssr: true },
  );

  const { onToggle, isOpen } = useCollapse({
    defaultIsOpen: !!(sidebarWidth && Number(sidebarWidth) > 96) || true,
  });

  const location = useLocation();

  if (!sidebarWidth) {
    return (
      <Container
        h="full"
        gap="4"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        p="2"
      >
        <Box
          display="flex"
          alignItems="center"
          position="sticky"
          top={0}
          pb="2"
          zIndex="99"
          backgroundColor="gray.800"
          justifyContent="center"
        >
          <Flex flexGrow={2} justifyContent="center">
            <Link to={REDIRECT_ROUTES.AUTHENTICATED}>
              <Logo />
            </Link>
          </Flex>
          <UserButton afterSignOutUrl={REDIRECT_ROUTES.GUEST} />
        </Box>
        <Box
          flexGrow="1"
          maxH="calc(100vh - 40px)"
          overflowY="auto"
          w="full"
          py={2}
        >
          <Outlet />
        </Box>
      </Container>
    );
  }

  return (
    <AppShell
      sidebar={
        isOpen && sidebarWidth ? (
          <Sidebar h="full" w={sidebarWidth} isOpen={isOpen}>
            <SidebarSection>
              <Box
                display="flex"
                alignItems="center"
                gap="4"
                justifyContent="space-between"
              >
                <Link to={REDIRECT_ROUTES.AUTHENTICATED}>
                  <Logo />
                </Link>
                <UserButton afterSignOutUrl={REDIRECT_ROUTES.GUEST} />
              </Box>
            </SidebarSection>
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
                to={'/wallet'}
                isActive={isActiveRoute('/wallet', location)}
              >
                Wallet
              </NavItem>
            </SidebarSection>
            <SidebarSection>
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button onClick={onToggle}>Toggle</Button>
              </ButtonGroup>
            </SidebarSection>
          </Sidebar>
        ) : null
      }
    >
      <Box as="main" flex="1" py="2" px="4">
        {sidebarWidth && Number(sidebarWidth) <= 96 && !isOpen && (
          <Button onClick={onToggle} position="fixed" bottom="2">
            Sidebar
          </Button>
        )}
        {!isOpen ? (
          <Box mt="1" mb="4">
            <Link to={REDIRECT_ROUTES.AUTHENTICATED}>
              <Logo />
            </Link>
          </Box>
        ) : null}
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

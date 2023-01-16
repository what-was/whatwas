import { json } from '@remix-run/node';
import {
  Box,
  ButtonGroup,
  Divider,
  Heading,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink, Outlet, useLocation, Link } from '@remix-run/react';
import { AppShell, Button, useCollapse } from '@saas-ui/react';
import { NavItem, Sidebar, SidebarSection } from '@saas-ui/sidebar';
import { UserButton, useUser } from '@clerk/remix';
import { RxPlus } from 'react-icons/rx';
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
  const sidebarWidth = useBreakpointValue(
    { base: '40', md: '96' },
    { fallback: '96', ssr: true },
  );
  const { onToggle, isOpen } = useCollapse({
    defaultIsOpen: !!(sidebarWidth && Number(sidebarWidth) > 96) ?? true,
  });

  const location = useLocation();

  if (!user) {
    return null;
  }

  return (
    <AppShell
      sidebar={
        isOpen ? (
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
              {user.firstName && (
                <>
                  <Heading as="h3" size="md" fontWeight="normal">
                    Hi {user.firstName} 👋
                  </Heading>
                  <Divider my="4" />
                </>
              )}
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
                isActive={isActiveRoute(`/${user?.username}/wallet`, location)}
              >
                Wallet
              </NavItem>
            </SidebarSection>
            <SidebarSection>
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button>Save</Button>
                <IconButton aria-label="Add to friends" icon={<RxPlus />} />
                <Button onClick={onToggle}>Toggle</Button>
              </ButtonGroup>
            </SidebarSection>
          </Sidebar>
        ) : null
      }
    >
      <Box as="main" flex="1" py="2" px="4">
        {sidebarWidth && Number(sidebarWidth) <= 96 && !isOpen && (
          <Button onClick={onToggle} position="absolute" bottom="4">
            Toggle
          </Button>
        )}
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

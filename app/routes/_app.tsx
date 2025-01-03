import { data } from '@remix-run/node';
import { NavLink, Outlet, useLocation, Link } from '@remix-run/react';

import { UserButton, useUser } from '@clerk/remix';
import { authenticatedRequest } from '~/lib/auth';
import type { Location } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await authenticatedRequest(args);

  return data({ userId });
}

export default function Layout() {
  const { user } = useUser();
  if (!user) {
    return null;
  }


  return (
    <div
    // sidebar={
    //   (
    //     <Sidebar h="full" w={sidebarWidth} isOpen={isOpen}>
    //       <SidebarSection>
    //         <Box
    //           display="flex"
    //           alignItems="center"
    //           gap="4"
    //           justifyContent="space-between"
    //         >
    //           <Link to={REDIRECT_ROUTES.AUTHENTICATED}>
    //             <Logo />
    //           </Link>
    //           <UserButton afterSignOutUrl={REDIRECT_ROUTES.GUEST} />
    //         </Box>
    //       </SidebarSection>
    //       <SidebarSection>
    //         {user.firstName && (
    //           <>
    //             <Heading as="h3" size="md" fontWeight="normal">
    //               Hi {user.firstName} 👋
    //             </Heading>
    //             <Divider my="4" />
    //           </>
    //         )}
    //         <NavItem
    //           as={NavLink}
    //           to="/"
    //         // isActive={isActiveRoute('/', location)}
    //         >
    //           Home
    //         </NavItem>
    //       </SidebarSection>
    //       <SidebarSection>
    //         <ButtonGroup size="sm" isAttached variant="outline">
    //           <Button>Save</Button>
    //           <IconButton aria-label="Add to friends" icon={<RxPlus />} />
    //           <Button onClick={onToggle}>Toggle</Button>
    //         </ButtonGroup>
    //       </SidebarSection>
    //     </Sidebar>
    //   )
    // }
    >
      <main>
        <Outlet />
      </main>
    </div>
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

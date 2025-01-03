import { data } from '@remix-run/node';
import { NavLink, Outlet, useLocation, Link } from '@remix-run/react';

import { UserButton, useUser } from '@clerk/remix';
import { authenticatedRequest } from '~/lib/auth';
import type { Location } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { LayoutShell } from '~/components/layout';

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
    <LayoutShell>
      <Outlet />
    </LayoutShell>
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

import { data } from '@remix-run/node';
import { NavLink, Outlet, useLocation, Link, useRouteLoaderData } from '@remix-run/react';

import { UserButton, useUser } from '@clerk/remix';
import { authenticatedRequest } from '~/lib/auth';
import type { Location } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { LayoutShell } from '~/components/layout';
import { BreadcrumbItem } from '~/components/breadcrumbs';

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await authenticatedRequest(args);

  return data({ userId });
}

const ROUTE_PATH = '/dashboard';
export const handle = {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumb: (match: any, isActive?: boolean) => {
    return (
      <BreadcrumbItem path={ROUTE_PATH} isActive={isActive}>
        Dashboard
      </BreadcrumbItem>
    );
  },
};

export default function Layout() {
  const { userId } = useRouteLoaderData('root') as { userId?: string };

  return (
    <LayoutShell userId={userId}>
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

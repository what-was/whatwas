import { redirect, json } from '@remix-run/node';
import { useLoaderData, Outlet } from '@remix-run/react';
import { Box, Container, clsx } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { Navigation } from '~/components/navigation';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getUser } from '~/services/user/user.server';
import type { User } from '@clerk/remix/api.server';
import type { DataFunctionArgs } from '@remix-run/node';

interface LoaderData {
  user: User | null;
}

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  const url = new URL(request.url);

  // redirect to from query param
  const from = url.searchParams.get('from');

  // request is not from "/" and user is not authenticated
  if (!userId) {
    if (url.pathname !== '/') {
      return redirect(`${REDIRECT_ROUTES.GUEST}${from ? `?from=${from}` : ''}`);
    }

    return json<LoaderData>({ user: null });
  }

  const user = await getUser(request);

  return json<LoaderData>({ user });
}

export default function Layout() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Box className="h-screen">
      <Container
        size="lg"
        className={clsx('h-full', user && 'flex justify-between gap-6')}
      >
        <Navigation
          name={
            user?.firstName
              ? `${user.firstName} ${user.lastName}`
              : 'Anonymous User'
          }
          email={user?.emailAddresses[0].emailAddress ?? ''}
          image={user?.profileImageUrl ?? ''}
        />
        <Box className="grow">
          {/* Outlet. */}
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}

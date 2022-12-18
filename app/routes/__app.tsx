import { redirect, json } from '@remix-run/node';
import { useLoaderData, Outlet } from '@remix-run/react';
import { Box, Container, clsx } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { Navigation } from '~/components/navigation';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

interface LoaderData {
  userId: string | null;
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

    return json<LoaderData>({ userId: null });
  }

  return json<LoaderData>({ userId });
}

export default function Layout() {
  const { userId } = useLoaderData() as LoaderData;

  return (
    <Box className="h-screen">
      <Container
        size="lg"
        className={clsx('h-full', userId && 'flex justify-between gap-6')}
      >
        <Navigation user={userId} />

        <Box className="grow">
          {/* Outlet. */}
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}

import { redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { Container } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);

  // request is not from "/" and user is not authenticated
  if (userId) {
    return redirect(REDIRECT_ROUTES.AUTHENTICATED);
  }

  return null;
}

export default function Layout() {
  return (
    <Container
      size="lg"
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing.lg,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {/* Outlet. */}
      <Outlet />
    </Container>
  );
}

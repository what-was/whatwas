import { redirect, json } from '@remix-run/node';
import { useLoaderData, Outlet } from '@remix-run/react';
import { Box, Container } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { Navigation } from '~/components/navigation';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getUser, getUserMeta } from '~/services/user/user.server';
import { getSession } from '~/services/session.server';
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

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  const url = new URL(request.url);

  const from = url.searchParams.get('from');

  if (!userId) {
    if (url.pathname !== '/') {
      return redirect(`${REDIRECT_ROUTES.GUEST}${from ? `?from=${from}` : ''}`);
    }

    return json({ user: null });
  }

  const user = await getUser(userId);

  return json({ user });
}

export default function Layout() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Container
      size="lg"
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing.lg,
        height: '100%',
      })}
    >
      {/* Navigation. */}
      {user && (
        <Navigation
          name={
            user?.firstName
              ? `${user.firstName} ${user.lastName}`
              : 'Anonymous User'
          }
          email={user?.emailAddresses[0].emailAddress ?? ''}
          image={user?.profileImageUrl ?? ''}
        />
      )}

      <Box
        p="md"
        sx={(theme) => ({
          flex: 1,
        })}
      >
        {/* Outlet. */}
        <Outlet />
      </Box>
    </Container>
  );
}

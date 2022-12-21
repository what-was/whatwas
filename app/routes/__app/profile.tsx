import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Text } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { getUser } from '~/services/user/user.server';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  if (!userId) return redirect(REDIRECT_ROUTES.GUEST);

  const user = await getUser(userId);

  return json({ user });
}

export default function Profile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Box>
      <Text>{user.username}</Text>
    </Box>
  );
}

import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Text } from '@mantine/core';
import { getUser } from '~/services/user/user.server';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const user = await getUser(request);

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

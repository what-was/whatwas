import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Text } from '@chakra-ui/react';
import { getUserFromRequest } from '~/lib/user.server';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const user = await getUserFromRequest(request);

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

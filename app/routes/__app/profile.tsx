import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Text } from '@chakra-ui/react';
import { getUser } from '~/services/user/user.server';
import { authenticatedRequest } from '~/lib/utils/request';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader(args: DataFunctionArgs) {
  const { userId } = await authenticatedRequest(args);

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

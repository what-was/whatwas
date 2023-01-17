import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box, Text } from '@chakra-ui/react';
import { getUserFromRequest } from '~/lib/user.server';
import type { User } from '@clerk/clerk-sdk-node';
import type { DataFunctionArgs } from '@remix-run/node';

interface LoaderData {
  user: User;
}

export async function loader({ request }: DataFunctionArgs) {
  const user = await getUserFromRequest(request);

  return json({ user });
}

export default function Profile() {
  const { user } = useLoaderData<LoaderData>();

  return (
    <Box>
      <Text>{user.username}</Text>
    </Box>
  );
}

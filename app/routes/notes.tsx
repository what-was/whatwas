import { LoaderFunction, useLoaderData } from 'remix';
import { Button, Text, Title } from '@mantine/core';

import { authenticated } from '~/utils/authenticated';
import { signout } from '~/utils/supabase';
import type { UserMeta } from '~/types';

export const loader: LoaderFunction = async ({ request }) => {
  return authenticated(request);
};

export default function Index() {
  const serverUser = useLoaderData<UserMeta>();

  return (
    <div>
      <Title order={2}>Notes</Title>
      <Text>Hello {serverUser?.meta?.name ?? 'sa'}</Text>
      {serverUser && <p>Your serverUser id from client is: {serverUser.id}</p>}
      {serverUser && <Button onClick={signout}>logout</Button>}
    </div>
  );
}

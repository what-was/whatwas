import { LoaderFunction, json, useLoaderData } from 'remix';
import { Button, Text, Title } from '@mantine/core';

import { authenticated } from '~/utils/authenticated';

type UserMeta = {
  id: string;
  email: string;
  meta: {
    [key: string]: string;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  return authenticated(request, ({ user }) => {
    try {
      return json({
        id: user.id,
        email: user.email,
        meta: user.user_metadata,
      });
    } catch (error) {
      return json({ error });
    }
  });
};

export default function Index() {
  const serverUser = useLoaderData<UserMeta>();

  return (
    <div>
      <Title order={2}>Notes</Title>
      <Text>Hello {serverUser.meta.name}</Text>
      {serverUser && <p>Your serverUser id from client is: {serverUser.id}</p>}
      {serverUser && <Button>logout</Button>}
    </div>
  );
}

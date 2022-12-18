import { Title } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) return json({ user: null });

  return json({ userId });
};

export default function AppIndex() {
  return (
    <>
      <Title order={1}>Hi 👋</Title>
    </>
  );
}

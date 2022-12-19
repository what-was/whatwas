import { json, redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { Center } from '@mantine/core';
import { SignIn } from '@clerk/remix';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  if (userId) {
    return redirect(REDIRECT_ROUTES.AUTHENTICATED);
  }

  return json({});
}

export default function Login() {
  return (
    <Center sx={{ height: '100%' }}>
      {/* Example Privacy Message. */}
      <SignIn routing={'path'} path={'/login'} signUpUrl="/signup" />
    </Center>
  );
}

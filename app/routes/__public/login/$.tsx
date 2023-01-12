import { json, redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { Center } from '@chakra-ui/react';
import { SignIn } from '@clerk/remix';
import { useLoaderData } from '@remix-run/react';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);

  const url = new URL(request.url);
  const redirectTo = url.searchParams.get('redirectTo');
  console.log('redirectTo', redirectTo);

  if (userId) {
    return redirect(redirectTo ?? REDIRECT_ROUTES.AUTHENTICATED);
  }

  return json({ redirectTo });
}

export default function Login() {
  const { redirectTo } = useLoaderData<typeof loader>();
  return (
    <Center sx={{ height: '100%' }}>
      <SignIn
        routing={'path'}
        path={'/login'}
        signUpUrl="/signup"
        redirectUrl={redirectTo}
      />
    </Center>
  );
}

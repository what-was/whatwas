import { json, redirect } from '@remix-run/node';
import { Box } from '@chakra-ui/react';
import { useLoaderData } from '@remix-run/react';
import { SignIn } from '@clerk/remix';
import { unauthenticatedRequest } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/http';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader(args: DataFunctionArgs) {
  try {
    await unauthenticatedRequest(args);
  } catch (error: any) {
    if (error.redirectTo) {
      return redirect(error.redirectTo);
    }
  }

  return json({
    redirectTo: getRedirectTo(args.request),
  });
}

export default function Login() {
  const { redirectTo } = useLoaderData<typeof loader>();

  return (
    <Box
      h="full"
      w="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="grid" gap="4" gridTemplateColumns="1fr">
        <SignIn
          routing={'path'}
          path={'/login'}
          signUpUrl="/signup"
          redirectUrl={redirectTo}
        />
      </Box>
    </Box>
  );
}

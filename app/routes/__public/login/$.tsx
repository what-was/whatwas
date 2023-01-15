import { json } from '@remix-run/node';
import { Box } from '@chakra-ui/react';
import { useLoaderData } from '@remix-run/react';
import { SignIn } from '@clerk/remix';
import { unauthenticatedRequest } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/utils/http';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  await unauthenticatedRequest(request);

  return json({
    redirectTo: getRedirectTo(request),
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

import { json } from '@remix-run/node';
import { Box } from '@chakra-ui/react';
import { SignUp } from '@clerk/remix';
import { useLoaderData } from '@remix-run/react';
import { unauthenticatedRequest } from '~/lib/user.server';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader(args: DataFunctionArgs) {
  await unauthenticatedRequest(args);

  return json({
    redirectTo: REDIRECT_ROUTES.AUTH_SUCCESSFUL,
  });
}

export default function SignUpPage() {
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
        <SignUp
          routing="path"
          path="/signup"
          signInUrl="/login"
          afterSignUpUrl={redirectTo}
        />
      </Box>
    </Box>
  );
}

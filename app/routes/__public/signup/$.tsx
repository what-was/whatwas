import { json, redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { Box, Center } from '@chakra-ui/react';
import { SignUp } from '@clerk/remix';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  if (userId) {
    return redirect(REDIRECT_ROUTES.AUTHENTICATED);
  }

  return json({});
}

export default function SignUpPage() {
  return (
    <Box className="h-screen">
      <Center className="h-full">
        <SignUp
          routing="path"
          path={'/signup'}
          signInUrl="/login"
          afterSignUpUrl="/signup/success"
        />
      </Center>
    </Box>
  );
}

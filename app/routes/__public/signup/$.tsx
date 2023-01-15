import { json } from '@remix-run/node';
import { Box, Center } from '@chakra-ui/react';
import { SignUp } from '@clerk/remix';
import { useLoaderData } from '@remix-run/react';
import { unauthenticatedRequest } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/utils/http';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  await unauthenticatedRequest(request);

  return json({
    redirectTo: getRedirectTo(request),
  });
}

export default function SignUpPage() {
  const { redirectTo } = useLoaderData<typeof loader>();
  return (
    <Box className="h-screen">
      <Center className="h-full">
        <SignUp
          routing="path"
          path="/signup"
          signInUrl="/login"
          afterSignUpUrl={redirectTo}
        />
      </Center>
    </Box>
  );
}

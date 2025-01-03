import { data } from '@remix-run/node';
import { SignUp } from '@clerk/remix';
import { useLoaderData } from '@remix-run/react';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunctionArgs } from '@remix-run/node';

export default function SignUpPage() {
  // const { redirectTo } = useLoaderData<typeof loader>();
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <SignUp
      // routing="path"
      // path="/signup"
      // signInUrl="/login"
      // afterSignUpUrl={redirectTo}
      />
    </div>
  );
}

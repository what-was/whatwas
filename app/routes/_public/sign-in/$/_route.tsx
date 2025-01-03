import { data, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { SignIn } from '@clerk/remix';
import { unauthenticatedRequest } from '~/lib/auth';
import { getRedirectTo } from '~/lib/http';
import type { LoaderFunctionArgs } from '@remix-run/node';

export default function Login() {
  // const { redirectTo } = useLoaderData<typeof loader>();

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <SignIn />
    </div>
  );
}

import { data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUserFromRequest } from '~/lib/auth';
import type { User } from '@clerk/express';
import type { LoaderFunctionArgs } from '@remix-run/node';

interface LoaderData {
  user: User;
}

export async function loader(args: LoaderFunctionArgs) {
  const user = await getUserFromRequest(args);

  return data({ user });
}

export default function Profile() {
  const { user } = useLoaderData<LoaderData>();

  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
}

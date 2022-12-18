import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAuth } from '@clerk/remix/ssr.server';
import { getUser } from '~/services/user/user.server';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  const { userId } = await getAuth(request);
  const user = await getUser(userId);

  return json({ user });
}

export default function Account() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center px-6 md:h-full">
      <h3 className="text-3xl font-bold text-gray-200">Dashboard</h3>
      <div className="mb-2" />

      <div className="mb-12" />

      <div className="flex w-full max-w-2xl flex-col items-center md:flex-row md:justify-evenly">
        {/* User. */}
        {JSON.stringify(user)}
      </div>
    </div>
  );
}

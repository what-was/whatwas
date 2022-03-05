/* eslint-disable @typescript-eslint/no-unsafe-assignment */ // TODO: find a solution
import { LoaderFunction, json, useLoaderData } from 'remix';

import { supabase } from '~/utils/supabase';
import { authenticated } from '~/utils/authenticated';

type UserMeta = {
  id: string;
  email: string;
  meta: {
    avatar: string | null;
    name: string;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  return authenticated(request, ({ user }) => {
    try {
      return json({
        id: user.id,
        email: user.email,
        meta: {
          avatar: user.user_metadata.avatar,
          name: user.user_metadata.name,
        },
      });
    } catch (error) {
      return json({ error });
    }
  });
};

export default function Index() {
  const serverUser = useLoaderData<UserMeta>();

  return (
    <div>
      <h1>Dashboard</h1>
      Hello {serverUser.meta.name}
      {serverUser && <p>Your serverUser id from client is: {serverUser.id}</p>}
      {serverUser && <button onClick={() => supabase.auth.signOut()}>logout</button>}
    </div>
  );
}

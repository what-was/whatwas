import { Button } from '@mantine/core';
import { LoaderFunction, redirect } from 'remix';

import { getLoggedInUser } from '~/utils/sessions.server';
import { supabase } from '~/utils/supabase';

export const loader: LoaderFunction = async ({ request }) => {
  const { user } = await getLoggedInUser(request);
  if (user) {
    return redirect('/dashboard');
  }

  return null;
};

export default function Login() {
  const handleClickGoogleSignup = async () => {
    await supabase.auth.signIn({ provider: 'google' });
  };

  return (
    <div>
      <p>Log in to your app</p>
      <Button onClick={handleClickGoogleSignup}>Log in with Google</Button>
    </div>
  );
}

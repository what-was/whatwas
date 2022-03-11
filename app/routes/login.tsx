import { Box, Button, Center, Text } from '@mantine/core';
import { LinksFunction, LoaderFunction, MetaFunction, redirect } from 'remix';

import { getLoggedInUser } from '~/utils/sessions.server';
import { supabase } from '~/utils/supabase';
import { getSeo } from '~/utils/seo';

// No need for route data? Get meta and links in one call.
const [seoMeta, seoLinks] = getSeo({
  title: 'Login',
});

export const meta: MetaFunction = () => ({ ...seoMeta });
export const links: LinksFunction = () => [...seoLinks];

export const loader: LoaderFunction = async ({ request }) => {
  const { user } = await getLoggedInUser(request);
  if (user) {
    return redirect('notes');
  }

  return null;
};

export default function Login() {
  const handleClickGoogleSignup = async () => {
    await supabase.auth.signIn({ provider: 'google' });
  };

  return (
    <Center sx={{ height: '100%' }}>
      <Box>
        <Button onClick={handleClickGoogleSignup}>Log in with Google</Button>
      </Box>
    </Center>
  );
}

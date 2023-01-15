import { redirect } from '@remix-run/node';
import { initializeUserMeta } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/utils/http';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const isInitialized = await initializeUserMeta(request);
  console.log('isInitialized', isInitialized);
  const redirectTo = getRedirectTo(
    request,
    isInitialized ? REDIRECT_ROUTES.AUTHENTICATED : REDIRECT_ROUTES.GUEST,
  );

  return redirect(redirectTo);
};

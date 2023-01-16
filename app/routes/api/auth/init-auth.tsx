import { redirect } from '@remix-run/node';
import { authenticatedRequest, initializeUserMeta } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/http';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await authenticatedRequest(request);
  const redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);
  await initializeUserMeta(userId, redirectTo);
  return redirect(redirectTo);
};

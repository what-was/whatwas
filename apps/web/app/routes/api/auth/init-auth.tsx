import { redirect } from '@remix-run/node';
import { authenticatedRequest, initializeUserMeta } from '~/lib/user.server';
import { getRedirectTo } from '~/lib/http';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const { userId } = await authenticatedRequest(args);
  const redirectTo = getRedirectTo(
    args?.request,
    REDIRECT_ROUTES.AUTHENTICATED,
  );
  await initializeUserMeta(userId, redirectTo);
  return redirect(redirectTo);
};

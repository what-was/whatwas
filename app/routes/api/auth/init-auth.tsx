import { redirect } from '@remix-run/node';
import { requireUserId, initializeUserMeta } from '~/lib/auth';
import { getRedirectTo } from '~/lib/http';
import { REDIRECT_ROUTES } from '~/lib/constants';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const { userId } = await requireUserId(args);
  const redirectTo = getRedirectTo(args, REDIRECT_ROUTES.AUTHENTICATED);
  await initializeUserMeta(userId, redirectTo);
  return redirect(redirectTo);
};

import { redirect } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getUserMeta, initializeUserMeta } from '~/services/user/user.server';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect(REDIRECT_ROUTES.GUEST);
  }

  const userMeta = await getUserMeta(userId);
  if (!userMeta) {
    await initializeUserMeta(userId);
    return redirect(REDIRECT_ROUTES.AUTHENTICATED);
  }

  return redirect(REDIRECT_ROUTES.AUTHENTICATED);
};

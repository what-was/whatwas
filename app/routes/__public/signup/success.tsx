import { redirect } from '@remix-run/node';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { getUserMeta, initializeUserMeta } from '~/services/user/user.server';
import { authenticatedRequest } from '~/lib/utils/request';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const { userId } = await authenticatedRequest(args);

  const userMeta = await getUserMeta(userId);
  if (!userMeta) {
    await initializeUserMeta(userId);
    return redirect(REDIRECT_ROUTES.AUTHENTICATED);
  }

  return redirect(REDIRECT_ROUTES.AUTHENTICATED);
};

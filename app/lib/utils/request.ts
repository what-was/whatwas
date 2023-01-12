import { getAuth } from '@clerk/remix/ssr.server';
import { redirect } from '@remix-run/node';
import { REDIRECT_ROUTES } from '../constants';
import type { DataFunctionArgs } from '@remix-run/node';

export const authenticatedRequest = async ({ request }: DataFunctionArgs) => {
  const { href } = new URL(request.url);
  try {
    const { userId } = await getAuth(request);
    if (!userId) {
      throw redirect(`${REDIRECT_ROUTES.GUEST}?redirectTo=${href}`);
    }

    return { userId };
  } catch (error) {
    throw redirect(`${REDIRECT_ROUTES.GUEST}?redirectTo=${href}`);
  }
};

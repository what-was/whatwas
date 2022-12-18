// import { getAuth } from '@clerk/remix/ssr.server';
import { redirect } from '@remix-run/node';
import { REDIRECT_ROUTES } from '~/lib/constants';
// import { createUser } from '~/services/user/user.server';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  console.log('request', request);
  // const { userId } = await getAuth(request);
  // if (!userId) {
  //   return redirect(REDIRECT_ROUTES.GUEST);
  // }

  // try {
  //   await createUser({
  //     userId,
  //   });
  // } catch (error: any) {}

  return redirect(REDIRECT_ROUTES.AUTHENTICATED);
};

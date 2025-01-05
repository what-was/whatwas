import { redirect, type LoaderFunctionArgs } from '@remix-run/node';
import { getGoogleAuthUrl } from '~/lib/google-calendar';
import { requireUserId } from '~/lib/auth';

export async function loader(args: LoaderFunctionArgs) {
  await requireUserId(args);
  const authUrl = await getGoogleAuthUrl();
  return redirect(authUrl);
}
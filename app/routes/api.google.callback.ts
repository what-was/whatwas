import { redirect, type LoaderFunctionArgs } from '@remix-run/node';
import { handleGoogleCallback } from '~/lib/google-calendar';
import { requireUserId } from '~/lib/auth';

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const url = new URL(args.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return redirect('/settings?error=google-auth-failed');
  }

  try {
    await handleGoogleCallback(code, userId);
    return redirect('/settings?success=google-connected');
  } catch (error) {
    console.error('Google Calendar connection error:', error);
    return redirect('/settings?error=google-auth-failed');
  }
}
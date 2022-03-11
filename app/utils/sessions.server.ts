import { User } from '@supabase/supabase-js';
import { createCookieSessionStorage, json, redirect } from 'remix';

import { supabase } from './supabase';
import { SESSION_KEYS } from './contants';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

// TODO: Get these options from env
export const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: 'APP_SESSION',
    secure: true,
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

/**
 * Create a cookie with that stores the provided `accessToken`
 * @param accessToken The user's JWT, stored in the user's session
 * @returns Response that sets cookie
 */
export async function createUserSession(accessToken: string) {
  // Get/create a cookie from the cookie store
  const session = await getSession();

  // Set the accessToken property in the cookie
  session.set(SESSION_KEYS.accessToken, accessToken);

  // Redirect user to notes page and set the cookie in the client
  return redirect('/notes', { headers: { 'Set-Cookie': await commitSession(session) } });
}

/**
 * Gets a session cookie from the passed in request
 */
export function getUserSession(request: Request) {
  return getSession(request.headers.get('Cookie'));
}

export async function getUserAccessToken(request: Request) {
  const session = await getUserSession(request);
  return session.get(SESSION_KEYS.accessToken);
}

/**
 * Takes the JWT stored in the passed in session cookie and then fetches and returns the
 * appropriate user details via the supabase api if token is valid, or null otherwise.
 * @returns User for which accessToken is provided
 */
export async function getLoggedInUser(request: Request): Promise<LoggedInUserResponse> {
  const session = await getUserSession(request);

  const accessToken = session.get(SESSION_KEYS.accessToken);
  if (!accessToken || typeof accessToken !== 'string') return { user: null, token: null };
  const { user } = await supabase.auth.api.getUser(accessToken);
  return { user, token: accessToken };
}

/** Destroy the session cookie  */
export async function clearCookie(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/', { headers: { 'Set-Cookie': await destroySession(session) } });
}

type LoggedInUserResponse = {
  user: User | null;
  token: string | null;
};

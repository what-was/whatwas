import { redirect } from 'remix';
import { User } from '@supabase/supabase-js';

import type { ThrownResponse } from 'remix';

import { commitSession, getLoggedInUser, getUserSession } from '~/utils/sessions.server';

export type Policy<PolicyResult> = (
  request: Request,
  callback?: (input: PolicyResult) => Promise<ThrownResponse> | Response | null,
) => Promise<ThrownResponse | Response | null>;

export const authenticated: Policy<{ user: User; token: string }> = async (request, callback) => {
  const session = await getUserSession(request);
  try {
    const { user, token } = await getLoggedInUser(request);

    if (!user || !token) {
      return redirect('/login');
    }

    if (callback) {
      // if the user is authenticated we call the callback passing the expected input
      return await callback({ user, token });
    }

    return null;
  } catch {
    // any error in the policy should consider the user is not authenticated
    // so in this case we don't need to handle specific errors, the callback
    // should handle its own errors and return a response
    session.set('origin', request.url);
    session.unset('accessToken');
    const cookie = await commitSession(session);
    return redirect('/login', { headers: { 'Set-Cookie': cookie } });
  }
};

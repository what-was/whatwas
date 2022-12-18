import { authenticator } from '~/services/auth/config.server';
import type { DataFunctionArgs } from '@remix-run/node';

export async function action({ request, params }: DataFunctionArgs) {
  return await authenticator.authenticate(params.provider as string, request, {
    successRedirect: '/account',
    failureRedirect: '/login',
  });
}

export default function AuthProviderResource() {
  return <div>Whops! You should have been redirected.</div>;
}

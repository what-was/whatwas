import { authenticator } from '~/services/auth/config.server';
import type { DataFunctionArgs } from '@remix-run/node';

export async function action({ request }: DataFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: '/' });
}

export default function LogoutResource() {
  return <div>Whops! You should have been redirected.</div>;
}

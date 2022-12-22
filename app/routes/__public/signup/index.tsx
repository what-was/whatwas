import { useFetcher, useActionData } from '@remix-run/react';
import { AuthenticationForm } from '~/containers/auth/signup';
import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {};

export default function SignupPage() {
  const errors = useActionData<typeof action>();
  const fetcher = useFetcher();

  return <AuthenticationForm fetcher={fetcher} errors={errors} />;
}

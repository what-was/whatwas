import { useUser } from '@clerk/remix';
import { Outlet, Link } from '@remix-run/react';
import { Button } from '@saas-ui/react';
import { REDIRECT_ROUTES } from '~/lib/constants';
// export const loader: LoaderFunction = async ({ request }) => {

//   return json({ userId });
// };

export default function AppIndex() {
  const { user } = useUser();
  return (
    <>
      {!user?.id ? (
        <Button as={Link} to={REDIRECT_ROUTES.GUEST} prefetch="intent">
          Login
        </Button>
      ) : (
        <Button as={Link} to={`wallet`} prefetch="intent">
          Wallet
        </Button>
      )}
      <Outlet />
    </>
  );
}

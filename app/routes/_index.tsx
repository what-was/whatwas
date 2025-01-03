import { useUser } from '@clerk/remix';
import { Outlet, Link } from '@remix-run/react';
import { Logo } from '~/components/logo';
import { Button } from '~/components/ui/button';
import { REDIRECT_ROUTES } from '~/lib/constants';
// export const loader: LoaderFunction = async ({ request }) => {

//   return json({ userId });
// };

export default function AppIndex() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <>
        <Logo />
      </>
      {!user?.id ? (
        <Button asChild>
          <Link to={REDIRECT_ROUTES.GUEST} prefetch="intent">
            Login
          </Link>
        </Button>
      ) : (
        <Button asChild>
          <Link to={`${user.username}`} prefetch="intent">
            {user.username}
          </Link>
        </Button>
      )}
      <Outlet />
    </div>
  );
}

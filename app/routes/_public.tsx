import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export async function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

import { Outlet } from '@remix-run/react';
import { Container } from '@chakra-ui/react';
import type { DataFunctionArgs } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
  return null;
}

export default function Layout() {
  return (
    <Container size="lg" height="100vh">
      <Outlet />
    </Container>
  );
}

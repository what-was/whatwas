import { Container } from '@chakra-ui/react';

export function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

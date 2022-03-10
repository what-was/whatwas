import { Container } from '@mantine/core';

import { NetworkPresence } from '~/components/NetworkStatus';

type Header = {
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export default function Header({ children, leftContent, rightContent }: Header) {
  return (
    <Container
      padding={0}
      fluid
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>{leftContent}</div>
      {children}
      <div>
        {process.env.NODE_ENV === 'development' && <NetworkPresence />}
        {rightContent}
      </div>
    </Container>
  );
}

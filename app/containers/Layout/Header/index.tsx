import { Container } from '@mantine/core';

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
        position: 'sticky',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>{leftContent}</div>
      {children}
      <div>{rightContent}</div>
    </Container>
  );
}

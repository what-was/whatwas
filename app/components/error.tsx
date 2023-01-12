import { Text, Button, Container, Box } from '@chakra-ui/react';
import type { ButtonProps, TextProps } from '@chakra-ui/react';

type ErrorBoundaryProps = {
  status?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  descriptionProps?: TextProps;
  button?: {
    label: string;
  } & ButtonProps;
};

const defaultProps: ErrorBoundaryProps = {
  status: 500,
  title: 'Internal Server Error',
  description:
    "Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page.",
};

export function ErrorFullscreen(props: ErrorBoundaryProps) {
  const { status, title, description } = { ...defaultProps, ...props };

  return (
    <Container>
      <div>{status}</div>
      <Text>{title}</Text>
      <Text size="lg" align="center">
        {description}
      </Text>
      <Box>
        <Button variant="subtle" size="md" color="dark">
          Refresh the page
        </Button>
      </Box>
    </Container>
  );
}

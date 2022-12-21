import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core';
import type { ButtonProps, TitleProps, TextProps } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 120,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.red[6],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

type ErrorBoundaryProps = {
  status?: number;
  title?: React.ReactNode;
  titleProps?: TitleProps;
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
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{status}</div>
        <Title className={classes.title}>{title}</Title>
        <Text size="lg" align="center" className={classes.description}>
          {description}
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md" color="dark">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}

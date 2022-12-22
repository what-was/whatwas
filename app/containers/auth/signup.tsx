import { useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import type { FetcherWithComponents } from '@remix-run/react';

// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

interface AuthenticationFormProps {
  errors?: Record<string, string> | null;
  fetcher: FetcherWithComponents<any>;
}
export function AuthenticationForm({
  errors,
  fetcher,
}: AuthenticationFormProps) {
  const [type, toggle] = useToggle(['login', 'register']);

  console.log('transition', fetcher.submission);

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group> */}

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <fetcher.Form>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              name="name"
              placeholder="Your name"
              minLength={3}
            />
          )}

          <TextInput
            required
            label="Email"
            name="email"
            placeholder="hello@whatwas.app"
            error={errors?.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            error={
              errors?.password &&
              'Password should include at least 6 characters'
            }
          />

          {type === 'register' && (
            <Checkbox label="I accept terms and conditions" />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </fetcher.Form>
    </Paper>
  );
}

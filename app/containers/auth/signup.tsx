import {
  Button,
  Divider,
  Checkbox,
  Stack,
  Heading,
  Input,
  Box,
  Card,
  CardHeader,
} from '@chakra-ui/react';
import { upperFirst } from 'lodash';
import { PasswordInput } from '~/components/inputs/password';
import { useToggle } from '~/lib/hooks/useToggle';
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

  return (
    <Card>
      <CardHeader>
        <Heading as="h2">
          {type === 'login' ? 'Login' : 'Create account'}
        </Heading>
      </CardHeader>

      {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group> */}

      <Divider
        // label="Or continue with email" labelPosition="center"
        my="lg"
      />

      <fetcher.Form>
        <Stack>
          {type === 'register' && (
            <Input name="name" placeholder="Your name" minLength={3} />
          )}

          <Input
            name="email"
            placeholder="hello@whatwas.app"
            // error={errors?.email && 'Invalid email'}
            required
          />

          <PasswordInput
            name="password"
            error={
              errors?.password &&
              'Password should include at least 6 characters'
            }
          />

          {type === 'register' && (
            <Checkbox>I accept terms and conditions</Checkbox>
          )}
        </Stack>

        <Box justifyContent="space-between" mt="xl">
          <Button
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Button>
          <Button type="submit">{upperFirst(type)}</Button>
        </Box>
      </fetcher.Form>
    </Card>
  );
}

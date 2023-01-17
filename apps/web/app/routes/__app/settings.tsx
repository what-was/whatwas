import { Box, Button, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { getUser, getUserMeta, authenticatedRequest } from '~/lib/user.server';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';

interface ThemePreferenceOptionProps {
  label: React.ReactNode;
  value: 'dark' | 'light' | 'auto';
}

const ThemePreferenceOptions: ThemePreferenceOptionProps[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'auto' },
];

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await authenticatedRequest(request);

  const clerkUser = await getUser(userId);
  const userMeta = await getUserMeta(userId);

  const user = {
    ...clerkUser,
    ...userMeta,
  };

  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  // const {  } = await authenticatedRequest(request);

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const themePreference = formData.get('themePreference');

    if (typeof themePreference === 'string') {
      const themePreferenceOption = ThemePreferenceOptions.find(
        (option) => option.value === themePreference,
      );

      if (themePreferenceOption) {
        // await updateUserMeta(userId, {
        //   themePreference: themePreferenceOption.value,
        // });
        return redirect(`/settings`);
      }
    }
  }

  return null;
};

export default function SettingsPage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Text as="h2" size="md">
        Settings
      </Text>

      <GridItem colSpan={2}>
        <Form method="patch">
          <Box display="flex" flexDir="column" gap={4}>
            <Select
              name="themePreference"
              placeholder="Theme Mode"
              defaultValue={user.themePreference}
            >
              {ThemePreferenceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

            <Button color="green" type="submit">
              Save
            </Button>
          </Box>
        </Form>
      </GridItem>
    </Grid>
  );
}

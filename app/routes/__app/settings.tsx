import { Box, Button, Grid, Select, Title } from '@mantine/core';
import { getAuth } from '@clerk/remix/ssr.server';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { REDIRECT_ROUTES } from '~/lib/constants';
import {
  getUser,
  getUserMeta,
  updateUserMeta,
} from '~/services/user/user.server';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import type { SelectItem } from '@mantine/core';
import type { ThemePreference } from '@prisma/client';

interface ThemePreferenceOptionProps extends SelectItem {
  value: ThemePreference;
}

const ThemePreferenceOptions: ThemePreferenceOptionProps[] = [
  { label: 'Light', value: 'LIGHT' },
  { label: 'Dark', value: 'DARK' },
  { label: 'System', value: 'AUTO' },
];

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) return redirect(REDIRECT_ROUTES.GUEST, { status: 401 });

  const clerkUser = await getUser(userId);
  const userMeta = await getUserMeta(userId);

  const user = {
    ...clerkUser,
    ...userMeta,
  };

  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) return redirect(REDIRECT_ROUTES.GUEST, { status: 401 });

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const themePreference = formData.get('themePreference');

    // validate themePreference
    if (typeof themePreference === 'string') {
      const themePreferenceOption = ThemePreferenceOptions.find(
        (option) => option.value === themePreference,
      );

      if (themePreferenceOption) {
        await updateUserMeta(userId, {
          themePreference: themePreferenceOption.value,
        });
        return redirect(`/settings`);
      }
    }
  }

  return null;
};

export default function SettingsPage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Grid>
      <Grid.Col span={4}>
        <Title order={2}>Settings</Title>

        <Form method="patch">
          <Box
            display="flex"
            sx={(theme) => ({ flexDirection: 'column', gap: theme.spacing.md })}
          >
            <Select
              name="themePreference"
              label="Theme Mode"
              defaultValue={user.themePreference}
              data={ThemePreferenceOptions}
            />

            <Button color="green" type="submit">
              Save
            </Button>
          </Box>
        </Form>
      </Grid.Col>
    </Grid>
  );
}

import { data, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { getUser, getUserMeta, authenticatedRequest } from '~/lib/auth';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Button } from '~/components/ui/button';

interface ThemePreferenceOptionProps {
  label: React.ReactNode;
  value: 'dark' | 'light' | 'auto';
}

const ThemePreferenceOptions: ThemePreferenceOptionProps[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'auto' },
];

export const loader: LoaderFunction = async (args) => {
  const { userId } = await authenticatedRequest(args);

  const clerkUser = await getUser(userId);
  const userMeta = await getUserMeta(userId);

  const user = {
    ...clerkUser,
    ...userMeta,
  };

  return data({ user });
};

export const action: ActionFunction = async (args) => {
  const { userId } = await authenticatedRequest(args);

  if (args.request.method === 'PATCH') {
    const formData = await args.request.formData();
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
    <div>
      <p>Settings</p>

      <div className='flex flex-col gap-4'>
        <Form method="patch">
          <div className='flex flex-col gap-4'>
            <Select
              name="themePreference"
              defaultValue={user.themePreference}
            >
              <SelectTrigger>
                <SelectValue placeholder="Theme Mode" />
              </SelectTrigger>
              <SelectContent>
                {ThemePreferenceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button color="green" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

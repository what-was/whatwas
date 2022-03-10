import { useState } from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'remix';
import { ColorSchemeProvider, MantineProvider, ColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { UserContextProvider } from './hooks/useUser';
import { EnvironmentSetter } from './components';
import { CUSTOM_COLORS } from './shared/appConstants';

import { Layout, Document } from './containers/Layout';

interface RootLoader {
  ENV: { [key: string]: string };
}

export const loader: LoaderFunction = () => {
  const ENV = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  };

  return { ENV };
};

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  const { ENV } = useLoaderData<RootLoader>();

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Document>
      <UserContextProvider>
        <MantineProvider
          theme={{
            primaryColor: 'brand',
            colors: {
              ...CUSTOM_COLORS,
            },
            colorScheme,
          }}
          withNormalizeCSS
          withGlobalStyles
        >
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <Layout>
              <Outlet />
            </Layout>
          </ColorSchemeProvider>
        </MantineProvider>
      </UserContextProvider>
      <EnvironmentSetter env={ENV} />
    </Document>
  );
}

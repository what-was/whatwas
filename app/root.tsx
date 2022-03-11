import { useState } from 'react';
import { LinksFunction, LoaderFunction, MetaFunction, Outlet, useLoaderData } from 'remix';
import { ColorSchemeProvider, MantineProvider, ColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { UserContextProvider } from './hooks/useUser';
import { Layout, Document } from './containers/Layout';
import { EnvironmentSetter } from './components';
import { CUSTOM_COLORS } from './shared/appConstants';
import { getSeo } from './utils/seo';

interface RootLoader {
  ENV: { [key: string]: string };
}

const [seoMeta, seoLinks] = getSeo({
  title: 'Hello 👋',
});

export const meta: MetaFunction = () => ({ ...seoMeta });
export const links: LinksFunction = () => [...seoLinks];

export const loader: LoaderFunction = () => {
  const ENV = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  };

  return { ENV };
};

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

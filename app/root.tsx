import { LoaderFunction, Outlet, useLoaderData } from 'remix';
import type { LinksFunction } from 'remix';

import tailwindStyles from '~/styles/tailwind.css';
import { UserContextProvider } from './hooks/useUser';
import { Layout, Document, EnvironmentSetter } from './components';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: tailwindStyles }];

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
  return (
    <Document>
      <UserContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </UserContextProvider>
      <EnvironmentSetter env={ENV} />
    </Document>
  );
}

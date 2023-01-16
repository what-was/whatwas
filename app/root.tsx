import { Outlet, useLoaderData } from '@remix-run/react';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import { SaasProvider } from '@saas-ui/react';
import {
  cookieStorageManagerSSR,
  localStorageManager,
  ColorModeScript,
} from '@chakra-ui/react';
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';
import { dark } from '@clerk/themes';
import { getSeo } from '~/lib/seo';
import { initializeUserMeta } from './lib/user.server';
import { theme } from './lib/theme';
import { Document } from './components/document';
import colors from './lib/theme/foundations/colors';
import { fonts } from './lib/theme/foundations/typography';
import { getRedirectTo } from './lib/http';
import { REDIRECT_ROUTES } from './lib/constants';
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node';
let [seoMeta, seoLinks] = getSeo();

export let meta: MetaFunction = () => ({ ...seoMeta });
export let links: LinksFunction = () => [
  ...seoLinks,
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
  },
];

export const loader: LoaderFunction = async (args) => {
  return await rootAuthLoader(
    args,
    async ({ request }) => {
      let returnData = {
        cookies: request.headers.get('cookie') ?? '',
      };
      const { userId } = request.auth;
      if (!userId) return returnData;

      const redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);
      await initializeUserMeta(userId, redirectTo);

      return {
        ...returnData,
      };
    },
    { loadUser: true },
  );
};

function App() {
  const { cookies } = useLoaderData<typeof loader>();

  return (
    <Document>
      <SaasProvider
        colorModeManager={
          cookies ? cookieStorageManagerSSR(cookies) : localStorageManager
        }
        theme={theme}
        resetCSS
      >
        <Outlet />
      </SaasProvider>
    </Document>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
    variables: {
      fontFamily: fonts.body,
      colorPrimary: colors.primary[400],
      colorBackground: colors.gray[900],
      colorInputBackground: colors.gray[800],
    },
  },
});
export const CatchBoundary = ClerkCatchBoundary();

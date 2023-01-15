import { Outlet, useLoaderData } from '@remix-run/react';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import { SaasProvider } from '@saas-ui/react';
import {
  cookieStorageManagerSSR,
  createLocalStorageManager,
} from '@chakra-ui/react';
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';
import { dark } from '@clerk/themes';
// import { redirect } from '@remix-run/node';
import { initializeUserMeta } from './lib/user.server';
import { theme } from './lib/theme';
import { Document } from './components/document';
import colors from './lib/theme/foundations/colors';
import { fonts } from './lib/theme/foundations/typography';
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return {
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    title: 'WhatWas?',
    description: `TBD`,
    keywords: 'whatwas?',
    robots: 'noindex, nofollow',
    'og:title': 'WhatWas?',
    'og:type': 'website',
    'og:url': 'https://whatwas.app',
    'og:image':
      'https://raw.githubusercontent.com/what-was/whatwas/main/assets/images/Thumbnail.png',
    'og:card': 'summary_large_image',
    'og:creator': '@buraksaraloglu',
    'og:site': 'https://whatwas.app',
    'og:description': `TBD`,
    'twitter:image':
      'https://raw.githubusercontent.com/what-was/whatwas/main/assets/images/Thumbnail.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@buraksaraloglu',
    'twitter:title': 'WhatWas?',
    'twitter:description': `TBD`,
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
    },
  ];
};

export const loader: LoaderFunction = async (args) => {
  return await rootAuthLoader(
    args,
    async ({ request }) => {
      let returnData = {
        cookies: request.headers.get('cookie') ?? '',
      };
      const { userId } = request.auth;
      if (!userId) return returnData;

      await initializeUserMeta(request);
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
          typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : createLocalStorageManager('chakra-ui-color-mode')
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

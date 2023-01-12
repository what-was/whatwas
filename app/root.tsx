import React, { useContext, useEffect } from 'react';
import { withEmotionCache } from '@emotion/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';
import { dark } from '@clerk/themes';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import { SaasProvider } from '@saas-ui/react';
import {
  cookieStorageManagerSSR,
  createLocalStorageManager,
} from '@chakra-ui/react';
import { ServerStyleContext, ClientStyleContext } from './lib/context';
import { getUserMeta, initializeUserMeta } from './services/user/user.server';
import { theme } from './lib/theme';
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
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
    },
  ];
};

export const loader: LoaderFunction = async (args) => {
  return await rootAuthLoader(
    args,
    async ({ request }) => {
      let returnData = {
        cookies: request.headers.get('cookie') ?? '',
        userMeta: null,
      };
      const { userId } = request.auth;
      if (!userId) return returnData;

      const userMeta = await getUserMeta(userId);
      if (!userMeta) {
        const initializedMeta = await initializeUserMeta(userId);
        if (!initializedMeta) return returnData;

        return { ...returnData, userMeta: initializedMeta };
      }

      return {
        ...returnData,
        userMeta,
      };
    },
    { loadUser: true },
  );
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  },
);

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
        {/* <ChakraProvider
          theme={theme}
          colorModeManager={

          }
        > */}
        <Outlet />
        {/* </ChakraProvider> */}
      </SaasProvider>
    </Document>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
  },
});

export const CatchBoundary = ClerkCatchBoundary();

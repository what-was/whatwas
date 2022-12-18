import { createEmotionCache, MantineProvider } from '@mantine/core';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';
import { dark } from '@clerk/themes';
import { theme } from './lib/theme';
import { getGlobalEnvs } from './lib/utils/envs';
import TailwindCSS from './styles/tailwind.css';
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from '@remix-run/node';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: TailwindCSS }];
};

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
      'https://raw.githubusercontent.com/dev-xo/dev-xo/main/barebones-stack/assets/images/Thumbnail.png',
    'og:card': 'summary_large_image',
    'og:creator': '@buraksaraloglu',
    'og:site': 'https://whatwas.app',
    'og:description': `TBD`,
    'twitter:image':
      'https://raw.githubusercontent.com/dev-xo/dev-xo/main/barebones-stack/assets/images/Thumbnail.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@buraksaraloglu',
    'twitter:title': 'WhatWas?',
    'twitter:description': `TBD`,
  };
};

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(
    args,
    ({ request }) => {
      const user = request.auth;

      return { ENV: getGlobalEnvs(), user };
    },
    { loadUser: true },
  );
};

const emotionCache = createEmotionCache({ key: 'mantine' });

function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <MantineProvider
      theme={theme}
      emotionCache={emotionCache}
      withGlobalStyles
      withNormalizeCSS
    >
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="h-full">
          <Outlet />
          <ScrollRestoration />
          <Scripts />

          {/* Global Shared Envs. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(ENV)}`,
            }}
          />

          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </html>
    </MantineProvider>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
  },
});

export const CatchBoundary = ClerkCatchBoundary();

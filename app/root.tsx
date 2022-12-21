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
import { json } from '@remix-run/node';
import { useMemo } from 'react';
import { getThemeMode, theme } from './lib/theme';
import { getGlobalEnvs } from './lib/utils/envs';
// import TailwindCSS from './styles/tailwind.css';
import { commitSession, getSession } from './services/session.server';
import { getUserMeta, initializeUserMeta } from './services/user/user.server';
import type { ThemePreference } from '@prisma/client';
import type {
  // LinksFunction,
  MetaFunction,
  LoaderFunction,
} from '@remix-run/node';

// export const links: LinksFunction = () => {
//   return [{ rel: 'stylesheet', href: TailwindCSS }];
// };

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

type LoaderData = {
  ENV: Record<string, string>;
  userMeta: {
    id: string;
    userId: string;
    themePreference: ThemePreference;
  } | null;
};
export const loader: LoaderFunction = async (args) => {
  return await rootAuthLoader(
    args,
    async ({ request }) => {
      let returnData = {
        ENV: getGlobalEnvs(),
        userMeta: null,
      };
      const { userId } = request.auth;
      if (!userId) return returnData;

      const session = await getSession(request.headers.get('Cookie'));
      if (!session) return returnData;

      const userMetaInSession = session.get('userMeta');
      if (userMetaInSession) {
        return { ...returnData, userMeta: userMetaInSession };
      }

      const userMeta = await getUserMeta(userId);
      if (!userMeta) {
        const userMeta = await initializeUserMeta(userId);
        if (!userMeta) return returnData;

        session.set('userMeta', userMeta);

        return json(
          { ...returnData, userMeta },
          { headers: { 'Set-Cookie': await commitSession(session) } },
        );
      }

      return { ...returnData, userMeta };
    },
    { loadUser: true },
  );
};

const emotionCache = createEmotionCache({ key: 'mantine', speedy: true });

function App() {
  const { ENV, userMeta } = useLoaderData<LoaderData>();

  const colorScheme = useMemo(() => {
    return getThemeMode(userMeta?.themePreference);
  }, [userMeta?.themePreference]);

  return (
    <MantineProvider
      emotionCache={emotionCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{ ...theme, colorScheme }}
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

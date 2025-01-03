import { Outlet, useLoaderData } from '@remix-run/react';
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node';
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from '@clerk/remix';
import { dark } from '@clerk/themes';
import { ThemeProvider } from 'remix-themes'
import { initializeUserMeta } from './lib/auth';
import { Document } from './components/document';
import { getRedirectTo } from './lib/http';
import { REDIRECT_ROUTES } from './lib/constants';
import fontStylesheet from "./styles/fonts.css?url";
import styles from "./styles/tailwind.css?url"
import { themeSessionResolver } from './services/theme.server'
import { CommonErrorBoundary } from '~/components/error-boundary';

export let meta: MetaFunction = () => {
  const allowIndexing = false

  return [
    { charset: "utf-8" },
    { title: 'Whatwas' },
    { name: "description", content: "Whatwas" },
    { name: "viewport", content: 'width=device-width, initial-scale=1.0', },
    { name: "robots", content: allowIndexing ? "index, follow" : "noindex, nofollow" },
  ]
};

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: fontStylesheet },
  { rel: "stylesheet", href: styles },
];

export const loader: LoaderFunction = async (args) => {
  return await rootAuthLoader(
    args,
    async ({ request }) => {
      const { getTheme } = await themeSessionResolver(request)

      let returnData = {
        cookies: request.headers.get('cookie') ?? '',
      };
      const { userId } = request.auth;

      if (userId) {
        const redirectTo = getRedirectTo(args, REDIRECT_ROUTES.AUTHENTICATED);
        await initializeUserMeta(userId, redirectTo);
      }

      return {
        ...returnData,
        theme: getTheme(),
      };
    },
  );
};

function App() {
  const { cookies, theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/api/set-theme">
      <Document theme={theme}>
        <Outlet />
      </Document>
    </ThemeProvider>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
  },
});

export const ErrorBoundary = CommonErrorBoundary;

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import { dark } from "@clerk/themes";

import { Document } from "./components/Document";
import { Layout } from "./containers/Layout";
import { theme } from "./theme";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "WhatWas?",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, ({ request }) => {
    const { userId } = request.auth;

    return { userId };
  });
};

createEmotionCache({ key: "mantine" });

function App() {
  const { userId } = useLoaderData();

  return (
    <Document>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Layout isLoggedIn={userId}>
          <Outlet />
        </Layout>
      </MantineProvider>
    </Document>
  );
}

export const CatchBoundary = ClerkCatchBoundary();

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
  },
});

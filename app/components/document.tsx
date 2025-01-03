import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useTheme, PreventFlashOnWrongTheme } from 'remix-themes'

interface DocumentProps {
  children: React.ReactNode;
  theme?: string;
}

export const Document = ({ theme, children }: DocumentProps) => {
  const [_theme] = useTheme()

  return (
    <html lang="en" data-theme={_theme ?? ''} suppressHydrationWarning>
      <head>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Meta />
        <Links />

      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

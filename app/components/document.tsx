import React, { useContext, useEffect } from 'react';
import { withEmotionCache } from '@emotion/react';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ServerStyleContext, ClientStyleContext } from '~/lib/context';

interface DocumentProps {
  children: React.ReactNode;
}

export const Document = withEmotionCache(
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
          {serverStyleData
            ? serverStyleData.map(({ key, ids, css }) => (
                <style
                  key={key}
                  data-emotion={`${key} ${ids.join(' ')}`}
                  dangerouslySetInnerHTML={{ __html: css }}
                />
              ))
            : null}
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

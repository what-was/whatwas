import { renderToString } from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { RemixServer } from '@remix-run/react';
import { ServerStyleContext } from './lib/context';
import createEmotionCache from './lib/createEmotionCache';
import { getEnv } from './lib/utils/env.server';
import type { EntryContext } from '@remix-run/node';

global.ENV = getEnv();

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const App = () => (
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <App />
    </ServerStyleContext.Provider>,
  );

  const chunks = extractCriticalToChunks(html);
  const markup = renderToString(
    <ServerStyleContext.Provider value={chunks.styles}>
      <App />
    </ServerStyleContext.Provider>,
  );

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

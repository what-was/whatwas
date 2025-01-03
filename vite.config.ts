import { vitePlugin as remix } from '@remix-run/dev';
import morgan from 'morgan';
import { flatRoutes } from 'remix-flat-routes';
import { defineConfig, type ViteDevServer } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: { manifest: true },
  plugins: [
    morganPlugin(),
    tsconfigPaths(),
    remix({
      // ignoredRouteFiles: ['**/*'],
      serverModuleFormat: 'esm',
      future: {
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
      },
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
        });
      },
    }),
  ],
});

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'));
      };
    },
  };
}

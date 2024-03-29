import type { DataFunctionArgs } from '@remix-run/node';

/**
 * Learn more about Fly.io Healthcheck:
 * https://fly.io/docs/reference/configuration/#services-http_checks
 */
export async function loader({ request }: DataFunctionArgs) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');

  try {
    const url = new URL('/', `http://${host}`);
    await Promise.all([
      fetch(url.toString(), { method: 'HEAD' }).then((res) => {
        if (!res.ok) return Promise.reject(res);
      }),
    ]);

    return new Response('OK');
  } catch (err: unknown) {
    console.log('Healthcheck Error:', { err });
    return new Response('Healthcheck Error.', { status: 500 });
  }
}

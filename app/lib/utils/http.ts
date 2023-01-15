export function getDomainUrl(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');
  if (!host) throw new Error('Could not determine URL host.');

  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}

export function getDomainPathname(request: Request) {
  const pathname = new URL(request.url).pathname;
  if (!pathname) throw new Error('Could not determine URL pathname.');

  return pathname;
}

type Fallback = string | undefined;
export function getRedirectTo<FB extends Fallback>(
  request: Request,
  fallback?: FB,
): FB {
  const url = new URL(request.url);
  return (url.searchParams.get('redirectTo') ?? fallback) as FB;
}

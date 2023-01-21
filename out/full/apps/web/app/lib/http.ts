import { safeRedirect } from 'remix-utils';
import { REDIRECT_ROUTES } from './constants';

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

export function getRedirectTo(request: Request, fallback?: string) {
  let { searchParams } = new URL(request.url);
  let redirectTo = searchParams.get('redirectTo');
  return safeRedirect(redirectTo, fallback);
}

export const createRedirectToHere = (
  request: Request,
  to: string,
  fromFallback: string,
) => {
  const { pathname } = new URL(request.url);
  const from = pathname === to ? fromFallback : pathname;
  return `${removeTrailSlash(to)}?redirectTo=${encodeURIComponent(from)}`;
};

export const authRedirectUrl = (
  request: Request,
  fallback?: string,
  shouldRedirectAfterAuth = true,
) =>
  shouldRedirectAfterAuth
    ? createRedirectToHere(request, REDIRECT_ROUTES.GUEST, fallback ?? '/')
    : REDIRECT_ROUTES.GUEST;

export function removeTrailSlash(path: string) {
  return path.replace(/\/$/, '');
}

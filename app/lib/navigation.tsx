import { adminRoutes, type NavMenuItem } from '~/lib/routes';

export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (
  pathname: string,
  routes: NavMenuItem[] = adminRoutes,
): NavMenuItem | undefined => {
  for (const route of routes) {
    if (pathname === route.url) return route;

    if (route.items) {
      const found = findCurrentRoute(pathname, route.items);
      if (found) return found;
    }

    if (!route.exact && new RegExp(`^${route.url}`).test(pathname))
      return route;
  }
  return undefined;
};

export const isCurrentItemOrChildActive = (
  item: NavMenuItem,
  pathname: string,
): {
  active: boolean;
  childrenActive: boolean;
} => {
  const route = findCurrentRoute(pathname);
  if (!route) return { active: false, childrenActive: false };
  if (item.url === route.url) return { active: true, childrenActive: false };

  if (item.items) {
    let childrenActive = false;
    item.items.forEach((i) => {
      const { active: a, childrenActive: c } = isCurrentItemOrChildActive(
        i,
        pathname,
      );
      if (a) childrenActive = true;
    });

    return { active: false, childrenActive };
  }

  if (!item.exact && new RegExp(`^${item.url}`).test(route.url)) {
    return { active: true, childrenActive: false };
  }

  return { active: false, childrenActive: false };
};

export const getActiveRoute = (pathname: string): string => {
  const route = findCurrentRoute(pathname);
  return route?.title || 'Default Brand Text';
};

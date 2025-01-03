import { useLocation } from '@remix-run/react';
import { findCurrentRoute } from '~/lib/navigation';

export const useRoute = () => {
  const location = useLocation();
  const route = findCurrentRoute(location.pathname);
  return route;
};

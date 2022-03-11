import { CalendarIcon, QuoteIcon } from '@radix-ui/react-icons';

export type Route = {
  path: string;
  displayName: string;
  Icon: typeof QuoteIcon;
};

export const APP_ROUTES: Route[] = [
  {
    path: 'notes',
    displayName: 'Notes',
    Icon: QuoteIcon,
  },
  {
    path: 'calendar',
    displayName: 'Calendar',
    Icon: CalendarIcon,
  },
];

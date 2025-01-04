import {
  BookOpen,
  Bot,
  Calendar,
  FileQuestion,
  Home,
  LifeBuoy,
  type LucideIcon,
  Map,
  Send,
  Settings2,
  UserRound,
  VenetianMask,
} from 'lucide-react';

export interface NavMenuItem {
  title: string;
  url: string;
  exact?: boolean;
  icon?: LucideIcon;
  isActive?: boolean;
  menuInvisible?: boolean;
  childrenInvisible?: boolean;
  isRoot?: boolean;
  items?: NavMenuItem[];
}

export const mainNav: NavMenuItem[] = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
    exact: true,
    isRoot: true,
  },
  {
    title: 'Schedule',
    url: '/schedule',
    icon: Calendar,
  },
  // {
  //   title: 'FAQs',
  //   url: '/dashboard/faqs',
  //   icon: FileQuestion,
  // },
  // {
  //   title: 'Topics',
  //   url: '/dashboard/topics',
  //   icon: Map,
  // },
  // {
  //   title: 'Settings',
  //   url: '/dashboard/settings',
  //   icon: Settings2,
  //   exact: true,
  //   childrenInvisible: true,
  //   items: [
  //     {
  //       title: 'General',
  //       url: '/dashboard/settings/general',
  //     },
  //     {
  //       title: 'Team',
  //       url: '/dashboard/settings/team',
  //     },
  //     {
  //       title: 'Billing',
  //       url: '/dashboard/settings/billing',
  //     },
  //     {
  //       title: 'Limits',
  //       url: '/dashboard/settings/limits',
  //     },
  //   ],
  // },
];

export const secondaryNav: NavMenuItem[] = [
  {
    title: 'Support',
    url: '#',
    icon: LifeBuoy,
  },
  {
    title: 'Feedback',
    url: '#',
    icon: Send,
  },
];

export const adminRoutes = [...mainNav, ...secondaryNav];

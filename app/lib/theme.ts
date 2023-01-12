import { extendTheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/react';
import type { ThemePreference } from '@prisma/client';

export const theme = extendTheme(
  {
    config: { initialColorMode: 'dark' },
    styles: {
      global: {
        'html, body': {
          height: '100%',
        },
      },
    },
  },
  baseTheme,
);

export function getThemeMode(
  themePreference?: ThemePreference | null,
): 'dark' | 'light' {
  const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  if (!canUseDOM) return 'dark'; // TODO: try to get user's preference

  switch (themePreference) {
    case 'DARK':
      return 'dark';
    case 'LIGHT':
      return 'light';
    default: {
      // const userPrefersDarkTheme = window.matchMedia(
      //   '(prefers-color-scheme: dark)',
      // ).matches;

      // return userPrefersDarkTheme ? 'dark' : 'light';
      return 'dark';
    }
  }
}

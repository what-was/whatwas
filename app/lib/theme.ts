import { DEFAULT_THEME } from '@mantine/core';
import type { ThemePreference } from '@prisma/client';
import type { MantineTheme } from '@mantine/core';

export const theme: MantineTheme = { ...DEFAULT_THEME };

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

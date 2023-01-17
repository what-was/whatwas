import { extendTheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/theme';
import { theme as glassTheme } from '@saas-ui/theme-glass';
import colors from './foundations/colors';
import { fonts } from './foundations/typography';
// import sizes from './foundations/sizes';
// import shadows from './foundations/shadows';
// import semanticTokens from './foundations/semantic-tokens';
// import components from './components';
import type { ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme(
  { ...baseTheme, config, colors, fonts },
  glassTheme,
) as ChakraTheme;

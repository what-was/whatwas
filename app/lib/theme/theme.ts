import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/theme';
import colors from './foundations/colors';
import { fonts, fontSizes, textStyles } from './foundations/typography';
import sizes from './foundations/sizes';
import shadows from './foundations/shadows';
import semanticTokens from './foundations/semantic-tokens';
import components from './components';
import type { ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme(
  {
    config,
    colors,
    fonts,
    fontSizes,
    textStyles,
    sizes,
    components,
    shadows,
    semanticTokens,
    styles: {
      global: {
        'html, body': {
          height: '100%',
        },
        '@-ms-viewport': {
          width: 'device-width',
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
    components: ['Radio', 'Switch', 'Checkbox'],
  }),
  baseTheme,
) as ChakraTheme;

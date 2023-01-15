import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/theme';
import colors from './foundations/colors';
import { fonts, fontSizes, textStyles } from './foundations/typography';
import sizes from './foundations/sizes';
import shadows from './foundations/shadows';
import semanticTokens from './foundations/semantic-tokens';
import components from './components';
import type { ChakraTheme } from '@chakra-ui/react';

export const theme = extendTheme(
  {
    colors,
    fonts,
    fontSizes,
    textStyles,
    sizes,
    components,
    shadows,
    semanticTokens,
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
    components: ['Radio', 'Switch', 'Checkbox'],
  }),
  baseTheme,
) as ChakraTheme;

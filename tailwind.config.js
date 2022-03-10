// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media',

  theme: {
    ...defaultTheme,
    // extend: {
    //   fontFamily: {
    //     // @ts-ignore
    //     sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
    //   },
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

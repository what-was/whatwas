import { initSeo } from 'remix-seo';
export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  title: 'WhatWas?',
  titleTemplate: '%s',
  description: 'The WhatWas? app',
  robots: {
    noIndex: true,
    noFollow: true,
  },
});

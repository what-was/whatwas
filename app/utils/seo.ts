import { initSeo } from 'remix-seo';

export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  title: 'WhatWas',
  titleTemplate: '%s | WhatWas',
  description: 'What was on your mind? Keep your ideas, works, notes and much more in one place. ',
});

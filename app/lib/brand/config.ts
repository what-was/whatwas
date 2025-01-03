import type { DefaultSeoProps } from '../server/seo/types';

export const siteConfig = {
  title: 'thefaqapp',
  description: 'thefaqapp',
  baseUrl: 'https://thefaq.app',
  ogImage: 'https://thefaq.app/og-image.png',
  environment: process.env.NODE_ENV || 'development',
} as const;

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: '',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: '@okbrk_',
    site: siteConfig.baseUrl,
    cardType: 'summary_large_image',
  },
};

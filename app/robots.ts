import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://drumion.app/sitemap.xml',
    host: 'https://drumion.app',
  };
}

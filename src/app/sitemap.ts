import { MetadataRoute } from 'next';
import { apps } from '@/content/apps';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://various-apps.com';

  // Homepage URLs for each locale
  const homePages = locales.map((locale) => ({
    url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        en: baseUrl,
        tr: `${baseUrl}/tr`,
      },
    },
  }));

  // App pages URLs for each locale and app
  const appPages = locales.flatMap((locale) =>
    apps.map((app) => ({
      url: locale === 'en'
        ? `${baseUrl}/apps/${app.slug}`
        : `${baseUrl}/${locale}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/apps/${app.slug}`,
          tr: `${baseUrl}/tr/apps/${app.slug}`,
        },
      },
    }))
  );

  return [...homePages, ...appPages];
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getAppBySlug, getAllAppSlugs } from '@/content/apps';
import { locales } from '@/i18n/config';
import { AppShowcase } from '@/components/sections/AppShowcase';

interface AppPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getAppBySlug(slug);
  const t = await getTranslations({ locale, namespace: 'apps' });

  if (!app) {
    return {
      title: 'App Not Found',
    };
  }

  const name = t(`${slug}.name`);
  const tagline = t(`${slug}.tagline`);
  const description = t(`${slug}.description`);

  // Create SEO-optimized title and description
  const seoTitle = `${name} - ${tagline}`;
  const seoDescription = `${description} Download ${name} for ${app.platforms.map(p => p === 'ios' ? 'iOS' : p === 'android' ? 'Android' : 'Web').join(' & ')}. By Various Apps.`;

  // Platform-specific keywords
  const platformKeywords = app.platforms.map(p =>
    p === 'ios' ? 'iOS app' : p === 'android' ? 'Android app' : 'web app'
  );

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      name,
      tagline,
      ...platformKeywords,
      'mobile app',
      'Various Apps',
      slug,
    ],
    alternates: {
      canonical: `/apps/${slug}`,
      languages: {
        'en': `/en/apps/${slug}`,
        'tr': `/tr/apps/${slug}`,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://various-apps.com/${locale === 'en' ? '' : locale + '/'}apps/${slug}`,
      siteName: 'Various Apps',
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      images: [
        {
          url: `/apps/${slug}/icon.png`,
          width: 512,
          height: 512,
          alt: `${name} App Icon`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [`/apps/${slug}/icon.png`],
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return <AppShowcase app={app} />;
}

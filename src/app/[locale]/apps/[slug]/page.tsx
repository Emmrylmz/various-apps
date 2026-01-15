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
      title: 'App Not Found | Various Apps',
    };
  }

  const name = t(`${slug}.name`);
  const description = t(`${slug}.description`);

  return {
    title: `${name} | Various Apps`,
    description: description,
    openGraph: {
      title: `${name} | Various Apps`,
      description: description,
      url: `https://variousapps.com/${locale}/apps/${slug}`,
      siteName: 'Various Apps',
      type: 'website',
      images: [
        {
          url: app.logo,
          width: 512,
          height: 512,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} | Various Apps`,
      description: description,
      images: [app.logo],
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

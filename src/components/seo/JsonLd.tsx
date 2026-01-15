import { apps } from '@/content/apps';

// Organization structured data for the homepage
export function OrganizationJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Various Apps',
    description: 'Mobile app development studio crafting beautiful digital experiences',
    url: 'https://various-apps.com',
    logo: 'https://various-apps.com/logo.png',
    sameAs: [
      // Add your social media URLs here
      // 'https://twitter.com/variousapps',
      // 'https://github.com/variousapps',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@various-apps.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Software Application structured data for app pages
interface AppJsonLdProps {
  name: string;
  description: string;
  slug: string;
  platforms: ('ios' | 'android' | 'web')[];
  rating?: string;
  locale: string;
}

export function AppJsonLd({ name, description, slug, platforms, rating, locale }: AppJsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: `https://various-apps.com/${locale === 'en' ? '' : locale + '/'}apps/${slug}`,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: platforms.map(p =>
      p === 'ios' ? 'iOS' : p === 'android' ? 'Android' : 'Web'
    ).join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Various Apps',
      url: 'https://various-apps.com',
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb structured data
interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://various-apps.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Website structured data with search action
export function WebsiteJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Various Apps',
    url: 'https://various-apps.com',
    description: 'Mobile app development studio crafting beautiful digital experiences',
    publisher: {
      '@type': 'Organization',
      name: 'Various Apps',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Item List for showcasing all apps
export function AppsListJsonLd({ locale }: { locale: string }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Various Apps Portfolio',
    description: 'Our collection of mobile applications',
    numberOfItems: apps.length,
    itemListElement: apps.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: app.name,
        url: `https://various-apps.com/${locale === 'en' ? '' : locale + '/'}apps/${app.slug}`,
        applicationCategory: 'LifestyleApplication',
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

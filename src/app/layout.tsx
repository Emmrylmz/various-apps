import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Various Apps | Mobile App Development Studio',
    template: '%s | Various Apps',
  },
  description: 'Various Apps is a mobile app development studio crafting beautiful digital experiences. Explore our portfolio: Viona, PosturePal, QR Sessions & more.',
  keywords: [
    'mobile app development',
    'app development studio',
    'iOS app development',
    'Android app development',
    'mobile apps',
    'app design',
    'Viona app',
    'barber booking app',
    'PosturePal',
    'posture correction app',
    'QR Sessions',
    'Various Apps',
    'Turkish app developer',
    'uygulama geliştirme',
  ],
  authors: [{ name: 'Various Apps', url: 'https://various-apps.com' }],
  creator: 'Various Apps',
  publisher: 'Various Apps',
  metadataBase: new URL('https://various-apps.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'tr': '/tr',
    },
  },
  openGraph: {
    title: 'Various Apps | Mobile App Development Studio',
    description: 'We craft beautiful mobile apps that users love. Explore our portfolio of innovative apps including Viona, PosturePal, and QR Sessions.',
    url: 'https://various-apps.com',
    siteName: 'Various Apps',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Various Apps - Mobile App Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Various Apps | Mobile App Development Studio',
    description: 'We craft beautiful mobile apps that users love. Explore our portfolio.',
    images: ['/og-image.png'],
    creator: '@variousapps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

// Root layout just passes children through to locale layouts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

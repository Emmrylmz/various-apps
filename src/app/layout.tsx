import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Various Apps | Digital Craftsmen',
  description: 'We craft digital experiences that blur the line between technology and art. Explore our portfolio of beautifully designed apps.',
  keywords: ['apps', 'mobile apps', 'software', 'design', 'development', 'digital experiences'],
  authors: [{ name: 'Various Apps' }],
  metadataBase: new URL('https://variousapps.com'),
  openGraph: {
    title: 'Various Apps | Digital Craftsmen',
    description: 'We craft digital experiences that blur the line between technology and art.',
    url: 'https://variousapps.com',
    siteName: 'Various Apps',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Various Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Various Apps | Digital Craftsmen',
    description: 'We craft digital experiences that blur the line between technology and art.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Root layout just passes children through to locale layouts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

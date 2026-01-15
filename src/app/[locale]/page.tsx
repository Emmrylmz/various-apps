import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { AppsGrid } from '@/components/sections/AppsGrid';
import { FeaturedApp } from '@/components/sections/FeaturedApp';
import { StudioSection } from '@/components/sections/StudioSection';
import { ContactSection } from '@/components/sections/ContactSection';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AppsGrid />
      <FeaturedApp />
      <StudioSection />
      <ContactSection />
    </main>
  );
}

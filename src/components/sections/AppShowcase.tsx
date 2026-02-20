'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Download, Star, Smartphone, Globe, Apple, ExternalLink, Check } from 'lucide-react';
import { AppData, apps } from '@/content/apps';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

interface AppShowcaseProps {
  app: AppData;
}

export function AppShowcase({ app }: AppShowcaseProps) {
  const t = useTranslations('appPage');
  const tApps = useTranslations('apps');
  const tCommon = useTranslations('common');

  // Get translated content
  const appName = tApps(`${app.slug}.name`);
  const appTagline = tApps(`${app.slug}.tagline`);
  const appDescription = tApps(`${app.slug}.description`);
  const appLongDescription = tApps(`${app.slug}.longDescription`);
  const appTestimonial = tApps.raw(`${app.slug}.testimonial`) as { quote: string; author: string; role: string } | undefined;
  const appFeatures = tApps.raw(`${app.slug}.features`) as Record<string, { title: string; description: string }>;

  // Get other apps for "More Apps" section
  const otherApps = apps.filter(a => a.slug !== app.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden flex items-center">
        {/* Language switcher */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <LanguageSwitcher />
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br ${app.gradient} opacity-30 blur-3xl`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={`absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${app.gradient} opacity-20 blur-3xl`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 py-20 w-full">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link
              href="/#apps"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">{t('backToApps')}</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: App info */}
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-8">
                {/* App icon - use real icons for apps that have them */}
                {(app.slug === 'viona' || app.slug === 'viona-partner') ? (
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white flex items-center justify-center shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <Image
                      src={`/apps/${app.slug}/icon.png`}
                      alt={`${appName} Icon`}
                      width={128}
                      height={128}
                      className="w-20 h-20 md:w-28 md:h-28"
                    />
                  </motion.div>
                ) : app.slug === 'posture-pal' ? (
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#FDF6E9] flex items-center justify-center shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <Image
                      src="/apps/posture-pal/icon.png"
                      alt="PosturePal Icon"
                      width={128}
                      height={128}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <span className="text-4xl md:text-5xl font-black text-white">
                      {appName.charAt(0)}
                    </span>
                  </motion.div>
                )}
                <div>
                  {app.status !== 'active' && (
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-2 ${
                      app.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {tCommon(app.status)}
                    </span>
                  )}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                    {appName}
                  </h1>
                </div>
              </div>

              <motion.p
                className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {appTagline}
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {appDescription}
              </motion.p>

              {app.stats && (
                <motion.div
                  className="flex flex-wrap gap-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {app.stats.users && (
                    <div>
                      <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                        {app.stats.users}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{tCommon('users')}</div>
                    </div>
                  )}
                  {app.stats.rating && (
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                          {app.stats.rating}
                        </span>
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{tCommon('rating')}</div>
                    </div>
                  )}
                </motion.div>
              )}

              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {app.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
                  >
                    {platform === 'ios' && <Apple className="w-4 h-4" />}
                    {platform === 'android' && <Smartphone className="w-4 h-4" />}
                    {platform === 'web' && <Globe className="w-4 h-4" />}
                    {tCommon(platform)}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {app.links.length > 0 ? (
                  app.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-4 font-bold transition-all ${
                        link.type === 'playstore' || link.type === 'appstore'
                          ? `bg-gradient-to-r ${app.gradient} text-white hover:shadow-xl`
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Download className="w-5 h-5" />
                      {link.label || (link.type === 'playstore' ? 'Google Play' : link.type === 'appstore' ? 'App Store' : 'Visit')}
                    </a>
                  ))
                ) : (
                  <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-gray-400 font-bold cursor-not-allowed">
                    <Download className="w-5 h-5" />
                    {t('comingSoon')}
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right: Visual showcase */}
            <motion.div
              className="col-span-12 lg:col-span-6 relative lg:overflow-visible"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto">
                {/* Use real mockups for apps that have them */}
                {app.slug === 'ai-poster' ? (
                  <div className="relative lg:scale-[1.2] lg:origin-center">
                    <Image
                      src="/apps/ai-poster/mockups/screenshot.png"
                      alt="AI Poster App Screenshot"
                      width={1400}
                      height={800}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative lg:scale-[1.8] lg:origin-center lg:translate-x-[15%]">
                    <Image
                      src={
                        app.slug === 'viona' ? '/apps/viona/mockups/Jla3P43tx11 (25).png' :
                        app.slug === 'viona-partner' ? '/apps/viona-partner/mockups/Jla3P43tx11 (28).png' :
                        app.slug === 'qr-sessions' ? '/apps/qr-sessions/mockups/Jla3P43tx11 (29).png' :
                        '/apps/posture-pal/mockups/Jla3P43tx11 (26).png'
                      }
                      alt={`${appName} App Mockup`}
                      width={1600}
                      height={1920}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-[3px] bg-gradient-to-r ${app.gradient}`} />
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('features.sectionLabel')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[0.9]">
              {t('features.title1')}
              <span className={`block bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                {t('features.title2')}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(appFeatures).map(([key, feature], index) => (
              <motion.div
                key={key}
                className="group relative p-8 bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border-2 border-black group-hover:border-white transition-colors">
                    <Check className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-black group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 text-5xl font-black opacity-5 group-hover:opacity-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Description Section */}
      {appLongDescription && (
        <section className="py-24 md:py-32 px-6 md:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-12">
              <motion.div
                className="col-span-12 lg:col-span-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-[3px] bg-gradient-to-r ${app.gradient}`} />
                  <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('about.sectionLabel')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                  {t('about.title')}{' '}
                  <span className={`bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                    {appName.toUpperCase()}
                  </span>
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  {appLongDescription.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {appTestimonial && (
                <motion.div
                  className="col-span-12 lg:col-span-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-8 bg-gradient-to-br ${app.gradient} rounded-3xl`}>
                    <div className="text-6xl font-black opacity-20 mb-4">&ldquo;</div>
                    <p className="text-lg text-white/90 mb-6 italic">
                      {appTestimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold text-white">{appTestimonial.author}</p>
                      <p className="text-sm text-white/70">{appTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Privacy Policy link for AI Poster */}
                  {app.slug === 'ai-poster' && (
                    <Link
                      href="/apps/ai-poster/privacy"
                      className="mt-6 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <span>Privacy Policy</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* More Apps Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('moreApps.sectionLabel')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-black">
                {t('moreApps.title1')}{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {t('moreApps.title2')}
                </span>
              </h2>
            </div>
            <Link
              href="/#apps"
              className="inline-flex items-center gap-2 text-black font-bold hover:text-purple-500 transition-colors"
            >
              {t('moreApps.viewAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherApps.map((otherApp, index) => {
              const otherAppName = tApps(`${otherApp.slug}.name`);
              const otherAppTagline = tApps(`${otherApp.slug}.tagline`);

              return (
                <motion.div
                  key={otherApp.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/apps/${otherApp.slug}`}
                    className={`block h-[350px] relative overflow-hidden group cursor-pointer bg-gradient-to-br ${otherApp.gradient}`}
                  >
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold">{otherAppName.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black mb-2">{otherAppName}</h3>
                        <p className="text-white/80">{otherAppTagline}</p>
                        <motion.div
                          className="flex items-center gap-2 mt-4 font-bold"
                          whileHover={{ x: 10 }}
                        >
                          <span>EXPLORE</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={`py-24 px-6 md:px-8 bg-gradient-to-r ${app.gradient}`}>
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {t('cta.readyToTry')} {appName.toUpperCase()}?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {appTagline}. {t('cta.downloadNow')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {app.links.length > 0 ? (
                app.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-all"
                  >
                    <Download className="w-5 h-5" />
                    {link.label || (link.type === 'playstore' ? 'Google Play' : link.type === 'appstore' ? 'App Store' : 'Visit')}
                  </a>
                ))
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('getNotified')}
                </Link>
              )}
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-bold hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                {t('backToHome')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

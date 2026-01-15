'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { apps } from '@/content/apps';
import { ArrowRight } from 'lucide-react';

export function FeaturedApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const t = useTranslations('featured');
  const tApps = useTranslations('apps');

  // Feature QR Sessions as the highlighted app
  const featuredApp = apps.find(app => app.slug === 'qr-sessions') || apps[0];
  const appName = tApps(`${featuredApp.slug}.name`);
  const appDescription = tApps(`${featuredApp.slug}.description`);
  const appTagline = tApps(`${featuredApp.slug}.tagline`);
  const appTestimonial = tApps.raw(`${featuredApp.slug}.testimonial`) as { quote: string; author: string; role: string };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-8 bg-black text-white overflow-hidden">
      {/* Parallax background shapes */}
      <motion.div
        className="absolute top-20 left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            className="col-span-12 lg:col-span-5"
            style={{ opacity }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('sectionLabel')}</span>
              </div>
              <span className="text-6xl md:text-8xl font-black text-white/5">{t('sectionNumber')}</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {appName.split(' ')[0]?.toUpperCase()}
              <span className={`block bg-gradient-to-r ${featuredApp.gradient} bg-clip-text text-transparent`}>
                {appName.split(' ').slice(1).join(' ').toUpperCase() || 'SESSIONS'}
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {appDescription.split('.')[0]}.{' '}
                <span className="text-purple-400 font-bold">
                  {appTagline}
                </span>
              </p>

              {appTestimonial && (
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <p className="text-gray-400 italic">
                    &ldquo;{appTestimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— {appTestimonial.author}, {appTestimonial.role}</p>
                </div>
              )}
            </motion.div>

            {featuredApp.stats && (
              <motion.div
                className="grid grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {featuredApp.stats.users && (
                  <div>
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${featuredApp.gradient} bg-clip-text text-transparent mb-1`}>
                      {featuredApp.stats.users}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{t('users')}</div>
                  </div>
                )}
                {featuredApp.stats.rating && (
                  <div>
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${featuredApp.gradient} bg-clip-text text-transparent mb-1`}>
                      {featuredApp.stats.rating}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{t('rating')}</div>
                  </div>
                )}
                <div>
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${featuredApp.gradient} bg-clip-text text-transparent mb-1`}>
                    {featuredApp.platforms.length}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{t('platforms')}</div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={`/apps/${featuredApp.slug}`}
                className={`group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${featuredApp.gradient} font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all`}
              >
                <span>{t('viewCaseStudy')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-7 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10 aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-purple-500/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 md:top-6 left-4 md:left-6 flex gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>

                <div className="p-8 md:p-12 pt-12 md:pt-16">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className={`mb-4 p-4 md:p-6 bg-gradient-to-r ${featuredApp.gradient}/10 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(139, 92, 246, 0.15)' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${featuredApp.gradient}`} />
                        <div className="flex-1">
                          <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-white/10 rounded w-1/2" />
                        </div>
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-purple-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-center z-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black">{featuredApp.stats?.rating || '4.9'}</div>
                  <div className="text-xs">{t('rating').toUpperCase()}</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center z-20"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black">{featuredApp.stats?.users || '5K+'}</div>
                  <div className="text-xs md:text-sm">{t('users').toUpperCase()}</div>
                </div>
              </motion.div>

              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

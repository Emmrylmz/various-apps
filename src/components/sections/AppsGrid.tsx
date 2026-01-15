'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { apps } from '@/content/apps';
import { ArrowRight } from 'lucide-react';

export function AppsGrid() {
  const t = useTranslations('appsGrid');
  const tApps = useTranslations('apps');

  return (
    <section id="apps" className="relative py-24 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section header - Editorial style */}
        <div className="mb-16 md:mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl md:text-9xl font-black text-black/5">{t('sectionNumber')}</span>
            <div>
              <div className="w-12 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mb-2" />
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('sectionLabel')}</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('title1')}
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t('title2')}
            </span>
          </motion.h2>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
          {apps.map((app, index) => {
            const sizes = ['large', 'medium', 'medium', 'small'] as const;
            const size = sizes[index % sizes.length];

            const colSpan =
              size === 'large' ? 'col-span-12 md:col-span-7' :
              size === 'medium' ? 'col-span-12 md:col-span-5' :
              'col-span-12 md:col-span-4';

            const height =
              size === 'large' ? 'h-[400px] md:h-[500px]' :
              size === 'medium' ? 'h-[350px] md:h-[400px]' :
              'h-[300px]';

            // Get translated content
            const appName = tApps(`${app.slug}.name`);
            const appTagline = tApps(`${app.slug}.tagline`);

            return (
              <motion.div
                key={app.slug}
                className={`${colSpan} ${height} group relative overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/apps/${app.slug}`} className="block h-full">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${app.gradient}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                      }}
                    />
                  </div>

                  <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 flex items-center justify-center text-2xl font-bold">
                          {appName.charAt(0)}
                        </div>
                      </motion.div>
                      <span className="text-4xl md:text-6xl font-black opacity-20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div>
                      {app.status !== 'active' && (
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/20 rounded-full mb-3">
                          {app.status}
                        </span>
                      )}

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-tight">
                        {appName}
                      </h3>
                      <p className="text-base md:text-lg text-white/80 mb-4">
                        {appTagline}
                      </p>

                      <motion.div
                        className="flex items-center gap-2 font-bold"
                        whileHover={{ x: 10 }}
                      >
                        <span>{t('explore')}</span>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 md:mt-20 flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-right">
            <p className="text-4xl md:text-6xl font-black text-black/5">{t('portfolioLabel')}</p>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              {t('activeProjects', { count: apps.length })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

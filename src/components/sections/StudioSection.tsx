'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Sparkles, Rocket, Users, Code } from 'lucide-react';

const principleIcons = [Sparkles, Rocket, Users, Code];
const principleKeys = ['innovation', 'velocity', 'userFirst', 'craft'] as const;

export function StudioSection() {
  const t = useTranslations('studio');

  return (
    <section id="studio" className="relative py-24 md:py-32 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-7xl md:text-9xl font-black text-black/5">{t('sectionNumber')}</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('sectionLabel')}</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-8 text-black">
              {t('title1')}
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                {t('title2')}
              </span>
              <span className="block">{t('title3')}</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                {t('description1')}{' '}
                <span className="font-bold text-purple-600">{t('creativeLab')}</span>{' '}
                {t('description2')}
              </p>
              <p>
                {t('description3')}{' '}
                <span className="font-bold text-pink-600">{t('beautiful')}</span>,{' '}
                <span className="font-bold text-cyan-600">{t('functional')}</span>, ve{' '}
                <span className="font-bold text-purple-600">{t('inspiring')}</span>{' '}
                {t('description4')}
              </p>
            </div>

            <motion.div
              className="border-l-8 border-black pl-6 md:pl-8 py-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-black leading-tight mb-4 text-black">
                &ldquo;{t('quote')}&rdquo;
              </p>
              <p className="text-gray-500 uppercase tracking-wider text-sm">
                {t('quoteAuthor')}
              </p>
            </motion.div>
          </motion.div>

          <div className="col-span-12 lg:col-span-5 space-y-4 md:space-y-6">
            {principleKeys.map((key, index) => {
              const Icon = principleIcons[index];
              return (
                <motion.div
                  key={key}
                  className="group relative bg-white p-6 md:p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-black group-hover:border-white transition-colors">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-black mb-2 text-black group-hover:text-white transition-colors">
                          {t(`principles.${key}.title`)}
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                          {t(`principles.${key}.description`)}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 text-4xl md:text-5xl font-black opacity-5 group-hover:opacity-10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-16 md:mt-24 pt-8 md:pt-12 border-t-2 border-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '2024', labelKey: 'founded' },
              { value: '4', labelKey: 'appsBuilt' },
              { value: '20K+', labelKey: 'totalUsers' },
              { value: '4.8', labelKey: 'avgRating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-black">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  {t(`stats.${stat.labelKey}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Language switcher */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <LanguageSwitcher />
      </div>

      {/* Abstract geometric shapes */}
      <div className="absolute inset-0">
        {/* Large gradient circle */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Angular shapes */}
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 80%)' }}
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content - Asymmetric layout */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 py-20 w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side - Takes up 8 columns */}
          <motion.div
            className="col-span-12 lg:col-span-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Small accent text */}
            <motion.div
              className="mb-6 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-gray-400 tracking-[0.3em] uppercase text-sm">{t('accent')}</span>
            </motion.div>

            {/* Giant artistic headline with logo */}
            <div className="flex items-center gap-6 md:gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Various Apps Logo"
                  width={180}
                  height={180}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
              <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tight">
                <span className="block text-white">{t('title1')}</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('title2')}
                </span>
              </h1>
            </div>

            {/* Tagline with experimental positioning */}
            <div className="relative ml-0 lg:ml-32 max-w-xl">
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {t('tagline')}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold"> {t('taglineHighlight')}</span>
              </motion.p>

              {/* Abstract accent line */}
              <motion.div
                className="absolute -left-16 top-4 w-12 h-[2px] bg-pink-500 hidden lg:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </div>

            {/* CTA buttons with unique styling */}
            <motion.div
              className="flex flex-wrap gap-4 ml-0 lg:ml-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                href="#apps"
                className="group relative px-8 py-4 bg-white text-black font-bold overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">{t('exploreWork')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                />
              </Link>

              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors"
              >
                {t('contactUs')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Artistic element */}
          <motion.div
            className="col-span-12 lg:col-span-4 relative h-[300px] lg:h-[400px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Layered abstract shapes */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/40 to-blue-500/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Geometric frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-white/20 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-purple-500/30 rotate-[60deg]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-8 items-center gap-4 hidden md:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[2px] h-20 bg-gradient-to-b from-purple-500 to-transparent" />
          <span className="text-gray-500 text-sm tracking-widest uppercase rotate-90 origin-left">{t('scroll')}</span>
        </motion.div>
      </div>
    </section>
  );
}

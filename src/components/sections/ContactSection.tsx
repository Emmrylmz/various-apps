'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Mail, Github, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Link } from '@/i18n/routing';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', handle: '@variousapps', href: '#' },
  { icon: Github, label: 'GitHub', handle: '/variousapps', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', handle: '/variousapps', href: '#' },
];

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-8 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
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
          <span className="text-7xl md:text-9xl font-black text-white/5">{t('sectionNumber')}</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500">{t('sectionLabel')}</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-8">
              {t('title1')}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {t('title2')}
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              {t('description')}
            </p>

            <motion.a
              href="mailto:hello@variousapps.com"
              className="group inline-flex items-center gap-4 px-8 md:px-12 py-4 md:py-6 bg-white text-black font-black text-lg md:text-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              <span>{t('getInTouch')}</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.div
              className="mt-8 text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm uppercase tracking-widest">{t('emailLabel')}</span>
              <p className="text-xl md:text-2xl text-white font-bold mt-2">hello@variousapps.com</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-8">{t('followJourney')}</h3>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-between p-4 md:p-6 bg-white/5 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white/20 group-hover:border-purple-400 transition-colors">
                      <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="font-bold">{social.label}</div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-8 md:mt-12 p-6 md:p-8 border-2 border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-bold mb-4 text-lg">{t('newsletter.title')}</h4>
              <p className="text-gray-400 mb-4 text-sm">
                {t('newsletter.description')}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:shadow-lg transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 md:pt-12 border-t-2 border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black mb-2">VARIOUS APPS</p>
              <p className="text-gray-400 text-sm mb-1">Emir Yılmaz</p>
              <p className="text-gray-500 text-sm">&copy; 2024 {t('footer.copyright')}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.careers')}</Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">{t('footer.craftedWith')}</p>
              <p className="text-gray-500 text-sm">{t('footer.location')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

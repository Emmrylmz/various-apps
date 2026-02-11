import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Shield, Lock, Database, Users, Trash2, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Poster',
  description: 'Privacy Policy for AI Poster - Learn how we collect, use, and protect your information when using our social media automation application.',
};

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-500 to-purple-600 opacity-20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/apps/ai-poster"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest">Back to AI Poster</span>
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white">Privacy Policy</h1>
              <p className="text-gray-400">AI Poster</p>
            </div>
          </div>

          <p className="text-gray-400 mb-4">Last updated: January 27, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              AI Poster (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our social media posting application.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <p className="text-gray-300 mb-4">When you connect your social media accounts, we collect:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">OAuth access tokens (encrypted and stored securely)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Basic profile information from connected platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Content you create for posting (text, images)</span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 mb-4">We use your information solely to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Post content to your connected social media accounts on your behalf</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Maintain your account preferences and settings</span>
              </li>
            </ul>
          </div>

          {/* Data Storage and Security */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">Data Storage and Security</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">All OAuth tokens are encrypted using <strong className="text-white">AES-256-GCM encryption</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Data is stored in secure, access-controlled databases</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300"><strong className="text-white">We do not sell or share your data with third parties</strong></span>
              </li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              When you connect your accounts, you authorize us to interact with these platforms on your behalf:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">Facebook / Instagram</h3>
                <p className="text-gray-400 text-sm">Subject to Meta&apos;s Privacy Policy</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">Pinterest</h3>
                <p className="text-gray-400 text-sm">Subject to Pinterest&apos;s Privacy Policy</p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Trash2 className="w-6 h-6 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">Data Retention</h2>
            </div>
            <p className="text-gray-300">
              We retain your data only as long as your account is active. You may request deletion of your data at any time by contacting us.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Access your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
                <span className="text-gray-300">Disconnect your social media accounts at any time</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <a
              href="mailto:admin@various-apps.com"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-bold"
            >
              <Mail className="w-5 h-5" />
              admin@various-apps.com
            </a>
          </div>

          {/* Back to App */}
          <div className="text-center pt-8">
            <Link
              href="/apps/ai-poster"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold hover:shadow-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to AI Poster
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
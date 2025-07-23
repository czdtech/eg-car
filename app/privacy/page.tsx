import { Metadata } from 'next';
import { Shield } from 'lucide-react';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Eggy Car Unblocked Games',
  description: 'Read our privacy policy to understand how we collect, use, and protect your information when playing our free HTML5 games.',
  keywords: 'privacy policy, data protection, eggy car games, online privacy, gaming privacy',
  authors: [{ name: 'Eggy Car Unblocked Portal' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy - Eggy Car Unblocked Games',
    description: 'Our commitment to protecting your privacy while enjoying free online games.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <GameNavigation />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">1. Introduction</h2>
              <p className="text-gray-400 mb-4">
                At Eggy Car Games, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and games.
              </p>
              <p className="text-gray-400">
                By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">2. Information We Collect</h2>
              <p className="text-gray-400 mb-2">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Non-Personal Data:</strong> Browser type, device information, and usage statistics</li>
                <li><strong>Gameplay Data:</strong> Anonymous game progress and high scores (stored locally)</li>
                <li><strong>Cookies:</strong> Session cookies to enhance user experience</li>
              </ul>
              <p className="text-gray-400 mt-4">
                Note: Our HTML5 games run directly in your browser and do not require account creation.
              </p>
            </div>

            {/* Data Usage */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To analyze usage for improving our games</li>
                <li>To detect and prevent technical issues</li>
                <li>To understand user preferences and trends</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">4. Data Security</h2>
              <p className="text-gray-400 mb-2">We implement appropriate security measures including:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>HTTPS encryption for all data transmission</li>
                <li>Regular security audits of our systems</li>
                <li>Minimal data collection practices</li>
              </ul>
              <p className="text-gray-400 mt-4">
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Third Parties */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">5. Third-Party Services</h2>
              <p className="text-gray-400 mb-2">We may use third-party services that collect information:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Analytics:</strong> Google Analytics (anonymous usage data)</li>
                <li><strong>Ads:</strong> Ad networks may use cookies for personalized ads</li>
              </ul>
              <p className="text-gray-400 mt-4">
                These third parties have their own privacy policies.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">6. Children's Privacy</h2>
              <p className="text-gray-400">
                Our services are intended for general audiences. We do not knowingly collect personal information from children under 13.
                If we become aware of such collection, we will take steps to remove the information.
              </p>
            </div>

            {/* Changes */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-400">
                We may update our Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">8. Contact Us</h2>
              <p className="text-gray-400">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@eggycar.com" className="text-blue-400 hover:underline">privacy@eggycar.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <GameFooter />
    </div>
  );
} 
import { Metadata } from 'next';
import { FileText } from 'lucide-react';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';

export const metadata: Metadata = {
  title: 'Terms of Service - Eggy Car Unblocked Games',
  description: 'Read our terms of service for using Eggy Car games platform. Understand your rights and responsibilities when playing our free HTML5 games.',
  keywords: 'terms of service, game terms, eggy car games, user agreement, gaming terms',
  authors: [{ name: 'Eggy Car Unblocked Portal' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Terms of Service - Eggy Car Unblocked Games',
    description: 'Terms and conditions for using our free online games platform.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <GameNavigation />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <FileText className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing or using Eggy Car Games ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
              </p>
            </div>

            {/* User Conduct */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">2. User Responsibilities</h2>
              <p className="text-gray-400 mb-2">When using our Service, you agree not to:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to hack or disrupt the Service</li>
                <li>Use automated systems to access the Service</li>
                <li>Share inappropriate content through game features</li>
                <li>Circumvent any access restrictions</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">3. Intellectual Property</h2>
              <p className="text-gray-400 mb-2">
                The visual design, text content, and overall structure of this website are the exclusive property of Eggy Car Games. All rights reserved.
              </p>
              <p className="text-gray-400 mb-2">
                The HTML5 games featured on this Service are protected by their respective copyright holders. Each game's copyright belongs to its original creator/designer. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Copy, modify, or distribute any game without explicit permission from its copyright holder</li>
                <li>Reverse engineer or decompile any game code</li>
                <li>Use game assets (images, sounds, etc.) for other purposes</li>
              </ul>
              <p className="text-gray-400 mt-4">
                The games are provided for personal, non-commercial entertainment only.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">4. Disclaimer of Warranties</h2>
              <p className="text-gray-400">
                The Service is provided "as is" without warranties of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Games will work on all devices or browsers</li>
                <li>Game progress will be permanently saved</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-400">
                Eggy Car Games shall not be liable for any indirect, incidental, or consequential damages arising from:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>Use or inability to use the Service</li>
                <li>Unauthorized access to your data</li>
                <li>Any third-party conduct on the Service</li>
              </ul>
            </div>

            {/* Changes */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">6. Changes to Terms</h2>
              <p className="text-gray-400">
                We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">7. Governing Law</h2>
              <p className="text-gray-400">
                These Terms shall be governed by the laws of the United States without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <h2 className="font-semibold text-2xl mb-4">8. Contact Us</h2>
              <p className="text-gray-400">
                For questions about these Terms, contact us at:
                <br />
                <a href="mailto:legal@eggycaronline.org" className="text-green-400 hover:underline">legal@eggycaronline.org</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <GameFooter />
    </div>
  );
} 
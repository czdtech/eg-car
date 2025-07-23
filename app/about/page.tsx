import { Metadata } from 'next';
import { Gamepad, Trophy, Users, Info } from 'lucide-react';
import Link from 'next/link';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';

export const metadata: Metadata = {
  title: 'About Us - Eggy Car Unblocked Games Platform',
  description: 'Learn about Eggy Car Games platform. We provide safe, free HTML5 games with no downloads required. Discover our mission and game collection.',
  keywords: 'about eggy car, html5 games, free online games, unblocked games platform, game collection',
  authors: [{ name: 'Eggy Car Unblocked Portal' }],
  robots: 'index, follow',
  openGraph: {
    title: 'About Us - Eggy Car Unblocked Games Platform',
    description: 'Learn about our free HTML5 games platform. Safe, no-download gaming experience for everyone.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <GameNavigation />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              About Eggy Car Games
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A free platform dedicated to delivering high-quality HTML5 mini games
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Project Goal */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500/20 p-2 rounded-full">
                  <Gamepad className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    To provide players with safe, free, and no-download HTML5 gaming experiences. We carefully select and optimize games to ensure smooth performance across all devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Trophy className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>No registration required - play instantly</li>
                    <li>Fullscreen mode for immersive gameplay</li>
                    <li>Well-organized game library for easy discovery</li>
                    <li>Regular updates with trending games</li>
                    <li>Fully optimized for mobile devices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Game List */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Info className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Game Collection</h3>
                  <p className="text-gray-400 mb-2">
                    We currently feature 12 premium HTML5 games, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-gray-400">
                    <li>• Eggy Car</li>
                    <li>• 3D Racing</li>
                    <li>• Physics Sandbox</li>
                    <li>• Platform Jump</li>
                    <li>• Puzzle Games</li>
                    <li>• Action Adventures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Join Our Community</h3>
                  <p className="text-gray-400">
                    Welcome to our Discord community! Share gaming tips, provide feedback, or report issues. We value every player's input!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GameFooter />
    </div>
  );
}

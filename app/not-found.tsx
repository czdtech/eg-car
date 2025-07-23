import Link from 'next/link';
import { Home, Gamepad2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        {/* 404 Icon */}
        <div className="space-y-4">
          <div className="text-8xl mb-8">🎮</div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back to the games!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-sm text-gray-500">
            Discover our collection of free unblocked games
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
              Play Games
            </Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 hover:underline">
              About Us
            </Link>
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
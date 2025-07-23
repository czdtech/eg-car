'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        {/* Error Icon */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Something went wrong!
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We encountered an unexpected error. This might be a temporary issue.
          </p>
        </div>

        {/* Error Details */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-slate-800/50 rounded-lg p-4 text-left">
            <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
            <pre className="text-xs text-gray-400 overflow-x-auto">
              {error.message}
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            If the problem persists, please try refreshing the page
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
  )
}
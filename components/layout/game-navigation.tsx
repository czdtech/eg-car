'use client';

import React, { useState, useEffect } from 'react';
import { Play, Search, Menu, X } from 'lucide-react';

const GameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('game-section');
  const [currentPath, setCurrentPath] = useState('/');

  const navigationItems = [
    { href: '/', label: 'Eggy Car', id: 'home', type: 'page' },
    { href: '#game-features', label: 'Features', id: 'game-features', type: 'anchor' },
    { href: '#game-tips', label: 'Tips & Tricks', id: 'game-tips', type: 'anchor' },
    { href: '#controls-guide', label: 'Controls', id: 'controls-guide', type: 'anchor' },
    { href: '#faq', label: 'FAQ', id: 'faq', type: 'anchor' },
    { href: '/about', label: 'About', id: 'about', type: 'page' }
    // { href: '#games-grid', label: 'More Games', id: 'games-grid' }
  ];

  // Track current path and active section
  useEffect(() => {
    // Update current path
    setCurrentPath(window.location.pathname);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections (only anchor type items)
    navigationItems.forEach((item) => {
      if (item.type === 'anchor') {
        const element = document.getElementById(item.id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to determine if a navigation item is active
  const isItemActive = (item: any) => {
    if (item.type === 'page') {
      return currentPath === item.href;
    } else {
      return activeSection === item.id && currentPath === '/';
    }
  };

  const handleNavClick = (href: string, type: string) => {
    setIsMenuOpen(false);

    if (type === 'page') {
      // Navigate to different page
      window.location.href = href;
    } else {
      // Smooth scroll to section on current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <a href="/">Eggy Car Unblocked</a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.type)}
                className={`text-sm font-medium transition-all duration-300 hover:text-white relative py-2 px-3 rounded-lg ${
                  isItemActive(item)
                    ? 'text-white bg-slate-800/50'
                    : 'text-gray-300 hover:bg-slate-800/30'
                }`}
              >
                {item.label}
                {isItemActive(item) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full translate-y-1"></div>
                )}
              </button>
            ))}
          </div>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-48"
              />
            </div>
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                    isItemActive(item)
                      ? 'text-white bg-slate-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GameNavigation; 
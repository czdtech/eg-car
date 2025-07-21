'use client';

import React, { useState } from 'react';
import { Star, Users, Gamepad2, RotateCcw, Maximize2, X, Play } from 'lucide-react';

const GamePlayer = () => {
  const [isGameFullscreen, setIsGameFullscreen] = useState(false);
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);

  // Load game for the first time
  const loadGame = () => {
    if (!isGameLoaded) {
      setIsGameLoaded(true);
      setIsGameLoading(false);
    }
  };

  // Reload game
  const reloadGame = () => {
    const iframe = document.getElementById('main-game-iframe') as HTMLIFrameElement;
    if (iframe) {
      setIsGameLoading(true);
      iframe.src = iframe.src;
      setTimeout(() => {
        setIsGameLoading(false);
      }, 1500);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!isGameLoaded) {
      loadGame();
    }
    setIsGameFullscreen(!isGameFullscreen);
  };

  return (
    <>
      {/* Fullscreen Game Overlay */}
      {isGameFullscreen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col">
          <div className="bg-black/90 p-4 flex justify-between items-center flex-shrink-0">

            <div className="flex items-center space-x-2">
              <button
                onClick={reloadGame}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="Reload Game"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="Exit Fullscreen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-full">
            {isGameLoaded ? (
              <iframe
                src="https://ubg98.github.io/EggyCar/"
                className="w-full h-full border-none"
                allowFullScreen
                title="Eggy Car Unblocked Game"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={loadGame}
                    className="flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                  >
                    <Play className="w-6 h-6" />
                    <span>Start Game</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Game Section */}
      <section id="game-section" className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

          {/* Game Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                onClick={reloadGame}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm"
                disabled={isGameLoading}
              >
                <RotateCcw className={`w-4 h-4 ${isGameLoading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">{isGameLoading ? 'Loading...' : 'Reload'}</span>
              </button>
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-sm"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
            
            <div className="text-xs md:text-sm text-gray-400 text-center sm:text-right">
              Eggy Car Unblocked - Use arrow keys to drive • Keep the egg safe!
            </div>
          </div>

          {/* Game iframe Container - 使用响应式CSS类 */}
          <div className="relative w-full bg-slate-800/50 border border-white/10 responsive-iframe-container">
            {isGameLoaded ? (
              <iframe
                id="main-game-iframe"
                src="https://ubg98.github.io/EggyCar/"
                className="responsive-iframe"
                allowFullScreen
                title="Eggy Car Unblocked Game"
              />
            ) : (
              /* Game Preview with Play Button */
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/images/games/eggy-car.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center space-y-6">

                  {/* Game Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Eggy Car Unblocked</h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">Drive carefully and keep your egg safe!</p>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={loadGame}
                    className="group flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600/90 hover:bg-blue-500/90 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 start-game-glow hover:animate-none mx-auto"
                  >
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform start-game-bounce" />
                    <span className="text-lg font-semibold">Start Game</span>
                  </button>


                </div>
              </div>
            )}

            {/* Loading overlay for reload */}
            {isGameLoaded && isGameLoading && (
              <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-300 font-medium">Reloading Game...</p>
                </div>
              </div>
            )}
          </div>

          {/* Game Title and Info */}
          <div className="text-center mt-6 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">

              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Eggy Car Unblocked
                </h1>
                <p className="text-gray-400 text-base md:text-lg">Play the ultimate unblocked driving game - transport your egg safely!</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 md:space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-300">4.8</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">2.1M players</span>
              </div>
              <div className="flex items-center space-x-1">
                <Gamepad2 className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Racing</span>
              </div>
            </div>
          </div>

          {/* Game Instructions */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🏎️</div>
              <h3 className="font-semibold mb-1">Drive Smooth</h3>
              <p className="text-sm text-gray-400">Use arrow keys to control your car</p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🥚</div>
              <h3 className="font-semibold mb-1">Protect Egg</h3>
              <p className="text-sm text-gray-400">Don't let the egg fall and break</p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1">High Score</h3>
              <p className="text-sm text-gray-400">Go as far as possible to win</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlayer; 
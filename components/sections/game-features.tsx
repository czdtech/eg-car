import React from 'react';
import { Zap, Palette, Headphones, Smartphone, Globe, RotateCcw } from 'lucide-react';

const GameFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Realistic Physics Engine",
      description: "Experience authentic car and egg physics with every bump, jump, and turn. Our advanced physics simulation makes every moment unpredictable and exciting.",
      highlights: ["Real-time physics calculations", "Dynamic egg movement", "Realistic car handling"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Palette,
      title: "Beautiful Graphics",
      description: "Enjoy clean, colorful visuals optimized for all devices. The minimalist art style ensures smooth performance without sacrificing visual appeal.",
      highlights: ["HD graphics", "Smooth animations", "Optimized rendering"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "Immersive Sound Design",
      description: "Every engine rev, bounce, and crash is brought to life with carefully crafted sound effects that enhance your gaming experience.",
      highlights: ["Dynamic audio feedback", "Engine sound effects", "Impact audio cues"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Play",
      description: "Play seamlessly across desktop, tablet, and mobile devices. Touch controls are perfectly optimized for mobile gaming on the go.",
      highlights: ["Mobile-friendly controls", "Responsive design", "No downloads required"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Endless Terrain",
      description: "Navigate through procedurally generated landscapes that provide unlimited replayability. No two runs are exactly the same!",
      highlights: ["Infinite track generation", "Varied terrain types", "Unique challenges every time"],
      gradient: "from-red-400 to-rose-500"
    },
    {
      icon: RotateCcw,
      title: "Instant Restart",
      description: "Get back into the action immediately with lightning-fast restarts. No loading screens or delays - just pure, continuous gameplay.",
      highlights: ["Zero loading time", "Quick retry system", "Seamless experience"],
      gradient: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="game-features" className="py-16 bg-gradient-to-b from-slate-900/20 to-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ⚡ What Makes Eggy Car Unblocked Special
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover the cutting-edge features that make Eggy Car Unblocked the most addictive physics-based driving game
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Showcase */}
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                🔬 Advanced Technology
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Eggy Car Unblocked leverages cutting-edge web technologies to deliver console-quality gaming 
                directly in your browser. Our proprietary physics engine calculates thousands of 
                interactions per second to create the most realistic egg-carrying experience possible.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">60 FPS</div>
                  <div className="text-sm text-gray-400">Smooth Performance</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">HTML5</div>
                  <div className="text-sm text-gray-400">No Downloads</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
                  <div className="text-sm text-gray-400">Infinite Tracks</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">2D</div>
                  <div className="text-sm text-gray-400">Physics Engine</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 overflow-hidden">
                {/* Video Header */}
                <div className="p-4 bg-black/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🥚</div>
                    <h4 className="text-lg font-semibold text-white">
                      The Perfect Egg Gameplay Video
                    </h4>
                  </div>

                </div>
                
                {/* YouTube Video Area */}
                <div className="relative bg-black aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/U2SgrOeRrrs?rel=0&showinfo=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1"
                    title="Eggy Car Physics Engine Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Description */}
                <div className="p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every bounce, roll, and wobble is calculated with precision to create 
                    the most authentic egg behavior in gaming. Watch our physics engine in action!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-8 py-4">
            <span className="text-2xl">🎮</span>
            <span className="text-lg font-medium text-white">
              Ready to experience these amazing features?
            </span>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300">
              <a href="#game-section">Play Now</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures; 
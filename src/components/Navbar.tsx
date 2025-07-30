import React from 'react';
import { Sun, Moon, Star, Sparkles, Heart, Zap, Calendar, User, Settings, Brain, Utensils } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const navigationItems = [
    { id: 'dashboard', icon: Sun, label: 'Solar Dashboard', description: 'Your cosmic center' },
    { id: 'chronotype', icon: Brain, label: 'Chronotype', description: 'Discover your solar nature' },
    { id: 'meals', icon: Utensils, label: 'Sun-Sync Meals', description: 'Nourish with the cosmos' },
    { id: 'movement', icon: Zap, label: 'Solar Flow', description: 'Bioresonant movement' },
    { id: 'breathwork', icon: Heart, label: 'Solar Breathwork', description: 'Pranayama practices' },
    { id: 'avatar', icon: User, label: 'Solar Avatar', description: 'Your evolving essence' },
    { id: 'sleep', icon: Moon, label: 'Sleep Compass', description: 'Sacred rest guidance' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-80 animate-solar-ascent border-r-2 border-yellow-300 backdrop-blur-md z-30 incandescent-glow">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-2">
            <div className="w-12 h-12 divine-gold-bg rounded-full flex items-center justify-center incandescent-glow">
              <Sun className="w-7 h-7 text-white animate-spin-slow solar-glow" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold solar-majesty-text sacred-heading">
                SuryaWell
              </h1>
              <p className="text-sm text-white font-semibold">Solar Wellness Temple</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent incandescent-glow"></div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navigationItems.map(({ id, icon: Icon, label, description }) => (
            <button
              key={id}
              onClick={() => setActiveView(id)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group btn-solar ${
                activeView === id
                  ? 'divine-gold-bg shadow-lg border-2 border-yellow-300 text-white incandescent-glow'
                  : 'hover:bg-white/30 hover:shadow-md text-white/90 hover:text-white'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 solar-glow ${
                activeView === id
                  ? 'bg-white/30 text-white shadow-md incandescent-glow'
                  : 'bg-white/20 text-white/80 group-hover:bg-white/40 group-hover:text-white'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sm">{label}</h3>
                <p className="text-xs opacity-75">{description}</p>
              </div>
              {activeView === id && (
                <div className="w-3 h-3 bg-white rounded-full animate-golden-radiance"></div>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8">
          <div className="bg-white/30 rounded-xl p-4 border-2 border-yellow-300 incandescent-glow">
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="w-5 h-5 text-white solar-glow" />
              <span className="font-semibold text-white text-sm">Solar Alignment</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 mb-2">
              <div className="divine-gold-bg h-3 rounded-full w-3/4 animate-golden-radiance incandescent-glow"></div>
            </div>
            <p className="text-xs text-white font-medium">You're harmonizing beautifully with cosmic rhythms</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
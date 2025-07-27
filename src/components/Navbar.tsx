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
    <nav className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 border-r border-yellow-200/50 backdrop-blur-md z-30">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Sun className="w-7 h-7 text-white animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                SuryaWell
              </h1>
              <p className="text-sm text-amber-600">Solar Wellness Temple</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navigationItems.map(({ id, icon: Icon, label, description }) => (
            <button
              key={id}
              onClick={() => setActiveView(id)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                activeView === id
                  ? 'bg-gradient-to-r from-yellow-100 to-orange-100 shadow-lg border border-yellow-200/50 text-amber-800'
                  : 'hover:bg-white/50 hover:shadow-md text-amber-700 hover:text-amber-800'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeView === id
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md'
                  : 'bg-white/70 text-amber-600 group-hover:bg-yellow-100 group-hover:text-amber-700'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sm">{label}</h3>
                <p className="text-xs opacity-75">{description}</p>
              </div>
              {activeView === id && (
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8">
          <div className="bg-white/50 rounded-xl p-4 border border-yellow-200/50">
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-amber-800 text-sm">Solar Alignment</span>
            </div>
            <div className="w-full bg-yellow-100 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs text-amber-600">You're harmonizing beautifully with cosmic rhythms</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
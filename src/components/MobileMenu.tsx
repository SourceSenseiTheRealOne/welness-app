import React from 'react';
import { Sun, Moon, Star, Sparkles, Heart, Zap, Calendar, User, Settings, Brain, Utensils, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeView, setActiveView }) => {
  const navigationItems = [
    { id: 'dashboard', icon: Sun, label: 'Solar Dashboard' },
    { id: 'chronotype', icon: Brain, label: 'Chronotype Analyzer' },
    { id: 'meals', icon: Utensils, label: 'Sun-Sync Meals' },
    { id: 'movement', icon: Zap, label: 'Solar Flow Movement' },
    { id: 'breathwork', icon: Heart, label: 'Solar Breathwork' },
    { id: 'avatar', icon: User, label: 'Solar Avatar' },
    { id: 'sleep', icon: Moon, label: 'Sleep Compass' }
  ];

  const handleItemClick = (viewId: string) => {
    setActiveView(viewId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-yellow-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Sun className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                SuryaWell
              </h2>
              <p className="text-xs text-amber-600">Navigate your journey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/50 rounded-lg backdrop-blur-sm border border-yellow-200/50 hover:bg-white/70 transition-all duration-300"
          >
            <X className="w-5 h-5 text-amber-700" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-3">
          {navigationItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleItemClick(id)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                activeView === id
                  ? 'bg-gradient-to-r from-yellow-100 to-orange-100 shadow-lg border border-yellow-200/50 text-amber-800'
                  : 'hover:bg-white/50 hover:shadow-md text-amber-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeView === id
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md'
                  : 'bg-white/70 text-amber-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm flex-1 text-left">{label}</span>
              {activeView === id && (
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/50 rounded-xl p-4 border border-yellow-200/50">
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-amber-800 text-sm">Solar Alignment</span>
            </div>
            <div className="w-full bg-yellow-100 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs text-amber-600">Harmonizing with cosmic rhythms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
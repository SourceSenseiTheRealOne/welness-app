import React from 'react';
import { Sun, Moon, Leaf, Zap, ShoppingBag, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'dashboard', label: 'Solar Dashboard', icon: Sun },
    { id: 'chronotype', label: 'Chronotype', icon: Moon },
    { id: 'meals', label: 'Meal Guide', icon: Leaf },
    { id: 'movement', label: 'Movement', icon: Zap },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'invocation', label: 'Invocation', icon: Sparkles },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-amber-400/20 backdrop-blur-sm border-b border-yellow-200/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sun className="w-5 h-5 text-white animate-pulse" />
            </div>
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              SuryaWell
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                    : 'text-amber-700 hover:bg-yellow-200/50 hover:text-orange-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
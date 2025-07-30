import React, { useState, useEffect } from 'react';
import { Sun, Moon, Star, Sparkles, Heart, Zap, Calendar, User, Settings, Menu, X } from 'lucide-react';
import SolarDashboard from './components/SolarDashboard';
import ChronotypeAnalyzer from './components/ChronotypeAnalyzer';
import MealGuide from './components/MealGuide';
import MovementGuide from './components/MovementGuide';
import Breathwork from './components/Breathwork';
import AvatarProgression from './components/AvatarProgression';
import SleepCompass from './components/SleepCompass';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('dawn');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setTimeOfDay('dawn');
      else if (hour >= 12 && hour < 17) setTimeOfDay('zenith');
      else if (hour >= 17 && hour < 21) setTimeOfDay('golden');
      else setTimeOfDay('lunar');
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <SolarDashboard timeOfDay={timeOfDay} />;
      case 'chronotype':
        return <ChronotypeAnalyzer />;
      case 'meals':
        return <MealGuide timeOfDay={timeOfDay} />;
      case 'movement':
        return <MovementGuide timeOfDay={timeOfDay} />;
      case 'breathwork':
        return <Breathwork />;
      case 'avatar':
        return <AvatarProgression />;
      case 'sleep':
        return <SleepCompass />;
      default:
        return <SolarDashboard timeOfDay={timeOfDay} />;
    }
  };

  return (
    <div className="min-h-screen transition-all duration-1000 animate-solar-ascent">
      {/* Cosmic Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/30 to-amber-400/20 animate-golden-radiance"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-golden-radiance"
            style={{
              background: `radial-gradient(circle, var(--royal-solar-gold), var(--auric-inferno))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Navbar activeView={activeView} setActiveView={setActiveView} />
        <div className="flex-1 lg:ml-80">
          {renderView()}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="divine-gold-bg border-b-2 border-yellow-300 backdrop-blur-md sticky top-0 z-40 incandescent-glow">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 divine-gold-bg rounded-full flex items-center justify-center incandescent-glow">
                <Sun className="w-6 h-6 text-white animate-spin-slow solar-glow" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold solar-majesty-text">
                  SuryaWell
                </h1>
                <p className="text-xs text-white font-semibold">Solar Wellness Temple</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 bg-white/30 rounded-lg backdrop-blur-sm border-2 border-yellow-300 hover:incandescent-glow transition-all duration-300"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </header>

        {/* Mobile Content */}
        <div className="pb-20">
          {renderView()}
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 divine-gold-bg backdrop-blur-md border-t-2 border-yellow-300 z-30 incandescent-glow">
          <div className="flex items-center justify-around py-2 px-4">
            {[
              { id: 'dashboard', icon: Sun, label: 'Solar' },
              { id: 'movement', icon: Zap, label: 'Flow' },
              { id: 'breathwork', icon: Heart, label: 'Breath' },
              { id: 'avatar', icon: User, label: 'Avatar' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveView(id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 btn-solar ${
                  activeView === id
                    ? 'bg-white/30 text-white shadow-lg incandescent-glow'
                    : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5 solar-glow" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeView={activeView}
        setActiveView={setActiveView}
      />
    </div>
  );
}

export default App;
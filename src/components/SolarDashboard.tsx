import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sunrise, Sunset, Heart, Zap, Star, Sparkles, TrendingUp, Calendar } from 'lucide-react';

interface SolarDashboardProps {
  timeOfDay: string;
}

const SolarDashboard: React.FC<SolarDashboardProps> = ({ timeOfDay }) => {
  const [alignmentScore, setAlignmentScore] = useState(78);
  const [pulseIntensity, setPulseIntensity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity(prev => prev === 1 ? 1.1 : 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getSolarPhase = () => {
    switch (timeOfDay) {
      case 'dawn':
        return { icon: Sunrise, phase: 'Dawn Awakening', color: 'from-pink-300 to-yellow-300', greeting: 'The sun whispers of new beginnings' };
      case 'zenith':
        return { icon: Sun, phase: 'Zenith Power', color: 'from-yellow-400 to-orange-400', greeting: 'Solar energy peaks within you' };
      case 'golden':
        return { icon: Sunset, phase: 'Golden Descent', color: 'from-orange-300 to-red-300', greeting: 'Time for gentle transformation' };
      default:
        return { icon: Moon, phase: 'Lunar Rest', color: 'from-indigo-300 to-purple-300', greeting: 'The cosmos calls for restoration' };
    }
  };

  const { icon: PhaseIcon, phase, color, greeting } = getSolarPhase();

  const dailyRituals = [
    { time: 'Dawn', ritual: 'Solar Gaze & Breath', completed: true },
    { time: 'Zenith', ritual: 'Core Activation Flow', completed: timeOfDay === 'zenith' },
    { time: 'Golden', ritual: 'Earthing & Reflection', completed: false },
    { time: 'Lunar', ritual: 'Restorative Meditation', completed: false }
  ];

  const bioMetrics = [
    { label: 'Solar Alignment', value: alignmentScore, max: 100, color: 'yellow' },
    { label: 'Energy Flow', value: 85, max: 100, color: 'orange' },
    { label: 'Circadian Sync', value: 92, max: 100, color: 'amber' }
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      {/* Solar Invocation Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            {phase}
          </h1>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg text-amber-700 font-light italic">{greeting}</p>
      </div>

      {/* Central Solar Mandala */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-yellow-200/30 to-orange-200/30 animate-spin-slow flex items-center justify-center">
            {/* Middle Ring */}
            <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-yellow-300/40 to-orange-300/40 animate-pulse flex items-center justify-center">
              {/* Inner Core */}
              <div 
                className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${color} shadow-2xl flex items-center justify-center transition-transform duration-2000`}
                style={{ transform: `scale(${pulseIntensity})` }}
              >
                <PhaseIcon className="w-16 h-16 lg:w-20 lg:h-20 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                top: `${30 + Math.sin(i * Math.PI / 4) * 40}%`,
                left: `${30 + Math.cos(i * Math.PI / 4) * 40}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Bio-Metrics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {bioMetrics.map(({ label, value, max, color }) => (
          <div key={label} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-amber-800">{label}</h3>
              <span className="text-2xl font-bold text-amber-700">{value}%</span>
            </div>
            <div className="w-full bg-yellow-100 rounded-full h-3">
              <div 
                className={`bg-gradient-to-r from-${color}-400 to-${color}-600 h-3 rounded-full transition-all duration-1000`}
                style={{ width: `${value}%` }}
              />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-amber-600">Trending upward</span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Rituals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
          <h2 className="text-xl font-serif font-bold text-amber-800 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Today's Solar Rituals
          </h2>
          <div className="space-y-3">
            {dailyRituals.map(({ time, ritual, completed }) => (
              <div key={time} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                completed ? 'bg-green-100 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${completed ? 'bg-green-500' : 'bg-yellow-400 animate-pulse'}`} />
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">{time}</p>
                    <p className="text-amber-600 text-xs">{ritual}</p>
                  </div>
                </div>
                {completed && <Star className="w-4 h-4 text-green-600" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
          <h2 className="text-xl font-serif font-bold text-amber-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Energy & Mood
          </h2>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🌅</div>
              <p className="text-lg font-semibold text-amber-800">Energized & Aligned</p>
              <p className="text-sm text-amber-600">Your solar essence is bright today</p>
            </div>
            <div className="flex justify-center space-x-4">
              {['😊', '⚡', '🧘', '✨'].map((emoji, i) => (
                <button key={i} className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors duration-300">
                  <span className="text-xl">{emoji}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Sun, label: 'Solar Breathwork', color: 'yellow' },
          { icon: Zap, label: 'Movement Flow', color: 'orange' },
          { icon: Moon, label: 'Enter Rest Mode', color: 'indigo' },
          { icon: Sparkles, label: 'Avatar Progress', color: 'purple' }
        ].map(({ icon: Icon, label, color }) => (
          <button key={label} className={`bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50 hover:shadow-lg transition-all duration-300 group`}>
            <div className={`w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-semibold text-amber-800 text-center">{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolarDashboard;
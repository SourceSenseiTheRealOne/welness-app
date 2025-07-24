import React from 'react';
import { Sparkles, Clock, Target } from 'lucide-react';

interface DailyRitualProps {
  phase: string;
}

export const DailyRitual: React.FC<DailyRitualProps> = ({ phase }) => {
  const getRitual = (phase: string) => {
    switch (phase) {
      case 'Dawn':
        return {
          title: 'Solar Awakening Ritual',
          description: 'Greet the rising sun with 7 deep breaths, facing east. Feel the golden light entering your crown chakra.',
          duration: '5 minutes',
          impact: 'Energizes your entire day'
        };
      case 'Zenith':
        return {
          title: 'Solar Power Meditation',
          description: 'Stand in sunlight for 3 minutes. Visualize solar energy flowing through your heart center.',
          duration: '3 minutes',
          impact: 'Amplifies inner radiance'
        };
      case 'Twilight':
        return {
          title: 'Solar Gratitude Practice',
          description: 'Journal three things you\'re grateful for today. Light a candle and reflect on the day\'s solar gifts.',
          duration: '8 minutes',
          impact: 'Harmonizes evening energy'
        };
      default:
        return {
          title: 'Lunar Integration Ritual',
          description: 'Gentle moon gazing with intention setting. Connect with the day\'s solar memories.',
          duration: '10 minutes',
          impact: 'Prepares for regenerative sleep'
        };
    }
  };

  const ritual = getRitual(phase);

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200/50">
      <div className="flex items-center space-x-3 mb-6">
        <Sparkles className="w-8 h-8 text-yellow-600" />
        <h3 className="text-2xl font-serif font-bold text-amber-800">{ritual.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-lg text-amber-700 leading-relaxed mb-4">
            {ritual.description}
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg">
            Begin Ritual
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">{ritual.duration}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">{ritual.impact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
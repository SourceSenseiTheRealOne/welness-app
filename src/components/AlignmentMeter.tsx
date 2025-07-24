import React from 'react';
import { Sun } from 'lucide-react';

interface AlignmentMeterProps {
  alignment: number;
}

export const AlignmentMeter: React.FC<AlignmentMeterProps> = ({ alignment }) => {
  const getAlignmentColor = (value: number) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 60) return 'text-yellow-600';
    if (value >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getAlignmentStatus = (value: number) => {
    if (value >= 80) return 'Harmonized';
    if (value >= 60) return 'Aligned';
    if (value >= 40) return 'Awakening';
    return 'Seeking';
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
      <div className="flex items-center space-x-3 mb-4">
        <Sun className="w-6 h-6 text-yellow-600" />
        <h3 className="text-xl font-serif font-bold text-amber-800">Solar Alignment</h3>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${alignment}%` }}
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full shadow-lg animate-pulse" 
               style={{ left: `${alignment}%`, transform: 'translateX(-50%)' }} />
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${getAlignmentColor(alignment)}`}>
            {alignment}%
          </span>
          <span className={`text-lg font-medium ${getAlignmentColor(alignment)}`}>
            {getAlignmentStatus(alignment)}
          </span>
        </div>
        
        <div className="text-sm text-amber-700">
          <p>Sleep Rhythm: Optimal</p>
          <p>Meal Timing: Good</p>
          <p>Energy Flow: Balanced</p>
        </div>
      </div>
    </div>
  );
};
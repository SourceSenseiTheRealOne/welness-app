import React from 'react';
import { Star, Flame, Zap } from 'lucide-react';

interface AvatarProgressionProps {
  level: number;
}

export const AvatarProgression: React.FC<AvatarProgressionProps> = ({ level }) => {
  const getAvatarStage = (level: number) => {
    if (level >= 8) return { name: 'Solar Deity', icon: Flame, color: 'text-red-500' };
    if (level >= 6) return { name: 'Sun Warrior', icon: Zap, color: 'text-orange-500' };
    if (level >= 4) return { name: 'Solar Seeker', icon: Star, color: 'text-yellow-500' };
    return { name: 'Solar Spark', icon: Star, color: 'text-yellow-300' };
  };

  const stage = getAvatarStage(level);
  const Icon = stage.icon;

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
      <h3 className="text-xl font-serif font-bold text-amber-800 mb-4">Solar Avatar</h3>
      
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Icon className={`w-10 h-10 text-white`} />
        </div>
        
        <div>
          <h4 className={`text-lg font-bold ${stage.color}`}>{stage.name}</h4>
          <p className="text-sm text-amber-600">Level {level}</p>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(level % 10) * 10}%` }}
          />
        </div>
        
        <p className="text-xs text-amber-600">
          {10 - (level % 10)} rituals to next level
        </p>
      </div>
    </div>
  );
};
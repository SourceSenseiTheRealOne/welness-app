import React from 'react';
import { Sunrise, Sun, Sunset, Moon } from 'lucide-react';

interface MoodTrackerProps {
  mood: string;
  setMood: (mood: string) => void;
}

export const MoodTracker: React.FC<MoodTrackerProps> = ({ mood, setMood }) => {
  const moods = [
    { id: 'energized', label: 'Energized', icon: Sun, color: 'text-yellow-500' },
    { id: 'balanced', label: 'Balanced', icon: Sunrise, color: 'text-orange-500' },
    { id: 'peaceful', label: 'Peaceful', icon: Sunset, color: 'text-red-500' },
    { id: 'reflective', label: 'Reflective', icon: Moon, color: 'text-blue-500' },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
      <h3 className="text-xl font-serif font-bold text-amber-800 mb-4">Energy State</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {moods.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => setMood(id)}
            className={`p-3 rounded-xl border-2 transition-all duration-300 ${
              mood === id 
                ? 'border-yellow-400 bg-yellow-50 shadow-lg' 
                : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50/50'
            }`}
          >
            <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
            <span className="text-sm font-medium text-amber-700">{label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-amber-600">
          Current: <span className="font-semibold capitalize">{mood}</span>
        </p>
      </div>
    </div>
  );
};
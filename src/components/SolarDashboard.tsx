import React, { useState, useEffect } from 'react';
import { SolarMandala } from './SolarMandala';
import { AlignmentMeter } from './AlignmentMeter';
import { DailyRitual } from './DailyRitual';
import { MoodTracker } from './MoodTracker';
import { AvatarProgression } from './AvatarProgression';

export const SolarDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alignment, setAlignment] = useState(72);
  const [mood, setMood] = useState('energized');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getSolarPhase = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return 'Dawn';
    if (hour >= 12 && hour < 17) return 'Zenith';
    if (hour >= 17 && hour < 21) return 'Twilight';
    return 'Night';
  };

  const getSolarGreeting = () => {
    const phase = getSolarPhase();
    switch (phase) {
      case 'Dawn':
        return 'Awaken with the Solar Fire Rising';
      case 'Zenith':
        return 'Bask in the Sacred Solar Radiance';
      case 'Twilight':
        return 'Honor the Solar Wisdom Descending';
      default:
        return 'Rest in the Solar Memory of Stars';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          {getSolarGreeting()}
        </h2>
        <p className="text-lg text-amber-700">
          Solar Phase: <span className="font-semibold">{getSolarPhase()}</span> | 
          Time: <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Solar Mandala - Center Piece */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <SolarMandala phase={getSolarPhase()} />
        </div>

        {/* Right Column - Metrics */}
        <div className="space-y-6">
          <AlignmentMeter alignment={alignment} />
          <MoodTracker mood={mood} setMood={setMood} />
          <AvatarProgression level={Math.floor(alignment / 10)} />
        </div>
      </div>

      {/* Daily Ritual */}
      <DailyRitual phase={getSolarPhase()} />
    </div>
  );
};
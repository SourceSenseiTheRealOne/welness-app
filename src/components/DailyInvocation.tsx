import React, { useState, useEffect } from 'react';
import { Sun, Play, Pause, Volume2, Sparkles } from 'lucide-react';

export const DailyInvocation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getSunriseTime = () => {
    // Simplified sunrise calculation - in a real app, this would use location data
    return "6:24 AM";
  };

  const getTimeUntilSunrise = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(6, 24, 0, 0);
    
    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  const invocations = [
    {
      title: "Dawn Awakening",
      sanskrit: "सूर्यस्य तेजः प्रकाशः मयि",
      translation: "May the light and radiance of the Sun shine within me",
      description: "A sacred utterance to align with the rising solar energy"
    },
    {
      title: "Solar Activation",
      sanskrit: "ॐ सूर्याय नमः",
      translation: "Om, I bow to the Sun",
      description: "Ancient mantra to invoke solar consciousness"
    },
    {
      title: "Energy Harmonization",
      sanskrit: "प्राणशक्तिर्मे जागृतु",
      translation: "May my life force energy awaken",
      description: "Invocation to activate internal solar fire"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
          Daily Solar Invocation
        </h2>
        <p className="text-lg text-amber-700">
          Sacred utterances for solar alignment and spiritual awakening
        </p>
      </div>

      {/* Sunrise Timer */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center shadow-lg mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Sun className="w-12 h-12 animate-pulse" />
          <div>
            <h3 className="text-2xl font-serif font-bold">Tomorrow's Sunrise</h3>
            <p className="text-lg opacity-90">{getSunriseTime()}</p>
          </div>
        </div>
        <div className="text-3xl font-bold mb-2">{getTimeUntilSunrise()}</div>
        <p className="opacity-90">until solar awakening</p>
      </div>

      {/* Invocation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {invocations.map((invocation, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="text-center mb-4">
              <h3 className="text-xl font-serif font-bold text-amber-800 mb-2">
                {invocation.title}
              </h3>
              <div className="text-2xl font-serif text-amber-600 mb-2">
                {invocation.sanskrit}
              </div>
              <p className="text-sm italic text-amber-700 mb-2">
                {invocation.translation}
              </p>
              <p className="text-xs text-amber-600">
                {invocation.description}
              </p>
            </div>
            
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-xl font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Practice</span>
            </button>
          </div>
        ))}
      </div>

      {/* Audio Player */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-amber-600" />
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-800">
                Solar Frequency Soundscape
              </h3>
              <p className="text-amber-700">3-minute vibrational alignment</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-amber-600" />
            <span className="text-sm text-amber-700">528Hz Solar Frequencies</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          
          <div className="flex-1">
            <div className="bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between text-sm text-amber-600">
              <span>1:24</span>
              <span>3:00</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/50 rounded-xl p-6">
            <h4 className="font-bold text-amber-800 mb-3">Listening Instructions</h4>
            <ul className="space-y-2 text-sm text-amber-700">
              <li>• Face east toward the rising sun</li>
              <li>• Place hands on heart center</li>
              <li>• Breathe deeply and naturally</li>
              <li>• Allow the frequencies to penetrate</li>
              <li>• End with gratitude to the Sun</li>
            </ul>
          </div>
          
          <div className="bg-white/50 rounded-xl p-6">
            <h4 className="font-bold text-amber-800 mb-3">Benefits</h4>
            <ul className="space-y-2 text-sm text-amber-700">
              <li>• Aligns chakras with solar energy</li>
              <li>• Activates pineal gland</li>
              <li>• Balances circadian rhythms</li>
              <li>• Enhances spiritual connection</li>
              <li>• Promotes energetic clarity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
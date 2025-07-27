import React, { useState } from 'react';
import { Moon, Star, Sunset, Sunrise, Clock, Heart, Brain, Sparkles } from 'lucide-react';

const SleepCompass: React.FC = () => {
  const [bedtime, setBedtime] = useState('22:00');
  const [wakeTime, setWakeTime] = useState('06:00');
  const [sleepQuality, setSleepQuality] = useState(7);

  const sleepPhases = [
    { name: 'Golden Hour Preparation', time: '19:00-20:00', activity: 'Gentle stretching, dim lights', icon: '🌅' },
    { name: 'Twilight Transition', time: '20:00-21:00', activity: 'Meditation, gratitude practice', icon: '🌆' },
    { name: 'Lunar Descent', time: '21:00-22:00', activity: 'Reading, herbal tea, cool down', icon: '🌙' },
    { name: 'Deep Rest', time: '22:00-06:00', activity: 'Sacred sleep, dream integration', icon: '💤' },
    { name: 'Dawn Awakening', time: '06:00-07:00', activity: 'Gentle rising, morning light', icon: '🌅' }
  ];

  const sleepRituals = {
    'evening-preparation': {
      name: 'Evening Preparation Ritual',
      duration: '20 minutes',
      description: 'Sacred practices to prepare body and mind for restorative sleep',
      steps: [
        'Dim all lights and light a candle',
        'Practice gratitude for the day',
        'Gentle self-massage with warm oil',
        'Set intention for peaceful dreams',
        'Create a cool, dark sleep environment'
      ],
      color: 'from-indigo-400 to-purple-500'
    },
    'lunar-meditation': {
      name: 'Lunar Meditation',
      duration: '15 minutes',
      description: 'Connecting with lunar energy for deep rest and regeneration',
      steps: [
        'Lie comfortably with eyes closed',
        'Visualize soft moonlight bathing you',
        'Breathe deeply, releasing the day',
        'Send love to every part of your body',
        'Drift into peaceful sleep awareness'
      ],
      color: 'from-purple-400 to-blue-500'
    },
    'dream-integration': {
      name: 'Dream Integration Practice',
      duration: '10 minutes',
      description: 'Morning ritual to honor and integrate dream wisdom',
      steps: [
        'Upon waking, remain still with eyes closed',
        'Recall any dreams or feelings',
        'Journal dream symbols or emotions',
        'Set intention for the day ahead',
        'Express gratitude for the night\'s rest'
      ],
      color: 'from-pink-400 to-yellow-400'
    }
  };

  const sleepInsights = [
    {
      title: 'Optimal Sleep Window',
      value: '8.5 hours',
      description: 'Your ideal sleep duration based on circadian patterns',
      color: 'text-blue-600'
    },
    {
      title: 'REM Cycles',
      value: '5-6 cycles',
      description: 'Complete sleep cycles for optimal restoration',
      color: 'text-purple-600'
    },
    {
      title: 'Solar Alignment',
      value: '92%',
      description: 'How well your sleep aligns with natural rhythms',
      color: 'text-green-600'
    },
    {
      title: 'Recovery Score',
      value: sleepQuality,
      description: 'Overall sleep quality and restoration',
      color: 'text-yellow-600'
    }
  ];

  const calculateSleepDuration = () => {
    const bedtimeDate = new Date(`2000-01-01 ${bedtime}`);
    const wakeTimeDate = new Date(`2000-01-02 ${wakeTime}`);
    const diff = wakeTimeDate.getTime() - bedtimeDate.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Moon className="w-6 h-6 text-indigo-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sacred Sleep Compass
            </h1>
            <Star className="w-6 h-6 text-indigo-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Navigate your sleep journey in harmony with cosmic rhythms</p>
        </div>

        {/* Sleep Schedule */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Your Sacred Sleep Schedule
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Time Settings */}
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-amber-800 mb-2">Bedtime</label>
                  <input
                    type="time"
                    value={bedtime}
                    onChange={(e) => setBedtime(e.target.value)}
                    className="w-full p-3 rounded-lg border border-yellow-200 bg-white/70 text-amber-800 focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-amber-800 mb-2">Wake Time</label>
                  <input
                    type="time"
                    value={wakeTime}
                    onChange={(e) => setWakeTime(e.target.value)}
                    className="w-full p-3 rounded-lg border border-yellow-200 bg-white/70 text-amber-800 focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-amber-800 mb-2">Sleep Quality (1-10)</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={sleepQuality}
                    onChange={(e) => setSleepQuality(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-amber-600 mt-1">
                    <span>Poor</span>
                    <span className="font-semibold">{sleepQuality}/10</span>
                    <span>Excellent</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-amber-800 mb-2">Sleep Duration</h3>
                <div className="text-2xl font-bold text-indigo-600">{calculateSleepDuration()}</div>
                <p className="text-sm text-amber-600">Total sleep time</p>
              </div>
            </div>

            {/* Sleep Insights */}
            <div className="grid grid-cols-2 gap-4">
              {sleepInsights.map(({ title, value, description, color }) => (
                <div key={title} className="bg-white/50 rounded-lg p-4 text-center border border-yellow-200/50">
                  <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                  <h4 className="font-semibold text-amber-800 text-sm mb-1">{title}</h4>
                  <p className="text-xs text-amber-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sleep Phases Timeline */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
            <Sunset className="w-5 h-5 mr-2" />
            Daily Sleep Rhythm
          </h2>
          
          <div className="space-y-4">
            {sleepPhases.map(({ name, time, activity, icon }, index) => (
              <div key={name} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200/50">
                <div className="text-3xl">{icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-amber-800">{name}</h3>
                    <span className="text-sm text-amber-600 font-medium">{time}</span>
                  </div>
                  <p className="text-sm text-amber-600">{activity}</p>
                </div>
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep Rituals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(sleepRituals).map(([key, ritual]) => (
            <div key={key} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${ritual.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  {key === 'evening-preparation' && <Moon className="w-8 h-8 text-white" />}
                  {key === 'lunar-meditation' && <Star className="w-8 h-8 text-white" />}
                  {key === 'dream-integration' && <Sunrise className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-800 mb-2">{ritual.name}</h3>
                <p className="text-amber-600 text-sm mb-4">{ritual.description}</p>
                <div className="text-sm text-amber-700 font-medium">Duration: {ritual.duration}</div>
              </div>

              <div className="space-y-3 mb-6">
                {ritual.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm text-amber-700">{step}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 bg-gradient-to-r ${ritual.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}>
                Begin Ritual
              </button>
            </div>
          ))}
        </div>

        {/* Sleep Wisdom */}
        <div className="mt-8 bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/30">
          <h2 className="text-xl font-serif font-bold text-amber-800 mb-6 text-center flex items-center justify-center">
            <Brain className="w-5 h-5 mr-2" />
            Sacred Sleep Wisdom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Sacred Darkness",
                tip: "Complete darkness activates pineal gland for optimal melatonin production.",
                icon: "🌑"
              },
              {
                title: "Cool Temple",
                tip: "Keep your sleep space cool (65-68°F) for deeper, more restorative rest.",
                icon: "❄️"
              },
              {
                title: "Digital Sunset",
                tip: "End screen time 2 hours before bed to honor natural circadian rhythms.",
                icon: "📱"
              },
              {
                title: "Morning Light",
                tip: "Greet the dawn light within 30 minutes of waking to set your internal clock.",
                icon: "🌅"
              }
            ].map(({ title, tip, icon }) => (
              <div key={title} className="text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-semibold text-amber-800 mb-2">{title}</h3>
                <p className="text-sm text-amber-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepCompass;
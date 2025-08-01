import React, { useState, useEffect } from 'react';
import { User, Star, Zap, Crown, Sparkles, TrendingUp, Award, Sun } from 'lucide-react';

const AvatarProgression: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(7);
  const [experience, setExperience] = useState(2840);
  const [nextLevelXP, setNextLevelXP] = useState(3000);
  const [glowIntensity, setGlowIntensity] = useState(1);

  const avatarStages = [
    { level: 1, name: 'Solar Spark', description: 'A tiny spark of solar consciousness awakens', icon: '✨', color: 'from-yellow-200 to-yellow-300' },
    { level: 2, name: 'Dawn Seeker', description: 'Beginning to align with solar rhythms', icon: '🌅', color: 'from-orange-200 to-yellow-300' },
    { level: 3, name: 'Zenith Conqueror', description: 'Mastering solar alignment', icon: '⚔️', color: 'from-red-400 to-purple-400' },
    { level: 4, name: 'Solar Student', description: 'Learning the sacred ways of sun wisdom', icon: '📿', color: 'from-orange-300 to-red-400' },
    { level: 5, name: 'Radiant Seeker', description: 'Seeking deeper connection with cosmic energy', icon: '🔮', color: 'from-yellow-400 to-orange-500' },
    { level: 6, name: 'Solar Practitioner', description: 'Established in daily solar practices', icon: '🧘', color: 'from-orange-400 to-red-500' },
    { level: 7, name: 'Luminous Being', description: 'Radiating inner light and wisdom', icon: '👤', color: 'from-yellow-500 to-orange-600' },
    { level: 8, name: 'Solar Conqueror', description: 'Strong in purpose and solar alignment', icon: '🗡️', color: 'from-orange-500 to-red-600' },
    { level: 9, name: 'Light Guardian', description: 'Protecting and sharing sacred knowledge', icon: '🛡️', color: 'from-yellow-600 to-orange-700' },
    { level: 10, name: 'Solar Sage', description: 'Wise teacher of solar mysteries', icon: '👨‍🏫', color: 'from-orange-600 to-red-700' },
    { level: 11, name: 'Cosmic Healer', description: 'Channeling healing solar energies', icon: '💫', color: 'from-yellow-700 to-orange-800' },
    { level: 12, name: 'Sun Avatar', description: 'Embodiment of solar consciousness', icon: '☀️', color: 'from-orange-700 to-red-800' }
  ];

  const achievements = [
    { name: 'Early Riser', description: 'Completed 7 sunrise rituals', icon: '🌅', unlocked: true, date: '3 days ago' },
    { name: 'Breath Master', description: 'Completed 50 breathwork sessions', icon: '💨', unlocked: true, date: '1 week ago' },
    { name: 'Solar Aligned', description: 'Maintained 90%+ alignment for 30 days', icon: '⚡', unlocked: true, date: '2 weeks ago' },
    { name: 'Movement Flow', description: 'Practiced daily movement for 21 days', icon: '🤸', unlocked: false, progress: 18 },
    { name: 'Meal Harmony', description: 'Followed sun-sync meals for 14 days', icon: '🍽️', unlocked: false, progress: 9 },
    { name: 'Zenith Conqueror', description: 'Peak energy sessions during solar zenith', icon: '⚔️', unlocked: false, progress: 12 }
  ];

  const weeklyProgress = [
    { day: 'Mon', alignment: 85, rituals: 3 },
    { day: 'Tue', alignment: 92, rituals: 4 },
    { day: 'Wed', alignment: 78, rituals: 2 },
    { day: 'Thu', alignment: 88, rituals: 3 },
    { day: 'Fri', alignment: 95, rituals: 5 },
    { day: 'Sat', alignment: 90, rituals: 4 },
    { day: 'Sun', alignment: 87, rituals: 3 }
  ];

  const currentStage = avatarStages.find(stage => stage.level === currentLevel) || avatarStages[0];
  const nextStage = avatarStages.find(stage => stage.level === currentLevel + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => prev === 1 ? 1.2 : 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (experience / nextLevelXP) * 100;

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-purple-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Solar Avatar
            </h1>
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Your evolving solar essence and spiritual progression</p>
          <p className="text-lg text-amber-700">Your evolving solar essence and elevated path</p>
        </div>

        {/* Avatar Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 shadow-xl mb-8">
          <div className="text-center">
            {/* Avatar Circle */}
            <div className="relative mb-6">
              <div 
                className={`w-48 h-48 mx-auto bg-gradient-to-br ${currentStage.color} rounded-full flex items-center justify-center shadow-2xl transition-transform duration-2000 border-4 border-white/50`}
                style={{ transform: `scale(${glowIntensity})` }}
              >
                <div className="text-6xl">{currentStage.icon}</div>
              </div>
              
              {/* Level Badge */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white">
                {currentLevel}
              </div>
              
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-yellow-400/80 rounded-full animate-ping"
                  style={{
                    top: `${20 + Math.sin(i * Math.PI / 3) * 60}%`,
                    left: `${20 + Math.cos(i * Math.PI / 3) * 60}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Avatar Info */}
            <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">{currentStage.name}</h2>
            <p className="text-amber-600 italic mb-6 max-w-md mx-auto">{currentStage.description}</p>

            {/* Experience Progress */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between text-sm text-amber-600 mb-2">
                <span>Level {currentLevel}</span>
                <span>{experience} / {nextLevelXP} XP</span>
                {nextStage && <span>Level {nextStage.level}</span>}
              </div>
              <div className="w-full bg-yellow-100 rounded-full h-4 mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-orange-500 h-4 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              {nextStage && (
                <p className="text-sm text-amber-600">
                  Next: <span className="font-semibold">{nextStage.name}</span> - {nextLevelXP - experience} XP to go
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Stats and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Progress Chart */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Weekly Alignment
            </h3>
            <div className="space-y-3">
              {weeklyProgress.map(({ day, alignment, rituals }) => (
                <div key={day} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-amber-700 w-8">{day}</span>
                    <div className="w-32 bg-yellow-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                        style={{ width: `${alignment}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-amber-600">{alignment}%</span>
                    <div className="flex space-x-1">
                      {[...Array(rituals)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solar Stats */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
              <Sun className="w-5 h-5 mr-2" />
              Solar Mastery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Rituals', value: '247', color: 'text-yellow-600' },
                { label: 'Streak Days', value: '18', color: 'text-orange-600' },
                { label: 'Avg Alignment', value: '87%', color: 'text-green-600' },
                { label: 'Wisdom Points', value: '1,340', color: 'text-purple-600' }
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                  <div className="text-xs text-amber-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Sacred Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map(({ name, description, icon, unlocked, date, progress }) => (
              <div key={name} className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                unlocked 
                  ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-300 shadow-md' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`text-2xl ${unlocked ? '' : 'grayscale opacity-50'}`}>{icon}</div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${unlocked ? 'text-amber-800' : 'text-gray-500'}`}>{name}</h4>
                    {unlocked && date && (
                      <p className="text-xs text-amber-600">Unlocked {date}</p>
                    )}
                  </div>
                  {unlocked && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                </div>
                <p className={`text-sm ${unlocked ? 'text-amber-600' : 'text-gray-400'}`}>{description}</p>
                {!unlocked && progress && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                        style={{ width: `${(progress / 21) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{progress}/21 progress</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Evolution Path */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
          <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
            <Crown className="w-5 h-5 mr-2" />
            Solar Evolution Path
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {avatarStages.slice(0, 12).map((stage) => (
              <div key={stage.level} className={`text-center p-3 rounded-lg border-2 transition-all duration-300 ${
                stage.level === currentLevel
                  ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-400 shadow-lg transform scale-105'
                  : stage.level < currentLevel
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-2xl mb-2 ${stage.level > currentLevel ? 'grayscale opacity-50' : ''}`}>
                  {stage.icon}
                </div>
                <div className={`text-xs font-semibold mb-1 ${
                  stage.level === currentLevel ? 'text-amber-800' :
                  stage.level < currentLevel ? 'text-green-700' : 'text-gray-500'
                }`}>
                  Lv.{stage.level}
                </div>
                <div className={`text-xs ${
                  stage.level === currentLevel ? 'text-amber-600' :
                  stage.level < currentLevel ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {stage.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarProgression;
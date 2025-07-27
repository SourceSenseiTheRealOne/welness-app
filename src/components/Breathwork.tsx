import React, { useState, useEffect } from 'react';
import { Heart, Play, Pause, RotateCcw, Sun, Moon, Wind, Sparkles } from 'lucide-react';

const Breathwork: React.FC = () => {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');
  const [cycleCount, setCycleCount] = useState(0);

  const breathworkSessions = {
    'solar-activation': {
      name: 'Solar Activation Breath',
      duration: '10 minutes',
      description: 'Energizing breathwork to align with solar power and awaken your inner fire.',
      pattern: { inhale: 4, hold: 4, exhale: 4, pause: 2 },
      cycles: 20,
      color: 'from-yellow-400 to-orange-500',
      icon: Sun,
      benefits: ['Increases energy', 'Improves focus', 'Activates solar plexus', 'Boosts confidence']
    },
    'lunar-restoration': {
      name: 'Lunar Restoration Breath',
      duration: '12 minutes',
      description: 'Calming breathwork to harmonize with lunar energy and prepare for rest.',
      pattern: { inhale: 4, hold: 2, exhale: 6, pause: 2 },
      cycles: 15,
      color: 'from-indigo-400 to-purple-500',
      icon: Moon,
      benefits: ['Reduces stress', 'Improves sleep', 'Calms nervous system', 'Enhances relaxation']
    },
    'heart-coherence': {
      name: 'Heart Coherence Flow',
      duration: '8 minutes',
      description: 'Sacred breathing to synchronize heart, mind, and spirit in perfect harmony.',
      pattern: { inhale: 5, hold: 0, exhale: 5, pause: 0 },
      cycles: 25,
      color: 'from-pink-400 to-red-400',
      icon: Heart,
      benefits: ['Balances emotions', 'Increases heart coherence', 'Enhances intuition', 'Promotes love']
    },
    'cosmic-connection': {
      name: 'Cosmic Connection Breath',
      duration: '15 minutes',
      description: 'Advanced practice to connect with universal energy and expand consciousness.',
      pattern: { inhale: 6, hold: 6, exhale: 6, pause: 3 },
      cycles: 12,
      color: 'from-purple-400 to-indigo-500',
      icon: Sparkles,
      benefits: ['Expands awareness', 'Connects to higher self', 'Increases intuition', 'Deepens meditation']
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && activeSession) {
      const session = breathworkSessions[activeSession as keyof typeof breathworkSessions];
      const { inhale, hold, exhale, pause } = session.pattern;
      const totalCycleTime = (inhale + hold + exhale + pause) * 1000;
      
      interval = setInterval(() => {
        setTimer(prev => {
          const newTime = prev + 100;
          const cyclePosition = (newTime % totalCycleTime) / 1000;
          
          if (cyclePosition < inhale) {
            setBreathPhase('inhale');
          } else if (cyclePosition < inhale + hold) {
            setBreathPhase('hold');
          } else if (cyclePosition < inhale + hold + exhale) {
            setBreathPhase('exhale');
          } else {
            setBreathPhase('pause');
          }
          
          // Complete cycle check
          if (newTime > 0 && newTime % totalCycleTime === 0) {
            setCycleCount(prev => prev + 1);
            if (cycleCount >= session.cycles - 1) {
              setIsPlaying(false);
              setTimer(0);
              setCycleCount(0);
              setBreathPhase('inhale');
            }
          }
          
          return newTime;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeSession, cycleCount]);

  const startSession = (sessionKey: string) => {
    setActiveSession(sessionKey);
    setIsPlaying(true);
    setTimer(0);
    setCycleCount(0);
    setBreathPhase('inhale');
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetSession = () => {
    setIsPlaying(false);
    setTimer(0);
    setCycleCount(0);
    setBreathPhase('inhale');
  };

  const getBreathingCircleScale = () => {
    if (!activeSession) return 1;
    
    const session = breathworkSessions[activeSession as keyof typeof breathworkSessions];
    const { inhale, hold, exhale, pause } = session.pattern;
    const totalCycleTime = (inhale + hold + exhale + pause) * 1000;
    const cyclePosition = (timer % totalCycleTime) / 1000;
    
    if (breathPhase === 'inhale') {
      const progress = cyclePosition / inhale;
      return 1 + (progress * 0.8);
    } else if (breathPhase === 'hold') {
      return 1.8;
    } else if (breathPhase === 'exhale') {
      const progress = (cyclePosition - inhale - hold) / exhale;
      return 1.8 - (progress * 0.8);
    } else {
      return 1;
    }
  };

  const getPhaseInstruction = () => {
    switch (breathPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'pause': return 'Pause';
      default: return 'Breathe';
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Wind className="w-6 h-6 text-blue-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solar Breathwork
            </h1>
            <Wind className="w-6 h-6 text-blue-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Sacred breathing practices to harmonize with cosmic rhythms</p>
        </div>

        {/* Active Session */}
        {activeSession && (
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 shadow-xl mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6">
                {breathworkSessions[activeSession as keyof typeof breathworkSessions].name}
              </h2>
              
              {/* Breathing Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div 
                    className={`w-64 h-64 bg-gradient-to-br ${breathworkSessions[activeSession as keyof typeof breathworkSessions].color} rounded-full flex items-center justify-center transition-transform duration-1000 ease-in-out shadow-2xl`}
                    style={{ transform: `scale(${getBreathingCircleScale()})` }}
                  >
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">{getPhaseInstruction()}</div>
                      <div className="text-lg opacity-80">Cycle {cycleCount + 1}</div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-white/50 rounded-full animate-ping"
                      style={{
                        top: `${30 + Math.sin(i * Math.PI / 4) * 40}%`,
                        left: `${30 + Math.cos(i * Math.PI / 4) * 40}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  onClick={togglePlayPause}
                  className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Continue'}</span>
                </button>
                <button
                  onClick={resetSession}
                  className="px-6 py-3 bg-white/60 backdrop-blur-sm border border-yellow-200/50 rounded-xl text-amber-700 font-semibold hover:bg-white/80 transition-all duration-300 flex items-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Progress */}
              <div className="bg-yellow-100 rounded-full h-3 w-full max-w-md mx-auto">
                <div 
                  className={`bg-gradient-to-r ${breathworkSessions[activeSession as keyof typeof breathworkSessions].color} h-3 rounded-full transition-all duration-300`}
                  style={{ width: `${(cycleCount / breathworkSessions[activeSession as keyof typeof breathworkSessions].cycles) * 100}%` }}
                />
              </div>
              <p className="text-sm text-amber-600 mt-2">
                {cycleCount} of {breathworkSessions[activeSession as keyof typeof breathworkSessions].cycles} cycles complete
              </p>
            </div>
          </div>
        )}

        {/* Session Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(breathworkSessions).map(([key, session]) => {
            const Icon = session.icon;
            return (
              <div key={key} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${session.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-amber-800 mb-2">{session.name}</h3>
                  <p className="text-amber-600 text-sm mb-4">{session.description}</p>
                  <div className="text-sm text-amber-700 font-medium mb-4">Duration: {session.duration}</div>
                </div>

                {/* Pattern Display */}
                <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-center">Breathing Pattern</h4>
                  <div className="flex justify-between text-xs text-amber-600">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{session.pattern.inhale}s</div>
                      <div>Inhale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">{session.pattern.hold}s</div>
                      <div>Hold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{session.pattern.exhale}s</div>
                      <div>Exhale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{session.pattern.pause}s</div>
                      <div>Pause</div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-800 mb-3">Sacred Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {session.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-amber-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={() => startSession(key)}
                  className={`w-full py-3 bg-gradient-to-r ${session.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <Play className="w-5 h-5" />
                  <span>Begin Practice</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guidance */}
        <div className="mt-8 bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/30">
          <h2 className="text-xl font-serif font-bold text-amber-800 mb-4 text-center">Sacred Breathing Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sacred Space",
                tip: "Find a quiet, comfortable space where you won't be disturbed. Sit with your spine straight.",
                icon: "🧘"
              },
              {
                title: "Intention Setting",
                tip: "Begin each session by setting a clear intention for your practice and breathing journey.",
                icon: "🎯"
              },
              {
                title: "Natural Rhythm",
                tip: "Let the breath flow naturally without forcing. If you feel dizzy, return to normal breathing.",
                icon: "🌊"
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

export default Breathwork;
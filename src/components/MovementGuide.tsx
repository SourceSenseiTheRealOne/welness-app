import React, { useState } from 'react';
import { Zap, Sun, Moon, Heart, Play, Clock, Target, Sparkles, User, ArrowRight } from 'lucide-react';

interface MovementGuideProps {
  timeOfDay: string;
}

const MovementGuide: React.FC<MovementGuideProps> = ({ timeOfDay }) => {
  const [energyLevel, setEnergyLevel] = useState<'low' | 'optimal' | 'high'>('optimal');
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);

  const solarPhases = {
    dawn: {
      name: 'Dawn Awakening',
      color: 'from-pink-400 to-yellow-400',
      icon: '🌅',
      energy: 'Gentle awakening energy'
    },
    zenith: {
      name: 'Zenith Power',
      color: 'from-yellow-400 to-orange-500',
      icon: '☀️',
      energy: 'Peak vitality and strength'
    },
    golden: {
      name: 'Golden Descent',
      color: 'from-orange-400 to-red-400',
      icon: '🌅',
      energy: 'Balanced transformation'
    },
    lunar: {
      name: 'Lunar Rest',
      color: 'from-indigo-400 to-purple-500',
      icon: '🌙',
      energy: 'Restorative and calming'
    }
  };

  const movementFlows = {
    dawn: {
      low: {
        name: 'Gentle Solar Salutation',
        duration: '10-15 minutes',
        intensity: 'Light',
        description: 'Slow, mindful movements to gently awaken your body and align with rising solar energy.',
        exercises: [
          'Sun Breath (Surya Pranayama)',
          'Gentle spinal waves',
          'Hip circles and joint mobility',
          'Standing forward fold flow',
          'Heart opening stretches'
        ],
        benefits: ['Increases circulation', 'Awakens nervous system', 'Improves flexibility', 'Centers the mind']
      },
      optimal: {
        name: 'Solar Awakening Flow',
        duration: '20-25 minutes',
        intensity: 'Moderate',
        description: 'Dynamic morning sequence combining breath, movement, and intention setting.',
        exercises: [
          'Traditional Sun Salutation A & B',
          'Warrior sequences',
          'Core activation holds',
          'Balance postures',
          'Meditation in motion'
        ],
        benefits: ['Builds strength', 'Improves balance', 'Enhances focus', 'Energizes body']
      },
      high: {
        name: 'Dawn Warrior Practice',
        duration: '30-35 minutes',
        intensity: 'Dynamic',
        description: 'Vigorous flow combining strength, flexibility, and cardiovascular activation.',
        exercises: [
          'Power vinyasa sequences',
          'Arm balances and inversions',
          'Core strengthening series',
          'Dynamic transitions',
          'Cooling breathwork'
        ],
        benefits: ['Builds power', 'Increases endurance', 'Develops coordination', 'Boosts metabolism']
      }
    },
    zenith: {
      low: {
        name: 'Restorative Strength',
        duration: '15-20 minutes',
        intensity: 'Gentle',
        description: 'Supportive movements that build strength without depleting energy reserves.',
        exercises: [
          'Wall-supported poses',
          'Gentle core engagement',
          'Seated spinal movements',
          'Supported backbends',
          'Grounding breathwork'
        ],
        benefits: ['Builds stability', 'Supports posture', 'Reduces tension', 'Conserves energy']
      },
      optimal: {
        name: 'Solar Core Activation',
        duration: '30-40 minutes',
        intensity: 'Moderate-High',
        description: 'Peak power training utilizing maximum solar energy for strength and vitality.',
        exercises: [
          'Compound strength movements',
          'Core power sequences',
          'Functional movement patterns',
          'Cardiovascular intervals',
          'Active recovery stretches'
        ],
        benefits: ['Maximum strength gains', 'Improves power', 'Builds endurance', 'Enhances coordination']
      },
      high: {
        name: 'Zenith Warrior Circuit',
        duration: '45-50 minutes',
        intensity: 'High',
        description: 'Intense full-body workout harnessing peak solar energy for maximum results.',
        exercises: [
          'High-intensity intervals',
          'Plyometric movements',
          'Advanced strength patterns',
          'Explosive power training',
          'Active cool-down flow'
        ],
        benefits: ['Peak performance', 'Maximum calorie burn', 'Builds athleticism', 'Increases power output']
      }
    },
    golden: {
      low: {
        name: 'Golden Hour Gentle Flow',
        duration: '15-20 minutes',
        intensity: 'Light',
        description: 'Slow, meditative movements that harmonize with the softening solar energy.',
        exercises: [
          'Gentle yin postures',
          'Supported stretches',
          'Breathing exercises',
          'Mindful walking',
          'Gratitude meditation'
        ],
        benefits: ['Reduces stress', 'Improves flexibility', 'Calms nervous system', 'Enhances mindfulness']
      },
      optimal: {
        name: 'Transformational Flow',
        duration: '25-30 minutes',
        intensity: 'Moderate',
        description: 'Balanced practice integrating strength, flexibility, and inner reflection.',
        exercises: [
          'Flowing yoga sequences',
          'Core strengthening',
          'Hip opening series',
          'Shoulder mobility',
          'Contemplative breathing'
        ],
        benefits: ['Balanced strength', 'Emotional release', 'Improved mobility', 'Inner harmony']
      },
      high: {
        name: 'Golden Power Flow',
        duration: '35-40 minutes',
        intensity: 'Moderate-High',
        description: 'Dynamic practice channeling golden hour energy for strength and transformation.',
        exercises: [
          'Power yoga flow',
          'Strength building poses',
          'Dynamic balance work',
          'Core power sequences',
          'Cooling meditation'
        ],
        benefits: ['Builds power', 'Burns calories', 'Improves balance', 'Increases flexibility']
      }
    },
    lunar: {
      low: {
        name: 'Moonlight Restoration',
        duration: '15-20 minutes',
        intensity: 'Very Light',
        description: 'Deeply restorative practice to prepare body and mind for regenerative sleep.',
        exercises: [
          'Supported relaxation poses',
          'Gentle stretches',
          'Sleep preparation breathwork',
          'Body scan meditation',
          'Gratitude practice'
        ],
        benefits: ['Promotes sleep', 'Reduces tension', 'Calms mind', 'Aids recovery']
      },
      optimal: {
        name: 'Lunar Unwind Sequence',
        duration: '20-25 minutes',
        intensity: 'Light',
        description: 'Gentle practice focusing on release, restoration, and preparation for rest.',
        exercises: [
          'Yin yoga poses',
          'Gentle spinal movements',
          'Hip releases',
          'Cooling breathwork',
          'Meditation'
        ],
        benefits: ['Improves sleep quality', 'Releases daily tension', 'Balances nervous system', 'Enhances recovery']
      },
      high: {
        name: 'Evening Energy Release',
        duration: '30-35 minutes',
        intensity: 'Light-Moderate',
        description: 'Mindful practice to transform excess energy into deep relaxation and peace.',
        exercises: [
          'Dynamic to static flow',
          'Tension release sequences',
          'Calming inversions',
          'Extended stretching',
          'Deep relaxation'
        ],
        benefits: ['Channels excess energy', 'Promotes deep relaxation', 'Improves flexibility', 'Prepares for rest']
      }
    }
  };

  const currentPhase = solarPhases[timeOfDay as keyof typeof solarPhases];
  const currentFlow = movementFlows[timeOfDay as keyof typeof movementFlows][energyLevel];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Solar Flow Movement
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Bioresonant movement synchronized with cosmic rhythms</p>
        </div>

        {/* Current Solar Phase */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{currentPhase.icon}</div>
            <h2 className="text-2xl font-serif font-bold text-amber-800 mb-2">{currentPhase.name}</h2>
            <p className="text-amber-600 italic">{currentPhase.energy}</p>
          </div>
        </div>

        {/* Energy Level Selection */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6 text-center flex items-center justify-center">
            <Heart className="w-5 h-5 mr-2" />
            How is your energy flowing today?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { key: 'low', label: 'Gentle Flow', description: 'Need nurturing movement', color: 'from-blue-400 to-green-400' },
              { key: 'optimal', label: 'Balanced Energy', description: 'Ready for moderate practice', color: 'from-yellow-400 to-orange-400' },
              { key: 'high', label: 'Dynamic Power', description: 'Feeling strong and energized', color: 'from-red-400 to-pink-400' }
            ].map(({ key, label, description, color }) => (
              <button
                key={key}
                onClick={() => setEnergyLevel(key as any)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  energyLevel === key
                    ? 'border-yellow-300 bg-yellow-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white/50 hover:border-yellow-200'
                }`}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${color} rounded-full flex items-center justify-center mb-4`}>
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">{label}</h3>
                <p className="text-sm text-amber-600">{description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Flow */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl mb-8">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${currentPhase.color} rounded-full flex items-center justify-center mb-4`}>
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-amber-800 mb-2">
              {currentFlow.name}
            </h2>
            <p className="text-amber-600 italic max-w-2xl mx-auto">{currentFlow.description}</p>
          </div>

          {/* Flow Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-semibold text-amber-800 mb-1">Duration</h3>
              <p className="text-amber-600">{currentFlow.duration}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-amber-800 mb-1">Intensity</h3>
              <p className="text-amber-600">{currentFlow.intensity}</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold text-amber-800 mb-1">Solar Phase</h3>
              <p className="text-amber-600">{currentPhase.name}</p>
            </div>
          </div>

          {/* Exercise Sequence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Movement Sequence
              </h3>
              <div className="space-y-3">
                {currentFlow.exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-amber-700">{exercise}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Sacred Benefits
              </h3>
              <div className="space-y-3">
                {currentFlow.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-amber-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Begin Solar Flow</span>
            </button>
            <button className="px-8 py-3 bg-white/60 backdrop-blur-sm border border-yellow-200/50 rounded-xl text-amber-700 font-semibold hover:bg-white/80 transition-all duration-300">
              Customize Practice
            </button>
          </div>
        </div>

        {/* Additional Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Sacred Preparation",
              tip: "Begin with three deep breaths and set an intention for your practice.",
              icon: "🧘"
            },
            {
              title: "Body Awareness",
              tip: "Listen to your body and modify as needed. Honor your limits.",
              icon: "👂"
            },
            {
              title: "Solar Connection",
              tip: "Visualize drawing energy from the sun during your practice.",
              icon: "☀️"
            },
            {
              title: "Integration",
              tip: "End with gratitude and a moment of stillness to integrate.",
              icon: "🙏"
            }
          ].map(({ title, tip, icon }) => (
            <div key={title} className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/30">
              <div className="text-3xl mb-3 text-center">{icon}</div>
              <h3 className="font-semibold text-amber-800 mb-2 text-center">{title}</h3>
              <p className="text-sm text-amber-600 text-center">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovementGuide;
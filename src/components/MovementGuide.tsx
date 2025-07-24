import React, { useState } from 'react';
import { Zap, Sun, Moon, Play, Clock, Target } from 'lucide-react';

export const MovementGuide: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('morning');

  const movements = {
    morning: {
      title: 'Solar Awakening Flow',
      icon: Sun,
      time: '6:00 - 8:00 AM',
      description: 'Ignite your inner fire with sun salutations and pranayama',
      duration: '20-30 minutes',
      intensity: 'Moderate',
      exercises: [
        {
          name: 'Surya Namaskara (Sun Salutation)',
          duration: '10 minutes',
          description: 'Flow through 12 poses while honoring the rising sun',
          benefits: 'Flexibility, strength, energy activation'
        },
        {
          name: 'Ujjayi Pranayama',
          duration: '5 minutes',
          description: 'Victory breath to build internal heat and focus',
          benefits: 'Mental clarity, energy circulation'
        },
        {
          name: 'Solar Plexus Activation',
          duration: '8 minutes',
          description: 'Core strengthening poses to awaken your solar chakra',
          benefits: 'Core strength, confidence, power'
        },
        {
          name: 'Sunrise Meditation',
          duration: '7 minutes',
          description: 'Seated meditation facing east, absorbing solar energy',
          benefits: 'Mental clarity, spiritual connection'
        }
      ]
    },
    afternoon: {
      title: 'Zenith Power Circuit',
      icon: Zap,
      time: '12:00 - 2:00 PM',
      description: 'Channel peak solar energy into dynamic movement',
      duration: '25-35 minutes',
      intensity: 'High',
      exercises: [
        {
          name: 'Solar Warrior Sequence',
          duration: '12 minutes',
          description: 'Dynamic warrior poses with breath synchronization',
          benefits: 'Strength, balance, solar energy integration'
        },
        {
          name: 'Fire Breath (Kapalabhati)',
          duration: '5 minutes',
          description: 'Rapid breathing to stoke digestive fire',
          benefits: 'Detoxification, energy boost, mental clarity'
        },
        {
          name: 'Solar Core Blast',
          duration: '10 minutes',
          description: 'High-intensity core work to build inner fire',
          benefits: 'Core strength, heat generation, power'
        },
        {
          name: 'Cooling Integration',
          duration: '8 minutes',
          description: 'Gentle stretches to balance intense solar energy',
          benefits: 'Recovery, flexibility, energy balance'
        }
      ]
    },
    evening: {
      title: 'Twilight Harmony Flow',
      icon: Moon,
      time: '6:00 - 8:00 PM',
      description: 'Gentle movements to honor the solar transition',
      duration: '15-25 minutes',
      intensity: 'Gentle',
      exercises: [
        {
          name: 'Lunar Salutation',
          duration: '8 minutes',
          description: 'Slow, flowing sequence to honor the moon\'s rising',
          benefits: 'Flexibility, calm, preparation for rest'
        },
        {
          name: 'Nadi Shodhana (Alternate Nostril)',
          duration: '5 minutes',
          description: 'Balancing breath to harmonize solar and lunar energies',
          benefits: 'Nervous system balance, mental calm'
        },
        {
          name: 'Restorative Hip Openers',
          duration: '7 minutes',
          description: 'Gentle hip stretches to release daily tension',
          benefits: 'Flexibility, emotional release, relaxation'
        },
        {
          name: 'Solar Gratitude Savasana',
          duration: '5 minutes',
          description: 'Final relaxation with gratitude for the day\'s solar gifts',
          benefits: 'Deep relaxation, integration, peace'
        }
      ]
    }
  };

  const currentMovement = movements[selectedTime as keyof typeof movements];
  const Icon = currentMovement.icon;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
          Bioresonant Movement Guide
        </h2>
        <p className="text-lg text-amber-700">
          Align your movement practice with solar rhythms for optimal energy flow
        </p>
      </div>

      {/* Time Selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-yellow-200/50">
          {Object.entries(movements).map(([key, movement]) => {
            const MovementIcon = movement.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedTime(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedTime === key
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                    : 'text-amber-700 hover:bg-yellow-100'
                }`}
              >
                <MovementIcon className="w-4 h-4" />
                <span>{movement.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Movement Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200/50 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon className="w-8 h-8 text-amber-600" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-amber-800">
                  {currentMovement.title}
                </h3>
                <p className="text-amber-600">{currentMovement.time}</p>
              </div>
            </div>
            
            <p className="text-lg text-amber-700 mb-6">
              {currentMovement.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/50 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-amber-800">{currentMovement.duration}</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-amber-800">{currentMovement.intensity}</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 text-center">
                <Play className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-amber-800">Start Flow</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg">
              Begin Solar Flow
            </button>
          </div>

          {/* Exercise List */}
          <div className="space-y-4">
            {currentMovement.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-200/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-amber-800">{exercise.name}</h4>
                  <span className="text-sm font-medium text-amber-600 bg-yellow-100 px-3 py-1 rounded-full">
                    {exercise.duration}
                  </span>
                </div>
                <p className="text-amber-700 mb-3">{exercise.description}</p>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">{exercise.benefits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <h3 className="text-lg font-bold text-amber-800 mb-4">Solar Movement Principles</h3>
            <div className="space-y-3 text-sm text-amber-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Move with breath awareness</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Honor your energy levels</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Face the sun when possible</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>End with gratitude</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-2">Today's Energy</h3>
            <p className="text-sm opacity-90 mb-3">
              Your solar alignment suggests moderate intensity movement would be most beneficial.
            </p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-xs font-medium">Recommended: {currentMovement.title}</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <h3 className="text-lg font-bold text-amber-800 mb-4">Weekly Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-amber-700">Flexibility</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="w-12 bg-yellow-400 rounded-full h-2"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-amber-700">Strength</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="w-10 bg-orange-400 rounded-full h-2"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-amber-700">Balance</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="w-14 bg-green-400 rounded-full h-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
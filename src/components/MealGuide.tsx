import React, { useState } from 'react';
import { Utensils, Sun, Leaf, Clock, Star, ChefHat, Apple, Coffee } from 'lucide-react';

interface MealGuideProps {
  timeOfDay: string;
}

const MealGuide: React.FC<MealGuideProps> = ({ timeOfDay }) => {
  const [selectedDosha, setSelectedDosha] = useState<'vata' | 'pitta' | 'kapha'>('pitta');
  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');

  const doshaInfo = {
    vata: {
      color: 'from-blue-400 to-purple-500',
      element: 'Air & Space',
      traits: 'Creative, energetic, variable'
    },
    pitta: {
      color: 'from-red-400 to-orange-500', 
      element: 'Fire & Water',
      traits: 'Focused, intense, warm'
    },
    kapha: {
      color: 'from-green-400 to-blue-500',
      element: 'Earth & Water', 
      traits: 'Stable, nurturing, grounded'
    }
  };

  const getMealsByTime = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) return 'breakfast';
    if (hour >= 11 && hour < 16) return 'lunch';
    return 'dinner';
  };

  const currentMealTime = getMealsByTime();

  const mealRecommendations = {
    breakfast: {
      vata: {
        primary: 'Golden Turmeric Porridge',
        ingredients: ['Warm oats', 'Almond milk', 'Turmeric', 'Ghee', 'Dates', 'Cinnamon'],
        benefits: 'Grounds and nourishes the nervous system',
        prep: '10 minutes',
        icon: '🌅'
      },
      pitta: {
        primary: 'Cooling Coconut Bowl',
        ingredients: ['Coconut yogurt', 'Fresh berries', 'Mint', 'Rose water', 'Almonds', 'Honey'],
        benefits: 'Cools excess heat and calms inflammation',
        prep: '5 minutes',
        icon: '🥥'
      },
      kapha: {
        primary: 'Energizing Spice Smoothie',
        ingredients: ['Green tea', 'Ginger', 'Lemon', 'Cayenne', 'Spinach', 'Apple'],
        benefits: 'Stimulates metabolism and clears congestion',
        prep: '8 minutes',
        icon: '🌶️'
      }
    },
    lunch: {
      vata: {
        primary: 'Nourishing Buddha Bowl',
        ingredients: ['Quinoa', 'Roasted vegetables', 'Avocado', 'Tahini', 'Pumpkin seeds'],
        benefits: 'Provides sustained energy and healthy fats',
        prep: '20 minutes',
        icon: '🍲'
      },
      pitta: {
        primary: 'Cooling Garden Salad',
        ingredients: ['Mixed greens', 'Cucumber', 'Coconut', 'Cilantro', 'Lime', 'Olive oil'],
        benefits: 'Hydrates and reduces internal heat',
        prep: '15 minutes',
        icon: '🥗'
      },
      kapha: {
        primary: 'Warming Spiced Soup',
        ingredients: ['Lentils', 'Ginger', 'Turmeric', 'Black pepper', 'Leafy greens'],
        benefits: 'Aids digestion and reduces heaviness',
        prep: '25 minutes',
        icon: '🍜'
      }
    },
    dinner: {
      vata: {
        primary: 'Grounding Root Stew',
        ingredients: ['Sweet potato', 'Carrots', 'Ginger', 'Coconut milk', 'Fresh herbs'],
        benefits: 'Calms the nervous system for restful sleep',
        prep: '30 minutes',
        icon: '🥕'
      },
      pitta: {
        primary: 'Cooling Herb Pasta',
        ingredients: ['Zucchini noodles', 'Basil pesto', 'Cherry tomatoes', 'Pine nuts'],
        benefits: 'Light and cooling for evening digestion',
        prep: '20 minutes',
        icon: '🌿'
      },
      kapha: {
        primary: 'Detox Veggie Stir-fry',
        ingredients: ['Broccoli', 'Bell peppers', 'Garlic', 'Ginger', 'Sesame oil'],
        benefits: 'Supports metabolism and toxin elimination',
        prep: '18 minutes',
        icon: '🥦'
      }
    }
  };

  const currentRecommendation = mealRecommendations[mealType][selectedDosha];

  const solarGuidance = {
    dawn: {
      message: "As the sun rises, your digestive fire awakens. Choose warming, nourishing foods.",
      color: 'text-pink-600'
    },
    zenith: {
      message: "Peak solar energy supports strong digestion. This is your most substantial meal time.",
      color: 'text-yellow-600'
    },
    golden: {
      message: "As daylight softens, choose lighter foods that harmonize with evening energy.",
      color: 'text-orange-600'
    },
    lunar: {
      message: "Night calls for minimal, easily digestible foods to support restorative sleep.",
      color: 'text-indigo-600'
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Utensils className="w-6 h-6 text-green-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              Sun-Sync Meal Guide
            </h1>
            <Leaf className="w-6 h-6 text-green-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Nourish your body in harmony with solar rhythms and Ayurvedic wisdom</p>
        </div>

        {/* Solar Guidance */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Sun className="w-8 h-8 text-yellow-500" />
            <h2 className="text-xl font-semibold text-amber-800">Current Solar Phase: {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}</h2>
          </div>
          <p className={`text-center text-lg ${solarGuidance[timeOfDay as keyof typeof solarGuidance].color} italic`}>
            {solarGuidance[timeOfDay as keyof typeof solarGuidance].message}
          </p>
        </div>

        {/* Dosha Selection */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6 text-center">Select Your Dosha Constitution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(doshaInfo).map(([dosha, info]) => (
              <button
                key={dosha}
                onClick={() => setSelectedDosha(dosha as any)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedDosha === dosha
                    ? 'border-yellow-300 bg-yellow-50 shadow-lg'
                    : 'border-gray-200 bg-white/50 hover:border-yellow-200'
                }`}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-2xl text-white font-bold">{dosha.charAt(0).toUpperCase()}</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-800 capitalize mb-2">{dosha}</h3>
                <p className="text-sm text-amber-600 mb-1">{info.element}</p>
                <p className="text-xs text-amber-500">{info.traits}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Meal Time Selection */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6 text-center">Choose Meal Time</h2>
          <div className="flex justify-center space-x-4">
            {[
              { key: 'breakfast', label: 'Dawn Meal', icon: Coffee, time: '6-10 AM' },
              { key: 'lunch', label: 'Zenith Feast', icon: Sun, time: '12-2 PM' },
              { key: 'dinner', label: 'Evening Nourishment', icon: Star, time: '6-8 PM' }
            ].map(({ key, label, icon: Icon, time }) => (
              <button
                key={key}
                onClick={() => setMealType(key as any)}
                className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                  mealType === key
                    ? 'bg-gradient-to-b from-yellow-100 to-orange-100 shadow-md'
                    : 'bg-white/50 hover:bg-yellow-50'
                } ${currentMealTime === key ? 'ring-2 ring-yellow-400' : ''}`}
              >
                <Icon className="w-6 h-6 text-amber-600" />
                <div className="text-center">
                  <p className="font-semibold text-amber-800 text-sm">{label}</p>
                  <p className="text-xs text-amber-600">{time}</p>
                </div>
                {currentMealTime === key && (
                  <div className="text-xs text-yellow-600 font-medium">Current</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Recommendation */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{currentRecommendation.icon}</div>
            <h2 className="text-2xl font-serif font-bold text-amber-800 mb-2">
              {currentRecommendation.primary}
            </h2>
            <p className="text-amber-600 italic">{currentRecommendation.benefits}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Sacred Ingredients
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {currentRecommendation.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-amber-700 text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <ChefHat className="w-5 h-5 mr-2" />
                Preparation Ritual
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-amber-700">Prep Time: {currentRecommendation.prep}</span>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Begin by centering yourself and expressing gratitude for the nourishment. 
                    Prepare each ingredient mindfully, infusing your meal with positive intention. 
                    Cook with awareness, allowing the aromas and colors to awaken your senses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-8">
            <button className="w-full divine-gold-bg text-white py-3 px-6 rounded-xl hover:incandescent-glow transition-all duration-300 font-semibold btn-solar border-2 border-yellow-300">
              Begin Aligned Cooking
            </button>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Mindful Eating",
              tip: "Chew slowly and savor each bite. Let gratitude fill your heart.",
              icon: "🧘"
            },
            {
              title: "Solar Timing", 
              tip: "Align your largest meal with peak solar energy (noon).",
              icon: "☀️"
            },
            {
              title: "Seasonal Harmony",
              tip: "Choose local, seasonal foods that resonate with Earth's cycles.",
              icon: "🌱"
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

export default MealGuide;
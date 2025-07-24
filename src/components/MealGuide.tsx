import React, { useState } from 'react';
import { Leaf, Clock, MapPin, Sparkles } from 'lucide-react';

export const MealGuide: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

  const meals = {
    breakfast: {
      title: 'Dawn Nourishment',
      time: '6:00 - 8:00 AM',
      description: 'Awaken your digestive fire with warm, grounding foods that honor the rising sun.',
      foods: [
        { name: 'Golden Turmeric Porridge', dosha: 'Vata', benefits: 'Warming, grounding' },
        { name: 'Sunrise Smoothie Bowl', dosha: 'Pitta', benefits: 'Cooling, energizing' },
        { name: 'Spiced Oatmeal with Almonds', dosha: 'Kapha', benefits: 'Stimulating, light' },
        { name: 'Herbal Tea Blend', dosha: 'All', benefits: 'Hydrating, cleansing' }
      ],
      ritual: 'Face east while eating. Chew slowly and mindfully. Express gratitude for the sun\'s energy.'
    },
    lunch: {
      title: 'Solar Zenith Feast',
      time: '12:00 - 2:00 PM',
      description: 'Embrace the sun\'s peak energy with your largest, most nourishing meal of the day.',
      foods: [
        { name: 'Rainbow Buddha Bowl', dosha: 'All', benefits: 'Balancing, energizing' },
        { name: 'Grilled Vegetables with Quinoa', dosha: 'Vata', benefits: 'Nourishing, grounding' },
        { name: 'Cooling Cucumber Salad', dosha: 'Pitta', benefits: 'Cooling, hydrating' },
        { name: 'Warm Lentil Soup', dosha: 'Kapha', benefits: 'Warming, protein-rich' }
      ],
      ritual: 'Eat in sunlight when possible. Take three deep breaths before eating. Chew each bite 20 times.'
    },
    dinner: {
      title: 'Twilight Harmony',
      time: '6:00 - 7:30 PM',
      description: 'Honor the sun\'s descent with lighter, easily digestible foods that prepare for rest.',
      foods: [
        { name: 'Gentle Vegetable Broth', dosha: 'Vata', benefits: 'Warming, soothing' },
        { name: 'Steamed Greens with Ghee', dosha: 'Pitta', benefits: 'Cooling, nourishing' },
        { name: 'Light Kitchari', dosha: 'Kapha', benefits: 'Digestible, cleansing' },
        { name: 'Herbal Digestive Tea', dosha: 'All', benefits: 'Settling, calming' }
      ],
      ritual: 'Light a candle during your meal. Reflect on the day\'s blessings. Eat in peaceful silence.'
    }
  };

  const currentMeal = meals[selectedMeal as keyof typeof meals];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
          Sun-Sync Meal Guide
        </h2>
        <p className="text-lg text-amber-700">
          Nourish your body in harmony with solar rhythms and Ayurvedic wisdom
        </p>
      </div>

      {/* Meal Selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-yellow-200/50">
          {Object.entries(meals).map(([key, meal]) => (
            <button
              key={key}
              onClick={() => setSelectedMeal(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedMeal === key
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-yellow-100'
              }`}
            >
              {meal.title}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Meal Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200/50 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-medium text-amber-700">{currentMeal.time}</span>
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-amber-800 mb-4">
              {currentMeal.title}
            </h3>
            
            <p className="text-lg text-amber-700 mb-6">
              {currentMeal.description}
            </p>

            <div className="bg-white/50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h4 className="text-lg font-bold text-amber-800">Sacred Eating Ritual</h4>
              </div>
              <p className="text-amber-700 italic">{currentMeal.ritual}</p>
            </div>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentMeal.foods.map((food, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-200/50">
                <div className="flex items-center space-x-3 mb-3">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-amber-800">{food.name}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-amber-600">
                    <span className="font-medium">Dosha:</span> {food.dosha}
                  </p>
                  <p className="text-amber-600">
                    <span className="font-medium">Benefits:</span> {food.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-amber-800">Local Seasons</h3>
            </div>
            <div className="space-y-2 text-sm text-amber-700">
              <p><span className="font-medium">Current:</span> Spring Awakening</p>
              <p><span className="font-medium">Focus:</span> Cleansing, renewal</p>
              <p><span className="font-medium">Flavors:</span> Bitter, astringent</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
            <h3 className="text-lg font-bold text-amber-800 mb-4">Ayurvedic Principles</h3>
            <div className="space-y-3 text-sm text-amber-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span><strong>Vata:</strong> Warm, moist, grounding</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span><strong>Pitta:</strong> Cool, dry, calming</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span><strong>Kapha:</strong> Light, warm, stimulating</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-2">Daily Solar Nutrition</h3>
            <p className="text-sm opacity-90">
              Align your meals with the sun's energy for optimal digestion and vitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
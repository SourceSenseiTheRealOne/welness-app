import React, { useState } from 'react';
import { ShoppingBag, Star, Crown, Zap, Gem, Heart } from 'lucide-react';

export const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('subscriptions');

  const categories = [
    { id: 'subscriptions', label: 'Premium', icon: Crown },
    { id: 'elixirs', label: 'Solar Elixirs', icon: Zap },
    { id: 'wearables', label: 'Bioresonant Wearables', icon: Gem },
    { id: 'rituals', label: 'Digital Rituals', icon: Heart }
  ];

  const products = {
    subscriptions: [
      {
        id: 1,
        name: 'SuryaWell Premium',
        price: '$19.99/month',
        image: 'https://images.pexels.com/photos/3059873/pexels-photo-3059873.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Personalized AI guidance', 'Advanced chronotype analysis', 'Unlimited rituals', 'Priority support'],
        badge: 'Most Popular'
      },
      {
        id: 2,
        name: 'Solar Sage Tier',
        price: '$49.99/month',
        image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Everything in Premium', 'Live expert sessions', 'Custom ritual creation', 'Bioenergetic reports'],
        badge: 'Premium'
      }
    ],
    elixirs: [
      {
        id: 3,
        name: 'Golden Dawn Elixir',
        price: '$34.99',
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Turmeric & Ginger blend', 'Supports morning energy', 'Organic ingredients', '30-day supply'],
        badge: 'Bestseller'
      },
      {
        id: 4,
        name: 'Solar Clarity Blend',
        price: '$29.99',
        image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Rhodiola & Ashwagandha', 'Mental clarity support', 'Stress adaptation', 'Vegan capsules'],
        badge: 'New'
      },
      {
        id: 5,
        name: 'Twilight Harmony Tea',
        price: '$24.99',
        image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Chamomile & Lavender', 'Evening wind-down', 'Promotes deep sleep', 'Loose leaf blend'],
        badge: 'Calming'
      }
    ],
    wearables: [
      {
        id: 6,
        name: 'Solar Frequency Pendant',
        price: '$89.99',
        image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Citrine crystal core', 'Solar energy amplification', 'Handcrafted design', 'Adjustable chain'],
        badge: 'Energizing'
      },
      {
        id: 7,
        name: 'Bioresonant Bracelet',
        price: '$67.99',
        image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Copper & gold plated', 'Biofield harmonization', 'Adjustable sizing', 'Sacred geometry'],
        badge: 'Balancing'
      }
    ],
    rituals: [
      {
        id: 8,
        name: 'Solar Awakening Deck',
        price: '$16.99',
        image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['50 digital cards', 'Morning ritual guidance', 'Interactive animations', 'Voice narration'],
        badge: 'Digital'
      },
      {
        id: 9,
        name: 'Lunar Integration Set',
        price: '$14.99',
        image: 'https://images.pexels.com/photos/1556709/pexels-photo-1556709.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
        features: ['Evening practices', 'Sleep preparation', 'Moon phase alignment', 'Guided meditations'],
        badge: 'Peaceful'
      }
    ]
  };

  const currentProducts = products[selectedCategory as keyof typeof products];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
          The Mythic Marketplace
        </h2>
        <p className="text-lg text-amber-700">
          Sacred tools and wisdom for your solar journey
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-yellow-200/50">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-yellow-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-yellow-200/50 hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {product.badge}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-amber-800 mb-2">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-amber-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Sacred Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sacred Guarantee */}
      <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center shadow-lg">
        <h3 className="text-2xl font-serif font-bold mb-4">Sacred Satisfaction Guarantee</h3>
        <p className="text-lg opacity-90">
          If your solar journey isn't transformed within 30 days, we'll honor your path with a full refund.
        </p>
      </div>
    </div>
  );
};
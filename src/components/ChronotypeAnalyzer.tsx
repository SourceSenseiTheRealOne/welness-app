import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset, CheckCircle } from 'lucide-react';

export const ChronotypeAnalyzer: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    {
      question: "When do you naturally feel most energized?",
      options: [
        { text: "Early morning (5-7 AM)", value: "dawn" },
        { text: "Mid-morning (8-10 AM)", value: "morning" },
        { text: "Afternoon (12-3 PM)", value: "zenith" },
        { text: "Evening (6-9 PM)", value: "twilight" }
      ]
    },
    {
      question: "What's your ideal sleep schedule?",
      options: [
        { text: "Early to bed, early to rise (9 PM - 5 AM)", value: "dawn" },
        { text: "Moderate schedule (10 PM - 6 AM)", value: "morning" },
        { text: "Standard schedule (11 PM - 7 AM)", value: "zenith" },
        { text: "Late schedule (12 AM - 8 AM)", value: "twilight" }
      ]
    },
    {
      question: "When do you prefer to exercise?",
      options: [
        { text: "Sunrise workout", value: "dawn" },
        { text: "Morning routine", value: "morning" },
        { text: "Midday movement", value: "zenith" },
        { text: "Evening flow", value: "twilight" }
      ]
    },
    {
      question: "What time do you feel most creative?",
      options: [
        { text: "Dawn hours", value: "dawn" },
        { text: "Morning clarity", value: "morning" },
        { text: "Afternoon focus", value: "zenith" },
        { text: "Evening inspiration", value: "twilight" }
      ]
    }
  ];

  const chronotypes = {
    dawn: {
      name: "Dawn Seeker",
      icon: Sunrise,
      color: "from-pink-400 to-orange-400",
      description: "You are aligned with the first light of creation. Your energy flows with the sun's awakening, making you most productive in the early hours.",
      traits: ["Natural early riser", "Peak energy at sunrise", "Prefers morning exercise", "Evening wind-down ritual"],
      guidance: "Embrace the sacred dawn hours for your most important work. Your connection to solar awakening energy makes you a natural leader and visionary."
    },
    morning: {
      name: "Solar Harmonizer",
      icon: Sun,
      color: "from-yellow-400 to-orange-400",
      description: "You dance with the morning sun's gentle rise. Your rhythm follows the natural solar ascension, creating steady, sustainable energy.",
      traits: ["Balanced morning energy", "Steady productivity", "Harmonious with nature", "Gentle evening transitions"],
      guidance: "Your balanced solar connection allows you to maintain steady energy throughout the day. Use morning hours for important decisions and creative work."
    },
    zenith: {
      name: "Zenith Warrior",
      icon: Sun,
      color: "from-yellow-500 to-red-500",
      description: "You embody the sun's peak power. Your energy reaches its maximum during the day's height, making you a force of focused intensity.",
      traits: ["Peak afternoon energy", "High-intensity focus", "Powerful decision-making", "Strong solar connection"],
      guidance: "Channel your peak solar energy during midday hours. You're most effective when working with the sun's maximum intensity."
    },
    twilight: {
      name: "Twilight Mystic",
      icon: Sunset,
      color: "from-orange-500 to-purple-500",
      description: "You resonate with the sun's gentle descent. Your energy peaks as day transitions to night, making you deeply intuitive and reflective.",
      traits: ["Evening energy surge", "Deep intuition", "Reflective nature", "Connection to transitions"],
      guidance: "Honor your evening energy peaks. Your connection to twilight hours makes you naturally wise and spiritually attuned."
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const dominantType = Object.entries(counts).reduce((a, b) => 
        counts[a[0]] > counts[b[0]] ? a : b
      )[0];

      setResult(dominantType);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const chronotype = chronotypes[result as keyof typeof chronotypes];
    const Icon = chronotype.icon;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
            Your Solar Chronotype Revealed
          </h2>
        </div>

        <div className={`bg-gradient-to-br ${chronotype.color} rounded-3xl p-8 text-white shadow-2xl mb-8`}>
          <div className="text-center mb-6">
            <Icon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-4xl font-serif font-bold mb-2">{chronotype.name}</h3>
            <p className="text-lg opacity-90">{chronotype.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Your Traits</h4>
              <ul className="space-y-2">
                {chronotype.traits.map((trait, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Solar Guidance</h4>
              <p className="leading-relaxed">{chronotype.guidance}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">
          Solar Chronotype Analyzer
        </h2>
        <p className="text-lg text-amber-700">
          Discover your unique solar rhythm and unlock personalized wellness guidance
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200/50">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-amber-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <h3 className="text-xl font-serif font-bold text-amber-800 mb-6">
            {questions[currentQuestion].question}
          </h3>
        </div>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 hover:from-yellow-100 hover:to-orange-100 hover:border-yellow-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium text-amber-800">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
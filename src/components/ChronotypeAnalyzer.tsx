import React, { useState } from 'react';
import { Sun, Moon, Star, Brain, ArrowRight, CheckCircle, Sunrise, Sunset } from 'lucide-react';

const ChronotypeAnalyzer: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "When do you naturally feel most energized?",
      options: [
        "Early morning (5-7 AM)",
        "Mid-morning (8-10 AM)", 
        "Afternoon (12-4 PM)",
        "Evening (6-9 PM)",
        "Late night (10 PM+)"
      ]
    },
    {
      question: "What time would you go to bed if completely free to choose?",
      options: [
        "Before 9 PM",
        "9-10 PM",
        "10-11 PM", 
        "11 PM-12 AM",
        "After midnight"
      ]
    },
    {
      question: "How do you feel immediately upon waking?",
      options: [
        "Very alert and energetic",
        "Fairly alert",
        "Fairly tired",
        "Very tired and groggy",
        "Extremely tired"
      ]
    },
    {
      question: "When do you prefer to do intense physical exercise?",
      options: [
        "Early morning (6-8 AM)",
        "Morning (8-10 AM)",
        "Afternoon (2-4 PM)",
        "Early evening (6-8 PM)",
        "Late evening (8-10 PM)"
      ]
    },
    {
      question: "When do you feel most mentally sharp?",
      options: [
        "Early morning",
        "Late morning", 
        "Mid-afternoon",
        "Early evening",
        "Late evening/night"
      ]
    }
  ];

  const chronotypes = {
    'Dawn Seeker': {
      icon: Sunrise,
      color: 'from-pink-400 to-yellow-400',
      description: "You are a radiant Dawn Seeker, naturally aligned with the early solar energies. Your peak vitality flows with the rising sun.",
      traits: [
        "Peak energy: 6-10 AM",
        "Natural early riser",  
        "Most productive in morning hours",
        "Benefits from morning light exposure"
      ],
      guidance: [
        "Practice sunrise meditation",
        "Schedule important tasks before noon",
        "Eat your largest meal at breakfast",
        "Wind down activities by 8 PM"
      ]
    },
    'Zenith Warrior': {
      icon: Sun,
      color: 'from-yellow-400 to-orange-500',
      description: "You embody the Zenith Warrior, harmonizing with peak solar power. Your energy mirrors the sun's strongest rays.",
      traits: [
        "Peak energy: 10 AM - 2 PM",
        "Balanced sleep-wake cycle",
        "Strong midday focus",
        "Adapts well to routine"
      ],
      guidance: [
        "Optimize your noon power hours",
        "Take advantage of midday strength training",
        "Balance morning and evening activities",
        "Maintain consistent sleep schedule"
      ]
    },
    'Golden Harmonizer': {
      icon: Star,
      color: 'from-orange-400 to-red-400',
      description: "You are a Golden Harmonizer, flowing with the warm energies of the afternoon sun. Your wisdom deepens as daylight softens.",
      traits: [
        "Peak energy: 2-6 PM",
        "Afternoon productivity surge",
        "Creative in golden hours",
        "Prefers later morning start"
      ],
      guidance: [
        "Schedule creative work in afternoon",
        "Enjoy golden hour movement practices",
        "Allow for slower morning awakening",
        "Embrace afternoon social activities"
      ]
    },
    'Twilight Healer': {
      icon: Moon,
      color: 'from-purple-400 to-indigo-500',
      description: "You are a mystical Twilight Healer, awakening as others wind down. Your energy flows with the evening stars and moonlight.",
      traits: [
        "Peak energy: 6 PM - midnight",
        "Natural night owl tendencies",
        "Most creative in evening",
        "Slower morning rhythm"
      ],
      guidance: [
        "Honor your evening energy peak",
        "Create calming morning routines",
        "Schedule important calls after 4 PM",
        "Practice moonlight meditation"
      ]
    }
  };

  const calculateChronotype = (scores: number[]) => {
    const sum = scores.reduce((a, b) => a + b, 0);
    const average = sum / scores.length;
    
    if (average <= 1.5) return 'Dawn Seeker';
    if (average <= 2.5) return 'Zenith Warrior';  
    if (average <= 3.5) return 'Golden Harmonizer';
    return 'Twilight Healer';
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const chronotype = calculateChronotype(newAnswers);
      setResult(chronotype);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  if (showResult && result) {
    const chronotype = chronotypes[result as keyof typeof chronotypes];
    const Icon = chronotype.icon;

    return (
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Result Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
              <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Your Solar Chronotype
              </h1>
              <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>

          {/* Chronotype Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 shadow-xl mb-8">
            <div className="text-center mb-8">
              <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${chronotype.color} rounded-full flex items-center justify-center shadow-2xl mb-6`}>
                <Icon className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">{result}</h2>
              <p className="text-lg text-amber-700 leading-relaxed max-w-2xl mx-auto">
                {chronotype.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traits */}
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Your Natural Traits
                </h3>
                <div className="space-y-3">
                  {chronotype.traits.map((trait, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-amber-700">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidance */}
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <Sun className="w-5 h-5 mr-2" />
                  Solar Alignment Guidance
                </h3>
                <div className="space-y-3">
                  {chronotype.guidance.map((guide, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-amber-700">{guide}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-white/60 backdrop-blur-sm border border-yellow-200/50 rounded-xl text-amber-700 font-semibold hover:bg-white/80 transition-all duration-300"
            >
              Retake Assessment
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
              Begin Your Solar Journey
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-purple-500 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Solar Chronotype Analyzer
            </h1>
            <Brain className="w-6 h-6 text-purple-500 animate-pulse" />
          </div>
          <p className="text-lg text-amber-700">Discover your unique solar rhythm and unlock personalized wellness guidance</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-amber-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-yellow-100 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 shadow-xl">
          <h2 className="text-2xl font-semibold text-amber-800 mb-8 text-center">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left bg-white/50 rounded-xl border border-yellow-200/50 hover:bg-yellow-50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-amber-800 font-medium">{option}</span>
                  <ArrowRight className="w-5 h-5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-amber-600 italic">
            ✨ Each answer reveals another layer of your solar essence ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChronotypeAnalyzer;
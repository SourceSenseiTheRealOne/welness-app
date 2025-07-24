import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SolarDashboard } from './components/SolarDashboard';
import { ChronotypeAnalyzer } from './components/ChronotypeAnalyzer';
import { MealGuide } from './components/MealGuide';
import { MovementGuide } from './components/MovementGuide';
import { Marketplace } from './components/Marketplace';
import { DailyInvocation } from './components/DailyInvocation';
import { SolarParticles } from './components/SolarParticles';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <SolarDashboard />;
      case 'chronotype':
        return <ChronotypeAnalyzer />;
      case 'meals':
        return <MealGuide />;
      case 'movement':
        return <MovementGuide />;
      case 'marketplace':
        return <Marketplace />;
      case 'invocation':
        return <DailyInvocation />;
      default:
        return <SolarDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 relative overflow-hidden">
      <SolarParticles />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="container mx-auto px-4 py-8">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default App;
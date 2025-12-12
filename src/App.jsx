import React from 'react';
import PlayerCard from './components/PlayerCard';
import StatsSection from './components/StatsSection';
import MatchHistory from './components/MatchHistory';
import TrophyCabinet from './components/TrophyCabinet';
import TrainingSection from './components/TrainingSection';
import HearFromCoaches from './components/HearFromCoaches';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-arsenal-gold selection:text-black">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "url('./background.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #EF0107 0%, transparent 40%)'
        }}>
      </div>
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center gap-12">
        <PlayerCard />

        <div className="w-full max-w-4xl space-y-20">
          <StatsSection />
          <MatchHistory />
          <TrainingSection />
          <HearFromCoaches />
          <TrophyCabinet />
        </div>

        <footer className="py-8 text-center text-white text-sm border-t border-gray-800 mt-20 w-full">
          <p>© {new Date().getFullYear()} ADITYA CHAUDHARY. EA SPORTS - IT'S IN THE CODE.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

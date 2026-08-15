import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import SketchDoodleBackground from './components/SketchDoodleBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sections = ['about', 'experience', 'skills', 'projects', 'certifications', 'recommendations'];

const sectionComponents = [
  HeroSection,
  ExperienceSection,
  SkillsMatrix,
  ProjectsSection,
  CertificationsSection,
  TestimonialsSection,
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = sections[activeIndex];

  const goTo = (sectionId) => {
    const idx = sections.indexOf(sectionId);
    if (idx !== -1) setActiveIndex(idx);
  };

  // Keyboard Left / Right arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' && activeIndex < sections.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="h-screen bg-[#F0F6FF] text-[#0F172A] relative selection:bg-sky-200 selection:text-sky-900 font-sans overflow-hidden">
      {/* Light Blue Ambient Background */}
      <AnimatedBackground />
      <SketchDoodleBackground />

      {/* Apple macOS Dynamic Island Glass Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={goTo} />

      {/* Horizontal Slide Deck */}
      <main className="relative z-10 h-[calc(100vh-5rem)] mt-20 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sectionComponents.map((SectionComp, idx) => (
            <div
              key={sections[idx]}
              className="w-full flex-shrink-0 h-full overflow-y-auto px-4 sm:px-6 lg:px-8 py-6"
            >
              <div className="max-w-6xl mx-auto w-full">
                <SectionComp />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Horizontal Deck Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-white/90 p-1.5 rounded-full shadow-xl shadow-sky-500/10">
        <span className="text-[10px] font-bold text-slate-400 px-2 uppercase tracking-wider">
          {activeIndex + 1} / {sections.length}
        </span>
        <button
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className={`p-2 rounded-full transition-all ${
            activeIndex === 0
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
          }`}
          title="Previous Section (← Arrow)"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setActiveIndex(Math.min(sections.length - 1, activeIndex + 1))}
          disabled={activeIndex === sections.length - 1}
          className={`p-2 rounded-full transition-all ${
            activeIndex === sections.length - 1
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
          }`}
          title="Next Section (→ Arrow)"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Footer inside last slide is handled by TestimonialsSection's own padding */}
    </div>
  );
}

export default App;

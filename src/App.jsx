import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import SketchDoodleBackground from './components/SketchDoodleBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';

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
  const [navHeight, setNavHeight] = useState(96);
  const navRef = useRef(null);

  const activeSection = sections[activeIndex];

  // Keep the deck's top offset in sync with the navbar's real rendered
  // height, since it changes across breakpoints and its scrolled state.
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const updateNavHeight = () => setNavHeight(navEl.offsetHeight);
    updateNavHeight();
    const resizeObserver = new ResizeObserver(updateNavHeight);
    resizeObserver.observe(navEl);
    return () => resizeObserver.disconnect();
  }, []);

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
      <Navbar ref={navRef} activeSection={activeSection} setActiveSection={goTo} />

      {/* Horizontal Slide Deck */}
      <main
        className="relative z-10 overflow-hidden"
        style={{ marginTop: navHeight, height: `calc(100vh - ${navHeight}px)` }}
      >
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

      {/* Footer inside last slide is handled by TestimonialsSection's own padding */}
    </div>
  );
}

export default App;

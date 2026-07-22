import React from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import SketchDoodleBackground from './components/SketchDoodleBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#14120E] text-[#E8E0CC] relative selection:bg-amber-700/60 selection:text-amber-100 font-sans overflow-x-hidden">
      {/* Paper Grain & Floating Programming Symbols Background */}
      <AnimatedBackground />
      <SketchDoodleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Scrollable Portfolio Sections */}
      <main className="relative z-10 space-y-20 pt-24 pb-12">
        <HeroSection />
        <ExperienceSection />
        <SkillsMatrix />
        <ProjectsSection />
        <CertificationsSection />
        <TestimonialsSection />
      </main>

      {/* Developer Footer */}
      <Footer />
    </div>
  );
}

export default App;

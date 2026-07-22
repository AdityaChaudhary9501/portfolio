import React from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 relative selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      {/* Interactive HTML5 Canvas Constellation & Mesh Gradient Background */}
      <AnimatedBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-16 pb-12">
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

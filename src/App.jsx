import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import TerminalSection from './sections/TerminalSection';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      {/* Background Ambient Network Map Layer Grid Layout Pattern Mask */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
      
      {/* Navbar Fixed Panel Layer */}
      <Navbar />

      {/* Structured Multi-Section Content Stack Grid Frame */}
      <main className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 z-10 flex flex-col gap-28 md:gap-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TerminalSection />
        <Contact />
      </main>

      {/* Global Minified Sticky Footer Layer Row */}
      <footer className="w-full border-t border-purple-500/5 bg-[#07070D]/40 py-6 text-center text-xs font-mono text-gray-500">
        © {new Date().getFullYear()} @madhumita.dev • Designed with precision.
      </footer>
    </div>
  );
}
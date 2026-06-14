import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import TerminalSection from './sections/TerminalSection';
import Contact from './sections/Contact';

// Section animation wrapper component
function AnimatedSection({ children, className = "", animationType = "up" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = animationType === "left"
    ? "section-animate-left"
    : animationType === "right"
      ? "section-animate-right"
      : "section-animate";

  return (
    <div ref={sectionRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Trigger hero animation on load
    setIsLoaded(true);

    // Force scroll to top on initial load (prevent restored scroll position)
    window.scrollTo(0, 0);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.role === 'button' ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      {/* Custom Cursor - Dot */}
      <div
        ref={cursorRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />

      {/* Custom Cursor - Ring */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
      {/* Background Ambient Network Map Layer Grid Layout Pattern Mask */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
      
      {/* Navbar Fixed Panel Layer */}
      <Navbar />

      {/* Structured Multi-Section Content Stack Grid Frame */}
      <main className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 z-10 flex flex-col gap-28 md:gap-40">
        <Hero isLoaded={isLoaded} />
        <AnimatedSection animationType="up">
          <About />
        </AnimatedSection>
        <AnimatedSection animationType="up">
          <Skills />
        </AnimatedSection>
        <AnimatedSection animationType="up">
          <Projects />
        </AnimatedSection>
        <AnimatedSection animationType="up">
          <Experience />
        </AnimatedSection>
        <AnimatedSection animationType="left">
          <TerminalSection />
        </AnimatedSection>
        <AnimatedSection animationType="up">
          <Contact />
        </AnimatedSection>
      </main>

      {/* Global Minified Sticky Footer Layer Row */}
      <footer className="w-full border-t border-purple-500/5 bg-[#07070D]/40 py-6 text-center text-xs font-mono text-gray-500">
        © {new Date().getFullYear()} @madhumita.dev • Designed with precision.
      </footer>
    </div>
  );
}
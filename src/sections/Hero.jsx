import React, { useState, useEffect } from 'react';
import TerminalBox from '../components/TerminalBox';
import GithubIcon from '../components/GithubIcon';

const stats = [
  { value: '9.75', label: 'CGPA', sub: '' },
  { value: '6mo', label: 'Internship', sub: 'WeSalvator' },
  { value: '2', label: 'Projects', sub: 'Shipped' }
];

const terminalLines = [
  { prefix: '>>>', color: 'blue', text: 'import madhumita', result: null },
  { prefix: '>>>', color: 'blue', text: 'madhumita.role', result: "'AI Trainee | Python & Backend Developer'" },
  { prefix: '>>>', color: 'blue', text: 'madhumita.cgpa', result: '9.75' },
  { prefix: '>>>', color: 'blue', text: 'madhumita.status', result: "'Available immediately • Open to relocation ✓'" }
];

export default function Hero({ isLoaded = false }) {
  const [displayLines, setDisplayLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    const typeInterval = setInterval(() => {
      // Deletion phase - clear line by line
      if (isDeleting) {
        if (displayLines.length > 0) {
          setDisplayLines(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentLine(0);
          setCurrentChar(0);
        }
        return;
      }

      // Normal typing phase
      if (currentLine >= terminalLines.length) {
        // All lines shown, start deleting after a pause
        setTimeout(() => setIsDeleting(true), 3000);
        clearInterval(typeInterval);
        return;
      }

      const line = terminalLines[currentLine];
      if (currentChar < line.text.length) {
        setCurrentChar(prev => prev + 1);
      } else {
        // Line complete, add it to display and move to next
        setDisplayLines(prev => [...prev, { ...line, typedText: line.text }]);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    }, isDeleting ? 30 : 80);

    return () => clearInterval(typeInterval);
  }, [isLoaded, currentLine, currentChar, isDeleting, displayLines.length]);

  // Determine what to show
  const visibleLines = [...displayLines];
  if (!isDeleting && currentLine < terminalLines.length) {
    const line = terminalLines[currentLine];
    visibleLines.push({
      ...line,
      typedText: line.text.slice(0, currentChar),
      isTyping: true
    });
  }

  // Show cursor when typing or after all lines complete
  const showTypingCursor = !isDeleting && currentLine < terminalLines.length;
  const showBlinkingCursor = !showTypingCursor && !isDeleting && displayLines.length > 0;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start min-h-[calc(100vh-4rem)] pt-4 lg:pt-8">

      {/* Left Pitch Intro Card Details */}
      <div className={`flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 ${isLoaded ? 'hero-animate' : 'opacity-0'}`}>

        <div className={`flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-full w-fit ml-3 ${isLoaded ? 'hero-animate-delay' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available immediately • June 2026
        </div>

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight mb-3 text-white ml-3 ${isLoaded ? 'hero-animate-delay' : ''}`}>
          Hi, I'm <span className="text-purple-400">Madhumita.</span>
        </h1>
        <h2 className={`text-lg sm:text-xl font-mono text-purple-300 font-medium mb-6 ml-3 ${isLoaded ? 'hero-animate-delay-2' : ''}`}>
          AI Trainee • Python & Backend Developer
        </h2>

        <p className={`text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 ml-3 ${isLoaded ? 'hero-animate-delay-2' : ''}`}>
          Final-year B.E. CS (AI & ML) student with 9.75 CGPA. I build scalable backend systems,
          AI-powered applications, and accessible tech — from FastAPI to Flutter, OCR to microservices.
        </p>

        <div className={`flex flex-wrap gap-4 items-center ml-3 ${isLoaded ? 'hero-animate-delay-3' : ''}`}>
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-purple-600/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] border border-transparent hover:border-purple-400">
            View Projects
          </a>
          <a href="#contact" className="border border-gray-800 hover:border-purple-400 hover:scale-105 bg-gray-900/40 hover:bg-purple-600/20 text-gray-300 font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Get in Touch
          </a>
        </div>

        {/* Social Icons below buttons */}
        <div className={`flex items-center gap-2 mt-6 ml-3 ${isLoaded ? 'hero-animate-delay-4' : ''}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gray-900/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/30 transition-all duration-200"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gray-900/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/30 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href="mailto:hello@madhumita.dev"
            className="w-12 h-12 rounded-lg bg-gray-900/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/30 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a
            href="tel:+1234567890"
            className="w-12 h-12 rounded-lg bg-gray-900/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/30 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>

      {/* Right Static Inline Python Terminal Frame */}
      <div className={`flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 ${isLoaded ? 'hero-animate-delay-2' : ''}`}>
        <TerminalBox title="python3 ~ portfolio.py">
          <div className="space-y-2 text-sm sm:text-base">
            {visibleLines.map((line, idx) => (
              <div key={idx}>
                <span className="text-purple-400">&gt;&gt;&gt;</span> <span className="text-blue-300">{line.typedText}</span>
                {line.isTyping && <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-0.5" />}
                {line.result && !line.isTyping && <div className={`mt-0.5 ${line.prefix === '>>>' ? 'text-emerald-400' : 'text-amber-400'}`}>{line.result}</div>}
              </div>
            ))}
            {(showTypingCursor || showBlinkingCursor) && (
              <div className="flex items-center gap-1">
                <span className="text-purple-400">&gt;&gt;&gt;</span>
                {showTypingCursor ? (
                  <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-0.5" />
                ) : (
                  <span className="animate-pulse text-purple-400">|</span>
                )}
              </div>
            )}
          </div>
        </TerminalBox>

        {/* Floating Stats Cards Row */}
        <div className="grid grid-cols-3 gap-2 mt-2 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#0B0B14] border border-purple-500/30 rounded-lg p-2 text-center hover:border-purple-500/60 transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-purple-400 font-mono">{stat.label}</div>
              {stat.sub && <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{stat.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
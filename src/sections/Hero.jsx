import React from 'react';
import TerminalBox from '../components/TerminalBox';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[70vh]">
      
      {/* Left Pitch Intro Card Details */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available immediately • June 2026
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-serif tracking-tight mb-2 text-white">
          Hi, I'm <span className="text-purple-400 block sm:inline">Madhumita.</span>
        </h1>
        <h2 className="text-lg sm:text-xl font-mono text-purple-300 font-medium mb-6">
          AI Trainee • Python & Backend Developer
        </h2>
        
        <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
          Final-year B.E. CS (AI & ML) student with 9.75 CGPA. I build scalable backend systems, 
          AI-powered applications, and accessible tech — from FastAPI to Flutter, OCR to microservices.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-purple-600/20 flex items-center gap-2">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="border border-gray-800 hover:border-gray-700 bg-gray-900/40 hover:bg-gray-900/60 text-gray-300 font-medium px-6 py-3 rounded-lg text-sm transition-all duration-200">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Static Inline Python Terminal Frame */}
      <div className="lg:col-span-5 w-full">
        <TerminalBox title="python3 ~ portfolio.py">
          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <span className="text-purple-400">&gt;&gt;&gt;</span> <span className="text-blue-300">import</span> madhumita
            </div>
            <div>
              <span className="text-purple-400">&gt;&gt;&gt;</span> madhumita.<span className="text-blue-400">role</span>
              <div className="text-emerald-400 mt-0.5">'AI Trainee | Python & Backend Developer'</div>
            </div>
            <div>
              <span className="text-purple-400">&gt;&gt;&gt;</span> madhumita.<span className="text-blue-400">cgpa</span>
              <div className="text-amber-400 mt-0.5">9.75</div>
            </div>
            <div>
              <span className="text-purple-400">&gt;&gt;&gt;</span> madhumita.<span className="text-blue-400">status</span>
              <div className="text-emerald-400 mt-0.5">'Available immediately • Open to relocation ✓'</div>
            </div>
          </div>
        </TerminalBox>
      </div>
    </section>
  );
}
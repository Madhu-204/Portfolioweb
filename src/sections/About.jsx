import React from 'react';
import { MapPin, Calendar, Globe, Heart } from 'lucide-react';

const stats = [
  { value: '9.75', label: 'CGPA', sub: 'Top Performer' },
  { value: '6mo', label: 'Internship', sub: 'WeSalvator' },
  { value: '2+', label: 'Projects', sub: 'Shipped' },
  { value: '3', label: 'Languages', sub: 'Spoken' }
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 space-y-16">
      {/* Section Divider Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">01 / ABOUT</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          The person behind <span className="text-purple-400 italic font-normal">the code</span>
        </h2>
      </div>

      {/* Main Feature Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Avatar Card Infrastructure */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative group rounded-2xl overflow-hidden border border-purple-500/10 bg-[#0B0B14] p-3">
            <div className="w-full rounded-xl bg-gradient-to-tr from-purple-900/40 to-gray-800 relative overflow-hidden" style={{ height: '320px' }}>
              {/* Replace with your local project asset: src/assets/profile.jpg */}
              <img
                src="/profile.jpeg"
                alt="Madhumita Ghosh"
                className="w-full h-full object-contain grayscale contract-125 hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-[#05050A] via-[#05050A]/70 to-transparent">
                <h3 className="font-serif text-xl text-white">Madhumita Ghosh</h3>
                <p className="font-mono text-xs text-purple-400 mt-1">AI Engineer • Backend Dev</p>
              </div>
            </div>

            {/* Floating Live Floating Mini-Terminal Tag */}
            <div className="absolute bottom-4 -right-2 bg-[#07070D] border border-purple-500/30 font-mono p-2.5 rounded-lg text-[10px] sm:text-xs shadow-2xl tracking-tight select-none float-animation">
              <span className="text-purple-400">cgpa = </span>
              <span className="text-amber-400">9.75</span>
              <div className="text-emerald-400 mt-0.5">print("<span className="text-amber-400">🏆</span> Top Rank")</div>
            </div>
          </div>

          {/* Quick Informational Metadata Links Row */}
          <div className="space-y-3 font-mono text-xs text-gray-400 px-2">
            <div className="flex items-center gap-2.5">
              <MapPin size={14} className="text-purple-500" />
              <span>Nerul, Navi Mumbai, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar size={14} className="text-purple-500" />
              <span>Available immediately • Jun 2026</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe size={14} className="text-purple-500" />
              <span>Open to relocation across India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Heart size={14} className="text-purple-500" />
              <span>English • Hindi • Bengali</span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy Narrative Text */}
        <div className="lg:col-span-8 space-y-6 text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
          <p>
            I'm a final-year B.E. Computer Science (AI & ML) student at <strong className="text-purple-300 font-medium">Smt. Indira Gandhi College of Engineering</strong>, maintaining a <strong className="text-amber-400 font-mono">9.75 CGPA</strong> — because I genuinely love what I study.
          </p>
          <p>
            Through my internship at <strong className="text-purple-300 font-medium">WeSalvator</strong>, I built production-grade backend systems with <strong className="text-white font-mono bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/10">FastAPI</strong> and microservices, contributed to an API Gateway, and integrated real-time REST APIs — real work, real users, real scale.
          </p>
          <p>
            My most personal project is <strong className="text-purple-300 font-medium">VocaSight</strong> — an AI-powered voice assistant for visually impaired users, built end-to-end with FastAPI, PostgreSQL, Flutter, and OCR. It's the kind of tech that actually matters to people.
          </p>
          <p className="border-l-2 border-purple-500/30 pl-4 italic text-gray-400">
            I'm a fast learner with a strong analytical mindset, and I'm ready to contribute to AI-driven solutions from day one — whether remote or in-person anywhere in India.
          </p>

          {/* Core Embedded Row Row Grid Counters Metrics Block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#0B0B14] border border-purple-500/30 rounded-xl p-4 text-center group hover:border-purple-500/60 transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <div className="font-serif text-2xl sm:text-3xl text-purple-400 mb-1 group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-white font-medium uppercase tracking-wider">{stat.label}</div>
                <div className="text-[10px] font-mono text-gray-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
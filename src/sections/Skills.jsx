import React from 'react';
import SkillCard from '../components/SkillCard';
import { Brain, Cpu, Code, Layout, Wrench, Lightbulb } from 'lucide-react';

const skillsDataset = [
  {
    category: 'AI / Machine Learning',
    skillsCount: '6 skills',
    description: 'Building intelligent systems that see, understand, and respond.',
    icon: Brain,
    tags: ['Machine Learning', 'OpenCV', 'OCR Integration', '+3 more'],
    expandedTags: ['Machine Learning', 'OpenCV', 'OCR Integration', 'Real-time Image Processing', 'AI Model Integration', 'Computer Vision'],
    colorClass: 'text-purple-400'
  },
  {
    category: 'Backend Development',
    skillsCount: '7 skills',
    description: 'Scalable, production-grade Python backends that handle real load.',
    icon: Cpu,
    tags: ['FastAPI', 'Django', 'REST API', '+4 more'],
    expandedTags: ['FastAPI', 'Django', 'REST API', 'Microservices', 'API Gateway', 'JWT Authentication', 'Uvicorn'],
    colorClass: 'text-blue-400'
  },
  {
    category: 'Programming Languages',
    skillsCount: '3 skills',
    description: 'Python is home. Dart for mobile. SQL for the data beneath.',
    icon: Code,
    tags: ['Python', 'Dart', 'SQL'],
    expandedTags: ['Python', 'Dart', 'SQL'],
    colorClass: 'text-emerald-400'
  },
  {
    category: 'Frontend / Mobile',
    skillsCount: '4 skills',
    description: 'From mobile apps to web interfaces — I connect front to back.',
    icon: Layout,
    tags: ['Flutter', 'React', 'Responsive UI', '+1 more'],
    expandedTags: ['Flutter', 'React', 'Responsive UI', 'Frontend Integration'],
    colorClass: 'text-teal-400'
  },
  {
    category: 'Tools & Technologies',
    skillsCount: '6 skills',
    description: 'The toolbox that keeps development clean, fast, and collaborative.',
    icon: Wrench,
    tags: ['Git', 'GitHub', 'Postman', '+3 more'],
    expandedTags: ['Git', 'GitHub', 'Postman', 'PostgreSQL', 'Virtual Environments', 'DevOps basics'],
    colorClass: 'text-amber-400'
  },
  {
    category: 'Core Concepts',
    skillsCount: '6 skills',
    description: 'The fundamentals that make the difference between code and engineering.',
    icon: Lightbulb,
    tags: ['System Design', 'API Architecture', 'OOP', '+3 more'],
    expandedTags: ['System Design', 'API Architecture', 'OOP', 'Debugging', 'Performance Optimization', 'Analytical Problem-Solving'],
    colorClass: 'text-yellow-400'
  }
];

// Continuous Scrolling Text Track Items
const tickerText = [
  'Machine Learning', 'OpenCV', 'OCR Integration', 'Real-time Image Processing', 
  'AI Model Integration', 'Computer Vision', 'FastAPI', 'Django'
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-12 relative">
      
      {/* Title Segment */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">02 / SKILLS</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          My technical <span className="text-purple-400 italic font-normal">universe</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-500 pt-1">
          Click any category to explore all skills inside it.
        </p>
      </div>

      {/* Horizontal Persona Soft Highlight Pills Badge Row */}
      <div className="flex flex-wrap gap-2 pb-2">
        {['✦ Strong Communicator', '✦ Fast Learner', '✦ Team Player', '✦ Adaptable', '✦ Detail-Oriented'].map((pill, idx) => (
          <span key={idx} className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-400 text-purple-400 font-medium shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            {pill}
          </span>
        ))}
      </div>

      {/* Grid Canvas Shell */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsDataset.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      {/* Infinte Loop Text Marquee Divider */}
      <div className="w-full overflow-hidden border-y border-purple-500/5 bg-[#07070D]/40 py-4 mt-8 select-none relative mask-marquee">
        <div className="flex whitespace-nowrap gap-12 justify-around items-center animate-marquee min-w-full">
          {/* Loop twice to guarantee flawless seamless scrolling wrap connections */}
          {[...tickerText, ...tickerText].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 font-mono text-xs text-gray-600">
              <span className="w-1 h-1 rounded-full bg-purple-500/40" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Append Marquee CSS Keyframe Rule right on board directly inline */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
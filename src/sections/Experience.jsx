import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const timelineEntries = [
  {
    type: 'work',
    role: 'Python & Backend Development Intern',
    organization: 'WeSalvator',
    duration: 'Jan 2026 – Jun 2026',
    subtitle: 'Role: Python & Django Developer',
    bulletDetails: [
      'Designed and developed scalable backend systems using FastAPI and microservices architecture for production-grade applications',
      'Built and integrated RESTful APIs supporting real-time application workflows, improving system responsiveness',
      'Contributed to an API Gateway handling authentication (JWT), routing, and inter-service communication',
      'Applied system design principles — modular architecture, service separation, and performance optimization',
      'Worked with DevOps practices including environment setup, debugging, and resolving production-level issues',
      'Collaborated on backend-frontend integration with React-based interfaces'
    ],
    tags: ['FastAPI', 'Django', 'JWT', 'REST API', 'Microservices', 'PostgreSQL', 'React']
  },
  {
    type: 'education',
    role: 'B.E. Computer Science & Engineering (AI & ML)',
    organization: 'Smt. Indira Gandhi College of Engineering',
    duration: '2022 – 2026',
    subtitle: 'No academic gaps · Completing within stipulated duration',
    bulletDetails: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Top academic performer — 9.75 CGPA',
      'Final-year project: AI-powered accessible applications'
    ],
    tags: ['AI', 'ML', 'Python', 'System Design', 'DBMS', 'OS']
  },
  {
    type: 'education',
    role: 'Higher Secondary (12th)',
    organization: 'Amrita Vidyalayam',
    duration: '2022',
    subtitle: 'Science stream',
    bulletDetails: [
      'Science stream with Mathematics and Computer Science'
    ],
    tags: []
  },
  {
    type: 'education',
    role: 'Secondary School (10th)',
    organization: 'Amrita Vidyalayam',
    duration: '2020',
    subtitle: 'Strong academic foundation',
    bulletDetails: [
      'Consistent academic performance — 89% aggregate'
    ],
    tags: []
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-12">
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">04 / EXPERIENCE & EDUCATION</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          Where I've <span className="text-purple-400 italic font-normal">grown</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10 border-l border-purple-500/10">
        {timelineEntries.map((item, index) => {
          const IsWork = item.type === 'work';
          return (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 bg-[#05050A] border-2 border-purple-500 rounded-full p-1.5 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 z-10">
                {IsWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
              </div>

              {/* Box Content Block Container */}
              <div className="bg-[#0B0B14] border border-purple-500/5 group-hover:border-purple-500/15 rounded-xl p-5 sm:p-6 space-y-4 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium group-hover:text-purple-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 mt-0.5">{item.organization}</p>
                    {item.subtitle && <p className="font-mono text-xs text-purple-400/80 mt-0.5">{item.subtitle}</p>}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber-400/90 bg-amber-500/5 border border-amber-500/10 px-2 py-1 rounded w-fit h-fit whitespace-nowrap">
                    <Calendar size={11} />
                    {item.duration}
                  </div>
                </div>

                {/* Sub Bullet Details Segment */}
                <ul className="space-y-1 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                  {item.bulletDetails && item.bulletDetails.map((bullet, idx) => (
                    <li key={idx} className="pl-1 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded text-purple-300 font-bold border border-purple-400/20 bg-purple-600/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
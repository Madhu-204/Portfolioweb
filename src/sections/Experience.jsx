import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const timelineEntries = [
  {
    type: 'work',
    role: 'Backend Developer Intern',
    organization: 'WeSalvator',
    duration: '6 Months',
    bullets: [
      'Developed modern backend microservices with Python and FastAPI.',
      'Contributed to centralized corporate API-Gateway management structures.',
      'Managed Leader Dashboard pipelines and remote engineering task states using corporate Git workflows.'
    ]
  },
  {
    type: 'education',
    role: 'B.E. in Computer Science (AI & ML)',
    organization: 'Smt. Indira Gandhi College of Engineering',
    duration: '2022 - 2026',
    bullets: [
      'Maintained a top-tier academic standing of 9.75 CGPA.',
      'Focused extensively on neural architecture arrays, advanced computer vision tracking, and data systems.'
    ]
  },
  {
    type: 'education',
    role: 'Higher Secondary School Certificate (HSC)',
    organization: 'Maharashtra State Board',
    duration: 'Completed',
    bullets: [
      'Specialized academic baseline tracks in core Science, Advanced Mathematics, and Computer Science streams.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-12">
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">04 / EXPERIENCE & EDUCATION</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          My professional <span className="text-purple-400 italic font-normal">trajectory</span>
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
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber-400/90 bg-amber-500/5 border border-amber-500/10 px-2 py-1 rounded w-fit h-fit whitespace-nowrap">
                    <Calendar size={11} />
                    {item.duration}
                  </div>
                </div>

                {/* Sub Bullet Details Segment */}
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400 list-disc list-inside marker:text-purple-500/60 font-sans leading-relaxed">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="pl-1 text-indent-sm">
                      <span className="relative -left-1.5 text-gray-400">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
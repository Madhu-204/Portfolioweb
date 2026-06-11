import React from 'react';
import ProjectCard from '../components/ProjectCard';

const designProjects = [
  {
    title: 'VocaSight: Voice Assistant for Visually Impaired',
    type: 'AI & Full-Stack Application',
    description: 'An inclusive accessibility platform integrating YOLOv8 obstacle alerts, automated optical character recognition (OCR), and fluid text-to-speech audio outputs.',
    tags: ['FastAPI', 'PostgreSQL', 'Flutter', 'YOLOv8', 'OCR'],
    liveLink: '#',
    codeLink: '#',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'High-Performance EdTech Startup Engine',
    type: 'Backend Architecture',
    description: 'Engineered a clean API infrastructure optimized to seamlessly handle real-time streaming services, automated user data evaluation, and dashboard analytics for over 2,000 concurrent students.',
    tags: ['Python', 'FastAPI', 'REST APIs', 'System Design'],
    liveLink: '#',
    codeLink: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">03 / PROJECTS</div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">
            Selected engineering <span className="text-purple-400 italic font-normal">crafts</span>
          </h2>
        </div>
        <a href="#" className="font-mono text-xs text-purple-400 hover:text-purple-300 border-b border-purple-500/20 pb-1 w-fit transition-all">
          View all archive files &gt;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
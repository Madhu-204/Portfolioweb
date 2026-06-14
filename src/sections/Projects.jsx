import React from 'react';
import ProjectCard from '../components/ProjectCard';

const designProjects = [
  {
    title: 'VocaSight',
    subtitle: 'AI-Powered Voice Assistant for Visually Impaired',
    type: 'Full-stack AI Application',
    description: 'Full-stack AI application that gives visually impaired users a voice-controlled way to read the world around them using OCR and text-to-speech.',
    fullDescription: [
      'Built end-to-end ML workflow: voice command → camera input → text extraction → audio response',
      'Implemented OCR-based text detection with OpenCV and text-to-speech output',
      'Designed scalable FastAPI backend handling real-time image processing and data flow',
      'Accessibility-first design with performance optimization at every layer'
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Flutter', 'OpenCV', 'OCR', 'Python'],
    liveLink: '#',
    codeLink: '#',
    image: '/vocasight.png'
  },
  {
    title: 'Portfolioweb',
    subtitle: 'Personal Portfolio Website',
    type: 'React Application',
    description: 'A modern, responsive portfolio website showcasing skills, projects, and experience with a sleek dark theme and interactive components.',
    fullDescription: [
      'Built with React and Tailwind CSS for responsive design',
      'Interactive skill cards withexpand/collapse animations',
      'Project cards with hover effects revealing full details',
      'Smooth transitions and modern dark UI theme'
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Lucide React'],
    liveLink: '#',
    codeLink: '#',
    image: '/portfolio.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">03 / PROJECTS</div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">
            Things I've <span className="text-purple-400 italic font-normal">built</span>
          </h2>
          <p className="text-sm text-gray-400 font-mono">Hover the cards to see the full story. Click GitHub to explore the code.</p>
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
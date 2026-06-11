import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ title, type, description, tags, liveLink, codeLink, image }) {
  return (
    <div className="bg-[#0B0B14] border border-purple-500/5 hover:border-purple-500/20 rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300">
      
      {/* Mock Device Display Panel Area */}
      <div className="aspect-video w-full bg-gray-950 border-b border-purple-500/5 relative overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"} 
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#07070D]/90 border border-purple-500/10 rounded px-2 py-1 font-mono text-[10px] text-purple-400 tracking-wider uppercase">
          {type}
        </div>
      </div>

      {/* Content Metadata Segment */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-500">
            <Folder size={14} className="text-purple-500/70" />
            <h3 className="font-serif text-lg text-white group-hover:text-purple-400 transition-colors">{title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {/* Tag Elements Row */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07070D] text-gray-400 border border-gray-900">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex items-center gap-3 pt-2 font-mono text-xs border-t border-purple-500/5">
            <a href={liveLink || "#"} className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors">
              <ExternalLink size={14} /> Case Study
            </a>
            <a href={codeLink || "#"} className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors ml-auto">
              <GithubIcon size={14} /> View Code
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
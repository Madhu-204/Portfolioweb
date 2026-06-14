import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ title, subtitle, type, description, fullDescription, tags, liveLink, codeLink, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#0B0B14] rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Full Image Background */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"}
          alt={title}
          className="w-full h-full object-contain opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
        />
        {/* Image overlay shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3 bg-[#07070D]/90 border border-purple-500/10 rounded px-2 py-1 font-mono text-[10px] text-purple-400 tracking-wider uppercase shadow-lg shadow-purple-900/50">
          {type}
        </div>
      </div>

      {/* Content Metadata Segment */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between space-y-3 bg-[#0B0B14] shadow-inner shadow-black/30">
        <div className="space-y-2">
          <div className="text-gray-500">
            <h3 className="font-mono font-extrabold text-4xl sm:text-5xl text-white group-hover:text-purple-400 transition-colors drop-shadow-lg shadow-purple-900/50 tracking-wider leading-tight uppercase">{title}</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {description}
          </p>

          {/* Full Description - Shows on hover */}
          <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
              <ChevronRight size={12} />
              <span>Full Details</span>
            </div>
            <ul className="space-y-1">
              {fullDescription && fullDescription.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {/* Tag Elements Row */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded text-purple-300 font-bold border border-purple-400 bg-purple-600/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex items-center gap-3 pt-2 font-mono text-xs sm:text-sm border-t border-purple-500/5">
            <a href={liveLink || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors">
              <ExternalLink size={14} /> Case Study
            </a>
            <a href={codeLink || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors ml-auto">
              <GithubIcon size={14} /> View Code
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
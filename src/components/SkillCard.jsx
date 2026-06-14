import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function SkillCard({ category, skillsCount, description, icon: Icon, tags, expandedTags, colorClass }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayTags = isExpanded ? expandedTags : tags;

  return (
    <div
      className={`bg-[#0B0B14] border border-purple-500/30 hover:border-purple-500/60 rounded-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] ${isExpanded ? 'ring-2 ring-purple-500/50' : ''}`}
    >
      {/* White Gradient Shadow - Top Left when expanded */}
      {isExpanded && (
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/50 to-transparent rounded-tl-xl blur-3xl pointer-events-none" />
      )}
      <div className="p-6">
        {/* Card Header Title Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 transition-transform duration-500 ${isExpanded ? 'rotate-[360deg]' : 'group-hover:rotate-[360deg]'} ${colorClass}`}>
            <Icon size={18} className={`transition-transform duration-500 ${isExpanded ? 'rotate-[360deg]' : ''}`} />
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-6 h-6 flex items-center justify-center"
          >
            <Plus
              size={16}
              className={`text-gray-600 absolute transition-all duration-300 group-hover:text-purple-400 ${isExpanded ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
            />
            <X
              size={16}
              className={`text-purple-400 absolute transition-all duration-300 ${isExpanded ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}
            />
          </button>
        </div>

        {/* Content Segment */}
        <h3 className={`font-mono text-lg font-bold tracking-wide ${colorClass}`}>{category}</h3>
        <p className="text-[11px] font-mono text-gray-500 mb-3">{skillsCount} skills</p>
        <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">{description}</p>

        {/* Render Tags - Shows initial or expanded based on state */}
        <div className={`flex ${isExpanded ? 'flex-col gap-2' : 'flex-wrap gap-2'} pt-2`}>
          {displayTags && displayTags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs font-mono px-3 py-1.5 rounded-md ${colorClass} font-bold border border-purple-400/20 ${isExpanded ? `animate-slide-in-left` : ''}`}
              style={isExpanded ? { animationDelay: `${idx * 100}ms` } : {}}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
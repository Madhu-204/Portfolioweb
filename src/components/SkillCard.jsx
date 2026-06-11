import React from 'react';
import { Plus } from 'lucide-react';

export default function SkillCard({ category, skillsCount, description, icon: Icon, tags, colorClass }) {
  return (
    <div className="bg-[#0B0B14] border border-purple-500/5 hover:border-purple-500/20 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      <div>
        {/* Card Header Title Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 ${colorClass}`}>
            <Icon size={18} />
          </div>
          <Plus size={16} className="text-gray-600 group-hover:text-purple-400 group-hover:rotate-90 transition-all duration-300" />
        </div>

        {/* Content Segment */}
        <h3 className="font-mono text-sm text-white font-bold tracking-wide">{category}</h3>
        <p className="text-[11px] font-mono text-gray-500 mb-3">{skillsCount} skills</p>
        <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">{description}</p>
      </div>

      {/* Render Sub Tag Elements Collection */}
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#07070D] border border-purple-500/5 text-gray-400 group-hover:border-purple-500/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
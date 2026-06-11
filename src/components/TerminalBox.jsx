import React from 'react';

export default function TerminalBox({ title, children, className = "" }) {
  return (
    <div className={`w-full rounded-xl border border-purple-500/10 bg-[#0B0B14] shadow-2xl overflow-hidden font-mono text-sm ${className}`}>
      {/* Window Window Header Header Strip */}
      <div className="flex items-center justify-between bg-[#07070D] px-4 py-3 border-b border-purple-500/5 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs text-gray-500 tracking-tight">{title}</span>
        <div className="w-12" /> {/* Layout balance padding block */}
      </div>
      {/* Dynamic Screen Output Area Container */}
      <div className="p-5 md:p-6 text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
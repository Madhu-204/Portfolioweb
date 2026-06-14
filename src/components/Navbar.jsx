import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#05050A]/70 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo brand */}
        <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-wide font-bold group">
          <span className="text-purple-500">&gt;_</span> <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">@madhumita.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 px-3 group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                {link.name}
              </span>
              {/* Bold neon purple background */}
              <span className="absolute inset-0 bg-purple-600/80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[0_0_20px_rgba(147,51,234,0.6)]" />
            </a>
          ))}
          <a
            href="#contact"
            className="relative border border-purple-500/30 px-4 py-2 rounded text-white font-mono text-xs overflow-hidden group hover:border-purple-500/60 transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-purple-200 transition-colors duration-300">Hire Me</span>
            {/* Neon background glow */}
            <span className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-purple-400 transition-colors duration-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#05050A] border-b border-purple-500/10 flex flex-col items-center gap-6 py-8 text-xs font-semibold tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative py-2 group hover:text-purple-300 transition-colors duration-300"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="border border-purple-500 px-6 py-2 rounded text-white font-mono hover:bg-purple-500/20 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
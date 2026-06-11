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
        <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-wide font-bold hover:text-purple-400 transition-colors">
          <span className="text-purple-500">&gt;_</span> @madhumita.dev
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="border border-purple-500/30 px-4 py-2 rounded text-white font-mono hover:bg-purple-500/10 transition-all text-xs">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#05050A] border-b border-purple-500/10 flex flex-col items-center gap-6 py-8 text-xs font-semibold tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="border border-purple-500 px-6 py-2 rounded text-white font-mono hover:bg-purple-500/10 transition-all">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
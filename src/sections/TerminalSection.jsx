import React, { useState, useRef, useEffect } from 'react';
import TerminalBox from '../components/TerminalBox';

const quickCommands = [
  { cmd: 'help', label: 'help' },
  { cmd: 'about', label: 'about' },
  { cmd: 'skills', label: 'skills' },
  { cmd: 'projects', label: 'projects' },
  { cmd: 'experience', label: 'experience' },
  { cmd: 'contact', label: 'contact' },
  { cmd: 'funfact', label: 'funfact' }
];

const welcomeMessage = [
  { type: 'output', text: 'Welcome to Madhumita\'s interactive shell ecosystem v1.0.0' },
  { type: 'output', text: 'Type "help" to view a list of all active available system commands.' },
  { type: 'output', text: '' }
];

export default function TerminalSection() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const terminalContentRef = useRef(null);

  // Auto-scrolls within the terminal content instead of the page
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (commandText) => {
    const cleanCmd = commandText.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: commandText }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `┌─────────────────────────────────────┐
│   Madhumita's Portfolio Terminal    │
├─────────────────────────────────────┤
│  about      → Who I am             │
│  skills     → My tech stack        │
│  projects   → What I've built      │
│  experience → Work & education     │
│  contact    → Reach me             │
│  funfact    → Something about me   │
│  clear      → Clear terminal       └─────────────────────────────────────┘`
        });
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          text: `>>> Madhumita Ghosh
    AI Trainee | Python & Backend Developer
    B.E. CS (AI & ML) · CGPA 9.75 · Final Year
    Smt. Indira Gandhi College of Engineering
    Location  → Nerul, Navi Mumbai, Maharashtra
    Available → Immediately (June 2026)
    Relocate  → Yes — anywhere in India
    Languages → English · Hindi · Bengali
    'Fast learner, strong team player,
     ready to contribute from day one.'`
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: `>>> Technical Skills
    Languages  : Python · Dart · SQL
    AI/ML      : OpenCV · OCR · Image Processing
    Backend    : FastAPI · Django · REST · Microservices
    Mobile     : Flutter · React (basics)
    Tools      : Git · PostgreSQL · Postman · Uvicorn
    Concepts   : System Design · OOP · API Architecture`
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `>>> Projects
  [1] VocaSight — AI Voice Assistant (visually impaired)
      Stack: FastAPI · PostgreSQL · Flutter · OpenCV · OCR
      github.com/Madhu-204/VOCASIGHT
  [2] Personal Portfolio Website
      Stack: React · JavaScript · Responsive Design
      github.com/Madhu-204/Portfolioweb`
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'output',
          text: `>>> Experience & Education
  WeSalvator — Python & Backend Dev Intern
  Jan 2026 – Jun 2026 · Certificate issued 8 Jun 2026
  → FastAPI microservices · JWT API Gateway · REST APIs
  Smt. Indira Gandhi College of Engineering
  B.E. CS (AI & ML) · 2022–2026 · CGPA 9.75
  Amrita Vidyalayam · 12th: 69% · 10th: 89%`
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `>>> Contact Details
    Email   → mahighosh149@gmail.com
    Phone   → +91 9833641469
    GitHub  → github.com/Madhu-204
    LinkedIn→ linkedin.com/in/madhumita-ghosh-1a75b7264
    Response time: usually within 24 hours ✓`
        });
        break;
      case 'funfact':
        newHistory.push({
          type: 'output',
          text: `>>> Fun Facts about Madhumita
    🎂 DOB: 14 September 2004
    🧠 Knows 3 human languages (English, Hindi, Bengali)
    🐍 Python is basically her first language
    👁️  Built an app that helps blind people 'see' text
    🚀 Scored 9.75 CGPA in AI/ML engineering
    🌍 Ready to relocate anywhere in India
    ⚡ Can debug production issues without coffee*`
        });
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `bash: ${cleanCmd}: command not found\nType "help" to view available commands.`
        });
    }

    setHistory(newHistory);
  };

  const handleCommandExecution = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
  };

  const handleQuickCommand = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <section className="scroll-mt-24 space-y-8">
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">05 / INTERACTIVE PLAYGROUND</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          Explore via the <span className="text-purple-400 italic font-normal">command line</span>
        </h2>
      </div>

      <TerminalBox title="guest@madhumita.dev: ~" className="min-h-[350px] flex flex-col justify-between">
        {/* Terminal Content - scroll within container */}
        <div ref={terminalContentRef} className="space-y-2 overflow-y-auto max-h-[300px] pr-2 font-mono text-xs sm:text-sm">
          {/* Welcome Message at Top */}
          <div className="text-green-400 font-bold drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">{welcomeMessage[0].text}</div>
          <div className="text-green-500/80 drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]">{welcomeMessage[1].text}</div>
          <div className="border-b border-purple-500/20 my-2" />
          {history.map((line, idx) => {
            if (line.type === 'input') {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-purple-400">guest@madhumita:~$&nbsp;</span>
                  <span className="text-white">{line.text}</span>
                </div>
              );
            }
            if (line.type === 'error') {
              return <div key={idx} className="text-rose-500 font-bold whitespace-pre-wrap drop-shadow-[0_0_5px_rgba(244,63,94,0.6)]">{line.text}</div>;
            }
            return <div key={idx} className="text-emerald-400/90 whitespace-pre-wrap">{line.text}</div>;
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Action Form Entry Track Input Strip */}
        <form onSubmit={handleCommandExecution} className="flex items-center mt-4 pt-4 border-t border-purple-500/5 font-mono text-xs sm:text-sm">
          <span className="text-purple-400 shrink-0">guest@madhumita:~$&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0"
            placeholder="type your command here..."
          />
        </form>
      </TerminalBox>

      {/* Quick Command Buttons - Below Terminal */}
      <div className="flex flex-wrap gap-2">
        {quickCommands.map((item) => (
          <button
            key={item.cmd}
            onClick={() => handleQuickCommand(item.cmd)}
            className="px-3 py-1.5 text-xs font-mono text-purple-300 bg-purple-600/10 border border-purple-400/20 rounded hover:bg-purple-600/20 hover:border-purple-400/40 transition-all"
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}
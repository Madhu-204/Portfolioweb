import React, { useState, useRef, useEffect } from 'react';
import TerminalBox from '../components/TerminalBox';

export default function TerminalSection() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Madhumita\'s interactive shell ecosystem v1.0.0' },
    { type: 'output', text: 'Type "help" to view a list of all active available system commands.' },
    { type: 'output', text: '' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  // Auto-scrolls the terminal screen container downward as data expands
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandExecution = (e) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'input', text: input }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({ 
          type: 'output', 
          text: 'Available system commands:\n  • about    - Short technical introduction bio\n  • skills   - List out specialized backend core skills\n  • clear    - Clear terminal shell display history logs\n  • help     - Display this active command table directory' 
        });
        break;
      case 'about':
        newHistory.push({ 
          type: 'output', 
          text: 'Madhumita Ghosh — B.E. Computer Science student (9.75 CGPA). Specialized Backend Software Engineer and AI Trainee proficient in Python, FastAPI, Microservices, and building inclusive accessibility software tools.' 
        });
        break;
      case 'skills':
        newHistory.push({ 
          type: 'output', 
          text: 'Core Stack Competencies:\n  [Languages] : Python, Dart, SQL, JavaScript\n  [Frameworks]: FastAPI, Django, Flutter, React\n  [Developer] : Deep Learning, Computer Vision, REST APIs, Git Architectures' 
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({ 
          type: 'error', 
          text: `bash: command not found: ${input}. Type "help" to view valid system hooks.` 
        });
    }

    setHistory(newHistory);
    setInput('');
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
        <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2 font-mono text-xs sm:text-sm">
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
              return <div key={idx} className="text-rose-400 whitespace-pre-wrap">{line.text}</div>;
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
            autoFocus
          />
        </form>
      </TerminalBox>
    </section>
  );
}
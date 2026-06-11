import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // Connect your custom submission pipelines here (e.g., Formspree, Web3Forms, EmailJS)
    alert(`System Input Staged!\nThank you, ${formData.name}. Commit message logged successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12 pb-12">
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">06 / CONTACT</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          Commit your <span className="text-purple-400 italic font-normal">message</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="w-full rounded-xl border border-purple-500/10 bg-[#0B0B14] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Header Panel Strip */}
          <div className="flex items-center gap-1.5 bg-[#07070D] px-4 py-3 border-b border-purple-500/5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500/40" />
            <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5">
              <Terminal size={12} /> git-commit-console.sh
            </span>
          </div>

          {/* Form Action Canvas Core Block */}
          <form onSubmit={handleFormSubmission} className="p-6 space-y-5 text-gray-300">
            <div className="space-y-1">
              <label className="text-purple-400 block text-[11px] uppercase font-bold tracking-wider">git config --global user.name</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder='"Your Full Name"'
                className="w-full bg-[#05050A] border border-purple-500/5 focus:border-purple-500/30 rounded-lg px-4 py-2.5 text-white outline-none font-mono tracking-wide transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-purple-400 block text-[11px] uppercase font-bold tracking-wider">git config --global user.email</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder='"your.email@domain.com"'
                className="w-full bg-[#05050A] border border-purple-500/5 focus:border-purple-500/30 rounded-lg px-4 py-2.5 text-white outline-none font-mono tracking-wide transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-purple-400 block text-[11px] uppercase font-bold tracking-wider">git commit -m [message_body]</label>
              <textarea 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder='"Type your collaboration request details or messages here..."'
                className="w-full bg-[#05050A] border border-purple-500/5 focus:border-purple-500/30 rounded-lg px-4 py-2.5 text-white outline-none font-mono tracking-wide transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Commit Trigger Button */}
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium font-sans px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-purple-600/10 flex items-center justify-center gap-2 cursor-pointer ml-auto"
            >
              Push Commit <Send size={12} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
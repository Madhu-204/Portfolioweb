import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Formspree to send emails
      const response = await fetch('https://formspree.io/f/maqzajkv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12 pb-12">
      <div className="space-y-2">
        <div className="font-mono text-xs text-purple-500 font-bold tracking-widest">06 / CONTACT</div>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">
          Let's <span className="text-purple-400 italic font-normal">connect</span>
        </h2>
        <p className="text-sm text-gray-400 font-mono">
          Actively seeking opportunities — internships, full-time AI/backend roles, or collaborations. I respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info (Normal) */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</div>
                <div className="text-gray-200">mahighosh149@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</div>
                <div className="text-gray-200">+91 9833641469</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</div>
                <div className="text-gray-200">Nerul, Navi Mumbai, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* Availability Box */}
          <div className="p-5 rounded-xl border border-green-500/30 bg-green-500/5">
            <div className="text-green-400 font-bold text-lg drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-fade-in-out">
              Available immediately
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Open to AI/ML roles, backend engineering positions, and interesting projects. Willing to relocate across India.
            </div>
          </div>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Madhumita_Ghosh_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-purple-500/30 bg-purple-600/10 text-purple-400 hover:bg-purple-600/20 hover:border-purple-400/50 transition-all text-sm font-medium"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Right Side - Form */}
        <div className="rounded-xl border border-purple-500/10 bg-[#0B0B14] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 bg-[#07070D] px-4 py-3 border-b border-purple-500/5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500/40" />
            <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5">
              git-commit-console.sh
            </span>
          </div>

          {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg border border-green-500/50 bg-green-500/10">
                <div className="text-green-400 font-bold text-sm drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
                  ✓ Commit pushed successfully! Thank you, {formData.name}. I'll respond within 24 hours.
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg border border-red-500/50 bg-red-500/10">
                <div className="text-red-400 font-bold text-sm">
                  ✗ Failed to send. Please try again or email directly at mahighosh149@gmail.com
                </div>
              </div>
            )}

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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-medium font-sans px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-purple-600/10 flex items-center justify-center gap-2 cursor-pointer ml-auto"
            >
              {isSubmitting ? (
                <>Pushing...</>
              ) : (
                <>Push Commit <Send size={12} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div>
        <h2 className="text-4xl font-orbitron text-white mb-4">
          INITIALIZE <span className="text-cyber-neonPurple">COMMS</span>
        </h2>
        <p className="text-cyber-dim mb-8">
          Available for freelance contracts, consulting, and full-time blockchain engineering roles. 
          Secure channel open.
        </p>
        
        <div className="space-y-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-cyber-text hover:text-cyber-neonBlue transition-colors p-4 hologram-card rounded-lg">
                <Github /> github.com/Anandhavigneh
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-cyber-text hover:text-cyber-neonBlue transition-colors p-4 hologram-card rounded-lg">
                <Linkedin /> linkedin.com/in/anandhavignesh02
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 text-cyber-text hover:text-cyber-neonBlue transition-colors p-4 hologram-card rounded-lg">
                <Mail /> {SOCIAL_LINKS.email}
            </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="hologram-card p-8 rounded-xl space-y-6 relative overflow-hidden">
        {sent && (
            <div className="absolute inset-0 bg-cyber-dark/95 flex flex-col items-center justify-center z-10 animate-fade-in">
                <CheckCircle className="text-cyber-neonGreen w-16 h-16 mb-4" />
                <p className="text-cyber-neonGreen font-orbitron">TRANSMISSION SENT</p>
            </div>
        )}

        <div className="space-y-2">
            <label className="text-xs font-mono text-cyber-neonBlue">USER_ID (NAME)</label>
            <input type="text" required className="w-full bg-black/50 border border-cyber-dim focus:border-cyber-neonBlue text-white p-3 rounded outline-none transition-colors" />
        </div>
        
        <div className="space-y-2">
            <label className="text-xs font-mono text-cyber-neonBlue">CONTACT_POINT (EMAIL)</label>
            <input type="email" required className="w-full bg-black/50 border border-cyber-dim focus:border-cyber-neonBlue text-white p-3 rounded outline-none transition-colors" />
        </div>

        <div className="space-y-2">
            <label className="text-xs font-mono text-cyber-neonBlue">DATA_PACKET (MESSAGE)</label>
            <textarea rows={4} required className="w-full bg-black/50 border border-cyber-dim focus:border-cyber-neonBlue text-white p-3 rounded outline-none transition-colors"></textarea>
        </div>

        <button type="submit" className="w-full bg-cyber-neonBlue/10 border border-cyber-neonBlue text-cyber-neonBlue hover:bg-cyber-neonBlue hover:text-black font-orbitron py-3 rounded transition-all flex items-center justify-center gap-2">
            <Send size={18} /> SEND MESSAGE
        </button>
      </form>

    </div>
  );
};

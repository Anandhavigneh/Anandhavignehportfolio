import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Cpu } from 'lucide-react';
import { NeonButton } from './ui/NeonButton';

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative">
            {/* Holographic BG */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-neonBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            
            <div className="hologram-card h-full p-6 rounded-xl flex flex-col border border-gray-800 group-hover:border-cyber-neonBlue/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyber-panel rounded-lg border border-gray-700">
                    <Cpu className="text-cyber-neonPurple" size={24} />
                </div>
                <span className="text-xs font-mono text-cyber-neonGreen border border-cyber-neonGreen/30 px-2 py-1 rounded">
                    {project.category}
                </span>
              </div>

              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyber-neonBlue transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-gray-400">#{t}</span>
                ))}
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-cyber-neonPurple mt-1">›</span>
                        {desc}
                    </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                    <NeonButton variant="primary" className="w-full text-sm py-2">
                        <Github size={16} /> VIEW REPO
                    </NeonButton>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

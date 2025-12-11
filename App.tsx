import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero3D } from './components/Hero3D';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Dashboard } from './components/Dashboard';
import { Contact } from './components/Contact';
import { BlockchainVis } from './components/BlockchainVis';
import { NeonButton } from './components/ui/NeonButton';
import { SKILLS, SOCIAL_LINKS } from './constants';
import { Download, ChevronDown } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-cyber-black font-sans selection:bg-cyber-neonBlue selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <color attach="background" args={['#05050a']} />
            <Suspense fallback={null}>
              <Hero3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
          <h2 className="text-cyber-neonBlue font-mono text-sm tracking-[0.3em] mb-4 animate-pulse">
            SYSTEM ONLINE // WELCOME USER
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 tracking-tighter drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
            ANANDHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neonBlue to-cyber-neonPurple animate-glitch block md:inline">VIGNESH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-rajdhani mb-8 max-w-2xl mx-auto">
            Crypto Algo Engineer & Blockchain Developer
            <span className="block text-sm text-cyber-dim mt-2 font-mono">
              Sniper Bots | Algo Trading | Web3 Automation
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </NeonButton>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                <NeonButton variant="secondary">
                <Download size={18} /> Download Resume
                </NeonButton>
            </a>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 w-full z-20">
            <Ticker />
        </div>
        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-cyber-dim z-20">
          <ChevronDown />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 bg-cyber-dark border-t border-cyber-panel">
        <About />
      </section>

      {/* --- BLOCKCHAIN VISUALIZATION --- */}
      <section className="py-10">
        <BlockchainVis />
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-panel via-cyber-black to-cyber-black -z-10"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron text-white mb-2">DEPLOYED <span className="text-cyber-neonPurple">MODULES</span></h2>
          <div className="h-1 w-24 bg-cyber-neonBlue mx-auto"></div>
        </div>
        <Projects />
      </section>

      {/* --- DASHBOARD SECTION --- */}
      <section className="py-20 bg-cyber-dark/50 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-orbitron text-white">MARKET <span className="text-cyber-neonGreen">INTELLIGENCE</span></h2>
                <div className="text-xs font-mono text-cyber-dim animate-pulse">LIVE FEED CONNECTED</div>
            </div>
            <Dashboard />
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-orbitron text-center mb-12">TECH <span className="text-cyber-neonBlue">ARSENAL</span></h2>
            <div className="flex flex-wrap justify-center gap-6">
                {SKILLS.map((skill, idx) => (
                    <div key={idx} className="hologram-card px-6 py-4 rounded-full flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
                        <span className="text-cyber-neonPurple">{skill.icon}</span>
                        <span className="font-orbitron text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section className="py-20 bg-gradient-to-b from-cyber-black to-cyber-panel border-t border-cyber-neonBlue/20">
        <Contact />
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-cyber-dim font-mono text-sm border-t border-gray-900">
        <p>© {new Date().getFullYear()} ANANDHA VIGNESH. ALL SYSTEMS OPERATIONAL.</p>
      </footer>
    </div>
  );
};

export default App;

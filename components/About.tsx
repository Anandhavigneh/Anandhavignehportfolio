import React from 'react';
import { Terminal, Shield, Users, BarChart } from 'lucide-react';

export const About = () => {
  return (
    <div className="relative p-8 md:p-12 max-w-6xl mx-auto">
      <div className="hologram-card p-1 rounded-xl relative">
        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyber-neonBlue"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyber-neonBlue"></div>
        
        <div className="bg-cyber-dark/90 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="space-y-6">
                <h2 className="text-3xl font-orbitron text-cyber-neonBlue mb-2">
                    <span className="text-white">IDENT:</span> ANANDHA_VIGNESH
                </h2>
                <div className="h-px w-20 bg-cyber-neonPurple mb-4"></div>
                
                <p className="text-cyber-text leading-relaxed font-rajdhani text-lg">
                    Specialized Algo Engineer with <span className="text-cyber-neonGreen">5+ years</span> of experience in the blockchain sector.
                    I architect high-frequency trading bots, secure Web3 automations, and data-driven crypto intelligence systems.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                        <Terminal className="text-cyber-neonPurple shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Bot Architecture</h4>
                            <p className="text-sm text-cyber-dim">Sniper Bots & MEV</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BarChart className="text-cyber-neonPurple shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Analysis</h4>
                            <p className="text-sm text-cyber-dim">On-chain & TA</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Shield className="text-cyber-neonPurple shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Fund Mgmt</h4>
                            <p className="text-sm text-cyber-dim">Managed $50k+</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Users className="text-cyber-neonPurple shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Leadership</h4>
                            <p className="text-sm text-cyber-dim">Team R&D Lead</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Code Visual */}
            <div className="relative font-mono text-xs md:text-sm text-cyber-dim bg-black p-4 rounded border border-gray-800 shadow-inner overflow-hidden h-full min-h-[300px]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="text-green-500 mb-2">{'>'} INITIALIZING PROFILE...</div>
                <div className="text-blue-400 mb-2">{'>'} LOAD: SKILLS_MATRIX</div>
                <div className="pl-4">
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span>:</p>
                    <p className="pl-4">def __init__(self):</p>
                    <p className="pl-8">self.stack = [<span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"Solidity"</span>, <span className="text-orange-300">"React"</span>]</p>
                    <p className="pl-8">self.focus = <span className="text-orange-300">"DeFi Automation"</span></p>
                    <p className="pl-8">self.status = <span className="text-green-400">"READY_TO_DEPLOY"</span></p>
                </div>
                <div className="mt-4 animate-pulse">
                    <span className="text-cyber-neonBlue">_</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

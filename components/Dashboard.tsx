import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

const data = [
  { name: '10:00', price: 64000 },
  { name: '10:05', price: 64200 },
  { name: '10:10', price: 64100 },
  { name: '10:15', price: 64500 },
  { name: '10:20', price: 64350 },
  { name: '10:25', price: 64800 },
  { name: '10:30', price: 64700 },
];

export const Dashboard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Styles for the chart animation */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 4px #bc13fe); }
          50% { filter: drop-shadow(0 0 12px #bc13fe); }
        }
        .chart-animate {
          animation: glowPulse 2s infinite ease-in-out;
        }
      `}</style>

      {/* Main Chart */}
      <div 
        className="lg:col-span-2 hologram-card p-6 rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neonBlue to-cyber-neonPurple" />
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-cyber-neonBlue font-orbitron flex items-center gap-2">
                <Activity size={18} /> MARKET OVERVIEW (BTC/USDT)
            </h3>
            <span className="text-cyber-neonGreen font-mono animate-pulse">● LIVE</span>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#bc13fe" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#bc13fe" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#555" tick={{fill: '#555'}} />
              <YAxis stroke="#555" domain={['auto', 'auto']} tick={{fill: '#555'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0a0a12', borderColor: '#bc13fe' }} 
                itemStyle={{ color: '#00f3ff' }}
                cursor={{ stroke: '#00f3ff', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#bc13fe" 
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                strokeWidth={3}
                className={isHovered ? "chart-animate" : ""}
                style={{ 
                  transition: 'filter 0.3s ease',
                  filter: isHovered ? 'drop-shadow(0 0 5px #bc13fe)' : 'none' 
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side Stats */}
      <div className="space-y-6">
        {/* Fear & Greed */}
        <div className="hologram-card p-6 rounded-lg">
             <h3 className="text-cyber-text font-orbitron text-sm mb-4 flex items-center gap-2">
                <AlertTriangle size={16} className="text-yellow-400" /> FEAR & GREED INDEX
            </h3>
            <div className="flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full border-8 border-cyber-panel flex items-center justify-center">
                     <div className="text-center">
                         <span className="text-3xl font-bold text-cyber-neonGreen">72</span>
                         <p className="text-xs text-cyber-dim">GREED</p>
                     </div>
                     <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-8 border-cyber-neonGreen animate-spin-slow"></div>
                </div>
            </div>
        </div>

        {/* Top Movers */}
        <div className="hologram-card p-6 rounded-lg">
            <h3 className="text-cyber-text font-orbitron text-sm mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-cyber-neonBlue" /> TOP MOVERS (24H)
            </h3>
            <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>PEPE</span>
                    <span className="text-cyber-neonGreen">+14.2%</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>WIF</span>
                    <span className="text-cyber-neonGreen">+9.8%</span>
                </div>
                <div className="flex justify-between">
                    <span>APT</span>
                    <span className="text-red-500">-3.4%</span>
                </div>
            </div>
        </div>

        {/* Gas */}
        <div className="hologram-card p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Zap className="text-yellow-400" size={20} />
                <span className="text-sm font-bold">ETH GAS</span>
            </div>
            <span className="text-cyber-neonBlue font-mono">15 Gwei</span>
        </div>
      </div>
    </div>
  );
};

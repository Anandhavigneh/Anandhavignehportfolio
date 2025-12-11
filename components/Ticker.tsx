import React, { useState, useEffect } from 'react';
import { CryptoData } from '../types';

export const Ticker = () => {
  const [data, setData] = useState<CryptoData[]>([
    { symbol: 'BTC', name: 'Bitcoin', price: 64230.50, change24h: 2.4 },
    { symbol: 'ETH', name: 'Ethereum', price: 3450.20, change24h: -1.2 },
    { symbol: 'SOL', name: 'Solana', price: 145.80, change24h: 5.7 },
    { symbol: 'BASE', name: 'Base', price: 4.20, change24h: 12.5 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(coin => ({
        ...coin,
        price: coin.price * (1 + (Math.random() * 0.002 - 0.001)), // Random micro fluctuation
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cyber-dark/80 border-y border-cyber-neonBlue/20 overflow-hidden py-2 backdrop-blur-sm z-40 relative">
      <div className="flex animate-[slide_20s_linear_infinite] w-[200%] gap-12 whitespace-nowrap">
        {[...data, ...data].map((coin, i) => (
          <div key={i} className="flex items-center gap-3 font-mono text-sm">
            <span className="text-cyber-neonBlue font-bold">{coin.symbol}</span>
            <span className="text-white">${coin.price.toFixed(2)}</span>
            <span className={coin.change24h >= 0 ? 'text-cyber-neonGreen' : 'text-red-500'}>
              {coin.change24h >= 0 ? '▲' : '▼'} {Math.abs(coin.change24h)}%
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

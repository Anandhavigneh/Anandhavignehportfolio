import React from 'react';
import { Project, Skill } from './types';
import { 
  Terminal, Cpu, BarChart3, Bot, Database, 
  Code2, Globe, ShieldCheck, Zap 
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/Anandhavigneh",
  linkedin: "https://www.linkedin.com/in/anandhavignesh02/",
  email: "anandhavigneshcr7@gmail.com"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MEXC Sniper Bot",
    category: "High-Frequency Trading",
    tech: ["Python", "WebSocket", "MEXC API"],
    description: [
      "Executes trades within 3 seconds of listing",
      "Real-time filtering logic",
      "Instant Telegram alerts"
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    id: 2,
    title: "Uniswap V2 BASE Chain Sniper",
    category: "DeFi Automation",
    tech: ["Web3.py", "Metamask", "Solidity"],
    description: [
      "On-chain liquidity detection",
      "Gas-optimized auto-trades",
      "Failover logic + slippage control"
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    id: 3,
    title: "Crypto Spot Signal Bot",
    category: "Algorithmic Trading",
    tech: ["Python", "TA-Lib", "Pandas"],
    description: [
      "Technical indicators (RSI, EMA, MACD)",
      "Automated buy/sell signal generation",
      "Multi-timeframe analysis"
    ],
    github: SOCIAL_LINKS.github
  },
  {
    id: 4,
    title: "Freqtrade Strategy Engine",
    category: "Backtesting",
    tech: ["Freqtrade", "Python", "Docker"],
    description: [
      "Custom EMA-based strategies",
      "Extensive backtesting & hyperopt",
      "Risk management optimization"
    ],
    github: SOCIAL_LINKS.github
  },
  {
    id: 5,
    title: "Bitget Sniper Bot",
    category: "Trading Bot",
    tech: ["Python", "AsyncIO", "REST API"],
    description: ["New listing sniper for Bitget exchange", "Latency optimized"],
    github: SOCIAL_LINKS.github
  },
  {
    id: 6,
    title: "EMA Algo Trading Bot",
    category: "Algorithmic Trading",
    tech: ["Python", "CCXT"],
    description: ["Trend following strategy implementation", "Dynamic stop-loss"],
    github: SOCIAL_LINKS.github
  },
  {
    id: 7,
    title: "Jarvis AI Assistant",
    category: "AI/Automation",
    tech: ["Python", "SpeechRec", "OpenAI"],
    description: ["Voice controlled developer assistant", "System automation tasks"],
    github: SOCIAL_LINKS.github
  },
  {
    id: 8,
    title: "Bank OOP System",
    category: "Software Design",
    tech: ["Python", "OOP", "SQL"],
    description: ["Secure login/withdraw architecture", "Object-oriented design patterns"],
    github: SOCIAL_LINKS.github
  },
  {
    id: 9,
    title: "PDF Data Extractor",
    category: "Automation",
    tech: ["Python", "PyPDF2", "RegEx"],
    description: ["Automated document parsing", "Structured data export"],
    github: SOCIAL_LINKS.github
  },
  {
    id: 10,
    title: "Text Sentiment NLP",
    category: "Machine Learning",
    tech: ["Python", "NLTK", "Scikit-learn"],
    description: ["Financial news sentiment analysis", "Predictive market impact"],
    github: SOCIAL_LINKS.github
  }
];

export const SKILLS: Skill[] = [
  { name: "Python (Advanced)", category: "Language", icon: <Code2 size={20} /> },
  { name: "CCXT", category: "Blockchain", icon: <Terminal size={20} /> },
  { name: "Web3.py", category: "Blockchain", icon: <Globe size={20} /> },
  { name: "Solidity", category: "Blockchain", icon: <Database size={20} /> },
  { name: "React / TS", category: "Framework", icon: <Cpu size={20} /> },
  { name: "AWS", category: "Tools", icon: <Zap size={20} /> },
  { name: "Docker", category: "Tools", icon: <Box size={20} /> },
  { name: "MongoDB / SQL", category: "Tools", icon: <Database size={20} /> },
];

import { Box } from 'lucide-react';

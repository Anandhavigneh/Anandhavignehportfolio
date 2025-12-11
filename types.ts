import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string[];
  github: string;
  featured?: boolean;
}

export interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Blockchain' | 'Tools' | 'Framework';
  icon?: React.ReactNode;
}
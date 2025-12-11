import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 font-orbitron font-bold uppercase tracking-wider transition-all duration-300 clip-path-polygon group overflow-hidden";
  
  const variants = {
    primary: "bg-transparent border border-cyber-neonBlue text-cyber-neonBlue hover:bg-cyber-neonBlue hover:text-cyber-black shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
    secondary: "bg-transparent border border-cyber-neonPurple text-cyber-neonPurple hover:bg-cyber-neonPurple hover:text-white shadow-[0_0_10px_rgba(188,19,254,0.2)] hover:shadow-[0_0_20px_rgba(188,19,254,0.6)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-100"></div>
    </button>
  );
};

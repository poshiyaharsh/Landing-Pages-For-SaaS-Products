import React from 'react';

export const APIHubLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-2.5 group select-none">
      <div className={`${iconSizes[size]} rounded-lg bg-gradient-to-br from-[#0B0F19] to-[#1E293B] border border-cyan-500/40 flex items-center justify-center p-1.5 shadow-md shadow-cyan-950/40 group-hover:border-cyan-400 transition-colors`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M7 8L3 12L7 16" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className={`font-mono font-bold tracking-tight text-white ${textSizes[size]}`}>
          API<span className="text-cyan-400">Hub</span>
        </span>
        <span className="ml-1.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
          v2.4
        </span>
      </div>
    </div>
  );
};

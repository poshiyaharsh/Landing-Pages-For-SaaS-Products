import React from 'react';

interface PromptLabLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PromptLabLogo: React.FC<PromptLabLogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div
        className={`${iconSizes[size]} rounded-lg bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20`}
      >
        <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle laboratory flask / prompt terminal glyph */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-cyan-400 transform -translate-x-0.5"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
        </div>
      </div>
      <div className={`flex items-center font-bold tracking-tight ${textSizes[size]}`}>
        <span className="text-white">Prompt</span>
        <span className="text-cyan-400">Lab</span>
        <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-mono font-semibold tracking-wider text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 rounded">
          v2.4
        </span>
      </div>
    </div>
  );
};

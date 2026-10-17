import React from 'react';

export const MarketMindLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 30 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-1.5 shadow-md shadow-amber-500/20"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-full text-slate-950"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight text-white text-lg font-mono">
        Market<span className="text-amber-400">Mind</span>
      </span>
    </div>
  );
};

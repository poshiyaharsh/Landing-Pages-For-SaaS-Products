import React from 'react';

export const TestForgeLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 30 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1.5 shadow-md shadow-emerald-500/20"
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
          <path d="m9 11 3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight text-white text-lg font-mono">
        Test<span className="text-emerald-400">Forge</span>
      </span>
    </div>
  );
};

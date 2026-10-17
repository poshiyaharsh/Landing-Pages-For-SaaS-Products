import React from 'react';

export const InsightOSLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-1.5 shadow-lg shadow-cyan-500/20"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-full text-white"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="1.5" fill="currentColor" />
          <circle cx="14" cy="14" r="1.5" fill="currentColor" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <span className="font-bold tracking-tight text-white font-mono text-lg">
        Insight<span className="text-cyan-400">OS</span>
      </span>
    </div>
  );
};

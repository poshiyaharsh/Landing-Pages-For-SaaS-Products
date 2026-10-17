import React from 'react';

export const CreatorHubLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-violet-600 p-2 shadow-lg shadow-pink-500/25"
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
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight text-white text-lg font-display">
        Creator<span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Hub</span>
      </span>
    </div>
  );
};

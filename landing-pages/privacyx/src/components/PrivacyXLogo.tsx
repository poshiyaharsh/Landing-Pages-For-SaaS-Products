import React from 'react';

export const PrivacyXLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 30 }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-1.5 shadow-md shadow-teal-500/20"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-full text-slate-950"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight text-white text-lg">
        Privacy<span className="text-teal-400">X</span>
      </span>
    </div>
  );
};

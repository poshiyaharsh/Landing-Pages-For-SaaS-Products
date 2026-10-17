import React from 'react';

interface FlowOpsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FlowOpsLogo: React.FC<FlowOpsLogoProps> = ({ className = '', size = 'md' }) => {
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
        className={`${iconSizes[size]} rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[1.5px] shadow-md shadow-blue-500/20`}
      >
        <div className="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Node workflow connector glyph */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-blue-400"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </div>
      </div>
      <div className={`flex items-center font-bold tracking-tight ${textSizes[size]}`}>
        <span className="text-slate-900">Flow</span>
        <span className="text-blue-600">Ops</span>
        <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded">
          v2.0
        </span>
      </div>
    </div>
  );
};

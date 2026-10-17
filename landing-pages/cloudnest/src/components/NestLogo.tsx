import React from 'react';

interface NestLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

export const NestLogo: React.FC<NestLogoProps> = ({
  size = 'md',
  variant = 'light',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-bold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Cloud silhouette combined with geometric infrastructure nodes motif */}
      <div
        className={`relative flex items-center justify-center rounded-nest shadow-subtle shrink-0 ${
          variant === 'dark' ? 'bg-nest-console-surface border border-nest-console-border text-white' : 'bg-nest-text text-white'
        } ${iconSizes[size]}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4/6 h-4/6 text-white"
        >
          {/* Cloud silhouette */}
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>

        {/* Geometric connection nodes (cyan & blue) */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nest-cyan opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nest-cyan"></span>
        </span>
      </div>

      <div className="flex items-center font-display">
        <span className={`${variant === 'dark' ? 'text-white' : 'text-nest-text'} ${textSizes[size]}`}>
          Cloud
        </span>
        <span className={`text-nest-blue ${textSizes[size]}`}>
          Nest
        </span>
      </div>
    </div>
  );
};

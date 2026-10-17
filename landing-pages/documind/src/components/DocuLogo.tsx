import React from 'react';

interface DocuLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const DocuLogo: React.FC<DocuLogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-semibold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Minimal document outline + purple intelligence spark motif */}
      <div className={`relative flex items-center justify-center bg-docu-text rounded-md shadow-subtle text-white shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4/6 h-4/6 text-white"
        >
          {/* Document outline */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        {/* Subtle purple spark motif */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-docu-accent opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-docu-accent"></span>
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`text-docu-text ${textSizes[size]}`}>Docu</span>
          <span className={`text-docu-accent ${textSizes[size]}`}>Mind</span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-wider text-docu-muted font-mono font-medium -mt-0.5">
            Document Intelligence
          </span>
        )}
      </div>
    </div>
  );
};

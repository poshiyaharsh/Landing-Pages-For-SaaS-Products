import React from 'react';

interface SyncSpaceLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const SyncSpaceLogo: React.FC<SyncSpaceLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
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

  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 font-display font-bold tracking-tight select-none ${className}`}>
      {/* Minimal spatial icon: intersecting collaborative nodes */}
      <div className={`relative ${iconSizes[size]} rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-sm ${
        isDark ? 'bg-indigo-600' : 'bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]'
      }`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Spatial workspace nodes linked together */}
          <rect x="4" y="4" width="6.5" height="6.5" rx="2" fill="currentColor" fillOpacity="0.9" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="2" fill="currentColor" fillOpacity="0.6" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="2" fill="currentColor" fillOpacity="0.6" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" fill="currentColor" fillOpacity="0.9" />
          {/* Central sync connector */}
          <circle cx="12" cy="12" r="2.2" fill="#10B981" />
        </svg>
      </div>

      <span className={`${textSizes[size]} font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
        Sync<span className="text-[#4F46E5]">Space</span>
      </span>
    </div>
  );
};

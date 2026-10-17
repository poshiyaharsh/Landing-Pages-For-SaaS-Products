import React from 'react';

interface AuditlyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const AuditlyLogo: React.FC<AuditlyLogoProps> = ({ 
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
      {/* Minimal geometric audit emblem: structured document lines with verified check trail */}
      <div className={`relative ${iconSizes[size]} rounded-lg flex items-center justify-center transition-transform hover:scale-105 ${
        isDark ? 'bg-gradient-to-br from-[#1E3C68] to-[#142C4E] shadow-sm' : 'bg-gradient-to-br from-[#142C4E] to-[#0D1D35] shadow-sm'
      }`}>
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Document geometric background */}
          <rect x="5" y="4" width="22" height="24" rx="3" stroke="#EAF1FF" strokeWidth="1.8" strokeOpacity="0.4" fill="none" />
          {/* Audit trail structured lines */}
          <line x1="10" y1="9" x2="18" y2="9" stroke="#EAF1FF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="10" y1="14" x2="22" y2="14" stroke="#EAF1FF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="10" y1="19" x2="16" y2="19" stroke="#EAF1FF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
          {/* Verified geometric checkmark badge in Auditly Enterprise Blue (#3569D4) & Teal (#159B91) */}
          <circle cx="21" cy="22" r="5.5" fill="#3569D4" />
          <path 
            d="M18.8 21.8L20.3 23.3L23.3 20.3" 
            stroke="#FFFFFF" 
            strokeWidth="1.6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      
      {/* Wordmark */}
      <span className={`${textSizes[size]} font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#142033]'}`}>
        Audit<span className="text-[#3569D4]">ly</span>
      </span>
    </div>
  );
};

import React from 'react';

export default function Logo({ size = 'md', showTagline = false }) {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44
  }[size] || 36;

  const fontSizes = {
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.875rem'
  }[size] || '1.5rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      {/* Geometric Form Icon: Stacked dynamic form blocks */}
      <svg
        width={iconSizes}
        height={iconSizes}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(99, 102, 241, 0.25))' }}
      >
        <rect width="40" height="40" rx="11" fill="#0F172A" />
        {/* Top Field: Violet gradient pill */}
        <rect x="9" y="9" width="22" height="5.5" rx="2.75" fill="url(#formly-grad-1)" />
        {/* Middle Field: Cyan pill */}
        <rect x="9" y="17.5" width="16" height="5.5" rx="2.75" fill="#38BDF8" />
        {/* Bottom Field: Mint pill */}
        <rect x="9" y="26" width="10" height="5.5" rx="2.75" fill="#34D399" />
        {/* Playful Interactive Dot: Amber radio trigger */}
        <circle cx="27.5" cy="28.75" r="2.75" fill="#FBBF24" />
        
        <defs>
          <linearGradient id="formly-grad-1" x1="9" y1="11.75" x2="31" y2="11.75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-brand)',
            fontSize: fontSizes,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0F172A',
            lineHeight: 1
          }}
        >
          Formly<span style={{ color: '#EC4899' }}>.</span>
        </span>
        {showTagline && (
          <span
            style={{
              fontSize: '0.6875rem',
              color: '#64748B',
              fontWeight: 500,
              marginTop: '3px',
              letterSpacing: '0.02em'
            }}
          >
            No-Code Form Builder
          </span>
        )}
      </div>
    </div>
  );
}

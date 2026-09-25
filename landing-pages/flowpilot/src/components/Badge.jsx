import React from 'react';

export const Badge = ({
  children,
  variant = 'cyan',
  hasPulse = true,
  className = '',
  icon: Icon
}) => {
  const colorMap = {
    cyan: {
      bg: 'rgba(56, 189, 248, 0.1)',
      border: 'rgba(56, 189, 248, 0.25)',
      text: '#38BDF8',
      pulse: '#38BDF8'
    },
    indigo: {
      bg: 'rgba(99, 102, 241, 0.1)',
      border: 'rgba(99, 102, 241, 0.25)',
      text: '#818CF8',
      pulse: '#818CF8'
    },
    emerald: {
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.25)',
      text: '#10B981',
      pulse: '#10B981'
    },
    amber: {
      bg: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.25)',
      text: '#F59E0B',
      pulse: '#F59E0B'
    }
  };

  const style = colorMap[variant] || colorMap.cyan;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full ${className}`}
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        color: style.text,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: '9999px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.05em'
      }}
    >
      {hasPulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: style.pulse,
            boxShadow: `0 0 8px ${style.pulse}`,
            animation: 'pulse-glow 2s infinite ease-in-out'
          }}
        />
      )}
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

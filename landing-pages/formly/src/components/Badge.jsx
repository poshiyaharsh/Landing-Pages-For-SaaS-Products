import React from 'react';

const colorStyles = {
  purple: {
    bg: '#F5F3FF',
    text: '#7C3AED',
    border: 'rgba(124, 58, 237, 0.2)'
  },
  pink: {
    bg: '#FDF2F8',
    text: '#DB2777',
    border: 'rgba(219, 39, 119, 0.2)'
  },
  blue: {
    bg: '#EFF6FF',
    text: '#0284C7',
    border: 'rgba(2, 132, 199, 0.2)'
  },
  mint: {
    bg: '#ECFDF5',
    text: '#059669',
    border: 'rgba(5, 150, 105, 0.2)'
  },
  yellow: {
    bg: '#FEF3C7',
    text: '#D97706',
    border: 'rgba(217, 119, 6, 0.25)'
  },
  indigo: {
    bg: '#EEF2FF',
    text: '#4F46E5',
    border: 'rgba(79, 70, 229, 0.2)'
  },
  slate: {
    bg: '#F1F5F9',
    text: '#475569',
    border: 'rgba(71, 85, 105, 0.15)'
  }
};

export default function Badge({
  children,
  color = 'indigo',
  icon: Icon,
  className = '',
  size = 'md'
}) {
  const current = colorStyles[color] || colorStyles.indigo;
  const sizeStyles = {
    sm: { padding: '3px 8px', fontSize: '0.75rem', gap: '4px' },
    md: { padding: '5px 12px', fontSize: '0.8125rem', gap: '6px' },
    lg: { padding: '7px 16px', fontSize: '0.875rem', gap: '8px' }
  }[size] || { padding: '5px 12px', fontSize: '0.8125rem', gap: '6px' };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizeStyles.gap,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        fontWeight: 600,
        borderRadius: '9999px',
        backgroundColor: current.bg,
        color: current.text,
        border: `1px solid ${current.border}`,
        lineHeight: 1,
        letterSpacing: '0.01em',
        transition: 'all 200ms ease'
      }}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} strokeWidth={2.5} />}
      {children}
    </span>
  );
}

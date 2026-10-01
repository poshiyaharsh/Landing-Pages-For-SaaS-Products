import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  className = '',
  style = {},
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...rest
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.875rem', gap: '6px' },
    md: { padding: '11px 22px', fontSize: '0.9375rem', gap: '8px' },
    lg: { padding: '14px 28px', fontSize: '1rem', gap: '10px', borderRadius: '14px' }
  }[size] || { padding: '11px 22px', fontSize: '0.9375rem', gap: '8px' };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px -2px rgba(99, 102, 241, 0.38), 0 0 0 1px rgba(99, 102, 241, 0.2)'
    },
    accent: {
      background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px -2px rgba(236, 72, 153, 0.38)'
    },
    secondary: {
      background: '#FFFFFF',
      color: '#0F172A',
      border: '1.5px solid #E2E8F0',
      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)'
    },
    outline: {
      background: 'transparent',
      color: '#4F46E5',
      border: '1.5px solid rgba(99, 102, 241, 0.3)'
    },
    ghost: {
      background: 'transparent',
      color: '#334155'
    },
    dark: {
      background: '#0F172A',
      color: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)'
    }
  }[variant] || {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`formly-btn formly-btn-${variant} ${className}`}
      style={{
        ...baseStyle,
        ...sizes,
        ...variants,
        ...style
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-1.5px)';
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = '0 8px 20px -2px rgba(99, 102, 241, 0.45)';
          } else if (variant === 'secondary') {
            e.currentTarget.style.borderColor = '#CBD5E1';
            e.currentTarget.style.backgroundColor = '#F8FAFC';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0)';
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = variants.boxShadow;
          } else if (variant === 'secondary') {
            e.currentTarget.style.borderColor = '#E2E8F0';
            e.currentTarget.style.backgroundColor = '#FFFFFF';
          }
        }
      }}
      {...rest}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 18} strokeWidth={2.2} />}
      <span>{children}</span>
      {IconRight && <IconRight size={size === 'sm' ? 16 : 18} strokeWidth={2.2} />}
    </button>
  );
}

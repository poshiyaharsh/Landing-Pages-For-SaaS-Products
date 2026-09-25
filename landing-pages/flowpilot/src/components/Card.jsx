import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  style = {},
  ...props
}) => {
  return (
    <div
      className={`glass-card ${hoverEffect ? 'hover-lift' : ''} ${className}`}
      onClick={onClick}
      style={{
        padding: 'var(--space-xl)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

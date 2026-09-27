import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #0B0F19 0%, #1E1B4B 50%, #0B0F19 100%)',
        color: '#E0E7FF',
        fontSize: '0.8125rem',
        padding: '9px 16px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 60
      }}
    >
      <a
        href="#features"
        onClick={handleClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#E0E7FF',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 150ms ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#E0E7FF';
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(79, 70, 229, 0.35)',
            border: '1px solid rgba(79, 70, 229, 0.5)',
            color: '#A5B4FC',
            padding: '1px 7px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: '700'
          }}
        >
          <Sparkles size={11} /> NEW
        </span>
        <span>Introducing InvoiceX — smarter invoicing for modern businesses</span>
        <ArrowRight size={14} style={{ color: '#818CF8' }} />
      </a>
    </div>
  );
};

export default AnnouncementBar;

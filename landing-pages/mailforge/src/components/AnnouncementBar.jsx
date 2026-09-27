import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #1E1B4B 0%, #311042 50%, #0F172A 100%)',
        color: '#FFFFFF',
        fontSize: '0.8125rem',
        padding: '8px 16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 50,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap'
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(236, 72, 153, 0.25)',
          border: '1px solid rgba(236, 72, 153, 0.4)',
          borderRadius: '9999px',
          padding: '2px 8px',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: '#F472B6'
        }}
      >
        <Sparkles size={11} /> New v2.4
      </span>
      <span style={{ color: '#E2E8F0', fontWeight: 500 }}>
        Introducing Autonomous A/B Winner Routing & Multi-Variant Copy Generation.
      </span>
      <a
        href="#ab-testing"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          color: '#38BDF8',
          fontWeight: 600,
          textDecoration: 'underline',
          textUnderlineOffset: '2px'
        }}
      >
        See how it works <ArrowRight size={12} />
      </a>
    </div>
  );
};

export default AnnouncementBar;

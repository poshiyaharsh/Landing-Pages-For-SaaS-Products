import React from 'react';
import { TRUST_LOGOS } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section
      style={{
        padding: '48px 0 64px',
        borderBottom: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#64748B'
            }}
          >
            Trusted by teams that don’t want meetings to disappear into the void
          </p>
        </div>

        {/* Fictional Logos Grid */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '40px 64px'
          }}
        >
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 0.72,
                transition: 'all 200ms ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.72';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '800'
                }}
              >
                {logo.symbol}
              </div>
              <span
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  color: '#1E293B',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer subtext */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '28px',
            fontSize: '0.75rem',
            color: '#94A3B8'
          }}
        >
          Fictional brand identifiers shown for concept demonstration purposes
        </p>
      </div>
    </section>
  );
};

export default TrustSection;

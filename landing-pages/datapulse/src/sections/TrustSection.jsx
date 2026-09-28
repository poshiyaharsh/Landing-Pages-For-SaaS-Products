import React from 'react';
import { integrations } from '../data/mockData';

export default function TrustSection() {
  return (
    <section className="section-sm" style={{
      background: 'var(--color-bg-panel)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)',
          color: 'var(--color-text-secondary)'
        }}>
          One intelligence layer for your entire business.
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem 3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {integrations.map((integration, index) => (
            <div
              key={index}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

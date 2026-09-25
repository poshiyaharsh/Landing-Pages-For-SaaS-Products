import React from 'react';
import { TRUST_LOGOS, TRUST_METRICS } from '../data/flowpilotData';

export const SocialProofSection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-3xl)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Trust Headline */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-disabled)',
            marginBottom: 'var(--space-xl)'
          }}
        >
          POWERING VELOCITY AT HIGH-IMPACT ENGINEERING TEAMS
        </p>

        {/* Logos Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 50px)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.name}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: 'var(--text-disabled)',
                transition: 'all 200ms ease',
                cursor: 'default',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary-light)';
                e.currentTarget.style.textShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-disabled)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {logo.label}
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-lg)'
          }}
        >
          {TRUST_METRICS.map((metric, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: 'var(--space-lg)',
                textAlign: 'center',
                backgroundColor: 'rgba(10, 15, 29, 0.5)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #FFFFFF 30%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '6px'
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  marginBottom: '4px'
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section" style={{
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated grid background */}
      <div className="grid-bg" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.3
      }}></div>

      {/* Glowing data lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${20 + i * 20}%`,
              top: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, var(--color-primary), transparent)',
              opacity: 0.2,
              animation: 'lineFlow 4s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-md)',
            lineHeight: 1.2
          }}>
            Stop chasing the data.<br />
            <span className="data-glow">Start seeing the signal.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-xl)',
            lineHeight: 1.6
          }}>
            Bring every important business signal into one intelligent workspace.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-md)'
          }}>
            <button className="btn btn-primary" style={{ fontSize: '1.125rem' }}>
              Start Free <ArrowRight size={22} />
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '1.125rem' }}>
              Talk to Sales
            </button>
          </div>

          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)'
          }}>
            No credit card required · Free forever plan
          </p>
        </div>

        {/* Decorative elements */}
        <div style={{
          marginTop: 'var(--spacing-3xl)',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          opacity: 0.5
        }}>
          {['500K+ Data Points', 'Real-time Sync', 'AI-Powered'].map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                boxShadow: '0 0 12px var(--color-primary)',
                animation: 'pulse 2s ease-in-out infinite',
                animationDelay: `${index * 0.3}s`
              }}></div>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes lineFlow {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}

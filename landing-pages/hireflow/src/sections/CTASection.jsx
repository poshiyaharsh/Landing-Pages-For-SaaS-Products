import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, UserCheck, Calendar } from 'lucide-react';

export default function CTASection({ onOpenDemo }) {
  return (
    <section 
      className="section bg-radial-cta bg-subtle-grid" 
      id="cta"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        borderTop: '1px solid var(--color-border)'
      }}
    >
      {/* Floating Candidate UI Badge 1 (Top Right) */}
      <div
        className="floating-1 glass cta-floating-left"
        style={{
          position: 'absolute',
          top: '20%',
          left: '7%',
          padding: '0.875rem 1.25rem',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          maxWidth: '220px',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--gradient-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.8125rem',
            flexShrink: 0
          }}>
            SM
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--color-text-primary)' }}>
              Sarah Mitchell
            </div>
            <div style={{ fontSize: '0.6875rem', color: 'var(--color-success)', fontWeight: 600 }}>
              Offer Extended
            </div>
          </div>
        </div>
      </div>

      {/* Floating Candidate UI Badge 2 (Bottom Right) */}
      <div
        className="floating-2 glass cta-floating-right"
        style={{
          position: 'absolute',
          bottom: '22%',
          right: '8%',
          padding: '0.875rem 1.25rem',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="match-score" style={{ width: '2.5rem', height: '2.5rem', fontSize: '0.8125rem' }}>
            94%
          </div>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              12 High Fits Found
            </div>
            <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>
              Ready for 1-click scheduling
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '740px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div className="badge section-tag" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>START HIRING IN MINUTES</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)'
          }}>
            Your next great hire is <span className="gradient-text">closer than you think.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}>
            Bring your recruiting workflow into one intelligent workspace. Screen resumes in seconds, discover ideal role alignment, and schedule panel interviews with zero friction.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button
              onClick={() => onOpenDemo ? onOpenDemo('Start Hiring Smarter') : null}
              className="btn btn-primary"
              style={{
                fontSize: '1.0625rem',
                padding: '0.875rem 2rem'
              }}
            >
              Start Hiring Smarter
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => onOpenDemo ? onOpenDemo('Book a Demo') : null}
              className="btn btn-secondary"
              style={{
                fontSize: '1.0625rem',
                padding: '0.875rem 2rem'
              }}
            >
              Book a Demo
            </button>
          </div>

          <div style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-secondary)',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={14} color="var(--color-success)" />
              14-day full platform trial
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={14} color="var(--color-success)" />
              No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={14} color="var(--color-success)" />
              SOC 2 Type II certified
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .cta-floating-left, .cta-floating-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

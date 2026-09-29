import React from 'react';
import { Sparkles, Quote, Info } from 'lucide-react';
import { testimonials } from '../data/mockData';

export default function TestimonialsSection() {
  return (
    <section className="section" id="testimonials" style={{ background: 'var(--color-background-soft)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>CUSTOMER VOICES</span>
          </div>
          <h2 className="section-title">
            Loved by modern hiring teams.
          </h2>
          <p className="section-subtitle">
            How recruitment leaders accelerate headcount delivery without sacrificing candidate experience.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto 2rem'
        }}>
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="card"
              style={{
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <Quote 
                  size={32} 
                  color="var(--color-primary)" 
                  style={{ opacity: 0.25, marginBottom: '1rem' }} 
                />

                <blockquote style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-primary)',
                  fontWeight: 500,
                  marginBottom: '1.75rem',
                  fontStyle: 'normal'
                }}>
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border-light)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {t.avatar}
                </div>

                <div>
                  <div style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {t.role} • <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.375rem',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)'
        }}>
          <Info size={13} />
          <span>Fictional demo customer testimonials for illustrative product demonstration purposes.</span>
        </div>

      </div>
    </section>
  );
}

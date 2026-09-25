import React from 'react';
import { TESTIMONIALS } from '../data/flowpilotData';
import { Badge } from '../components/Badge';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(6, 9, 19, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>ENGINEERING LEADERSHIP FEEDBACK</span>
          </div>
          <h2 className="section-title">
            Validated by High-Velocity <br />
            <span className="text-gradient">Tech Organizations</span>
          </h2>
          <p className="section-desc">
            Discover why forward-thinking CTOs and engineering directors trust FlowPilot to safeguard project delivery.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)'
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(10, 16, 32, 0.7)'
              }}
            >
              <div>
                <div style={{ color: 'var(--color-primary)', marginBottom: '16px', opacity: 0.8 }}>
                  <Quote size={28} />
                </div>
                <p
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: 'var(--space-xl)'
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Impact Badge */}
                <div style={{ marginBottom: '14px' }}>
                  <Badge variant="emerald" hasPulse={false}>
                    {t.metrics}
                  </Badge>
                </div>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid rgba(56, 189, 248, 0.3)'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>
                      {t.author}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {t.role} • <span style={{ color: 'var(--color-primary-light)' }}>{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

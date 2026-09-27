import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection = () => {
  return (
    <section
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Star size={14} style={{ color: '#F59E0B' }} />
            <span>Proven In Production</span>
          </div>
          <h2>
            Loved by fast-moving <span className="gradient-text">growth teams.</span>
          </h2>
          <p>
            See how forward-thinking lifecycle marketers, product founders, and agencies use MailForge to accelerate campaign delivery and open rates.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FAFBFC',
                borderRadius: '18px',
                border: '1px solid var(--border-light)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 200ms ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(15, 23, 42, 0.09)';
                e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: '#1E293B',
                    fontWeight: 500,
                    marginBottom: '20px'
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Metric Pill */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: t.avatarBg,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem'
                    }}
                  >
                    {t.name[0]}
                  </div>

                  <div>
                    <strong style={{ fontSize: '0.9375rem', color: '#0F172A', display: 'block' }}>
                      {t.name}
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                      {t.role} • <strong>{t.company}</strong>
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#059669',
                    backgroundColor: '#ECFDF5',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  <CheckCircle2 size={12} /> {t.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

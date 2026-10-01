import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData.js';
import Badge from '../components/Badge.jsx';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#FAFBFD', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="pink" icon={Sparkles}>
            User Stories
          </Badge>
          <h2 className="section-title">
            Loved by product teams <span className="gradient-text">worldwide</span>.
          </h2>
          <p className="section-subtitle">
            See how high-growth startups and creative studios turn everyday forms into high-converting conversion engines.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(99, 102, 241, 0.12)';
                e.currentTarget.style.borderColor = '#6366F1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div>
                {/* Rating & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#F59E0B' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: '#EEF2FF',
                      color: '#4F46E5',
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}
                  >
                    {t.tag}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '12px',
                    lineHeight: 1.4
                  }}
                >
                  &ldquo;{t.highlight}&rdquo;
                </div>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '28px'
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author Meta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F1F5F9'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: t.avatarBg,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9375rem',
                    flexShrink: 0
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#0F172A' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    {t.role} &bull; <strong>{t.company}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

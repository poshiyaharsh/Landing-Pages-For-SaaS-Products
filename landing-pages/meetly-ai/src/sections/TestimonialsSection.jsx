import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { MessageSquareQuote, Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="section-tag section-tag-ai">
            <MessageSquareQuote size={14} />
            <span>Customer Experiences</span>
          </div>

          <h2 className="section-heading">
            Loved by fast-moving teams.
          </h2>

          <p className="section-subheading mx-auto">
            See how forward-thinking product, engineering, and sales organizations replace frantic note-taking with automated clarity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.author}
              className="card-light"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Star Rating */}
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', color: '#F59E0B' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.65', color: '#1E293B', marginBottom: '24px', fontStyle: 'normal' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Stats Footnote */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: idx === 0 ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : idx === 1 ? 'linear-gradient(135deg, #0EA5E9, #2563EB)' : 'linear-gradient(135deg, #10B981, #059669)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.9rem'
                    }}
                  >
                    {t.initials}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A' }}>
                      {t.author}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                      {t.role} · {t.company}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#059669',
                    background: '#ECFDF5',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  <ShieldCheck size={12} />
                  <span>{t.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice */}
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94A3B8' }}>
          * Testimonials and personas presented for UI design and demonstration purposes.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;

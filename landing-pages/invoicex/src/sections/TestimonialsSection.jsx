import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { MessageSquareQuote, Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '56px' }}>
          <div className="section-tag section-tag-emerald">
            <MessageSquareQuote size={14} />
            <span>Customer Experiences</span>
          </div>

          <h2 className="section-heading">
            Trusted by founders and finance leads.
          </h2>

          <p className="section-subheading mx-auto">
            Discover how forward-thinking studios, agencies, and service businesses eliminate administrative billing friction.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '36px'
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.author}
              className="fintech-card"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF'
              }}
            >
              <div>
                {/* 5-star rating */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', color: '#F59E0B' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.65', color: '#1E293B', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: idx === 0 ? '#4F46E5' : idx === 1 ? '#0EA5E9' : '#10B981',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.9rem'
                    }}
                  >
                    {t.avatar}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                      {t.author}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                      {t.role}, {t.company}
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
                  <span>{t.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94A3B8' }}>
          * Fictional customer feedback and persona identifiers shown for concept and UX presentation purposes.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;

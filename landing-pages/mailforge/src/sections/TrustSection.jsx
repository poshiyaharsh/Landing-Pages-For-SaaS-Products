import React from 'react';
import { Users, Mail, TrendingUp, Star, Award, Shield, CheckCircle } from 'lucide-react';
import { SOCIAL_PROOF_METRICS, BRAND_LOGOS } from '../data/mockData';

export const TrustSection = () => {
  return (
    <section
      style={{
        paddingTop: '32px',
        paddingBottom: '80px',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="container">
        {/* Brand Logos Row */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#64748B',
              marginBottom: '28px'
            }}
          >
            Trusted by teams building their next great campaign
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}
          >
            {BRAND_LOGOS.map((brand, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Tasteful abstract brand icon */}
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    background: idx % 2 === 0
                      ? 'linear-gradient(135deg, #2563EB, #7C3AED)'
                      : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '0.625rem',
                    fontWeight: 800
                  }}
                >
                  {brand.name[0]}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    letterSpacing: '-0.02em',
                    color: '#1E293B'
                  }}
                >
                  {brand.name}
                </span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#94A3B8',
                    padding: '2px 6px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metric Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}
        >
          {SOCIAL_PROOF_METRICS.map((metric, idx) => {
            const icons = [Users, Mail, TrendingUp, Star];
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FAFBFC',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  transition: 'all 200ms ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(15, 23, 42, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: idx === 0 ? '#EFF6FF' : idx === 1 ? '#F5F3FF' : idx === 2 ? '#ECFDF5' : '#FFFBEB',
                    color: idx === 0 ? '#2563EB' : idx === 1 ? '#7C3AED' : idx === 2 ? '#10B981' : '#F59E0B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}
                >
                  <Icon size={20} />
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: '#0F172A',
                    marginBottom: '8px'
                  }}
                >
                  {metric.value}
                </div>

                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  {metric.label}
                </div>

                <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
            * Product marketing demo figures reflecting representative platform usage benchmarks.
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

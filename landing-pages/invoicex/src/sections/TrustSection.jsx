import React from 'react';
import { TRUST_BRANDS } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section
      style={{
        padding: '52px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        {/* Metric proof row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginBottom: '44px',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              10k+
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748B', marginTop: '4px' }}>
              Invoices Processed
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', color: '#4F46E5', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              $24M+
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748B', marginTop: '4px' }}>
              Payments Tracked
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', color: '#059669', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              98%
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748B', marginTop: '4px' }}>
              Payment Visibility
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              &lt; 4 Days
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748B', marginTop: '4px' }}>
              Average Settlement Cycle
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#F1F5F9', marginBottom: '36px' }} />

        {/* Title */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#64748B',
            marginBottom: '28px'
          }}
        >
          Built for businesses that take getting paid seriously
        </p>

        {/* Fictional Brand Logos */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '36px 56px'
          }}
        >
          {TRUST_BRANDS.map((brand) => (
            <div
              key={brand.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: 0.75,
                transition: 'all 200ms ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.75';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: '800'
                }}
              >
                {brand.symbol}
              </div>
              <span
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '800',
                  letterSpacing: '0.06em',
                  color: '#1E293B',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Product demo values disclaimer */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '28px',
            fontSize: '0.75rem',
            color: '#94A3B8'
          }}
        >
          * Illustrative demo values and fictional partner identifiers shown for conceptual presentation.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;

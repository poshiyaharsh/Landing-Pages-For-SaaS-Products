import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

export default function SocialProofSection() {
  const stats = [
    { value: '10,000+', label: 'Forms created', sub: 'across 45+ countries' },
    { value: '2M+', label: 'Responses collected', sub: 'with 99.8% completion' },
    { value: '99.9%', label: 'Guaranteed uptime', sub: 'enterprise reliability' },
    { value: '150+', label: 'Ecosystem integrations', sub: 'instant zero-code sync' }
  ];

  const companies = [
    { name: 'BoltFlow', shape: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
    { name: 'NovaSphere', shape: 'circle(50% at 50% 50%)' },
    { name: 'VertexLabs', shape: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)' },
    { name: 'HyperScale', shape: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' },
    { name: 'LuminaTech', shape: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' },
    { name: 'AcmeCloud', shape: 'circle(45% at 50% 50%)' }
  ];

  return (
    <section
      style={{
        paddingTop: '40px',
        paddingBottom: '80px',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64748B'
            }}
          >
            Loved by teams building better experiences
          </p>
        </div>

        {/* Company Logos Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px 48px',
            marginBottom: '64px',
            opacity: 0.85
          }}
        >
          {companies.map((c) => (
            <div
              key={c.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#334155',
                filter: 'grayscale(0.5)',
                transition: 'all 200ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0)';
                e.currentTarget.style.color = '#0F172A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(0.5)';
                e.currentTarget.style.color = '#334155';
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                  clipPath: c.shape
                }}
              />
              <span style={{ fontFamily: 'var(--font-brand)', fontSize: '1.1875rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
        >
          {stats.map((stat, idx) => {
            const accents = ['#6366F1', '#EC4899', '#0EA5E9', '#10B981'];
            const currentAccent = accents[idx % accents.length];
            return (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '24px 20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                  textAlign: 'center',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(15, 23, 42, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.03)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '20%',
                    right: '20%',
                    height: '3px',
                    backgroundColor: currentAccent,
                    borderRadius: '0 0 4px 4px'
                  }}
                />
                <div
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    fontFamily: 'var(--font-brand)',
                    marginBottom: '6px',
                    letterSpacing: '-0.03em'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

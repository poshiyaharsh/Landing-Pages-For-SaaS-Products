import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IntegrationsSection({ onOpenDemo }) {
  const integrationsList = [
    { name: 'LinkedIn', category: 'Sourcing & Inbound', badge: 'Two-Way Sync', color: '#0077b5' },
    { name: 'Slack', category: 'Team Notifications', badge: 'Realtime Alerts', color: '#4a154b' },
    { name: 'Google Calendar', category: 'Interview Booking', badge: 'Auto Hold', color: '#ea4335' },
    { name: 'Microsoft Teams', category: 'Video Collaboration', badge: 'Bot Assistant', color: '#6264a7' },
    { name: 'Gmail', category: 'Direct Messaging', badge: 'Template Sync', color: '#ea4335' },
    { name: 'Outlook', category: 'Enterprise Email', badge: 'Add-in Available', color: '#0078d4' },
    { name: 'Greenhouse', category: 'Applicant Tracking', badge: 'ATS Ingest', color: '#237c4b' },
    { name: 'Workday', category: 'Enterprise HRIS', badge: 'Bi-directional', color: '#e27129' }
  ];

  return (
    <section className="section-sm" id="integrations" style={{
      background: 'var(--color-background-soft)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>ECOSYSTEM & APIS</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)' }}>
            Works with the tools your recruiting team already uses.
          </h2>
          <p className="section-subtitle">
            Zero rip-and-replace. HireFlow augments your existing tech stack with enterprise grade bi-directional sync.
          </p>
        </div>

        {/* 8 Integrations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1160px',
          margin: '0 auto 2.5rem'
        }}>
          {integrationsList.map((item) => (
            <div
              key={item.name}
              className="card"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--color-background-soft)',
                  border: '1px solid var(--color-border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: item.color,
                  flexShrink: 0
                }}>
                  {item.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <span style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-background-soft)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border-light)',
                whiteSpace: 'nowrap'
              }}>
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Integration API Banner */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)'
        }}>
          <span>Need a proprietary HRIS webhook? </span>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onOpenDemo && onOpenDemo('Custom Integration');
            }}
            style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}
          >
            Explore our REST API & Webhooks →
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { INTEGRATIONS } from '../data/mockData';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  return (
    <section id="integrations" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="section-tag section-tag-ai">
            <Layers size={14} />
            <span>Seamless Ecosystem</span>
          </div>

          <h2 className="section-heading">
            Works where your team already works.
          </h2>

          <p className="section-subheading mx-auto">
            Connect Meetly to your existing conferencing, documentation, and task tracking stack with zero workflow friction.
          </p>
        </div>

        {/* Integrations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {INTEGRATIONS.map((tool) => (
            <div
              key={tool.name}
              className="card-light"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 200ms ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: '800',
                    color: tool.iconColor,
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {tool.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', marginBottom: '2px' }}>
                    {tool.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {tool.category}
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  color: '#4F46E5',
                  background: '#EEF2FF',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(99, 102, 241, 0.2)'
                }}
              >
                {tool.status}
              </span>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice as required in prompt */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            color: '#94A3B8'
          }}
        >
          Visual mock integration placeholders shown for architecture and UI concept purposes.
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;

import React, { useState } from 'react';
import { USE_CASES } from '../data/mockData';
import { Users, Check, Sparkles, Code2, TrendingUp, Megaphone, Crown, ArrowRight } from 'lucide-react';

export const UseCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const getRoleIcon = (id) => {
    switch (id) {
      case 'product': return Sparkles;
      case 'engineering': return Code2;
      case 'sales': return TrendingUp;
      case 'marketing': return Megaphone;
      case 'leadership': return Crown;
      default: return Users;
    }
  };

  const currentCase = USE_CASES[selectedCase];
  const CurrentIcon = getRoleIcon(currentCase.id);

  return (
    <section id="use-cases" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="section-tag section-tag-ai">
            <Users size={14} />
            <span>Tailored Workflows</span>
          </div>

          <h2 className="section-heading">
            Engineered for every team in your organization.
          </h2>

          <p className="section-subheading mx-auto">
            Whether you’re shipping production code, closing enterprise deals, or orchestrating company strategy, Meetly adapts to your team's specific goals.
          </p>

          {/* Role Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '16px'
            }}
          >
            {USE_CASES.map((uc, idx) => {
              const Icon = getRoleIcon(uc.id);
              const isActive = selectedCase === idx;
              return (
                <button
                  key={uc.id}
                  type="button"
                  onClick={() => setSelectedCase(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '9999px',
                    border: isActive ? '1px solid #6366F1' : '1px solid #E2E8F0',
                    background: isActive ? '#6366F1' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    boxShadow: isActive ? '0 4px 12px rgba(99, 102, 241, 0.25)' : 'none'
                  }}
                >
                  <Icon size={16} />
                  <span>{uc.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Use Case Highlight Card */}
        <div
          className="card-light"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '48px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            border: '1px solid #CBD5E1',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
              gap: '48px',
              alignItems: 'center'
            }}
            className="usecase-detail-grid"
          >
            {/* Left Detail Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#EEF2FF',
                    color: '#6366F1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CurrentIcon size={20} />
                </div>
                <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {currentCase.title}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0F172A', marginBottom: '14px', lineHeight: '1.25' }}>
                {currentCase.tagline}
              </h3>

              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#475569', marginBottom: '28px' }}>
                {currentCase.description}
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentCase.points.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#ECFDF5',
                        color: '#059669',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Check size={13} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#1E293B', fontWeight: '500' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visualizer Box */}
            <div
              style={{
                background: '#0F172A',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#F8FAFC'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', color: '#818CF8', fontWeight: '700', textTransform: 'uppercase' }}>
                  AI Automation Preset
                </span>
                <span style={{ fontSize: '0.7rem', color: '#34D399', background: 'rgba(16, 185, 129, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>
                  Active Template
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFF', marginBottom: '10px' }}>
                Automated Post-Call Trigger
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ color: '#38BDF8', fontWeight: '600' }}>Event:</span> Meeting call completes
                </div>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ color: '#C084FC', fontWeight: '600' }}>Extraction:</span> Domain-specific terminology & consensus
                </div>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ color: '#34D399', fontWeight: '600' }}>Delivery:</span> Slack digest & Notion database sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .usecase-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection;

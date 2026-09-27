import React, { useState } from 'react';
import {
  Check,
  Smartphone,
  Monitor,
  Sparkles,
  Type,
  Image as ImageIcon,
  Square,
  Minus,
  Columns,
  Share2,
  Undo2,
  Redo2,
  Eye,
  Sliders,
  Maximize2
} from 'lucide-react';

export const EmailBuilderShowcase = () => {
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeTab, setActiveTab] = useState('blocks'); // 'blocks' | 'styles' | 'ai'

  const features = [
    'Drag & drop blocks',
    'Responsive layouts',
    'Brand presets',
    'AI copy assistance',
    'Reusable templates',
    'Mobile preview'
  ];

  return (
    <section
      id="showcase"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 420px) 1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="builder-showcase-grid"
        >
          {/* Left Column: Copy & Checklist */}
          <div>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Sparkles size={14} />
              <span>Full Visual Editor</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.15,
                marginBottom: '18px'
              }}
            >
              Your email editor, without the <span className="gradient-text">learning curve.</span>
            </h2>

            <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
              Create email templates that look bespoke and convert reliably across every client. Every element is tested against Outlook, Apple Mail, and Gmail automatically.
            </p>

            {/* Feature Checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              {features.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#ECFDF5',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1E293B' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Toggle Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#pricing" className="btn-primary">
                Try the Builder Free
              </a>
              <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Included in all plans
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Browser Frame Email Editor */}
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
              overflow: 'hidden'
            }}
          >
            {/* Editor Toolbar & Controls */}
            <div
              style={{
                backgroundColor: '#0B0F19',
                padding: '12px 18px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'var(--font-mono)', marginLeft: '6px' }}>
                  template_summer_announcement.eml
                </span>
              </div>

              {/* Viewport Switcher */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '3px',
                  borderRadius: '6px'
                }}
              >
                <button
                  type="button"
                  onClick={() => setViewMode('desktop')}
                  aria-label="Desktop preview"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    backgroundColor: viewMode === 'desktop' ? '#2563EB' : 'transparent',
                    color: viewMode === 'desktop' ? '#FFFFFF' : '#94A3B8'
                  }}
                >
                  <Monitor size={13} /> Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('mobile')}
                  aria-label="Mobile preview"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    backgroundColor: viewMode === 'mobile' ? '#2563EB' : 'transparent',
                    color: viewMode === 'mobile' ? '#FFFFFF' : '#94A3B8'
                  }}
                >
                  <Smartphone size={13} /> Mobile
                </button>
              </div>
            </div>

            {/* Main Canvas Workspace */}
            <div
              style={{
                backgroundColor: '#1E293B',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '440px'
              }}
            >
              {/* Responsive Container */}
              <div
                style={{
                  width: viewMode === 'desktop' ? '100%' : '320px',
                  maxWidth: viewMode === 'desktop' ? '520px' : '320px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                  overflow: 'hidden',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Email Preheader */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '8px 16px', fontSize: '0.6875rem', color: '#64748B', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                  <span>View in browser</span>
                  <span>June 2026</span>
                </div>

                {/* Email Branding */}
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }} />
                    <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>Nova Horizon</strong>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>Issue #42</span>
                </div>

                {/* Email Banner */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    padding: '24px 20px',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}
                >
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                    Turn Subscriber Clicks Into Long-Term Customers
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#E0E7FF', lineHeight: 1.5, marginBottom: '16px' }}>
                    Discover how automated personalization and predictive segmentation helped over 50,000 brands scale email revenue.
                  </p>
                  <button
                    type="button"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#2563EB',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    Read the 2026 Guide
                  </button>
                </div>

                {/* Content Blocks */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'desktop' ? '1fr 1fr' : '1fr', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', display: 'block' }}>
                        Autonomous A/B Tests
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>
                        Statistically proven winner routing without lifting a finger.
                      </span>
                    </div>
                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', display: 'block' }}>
                        Predictive Churn Alerts
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>
                        Re-engage slipping contacts with tailored incentives.
                      </span>
                    </div>
                  </div>

                  {/* Micro Footer */}
                  <div style={{ textAlign: 'center', fontSize: '0.625rem', color: '#94A3B8', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                    Sent with MailForge • Unsubscribe anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .builder-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EmailBuilderShowcase;

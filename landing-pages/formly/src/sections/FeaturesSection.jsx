import React, { useState } from 'react';
import { 
  Sparkles, 
  Move, 
  GitBranch, 
  LayoutTemplate, 
  BarChart3, 
  Network, 
  Check, 
  ArrowRight,
  Sliders,
  Star,
  Zap,
  Radio
} from 'lucide-react';
import { featuresData } from '../data/featuresData.js';
import Badge from '../components/Badge.jsx';

export default function FeaturesSection({ onOpenDemo }) {
  const [activeLogicChoice, setActiveLogicChoice] = useState('yes');

  return (
    <section id="features" style={{ paddingTop: '100px', paddingBottom: '100px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="purple" icon={Sparkles}>
            Core Capabilities
          </Badge>
          <h2 className="section-title">
            Everything you need to build <span className="gradient-text">smarter forms</span>
          </h2>
          <p className="section-subtitle">
            Say goodbye to rigid, ugly forms. Formly combines no-code flexibility with developer-grade power to deliver unprecedented response rates.
          </p>
        </div>

        {/* Feature Cards Grid (Bento Style 3 top + 2 bottom) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
          className="features-grid"
        >
          {/* CARD 1: Drag & Drop Builder (Col span 7) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative'
            }}
            className="feature-card col-span-7"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <Badge color="purple">Visual Canvas Engine</Badge>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#6366F1' }}>30+ Field Types</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
                Drag &amp; Drop Builder
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Design powerful forms visually with zero coding. Stack fields, adjust spacing, and switch into live responsive preview mode on the fly.
              </p>
            </div>

            {/* Custom Colorful Visual: Interactive drag blocks mock */}
            <div
              style={{
                backgroundColor: '#FAFBFD',
                borderRadius: '16px',
                border: '1px solid #EEF2F6',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#94A3B8', cursor: 'grab' }}><Move size={14} /></span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E293B' }}>01. What is your team size?</span>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#EEF2FF', color: '#4F46E5', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                  Multiple Choice
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#EEF2FF',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px dashed #6366F1',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#6366F1' }}><Move size={14} /></span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#4F46E5' }}>02. Dragging: Priority Feature Requests</span>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#6366F1', color: '#FFFFFF', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                  Active Drop
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#94A3B8' }}><Move size={14} /></span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E293B' }}>03. Estimated Monthly Budget</span>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#ECFDF5', color: '#059669', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                  Slider
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: Conditional Logic (Col span 5) */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative'
            }}
            className="feature-card col-span-5"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <Badge color="pink">Smart Routing</Badge>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#EC4899' }}>+38% Completion</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
                Conditional Logic
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Show the right questions based on every response. Build dynamic skip logic, branching questionnaires, and customized endings.
              </p>
            </div>

            {/* Custom Colorful Visual: Branching node preview */}
            <div
              style={{
                backgroundColor: '#FDF2F8',
                borderRadius: '16px',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                padding: '16px'
              }}
            >
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Are you an Enterprise customer?
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                <button
                  type="button"
                  onClick={() => setActiveLogicChoice('yes')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    backgroundColor: activeLogicChoice === 'yes' ? '#EC4899' : '#FFFFFF',
                    color: activeLogicChoice === 'yes' ? '#FFFFFF' : '#475569',
                    border: '1px solid #F472B6',
                    cursor: 'pointer'
                  }}
                >
                  Yes (&gt; 50 seats)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLogicChoice('no')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    backgroundColor: activeLogicChoice === 'no' ? '#EC4899' : '#FFFFFF',
                    color: activeLogicChoice === 'no' ? '#FFFFFF' : '#475569',
                    border: '1px solid #F472B6',
                    cursor: 'pointer'
                  }}
                >
                  No (Individual)
                </button>
              </div>

              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  fontSize: '0.75rem',
                  color: '#9D174D',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <GitBranch size={16} color="#EC4899" />
                <span>
                  {activeLogicChoice === 'yes'
                    ? 'Route to: Schedule Custom VIP Onboarding Call'
                    : 'Route to: Self-serve Free Tier Documentation'}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3: Beautiful Templates (Col span 4) */}
          <div
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '30px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="feature-card col-span-4"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <Badge color="yellow">80+ Templates</Badge>
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
                Beautiful Templates
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '20px' }}>
                Start faster with professionally designed templates curated for every department.
              </p>
            </div>

            {/* Custom Colorful Visual: Stacked template cards */}
            <div
              style={{
                backgroundColor: '#FEF3C7',
                borderRadius: '16px',
                padding: '14px',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px 12px', border: '1px solid #FDE68A' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#B45309' }}>Event Registration</div>
                <div style={{ fontSize: '0.6875rem', color: '#78350F' }}>RSVP &bull; Dietary &bull; Workshop Selection</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px 12px', border: '1px solid #FDE68A' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#B45309' }}>Customer NPS Survey</div>
                <div style={{ fontSize: '0.6875rem', color: '#78350F' }}>1-Click rating &bull; Sentiment tags</div>
              </div>
            </div>
          </div>

          {/* CARD 4: Smart Analytics (Col span 4) */}
          <div
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '30px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="feature-card col-span-4"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <Badge color="blue">Telemetry Engine</Badge>
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
                Smart Analytics
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '20px' }}>
                Understand responses, completion rates, drop-off questions, and conversion trends.
              </p>
            </div>

            {/* Custom Colorful Visual: Mini Bar Graph */}
            <div
              style={{
                backgroundColor: '#EFF6FF',
                borderRadius: '16px',
                padding: '14px',
                border: '1px solid rgba(14, 165, 233, 0.25)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284C7' }}>Weekly Completion</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0284C7' }}>84.6%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '48px' }}>
                {[35, 55, 42, 68, 85, 74, 92].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      backgroundColor: i === 6 ? '#0284C7' : '#93C5FD',
                      borderRadius: '4px'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 5: Powerful Integrations (Col span 4) */}
          <div
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '30px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="feature-card col-span-4"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <Badge color="mint">150+ Connectors</Badge>
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
                Powerful Integrations
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '20px' }}>
                Connect Formly with the tools your team already uses. Sync data instantly without code.
              </p>
            </div>

            {/* Custom Colorful Visual: App badges cluster */}
            <div
              style={{
                backgroundColor: '#ECFDF5',
                borderRadius: '16px',
                padding: '14px',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              {['Slack', 'Google Sheets', 'Notion', 'HubSpot', 'Zapier', 'Webhooks'].map((tool, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #A7F3D0',
                    color: '#065F46',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '8px'
                  }}
                >
                  ✓ {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .col-span-7, .col-span-5, .col-span-4 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

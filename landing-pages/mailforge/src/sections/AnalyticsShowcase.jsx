import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Eye,
  MousePointerClick,
  CheckCircle,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Laptop
} from 'lucide-react';
import { ANALYTICS_DATA } from '../data/mockData';

export const AnalyticsShowcase = () => {
  const [selectedMetric, setSelectedMetric] = useState('openRate'); // 'openRate' | 'clickRate' | 'conversions'
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const metricsConfig = {
    openRate: {
      label: 'Open Rate',
      value: '42.8%',
      benchmark: '+18.4% vs industry average (24.4%)',
      color: '#3B82F6',
      points: [28, 32, 30, 39, 41, 45, 42.8]
    },
    clickRate: {
      label: 'Click-Through Rate',
      value: '8.7%',
      benchmark: '+3.1% vs industry average (5.6%)',
      color: '#8B5CF6',
      points: [5.2, 6.1, 5.8, 7.4, 8.0, 9.1, 8.7]
    },
    conversions: {
      label: 'Conversion Rate',
      value: '3.2%',
      benchmark: '+1.4% vs industry average (1.8%)',
      color: '#EC4899',
      points: [1.8, 2.0, 2.3, 2.9, 3.1, 3.5, 3.2]
    }
  };

  const currentMetric = metricsConfig[selectedMetric];

  return (
    <section
      id="campaign-analytics-showcase"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FAFBFC',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <BarChart3 size={14} />
            <span>Deep Telemetry</span>
          </div>
          <h2>
            Actionable telemetry, <span className="gradient-text">not vanity metrics.</span>
          </h2>
          <p>
            Understand exactly which subject lines hook readers, which links generate pipeline, and how subscriber cohorts behave over months.
          </p>
        </div>

        {/* Big Dashboard Showcase Canvas */}
        <div
          style={{
            backgroundColor: '#0F172A',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
            color: '#FFFFFF'
          }}
        >
          {/* Top Bar with Campaign Performance title & metric selectors */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '28px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Campaign Performance
                </h3>
              </div>
              <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                Real-time subscriber cohort telemetry & deliverability scores
              </span>
            </div>

            {/* Metric Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '4px',
                borderRadius: '8px'
              }}
            >
              {[
                { id: 'openRate', label: 'Open Rate', val: '42.8%' },
                { id: 'clickRate', label: 'Click Rate', val: '8.7%' },
                { id: 'conversions', label: 'Conversion', val: '3.2%' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedMetric(tab.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    backgroundColor: selectedMetric === tab.id ? '#2563EB' : 'transparent',
                    color: selectedMetric === tab.id ? '#FFFFFF' : '#CBD5E1',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span>{tab.label}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({tab.val})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Upper Grid: Trend Chart & Key Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '24px',
              marginBottom: '32px'
            }}
            className="analytics-chart-grid"
          >
            {/* Interactive SVG Chart */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Engagement Over Time (7-Day Rolling Trend)
                  </span>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                    {currentMetric.value}
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: '#34D399', fontWeight: 600 }}>
                    {currentMetric.benchmark}
                  </span>
                </div>

                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} /> Last updated 2m ago
                </span>
              </div>

              {/* Chart SVG Canvas */}
              <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                <svg viewBox="0 0 500 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="mainChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255, 255, 255, 0.06)" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255, 255, 255, 0.06)" />
                  <line x1="0" y1="130" x2="500" y2="130" stroke="rgba(255, 255, 255, 0.06)" />

                  {/* Curved Area Fill */}
                  <path
                    d="M 10 140 Q 80 120, 160 125 T 300 70 T 420 50 T 490 35 L 490 170 L 10 170 Z"
                    fill="url(#mainChartGrad)"
                  />

                  {/* Spline Path */}
                  <path
                    d="M 10 140 Q 80 120, 160 125 T 300 70 T 420 50 T 490 35"
                    fill="none"
                    stroke={currentMetric.color}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Points on line */}
                  {[
                    { x: 10, y: 140, label: 'Mon', val: '28%' },
                    { x: 90, y: 120, label: 'Tue', val: '32%' },
                    { x: 170, y: 125, label: 'Wed', val: '30%' },
                    { x: 250, y: 85, label: 'Thu', val: '39%' },
                    { x: 330, y: 70, label: 'Fri', val: '41%' },
                    { x: 410, y: 50, label: 'Sat', val: '45%' },
                    { x: 490, y: 35, label: 'Sun', val: '42.8%' }
                  ].map((pt, idx) => (
                    <g key={idx}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredPoint === idx ? 6 : 4}
                        fill="#FFFFFF"
                        stroke={currentMetric.color}
                        strokeWidth="2.5"
                        style={{ cursor: 'pointer', transition: 'all 150ms ease' }}
                        onMouseEnter={() => setHoveredPoint(idx)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                      <text
                        x={pt.x}
                        y="175"
                        textAnchor="middle"
                        fill="#64748B"
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                      >
                        {pt.label}
                      </text>
                    </g>
                  ))}
                </svg>

                {hoveredPoint !== null && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: '#1E293B',
                      border: '1px solid #3B82F6',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '0.75rem',
                      color: '#FFFFFF'
                    }}
                  >
                    Point value: High engagement period
                  </div>
                )}
              </div>
            </div>

            {/* Right: Device & Deliverability Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Client Breakdown
                </span>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#E2E8F0' }}>
                    <Smartphone size={14} style={{ color: '#3B82F6' }} /> Mobile (iOS & Android)
                  </span>
                  <strong style={{ fontSize: '0.875rem', color: '#FFFFFF' }}>64%</strong>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', marginBottom: '16px' }}>
                  <div style={{ width: '64%', height: '100%', backgroundColor: '#3B82F6', borderRadius: '3px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#E2E8F0' }}>
                    <Laptop size={14} style={{ color: '#8B5CF6' }} /> Desktop & Webmail
                  </span>
                  <strong style={{ fontSize: '0.875rem', color: '#FFFFFF' }}>36%</strong>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }}>
                  <div style={{ width: '36%', height: '100%', backgroundColor: '#8B5CF6', borderRadius: '3px' }} />
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: '16px',
                  padding: '18px',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    color: '#34D399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.875rem', color: '#ECFDF5', display: 'block' }}>
                    99.8% Inbox Placement
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: '#A7F3D0' }}>
                    DKIM, SPF & DMARC verified with automatic warm-up.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Grid: Example Top-Performing Campaigns */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Example High-Performing Campaigns
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px'
              }}
            >
              {ANALYTICS_DATA.topCampaigns.map((camp, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    padding: '16px',
                    transition: 'all 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>{camp.status}</span>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>{camp.sent} sent</span>
                  </div>

                  <strong style={{ fontSize: '0.9375rem', color: '#FFFFFF', display: 'block', marginBottom: '8px' }}>
                    {camp.name}
                  </strong>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#CBD5E1' }}>
                    <span>Open Rate:</span>
                    <strong style={{ color: '#38BDF8' }}>{camp.openRate}%</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#CBD5E1', marginTop: '2px' }}>
                    <span>Click Rate:</span>
                    <strong style={{ color: '#34D399' }}>{camp.clickRate}%</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .analytics-chart-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AnalyticsShowcase;

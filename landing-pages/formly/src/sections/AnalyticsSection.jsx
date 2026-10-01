import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Target, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Sparkles,
  ArrowUpRight,
  Filter,
  DownloadCloud
} from 'lucide-react';
import { 
  analyticsMetrics, 
  responsesTimeline, 
  deviceBreakdown, 
  dropOffStages 
} from '../data/analyticsData.js';
import Badge from '../components/Badge.jsx';

export default function AnalyticsSection() {
  const [timelinePeriod, setTimelinePeriod] = useState('7d');

  const currentTimelineData = responsesTimeline[timelinePeriod] || responsesTimeline['7d'];
  const maxResponses = Math.max(...currentTimelineData.map((d) => d.responses));

  return (
    <section id="analytics" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#FAFBFD', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="mint" icon={BarChart3}>
            Deep Telemetry
          </Badge>
          <h2 className="section-title">
            Turn every response <span className="gradient-text">into insight</span>.
          </h2>
          <p className="section-subtitle">
            Don&apos;t just collect raw data — understand respondent behavior, pinpoint exactly where drop-offs happen, and optimize your conversion funnel in real time.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {analyticsMetrics.map((m) => (
            <div
              key={m.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#64748B' }}>
                  {m.label}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#059669',
                    backgroundColor: '#ECFDF5',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}
                >
                  {m.change}
                </span>
              </div>
              <div
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  fontFamily: 'var(--font-brand)',
                  letterSpacing: '-0.03em',
                  marginBottom: '6px'
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                {m.timeframe}
              </div>
            </div>
          ))}
        </div>

        {/* Big Dashboard Grid: Chart + Device Breakdown + Dropoff Funnel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
          className="analytics-grid"
        >
          {/* Main Chart: Responses Over Time (Col span 8) */}
          <div
            style={{
              gridColumn: 'span 8',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="analytics-chart-col"
          >
            {/* Chart Header */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Submissions &amp; Completion Velocity
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                  Real-time telemetry tracked across all active published forms
                </p>
              </div>

              {/* Time Range Filter Buttons */}
              <div style={{ display: 'flex', gap: '6px', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '10px' }}>
                {['7d', '30d', '90d'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setTimelinePeriod(p)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: timelinePeriod === p ? '#FFFFFF' : 'transparent',
                      color: timelinePeriod === p ? '#0F172A' : '#64748B',
                      boxShadow: timelinePeriod === p ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {p.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive SVG Bar & Trend Chart */}
            <div style={{ position: 'relative', height: '220px', display: 'flex', alignItems: 'flex-end', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9' }}>
              {currentTimelineData.map((item, idx) => {
                const heightPercent = Math.round((item.responses / maxResponses) * 100);
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height: '100%',
                      justifyContent: 'flex-end',
                      position: 'relative'
                    }}
                    className="chart-col-hover"
                  >
                    <div
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: '#6366F1',
                        marginBottom: '6px'
                      }}
                    >
                      {item.responses >= 1000 ? `${(item.responses / 1000).toFixed(1)}k` : item.responses}
                    </div>
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '44px',
                        height: `${heightPercent}%`,
                        background: 'linear-gradient(180deg, #6366F1 0%, #A855F7 100%)',
                        borderRadius: '8px 8px 3px 3px',
                        transition: 'height 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer'
                      }}
                    />
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', marginTop: '8px' }}>
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart Sub-legend */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', fontSize: '0.8125rem', color: '#64748B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: '#6366F1' }}></span>
                  Total Submissions
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: '#10B981' }}></span>
                  Average Completion Rate (84.6%)
                </span>
              </div>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>Telemetry Latency: 38ms</span>
            </div>
          </div>

          {/* Device Breakdown (Col span 4) */}
          <div
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="analytics-device-col"
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Device Breakdown
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', marginBottom: '24px' }}>
                Fully responsive forms optimized for every screen size
              </p>
            </div>

            {/* Device Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {deviceBreakdown.map((d) => (
                <div key={d.device}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {d.device === 'Mobile' && <Smartphone size={16} color="#6366F1" />}
                      {d.device === 'Desktop' && <Laptop size={16} color="#0EA5E9" />}
                      {d.device === 'Tablet' && <Tablet size={16} color="#10B981" />}
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B' }}>{d.device}</span>
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A' }}>
                      {d.share}% <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#94A3B8' }}>({d.count})</span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${d.share}%`,
                        height: '100%',
                        backgroundColor: d.color,
                        borderRadius: '9999px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stat Callout */}
            <div
              style={{
                marginTop: '28px',
                padding: '14px',
                borderRadius: '14px',
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE'
              }}
            >
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1D4ED8', marginBottom: '2px' }}>
                98.4% Mobile Touch Accuracy
              </div>
              <p style={{ fontSize: '0.75rem', color: '#1E40AF', lineHeight: 1.4 }}>
                Optimized mobile keyboard layouts and touch targets prevent accidental exits.
              </p>
            </div>
          </div>

          {/* DROP-OFF FUNNEL ANALYSIS (Col span 12) */}
          <div
            style={{
              gridColumn: 'span 12',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Field-by-Field Drop-off Analysis
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                  Identify the exact questions causing friction and test improvements instantly.
                </p>
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#10B981', backgroundColor: '#ECFDF5', padding: '6px 12px', borderRadius: '8px' }}>
                Overall Funnel Health: 92/100
              </span>
            </div>

            {/* Funnel Steps Bar Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {dropOffStages.map((stage, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FAFBFD',
                    borderRadius: '14px',
                    padding: '16px',
                    border: '1px solid #EEF2F6',
                    position: 'relative'
                  }}
                >
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#6366F1', marginBottom: '4px' }}>
                    {stage.step}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                    {stage.label}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                      {stage.percentage}%
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: stage.drop.startsWith('-') ? '#EF4444' : '#10B981' }}>
                      {stage.drop}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${stage.percentage}%`, height: '100%', backgroundColor: '#6366F1', borderRadius: '9999px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .analytics-chart-col, .analytics-device-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

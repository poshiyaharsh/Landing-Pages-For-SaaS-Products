import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Clock, 
  BarChart3, 
  ArrowUpRight, 
  PieChart, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { analytics } from '../data/mockData';

export default function AnalyticsSection() {
  const [timeRange, setTimeRange] = useState('Quarter');

  const stats = [
    { icon: Layers, label: 'Open Roles', value: '24', change: '+3 this month', color: 'var(--color-primary)' },
    { icon: Users, label: 'Active Candidates', value: '1,284', change: '+18% vs last mo', color: '#2563eb' },
    { icon: Calendar, label: 'Interviews This Week', value: '86', change: '94% on-time', color: '#10b981' },
    { icon: Clock, label: 'Avg. Time to Hire', value: '18 days', change: '-12 days reduction', color: '#f59e0b' }
  ];

  return (
    <section className="section" id="analytics" style={{ background: 'var(--color-background-soft)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>EXECUTIVE HIRING TELEMETRY</span>
          </div>
          <h2 className="section-title">
            Know what your hiring pipeline is telling you.
          </h2>
          <p className="section-subtitle">
            Real-time pipeline analytics, drop-off signals, and source ROI telemetry to optimize your talent strategy.
          </p>
        </div>

        {/* 4 Core Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1200px',
          margin: '0 auto 2.5rem'
        }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="card"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.375rem'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.375rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#059669',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <ArrowUpRight size={12} />
                    <span>{stat.change}</span>
                  </div>
                </div>

                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: `${stat.color}14`,
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Analytics Dashboard Box */}
        <div 
          className="card" 
          style={{
            padding: '2rem',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-xl)',
            background: 'var(--color-white)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Header Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--color-border)',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Pipeline Performance Breakdown</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                Consolidated insights across all active job openings
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.25rem',
              background: 'var(--color-background)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              {['Month', 'Quarter', 'Year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                    background: timeRange === range ? 'var(--color-white)' : 'transparent',
                    color: timeRange === range ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    boxShadow: timeRange === range ? 'var(--shadow-xs)' : 'none'
                  }}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Chart Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem'
          }}>
            
            {/* Chart 1: Candidate Funnel */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Candidate Funnel
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>1,284 Inflow</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { stage: 'Applications', count: 1284, pct: 100, color: '#7c3aed' },
                  { stage: 'AI Screened', count: 892, pct: 69, color: '#8b5cf6' },
                  { stage: 'Shortlisted', count: 234, pct: 18, color: '#2563eb' },
                  { stage: 'Interviewed', count: 86, pct: 7, color: '#0ea5e9' },
                  { stage: 'Offers Accepted', count: 24, pct: 2, color: '#10b981' }
                ].map((item) => (
                  <div key={item.stage}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.8125rem',
                      marginBottom: '0.25rem'
                    }}>
                      <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.stage}</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>{item.count}</strong> ({item.pct}%)
                      </span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'var(--color-background-soft)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${item.pct}%`,
                        background: item.color,
                        borderRadius: '4px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: Time-to-Hire Trend */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Time-to-Hire Trend
                </span>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>-35% Improvement</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '180px',
                gap: '0.5rem',
                paddingTop: '1.5rem',
                borderBottom: '1px solid var(--color-border)'
              }}>
                {[
                  { month: 'Jan', days: 28 },
                  { month: 'Feb', days: 24 },
                  { month: 'Mar', days: 22 },
                  { month: 'Apr', days: 19 },
                  { month: 'May', days: 18 },
                  { month: 'Jun', days: 16 }
                ].map((bar, idx) => (
                  <div
                    key={bar.month}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: `${(bar.days / 30) * 140}px`,
                      background: idx >= 4 ? 'var(--gradient-primary)' : 'var(--color-lavender)',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        top: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: idx >= 4 ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                      }}>
                        {bar.days}d
                      </span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', textAlign: 'center' }}>
                Days elapsed from first screening to signed offer letter
              </div>
            </div>

            {/* Chart 3: Applications by Source */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Applications by Source
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Top Channels</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { source: 'LinkedIn Inbound', count: 542, pct: 42, color: '#0077b5' },
                  { source: 'Career Site', count: 389, pct: 30, color: '#7c3aed' },
                  { source: 'Employee Referrals', count: 231, pct: 18, color: '#10b981' },
                  { source: 'Job Boards & Search', count: 122, pct: 10, color: '#f59e0b' }
                ].map((item) => (
                  <div key={item.source} style={{
                    padding: '0.625rem 0.875rem',
                    background: 'var(--color-background-soft)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {item.source}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>
                      <span>{item.count}</span>
                      <span style={{ fontSize: '0.71875rem', color: 'var(--color-text-muted)', marginLeft: '0.25rem' }}>
                        ({item.pct}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Search, Settings, Bell, CheckCircle } from 'lucide-react';
import { kpiData, revenueChartData, activityFeed } from '../data/mockData';

export default function HeroSection() {
  const [activeTimeRange, setActiveTimeRange] = useState('30D');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <section className="section" style={{
      background: 'radial-gradient(ellipse at top, rgba(0, 217, 255, 0.05), transparent 50%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="grid-bg" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.3
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Text */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: 'var(--spacing-3xl)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            borderRadius: '2rem',
            padding: '0.5rem 1rem',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span className="live-dot" style={{ width: '6px', height: '6px' }}></span>
            REAL-TIME BUSINESS INTELLIGENCE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-md)',
            lineHeight: 1.1
          }}>
            Your business.<br />
            <span className="data-glow">Every signal.</span><br />
            One place.
          </h1>

          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-xl)',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto var(--spacing-xl)'
          }}>
            Turn scattered business data into one live intelligence layer. Monitor KPIs, uncover opportunities, and act on AI-powered insights before the signal becomes a problem.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-md)',
            flexWrap: 'wrap'
          }}>
            <button className="btn btn-primary">
              Start Free <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">Explore Dashboard</button>
          </div>

          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)'
          }}>
            No credit card required · Setup in minutes · Enterprise-ready
          </p>
        </div>

        {/* Analytics Dashboard Visualization */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'var(--color-bg-panel)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Dashboard Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            background: 'var(--color-bg-card)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, fontSize: '1rem' }}>DataPulse</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-positive)',
                fontSize: '0.875rem'
              }}>
                <CheckCircle size={16} />
                All systems operational
              </div>
              <span className="live-indicator" style={{ fontSize: '0.75rem' }}>
                <span className="live-dot" style={{ width: '6px', height: '6px' }}></span>
                LIVE
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="mono" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Updated 14:32
              </span>
              <button className="btn-ghost" style={{ padding: '0.5rem' }} aria-label="Search">
                <Search size={18} />
              </button>
              <button className="btn-ghost" style={{ padding: '0.5rem' }} aria-label="Settings">
                <Settings size={18} />
              </button>
              <button className="btn-ghost" style={{ padding: '0.5rem' }} aria-label="Notifications">
                <Bell size={18} />
              </button>
            </div>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* KPI Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {Object.values(kpiData).map((kpi, index) => (
                <div key={index} className="card" style={{
                  padding: '1rem',
                  background: 'var(--color-bg-card)'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.5rem'
                  }}>
                    {kpi.label}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}>
                    <span className="mono" style={{
                      fontSize: '1.75rem',
                      fontWeight: 600
                    }}>
                      {kpi.value}
                    </span>
                    <span style={{
                      color: 'var(--color-positive)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <TrendingUp size={14} />
                      {kpi.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Chart */}
            <div className="card" style={{
              padding: '1.5rem',
              background: 'var(--color-bg-card)',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Revenue Performance</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['7D', '30D', '90D', '12M'].map(range => (
                    <button
                      key={range}
                      onClick={() => setActiveTimeRange(range)}
                      className="mono"
                      style={{
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.875rem',
                        borderRadius: 'var(--radius-sm)',
                        background: activeTimeRange === range ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                        color: activeTimeRange === range ? '#000' : 'var(--color-text-primary)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart SVG */}
              <div style={{ position: 'relative', height: '250px' }}>
                <svg width="100%" height="100%" viewBox="0 0 600 250" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map(i => (
                    <line
                      key={i}
                      x1="0"
                      y1={50 * i}
                      x2="600"
                      y2={50 * i}
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Comparison line (gray) */}
                  <polyline
                    points={revenueChartData.map((d, i) =>
                      `${(i / (revenueChartData.length - 1)) * 600},${250 - (d.comparison / 3) * 250}`
                    ).join(' ')}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  {/* Main line (cyan glow) */}
                  <polyline
                    points={revenueChartData.map((d, i) =>
                      `${(i / (revenueChartData.length - 1)) * 600},${250 - (d.value / 3) * 250}`
                    ).join(' ')}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    filter="drop-shadow(0 0 8px rgba(0, 217, 255, 0.6))"
                  />

                  {/* Data points */}
                  {revenueChartData.map((d, i) => (
                    <circle
                      key={i}
                      cx={(i / (revenueChartData.length - 1)) * 600}
                      cy={250 - (d.value / 3) * 250}
                      r="4"
                      fill="var(--color-primary)"
                      onMouseEnter={() => setHoveredPoint(i)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </svg>

                {/* Tooltip */}
                {hoveredPoint !== null && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.95)',
                    border: '1px solid var(--color-border-bright)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    pointerEvents: 'none'
                  }}>
                    <div className="mono" style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                      ${revenueChartData[hoveredPoint].value}M
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)' }}>
                      {revenueChartData[hoveredPoint].month}
                    </div>
                  </div>
                )}
              </div>

              {/* Chart Labels */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)'
              }}>
                {revenueChartData.map(d => (
                  <span key={d.month}>{d.month}</span>
                ))}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem'
            }}>
              {/* AI Insight Panel */}
              <div className="card" style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(0, 217, 255, 0.1))',
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem'
                  }}>
                    AI
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>AI Insight</span>
                </div>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  Revenue velocity increased 18.6% this month. Growth is primarily driven by enterprise expansion and improved activation.
                </p>
                <button className="btn-ghost" style={{
                  padding: '0.5rem 0',
                  color: 'var(--color-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}>
                  View Insight <ArrowRight size={16} />
                </button>
              </div>

              {/* Activity Feed */}
              <div className="card" style={{
                padding: '1.5rem',
                background: 'var(--color-bg-card)'
              }}>
                <h4 style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Recent Activity
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activityFeed.slice(0, 3).map((activity, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      gap: '0.75rem',
                      fontSize: '0.875rem'
                    }}>
                      <span className="mono" style={{
                        color: 'var(--color-text-secondary)',
                        flexShrink: 0
                      }}>
                        {activity.time}
                      </span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>—</span>
                      <span>{activity.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

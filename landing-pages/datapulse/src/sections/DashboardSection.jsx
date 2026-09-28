import React, { useState } from 'react';
import { TrendingUp, Users, Target, TrendingDown, ArrowRight } from 'lucide-react';
import { conversionFunnel, geographicData } from '../data/mockData';

export default function DashboardSection() {
  const [activePeriod, setActivePeriod] = useState('30 Days');

  const metrics = [
    { label: 'Revenue', value: '$2.84M', change: '+18.6%', trend: 'up' },
    { label: 'Customers', value: '3,942', change: '+12.4%', trend: 'up' },
    { label: 'Conversion', value: '8.72%', change: '+2.1%', trend: 'up' },
    { label: 'Churn', value: '2.3%', change: '-0.4%', trend: 'down' },
    { label: 'Growth Rate', value: '23.8%', change: '+5.2%', trend: 'up' },
    { label: 'ARR', value: '$34.1M', change: '+21.3%', trend: 'up' },
    { label: 'MRR', value: '$2.84M', change: '+18.6%', trend: 'up' },
    { label: 'CAC', value: '$342', change: '-8.2%', trend: 'down' }
  ];

  const activities = [
    { time: '14:32', event: 'Enterprise conversion: Acme Corp ($45K ARR)', type: 'success' },
    { time: '14:28', event: 'Revenue milestone: $2.8M reached', type: 'success' },
    { time: '14:21', event: 'High-value signup detected', type: 'info' },
    { time: '14:15', event: 'Churn risk: 3 accounts flagged', type: 'warning' }
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="grid-bg" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.2
      }}></div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          See your business in motion.
        </h2>

        {/* Full Dashboard UI */}
        <div style={{
          background: 'var(--color-bg-panel)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Dashboard Header */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Business Overview
              </h3>
              <p className="mono" style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)'
              }}>
                Last updated: 14:32 UTC
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Today', '7 Days', '30 Days', '90 Days'].map(period => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: 'var(--radius-sm)',
                    background: activePeriod === period ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: activePeriod === period ? '#000' : 'var(--color-text-primary)',
                    fontWeight: activePeriod === period ? 600 : 500,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* Metrics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-border-bright)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.5rem'
                  }}>
                    {metric.label}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}>
                    <span className="mono" style={{
                      fontSize: '1.5rem',
                      fontWeight: 600
                    }}>
                      {metric.value}
                    </span>
                    <span style={{
                      color: metric.trend === 'up' ? 'var(--color-positive)' : 'var(--color-positive)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      {metric.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Revenue Chart */}
              <div style={{
                gridColumn: 'span 2',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem'
                }}>
                  Revenue Performance
                </h4>
                <div style={{ height: '200px', position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
                    {/* Grid */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line
                        key={i}
                        x1="0"
                        y1={40 * i}
                        x2="600"
                        y2={40 * i}
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Chart line */}
                    <polyline
                      points="0,150 100,120 200,100 300,90 400,70 500,50 600,30"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      filter="drop-shadow(0 0 8px rgba(0, 217, 255, 0.6))"
                    />
                  </svg>
                </div>
              </div>

              {/* Conversion Funnel */}
              <div style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem'
                }}>
                  Conversion Funnel
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {conversionFunnel.map((stage, index) => (
                    <div key={index}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }}>
                        <span>{stage.stage}</span>
                        <span className="mono" style={{ color: 'var(--color-text-secondary)' }}>
                          {stage.value.toLocaleString()}
                        </span>
                      </div>
                      <div style={{
                        height: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${stage.percentage}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
                          transition: 'width 0.5s ease'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Data */}
              <div style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem'
                }}>
                  Geographic Distribution
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {geographicData.map((region, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'var(--color-primary)',
                          boxShadow: '0 0 8px var(--color-primary)',
                          animation: 'pulse 2s ease-in-out infinite',
                          animationDelay: `${index * 0.2}s`
                        }}></div>
                        <span style={{ fontSize: '0.875rem' }}>{region.region}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span className="mono" style={{
                          fontSize: '1rem',
                          fontWeight: 600
                        }}>
                          {region.value}%
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--color-positive)'
                        }}>
                          {region.growth}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem'
                }}>
                  Live Activity
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {activities.map((activity, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      gap: '0.75rem',
                      fontSize: '0.875rem',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-sm)',
                      borderLeft: `3px solid ${
                        activity.type === 'success' ? 'var(--color-positive)' :
                        activity.type === 'warning' ? 'var(--color-warning)' :
                        'var(--color-primary)'
                      }`
                    }}>
                      <span className="mono" style={{
                        color: 'var(--color-text-secondary)',
                        flexShrink: 0
                      }}>
                        {activity.time}
                      </span>
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

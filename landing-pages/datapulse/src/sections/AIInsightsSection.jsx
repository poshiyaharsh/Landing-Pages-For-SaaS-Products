import React from 'react';
import { AlertCircle, TrendingUp, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { aiInsights } from '../data/mockData';

export default function AIInsightsSection() {
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return 'var(--color-negative)';
      case 'medium': return 'var(--color-warning)';
      case 'low': return 'var(--color-positive)';
      default: return 'var(--color-primary)';
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'high': return AlertCircle;
      case 'medium': return AlertTriangle;
      default: return Info;
    }
  };

  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, var(--color-bg-panel) 0%, var(--color-bg) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto var(--spacing-xl)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-md)',
            lineHeight: 1.2
          }}>
            Numbers tell you what happened.<br />
            DataPulse tells you why.
          </h2>
        </div>

        {/* AI Analysis Interface */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--color-border)',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(0, 217, 255, 0.1))'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 700
              }}>
                AI
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  AI Analysis
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)'
                }}>
                  Detecting patterns across your business data
                </p>
              </div>
            </div>
          </div>

          {/* Insights Counter */}
          <div style={{
            padding: '1rem 1.5rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span className="live-indicator" style={{ fontSize: '0.875rem' }}>
              <span className="live-dot" style={{ width: '6px', height: '6px' }}></span>
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              AI detected <span style={{ color: 'var(--color-primary)' }}>
                {aiInsights.length} significant signals
              </span>
            </span>
          </div>

          {/* Insights List */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {aiInsights.map((insight) => {
                const SeverityIcon = getSeverityIcon(insight.severity);

                return (
                  <div
                    key={insight.id}
                    style={{
                      background: 'var(--color-bg-panel)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = getSeverityColor(insight.severity);
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}>
                      {/* Severity Indicator */}
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        background: `${getSeverityColor(insight.severity)}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <SeverityIcon size={24} color={getSeverityColor(insight.severity)} />
                      </div>

                      <div style={{ flex: 1 }}>
                        {/* Header */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.5rem',
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <span style={{
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '4px',
                              background: `${getSeverityColor(insight.severity)}20`,
                              color: getSeverityColor(insight.severity),
                              fontWeight: 600,
                              letterSpacing: '0.05em'
                            }}>
                              Signal {insight.id.toString().padStart(2, '0')}
                            </span>
                            <span style={{
                              fontSize: '0.75rem',
                              color: 'var(--color-text-secondary)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              {insight.metric}
                            </span>
                          </div>
                          <span style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-secondary)'
                          }}>
                            {insight.timestamp}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 style={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          marginBottom: '0.5rem'
                        }}>
                          {insight.title}
                        </h4>

                        {/* Description */}
                        <p style={{
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '1rem'
                        }}>
                          {insight.description}
                        </p>

                        {/* Action */}
                        <button
                          className="btn-ghost"
                          style={{
                            padding: '0.5rem 0',
                            color: getSeverityColor(insight.severity),
                            fontSize: '0.875rem',
                            fontWeight: 600
                          }}
                        >
                          Explore <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Subtle pulse animation on the border */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: getSeverityColor(insight.severity),
                      opacity: 0.5,
                      borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)'
                    }}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

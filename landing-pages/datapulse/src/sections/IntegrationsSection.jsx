import React from 'react';

export default function IntegrationsSection() {
  const sources = [
    { name: 'CRM', color: 'var(--color-primary)' },
    { name: 'Database', color: 'var(--color-secondary)' },
    { name: 'Payments', color: '#f59e0b' },
    { name: 'Marketing', color: '#10b981' },
    { name: 'Analytics', color: '#8b5cf6' }
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-bg-panel)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="grid-bg" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.2
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Your stack. Connected.
        </h2>

        {/* Integration Flow Visualization */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '3rem 2rem',
          position: 'relative'
        }}>
          {/* Data Sources */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {sources.map((source, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {/* Source Node */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${source.color}20`,
                  border: `2px solid ${source.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${source.color}40`,
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: source.color,
                    boxShadow: `0 0 10px ${source.color}`
                  }}></div>
                </div>

                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)'
                }}>
                  {source.name}
                </span>

                {/* Animated connection line */}
                <svg
                  style={{
                    position: 'absolute',
                    top: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none'
                  }}
                  width="2"
                  height="80"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="80"
                    stroke={source.color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="10"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                </svg>

                {/* Particle animation */}
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  left: '50%',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: source.color,
                  boxShadow: `0 0 8px ${source.color}`,
                  animation: 'particleFlow 2s ease-in-out infinite',
                  animationDelay: `${index * 0.3}s`
                }}></div>
              </div>
            ))}
          </div>

          {/* Central DataPulse Node */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(139, 92, 246, 0.2))',
              border: '3px solid var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-glow-cyan)',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  marginBottom: '0.25rem'
                }}>
                  DataPulse
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Intelligence Engine
                </div>
              </div>
            </div>
          </div>

          {/* Output Arrow */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <svg width="2" height="80">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="80"
                stroke="var(--color-primary)"
                strokeWidth="3"
              />
              <polygon
                points="1,80 6,70 -4,70"
                fill="var(--color-primary)"
              />
            </svg>

            <div style={{
              padding: '1rem 2rem',
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              Unified Business Intelligence
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes particleFlow {
          0% {
            top: 80px;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 160px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Connect your existing data sources.'
    },
    {
      number: '02',
      title: 'Understand',
      description: 'DataPulse normalizes and visualizes your data.'
    },
    {
      number: '03',
      title: 'Act',
      description: 'AI identifies important signals and opportunities.'
    }
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-bg-panel)'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          How it works
        </h2>

        {/* Workflow Steps */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '60px',
                    left: '100%',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-primary), transparent)',
                    zIndex: 0,
                    display: window.innerWidth > 768 ? 'block' : 'none'
                  }}>
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      top: '-3px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      boxShadow: '0 0 12px var(--color-primary)',
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: `${index * 0.5}s`
                    }}></div>
                  </div>
                )}

                <div className="card" style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Step number */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(139, 92, 246, 0.2))',
                    border: '2px solid var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
                  }}>
                    {step.number}
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow visualization */}
          <div style={{
            marginTop: 'var(--spacing-xl)',
            padding: '2rem',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Data Sources
              </div>

              <ArrowRight size={20} color="var(--color-primary)" />

              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(139, 92, 246, 0.2))',
                border: '1px solid var(--color-primary)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: 'var(--shadow-glow-cyan)'
              }}>
                DataPulse Engine
              </div>

              <ArrowRight size={20} color="var(--color-primary)" />

              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Business Action
              </div>
            </div>

            {/* Animated particles */}
            <div style={{
              marginTop: '1.5rem',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                width: '20px',
                height: '100%',
                background: 'var(--color-primary)',
                boxShadow: '0 0 10px var(--color-primary)',
                animation: 'flow 3s linear infinite'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { left: -20px; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}

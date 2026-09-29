import React from 'react';
import { Zap, Clock, ShieldCheck, Target, Info } from 'lucide-react';
import { metrics } from '../data/mockData';

export default function MetricsSection() {
  const metricsData = [
    { 
      value: metrics.screening, 
      label: metrics.screeningLabel,
      sublabel: 'Time saved per candidate evaluation',
      icon: Zap
    },
    { 
      value: metrics.review, 
      label: metrics.reviewLabel,
      sublabel: 'Automated skill & criteria extraction',
      icon: Clock
    },
    { 
      value: metrics.hiring, 
      label: metrics.hiringLabel,
      sublabel: 'Faster end-to-end recruitment velocity',
      icon: Target
    },
    { 
      value: metrics.accuracy, 
      label: metrics.accuracyLabel,
      sublabel: 'Based on recruiter acceptance rate',
      icon: ShieldCheck
    }
  ];

  return (
    <section 
      className="section-sm" 
      style={{
        background: 'var(--color-white)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          textAlign: 'center',
          maxWidth: '680px',
          margin: '0 auto 2.5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            marginBottom: '0.625rem',
            color: 'var(--color-text-primary)'
          }}>
            Hiring teams move faster with HireFlow.
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)'
          }}>
            Measurable efficiency across candidate discovery, screening, and interview workflows.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {metricsData.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--color-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'var(--color-primary)'
                }}>
                  <Icon size={20} />
                </div>

                <div style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem'
                }}>
                  {metric.value}
                </div>

                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.375rem',
                  lineHeight: 1.3
                }}>
                  {metric.label}
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.4
                }}>
                  {metric.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo metric attribution note */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.375rem',
          marginTop: '1.75rem',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)'
        }}>
          <Info size={13} />
          <span>Illustrative benchmark metrics representing simulated hiring efficiency improvements.</span>
        </div>
      </div>
    </section>
  );
}

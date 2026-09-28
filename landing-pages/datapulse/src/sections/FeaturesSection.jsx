import React from 'react';
import { BarChart3, Target, Sparkles, FileText, Database } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'See your most important business metrics update as they happen.',
      visual: 'chart'
    },
    {
      number: '02',
      icon: Target,
      title: 'KPI Monitoring',
      description: 'Track the metrics that actually move your business.',
      visual: 'kpi'
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'AI Insights',
      description: 'Let AI explain what\'s changing, why it matters, and what deserves attention.',
      visual: 'ai'
    },
    {
      number: '04',
      icon: FileText,
      title: 'Custom Reports',
      description: 'Build beautiful reports around the metrics your team cares about.',
      visual: 'report'
    },
    {
      number: '05',
      icon: Database,
      title: 'Data Integrations',
      description: 'Connect your entire data stack without rebuilding your workflow.',
      visual: 'integration'
    }
  ];

  const renderVisual = (type) => {
    switch(type) {
      case 'chart':
        return (
          <svg width="100%" height="100" viewBox="0 0 200 100">
            <polyline
              points="0,80 50,60 100,40 150,50 200,20"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              filter="drop-shadow(0 0 4px rgba(0, 217, 255, 0.6))"
            />
          </svg>
        );
      case 'kpi':
        return (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px'
          }}>
            {[60, 80, 100, 90].map((height, i) => (
              <div
                key={i}
                style={{
                  width: '30px',
                  height: `${height}px`,
                  background: `linear-gradient(to top, var(--color-primary), var(--color-secondary))`,
                  borderRadius: '4px',
                  opacity: 0.8
                }}
              ></div>
            ))}
          </div>
        );
      case 'ai':
        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100px'
          }}>
            <Sparkles size={48} color="var(--color-secondary)" style={{
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          </div>
        );
      case 'report':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            padding: '1rem',
            height: '100px'
          }}>
            {[100, 80, 60].map((width, i) => (
              <div
                key={i}
                style={{
                  width: `${width}%`,
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px'
                }}
              ></div>
            ))}
          </div>
        );
      case 'integration':
        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            height: '100px'
          }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `rgba(0, 217, 255, ${0.3 - i * 0.1})`,
                  border: '2px solid var(--color-primary)',
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

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
          Everything you need to see the signal.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span className="mono" style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-primary)',
                  fontWeight: 600
                }}>
                  {feature.number}
                </span>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 217, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <feature.icon size={20} color="var(--color-primary)" />
                </div>
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                {feature.title}
              </h3>

              <p style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {feature.description}
              </p>

              <div style={{
                marginTop: 'auto',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {renderVisual(feature.visual)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

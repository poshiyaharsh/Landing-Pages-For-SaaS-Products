import React from 'react';
import { ShieldCheck, Lock, Key, FileSearch, Database, Shield } from 'lucide-react';

export default function SecuritySection() {
  const features = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest'
    },
    {
      icon: Key,
      title: 'Role-Based Access',
      description: 'Granular permissions for every team member'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Integrations',
      description: 'OAuth 2.0 and API key encryption'
    },
    {
      icon: FileSearch,
      title: 'Audit Logs',
      description: 'Complete visibility into data access'
    },
    {
      icon: Database,
      title: 'Data Isolation',
      description: 'Your data stays completely isolated'
    },
    {
      icon: Shield,
      title: 'SSO-Ready',
      description: 'Enterprise single sign-on support'
    }
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-bg)'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '700px',
          margin: '0 auto var(--spacing-xl)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-md)'
          }}>
            Built for business-critical data.
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6
          }}>
            Enterprise-grade security that scales with your organization.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                background: 'var(--color-bg-card)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <feature.icon size={24} color="var(--color-positive)" />
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: '2rem',
          background: 'var(--color-bg-panel)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Enterprise Compliance
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {['SOC 2 Type II', 'GDPR', 'CCPA', 'ISO 27001'].map((cert, index) => (
              <span
                key={index}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)'
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

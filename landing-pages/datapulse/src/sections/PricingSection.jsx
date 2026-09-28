import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

export default function PricingSection() {
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
            Pricing that scales with you
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6
          }}>
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: plan.highlighted
                  ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(139, 92, 246, 0.1))'
                  : 'var(--color-bg-card)',
                border: plan.highlighted
                  ? '2px solid var(--color-primary)'
                  : '1px solid var(--color-border)',
                position: 'relative',
                transform: plan.highlighted ? 'scale(1.05)' : 'none'
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.375rem 1rem',
                  background: 'var(--color-primary)',
                  color: '#000',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  borderRadius: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1rem'
                }}>
                  {plan.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.25rem'
                }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{
                      fontSize: '1rem',
                      color: 'var(--color-text-secondary)'
                    }}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                marginBottom: '2rem',
                flex: 1
              }}>
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.9375rem'
                    }}
                  >
                    <Check
                      size={20}
                      color="var(--color-positive)"
                      style={{ flexShrink: 0, marginTop: '0.125rem' }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={plan.highlighted ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

export default function PricingSection({ onOpenDemo }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section" id="pricing" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>TRANSPARENT PLANS</span>
          </div>
          <h2 className="section-title">
            Simple pricing for teams of every size.
          </h2>
          <p className="section-subtitle">
            Scale seamlessly from your first specialist hire to global multi-department talent acquisition.
          </p>
        </div>

        {/* Monthly / Annual Billing Toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.875rem',
          marginBottom: '3rem'
        }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: isAnnual ? 500 : 700,
            color: isAnnual ? 'var(--color-text-secondary)' : 'var(--color-text-primary)'
          }}>
            Monthly Billing
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle annual or monthly billing"
            style={{
              width: '52px',
              height: '28px',
              borderRadius: 'var(--radius-full)',
              background: isAnnual ? 'var(--color-primary)' : 'var(--color-border)',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              padding: '2px'
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              position: 'absolute',
              top: '2px',
              left: isAnnual ? '26px' : '2px',
              transition: 'left 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
            }} />
          </button>

          <span style={{
            fontSize: '0.875rem',
            fontWeight: isAnnual ? 700 : 500,
            color: isAnnual ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem'
          }}>
            Annual Billing
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 800,
              padding: '0.125rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              SAVE 20%
            </span>
          </span>
        </div>

        {/* 3 Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'stretch'
        }}>
          {pricingPlans.map((plan) => {
            const isGrowth = plan.name === 'Growth';
            const priceDisplay = plan.price === 'Custom' 
              ? 'Custom' 
              : isAnnual 
                ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}` 
                : plan.price;

            return (
              <div
                key={plan.name}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.5rem 2rem',
                  borderRadius: 'var(--radius-2xl)',
                  background: isGrowth ? 'var(--color-white)' : 'var(--color-white)',
                  border: isGrowth ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  boxShadow: isGrowth 
                    ? '0 20px 40px -10px rgba(124, 58, 237, 0.2), 0 4px 12px rgba(15, 23, 42, 0.05)' 
                    : 'var(--shadow-sm)',
                  position: 'relative',
                  transform: isGrowth ? 'scale(1.02)' : 'none'
                }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.3rem 0.875rem',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    boxShadow: '0 4px 10px rgba(124, 58, 237, 0.35)',
                    whiteSpace: 'nowrap'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem' }}>
                    {plan.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem', marginBottom: '1.75rem' }}>
                    <span style={{
                      fontSize: '3rem',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1
                    }}>
                      {priceDisplay}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                        {isAnnual ? '/ user / month, billed annually' : plan.period}
                      </span>
                    )}
                  </div>

                  <div style={{
                    height: '1px',
                    background: 'var(--color-border-light)',
                    marginBottom: '1.75rem'
                  }} />

                  {/* Feature Checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                    {plan.features.map((feat) => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: isGrowth ? 'var(--color-lavender)' : 'var(--color-background-soft)',
                          color: 'var(--color-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenDemo ? onOpenDemo(`${plan.name} Plan`) : null}
                  className={isGrowth ? 'btn btn-primary' : 'btn btn-secondary'}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.875rem'
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

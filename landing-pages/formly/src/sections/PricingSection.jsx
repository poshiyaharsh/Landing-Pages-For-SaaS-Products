import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/pricingData.js';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';

export default function PricingSection({ onOpenDemo }) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="purple" icon={Sparkles}>
            Transparent Pricing
          </Badge>
          <h2 className="section-title">
            Simple plans for <span className="gradient-text">every stage</span>.
          </h2>
          <p className="section-subtitle">
            Start completely free with zero credit card required. Upgrade as your responses scale and your workflow needs grow.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#F1F5F9',
              padding: '6px',
              borderRadius: '9999px',
              marginTop: '24px'
            }}
          >
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: !isYearly ? '#FFFFFF' : 'transparent',
                color: !isYearly ? '#0F172A' : '#64748B',
                boxShadow: !isYearly ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: isYearly ? '#FFFFFF' : 'transparent',
                color: isYearly ? '#0F172A' : '#64748B',
                boxShadow: isYearly ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 800,
                  backgroundColor: '#ECFDF5',
                  color: '#059669',
                  padding: '2px 8px',
                  borderRadius: '9999px'
                }}
              >
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '36px 32px',
                  border: plan.popular ? '2px solid #6366F1' : '1px solid #E2E8F0',
                  boxShadow: plan.popular ? '0 20px 40px -10px rgba(99, 102, 241, 0.22)' : 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transform: plan.popular ? 'scale(1.02)' : 'none',
                  zIndex: plan.popular ? 2 : 1,
                  transition: 'all 200ms ease'
                }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'linear-gradient(135deg, #6366F1, #EC4899)',
                      background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, minHeight: '42px', marginBottom: '24px' }}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-brand)', lineHeight: 1 }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
                      / month {isYearly && price > 0 ? '(billed annually)' : ''}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="lg"
                    fullWidth
                    iconRight={ArrowRight}
                    onClick={() => onOpenDemo && onOpenDemo(plan.id)}
                    style={{ marginBottom: '32px' }}
                  >
                    {plan.ctaText}
                  </Button>

                  {/* Feature Checklist */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1E293B', marginBottom: '14px' }}>
                      Key Features:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {plan.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.875rem',
                            color: feat.included ? '#334155' : '#94A3B8'
                          }}
                        >
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: feat.included ? (plan.popular ? '#EEF2FF' : '#ECFDF5') : '#F1F5F9',
                              color: feat.included ? (plan.popular ? '#6366F1' : '#10B981') : '#CBD5E1',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span style={{ textDecoration: feat.included ? 'none' : 'line-through' }}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

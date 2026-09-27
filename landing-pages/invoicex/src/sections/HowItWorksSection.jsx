import React from 'react';
import { WORKFLOW_STEPS } from '../data/mockData';
import { UserPlus, Send, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorksSection = () => {
  const icons = [UserPlus, Send, Activity];

  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '64px' }}>
          <div className="section-tag section-tag-emerald">
            <Activity size={14} />
            <span>Frictionless Flow</span>
          </div>

          <h2 className="section-heading">
            Simplicity at every step of getting paid.
          </h2>

          <p className="section-subheading mx-auto">
            From setup to settlement, InvoiceX removes friction so you can focus on delivering exceptional work for your clients.
          </p>
        </div>

        {/* 3-Step Horizontal Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            position: 'relative'
          }}
        >
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.number}
                className="fintech-card"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: '#FFFFFF'
                }}
              >
                {/* Step Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: idx === 0 ? '#EEF2FF' : idx === 1 ? '#EFF6FF' : '#ECFDF5',
                      color: idx === 0 ? '#4F46E5' : idx === 1 ? '#2563EB' : '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      letterSpacing: '-0.02em',
                      color: '#E2E8F0',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '6px' }}>
                  {step.title}
                </h3>

                <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#4F46E5', marginBottom: '14px' }}>
                  {step.subtitle}
                </h4>

                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px', flex: 1 }}>
                  {step.description}
                </p>

                {/* Sub-features list */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {step.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#334155' }}>
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

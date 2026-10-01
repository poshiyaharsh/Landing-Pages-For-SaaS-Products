import React from 'react';
import { Sparkles, LayoutTemplate, Sliders, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import Badge from '../components/Badge.jsx';

export default function HowItWorksSection({ onOpenDemo }) {
  const steps = [
    {
      num: '01',
      title: 'Choose',
      tagline: 'Pick a template or start from scratch.',
      description: 'Select from 80+ high-converting curated templates designed for lead capture, surveys, and applications, or start with a crisp blank canvas.',
      accentColor: '#6366F1',
      accentBg: '#EEF2FF',
      icon: LayoutTemplate,
      visual: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366F1' }}></span>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>Select Starting Point</span>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ fontSize: '0.6875rem', backgroundColor: '#F1F5F9', padding: '3px 8px', borderRadius: '6px', color: '#475569' }}>Feedback</span>
            <span style={{ fontSize: '0.6875rem', backgroundColor: '#EEF2FF', padding: '3px 8px', borderRadius: '6px', color: '#4F46E5', fontWeight: 700 }}>Lead Gen (Selected)</span>
            <span style={{ fontSize: '0.6875rem', backgroundColor: '#F1F5F9', padding: '3px 8px', borderRadius: '6px', color: '#475569' }}>Onboarding</span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Build',
      tagline: 'Drag, drop, customize, and add smart logic.',
      description: 'Rearrange 30+ interactive inputs with smooth micro-animations. Configure conditional logic branches, custom theme colors, and custom fonts.',
      accentColor: '#EC4899',
      accentBg: '#FDF2F8',
      icon: Sliders,
      visual: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DB2777' }}>IF Role = &quot;Founder&quot;</span>
            <span style={{ fontSize: '0.6875rem', backgroundColor: '#FDF2F8', color: '#DB2777', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Rule Active</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#475569', backgroundColor: '#FAFBFD', padding: '6px 10px', borderRadius: '6px', border: '1px solid #EEF2F6' }}>
            &rarr; Display VIP fast-track calendar picker
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Publish',
      tagline: 'Share your form and start collecting responses.',
      description: 'Embed on any website with a single script tag, share a branded hosted link, or sync live submissions into your CRM and Slack automatically.',
      accentColor: '#10B981',
      accentBg: '#ECFDF5',
      icon: Send,
      visual: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A' }}>formly.io/f/grow-2026</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={13} /> Synced to 4 active webhook destinations
          </div>
        </div>
      )
    }
  ];

  return (
    <section style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="indigo" icon={Sparkles}>
            Simple 3-Step Flow
          </Badge>
          <h2 className="section-title">
            How Formly <span className="gradient-text">works</span>.
          </h2>
          <p className="section-subtitle">
            Create and launch high-impact forms in minutes, without ever having to write or maintain frontend code.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            position: 'relative'
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  backgroundColor: '#FAFBFD',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all 200ms ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.08)';
                  e.currentTarget.style.borderColor = step.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-brand)',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: step.accentColor,
                        lineHeight: 1
                      }}
                    >
                      {step.num}
                    </span>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: step.accentBg,
                        color: step.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#334155', marginBottom: '10px' }}>
                    {step.tagline}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
                    {step.description}
                  </p>
                </div>

                {/* Step Mini Visual Preview */}
                <div>
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

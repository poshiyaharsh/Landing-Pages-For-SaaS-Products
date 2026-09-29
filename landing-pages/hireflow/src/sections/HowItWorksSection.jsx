import React from 'react';
import { 
  FileText, 
  Cpu, 
  Target, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function HowItWorksSection({ onOpenDemo }) {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Create Your Role',
      description: 'Add requirements, skills, experience, and hiring criteria for the position you need to fill.'
    },
    {
      number: '02',
      icon: Cpu,
      title: 'Let AI Screen',
      description: 'HireFlow automatically analyzes incoming candidate resumes against your requirements in real-time.'
    },
    {
      number: '03',
      icon: Target,
      title: 'Find Your Matches',
      description: 'Review candidates ranked by relevant role signals, skills alignment, and verified experience fit.'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Make the Hire',
      description: 'Schedule interviews, review synthesized insights, and move candidates forward to offer.'
    }
  ];

  return (
    <section className="section" id="how-it-works" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>SIMPLE 4-STEP ONBOARDING</span>
          </div>
          <h2 className="section-title">
            From application to offer, without the busywork.
          </h2>
          <p className="section-subtitle">
            Set up your requisitions in under 3 minutes and let our intelligent engine orchestrate the heavy lifting.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div 
          className="desktop-timeline-wrapper"
          style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto 3rem'
          }}
        >
          {/* Continuous connecting horizontal bar */}
          <div 
            style={{
              position: 'absolute',
              top: '48px',
              left: '12%',
              right: '12%',
              height: '3px',
              background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 50%, #10b981 100%)',
              zIndex: 0,
              opacity: 0.35,
              borderRadius: '2px'
            }}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="card"
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    position: 'relative',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Step Number Top Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.625rem',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '0.05em',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    STEP {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div style={{
                    width: '68px',
                    height: '68px',
                    margin: '0.5rem auto 1.25rem',
                    borderRadius: '50%',
                    background: 'var(--color-lavender)',
                    border: '2px solid var(--color-lavender-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}>
                    <Icon size={30} />
                  </div>

                  <h3 style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    marginBottom: '0.625rem',
                    color: 'var(--color-text-primary)'
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div 
          className="mobile-timeline-wrapper"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '540px',
            margin: '0 auto 2.5rem'
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--color-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.25rem'
                  }}>
                    STEP {step.number}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-timeline-wrapper {
            display: none !important;
          }
          .mobile-timeline-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}

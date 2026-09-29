import React, { useState } from 'react';
import { 
  Inbox, 
  FileSearch, 
  Users2, 
  CalendarCheck, 
  Award, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      icon: Inbox,
      title: 'Applications',
      short: 'Inbound Ingestion',
      description: 'Resumes flow in from LinkedIn, your career site, referrals, or ATS seamlessly.'
    },
    {
      number: '02',
      icon: FileSearch,
      title: 'AI Screening',
      short: 'Deep Parsing',
      description: 'AI analyzes project depth, verified skills, and career trajectory beyond plain text keywords.'
    },
    {
      number: '03',
      icon: Users2,
      title: 'Candidate Matching',
      short: 'Scoring & Ranking',
      description: 'Candidates are mapped against requirements with explainable 0-100% fit scores.'
    },
    {
      number: '04',
      icon: CalendarCheck,
      title: 'Interview',
      short: 'Smart Coordination',
      description: 'One-click panel scheduling with automated timezone matching and calendar sync.'
    },
    {
      number: '05',
      icon: Award,
      title: 'Hiring Decision',
      short: 'Consensus & Offer',
      description: 'AI consolidates interview signals, rubric evaluations, and team feedback for confident hires.'
    }
  ];

  return (
    <section className="section" id="workflow" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>UNIFIED RECRUITMENT WORKFLOW</span>
          </div>
          <h2 className="section-title">
            One intelligent workflow for your entire hiring process.
          </h2>
          <p className="section-subtitle">
            From the first resume to the final interview, HireFlow keeps every candidate moving through a smarter hiring pipeline.
          </p>
        </div>

        {/* Workflow Pipeline Display */}
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto 3rem'
        }}>
          {/* Animated Connecting Line (Desktop) */}
          <div 
            className="workflow-connector"
            style={{
              position: 'absolute',
              top: '46px',
              left: '8%',
              right: '8%',
              height: '3px',
              background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 50%, #10b981 100%)',
              zIndex: 0,
              opacity: 0.35,
              borderRadius: '2px'
            }} 
          />

          {/* Steps Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.25rem',
            position: 'relative',
            zIndex: 1
          }} className="workflow-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCurrent = activeStep === index;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '1.25rem 0.75rem',
                    borderRadius: 'var(--radius-xl)',
                    background: isCurrent ? 'var(--color-lavender-subtle)' : 'transparent',
                    border: `1px solid ${isCurrent ? 'var(--color-primary)' : 'transparent'}`,
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isCurrent) e.currentTarget.style.background = 'var(--color-background-soft)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isCurrent) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {/* Step Icon Badge */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: isCurrent ? 'var(--gradient-primary)' : 'var(--color-white)',
                    border: `2px solid ${isCurrent ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCurrent ? '#ffffff' : 'var(--color-text-secondary)',
                    boxShadow: isCurrent ? '0 8px 20px rgba(124, 58, 237, 0.3)' : 'var(--shadow-sm)',
                    marginBottom: '1rem',
                    transition: 'all 0.25s ease',
                    position: 'relative'
                  }}>
                    <Icon size={26} />
                    <span style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: isCurrent ? '#ffffff' : 'var(--color-lavender)',
                      color: isCurrent ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      border: '1px solid var(--color-border-light)'
                    }}>
                      {step.number}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                    color: isCurrent ? 'var(--color-primary)' : 'var(--color-text-primary)'
                  }}>
                    {step.title}
                  </h3>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: isCurrent ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {step.short}
                  </span>

                  <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5,
                    maxWidth: '180px'
                  }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Highlight Banner */}
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '1.25rem 1.75rem',
          background: 'var(--gradient-soft)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-lavender-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0
            }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Stage {steps[activeStep].number}: {steps[activeStep].title} Automation Active
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                {steps[activeStep].description}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              Step {activeStep + 1} of 5
            </span>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="btn btn-secondary"
              style={{
                padding: '0.375rem 0.875rem',
                fontSize: '0.8125rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              Next Stage
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .workflow-connector {
            display: none !important;
          }
          .workflow-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

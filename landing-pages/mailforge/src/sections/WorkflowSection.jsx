import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Layers, Users, GitCompare, BarChart3, ChevronRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/mockData';

export const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Sparkles, Zap, Layers, Users, GitCompare, BarChart3];

  return (
    <section
      id="workflow"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FAFBFC',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Zap size={14} />
            <span>End-To-End Automation</span>
          </div>
          <h2>
            Your campaign, <span className="gradient-text">accelerated by AI.</span>
          </h2>
          <p>
            Experience a seamless, 6-step lifecycle architecture that turns vague concepts into measurable revenue without manual bottlenecks.
          </p>
        </div>

        {/* 6 Step Interactive Visual Pipeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '12px',
            marginBottom: '48px',
            position: 'relative'
          }}
          className="workflow-pipeline-grid"
        >
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  borderRadius: '14px',
                  padding: '18px 14px',
                  border: isActive ? '1px solid #3B82F6' : '1px solid var(--border-light)',
                  boxShadow: isActive ? '0 10px 25px -5px rgba(37, 99, 235, 0.25)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isActive ? '#38BDF8' : '#94A3B8'
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-subtle)',
                      color: isActive ? '#38BDF8' : 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={13} />
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: isActive ? '#FFFFFF' : '#0F172A'
                  }}
                >
                  {step.title}
                </div>

                <span
                  style={{
                    fontSize: '0.6875rem',
                    color: isActive ? '#94A3B8' : '#64748B',
                    marginTop: 'auto'
                  }}
                >
                  {step.highlight}
                </span>

                {/* Active Indicator Pin */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#0F172A',
                      rotate: '45deg',
                      borderRight: '1px solid #3B82F6',
                      borderBottom: '1px solid #3B82F6'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Workflow Step */}
        <div
          style={{
            backgroundColor: '#0F172A',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '36px',
            color: '#FFFFFF',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'center'
          }}
          className="workflow-spotlight-grid"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', fontSize: '0.75rem', fontWeight: 700, marginBottom: '14px' }}>
              Step {WORKFLOW_STEPS[activeStep].step} of 06
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '14px' }}>
              {WORKFLOW_STEPS[activeStep].title}
            </h3>
            <p style={{ fontSize: '1.0625rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
              {WORKFLOW_STEPS[activeStep].desc}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '0.875rem', fontWeight: 600 }}>
              <CheckCircle2 size={16} /> {WORKFLOW_STEPS[activeStep].highlight}
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.875rem' }}
              >
                Next Step <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Interactive Visual Blueprint for this Step */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                TELEMETRY_PIPELINE // STAGE_{WORKFLOW_STEPS[activeStep].step}
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#34D399', fontWeight: 600 }}>Active</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                <span style={{ color: '#94A3B8' }}>Execution Latency</span>
                <span style={{ color: '#F1F5F9', fontWeight: 600 }}>&lt; 350ms</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                <span style={{ color: '#94A3B8' }}>AI Models Applied</span>
                <span style={{ color: '#F1F5F9', fontWeight: 600 }}>MailForge Neural-V3 + Cohort Cluster</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                <span style={{ color: '#94A3B8' }}>Human Intervention</span>
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>Optional Review Mode</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                <span style={{ color: '#94A3B8' }}>Success Benchmark</span>
                <span style={{ color: '#34D399', fontWeight: 600 }}>42.8% Average Open Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .workflow-pipeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .workflow-spotlight-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkflowSection;

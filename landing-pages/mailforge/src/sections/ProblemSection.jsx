import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  FileQuestion,
  Palette,
  Users2,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  XCircle
} from 'lucide-react';
import { PROBLEM_COMPARISON } from '../data/mockData';

export const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState('compare'); // 'compare' | 'traditional' | 'mailforge'

  const problems = [
    {
      icon: FileQuestion,
      title: "Writing from scratch",
      description: "Blank pages slow campaigns down. Marketers spend hours agonizing over tone, hooks, and subject variations.",
      painTag: "4+ hours wasted drafting"
    },
    {
      icon: Palette,
      title: "Designing takes forever",
      description: "Beautiful emails shouldn't require a designer or fragile HTML templates that break in Outlook.",
      painTag: "CSS rendering headaches"
    },
    {
      icon: Users2,
      title: "Audiences are complicated",
      description: "Send the right message to the right people without building arcane SQL queries or manual list exports.",
      painTag: "Generic blast fatigue"
    },
    {
      icon: Clock,
      title: "Analytics arrive too late",
      description: "Know what's working while campaigns are running, not 48 hours after your promotion has expired.",
      painTag: "Post-mortem guesswork"
    }
  ];

  return (
    <section
      id="solutions"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FAFBFC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <AlertCircle size={14} />
            <span>The Lifecycle Dilemma</span>
          </div>
          <h2>
            Email marketing shouldn't feel like <span className="gradient-text">guesswork.</span>
          </h2>
          <p>
            Traditional tools force you to juggle copywriting docs, custom HTML templates, fragile segments, and fragmented analytics. MailForge unites it all with intelligence.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 200ms ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#FEF2F2',
                    color: '#EF4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <Icon size={20} />
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#DC2626',
                    backgroundColor: '#FEE2E2',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    marginBottom: '12px'
                  }}
                >
                  {prob.painTag}
                </span>

                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  {prob.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.55 }}>
                  {prob.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Before / After Workflow Comparison */}
        <div
          style={{
            backgroundColor: '#0F172A',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '36px',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
            color: '#FFFFFF'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#38BDF8'
              }}
            >
              Workflow Transformation
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginTop: '6px' }}>
              From Fragile Assembly Line to Autonomous Growth Engine
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px'
            }}
            className="problem-compare-grid"
          >
            {/* Traditional Column */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    color: '#F87171',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <XCircle size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FCA5A5' }}>
                    Traditional Email Marketing
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Slow, fragmented, manual handoffs</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PROBLEM_COMPARISON.traditional.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: '#E2E8F0' }}>
                      {idx + 1}. {item.step}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MailForge Column */}
            <div
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#93C5FD' }}>
                    MailForge AI Engine
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>Continuous, predictive, automated</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PROBLEM_COMPARISON.mailforge.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: 'rgba(37, 99, 235, 0.15)',
                      borderRadius: '8px',
                      border: '1px solid rgba(96, 165, 250, 0.25)',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={13} style={{ color: '#38BDF8' }} /> {idx + 1}. {item.step}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#BAE6FD', fontWeight: 500 }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-compare-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;

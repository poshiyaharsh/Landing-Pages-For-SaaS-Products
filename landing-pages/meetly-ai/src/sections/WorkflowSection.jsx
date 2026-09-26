import React from 'react';
import { Calendar, BrainCircuit, ArrowRight, Zap, CheckCircle2, Sparkles, Video } from 'lucide-react';

export const WorkflowSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Meet',
      subtitle: 'Connect your meeting or upload a recording',
      description: 'Meetly automatically joins Zoom, Google Meet, or Microsoft Teams via your calendar. Or simply drop in any audio or video file.',
      icon: Video,
      accentColor: '#38BDF8',
      bgBadge: '#F0F9FF',
      details: ['One-click calendar sync', 'Silent background participant', 'Supports MP4, WAV, M4A']
    },
    {
      number: '02',
      title: 'Understand',
      subtitle: 'Meetly AI transcribes and analyzes in real time',
      description: 'Our acoustic models separate speakers, detect vocal inflection, and understand deep technical context across 35+ languages.',
      icon: BrainCircuit,
      accentColor: '#8B5CF6',
      bgBadge: '#F5F3FF',
      details: ['99.4% speech-to-text accuracy', 'Individual speaker diarization', 'Contextual semantic analysis']
    },
    {
      number: '03',
      title: 'Act',
      subtitle: 'Get summaries, decisions, and actionable tasks',
      description: 'Walk away with crisp executive takeaways, verified commitments, and automatically created Linear issues or Slack digests.',
      icon: Zap,
      accentColor: '#10B981',
      bgBadge: '#ECFDF5',
      details: ['Instant executive summaries', 'Assigned action items with dates', 'Bi-directional sync to Linear & Jira']
    }
  ];

  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '64px' }}>
          <div className="section-tag section-tag-ai">
            <Sparkles size={14} />
            <span>Workflow Automation</span>
          </div>

          <h2 className="section-heading">
            From conversation to clarity in three steps.
          </h2>

          <p className="section-subheading mx-auto">
            No complicated manual workflows or awkward bots disrupting your presentation. Just effortless, frictionless intelligence.
          </p>
        </div>

        {/* 3-Step Horizontal Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            position: 'relative'
          }}
          className="workflow-grid"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="card-light"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
                }}
              >
                {/* Step Number Top Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: step.bgBadge,
                      color: step.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      letterSpacing: '-0.02em',
                      color: '#E2E8F0',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', marginBottom: '6px' }}>
                  {step.title}
                </h3>

                <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: step.accentColor, marginBottom: '14px' }}>
                  {step.subtitle}
                </h4>

                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px', flex: 1 }}>
                  {step.description}
                </p>

                {/* Bullet details */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {step.details.map((detail, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#475569' }}>
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>{detail}</span>
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

export default WorkflowSection;

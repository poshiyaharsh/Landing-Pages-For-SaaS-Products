import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  Check,
  RefreshCw,
  Cpu,
  Zap,
  Volume2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HERO_TRANSCRIPT_DEMO } from '../data/mockData';

export const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(4); // 1: transcript, 2: processing, 3: summary, 4: action items
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [completedActions, setCompletedActions] = useState({});

  // Auto-play progression on mount or user replay
  const startReplay = () => {
    setActiveStep(1);
    setIsAutoPlaying(true);
    setCompletedActions({});

    setTimeout(() => setActiveStep(2), 1200);
    setTimeout(() => setActiveStep(3), 2600);
    setTimeout(() => {
      setActiveStep(4);
      setIsAutoPlaying(false);
    }, 4000);
  };

  const toggleActionItem = (id) => {
    setCompletedActions((prev) => {
      const nextState = !prev[id];
      if (nextState) {
        confetti({
          particleCount: 28,
          spread: 45,
          origin: { y: 0.7 },
          colors: ['#6366F1', '#8B5CF6', '#10B981']
        });
      }
      return { ...prev, [id]: nextState };
    });
  };

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero-preview"
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '90px',
        overflow: 'hidden'
      }}
    >
      {/* Background Mesh Lighting */}
      <div className="bg-grid-subtle" />
      <div className="glow-ambient-1" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Top Copy */}
        <div className="text-center mx-auto" style={{ maxWidth: '820px', marginBottom: '56px' }}>
          {/* Badge */}
          <div
            className="section-tag section-tag-ai"
            style={{
              boxShadow: '0 2px 10px rgba(139, 92, 246, 0.15)',
              cursor: 'default'
            }}
          >
            <Sparkles size={14} className="pulse-ai" style={{ width: '12px', height: '12px' }} />
            <span>Introducing Meetly AI 2.0</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ fontWeight: '500', color: '#6D28D9' }}>Real-time Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: '#0F172A',
              marginBottom: '22px'
            }}
          >
            Every meeting.
            <br />
            <span className="shimmer-text">Remembered. Organized. Actionable.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto 32px'
            }}
          >
            Meetly AI automatically captures your conversations, understands what matters, and turns every meeting into clear summaries, decisions, and next steps.
          </p>

          {/* Call-to-action buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '20px'
            }}
          >
            <a
              href="#pricing"
              onClick={(e) => handleCtaClick(e, 'pricing')}
              className="btn btn-primary btn-lg"
              style={{
                boxShadow: '0 8px 24px -4px rgba(99, 102, 241, 0.45)',
                fontWeight: '700'
              }}
            >
              <span>Start for Free</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => handleCtaClick(e, 'how-it-works')}
              className="btn btn-secondary btn-lg"
              style={{ fontWeight: '600' }}
            >
              <Play size={16} style={{ fill: 'currentColor' }} />
              <span>See How It Works</span>
            </a>
          </div>

          {/* Trust Guarantee */}
          <p style={{ fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            No credit card required · Set up in minutes · Enterprise encryption
          </p>
        </div>

        {/* =========================================================================
            HERO VISUAL: TRANSCRIPT -> AI PROCESSING -> SUMMARY & ACTION ITEMS
            ========================================================================= */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, #0F172A 0%, #0B1120 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 80px -15px rgba(15, 23, 42, 0.35), 0 0 45px -10px rgba(99, 102, 241, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Window Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 22px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(15, 23, 42, 0.7)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Window Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ marginLeft: '12px', fontSize: '0.8125rem', color: '#94A3B8', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="pulse-ai" style={{ width: '6px', height: '6px' }} />
                <span>meetly.app/room/q4-launch-alignment</span>
              </span>
            </div>

            {/* Meeting metadata & Replay action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#CBD5E1',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}
              >
                <Clock size={12} color="#38BDF8" />
                <span>{HERO_TRANSCRIPT_DEMO.duration}</span>
              </div>

              <button
                type="button"
                onClick={startReplay}
                disabled={isAutoPlaying}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: isAutoPlaying ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  color: '#A5B4FC',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: isAutoPlaying ? 'default' : 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                <RefreshCw size={12} className={isAutoPlaying ? 'animate-spin' : ''} />
                <span>{isAutoPlaying ? 'Synthesizing...' : 'Replay Demo'}</span>
              </button>
            </div>
          </div>

          {/* Workflow Concept Banner */}
          <div
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.12) 50%, rgba(16, 185, 129, 0.1) 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.78rem',
              color: '#CBD5E1'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
              <span style={{ color: '#38BDF8' }}>TRANSCRIPT</span>
              <span style={{ color: '#64748B' }}>→</span>
              <span style={{ color: '#C084FC' }}>AI PROCESSING</span>
              <span style={{ color: '#64748B' }}>→</span>
              <span style={{ color: '#FCD34D' }}>SUMMARY & DECISIONS</span>
              <span style={{ color: '#64748B' }}>→</span>
              <span style={{ color: '#34D399' }}>ACTION ITEMS</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#94A3B8' }}>3 Speakers Identified</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '-6px' }}>
                {HERO_TRANSCRIPT_DEMO.participants.map((p) => (
                  <span
                    key={p.name}
                    title={`${p.name} (${p.role})`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: p.color,
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      border: '1.5px solid #0F172A',
                      marginLeft: '-4px'
                    }}
                  >
                    {p.avatar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Visualizer Body: Split View */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: '0',
              position: 'relative'
            }}
            className="hero-split-grid"
          >
            {/* ================= LEFT SIDE: LIVE TRANSCRIPT ================= */}
            <div
              style={{
                padding: '28px',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(11, 17, 32, 0.6)'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '22px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8'
                    }}
                  >
                    <Volume2 size={15} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F8FAFC' }}>
                      Live Meeting Transcript
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      Acoustic diarization active
                    </span>
                  </div>
                </div>

                <div className="waveform-bars">
                  <span className="waveform-bar" style={{ background: '#38BDF8' }} />
                  <span className="waveform-bar" style={{ background: '#6366F1' }} />
                  <span className="waveform-bar" style={{ background: '#8B5CF6' }} />
                  <span className="waveform-bar" style={{ background: '#38BDF8' }} />
                  <span className="waveform-bar" style={{ background: '#6366F1' }} />
                </div>
              </div>

              {/* Transcript Chat Bubbles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {HERO_TRANSCRIPT_DEMO.transcript.map((item, index) => {
                  const isVisible = activeStep >= 1;
                  const isSarah = item.speaker === 'Sarah';
                  const isAlex = item.speaker === 'Alex';
                  const isMichael = item.speaker === 'Michael';

                  const badgeColor = isSarah ? '#6366F1' : isAlex ? '#0EA5E9' : '#8B5CF6';

                  return (
                    <div
                      key={item.id}
                      style={{
                        opacity: isVisible ? 1 : 0.3,
                        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                        transition: `all 400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
                        background: 'rgba(30, 41, 59, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '14px',
                        padding: '14px 16px'
                      }}
                    >
                      {/* Speaker Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: badgeColor,
                              color: '#FFF',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.62rem',
                              fontWeight: '700'
                            }}
                          >
                            {item.speaker[0]}
                          </span>
                          <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#F1F5F9' }}>
                            {item.speaker}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                            ({item.role})
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            color: '#64748B',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {item.time}
                        </span>
                      </div>

                      {/* Speech Content */}
                      <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#E2E8F0', margin: 0 }}>
                        "{item.text}"
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Transition Indicator to AI */}
              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeStep >= 2
                    ? 'linear-gradient(90deg, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.2) 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 300ms ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={16} color="#A78BFA" className={activeStep === 2 ? 'pulse-ai' : ''} />
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#DDD6FE' }}>
                      ✨ Meetly AI
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#A5B4FC', marginLeft: '6px' }}>
                      {activeStep === 2 ? 'Analyzing conversation & decisions...' : 'Continuous reasoning active'}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(139, 92, 246, 0.3)',
                    color: '#E9D5FF',
                    fontWeight: '600'
                  }}
                >
                  Neural Diarizer
                </span>
              </div>
            </div>

            {/* ================= RIGHT SIDE: SUMMARY + ACTION ITEMS ================= */}
            <div
              style={{
                padding: '28px',
                background: 'rgba(15, 23, 42, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Meeting Summary Card */}
              <div
                style={{
                  opacity: activeStep >= 3 ? 1 : 0.35,
                  transform: activeStep >= 3 ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'all 450ms cubic-bezier(0.16, 1, 0.3, 1)',
                  background: 'rgba(30, 41, 59, 0.7)',
                  borderRadius: '16px',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  padding: '18px 20px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: 'rgba(139, 92, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A78BFA'
                      }}
                    >
                      <Sparkles size={13} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.05em', color: '#A78BFA', textTransform: 'uppercase' }}>
                      MEETING SUMMARY
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.7rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34D399',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}
                  >
                    High Confidence (99%)
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '10px' }}>
                  {HERO_TRANSCRIPT_DEMO.summary.title}
                </h4>

                <div style={{ marginTop: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#CBD5E1', display: 'block', marginBottom: '8px', letterSpacing: '0.02em' }}>
                    KEY DECISIONS
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {HERO_TRANSCRIPT_DEMO.summary.decisions.map((decision, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#E2E8F0' }}>
                        <Check size={14} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Items Card */}
              <div
                style={{
                  opacity: activeStep >= 4 ? 1 : 0.25,
                  transform: activeStep >= 4 ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1) 150ms',
                  background: 'rgba(30, 41, 59, 0.55)',
                  borderRadius: '16px',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  padding: '18px 20px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#34D399'
                      }}
                    >
                      <CheckCircle2 size={13} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.05em', color: '#34D399', textTransform: 'uppercase' }}>
                      ACTION ITEMS
                    </span>
                  </div>

                  <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                    Click item to complete
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {HERO_TRANSCRIPT_DEMO.actionItems.map((item) => {
                    const isDone = completedActions[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleActionItem(item.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: isDone ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.7)',
                          border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                          cursor: 'pointer',
                          transition: 'all 200ms ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '4px',
                              border: isDone ? '1.5px solid #10B981' : '1.5px solid #64748B',
                              background: isDone ? '#10B981' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 150ms ease'
                            }}
                          >
                            {isDone && <Check size={12} color="#FFF" />}
                          </div>

                          <div>
                            <span
                              style={{
                                fontSize: '0.84rem',
                                fontWeight: '600',
                                color: isDone ? '#94A3B8' : '#F1F5F9',
                                textDecoration: isDone ? 'line-through' : 'none',
                                display: 'block'
                              }}
                            >
                              {item.task}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                              Assignee: <strong style={{ color: '#CBD5E1' }}>{item.assignee}</strong>
                            </span>
                          </div>
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '600',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: item.due === 'Due Today' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                            color: item.due === 'Due Today' ? '#FCA5A5' : '#C7D2FE'
                          }}
                        >
                          {item.due}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for hero grid responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

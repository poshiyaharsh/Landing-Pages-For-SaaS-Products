import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Users,
  Send,
  Zap,
  Layers,
  BarChart3,
  Mail,
  Eye,
  MousePointerClick,
  Sliders,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection = () => {
  const [activeStage, setActiveStage] = useState('designed'); // 'idea' | 'ai' | 'designed' | 'performance'
  const [subjectVariant, setSubjectVariant] = useState(0);

  const handleConfetti = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#2563EB', '#7C3AED', '#EC4899', '#06B6D4']
    });
  };

  const subjectOptions = [
    { text: "Your summer starts here ☀️", score: 94, uplift: "+18.4% Open Rate" },
    { text: "Exclusive Preview: The 2026 Summer Lineup", score: 91, uplift: "+14.2% Open Rate" },
    { text: "Unlock early access before public launch", score: 88, uplift: "+11.8% Open Rate" }
  ];

  return (
    <section
      id="product"
      style={{
        position: 'relative',
        paddingTop: '64px',
        paddingBottom: '96px',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Blobs & Ambient Lights */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '520px',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.16) 0%, rgba(124, 58, 237, 0.12) 40%, rgba(236, 72, 153, 0.05) 70%, transparent 80%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '320px',
          right: '-10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 75%)',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow and Headline */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} style={{ color: '#2563EB' }} />
            <span>AI-Powered Email Marketing</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '22px',
              color: '#0F172A'
            }}
          >
            Create emails that <span className="gradient-text">actually get opened.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '720px',
              margin: '0 auto 36px auto'
            }}
          >
            MailForge uses AI to help you create smarter campaigns, build beautiful emails, reach the right audience, and understand what drives engagement.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '16px'
            }}
          >
            <a
              href="#pricing"
              onClick={handleConfetti}
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              Start Creating Free <ArrowRight size={18} />
            </a>

            <a
              href="#workflow"
              className="btn-secondary"
              style={{
                padding: '14px 26px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Play size={16} fill="currentColor" /> See How It Works
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              fontSize: '0.875rem',
              color: '#64748B'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: '#10B981' }} /> No credit card required
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: '#10B981' }} /> Free 1,000 subscriber plan
            </span>
          </div>
        </div>

        {/* Transformation Pipeline Selector */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 28px auto',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--border-light)',
            borderRadius: '9999px',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)'
          }}
        >
          {[
            { id: 'idea', label: '1. Idea', icon: Sparkles },
            { id: 'ai', label: '2. AI Campaign', icon: Zap },
            { id: 'designed', label: '3. Designed Email', icon: Layers },
            { id: 'performance', label: '4. Performance', icon: BarChart3 }
          ].map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  transition: 'all 200ms ease',
                  backgroundColor: isActive ? '#0F172A' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#64748B',
                  boxShadow: isActive ? '0 2px 8px rgba(15, 23, 42, 0.2)' : 'none'
                }}
              >
                <Icon size={14} style={{ color: isActive ? '#38BDF8' : '#94A3B8' }} />
                <span>{stage.label}</span>
              </button>
            );
          })}
        </div>

        {/* HERO VISUAL: Realistic SaaS Dashboard & Email Preview */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1140px',
            margin: '0 auto'
          }}
        >
          {/* Main Dashboard Shell */}
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 30px 60px -12px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              overflow: 'hidden'
            }}
          >
            {/* Top Window Bar */}
            <div
              style={{
                backgroundColor: '#0B0F19',
                padding: '14px 20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: '#94A3B8',
                    fontFamily: 'var(--font-mono)',
                    marginLeft: '8px'
                  }}
                >
                  app.mailforge.io/campaigns/summer-launch
                </span>
              </div>

              {/* Status pill & quick actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34D399',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Ready to Send
                </span>

                <button
                  type="button"
                  onClick={handleConfetti}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.4)'
                  }}
                >
                  <Send size={12} /> Dispatch Now
                </button>
              </div>
            </div>

            {/* Dashboard Inner Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 380px) 1fr',
                minHeight: '520px'
              }}
              className="hero-dashboard-grid"
            >
              {/* Left Column: Campaign Metadata & Telemetry Controls */}
              <div
                style={{
                  padding: '24px',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#0F172A',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Active Campaign
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700, marginTop: '2px' }}>
                    Summer Product Launch
                  </h3>
                </div>

                {/* Subject Line Selector card */}
                <div
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8' }}>
                      Optimized Subject Line
                    </span>
                    <span
                      style={{
                        backgroundColor: 'rgba(37, 99, 235, 0.25)',
                        border: '1px solid rgba(37, 99, 235, 0.4)',
                        color: '#60A5FA',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Sparkles size={10} /> AI Score 94/100
                    </span>
                  </div>

                  <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '10px' }}>
                    "{subjectOptions[subjectVariant].text}"
                  </p>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {subjectOptions.map((sub, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSubjectVariant(idx)}
                        style={{
                          flex: 1,
                          padding: '4px 6px',
                          borderRadius: '6px',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          backgroundColor: subjectVariant === idx ? '#3B82F6' : 'rgba(255, 255, 255, 0.05)',
                          color: subjectVariant === idx ? '#FFFFFF' : '#94A3B8',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        Var {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metrics 3-pack */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#1E293B',
                      borderRadius: '12px',
                      padding: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Eye size={12} style={{ color: '#60A5FA' }} /> Open Rate
                    </span>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                      42.8%
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: '#34D399', fontWeight: 600 }}>
                      +18.4% vs industry avg
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: '#1E293B',
                      borderRadius: '12px',
                      padding: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MousePointerClick size={12} style={{ color: '#F472B6' }} /> Click Rate
                    </span>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                      8.7%
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: '#34D399', fontWeight: 600 }}>
                      +2.4% vs control
                    </span>
                  </div>
                </div>

                {/* Audience segment block */}
                <div
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '12px',
                    padding: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={12} style={{ color: '#A78BFA' }} /> Target Audience
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: '#38BDF8', fontWeight: 600 }}>
                      VIP Engaged
                    </span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                    18,420 <span style={{ fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 400 }}>subscribers</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', marginTop: '8px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }} />
                  </div>
                </div>

                {/* AI Assistant note */}
                <div
                  style={{
                    marginTop: 'auto',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    border: '1px dashed rgba(37, 99, 235, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Sparkles size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.75rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                    <strong>AI Recommendation:</strong> Best delivery window predicted for Tuesday at 9:15 AM EST.
                  </p>
                </div>
              </div>

              {/* Right Column: Realistic Email Newsletter Preview */}
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                {/* Floating Badge 1: Open Rate */}
                <div
                  className="floating-anim"
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '16px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '8px 14px',
                    boxShadow: '0 10px 25px -3px rgba(15, 23, 42, 0.15)',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 10
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: '#ECFDF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981'
                    }}
                  >
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B', display: 'block' }}>Estimated</span>
                    <strong style={{ fontSize: '0.875rem', color: '#0F172A' }}>+18.4% Open Rate</strong>
                  </div>
                </div>

                {/* Floating Badge 2: AI Subject Score */}
                <div
                  className="floating-anim-delayed"
                  style={{
                    position: 'absolute',
                    bottom: '28px',
                    right: '20px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    boxShadow: '0 10px 25px -3px rgba(15, 23, 42, 0.15)',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 10
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B', display: 'block' }}>Subject Resonance</span>
                    <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>94/100 Score</strong>
                  </div>
                </div>

                {/* Actual Email Container Canvas */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: '480px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)',
                    overflow: 'hidden',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {/* Email Header */}
                  <div
                    style={{
                      padding: '16px 24px',
                      borderBottom: '1px solid #F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          backgroundColor: '#0F172A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Sparkles size={13} style={{ color: '#38BDF8' }} />
                      </div>
                      <span style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
                        Nova Horizon
                      </span>
                    </div>

                    <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>June 2026 Edition</span>
                  </div>

                  {/* Email Hero Visual / Graphic Banner */}
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
                      padding: '28px 24px',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-30px',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(236, 72, 153, 0.3)',
                        filter: 'blur(25px)'
                      }}
                    />

                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#F472B6',
                        marginBottom: '8px'
                      }}
                    >
                      Summer Release 2.0
                    </span>

                    <h4
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.25,
                        marginBottom: '10px'
                      }}
                    >
                      Accelerate your growth pipeline this season.
                    </h4>

                    <p style={{ fontSize: '0.8125rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '18px' }}>
                      Everything you need to automate multi-channel campaigns with one-click AI workflows.
                    </p>

                    <button
                      type="button"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#1E1B4B',
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        padding: '8px 18px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      Explore Feature Suite <ArrowRight size={13} />
                    </button>
                  </div>

                  {/* Product Cards Grid in Email */}
                  <div style={{ padding: '20px 24px' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        marginBottom: '16px'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: '12px'
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            backgroundColor: '#EFF6FF',
                            color: '#2563EB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '6px'
                          }}
                        >
                          <Zap size={13} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', display: 'block' }}>
                          Instant Deploy
                        </span>
                        <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>Zero config setup</span>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: '12px'
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            backgroundColor: '#F5F3FF',
                            color: '#7C3AED',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '6px'
                          }}
                        >
                          <BarChart3 size={13} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', display: 'block' }}>
                          Deep Metrics
                        </span>
                        <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>Real-time telemetry</span>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div
                      style={{
                        paddingTop: '12px',
                        borderTop: '1px solid #F1F5F9',
                        textAlign: 'center',
                        fontSize: '0.6875rem',
                        color: '#94A3B8'
                      }}
                    >
                      <p>You received this email because you opted into Nova Horizon updates.</p>
                      <p style={{ marginTop: '4px' }}>
                        <span style={{ textDecoration: 'underline' }}>Preferences</span> • <span style={{ textDecoration: 'underline' }}>Unsubscribe</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

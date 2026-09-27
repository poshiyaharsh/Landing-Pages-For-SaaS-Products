import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Users2,
  GitCompare,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Type,
  Image as ImageIcon,
  Square,
  Minus,
  Share2,
  Columns as ColumnsIcon,
  PlaySquare,
  Maximize2,
  Sliders,
  Send,
  RefreshCw,
  Trophy,
  Smartphone,
  Monitor,
  Flame,
  MousePointer,
  PieChart
} from 'lucide-react';
import {
  AI_CAMPAIGN_PRESETS,
  EMAIL_BUILDER_BLOCKS,
  AUDIENCE_SEGMENTS,
  AB_TEST_DATA,
  ANALYTICS_DATA
} from '../data/mockData';

export const FeatureSection = () => {
  // Feature 1 State: AI Campaign Generator
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const activePreset = AI_CAMPAIGN_PRESETS[selectedPreset];

  const handleRegenerate = (idx) => {
    setIsGenerating(true);
    setSelectedPreset(idx);
    setTimeout(() => {
      setIsGenerating(false);
    }, 450);
  };

  // Feature 2 State: Email Builder
  const [selectedBlock, setSelectedBlock] = useState('button');
  const [buttonColor, setButtonColor] = useState('#2563EB');
  const [buttonRadius, setButtonRadius] = useState(8);
  const [buttonText, setButtonText] = useState('Explore Feature');

  // Feature 3 State: Audience Segmentation
  const [activeSegment, setActiveSegment] = useState('engaged');

  // Feature 4 State: A/B Testing
  const [activeVariant, setActiveVariant] = useState('B'); // 'A' | 'B'

  // Feature 5 State: Analytics
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <section
      id="features"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} />
            <span>Built For Conversions</span>
          </div>
          <h2>
            Everything you need to turn <span className="gradient-text">ideas into campaigns.</span>
          </h2>
          <p>
            From the initial creative prompt to the final subscriber telemetry, MailForge automates every stage of modern high-velocity lifecycle marketing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>

          {/* ==============================================================
              FEATURE 01 — AI Campaign Generation
              ============================================================== */}
          <div
            id="ai-generation"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="feature-row"
          >
            {/* Text Side */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Feature 01 — AI Campaign Generation
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}
              >
                From a sentence to a campaign.
              </h3>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Tell MailForge what you're promoting and let AI create the campaign structure, copy, subject lines, CTAs, and messaging variations in seconds.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Trained on 50M+ highest-converting B2B & consumer emails',
                  'Predictive emotional resonance & spam score verification',
                  'One-click multi-variant copy tailored by target persona'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#EFF6FF',
                        color: '#2563EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Preset Switchers */}
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: '8px' }}>
                  Try sample campaign prompts:
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {AI_CAMPAIGN_PRESETS.map((preset, idx) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleRegenerate(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        backgroundColor: selectedPreset === idx ? '#0F172A' : '#F1F5F9',
                        color: selectedPreset === idx ? '#FFFFFF' : '#475569',
                        border: '1px solid var(--border-light)',
                        transition: 'all 150ms ease'
                      }}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Side: Interactive AI Campaign Brief & Output Card */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '28px',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
                color: '#FFFFFF'
              }}
            >
              {/* Campaign Brief Form Preview */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '18px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>
                    Campaign Brief Input
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: '#38BDF8', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={11} /> AI Assistant Active
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.8125rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '6px' }}>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.6875rem' }}>Product</span>
                    <strong style={{ color: '#F1F5F9' }}>{activePreset.product}</strong>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '6px' }}>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.6875rem' }}>Audience</span>
                    <strong style={{ color: '#F1F5F9' }}>{activePreset.audience}</strong>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '6px' }}>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.6875rem' }}>Goal</span>
                    <strong style={{ color: '#F1F5F9' }}>{activePreset.goal}</strong>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '6px' }}>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.6875rem' }}>Tone</span>
                    <strong style={{ color: '#F1F5F9' }}>{activePreset.tone}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRegenerate((selectedPreset + 1) % AI_CAMPAIGN_PRESETS.length)}
                  style={{
                    width: '100%',
                    marginTop: '14px',
                    padding: '8px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <RefreshCw size={13} className={isGenerating ? 'spin-anim' : ''} />
                  {isGenerating ? 'Synthesizing campaign...' : '[ Generate Campaign ]'}
                </button>
              </div>

              {/* Generated Output */}
              <div
                style={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '12px',
                  padding: '18px',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.15)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#93C5FD', textTransform: 'uppercase' }}>
                    Generated Subject Line
                  </span>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#34D399',
                      fontSize: '0.6875rem',
                      fontWeight: 700
                    }}
                  >
                    <Trophy size={11} /> AI Score {activePreset.subjectScore}/100
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '6px',
                    borderLeft: '3px solid #38BDF8'
                  }}
                >
                  "{activePreset.subject}"
                </div>

                <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '14px', lineHeight: 1.5 }}>
                  <strong style={{ color: '#CBD5E1' }}>Copy Hook:</strong> {activePreset.previewCopy}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Primary CTA</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#F472B6', backgroundColor: 'rgba(244, 114, 182, 0.1)', padding: '3px 10px', borderRadius: '4px' }}>
                    {activePreset.cta}
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* ==============================================================
              FEATURE 02 — Drag & Drop Email Builder
              ============================================================== */}
          <div
            id="email-builder"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="feature-row"
          >
            {/* Visual Side First (Alternating) */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '20px',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 140px',
                  gap: '12px',
                  minHeight: '380px'
                }}
                className="builder-tri-grid"
              >
                {/* Left Panel: Blocks */}
                <div
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', display: 'block', marginBottom: '8px', paddingLeft: '4px' }}>
                    Blocks
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {EMAIL_BUILDER_BLOCKS.map((blk) => (
                      <button
                        key={blk.id}
                        type="button"
                        onClick={() => setSelectedBlock(blk.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textAlign: 'left',
                          backgroundColor: selectedBlock === blk.id ? '#2563EB' : 'rgba(255, 255, 255, 0.03)',
                          color: selectedBlock === blk.id ? '#FFFFFF' : '#CBD5E1',
                          border: '1px solid rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: selectedBlock === blk.id ? '#FFFFFF' : '#64748B' }} />
                        {blk.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center Canvas */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.8125rem', color: '#0F172A' }}>Nova Horizon</span>
                    <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>600px Canvas</span>
                  </div>

                  <div style={{ backgroundColor: '#F8FAFC', padding: '10px', borderRadius: '6px', border: '1px dashed #CBD5E1' }}>
                    <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                      Unlock Your Next Milestone
                    </h5>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.4 }}>
                      Personalized campaign templates that automatically adapt to your brand identity.
                    </p>
                  </div>

                  {/* Interactive Button Preview Block */}
                  <div
                    style={{
                      border: '2px solid #3B82F6',
                      borderRadius: '8px',
                      padding: '12px',
                      textAlign: 'center',
                      backgroundColor: 'rgba(59, 130, 246, 0.04)',
                      position: 'relative'
                    }}
                  >
                    <span style={{ position: 'absolute', top: '-8px', right: '8px', backgroundColor: '#3B82F6', color: '#FFFFFF', fontSize: '0.5625rem', fontWeight: 700, padding: '1px 6px', borderRadius: '4px' }}>
                      Active Block: {selectedBlock}
                    </span>

                    <button
                      type="button"
                      style={{
                        backgroundColor: buttonColor,
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        padding: '8px 18px',
                        borderRadius: `${buttonRadius}px`,
                        border: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }}
                    >
                      {buttonText}
                    </button>
                  </div>

                  <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.625rem', color: '#94A3B8', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
                    Drag blocks anywhere • Responsive mobile view auto-enabled
                  </div>
                </div>

                {/* Right Panel: Inspector */}
                <div
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
                    Inspector
                  </span>

                  <div>
                    <span style={{ fontSize: '0.6875rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Color</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {['#2563EB', '#7C3AED', '#EC4899', '#0F172A'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setButtonColor(c)}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: c,
                            border: buttonColor === c ? '2px solid #FFFFFF' : '1px solid transparent'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.6875rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>
                      Radius: {buttonRadius}px
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={buttonRadius}
                      onChange={(e) => setButtonRadius(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#3B82F6' }}
                    />
                  </div>

                  <div>
                    <span style={{ fontSize: '0.6875rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Button Text</span>
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#0F172A',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        padding: '4px 6px',
                        color: '#FFFFFF',
                        fontSize: '0.6875rem'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-purple)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Feature 02 — Drag & Drop Email Builder
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}
              >
                Design without fighting your editor.
              </h3>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Stop wrestling with nested tables or broken Outlook renders. MailForge provides an effortless, block-based visual canvas with rock-solid client compatibility.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  'Pre-styled modular blocks (Text, Video, Columns, Dividers)',
                  'Real-time mobile and desktop side-by-side simulation',
                  'One-click global brand styles: typography, palettes, and spacing'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#F5F3FF',
                        color: '#7C3AED',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#showcase" className="btn-secondary">
                See Full Editor Showcase <ArrowRight size={16} />
              </a>
            </div>
          </div>


          {/* ==============================================================
              FEATURE 03 — Audience Segmentation
              ============================================================== */}
          <div
            id="segmentation"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="feature-row"
          >
            {/* Text Side */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-pink)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Feature 03 — Audience Segmentation
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}
              >
                Send the right message to the right people.
              </h3>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Never blast your entire database blindly. Build high-intent behavioral segments that auto-update in real time based on clicks, opens, and custom app events.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  'Automated behavioral funnels: Opened Email → Clicked CTA → High Intent',
                  'Predictive engagement scoring to prevent subscriber fatigue',
                  'Instant suppression of unsubscribed or inactive recipients'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#FDF2F8',
                        color: '#EC4899',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side: Flowchart & Segment Cards */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '28px',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
                color: '#FFFFFF'
              }}
            >
              {/* Flowchart Diagram */}
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Dynamic Audience Funnel
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
                  <div style={{ padding: '8px 24px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600 }}>
                    All Subscribers (18,420)
                  </div>
                  <div style={{ color: '#38BDF8', fontSize: '0.8125rem' }}>↓</div>
                  <div style={{ padding: '8px 24px', backgroundColor: 'rgba(37, 99, 235, 0.25)', border: '1px solid rgba(37, 99, 235, 0.4)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600, color: '#93C5FD' }}>
                    Opened Email (11,240)
                  </div>
                  <div style={{ color: '#818CF8', fontSize: '0.8125rem' }}>↓</div>
                  <div style={{ padding: '8px 24px', backgroundColor: 'rgba(124, 58, 237, 0.25)', border: '1px solid rgba(124, 58, 237, 0.4)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600, color: '#C4B5FD' }}>
                    Clicked CTA (4,320)
                  </div>
                  <div style={{ color: '#F472B6', fontSize: '0.8125rem' }}>↓</div>
                  <div style={{ padding: '8px 24px', backgroundColor: 'rgba(236, 72, 153, 0.25)', border: '1px solid rgba(236, 72, 153, 0.4)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, color: '#FBCFE8' }}>
                    High Intent Users (2,180)
                  </div>
                </div>
              </div>

              {/* Segment Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {AUDIENCE_SEGMENTS.map((seg) => (
                  <div
                    key={seg.id}
                    onClick={() => setActiveSegment(seg.id)}
                    style={{
                      backgroundColor: activeSegment === seg.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      border: activeSegment === seg.id ? `1px solid ${seg.color}` : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      padding: '12px 10px',
                      cursor: 'pointer',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: seg.color, textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      {seg.tag}
                    </span>
                    <strong style={{ fontSize: '0.8125rem', color: '#FFFFFF', display: 'block' }}>
                      {seg.name}
                    </strong>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F1F5F9', marginTop: '4px' }}>
                      {seg.count}
                    </div>
                    <span style={{ fontSize: '0.625rem', color: '#34D399' }}>
                      {seg.openRate} open rate
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* ==============================================================
              FEATURE 04 — A/B Testing
              ============================================================== */}
          <div
            id="ab-testing"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="feature-row"
          >
            {/* Visual Side First (Alternating) */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '28px',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Split Test
                  </span>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {AB_TEST_DATA.campaign}
                  </h4>
                </div>
                <span
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34D399',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}
                >
                  Confidence {AB_TEST_DATA.confidence}
                </span>
              </div>

              {/* Version A vs Version B Comparison Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                {/* Variant A */}
                <div
                  onClick={() => setActiveVariant('A')}
                  style={{
                    backgroundColor: activeVariant === 'A' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    border: activeVariant === 'A' ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93C5FD' }}>
                      Version A (Control)
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>38.4% Open Rate</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#F1F5F9', fontWeight: 600 }}>
                    "{AB_TEST_DATA.variantA.subject}"
                  </p>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', marginTop: '10px' }}>
                    <div style={{ width: '38.4%', height: '100%', backgroundColor: '#60A5FA', borderRadius: '3px' }} />
                  </div>
                </div>

                {/* Variant B */}
                <div
                  onClick={() => setActiveVariant('B')}
                  style={{
                    backgroundColor: activeVariant === 'B' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: activeVariant === 'B' ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 150ms ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34D399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Trophy size={13} /> Version B ({AB_TEST_DATA.variantB.badge})
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#34D399' }}>44.7% Open Rate</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#F1F5F9', fontWeight: 600 }}>
                    "{AB_TEST_DATA.variantB.subject}"
                  </p>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', marginTop: '10px' }}>
                    <div style={{ width: '44.7%', height: '100%', background: 'linear-gradient(90deg, #10B981, #34D399)', borderRadius: '3px' }} />
                  </div>
                </div>
              </div>

              {/* Test progress indicator */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#94A3B8'
                }}
              >
                <span>Sample Size: <strong>18,420 contacts</strong></span>
                <span>Split: <strong>20% test / 80% rollout</strong></span>
                <span style={{ color: '#34D399', fontWeight: 600 }}>Autopilot Winner Ready</span>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Feature 04 — A/B Testing
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}
              >
                Let your audience choose the winner.
              </h3>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Test subject lines, headers, CTA buttons, or entire templates. MailForge routes a test sample first, statistically identifies the highest-performing variation, and delivers it automatically.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  'Automated 20/80 statistical rollout with zero manual oversight',
                  'Confidence scoring based on statistical significance testing',
                  'Track uplift in opens, click-to-open ratios, and downstream conversions'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#EFF6FF',
                        color: '#2563EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* ==============================================================
              FEATURE 05 — Campaign Analytics
              ============================================================== */}
          <div
            id="analytics"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="feature-row"
          >
            {/* Text Side */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-cyan)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Feature 05 — Campaign Analytics
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}
              >
                See what your emails are actually doing.
              </h3>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Gain instant clarity over subscriber engagement. Understand exact device preferences, peak engagement hours, and multi-campaign revenue attribution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  'Real-time streaming telemetry for opens, clicks, and conversions',
                  'Client & device breakdown (Mobile iOS/Android vs Desktop Outlook/Webmail)',
                  'Automated deliverability and spam-trap monitoring'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ECFEFF',
                        color: '#06B6D4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#campaign-analytics-showcase" className="btn-secondary">
                View Full Analytics Suite <ArrowRight size={16} />
              </a>
            </div>

            {/* Visual Side: Analytics Dashboard Card */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
                color: '#FFFFFF'
              }}
            >
              {/* Header & Filter */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div>
                  <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Performance Overview
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Aggregated telemetry for past {timeRange}</span>
                </div>

                <div style={{ display: 'flex', gap: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2px', borderRadius: '6px' }}>
                  {['7d', '30d', '90d'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setTimeRange(range)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        backgroundColor: timeRange === range ? '#2563EB' : 'transparent',
                        color: timeRange === range ? '#FFFFFF' : '#94A3B8'
                      }}
                    >
                      {range.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Metric Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px 8px', borderRadius: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8', display: 'block' }}>Open Rate</span>
                  <strong style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>{ANALYTICS_DATA.overview.openRate}</strong>
                  <span style={{ fontSize: '0.625rem', color: '#34D399', display: 'block' }}>{ANALYTICS_DATA.overview.openRateDiff}</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px 8px', borderRadius: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8', display: 'block' }}>Click Rate</span>
                  <strong style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>{ANALYTICS_DATA.overview.clickRate}</strong>
                  <span style={{ fontSize: '0.625rem', color: '#34D399', display: 'block' }}>{ANALYTICS_DATA.overview.clickRateDiff}</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px 8px', borderRadius: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8', display: 'block' }}>Conversions</span>
                  <strong style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>{ANALYTICS_DATA.overview.conversions}</strong>
                  <span style={{ fontSize: '0.625rem', color: '#34D399', display: 'block' }}>{ANALYTICS_DATA.overview.conversionsDiff}</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px 8px', borderRadius: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8', display: 'block' }}>Unsub</span>
                  <strong style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>{ANALYTICS_DATA.overview.unsubscribe}</strong>
                  <span style={{ fontSize: '0.625rem', color: '#38BDF8', display: 'block' }}>{ANALYTICS_DATA.overview.unsubscribeDiff}</span>
                </div>
              </div>

              {/* Simulated SVG Line Trend Chart */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '10px',
                  padding: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>Engagement Timeline</span>
                  <span style={{ fontSize: '0.6875rem', color: '#34D399', fontWeight: 600 }}>● +18.4% above benchmark</span>
                </div>

                <svg viewBox="0 0 400 120" style={{ width: '100%', height: '110px', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255, 255, 255, 0.05)" />
                  <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255, 255, 255, 0.05)" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255, 255, 255, 0.05)" />

                  {/* Area fill */}
                  <path
                    d="M 10 95 Q 60 75, 110 80 T 210 50 T 310 35 T 390 20 L 390 115 L 10 115 Z"
                    fill="url(#chartGrad)"
                  />
                  {/* Line stroke */}
                  <path
                    d="M 10 95 Q 60 75, 110 80 T 210 50 T 310 35 T 390 20"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Data points */}
                  <circle cx="210" cy="50" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="390" cy="20" r="4" fill="#FFFFFF" stroke="#EC4899" strokeWidth="2" />
                </svg>
              </div>

              {/* Device Split Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: '#94A3B8', marginBottom: '6px' }}>
                  <span>Mobile Devices (64%)</span>
                  <span>Desktop & Web (36%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '64%', height: '100%', backgroundColor: '#2563EB' }} />
                  <div style={{ width: '36%', height: '100%', backgroundColor: '#8B5CF6' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .builder-tri-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .spin-anim {
          animation: spin 800ms linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;

import React, { useState } from 'react';
import {
  Mic,
  Sparkles,
  CheckSquare,
  Users,
  Search,
  ArrowRight,
  Check,
  Clock,
  ChevronRight,
  Volume2
} from 'lucide-react';

export const FeaturesSection = () => {
  const [searchQuery, setSearchQuery] = useState('launch timeline');

  const searchResults = [
    { title: 'Product Strategy Sync', date: 'Sep 24', quote: '...finalizing the Q4 launch timeline for engineering...', speaker: 'Alex' },
    { title: 'Marketing GTM Review', date: 'Sep 22', quote: '...aligning launch timeline with paid ad flight schedule...', speaker: 'Michael' },
    { title: 'Executive Launch Planning', date: 'Sep 19', quote: '...approved launch timeline with 48h staging buffer...', speaker: 'Sarah' }
  ];

  return (
    <section id="features" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '64px' }}>
          <div className="section-tag section-tag-ai">
            <Sparkles size={14} />
            <span>Autonomous Intelligence</span>
          </div>

          <h2 className="section-heading">
            Meetly turns conversations into momentum.
          </h2>

          <p className="section-subheading mx-auto">
            From the moment your call connects to the final deliverable sync, Meetly captures, understands, and executes on your behalf.
          </p>
        </div>

        {/* Bento Grid: 2 Top Feature Cards, 3 Bottom Feature Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Top Row: 2 Big Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {/* Feature 1: Automatic Transcription */}
            <div
              className="card-light"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Mic size={22} />
                  </div>
                  <span className="badge badge-indigo">99.4% Accuracy</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0F172A', marginBottom: '10px' }}>
                  Every word, captured automatically.
                </h3>

                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px' }}>
                  Get accurate meeting transcripts without typing a single note. Our acoustic models stream audio in real-time with flawless technical jargon parsing.
                </p>
              </div>

              {/* Visual: Live Audio Waveform & Animated Transcript Lines */}
              <div
                style={{
                  background: '#0F172A',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="pulse-ai" style={{ width: '6px', height: '6px' }} />
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: '600' }}>Streaming Audio · 48kHz</span>
                  </div>
                  <div className="waveform-bars">
                    <span className="waveform-bar" style={{ background: '#38BDF8' }} />
                    <span className="waveform-bar" style={{ background: '#818CF8' }} />
                    <span className="waveform-bar" style={{ background: '#C084FC' }} />
                    <span className="waveform-bar" style={{ background: '#38BDF8' }} />
                    <span className="waveform-bar" style={{ background: '#818CF8' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#E2E8F0' }}>
                    <span style={{ color: '#818CF8', fontWeight: '700' }}>09:12</span>
                    <span>"Let's make sure the PostgreSQL index migrations finish before 4 PM."</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#94A3B8' }}>
                    <span style={{ color: '#38BDF8', fontWeight: '700' }}>09:13</span>
                    <span>"Agreed. I'll execute the dry run in staging now."</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: AI Meeting Summaries */}
            <div
              className="card-light"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#F5F3FF',
                      color: '#7C3AED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Sparkles size={22} />
                  </div>
                  <span className="badge badge-violet">Semantic Synthesis</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0F172A', marginBottom: '10px' }}>
                  The important parts, instantly.
                </h3>

                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px' }}>
                  Meetly AI condenses long conversations into concise summaries, decisions, and key takeaways that you can digest in under 60 seconds.
                </p>
              </div>

              {/* Visual: Transcript Transforming into Summary */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', background: '#EEF2FF', color: '#4F46E5', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                    EXECUTIVE BRIEF
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Generated in 1.4s</span>
                </div>

                <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                  Key Outcome: Staging deploy approved with 0 rollbacks.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#475569' }}>
                    <Check size={14} color="#10B981" />
                    <span>Database index query latency reduced by 44%</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#475569' }}>
                    <Check size={14} color="#10B981" />
                    <span>Next QA milestone set for Thursday morning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {/* Feature 3: Action-Item Extraction */}
            <div
              className="card-light"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#ECFDF5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <CheckSquare size={20} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Turn conversations into action.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '20px' }}>
                  Automatically identify tasks, owners, and deadlines discussed during meetings. Sync directly into Linear or Jira.
                </p>
              </div>

              {/* Task card animation visual */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#059669' }}>Extracted Task #408</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Linear Sync</span>
                </div>
                <p style={{ fontSize: '0.82rem', fontWeight: '600', color: '#1E293B', marginBottom: '4px' }}>
                  Update launch timeline & notify DevOps
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B' }}>
                  <span>Owner: <strong>Alex K.</strong></span>
                  <span style={{ color: '#EF4444', fontWeight: '600' }}>Today 5 PM</span>
                </div>
              </div>
            </div>

            {/* Feature 4: Speaker Identification */}
            <div
              className="card-light"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#F0F9FF',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <Users size={20} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Know who said what.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '20px' }}>
                  Automatically separate speakers so your transcript remains clear, structured, and attributed to the rightful owner.
                </p>
              </div>

              {/* Speaker Avatars with Transcript Bubbles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F8FAFC', padding: '8px 12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#6366F1', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '700' }}>S</span>
                  <div style={{ fontSize: '0.78rem' }}>
                    <strong style={{ color: '#0F172A' }}>Sarah (Product): </strong>
                    <span style={{ color: '#475569' }}>"Thursday works best."</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F8FAFC', padding: '8px 12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#8B5CF6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '700' }}>M</span>
                  <div style={{ fontSize: '0.78rem' }}>
                    <strong style={{ color: '#0F172A' }}>Michael (Mktg): </strong>
                    <span style={{ color: '#475569' }}>"Assets will be ready."</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Meeting Search */}
            <div
              className="card-light"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#FEF3C7',
                    color: '#D97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <Search size={20} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Find any conversation in seconds.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '16px' }}>
                  Search across your meetings to instantly rediscover decisions, ideas, and critical technical discussions.
                </p>
              </div>

              {/* Interactive Search Mockup as specified in prompt */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-xs)',
                  overflow: 'hidden'
                }}
              >
                {/* Search Bar Input */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    background: '#F1F5F9',
                    borderBottom: '1px solid #E2E8F0'
                  }}
                >
                  <Search size={14} color="#64748B" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search meetings..."
                    aria-label="Search meetings simulation"
                    style={{
                      border: 'none',
                      background: 'transparent',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      color: '#0F172A',
                      outline: 'none',
                      width: '100%'
                    }}
                  />
                </div>

                {/* Results list */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {searchResults.map((res, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '8px 12px',
                        borderBottom: i < searchResults.length - 1 ? '1px solid #F1F5F9' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: '600', color: '#0F172A', display: 'block' }}>
                          {res.title}
                        </span>
                        <span style={{ color: '#64748B', fontSize: '0.7rem' }}>
                          {res.speaker}: "{searchQuery}"
                        </span>
                      </div>
                      <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>{res.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

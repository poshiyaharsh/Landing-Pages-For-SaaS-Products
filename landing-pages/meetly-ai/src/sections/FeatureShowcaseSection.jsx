import React, { useState } from 'react';
import {
  Check,
  Search,
  Sparkles,
  Mic,
  Users,
  Play,
  Share2,
  Calendar,
  Volume2,
  Bookmark,
  FileCheck
} from 'lucide-react';

export const FeatureShowcaseSection = () => {
  const [filterType, setFilterType] = useState('all'); // 'all' | 'decisions' | 'tasks'

  return (
    <section className="section" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        {/* Showcase Item 1: Normal Layout (Text Left, Visual Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
            gap: '64px',
            alignItems: 'center',
            marginBottom: '100px'
          }}
          className="showcase-grid"
        >
          {/* Left Text */}
          <div>
            <div className="section-tag section-tag-ai">
              <Mic size={14} />
              <span>Real-Time Transcription</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', lineHeight: '1.2', color: '#0F172A', marginBottom: '18px' }}>
              Never take meeting notes again.
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#475569', marginBottom: '28px' }}>
              Meetly listens while you focus on the conversation. Be fully present with your teammates and clients instead of furiously scrambling to write down every word.
            </p>

            {/* Benefits Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  Automatic transcription with multi-language dialect recognition
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  AI-generated notes with instant executive summaries
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  Accurate speaker recognition and individualized talk-time analytics
                </span>
              </div>
            </div>

            <a href="#interactive-demo" className="btn btn-primary">
              <span>Experience It Live</span>
            </a>
          </div>

          {/* Right Visual: Realistic Recording Dashboard */}
          <div
            style={{
              background: '#0F172A',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden'
            }}
          >
            {/* Window title bar */}
            <div
              style={{
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.04)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: '600' }}>
                  REC · 00:34:12 · Active Meeting Stream
                </span>
              </div>
              <div className="waveform-bars">
                <span className="waveform-bar" style={{ background: '#38BDF8' }} />
                <span className="waveform-bar" style={{ background: '#818CF8' }} />
                <span className="waveform-bar" style={{ background: '#38BDF8' }} />
              </div>
            </div>

            {/* Visualizer Content */}
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFF' }}>
                    Q3 Architecture & Security Alignment
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Google Meet · 4 Attendees</span>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontWeight: '600' }}>
                  Live Diarization
                </span>
              </div>

              {/* Real-time speech stream */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#6366F1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.6rem', fontWeight: '700' }}>E</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FFF' }}>Elena Rostova (VP Eng)</span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B' }}>11:42 AM</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#CBD5E1', margin: 0 }}>
                    "Our SOC2 auditor confirmed that automated meeting summaries with zero retention training fully pass clause 4.2."
                  </p>
                </div>

                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#0EA5E9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.6rem', fontWeight: '700' }}>D</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FFF' }}>David K. (Security)</span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B' }}>11:43 AM</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#CBD5E1', margin: 0 }}>
                    "Perfect. That clears us for the 50-seat rollout across backend engineering."
                  </p>
                </div>
              </div>

              {/* Bottom instant summary generation snippet */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} color="#A5B4FC" />
                  <span style={{ color: '#E0E7FF', fontWeight: '600' }}>Auto-synced to Security Compliance Hub</span>
                </div>
                <span style={{ color: '#38BDF8', fontWeight: '600' }}>Linear #SEC-104</span>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Item 2: Reverse Layout (Visual Left, Text Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '64px',
            alignItems: 'center'
          }}
          className="showcase-grid"
        >
          {/* Left Visual: Realistic Vector Search UI */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden'
            }}
          >
            {/* Search Header */}
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <Search size={18} color="#6366F1" />
                <span style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#0F172A' }}>
                  "When did we agree to reschedule the product launch?"
                </span>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: '#EEF2FF', color: '#4F46E5', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                  Semantic Search
                </span>
              </div>

              {/* Filter Pills */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    background: filterType === 'all' ? '#0F172A' : '#E2E8F0',
                    color: filterType === 'all' ? '#FFFFFF' : '#475569'
                  }}
                >
                  All Matches (3)
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('decisions')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    background: filterType === 'decisions' ? '#0F172A' : '#E2E8F0',
                    color: filterType === 'decisions' ? '#FFFFFF' : '#475569'
                  }}
                >
                  Decisions Only
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('tasks')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    background: filterType === 'tasks' ? '#0F172A' : '#E2E8F0',
                    color: filterType === 'tasks' ? '#FFFFFF' : '#475569'
                  }}
                >
                  Action Items
                </button>
              </div>
            </div>

            {/* Results List */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0F172A' }}>
                    Q4 Product Launch & GTM Alignment
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Oct 24 · 10:31 AM</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', marginBottom: '10px', lineHeight: '1.5' }}>
                  <mark style={{ background: '#FEF08A', padding: '1px 4px', borderRadius: '2px' }}>"Let's move the product launch to Thursday"</mark> — Sarah (Product Lead) suggested to allow marketing assets to finalize.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: '#6366F1', fontWeight: '600' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <Play size={12} style={{ fill: 'currentColor' }} /> Jump to audio (10:31)
                  </span>
                  <span style={{ color: '#CBD5E1' }}>•</span>
                  <span>Decision verified</span>
                </div>
              </div>

              <div style={{ padding: '16px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0F172A' }}>
                    Executive Board Operations Sync
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Oct 18 · 03:15 PM</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', marginBottom: '10px', lineHeight: '1.5' }}>
                  "...the initial target was Tuesday, but QA requested a 48-hour soak test window..."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: '#6366F1', fontWeight: '600' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <Play size={12} style={{ fill: 'currentColor' }} /> Jump to audio (24:18)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <div className="section-tag section-tag-ai">
              <Search size={14} />
              <span>Collective Intelligence</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: '800', lineHeight: '1.2', color: '#0F172A', marginBottom: '18px' }}>
              Search your team’s collective memory.
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#475569', marginBottom: '28px' }}>
              Stop asking "Who said that?" or digging through forgotten Slack threads. Search across hundreds of past meetings in milliseconds with semantic understanding.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  Ask questions in plain conversational English
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  Direct jump-to-audio timestamp player
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1E293B' }}>
                  Filtered views for decisions, commitments, and client quotes
                </span>
              </div>
            </div>

            <a href="#interactive-demo" className="btn btn-secondary">
              <span>Try Vector Search Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded CSS for responsive showcase layout */}
      <style>{`
        @media (max-width: 900px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureShowcaseSection;

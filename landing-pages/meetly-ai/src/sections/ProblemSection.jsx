import React, { useState } from 'react';
import { PROBLEMS } from '../data/mockData';
import { AlertCircle, CheckCircle2, ArrowRight, XCircle, Sparkles, FileText, Check } from 'lucide-react';

export const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState('meetly'); // 'messy' | 'meetly'

  return (
    <section id="problem" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="section-tag" style={{ background: '#FEE2E2', color: '#DC2626', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
            <AlertCircle size={14} />
            <span>The Post-Meeting Dilemma</span>
          </div>

          <h2 className="section-heading">
            Meetings shouldn’t create more work.
          </h2>

          <p className="section-subheading mx-auto">
            Your team spends countless hours debating, aligning, and problem-solving. But once the call ends, the clarity evaporates into fragmented notes, missed deadlines, and lost context.
          </p>
        </div>

        {/* 3 Core Problem Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {PROBLEMS.map((prob, idx) => (
            <div
              key={prob.id}
              className="card-light"
              style={{
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#FEE2E2',
                  color: '#DC2626',
                  marginBottom: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '700'
                }}
              >
                0{idx + 1}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0F172A', marginBottom: '12px' }}>
                {prob.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#475569', marginBottom: '20px' }}>
                {prob.description}
              </p>

              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.8125rem',
                  color: '#64748B',
                  lineHeight: '1.5'
                }}
              >
                <strong style={{ color: '#0F172A' }}>The reality: </strong>
                {prob.painPoint}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            VISUAL COMPARISON: MESSY RAW NOTES VS ORGANIZED MEETLY WORKSPACE
            ========================================================================= */}
        <div
          style={{
            borderRadius: '24px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden'
          }}
        >
          {/* Header Bar with Toggle */}
          <div
            style={{
              padding: '18px 28px',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              background: '#F8FAFC'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#64748B' }}>
                Before & After Comparison
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0F172A', marginTop: '2px' }}>
                How Meetly transforms the post-call ritual
              </h4>
            </div>

            {/* Interactive Toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#E2E8F0',
                padding: '4px',
                borderRadius: '10px'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('messy')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  background: activeTab === 'messy' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'messy' ? '#DC2626' : '#64748B',
                  boxShadow: activeTab === 'messy' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
                }}
              >
                <XCircle size={15} />
                <span>Messy Manual Notes</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('meetly')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  background: activeTab === 'meetly' ? '#6366F1' : 'transparent',
                  color: activeTab === 'meetly' ? '#FFFFFF' : '#64748B',
                  boxShadow: activeTab === 'meetly' ? '0 2px 8px rgba(99, 102, 241, 0.35)' : 'none'
                }}
              >
                <Sparkles size={15} />
                <span>Organized Meetly Workspace</span>
              </button>
            </div>
          </div>

          {/* Comparison Content */}
          <div style={{ padding: '36px 32px' }}>
            {activeTab === 'messy' ? (
              /* Messy Notes Simulation */
              <div
                style={{
                  background: '#FFFBEB',
                  border: '1px dashed #F59E0B',
                  borderRadius: '16px',
                  padding: '28px',
                  fontFamily: 'monospace',
                  color: '#78350F'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#B45309' }}>
                  <FileText size={18} />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>Untitled_doc_final_notes_v3.txt</span>
                </div>
                <div style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                  <p>-- sprint sync 10/24??? or was it 10/22</p>
                  <p>- sarah said push the launch? thursday maybe?</p>
                  <p>- alex to update roadmap??? (or did michael take that?? check slack)</p>
                  <p>- need campaign creatives asap. who was doing figma exports??</p>
                  <p>- *CRITICAL*: someone ping devops before wednesday so staging doesn't crash</p>
                  <p>- [MISSING 15 MINUTES - stepped away for door delivery]</p>
                  <p>- ...did we agree on pricing tier changes? not in my notes.</p>
                </div>
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(245, 158, 11, 0.3)',
                    color: '#92400E',
                    fontSize: '0.8125rem'
                  }}
                >
                  ⚠️ 3 unanswered questions · No explicit deadline timestamps · Missing assignee accountability
                </div>
              </div>
            ) : (
              /* Organized Meetly Output */
              <div
                style={{
                  background: '#0F172A',
                  color: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '28px',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {/* Meta Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '16px'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#818CF8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      SYNTHESIS COMPLETE · 100% COVERAGE
                    </span>
                    <h5 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginTop: '2px' }}>
                      Q4 Launch & Go-To-Market Alignment
                    </h5>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>
                      Synced to Linear
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(99, 102, 241, 0.15)', color: '#C7D2FE', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>
                      Notion Export Ready
                    </span>
                  </div>
                </div>

                {/* 2-Column Grid inside the Meetly Card */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  {/* Executive Summary */}
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Key Executive Decisions
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                      <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Check size={16} color="#34D399" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>Launch moved to Thursday, Oct 24 to give marketing team buffer.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Check size={16} color="#34D399" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>Campaign creative package signed off; due Wednesday 5:00 PM.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Check size={16} color="#34D399" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>DevOps staging deployment scheduled for Wednesday 9:00 PM.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Structured Action Items */}
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Assigned Action Items & Deadlines
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
                        <span>Update sprint timeline & ping QA</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span style={{ color: '#38BDF8', fontWeight: '600' }}>@Alex</span>
                          <span style={{ color: '#F87171' }}>Due Today</span>
                        </div>
                      </div>

                      <div style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
                        <span>Export paid media assets from Figma</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span style={{ color: '#C084FC', fontWeight: '600' }}>@Michael</span>
                          <span style={{ color: '#FCD34D' }}>Due Wed</span>
                        </div>
                      </div>

                      <div style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
                        <span>Notify executive council of rescheduled date</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span style={{ color: '#818CF8', fontWeight: '600' }}>@Sarah</span>
                          <span style={{ color: '#34D399' }}>Due Thu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

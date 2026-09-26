import React, { useState } from 'react';
import { DEMO_PRESETS } from '../data/mockData';
import { Sparkles, Play, CheckCircle2, RefreshCw, Check, ArrowRight, BrainCircuit, Activity, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveDemoSection = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [processingStage, setProcessingStage] = useState('');
  const [completedItems, setCompletedItems] = useState({});

  const currentPreset = DEMO_PRESETS[selectedPresetIndex];

  const handleGenerateSummary = () => {
    setIsProcessing(true);
    setHasGenerated(false);
    setProcessingStage('Analyzing acoustic tokens & diarizing speakers...');

    setTimeout(() => {
      setProcessingStage('Synthesizing executive takeaways & decisions...');
    }, 800);

    setTimeout(() => {
      setProcessingStage('Extracting assigned action items & deadlines...');
    }, 1600);

    setTimeout(() => {
      setIsProcessing(false);
      setHasGenerated(true);
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#6366F1', '#8B5CF6', '#10B981']
      });
    }, 2400);
  };

  const handlePresetChange = (index) => {
    setSelectedPresetIndex(index);
    setHasGenerated(false);
    setIsProcessing(false);
    setCompletedItems({});
  };

  const toggleTask = (taskIndex) => {
    setCompletedItems((prev) => {
      const next = !prev[taskIndex];
      if (next) {
        confetti({
          particleCount: 20,
          spread: 35,
          origin: { y: 0.7 },
          colors: ['#10B981', '#38BDF8']
        });
      }
      return { ...prev, [taskIndex]: next };
    });
  };

  return (
    <section id="interactive-demo" className="section" style={{ backgroundColor: '#0B1120', color: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div className="section-tag section-tag-dark">
            <Sparkles size={14} color="#A78BFA" />
            <span>Interactive Simulator</span>
          </div>

          <h2 className="section-heading" style={{ color: '#F8FAFC' }}>
            See Meetly think.
          </h2>

          <p className="section-subheading mx-auto" style={{ color: '#94A3B8' }}>
            Click below to simulate real-time AI reasoning on raw conversation transcripts. Watch how discussions transform into immediate clarity.
          </p>

          {/* Preset Scenario Selector Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px'
            }}
          >
            {DEMO_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(idx)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: selectedPresetIndex === idx ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: selectedPresetIndex === idx ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedPresetIndex === idx ? '#DDD6FE' : '#94A3B8',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SIMULATOR INTERFACE
            ========================================================================= */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#0F172A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden'
          }}
        >
          {/* Top Simulation Toolbar */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F8FAFC' }}>
                  {currentPreset.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748B', marginLeft: '10px' }}>
                  {currentPreset.time} · {currentPreset.category}
                </span>
              </div>
            </div>

            {/* Action Trigger Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={handleGenerateSummary}
                disabled={isProcessing}
                className="btn btn-ai btn-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '700',
                  padding: '9px 20px',
                  cursor: isProcessing ? 'default' : 'pointer'
                }}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    <span>Processing Conversation...</span>
                  </>
                ) : hasGenerated ? (
                  <>
                    <RefreshCw size={15} />
                    <span>Re-generate Summary</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={15} />
                    <span>Generate Summary</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Workspace Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
              position: 'relative'
            }}
            className="demo-split-grid"
          >
            {/* Left Column: Raw Transcript */}
            <div
              style={{
                padding: '28px',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(11, 17, 32, 0.5)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Raw Meeting Audio Transcript
                </span>
                <span style={{ fontSize: '0.72rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  Acoustic Stream
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentPreset.transcript.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#F1F5F9' }}>
                          {line.speaker}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                          ({line.role})
                        </span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                        {line.time}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#CBD5E1', margin: 0 }}>
                      "{line.text}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Status Note */}
              <div style={{ marginTop: '20px', fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={13} />
                <span>Transcript locked & timecoded to cloud storage</span>
              </div>
            </div>

            {/* Right Column: AI Processing & Generated Insights */}
            <div style={{ padding: '28px', background: 'rgba(15, 23, 42, 0.8)', minHeight: '440px' }}>
              {isProcessing ? (
                /* Processing State Animation */
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '360px',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.35) 100%)',
                      border: '1px solid rgba(139, 92, 246, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.35)'
                    }}
                  >
                    <BrainCircuit size={32} color="#C084FC" className="animate-spin" />
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    Meetly AI Synthesizing...
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#A5B4FC', maxWidth: '340px', lineHeight: '1.5' }}>
                    {processingStage}
                  </p>
                </div>
              ) : hasGenerated ? (
                /* Generated Output View */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Summary Header */}
                  <div
                    style={{
                      background: 'rgba(30, 41, 59, 0.6)',
                      borderRadius: '16px',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      padding: '20px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Executive Summary
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#34D399', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                        Ready for Export
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                      {currentPreset.summary.headline}
                    </h4>

                    <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#CBD5E1', marginBottom: '14px' }}>
                      {currentPreset.summary.notes}
                    </p>

                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        Key Decisions Made:
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {currentPreset.summary.decisions.map((dec, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#E2E8F0' }}>
                            <Check size={14} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{dec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Items List */}
                  <div
                    style={{
                      background: 'rgba(30, 41, 59, 0.45)',
                      borderRadius: '16px',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      padding: '18px 20px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Action Items (Click to Complete)
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                        Auto-assigned to Linear
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {currentPreset.summary.actionItems.map((act, i) => {
                        const isDone = completedItems[i];
                        return (
                          <div
                            key={i}
                            onClick={() => toggleTask(i)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '10px 12px',
                              borderRadius: '8px',
                              background: isDone ? 'rgba(16, 185, 129, 0.1)' : 'rgba(15, 23, 42, 0.6)',
                              border: isDone ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                              cursor: 'pointer',
                              transition: 'all 150ms ease'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  borderRadius: '4px',
                                  border: isDone ? '1.5px solid #10B981' : '1.5px solid #64748B',
                                  background: isDone ? '#10B981' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                {isDone && <Check size={11} color="#FFF" />}
                              </div>
                              <span
                                style={{
                                  fontSize: '0.82rem',
                                  color: isDone ? '#64748B' : '#E2E8F0',
                                  textDecoration: isDone ? 'line-through' : 'none'
                                }}
                              >
                                {act.task} (<strong style={{ color: '#38BDF8' }}>@{act.assignee}</strong>)
                              </span>
                            </div>
                            <span style={{ fontSize: '0.7rem', color: '#F87171', fontWeight: '600' }}>
                              {act.due}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Insights Metrics */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                      gap: '10px'
                    }}
                  >
                    {currentPreset.summary.insights.map((ins, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block', marginBottom: '2px' }}>
                          {ins.label}
                        </span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#F1F5F9' }}>
                          {ins.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Initial Prompt State */
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '360px',
                    textAlign: 'center',
                    padding: '24px'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818CF8',
                      marginBottom: '16px'
                    }}
                  >
                    <Sparkles size={28} />
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    Ready to summarize conversation
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#94A3B8', maxWidth: '320px', lineHeight: '1.5', marginBottom: '22px' }}>
                    Click "Generate Summary" above to trigger Meetly's multi-stage extraction pipeline.
                  </p>

                  <button
                    type="button"
                    onClick={handleGenerateSummary}
                    className="btn btn-primary btn-sm"
                    style={{ fontWeight: '600' }}
                  >
                    <span>Run Simulation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for responsive split */}
      <style>{`
        @media (max-width: 900px) {
          .demo-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveDemoSection;

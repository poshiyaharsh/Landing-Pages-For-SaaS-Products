import React, { useState } from 'react';
import { SIMULATION_PRESETS } from '../data/flowpilotData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {
  Sparkles,
  ArrowRight,
  Layers,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Play,
  RotateCcw,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveDemoSection = () => {
  const [selectedPreset, setSelectedPreset] = useState(SIMULATION_PRESETS[0]);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStageIdx, setActiveStageIdx] = useState(1);
  const [completedTasks, setCompletedTasks] = useState({});

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomInput(preset.prompt);
  };

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const toggleTask = (phaseIdx, taskIdx) => {
    const key = `${phaseIdx}-${taskIdx}`;
    setCompletedTasks((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="demo" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>INTERACTIVE AI SIMULATION</span>
          </div>
          <h2 className="section-title">
            Test the AI Planner <br />
            <span className="text-gradient">in Real Time</span>
          </h2>
          <p className="section-desc">
            Select a project archetype or customize your prompt to see FlowPilot break down complex epics into calibrated, dependency-mapped sprints.
          </p>
        </div>

        {/* Preset Selector Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: 'var(--space-2xl)'
          }}
        >
          {SIMULATION_PRESETS.map((preset) => {
            const isCurrent = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 200ms ease',
                  backgroundColor: isCurrent ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isCurrent ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isCurrent ? '#FFFFFF' : 'var(--text-muted)'
                }}
              >
                {preset.category}
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'rgba(10, 16, 32, 0.9)'
          }}
        >
          {/* Prompt Bar Header */}
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: 'rgba(14, 22, 44, 0.95)',
              borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '280px' }}>
              <Sparkles size={20} color="#38BDF8" />
              <input
                type="text"
                value={customInput || selectedPreset.prompt}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Type any engineering goal..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)'
                }}
              />
            </div>
            <Button
              variant="primary"
              size="sm"
              icon={Zap}
              onClick={handleRunSimulation}
              disabled={isProcessing}
            >
              {isProcessing ? 'Analyzing Codebase...' : 'Decompose with AI'}
            </Button>
          </div>

          {/* Simulation Output Area */}
          <div style={{ padding: '28px' }}>
            {/* HUD Status Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}
            >
              <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-disabled)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  ESTIMATED DURATION
                </span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>
                  {selectedPreset.sprintDuration}
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-disabled)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  PREDICTIVE CONFIDENCE
                </span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#34D399', marginTop: '4px' }}>
                  {selectedPreset.confidenceScore}
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-disabled)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  DECOMPOSED BACKLOG
                </span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#38BDF8', marginTop: '4px' }}>
                  {selectedPreset.tasksGenerated} Subtasks Generated
                </div>
              </div>
            </div>

            {/* Critical Path Notice */}
            <div
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                fontSize: '0.85rem'
              }}
            >
              <AlertTriangle size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
              <div>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Identified Critical Path: </span>
                <span style={{ color: '#7DD3FC', fontFamily: 'var(--font-mono)' }}>{selectedPreset.criticalPath}</span>
              </div>
            </div>

            {/* Sprint Phases & Tasks Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {selectedPreset.stages.map((stage, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    borderRadius: '12px',
                    background: 'rgba(17, 26, 48, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '18px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: stage.status === 'completed' ? '#10B981' : stage.status === 'in-progress' ? '#38BDF8' : '#64748B'
                        }}
                      />
                      <span style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>{stage.title}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {stage.progress}% complete
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: `${stage.progress}%`,
                        height: '100%',
                        background: stage.status === 'completed' ? '#10B981' : 'linear-gradient(90deg, #0284C7, #38BDF8)'
                      }}
                    />
                  </div>

                  {/* Tasks List with interactive checkbox toggle */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                    {stage.tasks.map((task, tIdx) => {
                      const isDone = !!completedTasks[`${sIdx}-${tIdx}`] || stage.status === 'completed';
                      return (
                        <div
                          key={tIdx}
                          onClick={() => toggleTask(sIdx, tIdx)}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '8px',
                            background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                            border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            transition: 'all 150ms ease'
                          }}
                        >
                          <CheckCircle2 size={16} color={isDone ? '#10B981' : '#64748B'} />
                          <span
                            style={{
                              fontSize: '0.825rem',
                              color: isDone ? 'var(--text-muted)' : '#FFFFFF',
                              textDecoration: isDone ? 'line-through' : 'none'
                            }}
                          >
                            {task}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

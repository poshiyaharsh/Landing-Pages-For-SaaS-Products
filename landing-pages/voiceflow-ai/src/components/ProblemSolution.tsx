import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Radio, 
  FileText, 
  BrainCircuit, 
  Sparkles, 
  Zap,
  ChevronRight 
} from 'lucide-react';
import { PIPELINE_STAGES } from '../data/voiceflowData';

export const ProblemSolution: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stageIcons = [Radio, FileText, BrainCircuit, Sparkles, Zap];

  const problemPoints = [
    'Manual transcription drains engineering and customer support bandwidth.',
    'Critical customer objections and verbal agreements disappear after meetings conclude.',
    'Voice applications feel robotic and disjointed due to latency over 800ms.',
    'Multilingual conversations fail on rigid single-language transcription models.',
    'Leadership lacks systemic visibility into real-time spoken customer sentiment.',
    'Developers waste months stitching together separate STT, NLP, and TTS vendors.'
  ];

  return (
    <section className="py-24 sm:py-32 bg-vf-bg border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            THE CONVERSATIONAL CHASM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-5">
            Conversations are full of information.<br />
            <span className="text-vf-text-muted font-normal">Most of it gets lost.</span>
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            VoiceFlow AI connects speech, meaning, and action in a unified conversational intelligence workflow.
          </p>
        </div>

        {/* 2-Column: Problem Grid & Integrated Pipeline Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Column: Fragmented Reality (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-vf-border/60 bg-vf-surface/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-vf-border/60">
                <div className="w-8 h-8 rounded-lg bg-vf-rose/10 border border-vf-rose/30 flex items-center justify-center text-vf-rose">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-vf-text">
                    The Fragmented Reality
                  </h3>
                  <span className="text-[10px] font-mono text-vf-text-muted uppercase">
                    Disjointed Speech Tech Stacks
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {problemPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-vf-rose font-mono text-xs mt-0.5">•</span>
                    <p className="text-xs sm:text-sm text-vf-text-muted leading-relaxed font-sans">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-vf-border/40 text-[11px] font-mono text-vf-text-muted">
              Result: High latency, lost revenue context, and blind spots across voice touchpoints.
            </div>
          </div>

          {/* Right Column: Unified Voice Intelligence Transformation (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-vf-cyan/30 bg-vf-surface/60 shadow-cyan-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-vf-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-vf-cyan/10 border border-vf-cyan/30 flex items-center justify-center text-vf-cyan">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-vf-text">
                      The VoiceFlow Unified Pipeline
                    </h3>
                    <span className="text-[10px] font-mono text-vf-cyan uppercase">
                      Continuous Acoustic Telemetry
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-vf-bg border border-vf-border text-vf-green">
                  End-to-End &lt;120ms
                </span>
              </div>

              {/* 5-STAGE TECHNICAL PIPELINE */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {PIPELINE_STAGES.map((stg, i) => {
                  const Icon = stageIcons[i];
                  const isSel = activeStage === i;
                  return (
                    <button
                      key={stg.step}
                      onClick={() => setActiveStage(i)}
                      className={`p-2 sm:p-3 rounded-xl border text-center transition-all ${
                        isSel
                          ? 'border-vf-cyan bg-vf-cyan/15 shadow-cyan-glow'
                          : 'border-vf-border/60 bg-vf-bg/60 hover:border-vf-border'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mx-auto mb-1.5 ${isSel ? 'text-vf-cyan' : 'text-vf-text-muted'}`} />
                      <span className="text-[9px] font-mono text-vf-text-muted block">{stg.step}</span>
                      <span className={`text-[10px] font-display font-semibold block truncate ${isSel ? 'text-vf-text' : 'text-vf-text-muted'}`}>
                        {stg.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card */}
              <div className="p-5 rounded-xl border border-vf-border/80 bg-vf-bg/80 space-y-2 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-vf-cyan uppercase tracking-wider">
                    STAGE {PIPELINE_STAGES[activeStage].step} — {PIPELINE_STAGES[activeStage].name}
                  </span>
                  <span className="text-[10px] font-mono text-vf-green">
                    Status: {PIPELINE_STAGES[activeStage].status}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-vf-text">
                  {PIPELINE_STAGES[activeStage].name} Engine
                </h4>
                <p className="text-xs text-vf-text-muted leading-relaxed font-sans">
                  {PIPELINE_STAGES[activeStage].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-vf-border/40 flex items-center justify-between text-xs font-mono text-vf-cyan">
              <span>Interactive: Click stages above to inspect data flow</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

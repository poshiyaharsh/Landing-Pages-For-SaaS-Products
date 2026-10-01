import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Wand2, Layers, Download } from 'lucide-react';
import { PROBLEM_SOLUTION_DATA } from '../data/pixelforgeData';

export const ProblemSolution: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'concept' | 'refined' | 'production'>('refined');

  return (
    <section className="py-24 md:py-32 relative bg-studio-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Friction list (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-pink">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>THE PRODUCTION BOTTLENECK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Great ideas shouldn't get stuck in production.
            </h2>

            <p className="text-base sm:text-lg text-studio-muted leading-relaxed font-normal">
              {PROBLEM_SOLUTION_DATA.subheading}
            </p>

            {/* Friction Points */}
            <div className="space-y-3 pt-3">
              {PROBLEM_SOLUTION_DATA.problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-studio-900/50 border border-studio-border/70 hover:border-neon-pink/30 transition-colors flex items-start gap-3 text-xs sm:text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink flex items-center justify-center shrink-0 mt-0.5">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{prob.title}</h4>
                    <p className="text-studio-muted text-xs mt-0.5">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Solution & Interactive Lifecycle Stage Visualizer (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Solution Header Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-studio-900 via-studio-950 to-studio-900 border border-studio-border/90 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-violet/10 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-violet/15 text-neon-violet border border-neon-violet/30 text-xs font-mono tracking-wider uppercase mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>THE PIXELFORGE SOLUTION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug mb-4">
                {PROBLEM_SOLUTION_DATA.solutionHeadline}
              </h3>

              {/* Stage Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-studio-950 border border-studio-border mb-6">
                <button
                  onClick={() => setActiveStage('concept')}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeStage === 'concept'
                      ? 'bg-studio-800 text-white font-semibold shadow-sm'
                      : 'text-studio-muted hover:text-white'
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5 text-neon-violet" />
                  <span>1. Concept</span>
                </button>

                <button
                  onClick={() => setActiveStage('refined')}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeStage === 'refined'
                      ? 'bg-neon-violet text-white font-semibold shadow-sm'
                      : 'text-studio-muted hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>2. Refined</span>
                </button>

                <button
                  onClick={() => setActiveStage('production')}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeStage === 'production'
                      ? 'bg-neon-cyan text-slate-950 font-bold shadow-sm'
                      : 'text-studio-muted hover:text-white'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>3. Production</span>
                </button>
              </div>

              {/* Dynamic Stage Preview Card */}
              <div className="p-5 rounded-xl bg-studio-950/90 border border-studio-border/90 min-h-[220px] flex flex-col justify-between">
                {activeStage === 'concept' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono text-studio-subtle">
                      <span>STAGE: ROUGH PROMPT & WIREFRAME</span>
                      <span className="text-neon-violet">Generative Ingest</span>
                    </div>
                    <div className="p-3 rounded-lg bg-studio-900 border border-dashed border-studio-border text-xs font-mono text-studio-muted">
                      &gt; "Minimalist luxury cosmetic packaging with kinetic sans typography and deep emerald glass"
                    </div>
                    <div className="h-16 rounded-lg bg-gradient-to-r from-violet-950/40 to-slate-900/40 flex items-center justify-center text-xs font-mono text-studio-subtle">
                      Extracting geometry, lighting, & palette seeds...
                    </div>
                  </div>
                )}

                {activeStage === 'refined' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono text-neon-violet">
                      <span>STAGE: TOKENIZED DESIGN SYSTEM</span>
                      <span className="text-neon-cyan">Vector Aligned</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-studio-900 border border-neon-violet/30">
                        <div className="text-white font-semibold">Type Scale</div>
                        <div className="text-[10px] text-studio-muted">Display 72 / Body 16</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-studio-900 border border-neon-cyan/30">
                        <div className="text-white font-semibold">Color Tokens</div>
                        <div className="text-[10px] text-studio-muted">OKLCH Brand Mapped</div>
                      </div>
                    </div>
                    <div className="p-2 rounded bg-studio-900 border border-studio-border text-[11px] font-mono text-studio-muted flex items-center justify-between">
                      <span>Artboard Master: 4K Retina</span>
                      <span className="text-emerald-400">✓ 0 Errors</span>
                    </div>
                  </div>
                )}

                {activeStage === 'production' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono text-neon-cyan">
                      <span>STAGE: PRODUCTION DELIVERABLES</span>
                      <span className="text-emerald-400">Ready to Ship</span>
                    </div>
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="p-2 rounded bg-studio-900 border border-studio-border flex justify-between">
                        <span className="text-white">Vector Assets (SVG / PDF)</span>
                        <span className="text-neon-cyan">300 DPI CMYK</span>
                      </div>
                      <div className="p-2 rounded bg-studio-900 border border-studio-border flex justify-between">
                        <span className="text-white">Social Package</span>
                        <span className="text-neon-pink">12 Aspect Ratios</span>
                      </div>
                      <div className="p-2 rounded bg-studio-900 border border-studio-border flex justify-between">
                        <span className="text-white">Code Tokens</span>
                        <span className="text-neon-violet">Tailwind & CSS</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-studio-border/70 flex items-center justify-between text-xs font-mono text-studio-muted">
                  <span>Cycle time: &lt; 3 minutes</span>
                  <span className="text-white font-medium">Click stages above to explore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

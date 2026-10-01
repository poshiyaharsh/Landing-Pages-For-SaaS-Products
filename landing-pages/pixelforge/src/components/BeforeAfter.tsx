import React, { useState } from 'react';
import { Sliders, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-24 md:py-32 relative bg-studio-950/80 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-pink">
            <Sliders className="w-3.5 h-3.5" />
            <span>TRANSFORMATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            From raw spark to production polish.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            Drag the slider to see how PixelForge elevates unstructured concept scribbles into brand-locked, vector-accurate, production-ready deliverables.
          </p>
        </div>

        {/* Draggable Split Comparison Container */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-studio-900 border border-studio-border shadow-2xl overflow-hidden relative">
          {/* Top labels */}
          <div className="p-4 bg-studio-950 border-b border-studio-border flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>BEFORE: UNSTRUCTURED SKETCH</span>
            </div>
            <div className="text-studio-subtle hidden sm:inline">
              ← Drag horizontal handle to compare →
            </div>
            <div className="flex items-center gap-2 text-neon-cyan">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AFTER: PRODUCTION-READY SYSTEM</span>
            </div>
          </div>

          {/* Visual Canvas Area with Clip Path */}
          <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden select-none bg-studio-grid">
            {/* Layer 1: BEFORE Canvas (Underneath) */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between bg-zinc-950 text-zinc-400 font-mono">
              <div className="space-y-4 max-w-md">
                <div className="inline-block px-2 py-1 rounded border border-dashed border-zinc-700 text-xs">
                  [Placeholder Wireframe]
                </div>
                <div className="text-3xl sm:text-4xl font-sans font-bold text-zinc-500 line-through">
                  Sample Headline Text Here
                </div>
                <div className="p-4 rounded border border-dashed border-zinc-700 text-xs text-zinc-500 space-y-2">
                  <p>• Random non-accessible hex values (#A1B2C3, #445566)</p>
                  <p>• Inconsistent margin & padding scaling</p>
                  <p>• Unlicensed standard system fonts</p>
                  <p>• Manual exports required for 14 resolutions</p>
                </div>
              </div>

              <div className="text-xs text-zinc-600">
                Status: Concept draft (Not export ready)
              </div>
            </div>

            {/* Layer 2: AFTER Canvas (Clipped on right) */}
            <div
              className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-violet-950/90 via-studio-900 to-black text-white"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <div className="space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 text-xs font-mono font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PRODUCTION DESIGN SYSTEM</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-none">
                  KINETIC HORIZON
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted font-mono leading-relaxed">
                  Engineered with Plus Jakarta Sans Display, OKLCH tokenized gamut, automated responsive breakpoints, and lossless SVG vector exports.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-7 w-7 rounded bg-neon-violet border border-white/20" />
                  <div className="h-7 w-7 rounded bg-neon-cyan border border-white/20" />
                  <div className="h-7 w-7 rounded bg-neon-pink border border-white/20" />
                  <span className="text-xs font-mono text-emerald-400 ml-2">✓ WCAG AAA Compliant</span>
                </div>
              </div>

              <div className="text-xs font-mono text-neon-cyan">
                Status: Production-ready · 100% token synced
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs shadow-xl">
                ↔
              </div>
            </div>

            {/* Hidden native range input overlaid for accessibility & touch */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Comparison slider between before and after design states"
            />
          </div>

          {/* Bottom stats summary */}
          <div className="p-4 bg-studio-950/90 border-t border-studio-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-studio-muted">
            <div>
              Drag slider to inspect fidelity difference
            </div>
            <div className="flex items-center gap-4 text-white">
              <span>90% less manual production time</span>
              <span>·</span>
              <span className="text-neon-cyan">100% brand consistency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

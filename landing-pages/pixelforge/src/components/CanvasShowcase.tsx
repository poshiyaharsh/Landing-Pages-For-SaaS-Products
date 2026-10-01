import React, { useState } from 'react';
import {
  Layers,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  MousePointer2
} from 'lucide-react';
import { triggerCreativeBurst } from '../utils/confetti';

export const CanvasShowcase: React.FC = () => {
  const [zoomLevel] = useState('100%');

  const handleSimulateRegen = () => {
    triggerCreativeBurst();
  };

  return (
    <section id="canvas" className="py-24 md:py-32 relative bg-studio-950/70 border-t border-studio-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-violet">
            <Layers className="w-3.5 h-3.5" />
            <span>UNIFIED DESIGN SURFACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            One canvas. Infinite directions.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            No more switching tabs between vector tools, generative prompts, color converters, and version controls. Everything connects on a boundless canvas.
          </p>
        </div>

        {/* Large Immersive Canvas Showcase Container */}
        <div className="rounded-2xl border border-studio-border/90 bg-studio-950 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-xl relative">
          {/* Top Canvas Bar */}
          <div className="px-4 sm:px-6 py-3 bg-studio-900/90 border-b border-studio-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-white font-bold">PIXELFORGE // INFINITE_CANVAS_v2</span>
              <span className="px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hidden sm:inline-block">
                Zoom: {zoomLevel}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleSimulateRegen}
                className="px-3 py-1 rounded-lg bg-neon-violet/15 hover:bg-neon-violet/25 text-neon-violet border border-neon-violet/30 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Re-seed Canvas AI</span>
              </button>
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Version: v4.8 (Auto-saved)</span>
              </div>
            </div>
          </div>

          {/* Canvas Working Area with Multi-Artboards and Floating Badges */}
          <div className="p-6 sm:p-8 lg:p-10 bg-studio-grid min-h-[520px] relative flex flex-col justify-between">
            {/* Floating Context Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-studio-900/90 border border-neon-violet/40 text-xs font-mono text-neon-violet flex items-center gap-1.5 backdrop-blur-md">
                <MousePointer2 className="w-3 h-3" />
                <span>Multiplayer cursor: Jordan (NYC)</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-studio-900/90 border border-neon-cyan/40 text-xs font-mono text-neon-cyan flex items-center gap-1.5 backdrop-blur-md">
                <Clock className="w-3 h-3" />
                <span>Branch: main-release-cmyk</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-studio-900/90 border border-neon-pink/40 text-xs font-mono text-neon-pink flex items-center gap-1.5 backdrop-blur-md">
                <MessageSquare className="w-3 h-3" />
                <span>3 Design Annotations</span>
              </span>
            </div>

            {/* 3 Active Interactive Canvas Artboards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              {/* Artboard 1: Brand System Guidelines */}
              <div className="p-5 rounded-xl bg-studio-900/90 border border-studio-border/90 shadow-xl space-y-3 relative group hover:border-neon-violet/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-studio-subtle">
                  <span className="text-white font-semibold">Artboard A: Brand Tokens</span>
                  <span>1080 × 1080</span>
                </div>
                <div className="space-y-2 py-2">
                  <div className="h-2 rounded bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-pink" />
                  <div className="text-sm font-display font-extrabold text-white">
                    DISPLAY TYPEFACE: PLUS JAKARTA
                  </div>
                  <p className="text-xs text-studio-muted">
                    Kerning: -0.04em · Optical Align: Center · Weight Scale: 800/600/400
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-studio-border">
                  <div className="h-5 rounded bg-neon-violet" />
                  <div className="h-5 rounded bg-neon-cyan" />
                  <div className="h-5 rounded bg-neon-pink" />
                </div>
              </div>

              {/* Artboard 2: Editorial Poster Visual */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-violet-950 via-studio-900 to-black border border-neon-violet/30 shadow-xl space-y-3 relative group hover:border-neon-cyan/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-studio-subtle">
                  <span className="text-neon-cyan font-semibold">Artboard B: Campaign Key</span>
                  <span>16:9 Retina</span>
                </div>
                <div className="py-4 space-y-2">
                  <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-neon-pink/20 text-neon-pink">
                    LIVE RENDERING
                  </div>
                  <div className="text-2xl font-display font-black text-white leading-tight">
                    FUTURE KINETICS
                  </div>
                  <p className="text-xs text-studio-muted">
                    Generative spatial waveforms interacting with high-contrast grotesk typography.
                  </p>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-studio-muted pt-2 border-t border-white/10">
                  <span>CMYK Ready</span>
                  <span className="text-emerald-400">✓ In Spec</span>
                </div>
              </div>

              {/* Artboard 3: Mobile Product UI Screen */}
              <div className="p-5 rounded-xl bg-studio-900/90 border border-studio-border/90 shadow-xl space-y-3 relative group hover:border-neon-pink/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-studio-subtle">
                  <span className="text-white font-semibold">Artboard C: Mobile App</span>
                  <span>390 × 844</span>
                </div>
                <div className="p-3 rounded-lg bg-black/60 border border-studio-border space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-studio-muted">
                    <span>Navigation</span>
                    <span className="text-neon-cyan">Dynamic Island</span>
                  </div>
                  <div className="h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-studio-subtle">
                    Hero Component (JSX)
                  </div>
                  <div className="h-6 rounded bg-neon-violet/20 flex items-center justify-center text-neon-violet text-[10px]">
                    Tailwind: px-4 py-2 rounded-xl
                  </div>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-studio-muted pt-2 border-t border-studio-border">
                  <span>Figma / React Sync</span>
                  <span className="text-neon-pink">Linked</span>
                </div>
              </div>
            </div>

            {/* Bottom Canvas Context Bar */}
            <div className="mt-8 p-3 rounded-xl bg-studio-900/90 border border-studio-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-studio-muted">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">Canvas Statistics:</span>
                <span>3 Artboards</span>
                <span>·</span>
                <span>48 Layer Tokens</span>
                <span>·</span>
                <span>0 Contrast Violations</span>
              </div>
              <span className="text-neon-cyan cursor-pointer hover:underline" onClick={handleSimulateRegen}>
                Click to trigger generative iteration matrix →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

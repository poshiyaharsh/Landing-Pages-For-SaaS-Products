import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play,
  Layers,
  Sliders,
  Type,
  Palette,
  CheckCircle2,
  Wand2,
  Eye,
  Layout
} from 'lucide-react';

interface HeroProps {
  onStartCreating: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCreating, onExplore }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Studio Ambience & Grid */}
      <div className="absolute inset-0 bg-studio-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-neon-violet/12 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-neon-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-neon-pink/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-900/90 border border-studio-border/90 text-xs font-mono tracking-widest uppercase text-studio-muted shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span className="text-white font-semibold">THE CREATIVE PRODUCTION PLATFORM</span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.02]"
          >
            Turn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-fuchsia-400 to-neon-cyan">
              ideas
            </span>{' '}
            into{' '}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              production-ready
            </span>{' '}
            designs.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-studio-muted max-w-2xl mx-auto leading-relaxed font-normal"
          >
            PixelForge transforms rough concepts into polished visual systems, campaign assets, product designs, and brand-ready experiences — all in one creative workspace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={onStartCreating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-neon-violetDark via-neon-violet to-neon-cyan hover:opacity-95 active:scale-[0.98] transition-all rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span>Start Creating — Free</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-studio-text hover:text-white bg-studio-900/90 hover:bg-studio-850 border border-studio-border hover:border-studio-subtle rounded-xl transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
            >
              <Play className="w-4 h-4 text-neon-cyan fill-neon-cyan/20" />
              <span>Explore PixelForge</span>
            </button>
          </motion.div>

          {/* Reassurance copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-sm text-studio-subtle font-mono pt-1"
          >
            No credit card required · Create your first project in minutes
          </motion.p>
        </div>

        {/* Sophisticated Floating Creative Workspace Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 lg:mt-20 relative mx-auto max-w-6xl"
        >
          {/* Subtle Outer Neon Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-violet/30 via-neon-cyan/20 to-neon-pink/20 blur-xl opacity-50 pointer-events-none" />

          {/* Floating Editorial Tags around Workspace */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-5 -left-6 z-20 px-3.5 py-1.5 rounded-lg bg-studio-900/90 border border-neon-violet/40 backdrop-blur-md shadow-xl text-xs font-mono text-neon-violet">
            <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span>BRAND SYSTEM: OKLCH TOKENIZED</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -top-5 -right-6 z-20 px-3.5 py-1.5 rounded-lg bg-studio-900/90 border border-neon-cyan/40 backdrop-blur-md shadow-xl text-xs font-mono text-neon-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPAIGN CONCEPT: 4 VARIANTS</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-4 -left-4 z-20 px-3 py-1.5 rounded-lg bg-studio-900/90 border border-neon-pink/40 backdrop-blur-md shadow-xl text-xs font-mono text-neon-pink">
            <span>SOCIAL KIT: 9:16 / 1:1 / 16:9 AUTO-CUT</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-4 -right-4 z-20 px-3 py-1.5 rounded-lg bg-studio-900/90 border border-studio-border backdrop-blur-md shadow-xl text-xs font-mono text-slate-300">
            <span>PRODUCT UI: VECTOR EXPORT READY</span>
          </div>

          {/* Main Application Window */}
          <div className="relative rounded-2xl bg-studio-950 border border-studio-border/90 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden">
            {/* Top Workspace Toolbar */}
            <div className="px-4 sm:px-6 py-3 bg-studio-900/80 border-b border-studio-border flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-studio-border" />
                <span className="font-display font-bold text-white tracking-wider uppercase text-[11px]">
                  PIXELFORGE STUDIO CANVAS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-violet/10 text-neon-violet border border-neon-violet/20 hidden sm:inline-block">
                  Project: AURA_2026_MASTER
                </span>
              </div>

              {/* Center Tool Picker */}
              <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-studio-950 border border-studio-border text-studio-muted">
                <button className="px-2 py-0.5 rounded text-white bg-studio-850 font-mono text-[11px] flex items-center gap-1">
                  <Layout className="w-3 h-3 text-neon-cyan" />
                  Artboards (3)
                </button>
                <button className="px-2 py-0.5 rounded hover:text-white font-mono text-[11px] flex items-center gap-1">
                  <Wand2 className="w-3 h-3 text-neon-violet" />
                  Generative Engine
                </button>
                <button className="px-2 py-0.5 rounded hover:text-white font-mono text-[11px] flex items-center gap-1">
                  <Eye className="w-3 h-3 text-neon-pink" />
                  Live Preview
                </button>
              </div>

              {/* Right Export Status */}
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SYNCED</span>
                </div>
                <button
                  onClick={onStartCreating}
                  className="px-2.5 py-1 rounded bg-gradient-to-r from-neon-violetDark to-neon-violet text-white font-semibold text-[11px] hover:opacity-90 transition-opacity"
                >
                  Export All Assets
                </button>
              </div>
            </div>

            {/* Application Interior Split: Left Layers + Center Canvas + Right Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-studio-950/70">
              {/* Left Column: Layer & Asset Hierarchy (2 Cols) */}
              <div className="hidden lg:block lg:col-span-2 p-3.5 border-r border-studio-border bg-studio-900/40 text-xs font-mono space-y-4">
                <div>
                  <div className="flex items-center justify-between text-studio-subtle text-[10px] uppercase font-bold tracking-wider mb-2">
                    <span>LAYERS</span>
                    <Layers className="w-3 h-3" />
                  </div>
                  <div className="space-y-1 text-studio-muted">
                    <div className="p-1.5 rounded bg-neon-violet/10 text-neon-violet border border-neon-violet/20 flex items-center justify-between">
                      <span># Artboard-01 (Web)</span>
                      <span className="text-[9px]">1440px</span>
                    </div>
                    <div className="p-1.5 rounded hover:bg-studio-850 hover:text-white flex items-center justify-between">
                      <span>↳ Hero_Display_Type</span>
                      <span className="text-[9px]">H1</span>
                    </div>
                    <div className="p-1.5 rounded hover:bg-studio-850 hover:text-white flex items-center justify-between">
                      <span>↳ AI_Visual_Mesh</span>
                      <span className="text-[9px]">3D</span>
                    </div>
                    <div className="p-1.5 rounded hover:bg-studio-850 hover:text-white flex items-center justify-between">
                      <span>↳ CTA_Group_Tokens</span>
                      <span className="text-[9px]">Auto</span>
                    </div>
                    <div className="p-1.5 rounded hover:bg-studio-850 hover:text-white flex items-center justify-between">
                      <span># Artboard-02 (Mobile)</span>
                      <span className="text-[9px]">390px</span>
                    </div>
                    <div className="p-1.5 rounded hover:bg-studio-850 hover:text-white flex items-center justify-between">
                      <span># Artboard-03 (Social)</span>
                      <span className="text-[9px]">1080px</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-studio-subtle text-[10px] uppercase font-bold tracking-wider mb-2">
                    TOKEN PALETTE
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="h-6 rounded bg-neon-violet border border-white/20" title="#8B5CF6" />
                    <div className="h-6 rounded bg-neon-cyan border border-white/20" title="#06B6D4" />
                    <div className="h-6 rounded bg-neon-pink border border-white/20" title="#F43F5E" />
                    <div className="h-6 rounded bg-white border border-white/20" title="#FFFFFF" />
                  </div>
                </div>
              </div>

              {/* Center Canvas: Active Artboards (7 Cols) */}
              <div className="col-span-1 lg:col-span-7 p-4 sm:p-6 bg-studio-grid flex flex-col justify-between relative overflow-hidden">
                {/* Artboard Floating Canvas Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
                  {/* Artboard 1: High-Fashion / Campaign Poster */}
                  <div className="rounded-xl border border-studio-border bg-gradient-to-br from-violet-950/80 via-studio-900 to-black p-4 relative shadow-lg group hover:border-neon-violet/50 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-studio-subtle mb-3">
                      <span className="text-neon-violet font-semibold">ARTBOARD 01 · HERO KEY</span>
                      <span>16:9 4K</span>
                    </div>
                    <div className="space-y-2 py-4">
                      <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">
                        SEASON 2026 // EDITION
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">
                        HYPERVISUAL AURA
                      </h3>
                      <p className="text-xs text-studio-muted line-clamp-2">
                        Synthetic generative acoustics mapped to multi-dimensional typography and kinetic spatial grids.
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-neon-cyan">Vector Mesh: 100%</span>
                      <span className="text-studio-muted">v2.4 Final</span>
                    </div>
                  </div>

                  {/* Artboard 2: Mobile Product App UI */}
                  <div className="rounded-xl border border-studio-border bg-gradient-to-br from-cyan-950/70 via-studio-900 to-black p-4 relative shadow-lg group hover:border-neon-cyan/50 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-studio-subtle mb-3">
                      <span className="text-neon-cyan font-semibold">ARTBOARD 02 · MOBILE UI</span>
                      <span>9:16 OLED</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-1.5 bg-white/40 rounded-full" />
                        <div className="w-4 h-4 rounded-full bg-neon-pink/80" />
                      </div>
                      <div className="h-16 rounded bg-gradient-to-r from-neon-violet/30 to-neon-cyan/30 flex items-center justify-center">
                        <span className="font-mono text-[10px] text-white tracking-wider">AI_GENERATED_MESH</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="h-6 rounded bg-white/5 border border-white/10" />
                        <div className="h-6 rounded bg-neon-violet/20 border border-neon-violet/30" />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-neon-pink">Tailwind Tokens: Synced</span>
                      <span className="text-studio-muted">React Ready</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Prompt Bar inside Canvas */}
                <div className="mt-4 p-2.5 rounded-xl bg-studio-900/90 border border-studio-border flex items-center gap-3">
                  <Wand2 className="w-4 h-4 text-neon-violet shrink-0" />
                  <div className="text-xs font-mono text-studio-muted truncate flex-1">
                    <span className="text-neon-cyan">Prompt:</span> "Create high-contrast typographic posters with violet gradient meshes and bold display headers"
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-studio-800 text-studio-text shrink-0">
                    ⌘K to Refine
                  </span>
                </div>
              </div>

              {/* Right Column: AI Inspector & Typography Controls (3 Cols) */}
              <div className="hidden lg:block lg:col-span-3 p-3.5 border-l border-studio-border bg-studio-900/40 text-xs font-mono space-y-4">
                <div className="flex items-center justify-between text-studio-subtle text-[10px] uppercase font-bold tracking-wider">
                  <span>INSPECTOR</span>
                  <Sliders className="w-3 h-3" />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-studio-subtle text-[10px] uppercase mb-1 flex items-center gap-1">
                      <Type className="w-3 h-3" />
                      <span>Typography Hierarchy</span>
                    </div>
                    <div className="p-2 rounded bg-studio-950 border border-studio-border space-y-1">
                      <div className="flex justify-between text-white">
                        <span>Display H1</span>
                        <span>Plus Jakarta 800</span>
                      </div>
                      <div className="flex justify-between text-studio-muted text-[10px]">
                        <span>Letter Spacing</span>
                        <span>-0.03em</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-studio-subtle text-[10px] uppercase mb-1 flex items-center gap-1">
                      <Palette className="w-3 h-3" />
                      <span>Color Token Matrix</span>
                    </div>
                    <div className="p-2 rounded bg-studio-950 border border-studio-border space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-neon-violet">--neon-violet</span>
                        <span className="text-white">#8B5CF6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neon-cyan">--neon-cyan</span>
                        <span className="text-white">#06B6D4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neon-pink">--neon-pink</span>
                        <span className="text-white">#F43F5E</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neon-violet/10 border border-neon-violet/20 text-neon-violet space-y-1">
                    <div className="font-semibold text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Copilot Active</span>
                    </div>
                    <p className="text-[10px] text-studio-muted leading-tight">
                      Variations automatically adhere to brand tokens. 0 contrast violations detected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

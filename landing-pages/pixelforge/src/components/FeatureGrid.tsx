import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
            <span>●</span>
            <span>CORE CREATIVE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            From first thought to final asset.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            Eliminate friction between ideation and execution. Every tool is tuned for craft, velocity, and brand consistency.
          </p>
        </div>

        {/* 5 Distinct Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* FEATURE 01: AI Creative Generation (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-violet/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-neon-violet/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neon-violet px-2.5 py-1 rounded bg-neon-violet/10 border border-neon-violet/20">
                  FEATURE 01
                </span>
                <span className="text-xs font-mono text-studio-subtle group-hover:text-neon-violet transition-colors flex items-center gap-1">
                  <span>Generative Engine</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-violet transition-colors">
                AI Creative Generation
              </h3>
              <p className="text-sm sm:text-base text-studio-muted leading-relaxed font-normal mb-6">
                Turn rough prompts, references, and concepts into polished visual directions with deep contextual understanding.
              </p>
            </div>

            {/* Unique Visual 1: Prompt Ingest to Multimodal Generation Output */}
            <div className="p-4 rounded-xl bg-studio-950/80 border border-studio-border/80 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-studio-muted">
                <Sparkles className="w-4 h-4 text-neon-violet" />
                <span className="text-white">Brief: "Nordic Minimalist Kinetic Typography"</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-20 rounded-lg bg-gradient-to-br from-violet-950/70 to-studio-900 p-2 border border-neon-violet/20 flex flex-col justify-between">
                  <span className="text-[10px] text-neon-violet">Var A</span>
                  <span className="text-white font-bold text-[11px]">Static Grid</span>
                </div>
                <div className="h-20 rounded-lg bg-gradient-to-br from-cyan-950/70 to-studio-900 p-2 border border-neon-cyan/20 flex flex-col justify-between">
                  <span className="text-[10px] text-neon-cyan">Var B</span>
                  <span className="text-white font-bold text-[11px]">Kinetic Mesh</span>
                </div>
                <div className="h-20 rounded-lg bg-gradient-to-br from-pink-950/70 to-studio-900 p-2 border border-neon-pink/20 flex flex-col justify-between">
                  <span className="text-[10px] text-neon-pink">Var C</span>
                  <span className="text-white font-bold text-[11px]">3D Glyph</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 02: Smart Design Systems (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-cyan/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-neon-cyan/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neon-cyan px-2.5 py-1 rounded bg-neon-cyan/10 border border-neon-cyan/20">
                  FEATURE 02
                </span>
                <span className="text-xs font-mono text-studio-subtle group-hover:text-neon-cyan transition-colors flex items-center gap-1">
                  <span>Tokens</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-cyan transition-colors">
                Smart Design Systems
              </h3>
              <p className="text-sm sm:text-base text-studio-muted leading-relaxed font-normal mb-6">
                Build reusable colors, typography hierarchies, layout tokens, and strict brand rules that propagate across every asset.
              </p>
            </div>

            {/* Unique Visual 2: Token Swatches & Hierarchy Cards */}
            <div className="p-4 rounded-xl bg-studio-950/80 border border-studio-border/80 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-studio-subtle">
                <span>SYSTEM SYNCHRONIZED</span>
                <span className="text-neon-cyan">48 Tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-md bg-neon-violet border border-white/20" />
                <div className="h-7 w-7 rounded-md bg-neon-cyan border border-white/20" />
                <div className="h-7 w-7 rounded-md bg-neon-pink border border-white/20" />
                <div className="h-7 flex-1 rounded-md bg-studio-850 border border-studio-border flex items-center px-2 text-[10px] text-studio-muted">
                  OKLCH Gamut Locked
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 03: Production Workspace (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-pink/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neon-pink px-2.5 py-1 rounded bg-neon-pink/10 border border-neon-pink/20">
                  FEATURE 03
                </span>
                <ArrowUpRight className="w-4 h-4 text-studio-subtle group-hover:text-neon-pink transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-pink transition-colors">
                Production Workspace
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed font-normal mb-6">
                Move from concept to final deliverables without switching tools or exporting intermediate lossy files.
              </p>
            </div>

            {/* Unique Visual 3: Zero-Switching Multi-Format Pipeline */}
            <div className="p-3.5 rounded-xl bg-studio-950/80 border border-studio-border/80 space-y-2 font-mono text-[11px]">
              <div className="flex justify-between items-center text-white">
                <span>Vector SVG</span>
                <span className="text-emerald-400">Lossless</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>300 DPI PDF</span>
                <span className="text-neon-pink">CMYK Profile</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>React JSX</span>
                <span className="text-neon-cyan">Clean Tokens</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 04: Creative Variations (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-violet-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-violet-400 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20">
                  FEATURE 04
                </span>
                <ArrowUpRight className="w-4 h-4 text-studio-subtle group-hover:text-violet-400 transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-violet-400 transition-colors">
                Creative Variations
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed font-normal mb-6">
                Explore multiple visual directions instantly and compare typography pairings, color moods, and compositions.
              </p>
            </div>

            {/* Unique Visual 4: Side-by-side Matrix Split */}
            <div className="p-3.5 rounded-xl bg-studio-950/80 border border-studio-border/80">
              <div className="grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
                <div className="p-2 rounded bg-studio-900 border border-white/10">
                  <span className="text-violet-400 block font-bold">Concept 01</span>
                  <span className="text-[10px] text-studio-muted">Editorial Serif</span>
                </div>
                <div className="p-2 rounded bg-studio-900 border border-white/10">
                  <span className="text-neon-cyan block font-bold">Concept 02</span>
                  <span className="text-[10px] text-studio-muted">Modern Grotesk</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 05: Team Collaboration (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-cyan/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neon-cyan px-2.5 py-1 rounded bg-neon-cyan/10 border border-neon-cyan/20">
                  FEATURE 05
                </span>
                <ArrowUpRight className="w-4 h-4 text-studio-subtle group-hover:text-neon-cyan transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-cyan transition-colors">
                Team Collaboration
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed font-normal mb-6">
                Share concepts, collect pinpoint feedback on specific layers, and keep every creative decision strictly in context.
              </p>
            </div>

            {/* Unique Visual 5: Multiplayer Presence & Inline Annotations */}
            <div className="p-3.5 rounded-xl bg-studio-950/80 border border-studio-border/80 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="text-white">Maya (Art Dir)</span>
                </div>
                <span className="text-studio-muted text-[10px]">Editing Layer H1</span>
              </div>
              <div className="p-2 rounded bg-studio-900 border border-studio-border text-studio-muted text-[10px]">
                "Love the cyan accent contrast here. Let's export 4K."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, Layout } from 'lucide-react';

interface FinalCTAProps {
  onStartCreating: () => void;
  onExploreWorkspace: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartCreating, onExploreWorkspace }) => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden border-t border-studio-border/70">
      {/* Background Studio Grid & Dual Neon Ambient Glow */}
      <div className="absolute inset-0 bg-studio-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-neon-violet/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-neon-cyan/12 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Large Abstract Geometric Mesh in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] -z-10">
        <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="1.5" strokeDasharray="4 4" />
          <polygon points="100,15 180,60 180,140 100,185 20,140 20,60" strokeWidth="1.5" />
          <polygon points="100,35 155,70 155,130 100,165 45,130 45,70" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE FUTURE OF CREATIVE PRODUCTION</span>
        </div>

        {/* Dramatic Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.04]">
          Your next great idea{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-fuchsia-400 to-neon-cyan">
            starts here.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-studio-muted max-w-2xl mx-auto font-normal leading-relaxed">
          Explore, design, refine, and ship with PixelForge. Unify your entire creative workflow in one intelligent studio canvas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={onStartCreating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-neon-violetDark via-neon-violet to-neon-cyan hover:opacity-95 active:scale-[0.98] transition-all rounded-xl shadow-[0_0_35px_rgba(139,92,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span>Start Creating — Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreWorkspace}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-studio-text hover:text-white bg-studio-900/90 hover:bg-studio-850 border border-studio-border hover:border-studio-subtle rounded-xl transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
          >
            <Layout className="w-4 h-4 text-neon-cyan" />
            <span>Explore the Workspace</span>
          </button>
        </div>

        {/* Micro proof */}
        <p className="text-xs sm:text-sm text-studio-subtle font-mono pt-2">
          Instant onboarding · 100% vector-accurate · Export code, SVGs & print-ready PDFs
        </p>
      </div>
    </section>
  );
};

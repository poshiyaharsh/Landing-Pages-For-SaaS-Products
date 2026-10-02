import React from 'react';
import { ArrowRight, Terminal, Check } from 'lucide-react';
import { HeroWorkspace } from './HeroWorkspace';

interface HeroProps {
  onStartBuilding: () => void;
  onExploreDocs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartBuilding, onExploreDocs }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" id="product">
      {/* Background Dev-Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle radial ambient glows - restrained, not overly bright */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-green/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Copy Container */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-codepilot-panel/90 border border-brand-green/30 text-brand-green text-xs font-mono font-medium mb-6 shadow-glow-green">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping inline-block" />
            <span className="tracking-wide">AI-POWERED DEVELOPER WORKFLOW</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-codepilot-white leading-[1.08] mb-6">
            Ship{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#22D3EE] to-brand-cyan">
              better code
            </span>
            ,<br className="hidden sm:inline" /> faster.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-codepilot-muted max-w-2xl mx-auto leading-relaxed mb-8">
            CodePilot helps developers write, review, debug, test, and ship production-ready code without breaking their flow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
            <button
              onClick={onStartBuilding}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-brand-green text-codepilot-bg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#15f8a3] hover:shadow-glow-green transition-all"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreDocs}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-codepilot-border bg-codepilot-panel/80 hover:bg-codepilot-hover text-codepilot-text font-mono text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>Explore the Docs</span>
            </button>
          </div>

          {/* Additional Small Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-codepilot-dim mb-8">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-brand-green" />
              No credit card required
            </span>
            <span className="text-codepilot-border">•</span>
            <span>Built for developers</span>
            <span className="text-codepilot-border">•</span>
            <span>Zero latency local inference</span>
          </div>

          {/* GitHub-style Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-codepilot-panel/60 border border-codepilot-border text-xs font-mono text-codepilot-muted">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-[9px] text-brand-green font-bold">
                N
              </div>
              <div className="w-5 h-5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-[9px] text-brand-cyan font-bold">
                S
              </div>
              <div className="w-5 h-5 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-[9px] text-brand-purple font-bold">
                B
              </div>
            </div>
            <span>Trusted by modern engineering teams across 14,000+ repos</span>
          </div>
        </div>

        {/* HERO PRODUCT VISUAL: Realistic IDE Workspace */}
        <div className="mt-4 sm:mt-8">
          <HeroWorkspace />
        </div>
      </div>
    </section>
  );
};

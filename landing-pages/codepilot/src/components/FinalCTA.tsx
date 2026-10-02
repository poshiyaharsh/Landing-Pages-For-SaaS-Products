import React from 'react';
import { ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onStartBuilding: () => void;
  onReadDocs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartBuilding, onReadDocs }) => {
  return (
    <section className="py-20 lg:py-32 relative bg-codepilot-bg overflow-hidden border-t border-codepilot-border" id="get-started">
      {/* Background terminal grid and subtle ambient glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-brand-green/30 bg-codepilot-panel/90 p-8 sm:p-12 lg:p-16 shadow-terminal text-center relative overflow-hidden">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-6 shadow-glow-green">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            <span>INSTANT SETUP IN 30 SECONDS</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-codepilot-white leading-[1.1] mb-6">
            Stop fighting your workflow.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#22D3EE] to-brand-cyan">
              Start shipping.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-codepilot-muted max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            Bring AI directly into the tools you already use and turn ideas into production-ready software faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onStartBuilding}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-green text-codepilot-bg font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#15f8a3] hover:shadow-glow-green transition-all"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onReadDocs}
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-codepilot-border bg-codepilot-surface hover:bg-codepilot-hover text-codepilot-text font-mono text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>Read the Docs</span>
            </button>
          </div>

          {/* Terminal Visual: The Final Terminal Command */}
          <div className="max-w-xl mx-auto rounded-xl bg-[#060709] border border-codepilot-border p-5 text-left font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-codepilot-border/60 text-[11px] text-codepilot-dim">
              <span className="flex items-center gap-1.5 text-brand-green">
                <Terminal className="w-3.5 h-3.5" />
                <span>codepilot-cli</span>
              </span>
              <span>bash</span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="text-brand-cyan font-bold">$ codepilot init</div>
              <div className="text-codepilot-dim">Initializing workspace...</div>
              <div className="text-brand-green flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Repository connected</span>
              </div>
              <div className="text-brand-green flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AI context loaded</span>
              </div>
              <div className="text-brand-green flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Developer workspace ready</span>
              </div>
              <div className="text-brand-cyan font-bold pt-2 flex items-center gap-1">
                <span>$ ship</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Server, CheckCircle2, Layers } from 'lucide-react';

interface FinalCTAProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreConsole: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAuth, onExploreConsole }) => {
  return (
    <section className="py-24 bg-white border-b border-nest-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-nest-blue-soft border border-nest-blue/20 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-nest-blue" />
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-nest-blue">
            READY TO STREAMLINE YOUR DEVOPS
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-nest-text leading-tight max-w-2xl mx-auto">
          Your infrastructure. <br className="hidden sm:inline" />
          Under control.
        </h2>

        <p className="text-base sm:text-lg text-nest-secondary max-w-xl mx-auto mt-4 leading-relaxed">
          Spend less time managing complexity and more time building what matters. Experience unified deployments, service topology, and cost governance today.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={() => onOpenAuth('signup')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold bg-nest-blue hover:bg-nest-blue-deep text-white rounded-nest shadow-subtle transition-all"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreConsole}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold bg-white hover:bg-nest-subtle text-nest-text border border-nest-border rounded-nest transition-colors"
          >
            <span>Explore the Console</span>
          </button>
        </div>

        {/* Refined Topology Snippet in CTA */}
        <div className="mt-14 max-w-2xl mx-auto bg-nest-bg border border-nest-border rounded-nest-xl p-5 shadow-card text-left space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-nest-border">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-nest-blue" />
              <span className="font-bold text-nest-text font-display">CloudNest Fleet Control Status</span>
            </div>
            <span className="text-[10px] text-nest-green flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> Ready for Production
            </span>
          </div>

          <div className="p-3 bg-white rounded border border-nest-border flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-nest-green" />
              <span className="font-bold text-nest-text">web-frontend:v2.8.4</span>
              <span className="text-nest-muted text-[11px] hidden sm:inline">sha-7f8a91c</span>
            </div>
            <span className="text-nest-blue font-semibold text-[11px]">Zero Downtime Rolling Swap</span>
          </div>
        </div>
      </div>
    </section>
  );
};

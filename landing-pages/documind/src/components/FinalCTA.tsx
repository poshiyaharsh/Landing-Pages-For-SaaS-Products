import React from 'react';
import { ArrowRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { DocumentItem } from '../types';

interface FinalCTAProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreWorkspace: () => void;
  sampleDoc: DocumentItem;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenAuth,
  onExploreWorkspace,
  sampleDoc,
}) => {
  return (
    <section className="py-24 bg-white border-b border-docu-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-docu-accent-soft border border-docu-accent/20 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-docu-accent" />
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-docu-accent">
            READY TO TRANSFORM YOUR WORKFLOW
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-docu-text leading-tight max-w-2xl mx-auto">
          Your documents have <br className="hidden sm:inline" />
          more to tell.
        </h2>

        <p className="text-base sm:text-lg text-docu-secondary max-w-xl mx-auto mt-4 leading-relaxed">
          Bring your information together and discover a smarter way to understand what matters without hours of manual review.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={() => onOpenAuth('signup')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-docu-accent hover:bg-docu-accent-hover text-white rounded-docu shadow-subtle transition-all"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreWorkspace}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-docu-surface hover:bg-docu-subtle text-docu-text border border-docu-border rounded-docu transition-colors"
          >
            <span>Explore the Workspace</span>
          </button>
        </div>

        {/* Refined Miniature Document Card Demonstration */}
        <div className="mt-14 max-w-2xl mx-auto bg-docu-bg border border-docu-border rounded-docu-xl p-5 shadow-card text-left space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-docu-border">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-docu-accent" />
              <span className="font-semibold text-docu-text">DocuMind Grounded Snapshot</span>
            </div>
            <span className="text-[10px] font-mono text-docu-success flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 100% Citation Grounded
            </span>
          </div>

          <div className="p-3 bg-white rounded border border-docu-border space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-docu-secondary">
              <span>Query: “What was the fiscal impact of automation?”</span>
              <span className="text-docu-accent">P. 08</span>
            </div>
            <p className="text-xs text-docu-text leading-relaxed">
              “Automation initiatives yielded an estimated <strong className="font-semibold text-docu-text">$2.4M immediate cost savings opportunity</strong> across enterprise contract and intake review workflows.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

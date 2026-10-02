import React, { useState } from 'react';
import { FEATURES } from '../data/codepilotData';
import {
  Bug,
  Search,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-codepilot-bg" id="features">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPER TOOLING CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Everything you need to ship.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Engineered from the ground up for modern engineering teams. Six precision modules designed to eliminate developer toil.
          </p>
        </div>

        {/* 6 Feature Modules in a High-Density Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-between rounded-xl bg-codepilot-panel border border-codepilot-border hover:border-brand-green/40 transition-all duration-300 overflow-hidden group shadow-card-subtle hover:shadow-glow-green/10"
            >
              {/* Feature Card Header */}
              <div className="p-6 border-b border-codepilot-border/60">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/20">
                    FEATURE {feature.number}
                  </span>
                  <span className="text-[11px] font-mono text-codepilot-dim">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-codepilot-white mb-2 group-hover:text-brand-green transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs font-mono text-brand-cyan mb-3">
                  “{feature.tagline}”
                </p>

                <p className="text-xs sm:text-sm text-codepilot-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Realistic Feature Visual UI */}
              <div className="p-4 sm:p-5 bg-[#07080B] flex-1 flex flex-col justify-end font-mono text-xs">
                {/* 01: Completion Visual */}
                {feature.visualType === 'completion' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-codepilot-dim pb-1 border-b border-codepilot-border/60">
                      <span>editor.ts</span>
                      <span className="text-brand-green font-semibold">Ghost Text Active</span>
                    </div>
                    <div className="text-codepilot-muted text-[11px]">
                      <span className="text-brand-purple">const</span> session = <span className="text-brand-purple">await</span> auth.<span className="text-brand-cyan">validate</span>(token);
                    </div>
                    <div className="p-2 rounded bg-brand-green/10 border border-brand-green/30 text-[11px] text-brand-green">
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Tab to Accept Suggestion</span>
                      </div>
                      <div className="opacity-90 font-mono text-[10px]">
                        if (!session.isValid) return reply.status(401).send(...)
                      </div>
                    </div>
                  </div>
                )}

                {/* 02: Review Visual */}
                {feature.visualType === 'review' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-2">
                    <div className="flex items-center justify-between text-[10px] pb-1 border-b border-codepilot-border/60">
                      <span className="text-brand-cyan font-bold">PR #248 · Automated Bot</span>
                      <span className="text-brand-green">Pass</span>
                    </div>
                    <div className="p-2 rounded bg-codepilot-surface border border-brand-amber/30 text-[11px] space-y-1">
                      <div className="flex items-center gap-1.5 text-brand-amber text-[10px] font-bold">
                        <span>⚠ Security Caution</span>
                      </div>
                      <p className="text-[10px] text-codepilot-muted">
                        Replace unverified token decode with cryptographic jwt.verify() signature.
                      </p>
                    </div>
                  </div>
                )}

                {/* 03: Debugging Visual */}
                {feature.visualType === 'debugging' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] pb-1 border-b border-codepilot-border/60">
                      <span className="text-brand-red font-bold flex items-center gap-1">
                        <Bug className="w-3 h-3" />
                        StackTrace Analyzer
                      </span>
                      <span className="text-codepilot-dim">Ln 18:24</span>
                    </div>
                    <div className="text-[10px] text-brand-red/90 bg-brand-red/10 p-1.5 rounded font-mono">
                      TypeError: Cannot read properties of undefined
                    </div>
                    <div className="text-[10px] text-brand-green bg-brand-green/10 p-1.5 rounded font-mono">
                      ✓ Auto-fix: Added items = [] parameter default guard
                    </div>
                  </div>
                )}

                {/* 04: Testing Visual */}
                {feature.visualType === 'testing' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] pb-1 border-b border-codepilot-border/60">
                      <span className="text-codepilot-text font-bold">Vitest Suite — 4 specs</span>
                      <span className="text-brand-green font-bold">100% Coverage</span>
                    </div>
                    <div className="space-y-1 text-[10px]">
                      <div className="flex items-center justify-between text-brand-green">
                        <span>✓ handles empty arrays</span>
                        <span>0.4ms</span>
                      </div>
                      <div className="flex items-center justify-between text-brand-green">
                        <span>✓ handles negative price input</span>
                        <span>0.6ms</span>
                      </div>
                      <div className="flex items-center justify-between text-brand-green">
                        <span>✓ calculates bulk quantity tax</span>
                        <span>0.8ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 05: Codebase Intelligence Visual */}
                {feature.visualType === 'search' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-2">
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-codepilot-surface border border-codepilot-border text-[11px] text-codepilot-text">
                      <Search className="w-3 h-3 text-brand-green" />
                      <span className="text-brand-green">&gt; Where is Stripe webhook verified?</span>
                    </div>
                    <div className="p-2 rounded bg-codepilot-surface/80 border border-codepilot-border/60 text-[10px] text-codepilot-muted space-y-1">
                      <div className="text-brand-cyan font-bold">src/services/billing/webhook.ts:42</div>
                      <p className="text-codepilot-dim">stripe.webhooks.constructEvent(rawBody, sig)</p>
                    </div>
                  </div>
                )}

                {/* 06: One-Click Shipping Visual */}
                {feature.visualType === 'shipping' && (
                  <div className="rounded-lg bg-codepilot-panel border border-codepilot-border p-3 space-y-2">
                    <div className="flex items-center justify-between text-[10px] pb-1 border-b border-codepilot-border/60 text-brand-cyan">
                      <span>$ codepilot ship --pr</span>
                      <span className="text-brand-green">Ready</span>
                    </div>
                    <div className="space-y-1 text-[10px] text-codepilot-muted">
                      <div className="text-brand-green">✓ Clean working directory</div>
                      <div className="text-brand-green">✓ CI tests: 184 passed</div>
                      <div className="text-brand-cyan">✓ PR #249 generated with release diff</div>
                    </div>
                  </div>
                )}

                {/* Snippet Action */}
                {feature.codeSnippet && (
                  <div className="mt-3 pt-2 border-t border-codepilot-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-codepilot-dim">Snippet</span>
                    <button
                      onClick={() => handleCopyCode(feature.id, feature.codeSnippet)}
                      className="flex items-center gap-1 text-[10px] text-codepilot-dim hover:text-brand-green transition-colors"
                      title="Copy snippet"
                    >
                      {copiedId === feature.id ? (
                        <>
                          <Check className="w-3 h-3 text-brand-green" />
                          <span className="text-brand-green">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

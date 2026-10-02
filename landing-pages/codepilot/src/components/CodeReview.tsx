import React from 'react';
import {
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  GitBranch
} from 'lucide-react';

export const CodeReview: React.FC = () => {

  return (
    <section className="py-20 lg:py-28 relative bg-codepilot-bg" id="code-review">
      {/* Subtle developer background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>CONTINUOUS CODE DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Catch problems before production does.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Automated pull request analysis that reads like a senior staff engineer's review: precise, contextual, and focused on security, edge-cases, and maintainability.
          </p>
        </div>

        {/* GitHub-Inspired Pull Request Interface */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-codepilot-border bg-codepilot-panel shadow-terminal overflow-hidden">
          {/* PR Header Bar */}
          <div className="p-4 sm:p-6 bg-codepilot-bg border-b border-codepilot-border">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Open
                </span>
                <span className="text-sm sm:text-base font-bold text-codepilot-white font-mono">
                  Pull Request #248
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-codepilot-dim">
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3 h-3 text-brand-green" />
                  feature/auth-guard
                </span>
                <span>into</span>
                <span className="text-codepilot-text bg-codepilot-surface px-1.5 py-0.5 rounded border border-codepilot-border">
                  main
                </span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-codepilot-white mb-2">
              Improve authentication middleware & token lifecycle
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs text-codepilot-dim font-mono">
              <span className="text-codepilot-text font-medium">authored by @alexmorgan</span>
              <span>•</span>
              <span className="text-brand-green">+42 lines</span>
              <span className="text-brand-red">-18 lines</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-brand-cyan">
                <Sparkles className="w-3 h-3" />
                Reviewed by CodePilot AI
              </span>
            </div>
          </div>

          {/* CodePilot Review Summary Box */}
          <div className="p-4 sm:p-6 bg-[#0B0D11] border-b border-codepilot-border font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-codepilot-border/60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-xs">
                  CP
                </div>
                <span className="font-bold text-codepilot-text text-sm">
                  CodePilot Automated Review
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                128 AST Rules Evaluated
              </span>
            </div>

            {/* Review Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-codepilot-surface/70 border border-brand-green/30 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-green text-xs">Logic looks correct</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Middleware chains properly pass execution to next() handler.</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-codepilot-surface/70 border border-brand-amber/30 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-amber text-xs">Potential token expiration issue</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Clock skew margin missing on verifyTimestamp expiration logic.</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-codepilot-surface/70 border border-brand-amber/30 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-amber text-xs">Missing error handling</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Malformed JSON payloads cause unhandled rejection in parseToken().</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-codepilot-surface/70 border border-brand-green/30 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-green text-xs">Tests cover main flow</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">4 unit tests added for happy path and forbidden permissions.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Code Comments & Diff Display */}
          <div className="p-4 sm:p-6 bg-codepilot-panel space-y-4 font-mono text-xs">
            <div className="text-xs font-bold text-codepilot-muted pb-2 border-b border-codepilot-border/60 flex items-center justify-between">
              <span>DIFF: src/middleware/auth.middleware.ts</span>
              <span className="text-[11px] text-codepilot-dim">Lines 32-45</span>
            </div>

            {/* Code Diff lines */}
            <div className="rounded-lg bg-[#07080A] border border-codepilot-border overflow-hidden">
              <div className="p-2 sm:p-3 text-[11px] sm:text-xs space-y-1">
                <div className="text-codepilot-dim flex">
                  <span className="w-8 text-right pr-3 select-none text-codepilot-border-highlight">32</span>
                  <span>async function validateSession(token: string) &#123;</span>
                </div>

                <div className="bg-brand-red/10 text-brand-red border-l-2 border-brand-red flex pl-1">
                  <span className="w-8 text-right pr-3 select-none text-brand-red">33</span>
                  <span className="pl-4">- const decoded = jwt.decode(token);</span>
                </div>

                {/* Inline Comment 1: Warning */}
                <div className="my-2 ml-10 p-3 rounded-lg bg-[#111620] border border-brand-amber/40 shadow-card-subtle space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-brand-amber font-bold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      CodePilot · Potential Token Expiration & Signature Bypass
                    </span>
                    <span className="text-[10px] text-codepilot-dim">CWE-347</span>
                  </div>
                  <p className="text-[11px] text-codepilot-text leading-relaxed">
                    <code className="text-brand-amber font-mono">jwt.decode()</code> does NOT verify the cryptographic signature. Anyone can tamper with payload claims. Always use <code className="text-brand-green font-mono">jwt.verify(token, secret, &#123; maxAge: '2h' &#125;)</code> with a 30-second clock skew tolerance.
                  </p>
                </div>

                <div className="bg-brand-green/10 text-brand-green border-l-2 border-brand-green flex pl-1">
                  <span className="w-8 text-right pr-3 select-none text-brand-green">34</span>
                  <span className="pl-4">+ const decoded = await jwt.verify(token, env.JWT_SECRET, &#123; clockTolerance: 30 &#125;);</span>
                </div>

                <div className="text-codepilot-dim flex">
                  <span className="w-8 text-right pr-3 select-none text-codepilot-border-highlight">35</span>
                  <span className="pl-4">if (!decoded.userId) return null;</span>
                </div>
              </div>
            </div>

            {/* Bottom Approval Status */}
            <div className="p-3.5 rounded-lg bg-codepilot-surface border border-codepilot-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                <span className="text-codepilot-text font-semibold">
                  Changes approved once token verification suggestion is committed.
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-3 py-1.5 rounded bg-brand-green text-codepilot-bg font-semibold hover:bg-[#15f8a3] transition-colors"
                >
                  Commit Suggested Patch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

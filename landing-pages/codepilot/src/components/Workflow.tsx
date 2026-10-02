import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/codepilotData';
import {
  PenTool,
  CheckCircle2,
  TestTube,
  Rocket,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <PenTool className="w-5 h-5" />;
      case 1: return <CheckCircle2 className="w-5 h-5" />;
      case 2: return <TestTube className="w-5 h-5" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };

  const copyCommand = (cmd: string, idx: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedStep(idx);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#090A0C]" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <span>DEVELOPMENT LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            From idea to production.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            A frictionless continuous path from initial keyboard keystroke to verified production pull request.
          </p>
        </div>

        {/* 4-Step Interactive Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green/20 via-brand-cyan/20 to-brand-green/20 -translate-y-12 z-0" />

          {WORKFLOW_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isCurrent
                    ? 'bg-codepilot-panel border-brand-green shadow-glow-green/20'
                    : 'bg-codepilot-panel/60 border-codepilot-border hover:border-codepilot-border-highlight hover:bg-codepilot-panel'
                }`}
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono transition-colors ${
                        isCurrent
                          ? 'bg-brand-green text-codepilot-bg shadow-glow-green'
                          : 'bg-codepilot-surface text-codepilot-muted border border-codepilot-border'
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>

                    <span
                      className={`font-mono text-2xl font-black ${
                        isCurrent ? 'text-brand-green' : 'text-codepilot-border-highlight'
                      }`}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan font-bold block mb-0.5">
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-codepilot-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-codepilot-muted leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Command Pill */}
                <div className="mt-2 pt-3 border-t border-codepilot-border/60">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      copyCommand(step.cmd, idx);
                    }}
                    className="p-2 rounded bg-[#07080A] border border-codepilot-border hover:border-brand-green/30 flex items-center justify-between text-xs font-mono group transition-colors"
                  >
                    <span className="text-brand-green text-[11px] truncate">{step.cmd}</span>
                    <button
                      className="text-codepilot-dim hover:text-codepilot-text ml-2 shrink-0"
                      title="Copy command"
                    >
                      {copiedStep === idx ? (
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Terminal for the active step */}
        <div className="mt-10 rounded-xl bg-codepilot-panel border border-codepilot-border p-5 font-mono text-xs shadow-terminal">
          <div className="flex items-center justify-between pb-3 border-b border-codepilot-border mb-3">
            <span className="flex items-center gap-2 text-brand-green font-bold">
              <Terminal className="w-4 h-4 text-brand-green" />
              <span>TERMINAL TELEMETRY — STEP {WORKFLOW_STEPS[activeStep].step} [{WORKFLOW_STEPS[activeStep].title}]</span>
            </span>
            <span className="text-codepilot-dim text-[11px]">Interactive Pipeline Preview</span>
          </div>

          <div className="space-y-1.5 text-xs text-codepilot-muted">
            <div className="text-brand-cyan font-bold">{WORKFLOW_STEPS[activeStep].cmd}</div>
            {activeStep === 0 && (
              <>
                <div className="text-codepilot-text">✓ Context tree loaded: 14 model schema definitions</div>
                <div className="text-brand-green">✓ Generated AuthGuard middleware with sliding token expiration</div>
                <div className="text-codepilot-dim">Prompt latency: 38ms · Tokens processed: 1,480</div>
              </>
            )}
            {activeStep === 1 && (
              <>
                <div className="text-codepilot-text">✓ AST syntax parser analyzed 3 modified files</div>
                <div className="text-brand-amber">⚠ Warning: Ensure token clockTolerance is configured</div>
                <div className="text-brand-green">✓ Zero security vulnerabilities detected</div>
              </>
            )}
            {activeStep === 2 && (
              <>
                <div className="text-codepilot-text">✓ Synthesized test suite: AuthGuard.spec.ts</div>
                <div className="text-brand-green">✓ 4 test cases evaluated: 100% statement coverage</div>
                <div className="text-brand-green">✓ All 184 project tests passing</div>
              </>
            )}
            {activeStep === 3 && (
              <>
                <div className="text-codepilot-text">✓ Formatted commit: feat(auth): add verified token guard</div>
                <div className="text-brand-green">✓ Pushed to origin/feat-auth-guard</div>
                <div className="text-brand-cyan underline">✓ GitHub PR #251 opened & ready for merge</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

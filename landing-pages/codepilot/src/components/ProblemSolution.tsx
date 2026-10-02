import React, { useState } from 'react';
import {
  Shuffle,
  Bug,
  GitPullRequest,
  BookOpen,
  CheckSquare,
  RefreshCw,
  ArrowRight,
  Terminal,
  Globe,
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles
} from 'lucide-react';
import { FRICTION_POINTS } from '../data/codepilotData';

export const ProblemSolution: React.FC = () => {
  const [activeWorkflowView, setActiveWorkflowView] = useState<'fragmented' | 'unified'>('unified');

  const getFrictionIcon = (icon: string) => {
    switch (icon) {
      case 'shuffle': return <Shuffle className="w-4 h-4 text-brand-amber" />;
      case 'bug': return <Bug className="w-4 h-4 text-brand-red" />;
      case 'git-pull-request': return <GitPullRequest className="w-4 h-4 text-brand-purple" />;
      case 'book-open': return <BookOpen className="w-4 h-4 text-brand-cyan" />;
      case 'check-square': return <CheckSquare className="w-4 h-4 text-brand-amber" />;
      default: return <RefreshCw className="w-4 h-4 text-brand-cyan" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-xs font-mono mb-4">
            <span>DEVELOPER FRICTION VS ACCELERATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Your tools shouldn't slow you down.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Modern development has splintered into dozens of fragmented apps, browser tabs, and notification alerts.
            CodePilot brings intelligence directly into your development workflow.
          </p>
        </div>

        {/* 6 Friction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {FRICTION_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-codepilot-panel border border-codepilot-border hover:border-codepilot-border-highlight transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-codepilot-surface border border-codepilot-border flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getFrictionIcon(item.icon)}
                </div>
                <span className="text-[11px] font-mono text-codepilot-dim">
                  0{idx + 1} // PAIN
                </span>
              </div>

              <h3 className="text-base font-semibold text-codepilot-text mb-2 group-hover:text-codepilot-white transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-codepilot-dim leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Transformation: Fragmented vs CodePilot Unified Flow */}
        <div className="rounded-2xl border border-codepilot-border bg-codepilot-panel/80 p-6 sm:p-8 lg:p-10 shadow-terminal relative overflow-hidden">
          {/* Subtle glow in container */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 blur-3xl pointer-events-none" />

          {/* Switcher Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-codepilot-border mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-green font-semibold">
                WORKFLOW EVOLUTION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-codepilot-white mt-1">
                From 5 disconnected apps to one fluid loop
              </h3>
            </div>

            <div className="flex items-center p-1 rounded-lg bg-codepilot-bg border border-codepilot-border">
              <button
                onClick={() => setActiveWorkflowView('fragmented')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeWorkflowView === 'fragmented'
                    ? 'bg-codepilot-surface text-brand-amber font-semibold border border-brand-amber/30'
                    : 'text-codepilot-dim hover:text-codepilot-text'
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Problem: Fragmented</span>
              </button>

              <button
                onClick={() => setActiveWorkflowView('unified')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeWorkflowView === 'unified'
                    ? 'bg-brand-green/20 text-brand-green font-semibold border border-brand-green/40 shadow-glow-green'
                    : 'text-codepilot-dim hover:text-codepilot-text'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                <span>Solution: CodePilot</span>
              </button>
            </div>
          </div>

          {/* Workflow Graphic Visualization */}
          {activeWorkflowView === 'fragmented' ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-xs font-mono text-brand-amber flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
                <span>Status: High friction, constant context switching (Average 18 min lost per switch)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                {/* 1. Terminal */}
                <div className="p-4 rounded-lg bg-codepilot-surface border border-brand-amber/30 text-center">
                  <Terminal className="w-6 h-6 text-brand-amber mx-auto mb-2" />
                  <div className="text-xs font-mono font-bold text-codepilot-text">Terminal</div>
                  <div className="text-[10px] text-codepilot-dim mt-1">Manual builds & test logs</div>
                </div>

                <div className="hidden sm:flex justify-center text-codepilot-dim">
                  <ArrowRight className="w-5 h-5 text-brand-amber/60 animate-pulse" />
                </div>

                {/* 2. Browser */}
                <div className="p-4 rounded-lg bg-codepilot-surface border border-brand-amber/30 text-center">
                  <Globe className="w-6 h-6 text-brand-amber mx-auto mb-2" />
                  <div className="text-xs font-mono font-bold text-codepilot-text">Browser</div>
                  <div className="text-[10px] text-codepilot-dim mt-1">Searching StackOverflow</div>
                </div>

                <div className="hidden sm:flex justify-center text-codepilot-dim">
                  <ArrowRight className="w-5 h-5 text-brand-amber/60 animate-pulse" />
                </div>

                {/* 3. Docs */}
                <div className="p-4 rounded-lg bg-codepilot-surface border border-brand-amber/30 text-center">
                  <FileText className="w-6 h-6 text-brand-amber mx-auto mb-2" />
                  <div className="text-xs font-mono font-bold text-codepilot-text">Docs</div>
                  <div className="text-[10px] text-codepilot-dim mt-1">Outdated API specs</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-brand-amber/5 border border-brand-amber/20 text-xs font-mono text-brand-amber flex items-center justify-between">
                <span>Result: Fragmentation, lost cognitive state, delayed pull requests.</span>
                <span className="font-bold underline cursor-pointer" onClick={() => setActiveWorkflowView('unified')}>
                  Switch to CodePilot Flow →
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-xs font-mono text-brand-green flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span>Status: Single cohesive developer loop. Zero context switches.</span>
              </div>

              {/* CodePilot Unified Flow Banner */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-brand-green/10 via-brand-cyan/10 to-brand-green/10 border border-brand-green/30 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-green text-codepilot-bg flex items-center justify-center font-mono font-black text-xl shadow-glow-green">
                      &gt;_
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-codepilot-white flex items-center gap-2">
                        <span>CodePilot Unified Engine</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-green/20 text-brand-green border border-brand-green/30">
                          One Connected Workflow
                        </span>
                      </h4>
                      <p className="text-xs text-codepilot-muted font-mono mt-1">
                        Synthesizes code completions, AST audits, terminal diagnostics, and PR pipelines within your local IDE.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-codepilot-bg/80 border border-codepilot-border text-xs font-mono text-brand-green flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-brand-green" />
                      In-IDE AI Assistant
                    </span>
                    <span className="px-2.5 py-1 rounded bg-codepilot-bg/80 border border-codepilot-border text-xs font-mono text-brand-cyan flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-brand-cyan" />
                      Integrated CLI
                    </span>
                    <span className="px-2.5 py-1 rounded bg-codepilot-bg/80 border border-codepilot-border text-xs font-mono text-brand-purple flex items-center gap-1.5">
                      <GitPullRequest className="w-3 h-3 text-brand-purple" />
                      1-Click PR Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-codepilot-surface border border-codepilot-border text-xs font-mono text-codepilot-text flex items-center justify-between">
                <span className="text-brand-green flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  CodePilot brings intelligence directly into your development workflow.
                </span>
                <span className="text-codepilot-dim hidden sm:inline">Engine Latency: &lt; 40ms</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

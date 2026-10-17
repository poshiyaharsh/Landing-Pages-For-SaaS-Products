import React, { useState } from 'react';
import {
  Play,
  CheckCircle2,
  Sliders,
  Sparkles,
  GitBranch,
  History,
  Terminal,
  Cpu,
  ArrowRight,
  BarChart3,
  Copy,
  Layers,
  ChevronDown
} from 'lucide-react';
import { SAMPLE_PROMPT_VARIANTS, EXPERIMENT_HISTORY } from '../data/sampleData';

interface HeroSectionProps {
  onOpenLab: () => void;
  onExploreExperiments: () => void;
  onCopyNotice: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLab,
  onExploreExperiments,
  onCopyNotice,
}) => {
  const [activeVariantId, setActiveVariantId] = useState('v2');
  const [selectedModel, setSelectedModel] = useState('Claude 3.5 Sonnet (Simulated)');
  const [isRunning, setIsRunning] = useState(false);
  const [executedAt, setExecutedAt] = useState('Just now (Cached demo)');

  const activeVariant =
    SAMPLE_PROMPT_VARIANTS.find((v) => v.id === activeVariantId) || SAMPLE_PROMPT_VARIANTS[1];

  const handleRunSimulatedExperiment = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setExecutedAt('Finished in 184ms (Local sandbox)');
      onCopyNotice(`Experiment run completed for variant ${activeVariant.version}! Score: ${activeVariant.score}/100`);
    }, 600);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-tech-grid">
      {/* Radial blur backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>THE PROMPT EXPERIMENTATION WORKSPACE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Better prompts.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              Proven with experiments.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Design prompt variations, compare model outputs, and evaluate what works. PromptLab gives your AI workflow a structured place to experiment, learn, and improve.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenLab}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm font-mono uppercase tracking-wider rounded-xl shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Open the lab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreExperiments}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-mono text-sm uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Explore experiments</span>
            </button>
          </div>

          {/* Verification Badge */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Deterministic local sandbox
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Side-by-side metric rubrics
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Zero API keys required
            </span>
          </div>
        </div>

        {/* Hero Visual — Experimentation Console Preview */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-cyan-500/30 bg-[#0E1526] shadow-2xl shadow-cyan-950/60 overflow-hidden">
          {/* Console Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0B0F19] border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3">
                exp://support-ticket-summarizer/runs
              </span>
            </div>

            {/* Model Selector and Run Button */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded-md text-xs font-mono text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>{selectedModel}</span>
              </div>

              <button
                onClick={handleRunSimulatedExperiment}
                disabled={isRunning}
                className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono rounded-md shadow flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                {isRunning ? (
                  <span className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
                <span>Run experiment</span>
              </button>
            </div>
          </div>

          {/* Main 3-Column Studio Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Left Rail: History & Versions (3 Cols) */}
            <div className="lg:col-span-3 p-4 bg-[#0A0E1A] space-y-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1">
                    <History className="w-3.5 h-3.5 text-cyan-400" />
                    Experiment History
                  </span>
                  <span className="text-cyan-400">3 runs</span>
                </div>
                <div className="space-y-1.5">
                  {EXPERIMENT_HISTORY.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-slate-200">{exp.name}</span>
                        <span className="text-cyan-400">{exp.accuracy}%</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>{exp.runsCount} variants</span>
                        <span>{exp.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variable Configuration Panel */}
              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Variables Configured
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="p-2 bg-slate-900/80 rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{`{{ticket_body}}`}</span>
                    <span className="text-[10px] text-emerald-400">assigned</span>
                  </div>
                  <div className="p-2 bg-slate-900/80 rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{`{{tone}}`}</span>
                    <span className="text-[10px] text-slate-400">concise</span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{executedAt}</span>
              </div>
            </div>

            {/* Center Area: Prompt Editor & Variants (5 Cols) */}
            <div className="lg:col-span-5 p-4 sm:p-5 bg-[#0D1424] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Prompt Variants
                  </span>
                </div>
                {/* Variant Selector Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 font-mono text-xs">
                  {SAMPLE_PROMPT_VARIANTS.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVariantId(v.id)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeVariantId === v.id
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {v.version}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code / Prompt Editor Panel */}
              <div className="rounded-xl bg-[#090D17] border border-cyan-500/20 p-3.5 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-semibold">{activeVariant.name}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeVariant.promptText);
                      onCopyNotice(`Copied prompt ${activeVariant.version} to clipboard!`);
                    }}
                    className="flex items-center gap-1 hover:text-white text-slate-400 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                </div>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line py-1">
                  {activeVariant.promptText}
                </div>
              </div>

              {/* Sample Variable Payload */}
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs font-mono">
                <div className="text-[10px] text-slate-400 uppercase mb-1">Input Payload Preview:</div>
                <div className="text-slate-300 truncate">
                  "Customer reports 504 gateway timeout when exporting 50k rows in billing dashboard..."
                </div>
              </div>
            </div>

            {/* Right Panel: Output & Evaluation Rubrics (4 Cols) */}
            <div className="lg:col-span-4 p-4 sm:p-5 bg-[#0B101E] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Simulated Output
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                  <span>Score:</span>
                  <span className="font-bold">{activeVariant.score}/100</span>
                </div>
              </div>

              {/* Output Content */}
              <div className="p-3.5 rounded-xl bg-[#090D17] border border-slate-800 text-xs font-sans text-slate-200 min-h-[140px] leading-relaxed">
                <p className="whitespace-pre-line font-mono text-[11px]">
                  {activeVariant.sampleOutput}
                </p>
              </div>

              {/* Rubric Score Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 font-mono text-xs">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Evaluation Rubric:</div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Clarity</span>
                    <span className="text-cyan-400">{activeVariant.rubrics.clarity}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${activeVariant.rubrics.clarity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Adherence</span>
                    <span className="text-teal-400">{activeVariant.rubrics.adherence}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${activeVariant.rubrics.adherence}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Structure</span>
                    <span className="text-indigo-400">{activeVariant.rubrics.structure}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${activeVariant.rubrics.structure}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-500 text-right">
                * Simulated metric fixtures for local evaluation demonstration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

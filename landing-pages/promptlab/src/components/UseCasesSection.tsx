import React, { useState } from 'react';
import { PROMPTLAB_USE_CASES } from '../data/sampleData';
import { Terminal, Copy, ArrowRight, Sparkles } from 'lucide-react';

interface UseCasesSectionProps {
  onCopyNotice: (msg: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onCopyNotice }) => {
  const [selectedCaseId, setSelectedCaseId] = useState(PROMPTLAB_USE_CASES[0].id);

  const activeCase =
    PROMPTLAB_USE_CASES.find((c) => c.id === selectedCaseId) || PROMPTLAB_USE_CASES[0];

  return (
    <section className="py-20 lg:py-28 bg-[#080C16] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Production Scenarios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for every{' '}
            <span className="text-cyan-400">AI application domain.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            From deterministic JSON extraction to automated customer responses, structure and optimize prompts for critical workflows.
          </p>
        </div>

        {/* 6 Use Case Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {PROMPTLAB_USE_CASES.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setSelectedCaseId(uc.id)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-mono text-xs ${
                selectedCaseId === uc.id
                  ? 'bg-[#0E1526] border-cyan-500 text-cyan-300 shadow-md font-bold'
                  : 'bg-[#0A0E1A] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {uc.title}
            </button>
          ))}
        </div>

        {/* Active Use Case Deep Dive Card */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0E1526] p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Target Domain // {activeCase.title}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeCase.description}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                PromptLab isolates variations and tests edge cases for this scenario to eliminate hallucinations, enforce schema conformity, and prevent prompt injection regressions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#070B14] border border-cyan-500/20 p-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3 text-[11px] text-slate-400">
                  <span className="text-cyan-400 font-semibold">Verified Prompt Template</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeCase.examplePrompt);
                      onCopyNotice(`Copied ${activeCase.title} prompt template!`);
                    }}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Template</span>
                  </button>
                </div>
                <div className="p-3 bg-slate-900/60 rounded border border-slate-800/80 text-slate-200 whitespace-pre-line leading-relaxed">
                  {activeCase.examplePrompt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

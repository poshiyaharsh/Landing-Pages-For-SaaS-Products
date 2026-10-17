import React, { useState } from 'react';
import { BarChart3, CheckCircle2, TrendingUp, Cpu, Info, ArrowUpRight } from 'lucide-react';
import { SAMPLE_EVAL_METRICS } from '../data/sampleData';

export const EvaluationComparison: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('adherence');

  return (
    <section id="evaluations" className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Rubric Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive evaluation metrics.{' '}
            <span className="text-cyan-400">Not vibes.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Quantify prompt reliability with deterministic rubrics across clarity, adherence, consistency, and relevance.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SAMPLE_EVAL_METRICS.map((metric) => (
            <div
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer font-mono ${
                selectedMetric === metric.id
                  ? 'bg-[#0E1526] border-cyan-500 shadow-xl shadow-cyan-950/40'
                  : 'bg-[#0A0E1A] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>{metric.name}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {metric.benchmark}
                </span>
              </div>
              <div className="text-3xl font-extrabold text-white mb-2">
                {metric.score}
                <span className="text-lg text-slate-400 font-normal">/100</span>
              </div>
              <p className="text-xs font-sans text-slate-300 leading-relaxed mb-3">
                {metric.description}
              </p>
              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full rounded-full"
                  style={{ width: `${metric.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Showcase with Clean SVG Chart */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0E1526] p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Variant A vs Variant B Performance Comparison</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Sample evaluation
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Comparative rubric score distribution across 100 test runs
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-600 inline-block" />
                <span className="text-slate-400">Variant A (Baseline)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-cyan-400 inline-block" />
                <span className="text-cyan-300 font-semibold">Variant B (Optimized)</span>
              </div>
            </div>
          </div>

          {/* SVG Bar Comparison Chart */}
          <div className="mt-8 space-y-6">
            {[
              { label: 'Clarity & Brevity', varA: 82, varB: 94 },
              { label: 'Instruction Adherence', varA: 78, varB: 97 },
              { label: 'Output Schema Consistency', varA: 85, varB: 99 },
              { label: 'Semantic Relevance', varA: 88, varB: 96 },
              { label: 'Token Efficiency', varA: 65, varB: 88 },
            ].map((row) => (
              <div key={row.label} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">{row.label}</span>
                  <span className="text-cyan-400 font-semibold">
                    +{row.varB - row.varA}% improvement
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {/* Bar Variant A */}
                  <div className="w-full bg-slate-900 h-3 rounded overflow-hidden flex">
                    <div
                      className="bg-slate-600 h-full transition-all duration-500"
                      style={{ width: `${row.varA}%` }}
                      title={`Variant A: ${row.varA}%`}
                    />
                  </div>
                  {/* Bar Variant B */}
                  <div className="w-full bg-slate-900 h-3 rounded overflow-hidden flex">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full transition-all duration-500"
                      style={{ width: `${row.varB}%` }}
                      title={`Variant B: ${row.varB}%`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              * Illustrative rubric scores labeled for demonstration and not presented as live benchmark results.
            </span>
            <span>n=100 test inputs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

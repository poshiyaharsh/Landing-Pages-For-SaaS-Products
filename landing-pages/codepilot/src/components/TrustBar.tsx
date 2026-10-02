import React from 'react';
import { TRUST_LOGOS, TRUST_METRICS } from '../data/codepilotData';
import { GitCommit, Zap, Activity } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-16 border-y border-codepilot-border/70 bg-codepilot-panel/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-green mb-2">
            ENGINEERING TEAMS
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-codepilot-white">
            Built for developers who ship.
          </h2>
        </div>

        {/* Monochrome Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-14">
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-codepilot-surface/60 transition-all group w-full text-center border border-transparent hover:border-codepilot-border"
            >
              <div className="font-mono text-base sm:text-lg font-black tracking-widest text-codepilot-muted/80 group-hover:text-codepilot-white transition-colors">
                {logo.name}
              </div>
              <span className="text-[10px] font-mono text-codepilot-dim group-hover:text-brand-green/80 transition-colors">
                {logo.meta}
              </span>
            </div>
          ))}
        </div>

        {/* Three Developer Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-codepilot-border/60">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-5 rounded-lg bg-codepilot-panel border border-codepilot-border hover:border-brand-green/30 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-green tracking-tight">
                  {metric.value}
                </span>
                {idx === 0 && <GitCommit className="w-5 h-5 text-brand-green/60" />}
                {idx === 1 && <Activity className="w-5 h-5 text-brand-cyan/60" />}
                {idx === 2 && <Zap className="w-5 h-5 text-brand-purple/60" />}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-codepilot-text mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-codepilot-dim font-mono leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small claim disclaimer */}
        <div className="text-center mt-6">
          <span className="text-[11px] font-mono text-codepilot-dim">
            *Performance benchmarks measured across simulated internal benchmark suites and enterprise workloads.
          </span>
        </div>
      </div>
    </section>
  );
};

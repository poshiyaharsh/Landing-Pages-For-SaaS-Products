import React, { useState } from 'react';
import { TECH_LANGUAGES, TECH_FRAMEWORKS } from '../data/codepilotData';
import { Code2, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { TechItem } from '../types';

export const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  return (
    <section className="py-20 lg:py-28 relative bg-[#07080A] border-y border-codepilot-border" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>POLYGLOT COMPILER &amp; AST REASONING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Works where you work.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            From modern TypeScript frontends and Go microservices to systems programming in Rust and enterprise Java codebases.
          </p>
        </div>

        {/* Two Columns: Languages and Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Languages Group */}
          <div className="p-6 sm:p-8 rounded-2xl bg-codepilot-panel border border-codepilot-border">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-codepilot-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-green" />
                <h3 className="text-lg font-bold text-codepilot-white font-mono">
                  Languages
                </h3>
              </div>
              <span className="text-xs font-mono text-brand-green">11 First-Class ASTs</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TECH_LANGUAGES.map((lang) => {
                const isSelected = selectedTech?.name === lang.name;
                return (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedTech(lang)}
                    className={`px-3.5 py-2 rounded-lg font-mono text-xs flex items-center gap-2 transition-all duration-200 border ${
                      isSelected
                        ? 'bg-brand-green/20 text-brand-green border-brand-green shadow-glow-green'
                        : 'bg-codepilot-surface border-codepilot-border hover:border-brand-green/40 hover:bg-codepilot-hover text-codepilot-text'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-green/70" />
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-[10px] text-codepilot-dim">
                      {lang.extension}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Frameworks Group */}
          <div className="p-6 sm:p-8 rounded-2xl bg-codepilot-panel border border-codepilot-border">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-codepilot-border">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-cyan" />
                <h3 className="text-lg font-bold text-codepilot-white font-mono">
                  Frameworks
                </h3>
              </div>
              <span className="text-xs font-mono text-brand-cyan">Modern &amp; Enterprise</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TECH_FRAMEWORKS.map((fw) => {
                const isSelected = selectedTech?.name === fw.name;
                return (
                  <button
                    key={fw.name}
                    onClick={() => setSelectedTech(fw)}
                    className={`px-3.5 py-2 rounded-lg font-mono text-xs flex items-center gap-2 transition-all duration-200 border ${
                      isSelected
                        ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan shadow-glow-cyan'
                        : 'bg-codepilot-surface border-codepilot-border hover:border-brand-cyan/40 hover:bg-codepilot-hover text-codepilot-text'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-cyan/70" />
                    <span className="font-semibold">{fw.name}</span>
                    <span className="text-[10px] text-codepilot-dim">
                      {fw.extension}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Tech Inspector Callout */}
        <div className="p-4 rounded-xl bg-codepilot-panel border border-codepilot-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-codepilot-surface border border-codepilot-border flex items-center justify-center text-brand-green font-bold">
              &gt;
            </div>
            <div>
              <span className="text-codepilot-dim text-[11px]">ACTIVE COMPILER TARGET</span>
              <div className="text-sm font-bold text-codepilot-white">
                {selectedTech ? `${selectedTech.name} (${selectedTech.extension})` : 'All 18 Languages & Frameworks Active'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-brand-green">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>Contextual AST tree parser loaded &amp; ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

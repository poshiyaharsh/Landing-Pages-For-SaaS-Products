import React from 'react';
import { PROMPTLAB_INTEGRATIONS } from '../data/sampleData';
import { Network, CheckCircle2, Cpu, Link2, ShieldCheck } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Ecosystem Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect to your preferred{' '}
            <span className="text-cyan-400">models and pipelines.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Seamlessly bridge experimentation with CI/CD deployment, evals, and foundation model providers.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMPTLAB_INTEGRATIONS.map((integ) => (
            <div
              key={integ.id}
              className="p-6 rounded-2xl bg-[#0E1526] border border-slate-800 hover:border-cyan-500/40 transition-all font-mono group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded border ${
                    integ.status === 'Example workflow'
                      ? 'bg-slate-900 text-cyan-300 border-cyan-500/30'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {integ.status}
                </span>
              </div>

              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                {integ.category}
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-sans group-hover:text-cyan-300 transition-colors">
                {integ.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                {integ.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  E2E Sandbox Encrypted
                </span>
                <span className="text-slate-400">BYOK / Local</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * External LLM API calls and direct repository synchronization require bringing your own configured provider credentials.
        </div>
      </div>
    </section>
  );
};

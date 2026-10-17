import React from 'react';
import { ECOSYSTEM_TOOLS } from '../data/sampleData';
import { Boxes, ShieldCheck } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Works with the tools you{' '}
            <span className="text-blue-600">already love.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Architected for modern fullstack standards without proprietary framework silos.
          </p>
        </div>

        {/* 6 Ecosystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all font-mono group hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                  {tool.category}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 font-sans group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                {tool.description}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Type-Safe Recipe
                </span>
                <span>Ready</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Ecosystem names and logos represent supported developer workflows and recipes. Actual production deployment requires a configured account with your chosen hosting provider.
        </div>
      </div>
    </section>
  );
};

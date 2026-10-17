import React from 'react';
import { ShieldCheck, Lock, Eye, FileCheck, CheckCircle2 } from 'lucide-react';
import { trustPrinciples } from '../data/sampleData';

export const TrustPrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>OPERATIONAL ETHICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on core privacy principles.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Privacy is an ongoing discipline of transparency, minimization, and accountable system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPrinciples.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-[#111827] border border-white/10 hover:border-teal-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1A253A] border border-white/10 flex items-center justify-center text-teal-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-teal-300">
                <span className="text-slate-500 block uppercase text-[9px]">Implementation:</span>
                {item.operationalPractice}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

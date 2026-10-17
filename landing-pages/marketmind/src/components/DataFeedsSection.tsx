import React from 'react';
import { Database, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { dataFeeds } from '../data/sampleData';

export const DataFeedsSection: React.FC = () => {
  return (
    <section id="feeds" className="py-20 md:py-28 bg-[#080C14] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1626] border border-amber-500/30 text-amber-400 text-xs">
            <span>FEED ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Institutional connectivity fabric.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Connect high-speed market feeds, regulatory disclosure pipelines, and macroeconomic databases via standardized protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dataFeeds.map((feed) => (
            <div
              key={feed.name}
              className="p-5 rounded-xl bg-[#0E1626] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded bg-[#17223B] text-amber-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    {feed.latency}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{feed.name}</h3>
                <span className="text-[10px] text-amber-400 block mb-2">{feed.protocol}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {feed.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{feed.category}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-[#0E1626] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Compatible with licensed market data feeds. Bring your own ICE, Refinitiv, or Nasdaq consolidated tape credentials.</span>
          </div>
          <span className="text-amber-400 font-mono flex items-center gap-1 cursor-pointer">
            Protocol Specs <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </section>
  );
};

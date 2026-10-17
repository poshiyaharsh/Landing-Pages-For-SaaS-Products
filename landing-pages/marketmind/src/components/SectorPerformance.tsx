import React from 'react';
import { TrendingUp, TrendingDown, Layers, ArrowUpRight } from 'lucide-react';
import { sectorPerformances } from '../data/sampleData';

export const SectorPerformance: React.FC = () => {
  return (
    <section id="sectors" className="py-20 md:py-28 bg-[#0B101D] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1626] border border-amber-500/30 text-amber-400 text-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>CAPITAL ROTATION SENTINEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cross-sector factor performance.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Track industry weightings, relative strength indexes, and factor momentum shifts in one unified view.
          </p>
        </div>

        {/* Sector Table */}
        <div className="rounded-xl border border-white/10 bg-[#0E1626] overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#141E33] border-b border-white/10 text-slate-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-5 py-3.5">Sector Basket</th>
                <th className="px-5 py-3.5">Net Performance</th>
                <th className="px-5 py-3.5">Benchmark Weight</th>
                <th className="px-5 py-3.5">Key Momentum Leaders</th>
                <th className="px-5 py-3.5 text-right">Factor Signal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {sectorPerformances.map((sec) => (
                <tr key={sec.sector} className="hover:bg-[#141E33]/60 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{sec.sector}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 font-bold ${
                        sec.isPositive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {sec.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {sec.change}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-400">{sec.weight}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-1.5">
                      {sec.leaders.map((lead) => (
                        <span key={lead} className="px-2 py-0.5 rounded bg-[#080C14] border border-white/10 text-[10px] text-amber-300">
                          {lead}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        sec.isPositive ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'
                      }`}
                    >
                      {sec.isPositive ? 'Accumulation' : 'Consolidation'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-slate-500 mt-4 text-center font-sans">
          Illustrative sector factor weights updated daily at market close.
        </p>
      </div>
    </section>
  );
};

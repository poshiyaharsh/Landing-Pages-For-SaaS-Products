import React from 'react';
import { Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { dataInventoryCatalog } from '../data/sampleData';

export const GovernanceRegister: React.FC = () => {
  return (
    <section id="inventory" className="py-20 md:py-28 bg-[#0B0F17] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase font-mono">
            <Database className="w-3.5 h-3.5" />
            <span>ARTICLE 30 RoPA INVENTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data categories & processing register.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Maintain an automated map of your systems of record, statutory retention windows, and processing purposes.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827] overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#172236] border-b border-white/10 text-slate-400 uppercase text-[10px] font-mono tracking-wider">
              <tr>
                <th className="px-5 py-4">Data Category</th>
                <th className="px-5 py-4">Permitted Processing Purposes</th>
                <th className="px-5 py-4">Systems of Record</th>
                <th className="px-5 py-4">Retention Window</th>
                <th className="px-5 py-4 text-right">Sensitivity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {dataInventoryCatalog.map((item) => (
                <tr key={item.category} className="hover:bg-[#1A253A]/60 transition-colors">
                  <td className="px-5 py-4 font-bold text-white font-mono">{item.category}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {item.purposes.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded bg-[#0B0F17] border border-white/5 text-[10px] text-teal-300">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 font-mono text-slate-400">
                    {item.systemsOfRecord.join(' • ')}
                  </td>
                  <td className="px-5 py-4 font-mono text-slate-300">{item.retentionWindow}</td>
                  <td className="px-5 py-4 text-right font-mono">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.isSensitive
                          ? 'bg-rose-950 text-rose-300 border border-rose-800/40'
                          : 'bg-teal-950 text-teal-300 border border-teal-800/40'
                      }`}
                    >
                      {item.isSensitive ? 'Restricted' : 'Internal'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

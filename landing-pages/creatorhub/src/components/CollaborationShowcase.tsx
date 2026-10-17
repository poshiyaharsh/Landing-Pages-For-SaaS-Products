import React from 'react';
import { DollarSign, CheckCircle2, Calendar, FileText, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { sampleCampaigns } from '../data/sampleData';

export const CollaborationShowcase: React.FC = () => {
  return (
    <section id="collaborations" className="py-20 md:py-28 bg-[#0F0C1B] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <span>SPONSORSHIP OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Turn brand deals into recurring income.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Never lose an invoice, miss a contract deliverable, or underprice your integration slots again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleCampaigns.map((camp) => (
            <div
              key={camp.id}
              className="p-6 rounded-3xl bg-[#151025] border border-white/10 flex flex-col justify-between hover:border-pink-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-pink-400 px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    {camp.status}
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-400">
                    {camp.payout}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{camp.brand}</h3>
                <p className="text-xs text-slate-300 mb-4">{camp.deliverable}</p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                    Deliverable Checklist ({camp.tasks.filter((t) => t.completed).length}/{camp.tasks.length})
                  </span>
                  {camp.tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          task.completed ? 'text-pink-400' : 'text-slate-600'
                        }`}
                      />
                      <span className={task.completed ? 'text-slate-300' : 'text-slate-500'}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-pink-400" /> Deadline: {camp.dueDate}
                </span>
                <span className="text-pink-400 flex items-center gap-0.5 hover:underline cursor-pointer">
                  Media Kit <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-[#140F22] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built-in Rate Card Engine automatically factors in 30-day rolling view benchmarks and CPM standard tiers.</span>
          </div>
          <span className="text-pink-400">Illustrative Sponsor Records Demo</span>
        </div>
      </div>
    </section>
  );
};

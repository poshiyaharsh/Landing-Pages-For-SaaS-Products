import React from 'react';
import { TESTIMONIALS_DATA as SAMPLE_TESTIMONIALS } from '../data/voiceflowData.ts';
import { Quote, Sparkles, Building2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1320]/60 border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>EDITORIAL VOICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Conversations, made more useful.
          </h2>
          <p className="text-secondary max-w-2xl text-base sm:text-lg">
            Engineering leaders, research teams, and product architects share how VoiceFlow AI clarifies conversational ambiguity into concrete operational velocity.
          </p>
        </div>

        {/* Testimonials 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SAMPLE_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#131A28] border border-border-subtle hover:border-violet-500/30 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_30px_rgba(136,117,255,0.06)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-[#0E1320] border border-border-subtle flex items-center justify-center text-violet-400 group-hover:text-cyan-400 transition-colors">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-secondary/60 bg-[#0E1320] px-2 py-0.5 rounded border border-border-subtle">
                    {t.metric}
                  </span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-border-subtle/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-violet-500/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {t.author}
                  </h4>
                  <div className="text-xs text-secondary flex items-center gap-1.5 mt-0.5">
                    <span>{t.role}</span>
                    <span className="text-border-subtle">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Building2 className="w-3 h-3 text-secondary/70" />
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Prototype Disclaimer */}
        <p className="text-center text-xs font-mono text-secondary/50">
          * Illustrative feedback scenarios synthesized from product beta preview programs. Representative prototypes do not constitute certified enterprise endorsements.
        </p>
      </div>
    </section>
  );
};

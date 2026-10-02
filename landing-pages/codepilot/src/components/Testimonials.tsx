import React from 'react';
import { TESTIMONIALS } from '../data/codepilotData';
import { Quote, Terminal, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#07080A] border-t border-codepilot-border" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Tested in production by engineers.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            How engineering leads and senior contributors ship faster with zero compromise on quality.
          </p>
        </div>

        {/* 3 Minimal Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              className="p-6 sm:p-8 rounded-2xl bg-codepilot-panel border border-codepilot-border hover:border-brand-green/30 transition-all flex flex-col justify-between shadow-card-subtle"
            >
              <div>
                <Quote className="w-6 h-6 text-brand-green/40 mb-4" />
                <p className="text-sm sm:text-base text-codepilot-text leading-relaxed mb-6 font-sans">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-codepilot-border/60">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-codepilot-surface border border-brand-green/30 flex items-center justify-center font-mono font-bold text-xs text-brand-green">
                    {item.avatarText}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-codepilot-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-codepilot-dim font-mono">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-green bg-brand-green/5 px-2.5 py-1 rounded border border-brand-green/20 mt-3">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" />
                  <span>{item.verifiedMetric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

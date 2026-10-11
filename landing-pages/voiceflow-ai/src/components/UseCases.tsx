import React from 'react';
import { 
  Headphones, 
  TrendingUp, 
  Users, 
  Bot, 
  Search, 
  PhoneCall, 
  ArrowRight,
  Check 
} from 'lucide-react';
import { USE_CASES_DATA } from '../data/voiceflowData';

interface UseCasesProps {
  onStartBuilding: () => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onStartBuilding }) => {
  const icons = [
    Headphones,
    TrendingUp,
    Users,
    Bot,
    Search,
    PhoneCall,
  ];

  return (
    <section className="py-24 sm:py-36 bg-vf-bg-secondary border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            INDUSTRY SOLUTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Voice intelligence for every conversation.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            From high-volume contact center queues to user research interview analysis, discover how teams extract value from spoken audio.
          </p>
        </div>

        {/* 6 Use Case Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES_DATA.map((uc, idx) => {
            const Icon = icons[idx] || Bot;
            return (
              <div
                key={uc.id}
                className="p-8 rounded-2xl border border-vf-border/80 bg-vf-surface/40 hover:bg-vf-surface hover:border-vf-cyan/50 transition-all duration-300 flex flex-col justify-between shadow-subtle group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-vf-border/40">
                    <div className="w-10 h-10 rounded-xl bg-vf-bg border border-vf-border flex items-center justify-center text-vf-cyan group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-vf-cyan px-2 py-0.5 rounded bg-vf-cyan/10 border border-vf-cyan/30">
                      Solution {idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase text-vf-text-muted tracking-wider block mb-1">
                    {uc.subtitle}
                  </span>

                  <h3 className="font-display text-xl font-bold text-vf-text group-hover:text-vf-cyan transition-colors mb-3">
                    {uc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-vf-text-muted leading-relaxed font-sans mb-6">
                    {uc.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {uc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-vf-text">
                        <Check className="w-3.5 h-3.5 text-vf-green flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-vf-border/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-vf-cyan font-bold">{uc.metrics}</span>
                  <button
                    onClick={onStartBuilding}
                    className="text-vf-text-muted group-hover:text-vf-text transition-colors flex items-center gap-1"
                  >
                    <span>Deploy</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Mic, Volume2, Activity, Brain, Users, Globe2 } from 'lucide-react';
import { CAPABILITIES_LIST } from '../data/voiceflowData';

export const CapabilityStrip: React.FC = () => {
  const capabilityIcons = [
    Mic,
    Volume2,
    Activity,
    Brain,
    Users,
    Globe2,
  ];

  return (
    <section className="py-16 bg-vf-bg-secondary border-y border-vf-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan">
            ONE PLATFORM. EVERY VOICE WORKFLOW.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CAPABILITIES_LIST.map((item, idx) => {
            const Icon = capabilityIcons[idx] || Activity;
            return (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-vf-border/60 bg-vf-surface/40 hover:bg-vf-surface hover:border-vf-cyan/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-vf-surface-elevated border border-vf-border flex items-center justify-center text-vf-cyan mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-vf-text group-hover:text-vf-cyan transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-vf-text-muted mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-vf-border/40 text-[9px] font-mono text-vf-text-muted/70 uppercase">
                  Engine Ready
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

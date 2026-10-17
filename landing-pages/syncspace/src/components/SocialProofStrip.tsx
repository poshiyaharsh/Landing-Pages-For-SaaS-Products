import React from 'react';
import { Users, Sparkles, Layers, Cpu, Compass, Globe } from 'lucide-react';

export const SocialProofStrip: React.FC = () => {
  const teamCategories = [
    { label: 'Product & Design Squads', detail: 'Figma specs & sprint boards' },
    { label: 'Engineering Teams', detail: 'GitHub PR sync & architecture docs' },
    { label: 'Growth & Marketing', detail: 'Launch campaigns & asset pipelines' },
    { label: 'Distributed Organizations', detail: 'Async decision records & timezone presence' },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">
            BUILT FOR THE WAY MODERN TEAMS WORK
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] text-center space-y-1 hover:border-[#4F46E5]/40 transition-colors"
            >
              <div className="text-xs font-bold text-[#0F172A] font-display">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

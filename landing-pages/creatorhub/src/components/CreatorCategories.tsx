import React, { useState } from 'react';
import { creatorCategories } from '../data/sampleData';
import { Video, CheckCircle2, ArrowRight } from 'lucide-react';

export const CreatorCategories: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const currentCat = creatorCategories[activeCategoryIndex];

  return (
    <section id="categories" className="py-20 md:py-28 bg-[#0B0A10] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <span>BUILT FOR YOUR FORMAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Tailored to how you create.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Whether you edit 4K cinematic YouTube essays, write weekly Substack newsletters, or stream live on Twitch.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {creatorCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-400 shadow-lg shadow-pink-500/20'
                  : 'bg-[#151025] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Category Showcase */}
        <div className="rounded-3xl bg-[#140F24] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-lg bg-pink-500/15 border border-pink-500/30 font-mono text-xs text-pink-300 font-bold">
                {currentCat.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug font-display">
                {currentCat.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentCat.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Distribution Channels:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCat.channels.map((ch) => (
                    <span
                      key={ch}
                      className="px-3 py-1.5 rounded-lg bg-[#1F1735] border border-white/10 text-xs text-white font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Illustrative preview card */}
            <div className="p-6 rounded-2xl bg-[#0B0A10] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-slate-400">Sample Production Pipeline</span>
                <span className="text-pink-400">Optimized Loop</span>
              </div>
              <div className="p-4 rounded-xl bg-[#181229] border border-white/5 space-y-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Monetization Engine</span>
                <p className="text-sm font-bold text-white">{currentCat.primaryMonetization}</p>
                <div className="pt-2 border-t border-white/5 text-xs text-pink-300 font-mono">
                  {currentCat.sampleWorkflow}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Pre-configured workspace template included with CreatorHub Pro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

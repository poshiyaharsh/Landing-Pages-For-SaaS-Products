import React, { useState } from 'react';
import { Sparkles, Wand2, RefreshCw, Layers, Check } from 'lucide-react';
import { COPILOT_DIRECTIONS } from '../data/pixelforgeData';
import { triggerCreativeBurst } from '../utils/confetti';

export const AIAssistant: React.FC = () => {
  const [selectedDirection, setSelectedDirection] = useState('c-1');
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleAction = (actionName: string) => {
    setActionFeedback(`Executed: ${actionName} for selected direction.`);
    triggerCreativeBurst();
    setTimeout(() => setActionFeedback(null), 3500);
  };

  return (
    <section id="ai-assistant" className="py-24 md:py-32 relative bg-studio-950/60 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTEXT-AWARE COGNITIVE ASSISTANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Meet your creative copilot.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            PixelForge acts as an intelligent amplifier for your creative intuition. It suggests high-level art directions, checks brand compliance, and handles tedious pixel work without replacing your taste.
          </p>
        </div>

        {/* AI Assistant Chat & Output Interface */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-studio-900/90 border border-studio-border/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-studio-950 border-b border-studio-border flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-white font-bold tracking-wider">PIXELFORGE COPILOT // ACTIVE CONVERSATION</span>
            </div>
            <span className="text-studio-muted text-[11px]">Model: Creative-Sentinel-4K</span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Conversation Turn 1: USER */}
            <div className="flex items-start gap-3 max-w-2xl">
              <div className="w-8 h-8 rounded-full bg-studio-800 border border-studio-border flex items-center justify-center font-mono text-xs font-bold text-white shrink-0">
                U
              </div>
              <div className="p-4 rounded-2xl rounded-tl-none bg-studio-850 border border-studio-border text-sm text-white space-y-1 font-mono">
                <span className="text-[10px] text-studio-subtle block uppercase">Creative Brief</span>
                <p>“Create a bold visual identity for a futuristic coffee brand.”</p>
              </div>
            </div>

            {/* Conversation Turn 2: PIXELFORGE */}
            <div className="flex items-start gap-3 max-w-3xl ml-auto flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-neon-violet/20 border border-neon-violet/40 flex items-center justify-center font-mono text-xs font-bold text-neon-violet shrink-0">
                PF
              </div>
              <div className="p-4 rounded-2xl rounded-tr-none bg-studio-950 border border-neon-violet/30 text-sm text-studio-text space-y-1 font-mono text-right">
                <span className="text-[10px] text-neon-cyan block uppercase">Copilot Response</span>
                <p>“Here are 4 creative directions calibrated to your moodboard, typography scale, and packaging parameters.”</p>
              </div>
            </div>

            {/* Feedback notification if action clicked */}
            {actionFeedback && (
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-xs font-mono text-neon-cyan flex items-center justify-between animate-in fade-in duration-200">
                <span>{actionFeedback}</span>
                <Check className="w-4 h-4" />
              </div>
            )}

            {/* 4 Generated Directions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {COPILOT_DIRECTIONS.map((dir) => {
                const isSelected = selectedDirection === dir.id;
                return (
                  <div
                    key={dir.id}
                    onClick={() => setSelectedDirection(dir.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'bg-studio-950 border-2 border-neon-cyan shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                        : 'bg-studio-950/60 border border-studio-border hover:border-studio-subtle'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm text-white">{dir.name}</span>
                        {isSelected && <span className="text-[10px] font-mono text-neon-cyan font-bold">ACTIVE</span>}
                      </div>
                      <p className="text-xs text-studio-muted mb-3 font-mono leading-relaxed">{dir.mood}</p>

                      {/* Color Palette Swatches */}
                      <div className="flex items-center gap-1.5 mb-3">
                        {dir.colors.map((c, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-md border border-white/20"
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </div>

                      <div className="text-[11px] font-mono text-studio-subtle space-y-1">
                        <div>Type: <span className="text-slate-300">{dir.typography}</span></div>
                        <div className="text-[10px]">{dir.composition}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-studio-border text-center">
                      <span className="text-[11px] font-mono text-neon-violet">
                        {isSelected ? 'Selected for Refinement' : 'Click to Select'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-studio-border/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="text-studio-muted">
                Action for selected concept:
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  onClick={() => handleAction('Refine Composition')}
                  className="px-4 py-2 rounded-lg bg-studio-800 hover:bg-studio-750 text-white border border-studio-border transition-colors flex items-center gap-1.5"
                >
                  <Wand2 className="w-3.5 h-3.5 text-neon-violet" />
                  <span>Refine</span>
                </button>

                <button
                  onClick={() => handleAction('Generate Variations')}
                  className="px-4 py-2 rounded-lg bg-studio-800 hover:bg-studio-750 text-white border border-studio-border transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>Generate Variations</span>
                </button>

                <button
                  onClick={() => handleAction('Apply Brand System')}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-violet to-neon-cyan hover:opacity-90 text-white font-semibold shadow-md shadow-neon-violet/20 transition-all flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Apply Brand System</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

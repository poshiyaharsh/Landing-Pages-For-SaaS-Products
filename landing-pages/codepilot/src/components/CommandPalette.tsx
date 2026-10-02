import React, { useState } from 'react';
import { COMMANDS } from '../data/codepilotData';
import {
  Command as CommandIcon,
  Search,
  Terminal,
  CornerDownLeft
} from 'lucide-react';
import { CommandItem } from '../types';

export const CommandPalette: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommand, setSelectedCommand] = useState<CommandItem>(COMMANDS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'quality' | 'git' | 'core'>('all');

  const filteredCommands = COMMANDS.filter((cmd) => {
    const matchesSearch =
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || cmd.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="py-20 lg:py-28 relative bg-[#07080A] border-t border-codepilot-border" id="command-palette">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-mono mb-4">
            <CommandIcon className="w-3.5 h-3.5" />
            <span>INSTANT KEYBOARD CONTROL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Everything is one command away.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Trigger deep AST analysis, automated refactoring, and PR creation without taking your fingers off the home row.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-codepilot-dim">
            <span>Press</span>
            <kbd className="px-2 py-1 rounded bg-codepilot-panel border border-codepilot-border text-brand-green font-bold shadow-sm">
              ⌘ K
            </kbd>
            <span>or</span>
            <kbd className="px-2 py-1 rounded bg-codepilot-panel border border-codepilot-border text-brand-cyan font-bold shadow-sm">
              Ctrl + K
            </kbd>
            <span>from any screen</span>
          </div>
        </div>

        {/* Command Palette Interactive Box */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-codepilot-border bg-codepilot-panel shadow-terminal overflow-hidden">
          {/* Top Search Input Bar */}
          <div className="p-4 sm:p-5 bg-codepilot-bg border-b border-codepilot-border flex items-center gap-3">
            <Search className="w-5 h-5 text-brand-green shrink-0" />
            <div className="flex-1 flex items-center gap-2">
              <span className="text-brand-green font-mono text-sm">&gt;</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask CodePilot or type a / command..."
                className="w-full bg-transparent text-sm sm:text-base font-mono text-codepilot-white placeholder:text-codepilot-dim focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-codepilot-surface border border-codepilot-border text-codepilot-dim hidden sm:inline">
                ESC to clear
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="px-4 py-2 bg-codepilot-panel/60 border-b border-codepilot-border flex items-center gap-2 text-xs font-mono overflow-x-auto">
            {(['all', 'ai', 'quality', 'git', 'core'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-green/20 text-brand-green border border-brand-green/40'
                    : 'text-codepilot-dim hover:text-codepilot-muted hover:bg-white/[0.03]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Commands List */}
          <div className="divide-y divide-codepilot-border/60 max-h-80 overflow-y-auto font-mono text-xs">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((item) => {
                const isSelected = selectedCommand.command === item.command;
                return (
                  <button
                    key={item.command}
                    onClick={() => setSelectedCommand(item)}
                    className={`w-full p-4 flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? 'bg-brand-green/10 text-codepilot-white'
                        : 'hover:bg-codepilot-surface/70 text-codepilot-muted'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-brand-green text-codepilot-bg shadow-glow-green'
                            : 'bg-codepilot-surface text-codepilot-dim border border-codepilot-border'
                        }`}
                      >
                        /
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-bold text-sm ${
                              isSelected ? 'text-brand-green' : 'text-codepilot-text'
                            }`}
                          >
                            {item.command}
                          </span>
                          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-codepilot-surface text-codepilot-dim border border-codepilot-border">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-codepilot-dim mt-0.5 max-w-lg truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.keybinding && (
                        <kbd className="px-2 py-0.5 rounded bg-codepilot-surface border border-codepilot-border text-[10px] text-codepilot-muted font-mono hidden sm:inline">
                          {item.keybinding}
                        </kbd>
                      )}
                      <CornerDownLeft
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-brand-green translate-x-0.5' : 'text-codepilot-dim'
                        }`}
                      />
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-codepilot-dim">
                No matching commands found for "{searchQuery}". Try /explain, /ship, or /test.
              </div>
            )}
          </div>

          {/* Bottom Selected Command Output Simulator */}
          <div className="p-4 sm:p-5 bg-[#060709] border-t border-codepilot-border font-mono text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-codepilot-dim text-[11px] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Simulated Output for {selectedCommand.command}</span>
              </span>
              <span className="text-[10px] text-brand-green font-bold">Live Execution Engine</span>
            </div>

            <div className="p-3 rounded-lg bg-codepilot-panel border border-codepilot-border text-codepilot-text leading-relaxed">
              <div className="text-brand-cyan font-bold mb-1">$ codepilot {selectedCommand.command.replace('/', '')}</div>
              <p className="text-xs text-brand-green">{selectedCommand.sampleOutput}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

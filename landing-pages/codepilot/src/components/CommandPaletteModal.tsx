import React, { useState, useEffect } from 'react';
import { COMMANDS } from '../data/codepilotData';
import { Command, X, ArrowRight, CornerDownLeft, Terminal } from 'lucide-react';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          onSelectAction('toggle-open');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectAction]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'Go to Hero & Workspace', href: '#product' },
    { label: 'Explore Features', href: '#features' },
    { label: 'Open Code Editor Showcase', href: '#editor-showcase' },
    { label: 'Inspect AI Code Review (PR #248)', href: '#code-review' },
    { label: 'View 4-Step Shipping Workflow', href: '#workflow' },
    { label: 'Browse Integrations (GitHub, VS Code)', href: '#integrations' },
    { label: 'Check Supported Languages & Frameworks', href: '#technologies' },
    { label: 'Read Security Architecture', href: '#security' },
    { label: 'Compare Pricing Tiers', href: '#pricing' },
    { label: 'Read Frequently Asked Questions', href: '#faq' },
  ];

  const filteredCommands = COMMANDS.filter(c =>
    c.command.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNav = quickNav.filter(n =>
    n.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl rounded-2xl border border-brand-green/40 bg-codepilot-panel shadow-terminal overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="p-4 bg-codepilot-bg border-b border-codepilot-border flex items-center gap-3">
          <Command className="w-5 h-5 text-brand-green" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or navigate to a section..."
            autoFocus
            className="w-full bg-transparent text-sm font-mono text-codepilot-white placeholder:text-codepilot-dim focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-codepilot-surface text-codepilot-dim hover:text-codepilot-text transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 font-mono text-xs">
          {/* Section Navigation */}
          {filteredNav.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-codepilot-dim font-bold px-2 mb-1.5">
                Quick Navigation
              </div>
              <div className="space-y-1">
                {filteredNav.map((nav) => (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-codepilot-surface text-codepilot-text hover:text-brand-green transition-colors"
                  >
                    <span>{nav.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Developer Commands */}
          {filteredCommands.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-brand-cyan font-bold px-2 mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>CodePilot Commands</span>
              </div>
              <div className="space-y-1">
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.command}
                    onClick={() => {
                      onClose();
                      const el = document.getElementById('command-palette');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-brand-green/10 text-left transition-colors text-codepilot-text"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-brand-green">{cmd.command}</span>
                      <span className="text-codepilot-dim text-[11px] truncate max-w-sm">
                        {cmd.description}
                      </span>
                    </div>
                    <CornerDownLeft className="w-3.5 h-3.5 text-codepilot-dim shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#060709] border-t border-codepilot-border flex items-center justify-between text-[11px] font-mono text-codepilot-dim">
          <span>Navigate with arrows or click</span>
          <kbd className="px-2 py-0.5 rounded bg-codepilot-surface border border-codepilot-border text-codepilot-muted">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
};

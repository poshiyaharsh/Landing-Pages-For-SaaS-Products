import React, { useState, useEffect } from 'react';
import {
  FileCode,
  FolderTree,
  GitBranch,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Terminal as TerminalIcon,
  Check,
  X,
  Layers
} from 'lucide-react';

export const HeroWorkspace: React.FC = () => {
  const [activeFile, setActiveFile] = useState<'invoice' | 'auth' | 'types'>('invoice');
  const [suggestionState, setSuggestionState] = useState<'pending' | 'applied' | 'dismissed'>('pending');
  const [isDiffMode, setIsDiffMode] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [isRunningTerminal, setIsRunningTerminal] = useState(false);

  // Terminal animation steps
  const terminalLines = [
    { text: '$ codepilot analyze ./src', type: 'cmd' },
    { text: '✓ Scanned 128 files in 140ms', type: 'success' },
    { text: '✓ Found 3 optimization opportunities', type: 'info' },
    { text: '✓ Detected 2 potential bugs (1 edge-case array handling)', type: 'warn' },
    { text: '✓ Tests passed: 184/184 assertions', type: 'success' },
    { text: '$ codepilot ship', type: 'cmd' },
    { text: '✓ Build successful (Vite bundle: 42kb gzip)', type: 'success' },
    { text: '✓ Tests passed: 184/184', type: 'success' },
    { text: '✓ Changes committed: 4 files (+42, -18)', type: 'success' },
    { text: '✓ Pull request ready: https://github.com/org/repo/pull/248', type: 'highlight' },
  ];

  useEffect(() => {
    // Automatically reveal terminal lines sequentially
    const interval = setInterval(() => {
      setTerminalStep((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const handleRerunTerminal = () => {
    setIsRunningTerminal(true);
    setTerminalStep(0);
    setTimeout(() => {
      setIsRunningTerminal(false);
    }, terminalLines.length * 600);
  };

  return (
    <div className="w-full rounded-xl border border-codepilot-border bg-codepilot-panel shadow-terminal overflow-hidden transition-all duration-300 hover:border-codepilot-border-highlight">
      {/* Top IDE Window Header */}
      <div className="h-10 px-4 bg-codepilot-bg border-b border-codepilot-border flex items-center justify-between select-none">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80 hover:bg-[#EF4444] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80 hover:bg-[#F59E0B] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#00F59B]/80 hover:bg-[#00F59B] transition-colors" />
          <span className="ml-3 text-xs font-mono text-codepilot-dim hidden sm:inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            codepilot-workspace — main*
          </span>
        </div>

        {/* Center active path */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded bg-codepilot-panel/60 border border-codepilot-border text-xs font-mono text-codepilot-muted">
          <span>src</span>
          <span className="text-codepilot-dim">/</span>
          <span>services</span>
          <span className="text-codepilot-dim">/</span>
          <span className="text-codepilot-text font-semibold">
            {activeFile === 'invoice'
              ? 'invoice.service.ts'
              : activeFile === 'auth'
              ? 'auth.middleware.ts'
              : 'invoice.types.ts'}
          </span>
        </div>

        {/* Git & Status info */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-brand-green bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">
            <GitBranch className="w-3 h-3" />
            <span>feat/smart-billing</span>
            <span className="text-codepilot-dim font-sans ml-1 text-[10px]">+2 ~1</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-codepilot-muted">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[11px]">184 passed</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Body: File Tree + Code Editor + AI suggestion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left: File Explorer (3 cols on lg) */}
        <div className="hidden lg:block lg:col-span-3 bg-codepilot-panel border-r border-codepilot-border p-3 font-mono text-xs select-none">
          <div className="flex items-center justify-between text-codepilot-dim uppercase tracking-wider text-[10px] font-bold pb-2 border-b border-codepilot-border/60 mb-2">
            <span className="flex items-center gap-1.5">
              <FolderTree className="w-3.5 h-3.5 text-brand-green" />
              Explorer
            </span>
            <span className="text-[9px] px-1 rounded bg-codepilot-surface text-codepilot-muted">REPO</span>
          </div>

          <div className="space-y-1 text-codepilot-muted">
            <div className="text-codepilot-dim flex items-center gap-1 py-1">
              <ChevronRight className="w-3 h-3 text-codepilot-dim rotate-90 transition-transform" />
              <span>src</span>
            </div>

            <div className="pl-4 space-y-1">
              <div className="text-codepilot-dim flex items-center gap-1 py-0.5">
                <ChevronRight className="w-3 h-3 text-codepilot-dim rotate-90" />
                <span>services</span>
              </div>

              <div className="pl-3 space-y-1">
                <button
                  onClick={() => {
                    setActiveFile('invoice');
                    setIsDiffMode(false);
                  }}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded transition-colors text-left ${
                    activeFile === 'invoice'
                      ? 'bg-brand-green/10 text-brand-green font-medium border border-brand-green/20'
                      : 'hover:bg-codepilot-surface hover:text-codepilot-text'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <FileCode className="w-3.5 h-3.5 text-brand-cyan" />
                    invoice.service.ts
                  </span>
                  <span className="text-[9px] px-1 rounded bg-brand-green/20 text-brand-green">M</span>
                </button>

                <button
                  onClick={() => {
                    setActiveFile('auth');
                    setIsDiffMode(false);
                  }}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded transition-colors text-left ${
                    activeFile === 'auth'
                      ? 'bg-brand-green/10 text-brand-green font-medium border border-brand-green/20'
                      : 'hover:bg-codepilot-surface hover:text-codepilot-text'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <FileCode className="w-3.5 h-3.5 text-brand-purple" />
                    auth.middleware.ts
                  </span>
                  <span className="text-[9px] px-1 rounded bg-brand-cyan/20 text-brand-cyan">U</span>
                </button>

                <button
                  onClick={() => {
                    setActiveFile('types');
                    setIsDiffMode(false);
                  }}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded transition-colors text-left ${
                    activeFile === 'types'
                      ? 'bg-brand-green/10 text-brand-green font-medium border border-brand-green/20'
                      : 'hover:bg-codepilot-surface hover:text-codepilot-text'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <FileCode className="w-3.5 h-3.5 text-codepilot-muted" />
                    invoice.types.ts
                  </span>
                </button>
              </div>

              <div className="text-codepilot-dim flex items-center gap-1 py-0.5">
                <ChevronRight className="w-3 h-3 text-codepilot-dim" />
                <span>routes</span>
              </div>
              <div className="text-codepilot-dim flex items-center gap-1 py-0.5">
                <ChevronRight className="w-3 h-3 text-codepilot-dim" />
                <span>tests</span>
              </div>
            </div>
          </div>

          {/* Git Changes Box */}
          <div className="mt-8 p-2.5 rounded bg-codepilot-surface/70 border border-codepilot-border text-[11px]">
            <div className="flex items-center justify-between mb-1.5 text-codepilot-text font-semibold">
              <span className="flex items-center gap-1 text-brand-green">
                <Sparkles className="w-3 h-3" />
                AI Context Engine
              </span>
              <span className="text-[9px] text-codepilot-dim">AST Active</span>
            </div>
            <p className="text-[10px] text-codepilot-dim leading-relaxed">
              Indexing 128 repo files. Vector tokens cached. Ready for multi-turn assistance.
            </p>
          </div>
        </div>

        {/* Center & Right: Code Editor & AI Panel (9 cols on lg) */}
        <div className="lg:col-span-9 bg-codepilot-bg flex flex-col justify-between">
          {/* Editor Tabs */}
          <div className="flex items-center justify-between bg-codepilot-panel/90 border-b border-codepilot-border px-3 py-1.5">
            <div className="flex items-center gap-1">
              <div className="px-3 py-1 bg-codepilot-bg border-t-2 border-brand-green text-xs font-mono text-codepilot-text flex items-center gap-2 rounded-t">
                <FileCode className="w-3 h-3 text-brand-green" />
                <span>{activeFile === 'invoice' ? 'invoice.service.ts' : activeFile === 'auth' ? 'auth.middleware.ts' : 'invoice.types.ts'}</span>
                <span className="text-[10px] text-brand-green">●</span>
              </div>

              <button
                onClick={() => setIsDiffMode(!isDiffMode)}
                className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 transition-colors ${
                  isDiffMode
                    ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                    : 'text-codepilot-dim hover:text-codepilot-muted'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Diff View</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-codepilot-dim">
              <span>TypeScript 5.7</span>
              <span>UTF-8</span>
              <span className="hidden sm:inline">Ln 14, Col 22</span>
            </div>
          </div>

          {/* Code Lines with Syntax Highlighting */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed relative">
            {activeFile === 'invoice' && (
              <div className="space-y-1">
                <div className="flex text-codepilot-dim">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">01</span>
                  <span className="text-brand-purple">import</span>{' '}
                  <span className="text-brand-cyan">type</span> &#123;{' '}
                  <span className="text-brand-cyan">InvoiceItem</span>,{' '}
                  <span className="text-brand-cyan">BillingResult</span> &#125;{' '}
                  <span className="text-brand-purple">from</span>{' '}
                  <span className="text-brand-green">'./invoice.types'</span>;
                </div>

                <div className="flex text-codepilot-dim">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">02</span>
                </div>

                <div className="flex text-codepilot-dim">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">03</span>
                  <span className="text-codepilot-dim">// Calculates item subtotal with defensive zero bounds</span>
                </div>

                {suggestionState === 'applied' ? (
                  <>
                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">04</span>
                      <span>
                        <span className="text-brand-purple">export function</span>{' '}
                        <span className="text-brand-cyan font-semibold">calculateInvoice</span>
                        (items: <span className="text-brand-cyan">InvoiceItem</span>[] = []):{' '}
                        <span className="text-brand-cyan">number</span> &#123;
                      </span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">05</span>
                      <span className="pl-4">
                        <span className="text-brand-purple">if</span> (!<span className="text-brand-cyan">Array</span>.isArray(items) || items.length === 0) &#123;
                      </span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">06</span>
                      <span className="pl-8 text-brand-purple">return</span>{' '}
                      <span className="text-brand-amber">0</span>;
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">07</span>
                      <span className="pl-4">&#125;</span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">08</span>
                      <span className="pl-4">
                        <span className="text-brand-purple">return</span> items.reduce((total, item) =&gt; &#123;
                      </span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">09</span>
                      <span className="pl-8">
                        <span className="text-brand-purple">const</span> price = Math.max(0, Number(item?.price) || 0);
                      </span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">10</span>
                      <span className="pl-8">
                        <span className="text-brand-purple">const</span> quantity = Math.max(0, Math.floor(Number(item?.quantity) || 0));
                      </span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">11</span>
                      <span className="pl-8 text-brand-purple">return</span> total + price * quantity;
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">12</span>
                      <span className="pl-4">&#125;, 0);</span>
                    </div>

                    <div className="flex bg-brand-green/5 border-l-2 border-brand-green pl-1">
                      <span className="w-8 select-none text-right pr-4 text-brand-green">13</span>
                      <span>&#125;</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex text-codepilot-text">
                      <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">04</span>
                      <span>
                        <span className="text-brand-purple">function</span>{' '}
                        <span className="text-brand-cyan font-semibold">calculateInvoice</span>
                        (items) &#123;
                      </span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">05</span>
                      <span className="pl-4">
                        <span className="text-brand-purple">return</span> items.reduce((total, item) =&gt; &#123;
                      </span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">06</span>
                      <span className="pl-8">
                        <span className="text-brand-purple">return</span> total + item.price * item.quantity;
                      </span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">07</span>
                      <span className="pl-4">&#125;, <span className="text-brand-amber">0</span>);</span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">08</span>
                      <span>&#125;</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeFile === 'auth' && (
              <div className="space-y-1">
                <div className="flex text-codepilot-dim">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">01</span>
                  <span className="text-brand-purple">import</span> jwt <span className="text-brand-purple">from</span> <span className="text-brand-green">'jsonwebtoken'</span>;
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">02</span>
                  <span><span className="text-brand-purple">export async function</span> <span className="text-brand-cyan">verifyAuthToken</span>(req, res, next) &#123;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">03</span>
                  <span className="pl-4"><span className="text-brand-purple">const</span> authHeader = req.headers.authorization;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">04</span>
                  <span className="pl-4"><span className="text-brand-purple">if</span> (!authHeader?.startsWith('Bearer ')) &#123;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">05</span>
                  <span className="pl-8 text-brand-purple">return res.status(401).json(&#123; error: 'Missing token' &#125;);</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">06</span>
                  <span className="pl-4">&#125;</span>
                </div>
              </div>
            )}

            {activeFile === 'types' && (
              <div className="space-y-1">
                <div className="flex text-codepilot-dim">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">01</span>
                  <span className="text-brand-purple">export interface</span> <span className="text-brand-cyan">InvoiceItem</span> &#123;
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">02</span>
                  <span className="pl-4">id: <span className="text-brand-cyan">string</span>;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">03</span>
                  <span className="pl-4">price: <span className="text-brand-cyan">number</span>;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">04</span>
                  <span className="pl-4">quantity: <span className="text-brand-cyan">number</span>;</span>
                </div>
                <div className="flex text-codepilot-text">
                  <span className="w-8 select-none text-right pr-4 text-codepilot-border-highlight">05</span>
                  <span>&#125;</span>
                </div>
              </div>
            )}

            {/* CodePilot Suggestion Box */}
            {suggestionState === 'pending' && activeFile === 'invoice' && (
              <div className="mt-4 p-3.5 rounded-lg border border-brand-green/40 bg-codepilot-panel/90 backdrop-blur-md shadow-glow-green animate-fadeIn">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-codepilot-border">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-brand-green/20 text-brand-green flex items-center justify-center font-mono text-xs font-bold">
                      &gt;_
                    </span>
                    <span className="text-xs font-semibold text-brand-green">
                      CodePilot Suggestion
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                      Defensive Guard
                    </span>
                  </div>
                  <span className="text-[10px] text-codepilot-dim font-mono">
                    Impact: High · Prevents runtime TypeError
                  </span>
                </div>

                <p className="text-xs text-codepilot-text mb-3 leading-relaxed">
                  “Add input validation and handle empty item arrays. Guard against unvalidated payload properties.”
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSuggestionState('applied')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-green text-codepilot-bg hover:bg-[#15f8a3] text-xs font-semibold font-mono transition-colors shadow-glow-green"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply Fix</span>
                  </button>

                  <button
                    onClick={() => setIsDiffMode(true)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded border border-codepilot-border bg-codepilot-surface hover:bg-codepilot-hover text-codepilot-text text-xs font-mono transition-colors"
                  >
                    <span>Review Diff</span>
                  </button>

                  <button
                    onClick={() => setSuggestionState('dismissed')}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-codepilot-surface text-codepilot-dim hover:text-codepilot-muted text-xs font-mono transition-colors"
                  >
                    <X className="w-3 h-3" />
                    <span>Dismiss</span>
                  </button>
                </div>
              </div>
            )}

            {suggestionState === 'applied' && activeFile === 'invoice' && (
              <div className="mt-4 p-2.5 rounded border border-brand-green/30 bg-brand-green/10 text-xs font-mono flex items-center justify-between text-brand-green">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Fix applied: Array guards and bounds sanitizer active</span>
                </span>
                <button
                  onClick={() => setSuggestionState('pending')}
                  className="text-xs underline text-codepilot-dim hover:text-codepilot-text"
                >
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* Integrated Terminal Panel Underneath Editor */}
          <div className="border-t border-codepilot-border bg-[#07080A]">
            <div className="h-8 px-4 bg-codepilot-panel/90 border-b border-codepilot-border flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-brand-green font-medium">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>TERMINAL</span>
                </span>
                <span className="text-codepilot-dim">zsh — node v24</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRerunTerminal}
                  className="flex items-center gap-1 text-[11px] text-codepilot-dim hover:text-brand-green transition-colors"
                  title="Rerun terminal commands"
                >
                  <RotateCcw className={`w-3 h-3 ${isRunningTerminal ? 'animate-spin' : ''}`} />
                  <span>Re-run Analysis</span>
                </button>
              </div>
            </div>

            <div className="p-3 sm:p-4 font-mono text-xs space-y-1.5 min-h-[140px] max-h-[170px] overflow-y-auto">
              {terminalLines.slice(0, terminalStep).map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  {line.type === 'cmd' && (
                    <span className="text-brand-cyan font-bold">{line.text}</span>
                  )}
                  {line.type === 'success' && (
                    <span className="text-brand-green">{line.text}</span>
                  )}
                  {line.type === 'warn' && (
                    <span className="text-brand-amber">{line.text}</span>
                  )}
                  {line.type === 'info' && (
                    <span className="text-codepilot-text">{line.text}</span>
                  )}
                  {line.type === 'highlight' && (
                    <span className="text-brand-cyan underline">{line.text}</span>
                  )}
                </div>
              ))}

              {terminalStep < terminalLines.length && (
                <div className="flex items-center gap-1 text-brand-green text-xs">
                  <span>Executing workflow...</span>
                  <span className="terminal-cursor" />
                </div>
              )}

              {terminalStep >= terminalLines.length && (
                <div className="flex items-center gap-1 text-codepilot-dim text-xs">
                  <span>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

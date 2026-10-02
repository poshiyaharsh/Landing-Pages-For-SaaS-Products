import React, { useState } from 'react';
import {
  FileCode,
  FolderTree,
  Terminal as TerminalIcon,
  Sparkles,
  Check,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Cpu,
  CheckCircle2
} from 'lucide-react';

export const CodeEditorShowcase: React.FC = () => {
  const [fixApplied, setFixApplied] = useState(false);
  const [activeTab, setActiveTab] = useState<'fetchWrapper' | 'authService' | 'apiConfig'>('fetchWrapper');
  const [explainOpen, setExplainOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleApplyFix = () => {
    setFixApplied(true);
    showToast('Fix applied: Authorization header injected into fetch wrapper');
  };

  const handleReset = () => {
    setFixApplied(false);
    showToast('Reverted to original state');
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#07080A] border-y border-codepilot-border" id="editor-showcase">
      {/* Decorative developer backdrops */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>IMMERSIVE CONTEXTUAL IDE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Your code. With context.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            CodePilot doesn't just read the current file. It indexes your entire project dependency graph, runtime configurations, and authentication wrappers to understand exactly why code fails.
          </p>
        </div>

        {/* Full-Width Realistic IDE Showcase */}
        <div className="rounded-2xl border border-codepilot-border bg-codepilot-panel shadow-terminal overflow-hidden">
          {/* Top Window Bar */}
          <div className="h-10 px-4 bg-codepilot-bg border-b border-codepilot-border flex items-center justify-between font-mono text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
              <span className="w-3 h-3 rounded-full bg-[#00F59B]/80" />
              <span className="text-codepilot-dim ml-2 hidden sm:inline">CodePilot Studio v2.4</span>
            </div>

            <div className="flex items-center gap-2 text-codepilot-muted">
              <span className="text-brand-green">● Connected</span>
              <span className="text-codepilot-dim">|</span>
              <span>Project: api-gateway-core</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                LSP: Node & TS
              </span>
            </div>
          </div>

          {/* Main 3-Column Layout: Left File Tree + Center Editor + Right AI Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* 1. Left: File Tree (2 cols on lg) */}
            <div className="hidden lg:block lg:col-span-2 bg-[#090B0E] border-r border-codepilot-border p-3 font-mono text-xs select-none">
              <div className="flex items-center gap-1.5 text-codepilot-dim uppercase tracking-wider text-[10px] font-bold pb-2 border-b border-codepilot-border/60 mb-3">
                <FolderTree className="w-3.5 h-3.5 text-brand-green" />
                <span>Files</span>
              </div>

              <div className="space-y-1 text-codepilot-muted">
                <div className="text-codepilot-dim text-[11px] flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 rotate-90" />
                  <span>src</span>
                </div>

                <div className="pl-3 space-y-1">
                  <div className="text-codepilot-dim text-[11px] flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 rotate-90" />
                    <span>lib</span>
                  </div>

                  <div className="pl-3 space-y-1">
                    <button
                      onClick={() => setActiveTab('fetchWrapper')}
                      className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left text-xs ${
                        activeTab === 'fetchWrapper'
                          ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/30'
                          : 'hover:bg-codepilot-surface text-codepilot-muted'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span className="truncate">fetchWrapper.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('authService')}
                      className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left text-xs ${
                        activeTab === 'authService'
                          ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/30'
                          : 'hover:bg-codepilot-surface text-codepilot-muted'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span className="truncate">authService.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('apiConfig')}
                      className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left text-xs ${
                        activeTab === 'apiConfig'
                          ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/30'
                          : 'hover:bg-codepilot-surface text-codepilot-muted'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span className="truncate">apiConfig.ts</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Center: Code Editor (6 cols on lg) */}
            <div className="lg:col-span-6 bg-codepilot-bg flex flex-col justify-between border-r border-codepilot-border">
              {/* Editor Tabs */}
              <div className="flex items-center justify-between bg-codepilot-panel border-b border-codepilot-border px-3 py-1.5 font-mono text-xs">
                <div className="flex items-center gap-1">
                  <div className="px-3 py-1 bg-codepilot-bg border-t-2 border-brand-cyan text-codepilot-text rounded-t flex items-center gap-2">
                    <FileCode className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{activeTab === 'fetchWrapper' ? 'fetchWrapper.ts' : activeTab === 'authService' ? 'authService.ts' : 'apiConfig.ts'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-codepilot-dim">
                  <span>UTF-8</span>
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Code Contents */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                {activeTab === 'fetchWrapper' && (
                  <div className="space-y-1">
                    <div className="text-codepilot-dim flex">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">01</span>
                      <span><span className="text-brand-purple">import</span> &#123; getToken &#125; <span className="text-brand-purple">from</span> <span className="text-brand-green">'./authService'</span>;</span>
                    </div>

                    <div className="text-codepilot-dim flex">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">02</span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">03</span>
                      <span><span className="text-brand-purple">export async function</span> <span className="text-brand-cyan">apiFetch</span>&lt;T&gt;(url: <span className="text-brand-cyan">string</span>, init: <span className="text-brand-cyan">RequestInit</span> = &#123;&#125;): <span className="text-brand-cyan">Promise</span>&lt;T&gt; &#123;</span>
                    </div>

                    {fixApplied ? (
                      <>
                        <div className="flex bg-brand-green/10 border-l-2 border-brand-green pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-green">04</span>
                          <span className="pl-4">
                            <span className="text-brand-purple">const</span> token = <span className="text-brand-purple">await</span> getToken();
                          </span>
                        </div>
                        <div className="flex bg-brand-green/10 border-l-2 border-brand-green pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-green">05</span>
                          <span className="pl-4">
                            <span className="text-brand-purple">const</span> headers = &#123;
                          </span>
                        </div>
                        <div className="flex bg-brand-green/10 border-l-2 border-brand-green pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-green">06</span>
                          <span className="pl-8">
                            ...init.headers,
                          </span>
                        </div>
                        <div className="flex bg-brand-green/10 border-l-2 border-brand-green pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-green">07</span>
                          <span className="pl-8 text-brand-green">
                            <span className="text-brand-purple">...(token &amp;&amp; &#123;</span> Authorization: `Bearer $&#123;token&#125;` <span className="text-brand-purple">&#125;)</span>,
                          </span>
                        </div>
                        <div className="flex bg-brand-green/10 border-l-2 border-brand-green pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-green">08</span>
                          <span className="pl-4">&#125;;</span>
                        </div>
                        <div className="flex text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">09</span>
                          <span className="pl-4">
                            <span className="text-brand-purple">const</span> res = <span className="text-brand-purple">await</span> fetch(url, &#123; ...init, headers &#125;);
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex bg-brand-red/10 border-l-2 border-brand-red pl-1 text-codepilot-text">
                          <span className="w-6 select-none text-right pr-3 text-brand-red">04</span>
                          <span className="pl-4 text-brand-red">
                            <span className="text-brand-purple">const</span> res = <span className="text-brand-purple">await</span> fetch(url, init); // ⚠ 401 Missing Auth Header
                          </span>
                        </div>
                      </>
                    )}

                    <div className="flex text-codepilot-text">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">{fixApplied ? '10' : '05'}</span>
                      <span className="pl-4">
                        <span className="text-brand-purple">if</span> (!res.ok) <span className="text-brand-purple">throw new</span> Error(`API Error $&#123;res.status&#125;`);
                      </span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">{fixApplied ? '11' : '06'}</span>
                      <span className="pl-4">
                        <span className="text-brand-purple">return</span> res.json();
                      </span>
                    </div>

                    <div className="flex text-codepilot-text">
                      <span className="w-6 select-none text-right pr-3 text-codepilot-border-highlight">{fixApplied ? '12' : '07'}</span>
                      <span>&#125;</span>
                    </div>
                  </div>
                )}

                {activeTab === 'authService' && (
                  <div className="space-y-1 text-codepilot-muted">
                    <div>export async function getToken(): Promise&lt;string | null&gt; &#123;</div>
                    <div className="pl-4">return localStorage.getItem('cp_session_bearer');</div>
                    <div>&#125;</div>
                  </div>
                )}

                {activeTab === 'apiConfig' && (
                  <div className="space-y-1 text-codepilot-muted">
                    <div>export const API_BASE = 'https://api.codepilot.internal/v1';</div>
                    <div>export const TIMEOUT_MS = 5000;</div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-codepilot-panel border-t border-codepilot-border flex items-center justify-between text-[11px] font-mono">
                <span className="text-codepilot-dim">
                  {fixApplied ? '✓ 0 errors, 0 warnings' : '⚠ 1 unhandled 401 condition detected'}
                </span>
                {fixApplied && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-brand-cyan hover:underline"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to fail state</span>
                  </button>
                )}
              </div>
            </div>

            {/* 3. Right: CodePilot AI Assistant Panel (4 cols on lg) */}
            <div className="lg:col-span-4 bg-codepilot-panel flex flex-col justify-between p-4 sm:p-5 font-mono text-xs">
              <div className="space-y-4">
                {/* AI Panel Header */}
                <div className="flex items-center justify-between pb-3 border-b border-codepilot-border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-brand-green/20 text-brand-green flex items-center justify-center font-black">
                      &gt;_
                    </div>
                    <span className="font-bold text-codepilot-white">CodePilot Copilot</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-semibold">
                    AST Grounded
                  </span>
                </div>

                {/* Developer Chat Message */}
                <div className="p-3 rounded-lg bg-codepilot-surface border border-codepilot-border text-codepilot-text space-y-1">
                  <div className="text-[10px] text-codepilot-dim uppercase font-bold flex items-center gap-1">
                    <span>Developer</span>
                  </div>
                  <p className="text-xs text-codepilot-text">
                    “Why is this API request failing?”
                  </p>
                </div>

                {/* CodePilot Response */}
                <div className="p-3.5 rounded-lg bg-brand-green/5 border border-brand-green/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-brand-green font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      CodePilot Analysis
                    </span>
                    <span className="text-[9px] text-codepilot-dim">14ms latency</span>
                  </div>

                  <p className="text-xs text-codepilot-text leading-relaxed">
                    “The request is returning a 401 because the authorization header is missing from the fetch wrapper.”
                  </p>

                  <div className="pt-2 border-t border-brand-green/20">
                    <span className="text-[10px] uppercase tracking-wide text-brand-cyan font-bold block mb-1.5">
                      Suggested Fix
                    </span>

                    {/* Diff Preview */}
                    <div className="p-2 rounded bg-[#07080A] border border-codepilot-border text-[11px] space-y-0.5">
                      <div className="text-brand-red">- const res = await fetch(url, init);</div>
                      <div className="text-brand-green">+ const token = await getToken();</div>
                      <div className="text-brand-green">+ const headers = &#123; ...init.headers, Authorization: `Bearer $&#123;token&#125;` &#125;;</div>
                      <div className="text-brand-green">+ const res = await fetch(url, &#123; ...init, headers &#125;);</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Apply Fix, Explain, Open File */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleApplyFix}
                    disabled={fixApplied}
                    className={`w-full py-2.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      fixApplied
                        ? 'bg-brand-green/20 text-brand-green border border-brand-green/30 cursor-default'
                        : 'bg-brand-green text-codepilot-bg hover:bg-[#15f8a3] shadow-glow-green cursor-pointer'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{fixApplied ? 'Fix Injected in Editor' : 'Apply Fix'}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setExplainOpen(!explainOpen)}
                      className="py-2 px-3 rounded-md border border-codepilot-border bg-codepilot-surface hover:bg-codepilot-hover text-codepilot-text text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{explainOpen ? 'Hide' : 'Explain'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('fetchWrapper');
                        showToast('Opened src/lib/fetchWrapper.ts:04');
                      }}
                      className="py-2 px-3 rounded-md border border-codepilot-border bg-codepilot-surface hover:bg-codepilot-hover text-codepilot-text text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brand-purple" />
                      <span>Open File</span>
                    </button>
                  </div>

                  {explainOpen && (
                    <div className="p-2.5 rounded bg-codepilot-surface border border-codepilot-border text-[11px] text-codepilot-muted animate-fadeIn">
                      <p>
                        The backend requires a JWT Bearer header for all <code className="text-brand-cyan">/v1/billing/*</code> endpoints. Without injecting <code className="text-brand-green">getToken()</code> into headers, the API gateway immediately rejects the connection with HTTP 401 Unauthorized.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Integrated Terminal */}
          <div className="border-t border-codepilot-border bg-[#07080A] p-3 sm:p-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-codepilot-dim mb-2 text-[11px]">
              <TerminalIcon className="w-3.5 h-3.5 text-brand-green" />
              <span>TERMINAL — RUNTIME LOGS</span>
            </div>
            <div className="space-y-1">
              {fixApplied ? (
                <>
                  <div className="text-brand-cyan">$ curl -X GET https://api.codepilot.internal/v1/invoices/current</div>
                  <div className="text-brand-green">✓ HTTP/2 200 OK — Authorization Bearer verified. (Payload: 204 bytes, 18ms)</div>
                </>
              ) : (
                <>
                  <div className="text-brand-cyan">$ curl -X GET https://api.codepilot.internal/v1/invoices/current</div>
                  <div className="text-brand-red">✗ HTTP/2 401 Unauthorized — Missing Bearer Token in authorization header</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-lg bg-codepilot-panel border border-brand-green text-brand-green text-xs font-mono shadow-terminal flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
};

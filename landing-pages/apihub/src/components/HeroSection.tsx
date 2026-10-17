import React from 'react';
import { ArrowRight, Terminal, Code2, Globe, Cpu, CheckCircle2, Shield, Activity, Copy, Check } from 'lucide-react';
import { SAMPLE_ENDPOINTS } from '../data/sampleData';

interface HeroSectionProps {
  onOpenWorkspaceModal: () => void;
  onScrollToExplorer: () => void;
  onShowToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWorkspaceModal,
  onScrollToExplorer,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  const sampleCurl = `curl -X POST https://api.hyperion.dev/v2/payments/charge \\
  -H "Authorization: Bearer test_key_99fa1408b0" \\
  -H "Idempotency-Key: idemp_340810-tx-019" \\
  -d '{"amount_cents": 12500, "currency": "usd"}'`;

  const copyCurl = () => {
    navigator.clipboard.writeText(sampleCurl);
    setCopied(true);
    onShowToast('cURL request copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#020617] font-mono">
      {/* Background radial technical glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-emerald-600/10 to-indigo-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ONE WORKSPACE FOR CONNECTED SYSTEMS</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build, connect, and scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">APIs</span>.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Keep API documentation, request examples, integration workflows, and service visibility organized in one developer-focused workspace.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenWorkspaceModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 group"
            >
              <span>Explore the API workspace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToExplorer}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-zinc-200 text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>View API documentation</span>
            </button>
          </div>

          {/* Trust stats pill row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-zinc-400">OpenAPI 3.1 &amp; GraphQL native</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-zinc-400">Edge Gateway p99 &lt; 18ms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-zinc-400">Automatic SDK Codegen</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Workspace Preview Visual */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-[#0B0F19] shadow-2xl shadow-cyan-950/40 overflow-hidden">
          {/* Header bar */}
          <div className="px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-xs text-zinc-400 font-mono pl-2 border-l border-slate-800">
                api.hyperion.dev/v2/payments/charge
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-[11px]">
                Status 201 Created
              </span>
              <span className="text-zinc-500 text-[11px] hidden sm:inline">Latency: 52ms</span>
              <button 
                onClick={copyCurl}
                className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                aria-label="Copy cURL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* 3-column split preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
            {/* Sidebar: Service catalog */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-4 bg-[#080C14]">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 px-1">
                <span className="uppercase tracking-wider font-semibold">Service Catalog</span>
                <span className="text-cyan-400">5 Endpoints</span>
              </div>
              <div className="space-y-1.5">
                {SAMPLE_ENDPOINTS.map((ep, idx) => (
                  <div
                    key={ep.id}
                    className={`p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      idx === 1 
                        ? 'bg-slate-800/80 border border-cyan-500/30 text-white' 
                        : 'hover:bg-slate-900/60 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                        ep.method === 'GET' ? 'bg-emerald-950 text-emerald-400' :
                        ep.method === 'POST' ? 'bg-cyan-950 text-cyan-400' : 'bg-purple-950 text-purple-400'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="truncate font-mono">{ep.path}</span>
                    </div>
                    {idx === 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main payload preview */}
            <div className="lg:col-span-8 p-5 bg-[#0B0F19] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Method:</span>
                    <span className="font-bold text-cyan-400">POST</span>
                    <span className="text-zinc-400">/v2/payments/charge</span>
                  </div>
                  <div className="text-[11px] text-zinc-500">Idempotent Safe</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Request Body</div>
                    <pre className="text-[11px] p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-cyan-300 overflow-x-auto leading-relaxed">
{`{
  "amount_cents": 12500,
  "currency": "usd",
  "customer_id": "cus_8941031aa",
  "payment_method": "pm_card_visa_4242"
}`}
                    </pre>
                  </div>

                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Gateway Response (201)</div>
                    <pre className="text-[11px] p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-emerald-300 overflow-x-auto leading-relaxed">
{`{
  "id": "chg_991802bb0",
  "status": "succeeded",
  "captured": true,
  "risk_score": 3,
  "receipt": "https://pay.apihub.dev/..."
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-500">
                <div className="flex items-center gap-3">
                  <span>SSL: TLS 1.3 / mTLS</span>
                  <span>Payload: 1.4 KB</span>
                  <span className="text-emerald-400">Validated: OpenAPI 3.1</span>
                </div>
                <button
                  onClick={onScrollToExplorer}
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Open Full Interactive Explorer &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  Rocket,
  CheckCircle2,
  FolderTree,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onStartBuilding: () => void;
  onSeeWorkflow: () => void;
  onNotify: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartBuilding,
  onSeeWorkflow,
  onNotify,
}) => {
  const [activeFile, setActiveFile] = useState('app/api/deploy/route.ts');
  const [copiedUrl, setCopiedUrl] = useState(false);

  const sampleUrl = 'https://acme-dashboard.shipfast.app';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(sampleUrl);
    setCopiedUrl(true);
    onNotify('Copied sample deployment URL to clipboard!');
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dev-grid">
      {/* Subtle blue gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>BUILD SOMETHING REAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              deployed product.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bring your project setup, development workflow, deployment checklist, and launch progress into one clear path. Spend less time managing the process and more time building what matters.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartBuilding}
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Rocket className="w-4 h-4" />
              <span>Start building</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onSeeWorkflow}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>See the workflow</span>
            </button>
          </div>

          {/* Value Microcopy */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Full code ownership
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Zero closed-silo hosting
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              TypeScript & React 19
            </span>
          </div>
        </div>

        {/* Hero Visual — Layered Developer Launch Interface */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-800 terminal-window overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#070A12] border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2">
                acme-dashboard // launch-pipeline (simulated)
              </span>
            </div>

            {/* Simulated Live Deployment Status */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>v1.0.0-release</span>
              </div>
              <button
                onClick={handleCopyUrl}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {copiedUrl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">acme-dashboard.shipfast.app</span>
              </button>
            </div>
          </div>

          {/* Pipeline Visual Bar: Build -> Test -> Deploy */}
          <div className="px-5 py-3 bg-[#0B0F19] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>1. Build (4.2s)</span>
              </div>
              <span className="text-slate-600">→</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>2. Test (24/24 passing)</span>
              </div>
              <span className="text-slate-600">→</span>
              <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping inline-block" />
                <span>3. Deploy (Global Edge CDN)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              Bundle: <strong className="text-slate-200">48.2 kB gzipped</strong>
            </div>
          </div>

          {/* 3-Column Studio Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Left Col: File Tree & Project Structure (3 Cols) */}
            <div className="lg:col-span-3 p-4 bg-[#080C14] space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <FolderTree className="w-3.5 h-3.5 text-blue-400" />
                  Repository Files
                </span>
                <span className="text-slate-500">acme-app</span>
              </div>

              <div className="space-y-1 font-mono text-xs">
                {[
                  { path: 'app/api/deploy/route.ts', active: true, icon: 'ts' },
                  { path: 'src/lib/stripe.ts', active: false, icon: 'ts' },
                  { path: 'prisma/schema.prisma', active: false, icon: 'db' },
                  { path: 'shipfast.config.json', active: false, icon: 'json' },
                  { path: '.env.production', active: false, icon: 'env' },
                ].map((file) => (
                  <button
                    key={file.path}
                    onClick={() => setActiveFile(file.path)}
                    className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between text-xs transition-colors cursor-pointer ${
                      activeFile === file.path
                        ? 'bg-blue-950/80 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <span className="truncate">{file.path}</span>
                    <span className="text-[10px] text-slate-500">{file.icon}</span>
                  </button>
                ))}
              </div>

              {/* Launch Readiness Progress */}
              <div className="pt-3 border-t border-slate-800/80 font-mono text-xs">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Launch Readiness</span>
                  <span className="text-emerald-400 font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>
                <p className="text-[10px] text-slate-500 mt-1.5">
                  5 of 6 pre-flight checks verified.
                </p>
              </div>
            </div>

            {/* Center Col: Code Editor Panel (6 Cols) */}
            <div className="lg:col-span-6 p-4 sm:p-5 bg-[#0A0E1A] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                <span className="text-blue-400">{activeFile}</span>
                <span className="text-slate-500">TypeScript 5.7</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#060810] border border-slate-800/90 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto">
                <p className="text-slate-500">// ShipFast automated launch handler</p>
                <p>
                  <span className="text-purple-400">import</span> &#123; createDeploymentPipeline &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@shipfast/core'</span>;
                </p>
                <p className="mt-2">
                  <span className="text-purple-400">export async function</span> <span className="text-blue-400">POST</span>(req: Request) &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> pipeline = <span className="text-purple-400">await</span> createDeploymentPipeline(&#123;
                </p>
                <p className="pl-8 text-slate-300">
                  project: <span className="text-emerald-400">'acme-dashboard'</span>,
                </p>
                <p className="pl-8 text-slate-300">
                  framework: <span className="text-emerald-400">'nextjs-app-router'</span>,
                </p>
                <p className="pl-8 text-slate-300">
                  checks: [ <span className="text-emerald-400">'strict-env'</span>, <span className="text-emerald-400">'stripe-webhooks'</span>, <span className="text-emerald-400">'db-migrations'</span> ],
                </p>
                <p className="pl-8 text-slate-300">
                  target: <span className="text-emerald-400">'production-edge'</span>
                </p>
                <p className="pl-4">&#125;);</p>
                <p className="pl-4 mt-1">
                  <span className="text-purple-400">return</span> Response.json(&#123; url: pipeline.deploymentUrl, status: <span className="text-emerald-400">'live'</span> &#125;);
                </p>
                <p>&#125;</p>
              </div>

              {/* Terminal Logs Footer */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                <span className="text-slate-400">⚡ Build completed in 4.2s (Zero warnings)</span>
                <span className="text-emerald-400">Ready</span>
              </div>
            </div>

            {/* Right Col: Deployment Status Panel (3 Cols) */}
            <div className="lg:col-span-3 p-4 sm:p-5 bg-[#090D17] space-y-4 font-mono text-xs">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                Production Release
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-emerald-400 font-bold">DEPLOYED</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Commit</span>
                  <span className="text-blue-400 font-mono">f84a1e9</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Environment</span>
                  <span className="text-slate-200">Production</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Edge Region</span>
                  <span className="text-slate-200">Global (280 PoPs)</span>
                </div>
              </div>

              {/* Quality Checklist Summary */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase">Pre-flight Audit</span>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>TypeScript Types</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>ESLint Strict</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Database Migrations</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Stripe Secrets</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-500 text-center">
                * Simulated deployment showcase fixture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

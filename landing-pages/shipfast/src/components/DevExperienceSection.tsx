import React from 'react';
import {
  Code2,
  CheckCircle2,
  FolderTree,
  KeyRound,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

export const DevExperienceSection: React.FC = () => {
  return (
    <section id="devex" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Less setup confusion.{' '}
            <span className="text-blue-600">More shipping.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Every file, environment variable, and build target is organized with clear validation guards before reaching production.
          </p>
        </div>

        {/* 4 Developer Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Project Structure Preview */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <FolderTree className="w-4 h-4 text-blue-600" />
                <span>Project Structure Standard</span>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Clean Monorepo
              </span>
            </div>
            <div className="space-y-1.5 text-slate-700 font-mono text-xs">
              <div className="text-blue-600 font-semibold">📁 acme-dashboard/</div>
              <div className="pl-4">├── 📁 app/ <span className="text-slate-400">// Next.js App Router endpoints</span></div>
              <div className="pl-4">├── 📁 src/lib/ <span className="text-slate-400">// Typed Stripe & Auth helpers</span></div>
              <div className="pl-4">├── 📁 prisma/schema.prisma <span className="text-slate-400">// Database models</span></div>
              <div className="pl-4">├── 📄 .env.example <span className="text-slate-400">// Schema-validated secrets</span></div>
              <div className="pl-4">└── 📄 shipfast.config.ts <span className="text-slate-400">// Launch pipeline config</span></div>
            </div>
          </div>

          {/* 2. Environment Variable Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <KeyRound className="w-4 h-4 text-blue-600" />
                <span>Runtime Environment Schema</span>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Zod Validated
              </span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'NEXT_PUBLIC_APP_URL', status: 'valid', value: 'https://acme-dashboard.shipfast.app' },
                { name: 'DATABASE_URL', status: 'valid', value: 'postgresql://***:***@aws.neon.tech/prod' },
                { name: 'STRIPE_SECRET_KEY', status: 'valid', value: 'sk_live_51M*** [Encrypted]' },
                { name: 'STRIPE_WEBHOOK_SECRET', status: 'valid', value: 'whsec_*** [Verified]' },
              ].map((env) => (
                <div
                  key={env.name}
                  className="p-2 rounded bg-white border border-slate-200 flex items-center justify-between text-xs"
                >
                  <span className="font-semibold text-slate-800">{env.name}</span>
                  <div className="flex items-center gap-1.5 text-emerald-600 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>SET</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Build Configuration Summary */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Build Configuration Summary</span>
              </div>
              <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Zero Warnings
              </span>
            </div>
            <div className="p-3 bg-[#0B0F19] rounded-xl text-slate-300 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Target ECMAScript:</span>
                <span className="text-white font-semibold">ES2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Strict TypeScript:</span>
                <span className="text-emerald-400 font-semibold">Enabled (0 errors)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">CSS Minifier:</span>
                <span className="text-white font-semibold">Tailwind LightningCSS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gzipped Bundle Size:</span>
                <span className="text-sky-400 font-semibold">48.2 kB (Optimal)</span>
              </div>
            </div>
          </div>

          {/* 4. Deployment Readiness Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Deployment Readiness Audit</span>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Ready for Live Traffic
              </span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded bg-white border border-slate-200 flex items-center justify-between">
                <span className="text-slate-800">SSL Certificate & DNS Propagation</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> OK
                </span>
              </div>
              <div className="p-2 rounded bg-white border border-slate-200 flex items-center justify-between">
                <span className="text-slate-800">PostgreSQL Connection Pooling</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> OK
                </span>
              </div>
              <div className="p-2 rounded bg-white border border-slate-200 flex items-center justify-between">
                <span className="text-slate-800">Global Error Reporting (Sentry / LogDNA)</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> OK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

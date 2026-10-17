import React, { useState } from 'react';
import { Search, Eye, Play, Download, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  codePreview: string;
}

const STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Discover & Catalog',
    subtitle: 'Unified API Registry',
    detail: 'Browse team services, search by path, filter by auth type, and review semantic change logs across version branches.',
    codePreview: '// Discover customer service v2.4\nconst service = await apihub.services.get("customer-core");'
  },
  {
    number: '02',
    title: 'Inspect Schema Contracts',
    subtitle: 'Strict Validation',
    detail: 'Examine complete request schemas, query parameters, required headers, and RFC 7807 error responses.',
    codePreview: '// Type-safe schema validation\ninterface ChargeRequest {\n  amount_cents: number;\n  currency: "usd" | "eur";\n}'
  },
  {
    number: '03',
    title: 'Simulate in Sandbox',
    subtitle: 'Deterministic Mocking',
    detail: 'Execute test payloads in an isolated sandbox with zero side effects, instant mock responses, and custom network latencies.',
    codePreview: '// Safe sandbox execution\nPOST https://sandbox.apihub.dev/v2/charge\nStatus: 201 Created (42ms)'
  },
  {
    number: '04',
    title: 'Export Typed SDKs',
    subtitle: 'Instant Client Generation',
    detail: 'Generate idiomatic, type-safe client libraries for TypeScript, Python, Go, and Java with built-in retry and auth middleware.',
    codePreview: 'npm install @apihub/client\nconst client = new ApiHubClient({ apiKey: process.env.KEY });'
  },
  {
    number: '05',
    title: 'Monitor & Observe',
    subtitle: 'Edge Telemetry',
    detail: 'Correlate latency spikes, 4xx/5xx errors, quota burns, and payload sizes with distributed trace IDs.',
    codePreview: 'Telemetry: p99 18.2ms &bull; 0.001% error rate &bull; 99.99% uptime'
  }
];

export const DeveloperWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-24 bg-[#080C14] border-t border-slate-800 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            END-TO-END DEVELOPER LIFECYCLE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How modern teams ship APIs with APIHub
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            From initial contract design to multi-region production scale in five structured phases.
          </p>
        </div>

        {/* Step Navigation Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/40 text-white'
                    : 'bg-[#0B0F19] border-slate-800 hover:border-slate-700 text-zinc-400'
                }`}
              >
                <div className={`text-xs font-bold mb-1 ${isActive ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  {step.number}
                </div>
                <div className="text-xs font-semibold truncate">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-cyan-400 text-xs font-semibold border border-slate-800">
                <span>Phase {STEPS[activeStep].number}</span> &bull; <span>{STEPS[activeStep].subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {STEPS[activeStep].title}
              </h3>
              <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                {STEPS[activeStep].detail}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((activeStep + 1) % STEPS.length)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white transition-colors flex items-center gap-2"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl bg-slate-950 border border-slate-800/90 p-5 font-mono text-xs text-cyan-300 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3 text-[11px] text-zinc-500">
                  <span>workflow-spec.ts</span>
                  <span>Execution Output</span>
                </div>
                <pre className="overflow-x-auto leading-relaxed text-zinc-300">
                  {STEPS[activeStep].codePreview}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

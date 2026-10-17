import React from 'react';
import { 
  GitBranch, 
  Terminal, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  Layers,
  ArrowRight
} from 'lucide-react';

interface EcosystemItem {
  name: string;
  category: 'CI/CD Pipeline' | 'Test Framework' | 'Observability' | 'Workflow';
  description: string;
  status: 'Ready' | 'Configurable' | 'Native';
  latency: string;
}

const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  {
    name: 'GitHub Actions',
    category: 'CI/CD Pipeline',
    description: 'Trigger synthetic matrices and parallel shard runners directly on git pull requests.',
    status: 'Native',
    latency: '< 180ms'
  },
  {
    name: 'GitLab CI / CD',
    category: 'CI/CD Pipeline',
    description: 'Stream JUnit XML and OpenTelemetry spans into pipeline reports with branch locks.',
    status: 'Native',
    latency: '< 240ms'
  },
  {
    name: 'Playwright & Chromium',
    category: 'Test Framework',
    description: 'Capture DOM video recordings, trace files, and network har dumps on test failure.',
    status: 'Native',
    latency: 'Real-time'
  },
  {
    name: 'Vitest & Jest Engine',
    category: 'Test Framework',
    description: 'Unit and snapshot parsing with instant diff highlighting and AST syntax match.',
    status: 'Ready',
    latency: '< 50ms'
  },
  {
    name: 'Cypress E2E Engine',
    category: 'Test Framework',
    description: 'Cross-browser visual regression diffing and viewport emulation assertions.',
    status: 'Ready',
    latency: '< 310ms'
  },
  {
    name: 'Datadog & OpenTelemetry',
    category: 'Observability',
    description: 'Correlate flaky pipeline test failures with backend microservice latency spikes.',
    status: 'Configurable',
    latency: 'Sub-second'
  },
  {
    name: 'Slack & Teams Alerts',
    category: 'Workflow',
    description: 'Context-rich regression alerts directly to the pull request author and code owners.',
    status: 'Native',
    latency: 'Instant'
  },
  {
    name: 'Jira & Linear Sync',
    category: 'Workflow',
    description: 'Automatically file triage issues with reproducing curl commands and stack traces.',
    status: 'Ready',
    latency: 'Automatic'
  }
];

export const DeveloperEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 border-t border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/40 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-4">
            <Workflow className="w-3.5 h-3.5 text-emerald-400" />
            INTEGRATION ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connects to your modern engineering stack
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Plug TestForge into your existing test runners and CI pipelines. No complex proprietary DSLs or rigid agent setups required.
          </p>
          <div className="mt-3 text-xs text-zinc-500 font-mono">
            * Illustrated ecosystem connectors &mdash; standard JUnit/OpenTelemetry ingestion supported.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ECOSYSTEM_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 rounded-xl p-5 transition-all duration-200 group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Ingest: <span className="text-zinc-300">{item.latency}</span></span>
                <span className="text-emerald-500/80 group-hover:translate-x-0.5 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CLI Quickstart snippet */}
        <div className="mt-12 bg-black/70 border border-emerald-900/40 rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-medium text-zinc-300">Fast CI/CD CLI Setup in under 60 seconds</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">testforge-cli v2.14.0</span>
          </div>
          <div className="font-mono text-xs text-zinc-300 space-y-1.5 overflow-x-auto">
            <div className="text-zinc-500"># Install the lightweight binary in your CI matrix</div>
            <div className="text-emerald-300">$ curl -sSL https://get.testforge.dev | sh</div>
            <div className="text-zinc-500 mt-2"># Run your test suite with automated failure triage & replay</div>
            <div className="text-emerald-300">$ testforge run --framework playwright --artifacts --trace</div>
            <div className="text-zinc-400 text-[11px] mt-2">
              <span className="text-emerald-400">&radic;</span> Discovered 42 test suites &bull; 0 flakiness &bull; Sharded across 8 workers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

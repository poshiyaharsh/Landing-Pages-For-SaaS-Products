import React from 'react';
import { 
  FolderGit2, 
  FileText, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Radio, 
  Workflow, 
  Code2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface FeatureCard {
  title: string;
  category: string;
  description: string;
  codeSnippet: string;
  badge: string;
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Centralized API Catalog & Versioning',
    category: 'Catalog Management',
    description: 'Index all internal, partner, and public endpoints across microservices. Maintain seamless semantic version deprecation policies.',
    codeSnippet: 'apihub catalog sync --specs ./schemas/v2 --semver minor',
    badge: 'Multi-Repo'
  },
  {
    title: 'Living OpenAPI 3.1 & GraphQL Docs',
    category: 'Interactive Docs',
    description: 'Transform raw YAML and schema definitions into beautiful interactive documentation with executable curl, TypeScript, and Python snippets.',
    codeSnippet: 'export const client = new ApiHubClient({ env: "prod" });',
    badge: 'Real-time'
  },
  {
    title: 'Schema Drift & Breaking Change Detection',
    category: 'Governance & CI',
    description: 'Block pull requests that introduce breaking field removals or incompatible payload types before they impact production consumers.',
    codeSnippet: 'FAIL: field "tax_id" removed from CustomerResponse (v2.1)',
    badge: 'CI Gating'
  },
  {
    title: 'Global Edge Mock Server Engine',
    category: 'Developer Sandboxes',
    description: 'Spin up deterministic low-latency mock servers across 42 global edge locations so client engineering teams can build in parallel.',
    codeSnippet: 'mockServer.reply(200, { data: fixture.customers });',
    badge: 'Sub-15ms'
  },
  {
    title: 'mTLS & Token Revocation Policies',
    category: 'Enterprise Security',
    description: 'Enforce mutual TLS 1.3 certificates, granular OAuth2 scopes, rate limiting ceilings, and millisecond token revocation at the proxy level.',
    codeSnippet: 'policy.enforceRateLimit({ max: 10000, window: "60s" });',
    badge: 'SOC2 Ready'
  },
  {
    title: 'Event Webhook Queue & HMAC Verification',
    category: 'Async Events',
    description: 'Deliver signed events with automated exponential retry policies, historical delivery logs, and verifiable SHA-256 signatures.',
    codeSnippet: 'webhook.dispatch("payment.created", { signed: true });',
    badge: 'At-Least-Once'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#020617] border-t border-slate-800 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            ENGINEERED FOR SCALE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive platform tooling for API teams
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            Eliminate silos between backend architects, frontend developers, and partner integrations with unified tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#0B0F19] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-zinc-400">
                    {feat.category}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs font-sans text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-cyan-400 font-mono overflow-x-auto truncate">
                  <code>{feat.codeSnippet}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

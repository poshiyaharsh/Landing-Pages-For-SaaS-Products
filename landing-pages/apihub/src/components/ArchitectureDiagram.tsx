import React, { useState } from 'react';
import { Network, Globe, Shield, Server, Database, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

interface Tier {
  id: string;
  name: string;
  role: string;
  latency: string;
  specs: string[];
}

const TIERS: Tier[] = [
  {
    id: 'clients',
    name: '1. Client Applications',
    role: 'Originating traffic from browsers, iOS/Android apps, background workers, and external partner servers.',
    latency: '0ms (Origin)',
    specs: ['OAuth2 Bearer Tokens', 'Idempotency Headers', 'HTTP/2 & HTTP/3']
  },
  {
    id: 'gateway',
    name: '2. APIHub Edge Gateway Cluster',
    role: 'Global edge proxy terminating SSL/TLS 1.3, validating signatures, evaluating rate limits, and routing.',
    latency: '< 18ms (p99)',
    specs: ['42 Global PoPs', 'DDoS Mitigation', 'JWT Fast-Path Verification']
  },
  {
    id: 'services',
    name: '3. Internal Microservices',
    role: 'Decoupled domain services processing business logic, AI inference, payments, and event webhooks.',
    latency: '< 35ms (p95)',
    specs: ['gRPC & REST Protocols', 'Zero-Trust Service Mesh', 'Circuit Breakers']
  },
  {
    id: 'persistence',
    name: '4. Persistent Data & Event Bus',
    role: 'Distributed transactional databases, Redis caching layers, and Kafka/RabbitMQ async queues.',
    latency: '< 4ms (Cache Hit)',
    specs: ['Multi-Region Replicas', 'ACID Transactions', 'SHA-256 Event Audit']
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('gateway');

  const activeTierObj = TIERS.find(t => t.id === selectedTier) || TIERS[1];

  return (
    <section id="architecture" className="py-24 bg-[#080C14] border-t border-slate-800 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            HIGH-THROUGHPUT INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-availability edge architecture
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            Engineered to process billions of requests monthly with multi-region redundancy and sub-20ms edge routing.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/50 text-white'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`}>
                      {tier.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </div>
                  <div className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                    {tier.role}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                    <span>Latency:</span>
                    <span className="text-cyan-300 font-bold">{tier.latency}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Tier Breakdown */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400">{activeTierObj.name}</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-zinc-400">
                  Active Inspection
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {activeTierObj.role}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {activeTierObj.specs.map((spec, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-zinc-300 font-mono flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center text-[11px] text-zinc-500 font-mono">
            * Illustrative architectural model &mdash; represents unified platform edge and service mesh topology.
          </div>
        </div>
      </div>
    </section>
  );
};

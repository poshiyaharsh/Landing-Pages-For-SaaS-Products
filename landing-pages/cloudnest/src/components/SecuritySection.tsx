import React from 'react';
import { Shield, Lock, Eye, KeyRound, CheckCircle2, ArrowRight } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Cryptographic Environment Isolation',
      desc: 'Production, staging, and preview workloads reside in logically isolated networks with dedicated VPC subnets and separate environment variable vaults.',
      icon: Shield,
    },
    {
      title: 'Role-Based Access Guardrails (RBAC)',
      desc: 'Define granular developer, operator, and read-only roles. Prevent accidental production deletions through enforced peer review approval workflows.',
      icon: Lock,
    },
    {
      title: 'Automated Secrets Ingestion',
      desc: 'Environment variables are encrypted at rest using AES-256 and injected into container runtimes in memory without ever being written to build logs.',
      icon: KeyRound,
    },
    {
      title: 'Append-Only Audit Event Trail',
      desc: 'Every deployment trigger, configuration tweak, secret update, and rollback is permanently recorded in a tamper-evident administrative timeline.',
      icon: Eye,
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            ARCHITECTURE & COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Infrastructure management you can understand.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Enterprise cloud operations require transparent boundaries, encrypted secret delivery, and audit trails without unnecessary black-box complexity.
          </p>
        </div>

        {/* Technical Flow Illustration: Application -> Access Control -> Service -> Monitoring */}
        <div className="p-6 bg-nest-bg rounded-nest-xl border border-nest-border mb-12 shadow-subtle overflow-hidden">
          <span className="text-[10px] font-mono uppercase tracking-wider text-nest-muted block mb-4">
            Zero-Trust Ingress & Execution Pipeline Architecture
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-4 bg-white rounded-nest border border-nest-border shadow-subtle space-y-1">
              <span className="text-nest-blue font-bold block text-sm">01. Application</span>
              <span className="text-[11px] text-nest-secondary">Encrypted TLS Ingress</span>
            </div>

            <div className="p-4 bg-white rounded-nest border border-nest-blue/40 shadow-subtle space-y-1">
              <span className="text-nest-blue font-bold block text-sm">02. Access Control</span>
              <span className="text-[11px] text-nest-secondary">RBAC & Token Validation</span>
            </div>

            <div className="p-4 bg-white rounded-nest border border-nest-cyan/40 shadow-subtle space-y-1">
              <span className="text-nest-cyan font-bold block text-sm">03. Service Mesh</span>
              <span className="text-[11px] text-nest-secondary">Isolated Container Runtime</span>
            </div>

            <div className="p-4 bg-white rounded-nest border border-emerald-500/40 shadow-subtle space-y-1">
              <span className="text-nest-green font-bold block text-sm">04. Monitoring</span>
              <span className="text-[11px] text-nest-secondary">Append-Only Audit Stream</span>
            </div>
          </div>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-7 shadow-subtle space-y-3"
              >
                <div className="w-9 h-9 rounded-md bg-nest-blue-soft flex items-center justify-center text-nest-blue">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display text-nest-text">{p.title}</h3>
                <p className="text-xs text-nest-secondary leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

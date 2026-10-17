import React from 'react';
import { Shield, EyeOff, Lock, Trash2, Sliders, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Ephemeral Local Sandboxing',
      desc: 'In this web demonstration, files remain isolated inside your browser memory. No vectors are submitted to external training loops or model fine-tuning.',
      icon: Shield,
    },
    {
      title: 'Explicit Document Deletion',
      desc: 'You maintain absolute control over every ingested file. Remove a document from the workspace, and all cached vector coordinates are purged instantly.',
      icon: Trash2,
    },
    {
      title: 'Transparent Processing States',
      desc: 'Clear visual status indicators inform you precisely when a file is parsing, tokenizing, or indexing, eliminating black-box uncertainty.',
      icon: Sliders,
    },
    {
      title: 'Strict Grounding Boundaries',
      desc: 'Answers are generated strictly against coordinate anchors found within verified document pages, actively preventing ungrounded speculation.',
      icon: EyeOff,
    },
  ];

  return (
    <section className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            PRIVACY & DATA INTEGRITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Your documents deserve thoughtful protection.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Enterprise document intelligence requires transparent data boundaries, deterministic citations, and clear deletion controls.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white border border-docu-border rounded-docu-xl p-6 sm:p-7 shadow-subtle space-y-3"
              >
                <div className="w-9 h-9 rounded-md bg-docu-accent-soft flex items-center justify-center text-docu-accent">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-docu-text">{p.title}</h3>
                <p className="text-xs text-docu-secondary leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Honest Architecture Disclosure Box */}
        <div className="mt-8 p-5 bg-white rounded-docu-lg border border-docu-border text-xs text-docu-secondary space-y-2">
          <div className="flex items-center gap-2 font-semibold text-docu-text">
            <CheckCircle2 className="w-4 h-4 text-docu-accent" />
            <span>Production Architecture Roadmap & Deployment Options</span>
          </div>
          <p className="leading-relaxed">
            For production enterprise deployments, DocuMind supports single-tenant VPC isolation, customer-managed encryption keys (CMEK), air-gapped on-premise Kubernetes clusters, and automated SOC2 / GDPR compliance exports. In this interactive frontend prototype, interactions are safely handled in local browser memory without transmitting your files to third-party servers.
          </p>
        </div>
      </div>
    </section>
  );
};

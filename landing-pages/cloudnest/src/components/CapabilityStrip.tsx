import React from 'react';
import { Cpu, Database, HardDrive, Network, GitCommit, LineChart } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { label: 'Compute', desc: 'Container instances & autoscaling pods', icon: Cpu },
    { label: 'Databases', desc: 'Managed PostgreSQL, MySQL & Redis', icon: Database },
    { label: 'Storage', desc: 'S3-compatible object & block volumes', icon: HardDrive },
    { label: 'Networking', desc: 'Global CDN, SSL & private VPC meshes', icon: Network },
    { label: 'Deployments', desc: 'Zero-downtime rolling & preview releases', icon: GitCommit },
    { label: 'Observability', desc: 'Unified metrics, traces & live logs', icon: LineChart },
  ];

  return (
    <section className="py-12 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-nest-muted font-semibold">
            ONE WORKSPACE. YOUR ENTIRE INFRASTRUCTURE.
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.label}
                className="p-4 rounded-nest border border-nest-border bg-nest-bg/40 hover:bg-white hover:border-nest-blue/30 hover:shadow-subtle transition-all group"
              >
                <div className="w-8 h-8 rounded bg-white border border-nest-border group-hover:border-nest-blue/40 flex items-center justify-center text-nest-blue mb-3 transition-colors shadow-subtle">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold font-display text-nest-text">{cap.label}</h3>
                <p className="text-[11px] text-nest-secondary mt-1 leading-snug">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

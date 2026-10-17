import React, { useState } from 'react';
import { ArrowRight, Terminal, CheckCircle2, Server, Database, Layers, Activity, Cpu, HardDrive, RefreshCw } from 'lucide-react';
import { ServiceItem } from '../types';

interface HeroSectionProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreConsole: () => void;
  onSelectService: (service: ServiceItem) => void;
  sampleService: ServiceItem;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAuth,
  onExploreConsole,
  onSelectService,
  sampleService,
}) => {
  const [activeStep, setActiveStep] = useState(3);

  const deploymentSteps = [
    { time: '14:32:08', text: 'Build completed', status: 'done' },
    { time: '14:32:12', text: 'Deployment started', status: 'done' },
    { time: '14:32:19', text: 'Health checks passed', status: 'done' },
    { time: '14:32:21', text: 'Deployment successful', status: 'live' },
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-nest-border">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-nest-blue-soft border border-nest-blue/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-nest-blue animate-pulse-subtle" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-nest-blue">
                CLOUD INFRASTRUCTURE, SIMPLIFIED
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold font-display tracking-tight text-nest-text leading-[1.12]">
              Infrastructure without <br />
              <span className="text-nest-blue">the complexity.</span>
            </h1>

            <p className="text-base sm:text-lg text-nest-secondary leading-relaxed font-normal">
              Deploy applications, manage cloud resources, and monitor your infrastructure from one clear, developer-friendly platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold bg-nest-blue hover:bg-nest-blue-deep text-white rounded-nest shadow-subtle transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreConsole}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold bg-white hover:bg-nest-subtle text-nest-text border border-nest-border rounded-nest transition-colors"
              >
                <span>Explore the Platform</span>
              </button>
            </div>

            <p className="text-xs font-mono text-nest-muted flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-nest-green" />
              <span>From your first deployment to production-scale workloads.</span>
            </p>

            {/* 3 Value Pillars */}
            <div className="pt-6 border-t border-nest-border grid grid-cols-3 gap-3 text-xs">
              <div>
                <span className="font-bold font-display text-nest-text block text-sm">Zero Downtime</span>
                <span className="text-nest-secondary text-[11px] leading-snug">Rolling release shifts</span>
              </div>
              <div>
                <span className="font-bold font-display text-nest-text block text-sm">Visual Topology</span>
                <span className="text-nest-secondary text-[11px] leading-snug">Interactive service graph</span>
              </div>
              <div>
                <span className="font-bold font-display text-nest-text block text-sm">Cost Controls</span>
                <span className="text-nest-secondary text-[11px] leading-snug">Transparent monthly metrics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Cloud Infrastructure Visual Preview */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-nest-border rounded-nest-xl shadow-modal overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-nest-subtle/80 border-b border-nest-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-nest-muted pl-2 hidden sm:inline">
                    cloudnest-console / production / us-east-1
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-nest-green border border-emerald-200">
                    <CheckCircle2 className="w-2.5 h-2.5" /> All Services Healthy
                  </span>
                  <span className="text-[10px] font-mono text-nest-muted hidden sm:inline">
                    v2.8.4
                  </span>
                </div>
              </div>

              {/* Console Preview Body */}
              <div className="p-4 sm:p-5 space-y-4 bg-nest-bg/40">
                {/* Compact Telemetry Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 bg-white rounded-nest border border-nest-border">
                    <span className="text-[10px] font-mono uppercase text-nest-muted block">Environment</span>
                    <span className="font-bold font-display text-nest-text block mt-0.5">Production</span>
                    <span className="text-[10px] font-mono text-nest-blue">4 Clusters Active</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-nest border border-nest-border">
                    <span className="text-[10px] font-mono uppercase text-nest-muted block">Deployment</span>
                    <span className="font-bold font-display text-nest-green block mt-0.5">Successful</span>
                    <span className="text-[10px] font-mono text-nest-secondary">Sha 7f8a91c</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-nest border border-nest-border">
                    <span className="text-[10px] font-mono uppercase text-nest-muted block">CPU Load</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-bold font-mono text-nest-text text-sm">42%</span>
                      <span className="text-[10px] font-mono text-nest-muted">avg</span>
                    </div>
                    <div className="w-full bg-nest-subtle h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-nest-blue h-full w-[42%]" />
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-nest border border-nest-border">
                    <span className="text-[10px] font-mono uppercase text-nest-muted block">Memory Load</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-bold font-mono text-nest-text text-sm">61%</span>
                      <span className="text-[10px] font-mono text-nest-muted">utilized</span>
                    </div>
                    <div className="w-full bg-nest-subtle h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-nest-cyan h-full w-[61%]" />
                    </div>
                  </div>
                </div>

                {/* Central Infrastructure Topology Graphic Preview */}
                <div className="bg-white rounded-nest border border-nest-border p-4 shadow-subtle relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-[11px] font-semibold text-nest-secondary uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-nest-blue" />
                      Live Service Topology Mesh
                    </span>
                    <span className="text-[10px] font-mono text-nest-green">● 8 Services Connected</span>
                  </div>

                  {/* SVG Topology Representation */}
                  <div className="relative h-44 sm:h-48 w-full bg-nest-bg/50 rounded border border-nest-border flex items-center justify-center p-2">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 180" fill="none">
                      {/* Connector Paths with animated flow */}
                      <path d="M 90 90 L 220 90" stroke="#3468F5" strokeWidth="1.5" className="animate-flow" />
                      <path d="M 220 90 C 290 90, 310 40, 390 40" stroke="#3468F5" strokeWidth="1.5" className="animate-flow" />
                      <path d="M 220 90 L 390 90" stroke="#3468F5" strokeWidth="1.5" className="animate-flow" />
                      <path d="M 220 90 C 290 90, 310 140, 390 140" stroke="#3468F5" strokeWidth="1.5" className="animate-flow" />
                    </svg>

                    {/* Nodes inside topology */}
                    <div className="relative z-10 w-full h-full flex items-center justify-between px-2 sm:px-6">
                      {/* Node 1: Ingress / Web */}
                      <div
                        onClick={() => onSelectService(sampleService)}
                        className="bg-white border-2 border-nest-blue rounded-nest p-2.5 shadow-subtle text-center cursor-pointer hover:scale-105 transition-transform"
                      >
                        <Server className="w-4 h-4 text-nest-blue mx-auto mb-1" />
                        <span className="text-[11px] font-bold font-display text-nest-text block">web-frontend</span>
                        <span className="text-[9px] font-mono text-nest-green">4 Replicas</span>
                      </div>

                      {/* Node 2: API Gateway */}
                      <div className="bg-white border-2 border-nest-cyan rounded-nest p-2.5 shadow-subtle text-center cursor-pointer hover:scale-105 transition-transform">
                        <Terminal className="w-4 h-4 text-nest-cyan mx-auto mb-1" />
                        <span className="text-[11px] font-bold font-display text-nest-text block">api-gateway</span>
                        <span className="text-[9px] font-mono text-nest-green">1,240 rps</span>
                      </div>

                      {/* Node 3: Column of Storage / DB */}
                      <div className="flex flex-col gap-2">
                        <div className="bg-white border border-nest-border rounded p-1.5 shadow-subtle text-center flex items-center gap-2">
                          <Activity className="w-3 h-3 text-nest-blue" />
                          <span className="text-[10px] font-mono text-nest-text">async-worker</span>
                        </div>
                        <div className="bg-white border border-nest-border rounded p-1.5 shadow-subtle text-center flex items-center gap-2">
                          <Layers className="w-3 h-3 text-nest-cyan" />
                          <span className="text-[10px] font-mono text-nest-text">redis-cache</span>
                        </div>
                        <div className="bg-white border border-nest-border rounded p-1.5 shadow-subtle text-center flex items-center gap-2">
                          <Database className="w-3 h-3 text-nest-green" />
                          <span className="text-[10px] font-mono text-nest-text">postgres-db</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Deployment Activity Feed */}
                <div className="bg-nest-console-bg text-nest-console-text rounded-nest p-3 font-mono text-xs border border-nest-console-border space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-nest-console-muted pb-1.5 border-b border-nest-console-border">
                    <span>Active Deployment Stream: dep-902</span>
                    <span className="text-nest-green">42s build</span>
                  </div>

                  <div className="space-y-1">
                    {deploymentSteps.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="text-nest-console-muted">{s.time}</span>
                          <span className="text-nest-console-muted">—</span>
                          <span className={idx === deploymentSteps.length - 1 ? 'text-nest-green font-semibold' : 'text-slate-300'}>
                            {s.text}
                          </span>
                        </div>
                        {idx === deploymentSteps.length - 1 && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-nest-green border border-emerald-500/30">
                            Live
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

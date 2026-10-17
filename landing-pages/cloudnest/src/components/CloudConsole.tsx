import React, { useState } from 'react';
import {
  LayoutDashboard,
  AppWindow,
  GitCommit,
  Cpu,
  Database,
  HardDrive,
  Network,
  Activity,
  Terminal,
  DollarSign,
  Settings,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Search,
  ExternalLink,
  ChevronRight,
  Filter,
  Check,
  Bell,
  RefreshCw
} from 'lucide-react';
import { Environment, ServiceItem, DeploymentItem, AlertItem } from '../types';
import {
  SAMPLE_SERVICES,
  SAMPLE_DEPLOYMENTS,
  SAMPLE_ALERTS,
  SAMPLE_DATABASES,
  SAMPLE_STORAGE,
  SAMPLE_COST_DATA,
} from '../data/sampleData';

interface CloudConsoleProps {
  onSelectService: (service: ServiceItem) => void;
  onInspectDeployment: (dep: DeploymentItem) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const CloudConsole: React.FC<CloudConsoleProps> = ({
  onSelectService,
  onInspectDeployment,
  onToast,
}) => {
  const [activeNav, setActiveNav] = useState<string>('Overview');
  const [activeEnv, setActiveEnv] = useState<Environment>('production');
  const [serviceSearch, setServiceSearch] = useState('');
  const [alerts, setAlerts] = useState<AlertItem[]>(SAMPLE_ALERTS);

  const sidebarLinks = [
    { label: 'Overview', icon: LayoutDashboard },
    { label: 'Applications', icon: AppWindow },
    { label: 'Deployments', icon: GitCommit },
    { label: 'Compute', icon: Cpu },
    { label: 'Databases', icon: Database },
    { label: 'Storage', icon: HardDrive },
    { label: 'Networking', icon: Network },
    { label: 'Monitoring', icon: Activity },
    { label: 'Logs', icon: Terminal },
    { label: 'Billing', icon: DollarSign },
    { label: 'Settings', icon: Settings },
  ];

  const filteredServices = SAMPLE_SERVICES.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(serviceSearch.toLowerCase());
    return matchesSearch;
  });

  const handleAcknowledgeAlert = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === alertId ? { ...a, acknowledged: !a.acknowledged } : a))
    );
    onToast('Alert Updated', 'Alert acknowledgement status updated in audit log.', 'info');
  };

  const handleEnvChange = (env: Environment) => {
    setActiveEnv(env);
    onToast('Environment Switched', `Active workspace shifted to [${env.toUpperCase()}].`, 'blue');
  };

  return (
    <section id="console" className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-semibold mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>INTERACTIVE CLOUD CONSOLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text">
              Your infrastructure, in one clear view.
            </h2>
            <p className="text-xs sm:text-sm text-nest-secondary mt-1">
              Switch environments, inspect services, review deployments, and monitor telemetry live.
            </p>
          </div>

          {/* Environment Selector Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-nest-border rounded-nest shadow-subtle self-start md:self-auto">
            {(['production', 'staging', 'development'] as Environment[]).map((env) => (
              <button
                key={env}
                onClick={() => handleEnvChange(env)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium capitalize transition-colors ${
                  activeEnv === env
                    ? 'bg-nest-blue text-white shadow-subtle'
                    : 'text-nest-secondary hover:text-nest-text hover:bg-nest-subtle'
                }`}
              >
                {env}
              </button>
            ))}
          </div>
        </div>

        {/* Real Console Window Frame */}
        <div className="bg-white border border-nest-border rounded-nest-xl shadow-modal overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
          {/* 1. Sidebar (col-span-3) */}
          <div className="lg:col-span-3 border-r border-nest-border bg-nest-bg/60 p-4 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Workspace Header */}
              <div className="flex items-center justify-between pb-3 border-b border-nest-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-nest-blue flex items-center justify-center text-white text-xs font-bold font-display">
                    C
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-display text-nest-text">Northstar Cluster</h4>
                    <span className="text-[10px] text-nest-muted block font-mono">us-east-1a VPC</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-nest-border text-nest-green font-medium">
                  Live
                </span>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-nest-muted block px-2 mb-1">
                  Management Navigation
                </span>
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeNav === link.label;

                  return (
                    <button
                      key={link.label}
                      onClick={() => setActiveNav(link.label)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-nest text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-white text-nest-blue shadow-subtle border border-nest-border'
                          : 'text-nest-secondary hover:text-nest-text hover:bg-nest-subtle'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{link.label}</span>
                      </div>
                      {link.label === 'Deployments' && (
                        <span className="text-[10px] font-mono bg-nest-blue-soft text-nest-blue px-1.5 py-0.2 rounded">
                          {SAMPLE_DEPLOYMENTS.length}
                        </span>
                      )}
                      {link.label === 'Databases' && (
                        <span className="text-[10px] font-mono text-nest-muted">3</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom Telemetry */}
            <div className="pt-4 border-t border-nest-border">
              <div className="p-3 bg-white border border-nest-border rounded-nest text-xs space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-nest-muted">Cluster Health:</span>
                  <span className="text-nest-green font-semibold">100% SLA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nest-muted">Active Pods:</span>
                  <span className="text-nest-text">12 Replicas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nest-muted">Spend Rate:</span>
                  <span className="text-nest-blue">$0.95/hr</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Main Console Content Area (col-span-9) */}
          <div className="lg:col-span-9 p-6 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              {/* Dynamic View Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-nest-border gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-display text-nest-text">
                      {activeNav} Dashboard
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-nest-bg border border-nest-border text-nest-secondary">
                      Env: {activeEnv}
                    </span>
                  </div>
                  <p className="text-xs text-nest-secondary mt-0.5">
                    Live operational state for cluster resources and automated rollouts.
                  </p>
                </div>

                {/* Search / Filter in Console */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-nest-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={serviceSearch}
                      onChange={(e) => setServiceSearch(e.target.value)}
                      placeholder="Filter services..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-nest-bg border border-nest-border rounded-nest focus:bg-white focus:border-nest-blue focus:outline-none transition-colors w-40 sm:w-52"
                    />
                  </div>
                  <button
                    onClick={() =>
                      onToast('Cluster Refreshed', 'Synced state with cloud control plane.', 'info')
                    }
                    className="p-1.5 border border-nest-border rounded-nest hover:bg-nest-subtle text-nest-secondary"
                    title="Refresh telemetry"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* View 1: Overview / Applications / Default View */}
              {(activeNav === 'Overview' || activeNav === 'Applications' || activeNav === 'Compute') && (
                <div className="space-y-6">
                  {/* Summary Metric Meters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-nest-bg rounded-nest border border-nest-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-nest-muted block">CPU Aggregate</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-mono text-nest-text">42%</span>
                        <span className="text-xs font-mono text-nest-green">+2.1% past hr</span>
                      </div>
                      <div className="w-full bg-nest-subtle h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-nest-blue h-full w-[42%]" />
                      </div>
                    </div>

                    <div className="p-3.5 bg-nest-bg rounded-nest border border-nest-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-nest-muted block">Memory Aggregate</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-mono text-nest-text">61%</span>
                        <span className="text-xs font-mono text-nest-secondary">4.8 / 8.0 GB</span>
                      </div>
                      <div className="w-full bg-nest-subtle h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-nest-cyan h-full w-[61%]" />
                      </div>
                    </div>

                    <div className="p-3.5 bg-nest-bg rounded-nest border border-nest-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-nest-muted block">Network Egress</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-mono text-nest-text">14.2 MB/s</span>
                        <span className="text-xs font-mono text-nest-green">Stable</span>
                      </div>
                      <div className="w-full bg-nest-subtle h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[35%]" />
                      </div>
                    </div>
                  </div>

                  {/* Active Services Table */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-nest-text font-display">
                        Active Services ({filteredServices.length})
                      </span>
                      <span className="text-[11px] font-mono text-nest-muted">
                        Click row to inspect configuration
                      </span>
                    </div>

                    <div className="border border-nest-border rounded-nest overflow-hidden text-xs">
                      <table className="w-full text-left">
                        <thead className="bg-nest-bg text-nest-secondary font-mono text-[11px] border-b border-nest-border">
                          <tr>
                            <th className="py-2.5 px-4 font-medium">Service Name</th>
                            <th className="py-2.5 px-3 font-medium">Category</th>
                            <th className="py-2.5 px-3 font-medium">Status</th>
                            <th className="py-2.5 px-3 font-medium">Replicas</th>
                            <th className="py-2.5 px-3 font-medium">Latency</th>
                            <th className="py-2.5 px-4 font-medium text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-docu-border font-mono text-xs">
                          {filteredServices.map((svc) => (
                            <tr
                              key={svc.id}
                              onClick={() => onSelectService(svc)}
                              className="hover:bg-nest-blue-soft/30 transition-colors cursor-pointer group"
                            >
                              <td className="py-3 px-4 font-semibold text-nest-text group-hover:text-nest-blue transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-nest-green shrink-0" />
                                  <span>{svc.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-3 text-nest-secondary capitalize">
                                <span className="px-1.5 py-0.5 rounded bg-nest-bg border border-nest-border text-[10px]">
                                  {svc.category}
                                </span>
                              </td>
                              <td className="py-3 px-3 text-nest-green font-medium">
                                <span className="inline-flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" /> Healthy
                                </span>
                              </td>
                              <td className="py-3 px-3 text-nest-secondary">{svc.replicas} pods</td>
                              <td className="py-3 px-3 text-nest-text">{svc.latency}</td>
                              <td className="py-3 px-4 text-right">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectService(svc);
                                  }}
                                  className="text-nest-blue hover:underline text-[11px] inline-flex items-center gap-1"
                                >
                                  <span>Inspect</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Recent Deployments Table */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-nest-text font-display">
                        Recent Deployment Pipeline Events
                      </span>
                      <button
                        onClick={() => setActiveNav('Deployments')}
                        className="text-nest-blue hover:underline font-mono text-[11px]"
                      >
                        View Full History →
                      </button>
                    </div>

                    <div className="border border-nest-border rounded-nest overflow-hidden text-xs">
                      <div className="divide-y divide-nest-border font-mono text-xs">
                        {SAMPLE_DEPLOYMENTS.slice(0, 3).map((dep) => (
                          <div
                            key={dep.id}
                            onClick={() => onInspectDeployment(dep)}
                            className="p-3 flex items-center justify-between hover:bg-nest-subtle/50 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 ${
                                  dep.status === 'successful'
                                    ? 'bg-nest-green'
                                    : dep.status === 'in_progress'
                                    ? 'bg-nest-blue animate-pulse'
                                    : 'bg-nest-amber'
                                }`}
                              />
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-nest-text">{dep.serviceName}</span>
                                  <span className="text-nest-blue text-[11px]">sha-{dep.commitId}</span>
                                  <span className="text-[10px] text-nest-muted hidden sm:inline">
                                    by {dep.author}
                                  </span>
                                </div>
                                <p className="text-[11px] text-nest-secondary truncate font-sans">
                                  {dep.commitMsg}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 text-[11px] text-nest-muted">
                              <span className="hidden sm:inline">{dep.duration}</span>
                              <span className="text-nest-text font-medium">{dep.timestamp}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-nest-muted" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Deployments View */}
              {activeNav === 'Deployments' && (
                <div className="space-y-4">
                  <div className="p-4 bg-nest-bg rounded-nest border border-nest-border flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-nest-text block">Automated Git Pipeline: Active</span>
                      <span className="text-nest-secondary">Webhook connected to repository ref: refs/heads/main</span>
                    </div>
                    <button
                      onClick={() =>
                        onToast('Pipeline Triggered', 'Dispatched rolling deployment for web-frontend.', 'blue')
                      }
                      className="px-3 py-1.5 bg-nest-blue hover:bg-nest-blue-deep text-white font-medium rounded-nest transition-colors"
                    >
                      Trigger New Deploy
                    </button>
                  </div>

                  <div className="border border-nest-border rounded-nest overflow-hidden">
                    <div className="divide-y divide-nest-border font-mono text-xs">
                      {SAMPLE_DEPLOYMENTS.map((dep) => (
                        <div
                          key={dep.id}
                          onClick={() => onInspectDeployment(dep)}
                          className="p-4 hover:bg-nest-subtle/50 transition-colors cursor-pointer space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 font-semibold text-nest-text">
                              <span className="text-nest-blue font-bold">{dep.serviceName}</span>
                              <span>·</span>
                              <span>Commit {dep.commitId}</span>
                              <span className="text-[10px] font-mono bg-nest-blue-soft text-nest-blue px-1.5 rounded">
                                {dep.branch}
                              </span>
                            </div>
                            <span className="text-nest-green font-medium flex items-center gap-1 text-[11px]">
                              <CheckCircle2 className="w-3 h-3" /> {dep.status}
                            </span>
                          </div>
                          <p className="text-xs text-nest-secondary font-sans">{dep.commitMsg}</p>
                          <div className="flex items-center justify-between text-[11px] text-nest-muted pt-1">
                            <span>Authored by {dep.author}</span>
                            <span>Build Duration: {dep.duration} · {dep.timestamp}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* View 3: Databases & Storage View */}
              {(activeNav === 'Databases' || activeNav === 'Storage') && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SAMPLE_DATABASES.map((db) => (
                      <div key={db.id} className="p-4 bg-nest-bg border border-nest-border rounded-nest space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Database className="w-4 h-4 text-nest-blue" />
                            <h4 className="font-bold font-display text-nest-text text-xs">{db.name}</h4>
                          </div>
                          <span className="text-[10px] font-mono text-nest-green bg-emerald-50 px-2 py-0.5 rounded">
                            {db.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                          <div>
                            <span className="text-nest-muted text-[10px] block">Engine</span>
                            <span className="font-semibold text-nest-text">{db.engine} {db.version}</span>
                          </div>
                          <div>
                            <span className="text-nest-muted text-[10px] block">Storage</span>
                            <span className="font-semibold text-nest-text">{db.storageUsed} / {db.storageTotal}</span>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-nest-secondary pt-2 border-t border-nest-border/60">
                          Last snapshot: {db.lastBackup}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 4: Billing / Settings / Fallback */}
              {(activeNav === 'Billing' || activeNav === 'Monitoring' || activeNav === 'Logs' || activeNav === 'Networking' || activeNav === 'Settings') && (
                <div className="p-6 bg-nest-bg border border-nest-border rounded-nest text-center space-y-3">
                  <Terminal className="w-8 h-8 text-nest-blue mx-auto" />
                  <h4 className="font-bold font-display text-nest-text text-sm">
                    {activeNav} Module Active in Workspace
                  </h4>
                  <p className="text-xs text-nest-secondary max-w-md mx-auto">
                    Explore dedicated sections below for deep interactive topology diagrams, the technical terminal log explorer, and granular cost breakdown.
                  </p>
                  <button
                    onClick={() => {
                      const id =
                        activeNav === 'Billing'
                          ? '#cost'
                          : activeNav === 'Logs'
                          ? '#logs'
                          : activeNav === 'Monitoring'
                          ? '#monitoring'
                          : '#topology';
                      const el = document.querySelector(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-nest-blue hover:bg-nest-blue-deep text-white text-xs font-semibold rounded-nest transition-colors"
                  >
                    Jump to Detailed {activeNav} View
                  </button>
                </div>
              )}
            </div>

            {/* Console Footer Status */}
            <div className="pt-4 border-t border-nest-border flex flex-col sm:flex-row items-center justify-between text-xs text-nest-muted font-mono gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-nest-green" />
                <span>Connected to CloudNest Control Plane v4.2 · Zero active incident alerts</span>
              </div>
              <span>Cluster Region: us-east-1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { GitCommit, Layers, Activity, Database, Terminal, DollarSign, ArrowRight, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';
import { DeploymentItem } from '../types';

interface CoreFeaturesProps {
  onInspectDeployment: (dep: DeploymentItem) => void;
  sampleDeployment: DeploymentItem;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({
  onInspectDeployment,
  sampleDeployment,
}) => {
  return (
    <section id="features" className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            COMPREHENSIVE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Everything you need to run your infrastructure.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Six specialized cloud engineering pillars built to remove operational drag, accelerate deployment velocity, and maintain rock-solid uptime.
          </p>
        </div>

        {/* 6 Feature Modules with Varied Visual Layouts */}
        <div className="space-y-12">
          {/* Feature 01: Application Deployments (Wide Heroic Feature) */}
          <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                <GitCommit className="w-3.5 h-3.5" />
                <span>Feature 01</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-nest-text">Application Deployments</h3>
              <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                Move from source code to a running application through a clear, repeatable deployment workflow. Trigger zero-downtime rolling releases on git push with instant rollbacks.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onInspectDeployment(sampleDeployment)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-nest-border hover:bg-nest-subtle text-xs font-medium text-nest-text rounded-nest transition-colors"
                >
                  <span>Inspect Live Build Stream</span>
                  <ArrowRight className="w-3.5 h-3.5 text-nest-blue" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-nest-border rounded-nest-lg p-5 shadow-subtle space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-nest-border text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nest-green" />
                  <span className="font-semibold text-nest-text">web-frontend · Production Pipeline</span>
                </div>
                <span className="text-nest-muted">Commit 7f8a91c (main)</span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-2 pt-1 text-[11px]">
                <div className="p-2.5 bg-nest-subtle/70 rounded flex items-center justify-between">
                  <span className="text-nest-secondary">Build Step: Container compiled in 24s</span>
                  <span className="text-nest-green font-medium">✓ Passed</span>
                </div>
                <div className="p-2.5 bg-nest-subtle/70 rounded flex items-center justify-between">
                  <span className="text-nest-secondary">Test Matrix: 142 integration tests</span>
                  <span className="text-nest-green font-medium">✓ 100% OK</span>
                </div>
                <div className="p-2.5 bg-nest-blue-soft/50 border border-nest-blue/20 rounded flex items-center justify-between text-nest-blue">
                  <span className="font-medium">Traffic Shift: 100% routed to new pods</span>
                  <span className="font-bold">Zero Downtime</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-nest-muted border-t border-nest-border/60">
                <span>Deployed by Sarah Lin 14 minutes ago</span>
                <button
                  onClick={() => onInspectDeployment(sampleDeployment)}
                  className="text-nest-blue hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Rollback to v2.8.3
                </button>
              </div>
            </div>
          </div>

          {/* Grid for Features 02 & 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 02: Infrastructure Overview */}
            <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Feature 02</span>
                </div>
                <h3 className="text-xl font-bold font-display text-nest-text">Infrastructure Overview</h3>
                <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                  Understand your services, resources, and environments from one central view. Visualize topological links, discover orphaned instances, and verify traffic routes.
                </p>

                {/* Topology miniature card */}
                <div className="bg-white border border-nest-border rounded-nest-lg p-4 space-y-3 shadow-subtle text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-nest-border">
                    <span className="font-display font-bold text-nest-text">Resource Inventory</span>
                    <span className="text-[10px] font-mono text-nest-green bg-emerald-50 px-2 py-0.5 rounded">
                      8 Nodes Operational
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                    <div className="p-2 bg-nest-bg rounded border border-nest-border">
                      <span className="text-nest-muted text-[10px] block">Compute</span>
                      <span className="font-bold text-nest-text">12 Pods</span>
                    </div>
                    <div className="p-2 bg-nest-bg rounded border border-nest-border">
                      <span className="text-nest-muted text-[10px] block">Databases</span>
                      <span className="font-bold text-nest-text">3 Instances</span>
                    </div>
                    <div className="p-2 bg-nest-bg rounded border border-nest-border">
                      <span className="text-nest-muted text-[10px] block">Storage</span>
                      <span className="font-bold text-nest-text">752 GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 03: Monitoring and Alerts */}
            <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Feature 03</span>
                </div>
                <h3 className="text-xl font-bold font-display text-nest-text">Monitoring and Alerts</h3>
                <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                  Understand resource behavior and identify issues before they become harder to investigate. Real-time CPU, memory, request volume, and latency graphs.
                </p>

                {/* Telemetry charts miniature */}
                <div className="bg-white border border-nest-border rounded-nest-lg p-4 space-y-3 shadow-subtle text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-semibold text-nest-text">Cluster CPU & Latency Telemetry</span>
                    <span className="text-nest-blue">p95: 34ms</span>
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-nest-secondary">
                        <span>API Gateway CPU (6 Replicas)</span>
                        <span>42% avg</span>
                      </div>
                      <div className="w-full bg-nest-subtle h-2 rounded-full overflow-hidden">
                        <div className="bg-nest-blue h-full w-[42%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-nest-secondary">
                        <span>Database Memory (Primary Replica)</span>
                        <span>38% utilized</span>
                      </div>
                      <div className="w-full bg-nest-subtle h-2 rounded-full overflow-hidden">
                        <div className="bg-nest-cyan h-full w-[38%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid for Features 04 & 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 04: Database Management */}
            <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                  <Database className="w-3.5 h-3.5" />
                  <span>Feature 04</span>
                </div>
                <h3 className="text-xl font-bold font-display text-nest-text">Database Management</h3>
                <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                  Keep your database environments organized and understand operational status. Automated snapshot backups, connection pooling, and storage growth alerts.
                </p>

                {/* Database summary card */}
                <div className="bg-white border border-nest-border rounded-nest-lg p-4 space-y-2.5 shadow-subtle text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono border-b border-nest-border pb-1.5">
                    <span className="font-semibold text-nest-text">postgres-primary-prod</span>
                    <span className="text-nest-green">14m ago snapshot</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 bg-nest-bg rounded border border-nest-border">
                      <span className="text-nest-muted text-[10px] block">Storage</span>
                      <span className="font-semibold text-nest-text">42.8 / 100 GB</span>
                    </div>
                    <div className="p-2 bg-nest-bg rounded border border-nest-border">
                      <span className="text-nest-muted text-[10px] block">Active Conns</span>
                      <span className="font-semibold text-nest-text">48 / 200 Max</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 05: Logs and Diagnostics */}
            <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Feature 05</span>
                </div>
                <h3 className="text-xl font-bold font-display text-nest-text">Logs and Diagnostics</h3>
                <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                  Find the information you need to investigate errors and understand application behavior. Filter live streaming log outputs across services without SSH keys.
                </p>

                {/* Dark terminal log snippet */}
                <div className="bg-nest-console-bg text-nest-console-text rounded-nest-lg p-3.5 font-mono text-[11px] border border-nest-console-border space-y-1 shadow-subtle">
                  <div className="text-nest-console-muted text-[10px] border-b border-nest-console-border pb-1 flex justify-between">
                    <span>Live Log Stream</span>
                    <span className="text-nest-green">Connected</span>
                  </div>
                  <div className="text-nest-console-text truncate pt-1">
                    <span className="text-nest-cyan">INFO</span> api-gateway: HTTP 200 GET /v1/status
                  </div>
                  <div className="text-nest-amber truncate">
                    <span className="text-amber-400">WARN</span> async-worker: Retry scheduled (msg_498)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 06: Cost Visibility (Full-Width Card) */}
          <div className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-nest-blue-soft text-nest-blue text-xs font-mono font-medium">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Feature 06</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-nest-text">Cost Visibility & Optimization</h3>
              <p className="text-xs sm:text-sm text-nest-secondary leading-relaxed">
                Understand resource consumption and identify opportunities to use infrastructure more efficiently. Track spend per service, detect idle test nodes, and avoid billing surprises.
              </p>
              <div className="pt-2 text-[11px] font-mono text-nest-muted">
                * Illustrative estimation models configured for prototype preview.
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-nest-border rounded-nest-lg p-5 shadow-subtle space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-nest-border">
                <div>
                  <span className="text-nest-muted text-[10px] uppercase block">Estimated Current Month</span>
                  <span className="text-2xl font-bold font-display text-nest-text">$684.50</span>
                </div>
                <div className="text-right">
                  <span className="text-nest-muted text-[10px] uppercase block">Monthly Budget</span>
                  <span className="text-sm font-semibold text-nest-secondary">$850.00 Limit</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-nest-secondary">
                  <span>Budget Consumed (80.5%)</span>
                  <span className="text-nest-green font-medium">$165.50 Remaining</span>
                </div>
                <div className="w-full bg-nest-subtle h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-nest-blue h-full w-[47%]" title="Compute: 47%" />
                  <div className="bg-nest-cyan h-full w-[27%]" title="Database: 27%" />
                  <div className="bg-emerald-500 h-full w-[14%]" title="Storage: 14%" />
                  <div className="bg-amber-500 h-full w-[12%]" title="Network: 12%" />
                </div>
              </div>

              {/* Cost suggestion preview */}
              <div className="p-3 bg-nest-blue-soft/50 border border-nest-blue/20 rounded text-[11px] flex items-center justify-between">
                <span>Optimization Suggestion: 2 idle staging preview instances identified.</span>
                <span className="text-nest-blue font-bold shrink-0 ml-2">Save $38/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

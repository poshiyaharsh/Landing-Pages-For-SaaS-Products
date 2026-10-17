import React from 'react';
import { Layers, AlertCircle, CheckCircle2, Split, Terminal, Server, ExternalLink } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            THE DEVOPS REALITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Your infrastructure should work for you. <br className="hidden sm:inline" />
            Not against you.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Bring your infrastructure into one organized workspace and spend less time managing complexity across dozens of disconnected provider consoles.
          </p>
        </div>

        {/* Split Layout: Fragmented vs Unified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Fragmented Workflow */}
          <div className="bg-white border border-rose-200/80 rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between shadow-subtle relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-rose-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase font-semibold text-rose-600 flex items-center gap-1.5">
                  <Split className="w-4 h-4" /> Fragmented Cloud Complexity
                </span>
                <span className="text-[11px] font-mono text-nest-muted">5+ Disconnected Tabs</span>
              </div>

              {/* Cluttered mock items */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3 bg-rose-50/40 border border-rose-100 rounded-nest text-xs space-y-1">
                  <div className="flex items-center justify-between text-rose-950 font-medium">
                    <span className="font-mono">provider-dashboard-v3.aws.amazon...</span>
                    <span className="text-[10px] text-rose-600 font-mono">Unclear IAM</span>
                  </div>
                  <p className="text-[11px] text-rose-800/80">
                    “Which VPC security group is dropping traffic from the staging database subnet?”
                  </p>
                </div>

                <div className="p-3 bg-nest-subtle border border-nest-border rounded-nest text-xs space-y-1 opacity-85">
                  <div className="flex items-center justify-between text-nest-text font-medium">
                    <span className="font-mono">kubectl logs -f deployment/worker-pod-684a</span>
                    <span className="text-[10px] text-nest-muted font-mono">Terminal CLI</span>
                  </div>
                  <p className="text-[11px] text-nest-secondary">
                    “Manual ssh tunnels required to inspect container crash backtraces.”
                  </p>
                </div>

                <div className="p-3 bg-nest-subtle border border-nest-border rounded-nest text-xs space-y-1 opacity-70">
                  <div className="flex items-center justify-between text-nest-text font-medium">
                    <span className="font-mono">cloud-billing-report-unattributed.csv</span>
                    <span className="text-[10px] text-nest-muted font-mono">Surprise Invoice</span>
                  </div>
                  <p className="text-[11px] text-nest-secondary">
                    “Unexpected $1,400 monthly egress spike from abandoned test cluster.”
                  </p>
                </div>
              </div>

              {/* Bulleted Pain Points */}
              <ul className="space-y-2.5 text-xs text-nest-secondary border-t border-nest-border/60 pt-5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Juggling disconnected dashboards for compute, databases, and logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Brittle manual environment variable syncing across dev and prod</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>High friction debugging application latency without service topology context</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Cost opacity until the end-of-month cloud provider bill arrives</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-nest-border/60 flex items-center justify-between text-xs text-rose-700 font-mono">
              <span>Avg. 8.4 hours lost weekly to DevOps toil</span>
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
          </div>

          {/* Right: Unified CloudNest Console */}
          <div className="bg-white border border-nest-blue/30 rounded-nest-xl p-6 sm:p-8 flex flex-col justify-between shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-nest-blue" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase font-semibold text-nest-blue flex items-center gap-1.5">
                  <Server className="w-4 h-4" /> The CloudNest Unified Standard
                </span>
                <span className="text-[11px] font-mono text-nest-green font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Operational Visibility
                </span>
              </div>

              {/* Connected console snippet */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3 bg-nest-blue-soft/50 border border-nest-blue/20 rounded-nest text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-nest-text flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-nest-blue" />
                      Unified Service Mesh
                    </span>
                    <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-nest-blue">
                      Production
                    </span>
                  </div>
                  <p className="text-[11px] text-nest-secondary">
                    All 8 services, databases, and persistent storage nodes visualised with live latency.
                  </p>
                </div>

                <div className="p-3 bg-nest-console-bg text-nest-console-text rounded-nest text-xs space-y-1 border border-nest-console-border font-mono text-[11px]">
                  <div className="flex items-center justify-between text-nest-cyan">
                    <span>$ cloudnest deploy --env production</span>
                    <span className="text-nest-green font-bold">✓ 42s live</span>
                  </div>
                  <p className="text-nest-console-muted">
                    Rolling container swap complete with zero dropped client HTTP sockets.
                  </p>
                </div>
              </div>

              {/* Bulleted Benefits */}
              <ul className="space-y-2.5 text-xs text-nest-secondary border-t border-nest-border/60 pt-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nest-green shrink-0" />
                  <span>One single pane of glass for deployments, topology, logs, and databases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nest-green shrink-0" />
                  <span>Automated preview environments for every pull request branch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nest-green shrink-0" />
                  <span>Sub-second streaming log search without SSH bastion configurations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nest-green shrink-0" />
                  <span>Daily cost breakdown with automated idle instance right-sizing prompts</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-nest-border/60 flex items-center justify-between text-xs text-nest-blue font-mono font-medium">
              <span>99.99% Infrastructure Reliability</span>
              <CheckCircle2 className="w-4 h-4 text-nest-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

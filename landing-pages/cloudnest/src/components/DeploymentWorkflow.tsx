import React, { useState } from 'react';
import { GitBranch, GitCommit, Play, RotateCcw, CheckCircle2, Terminal, ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
import { DeploymentItem } from '../types';

interface DeploymentWorkflowProps {
  onInspectLogs: (dep: DeploymentItem) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
  sampleDeployment: DeploymentItem;
}

export const DeploymentWorkflow: React.FC<DeploymentWorkflowProps> = ({
  onInspectLogs,
  onToast,
  sampleDeployment,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(100);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    '$ cloudnest deploy --env production',
    '✓ Configuration validated (cloudnest.yaml)',
    '✓ Build completed (0 errors, 42s)',
    '✓ Container image registered to registry.cloudnest.io/prod:7f8a91c',
    '✓ Rolling deployment created with 4 pods',
    '✓ Health checks passed HTTP 200 on /healthz',
    'Deployment successful: https://app.cloudnest.io',
  ]);

  const workflowSteps = [
    { num: '01', title: 'CONNECT', desc: 'Link your GitHub or GitLab repo' },
    { num: '02', title: 'CONFIGURE', desc: 'Set environment variables & build triggers' },
    { num: '03', title: 'DEPLOY', desc: 'Zero-downtime rolling container swap' },
    { num: '04', title: 'MONITOR', desc: 'Live metrics, streaming logs & health checks' },
  ];

  const handleSimulateDeploy = () => {
    setIsDeploying(true);
    setDeployProgress(15);
    setConsoleOutput(['$ cloudnest deploy --env production', '... Initializing build pipeline']);

    setTimeout(() => {
      setDeployProgress(45);
      setConsoleOutput((prev) => [...prev, '✓ Configuration validated', '... Compiling production assets']);
    }, 450);

    setTimeout(() => {
      setDeployProgress(80);
      setConsoleOutput((prev) => [...prev, '✓ Build completed', '... Shifting traffic to new pods']);
    }, 900);

    setTimeout(() => {
      setDeployProgress(100);
      setIsDeploying(false);
      setConsoleOutput((prev) => [
        ...prev,
        '✓ Rolling deployment created',
        '✓ Health checks passed HTTP 200 on /healthz',
        'Deployment successful: https://app.cloudnest.io',
      ]);
      onToast('Deployment Succeeded', 'Traffic routed to commit 7f8a91c without dropped connections.', 'success');
    }, 1400);
  };

  const handleRollback = () => {
    onToast('Rollback Executed', 'Shifted traffic back to previous release sha-e491fa0.', 'warning');
  };

  return (
    <section className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            CONTINUOUS PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            From code to production, with clarity.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Eliminate complex pipeline scripts. CloudNest connects directly to your Git repository, automatically configures runtime environments, executes builds, and monitors production health.
          </p>
        </div>

        {/* 4-Step Horizontal Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-nest border transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-nest-blue-soft/40 border-nest-blue shadow-subtle'
                  : 'bg-nest-bg/60 border-nest-border hover:bg-white hover:border-nest-blue/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-nest-blue">{step.num}</span>
                <span className="w-2 h-2 rounded-full bg-nest-blue/40" />
              </div>
              <h3 className="text-sm font-bold font-display text-nest-text">{step.title}</h3>
              <p className="text-xs text-nest-secondary mt-1 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Realistic Deployment Interface Showcase */}
        <div className="bg-nest-console-bg text-nest-console-text rounded-nest-xl border border-nest-console-border overflow-hidden shadow-modal">
          {/* Top Bar */}
          <div className="p-4 sm:p-5 border-b border-nest-console-border bg-nest-console-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-nest-blue/20 border border-nest-blue/40 flex items-center justify-center text-nest-blue">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-white">github.com/cloudnest/web-frontend</span>
                  <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-nest-blue/20 text-nest-cyan">
                    branch: main
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-nest-console-muted font-mono mt-0.5">
                  <span>Commit: 7f8a91c</span>
                  <span>·</span>
                  <span>Target: production</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulateDeploy}
                disabled={isDeploying}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-nest-blue hover:bg-nest-blue-deep text-white text-xs font-semibold rounded-nest transition-colors disabled:opacity-50"
              >
                {isDeploying ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deploying...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Deployment</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRollback}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-nest transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-nest-amber" />
                <span>Roll Back</span>
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          {isDeploying && (
            <div className="w-full bg-nest-console-border h-1.5 overflow-hidden">
              <div
                className="bg-nest-blue h-full transition-all duration-300"
                style={{ width: `${deployProgress}%` }}
              />
            </div>
          )}

          {/* Terminal Logs & Output */}
          <div className="p-5 font-mono text-xs space-y-1.5 min-h-[220px] bg-nest-console-bg">
            {consoleOutput.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-nest-console-muted select-none text-[10px] w-5 mt-0.5">
                  {idx + 1}
                </span>
                <span
                  className={
                    line.includes('✓') || line.includes('successful')
                      ? 'text-nest-green'
                      : line.startsWith('$')
                      ? 'text-nest-cyan font-bold'
                      : 'text-nest-console-text'
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Controls */}
          <div className="px-5 py-3 border-t border-nest-console-border bg-nest-console-surface flex flex-col sm:flex-row items-center justify-between text-xs text-nest-console-muted gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-nest-green" />
              <span>Environment active at: <a href="https://app.cloudnest.io" target="_blank" rel="noreferrer" className="text-nest-cyan hover:underline">https://app.cloudnest.io</a></span>
            </div>

            <button
              onClick={() => onInspectLogs(sampleDeployment)}
              className="text-xs text-nest-blue hover:underline font-mono flex items-center gap-1"
            >
              <span>Inspect Full Build Logs</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

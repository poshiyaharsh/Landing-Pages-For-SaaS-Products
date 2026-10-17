import React from 'react';
import { X, Terminal, CheckCircle2, Copy, ArrowDownCircle } from 'lucide-react';
import { DeploymentItem } from '../types';

interface DeploymentLogsModalProps {
  deployment: DeploymentItem | null;
  isOpen: boolean;
  onClose: () => void;
  onToast?: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const DeploymentLogsModal: React.FC<DeploymentLogsModalProps> = ({
  deployment,
  isOpen,
  onClose,
  onToast,
}) => {
  if (!isOpen || !deployment) return null;

  const handleCopyLogs = () => {
    navigator.clipboard.writeText(deployment.logs.join('\n'));
    onToast?.('Build Logs Copied', 'Raw deployment transcript copied to clipboard.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nest-text/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-nest-console-bg border border-nest-console-border rounded-nest-lg shadow-modal overflow-hidden text-nest-console-text">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-nest-console-border bg-nest-console-surface">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-nest-cyan font-semibold">{deployment.serviceName}</span>
              <span className="text-nest-console-muted">/</span>
              <span className="text-white">{deployment.commitId}</span>
              <span className="text-nest-console-muted">({deployment.branch})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLogs}
              className="p-1 text-nest-console-muted hover:text-white rounded transition-colors text-xs flex items-center gap-1"
              title="Copy output"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-nest-console-muted hover:text-white rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-xs space-y-2 max-h-[420px] overflow-y-auto terminal-scroll bg-nest-console-bg">
          <div className="text-nest-console-muted text-[11px] pb-2 border-b border-nest-console-border flex items-center justify-between">
            <span>Commit: {deployment.commitMsg}</span>
            <span className="text-nest-cyan">{deployment.duration} total build time</span>
          </div>

          <div className="pt-2 space-y-1.5 leading-relaxed">
            {deployment.logs.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-nest-console-muted select-none text-[10px] w-6 shrink-0 mt-0.5">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <span
                  className={
                    line.includes('successful') || line.includes('passed') || line.includes('completed')
                      ? 'text-nest-green'
                      : line.includes('warning')
                      ? 'text-nest-amber'
                      : 'text-nest-console-text'
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-nest-console-border flex items-center gap-2 text-[11px] text-nest-green font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Health check probes responding HTTP 200 across all availability zones.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-nest-console-border bg-nest-console-surface flex items-center justify-between text-xs text-nest-console-muted">
          <span>Simulation telemetry · CloudNest Runner Engine v4.2</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs transition-colors"
          >
            Dismiss Terminal
          </button>
        </div>
      </div>
    </div>
  );
};

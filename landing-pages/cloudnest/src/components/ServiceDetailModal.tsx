import React from 'react';
import { X, Server, Activity, Cpu, HardDrive, Clock, ExternalLink, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLogs?: (serviceName: string) => void;
  onToast?: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onOpenLogs,
  onToast,
}) => {
  if (!isOpen || !service) return null;

  const handleRestart = () => {
    onToast?.(
      'Rolling Restart Scheduled',
      `Orchestrating zero-downtime rolling restart of ${service.replicas} pods for ${service.name}.`,
      'blue'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nest-text/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-nest-border rounded-nest-lg shadow-modal overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-nest-border bg-nest-subtle/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white border border-nest-border flex items-center justify-center text-nest-blue shadow-subtle shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold font-display text-nest-text">{service.name}</h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.2 rounded bg-nest-blue-soft text-nest-blue font-semibold">
                  {service.category}
                </span>
                <span className="text-[10px] font-mono text-nest-green flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3" /> Operational
                </span>
              </div>
              <p className="text-xs text-nest-secondary font-mono mt-0.5">
                Version {service.version} · {service.environment}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-nest-muted hover:text-nest-text rounded-md hover:bg-nest-subtle transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-nest-bg rounded-nest border border-nest-border">
              <span className="text-[10px] font-mono uppercase text-nest-muted block">CPU Load</span>
              <span className="text-base font-bold font-mono text-nest-text mt-0.5 block">{service.cpu}</span>
              <span className="text-[10px] text-nest-green font-mono">Normal</span>
            </div>

            <div className="p-3 bg-nest-bg rounded-nest border border-nest-border">
              <span className="text-[10px] font-mono uppercase text-nest-muted block">Memory</span>
              <span className="text-base font-bold font-mono text-nest-text mt-0.5 block truncate">
                {service.memory.split('/')[0].trim()}
              </span>
              <span className="text-[10px] text-nest-secondary font-mono">Limit: {service.memory.split('/')[1]?.trim() || '2 GB'}</span>
            </div>

            <div className="p-3 bg-nest-bg rounded-nest border border-nest-border">
              <span className="text-[10px] font-mono uppercase text-nest-muted block">Latency</span>
              <span className="text-base font-bold font-mono text-nest-text mt-0.5 block">{service.latency}</span>
              <span className="text-[10px] text-nest-green font-mono">p95 SLA</span>
            </div>

            <div className="p-3 bg-nest-bg rounded-nest border border-nest-border">
              <span className="text-[10px] font-mono uppercase text-nest-muted block">Replicas</span>
              <span className="text-base font-bold font-mono text-nest-text mt-0.5 block">{service.replicas} Pods</span>
              <span className="text-[10px] text-nest-secondary font-mono">Autoscale: On</span>
            </div>
          </div>

          {/* Service Configuration & Endpoints */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-nest-muted font-semibold">
              Network & Ingress Coordinates
            </h4>
            <div className="p-3.5 bg-nest-console-bg text-nest-console-text rounded-nest font-mono text-xs space-y-1.5 border border-nest-console-border">
              <div className="flex items-center justify-between">
                <span className="text-nest-console-muted">Internal DNS:</span>
                <span className="text-nest-cyan truncate max-w-[260px]">{service.endpoint}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-nest-console-muted">Service Port:</span>
                <span className="text-white">{service.port || 8080} (TCP/HTTP2)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-nest-console-muted">Observed Uptime:</span>
                <span className="text-nest-green">{service.uptime}</span>
              </div>
            </div>
          </div>

          {/* Dependencies */}
          {service.dependencies.length > 0 && (
            <div className="space-y-2 text-xs">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-nest-muted font-semibold">
                Connected Dependencies ({service.dependencies.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.dependencies.map((dep) => (
                  <span
                    key={dep}
                    className="px-2.5 py-1 bg-nest-bg border border-nest-border rounded font-mono text-[11px] text-nest-secondary"
                  >
                    → {dep}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-nest-border bg-nest-subtle/50 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              onClose();
              onOpenLogs?.(service.name);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-nest-border hover:bg-nest-subtle text-nest-text font-medium rounded-nest transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-nest-blue" />
            <span>Stream Service Logs</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-nest-border hover:bg-nest-subtle text-nest-text font-medium rounded-nest transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-nest-secondary" />
              <span>Rolling Restart</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-nest-text text-white hover:bg-black font-medium rounded-nest transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

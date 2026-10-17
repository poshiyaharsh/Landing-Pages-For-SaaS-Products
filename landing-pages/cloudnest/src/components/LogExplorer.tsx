import React, { useState } from 'react';
import { Terminal, Search, Copy, Filter, AlertCircle, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { LogEntry } from '../types';
import { SAMPLE_LOGS } from '../data/sampleData';

interface LogExplorerProps {
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
  filterService?: string;
}

export const LogExplorer: React.FC<LogExplorerProps> = ({ onToast, filterService }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'ALL' | 'INFO' | 'WARN' | 'ERROR'>('ALL');
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);

  const filteredLogs = SAMPLE_LOGS.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = severityFilter === 'ALL' || log.severity === severityFilter;
    const matchesServiceParam = !filterService || log.service.includes(filterService);

    return matchesSearch && matchesSeverity && matchesServiceParam;
  });

  const handleCopyLog = (text: string) => {
    navigator.clipboard.writeText(text);
    onToast('Log Copied', 'Log message copied to clipboard.', 'success');
  };

  return (
    <section id="logs" className="py-24 bg-nest-console-bg text-nest-console-text border-b border-nest-console-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-cyan font-semibold">
            CENTRALIZED TELEMETRY STREAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mt-3">
            Find the signal in your logs.
          </h2>
          <p className="text-base text-nest-console-muted mt-3 leading-relaxed">
            Search, filter, and inspect distributed application logs across services in real time. Zero SSH key rotation, zero unindexed log silos.
          </p>
        </div>

        {/* Technical Log Console Window */}
        <div className="bg-nest-console-surface border border-nest-console-border rounded-nest-xl shadow-modal overflow-hidden">
          {/* Controls Bar */}
          <div className="p-4 border-b border-nest-console-border bg-nest-console-bg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-nest-console-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by query, status code, trace_id, or error..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-nest-console-surface border border-nest-console-border rounded-nest text-white placeholder:text-nest-console-muted focus:border-nest-cyan focus:outline-none font-mono"
              />
            </div>

            {/* Severity Filter Tabs */}
            <div className="flex items-center gap-1 font-mono text-xs">
              {(['ALL', 'INFO', 'WARN', 'ERROR'] as const).map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSeverityFilter(sev)}
                  className={`px-3 py-1 rounded transition-colors text-[11px] font-semibold ${
                    severityFilter === sev
                      ? sev === 'ERROR'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : sev === 'WARN'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-nest-blue text-white'
                      : 'text-nest-console-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sev}
                </button>
              ))}
              <span className="text-[11px] text-nest-console-muted ml-2">
                {filteredLogs.length} events
              </span>
            </div>
          </div>

          {/* Logs Stream View */}
          <div className="p-4 font-mono text-xs max-h-[460px] overflow-y-auto terminal-scroll space-y-1 bg-nest-console-bg">
            {filteredLogs.length === 0 ? (
              <div className="py-12 text-center text-nest-console-muted">
                No log entries match your active search and severity filters.
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div
                  key={log.id}
                  onClick={() => setSelectedLog(log)}
                  className="p-2 rounded hover:bg-nest-console-surface/70 transition-colors flex items-center justify-between gap-3 group cursor-pointer border border-transparent hover:border-nest-console-border"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-nest-console-muted text-[11px] shrink-0 select-none">
                      {log.timestamp}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded shrink-0 uppercase ${
                        log.severity === 'ERROR'
                          ? 'bg-rose-500/20 text-rose-400'
                          : log.severity === 'WARN'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-nest-blue/20 text-nest-cyan'
                      }`}
                    >
                      {log.severity}
                    </span>

                    <span className="text-white font-medium shrink-0 max-w-[110px] truncate">
                      {log.service}
                    </span>

                    <span className="text-slate-300 truncate">
                      {log.message}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyLog(`${log.timestamp} [${log.severity}] ${log.service}: ${log.message}`);
                      }}
                      className="p-1 hover:text-white text-nest-console-muted"
                      title="Copy log entry"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                    <ChevronRight className="w-3.5 h-3.5 text-nest-console-muted" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 border-t border-nest-console-border bg-nest-console-surface flex items-center justify-between text-xs text-nest-console-muted font-mono">
            <span>Live streaming log buffer: 10,000 max entries</span>
            <span>Zero credentials exposed in telemetry</span>
          </div>
        </div>

        {/* Selected Log Drawer Modal */}
        {selectedLog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-nest-console-surface border border-nest-console-border rounded-nest-lg max-w-lg w-full p-6 text-nest-console-text shadow-modal space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-nest-console-border">
                <span className="font-bold text-white uppercase text-[11px]">Log Entry Diagnostics</span>
                <button onClick={() => setSelectedLog(null)} className="text-nest-console-muted hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-nest-console-border/60">
                  <span className="text-nest-console-muted">Timestamp:</span>
                  <span className="text-white">{selectedLog.timestamp}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-nest-console-border/60">
                  <span className="text-nest-console-muted">Severity:</span>
                  <span className={selectedLog.severity === 'ERROR' ? 'text-rose-400 font-bold' : 'text-nest-cyan font-bold'}>
                    {selectedLog.severity}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-nest-console-border/60">
                  <span className="text-nest-console-muted">Service Container:</span>
                  <span className="text-white">{selectedLog.service}</span>
                </div>
                {selectedLog.host && (
                  <div className="flex justify-between py-1 border-b border-nest-console-border/60">
                    <span className="text-nest-console-muted">Kubernetes Host Pod:</span>
                    <span className="text-white">{selectedLog.host}</span>
                  </div>
                )}
                {selectedLog.traceId && (
                  <div className="flex justify-between py-1 border-b border-nest-console-border/60">
                    <span className="text-nest-console-muted">Distributed Trace ID:</span>
                    <span className="text-nest-cyan">{selectedLog.traceId}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-[10px] text-nest-console-muted uppercase">Full Uncompressed Message</span>
                <div className="p-3 bg-nest-console-bg border border-nest-console-border rounded text-white leading-relaxed whitespace-pre-wrap select-all">
                  {selectedLog.message}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => handleCopyLog(selectedLog.message)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs transition-colors"
                >
                  Copy Message
                </button>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="px-3 py-1.5 bg-nest-blue hover:bg-nest-blue-deep text-white rounded text-xs transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

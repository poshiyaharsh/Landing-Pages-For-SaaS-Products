import React, { useState } from 'react';
import { Activity, Clock, AlertTriangle, CheckCircle2, TrendingUp, BarChart2, ShieldCheck } from 'lucide-react';

export const MonitoringDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d'>('24h');

  // Dynamic telemetry metrics based on timeRange
  const telemetryData = {
    '1h': {
      reqVolume: '1.24M',
      avgLatency: '28ms',
      errorRate: '0.012%',
      cpuAvg: '36%',
      memAvg: '58%',
      bars: [30, 42, 38, 55, 48, 62, 50, 44, 52, 40, 38, 42],
    },
    '24h': {
      reqVolume: '28.4M',
      avgLatency: '34ms',
      errorRate: '0.018%',
      cpuAvg: '42%',
      memAvg: '61%',
      bars: [45, 52, 60, 48, 70, 65, 80, 72, 64, 58, 60, 62],
    },
    '7d': {
      reqVolume: '184.2M',
      avgLatency: '36ms',
      errorRate: '0.024%',
      cpuAvg: '44%',
      memAvg: '64%',
      bars: [55, 64, 70, 75, 68, 85, 78, 82, 70, 65, 74, 80],
    },
  }[timeRange];

  const recentTimeline = [
    { type: 'deploy', title: 'web-frontend rolled to sha-7f8a91c', time: '14 minutes ago', status: 'Healthy' },
    { type: 'alert', title: 'Redis memory warning resolved (eviction buffer OK)', time: '42 minutes ago', status: 'Resolved' },
    { type: 'config', title: 'Autoscaler min replica threshold increased from 2 to 4', time: '2 hours ago', status: 'Applied' },
    { type: 'restart', title: 'postgres-replica-02 background compaction finished', time: '4 hours ago', status: 'Success' },
  ];

  return (
    <section id="monitoring" className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
              UNIFIED OBSERVABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
              Know what is happening. Before it becomes a problem.
            </h2>
            <p className="text-base text-nest-secondary mt-3 leading-relaxed">
              Consolidate distributed metrics, query latencies, and service error rates. Filter ranges to understand traffic surges and anomaly trends.
            </p>
          </div>

          {/* Time Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-nest-bg border border-nest-border rounded-nest self-start md:self-auto">
            <Clock className="w-3.5 h-3.5 text-nest-muted ml-2" />
            {(['1h', '24h', '7d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-white text-nest-text shadow-subtle'
                    : 'text-nest-secondary hover:text-nest-text'
                }`}
              >
                {range === '1h' ? 'Last Hour' : range === '24h' ? 'Last 24 Hours' : 'Last 7 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Observability Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-nest-bg border border-nest-border rounded-nest p-5 space-y-1.5">
            <span className="text-xs font-mono text-nest-secondary uppercase">Request Volume</span>
            <div className="text-3xl font-bold font-mono text-nest-text">{telemetryData.reqVolume}</div>
            <span className="text-[11px] font-mono text-nest-green">+8.4% vs previous interval</span>
          </div>

          <div className="bg-nest-bg border border-nest-border rounded-nest p-5 space-y-1.5">
            <span className="text-xs font-mono text-nest-secondary uppercase">Response Latency (p95)</span>
            <div className="text-3xl font-bold font-mono text-nest-text">{telemetryData.avgLatency}</div>
            <span className="text-[11px] font-mono text-nest-green">Within 50ms SLA target</span>
          </div>

          <div className="bg-nest-bg border border-nest-border rounded-nest p-5 space-y-1.5">
            <span className="text-xs font-mono text-nest-secondary uppercase">Error Rate (HTTP 5xx)</span>
            <div className="text-3xl font-bold font-mono text-nest-green">{telemetryData.errorRate}</div>
            <span className="text-[11px] font-mono text-nest-secondary">49 errors / 2.8M calls</span>
          </div>

          <div className="bg-nest-bg border border-nest-border rounded-nest p-5 space-y-1.5">
            <span className="text-xs font-mono text-nest-secondary uppercase">Active Service Health</span>
            <div className="text-3xl font-bold font-display text-nest-text">8 / 8 Online</div>
            <span className="text-[11px] font-mono text-nest-green">0 Degraded Services</span>
          </div>
        </div>

        {/* Chart & Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Chart Visualizer (col-span-7) */}
          <div className="lg:col-span-7 bg-nest-bg border border-nest-border rounded-nest-xl p-6 shadow-subtle space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-nest-border">
              <h4 className="font-bold font-display text-nest-text text-sm">
                Cluster Request Throughput & CPU Trend ({timeRange})
              </h4>
              <span className="text-xs font-mono text-nest-blue bg-nest-blue-soft px-2 py-0.5 rounded">
                Live Stream
              </span>
            </div>

            {/* Custom SVG / CSS Bar Histogram */}
            <div className="bg-white border border-nest-border rounded-nest p-4 space-y-3">
              <div className="h-44 flex items-end justify-between gap-1.5 pt-6 pb-2 px-2 border-b border-nest-border/60">
                {telemetryData.bars.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    <div
                      className="w-full bg-nest-blue/80 group-hover:bg-nest-blue rounded-t transition-all duration-300"
                      style={{ height: `${val}%` }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-7 bg-nest-text text-white text-[9px] font-mono py-0.5 px-1.5 rounded pointer-events-none transition-opacity whitespace-nowrap z-20">
                      {val}% load
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-mono text-nest-muted px-2">
                <span>Interval Start</span>
                <span>Peak Load ({telemetryData.cpuAvg})</span>
                <span>Current</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-nest-secondary pt-1">
              <span>Telemetry interval sampled every 10s</span>
              <span className="text-nest-green">● Prometheus Exporter Online</span>
            </div>
          </div>

          {/* Activity Timeline (col-span-5) */}
          <div className="lg:col-span-5 bg-nest-bg border border-nest-border rounded-nest-xl p-6 shadow-subtle space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-nest-border">
                <h4 className="font-bold font-display text-nest-text text-sm">
                  Operational Activity Timeline
                </h4>
                <span className="text-xs font-mono text-nest-muted">Audit Stream</span>
              </div>

              <div className="space-y-3 mt-4">
                {recentTimeline.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white border border-nest-border rounded-nest flex items-start justify-between gap-2 text-xs"
                  >
                    <div className="space-y-0.5">
                      <span className="font-semibold text-nest-text block leading-snug">{item.title}</span>
                      <span className="text-[10px] text-nest-muted font-mono">{item.time}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-nest-green font-medium shrink-0">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] font-mono text-nest-muted pt-3 border-t border-nest-border">
              * Demonstration telemetry based on standard production microservice benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Filter,
  RotateCcw,
  Calendar,
  Layers,
  ArrowUpRight,
  Info,
  SlidersHorizontal,
  Table as TableIcon,
  BarChart2,
  Sparkles,
  Download,
  CheckCircle,
} from 'lucide-react';
import {
  segmentData,
  dateRangeMultipliers,
  detailedMetricsTable,
} from '../data/sampleData';
import { DateRange, CustomerSegment, MetricType } from '../types';

interface InteractiveDashboardProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'warning') => void;
}

export const InteractiveDashboard: React.FC<InteractiveDashboardProps> = ({ onShowToast }) => {
  const [selectedRange, setSelectedRange] = useState<DateRange>('90D');
  const [selectedSegment, setSelectedSegment] = useState<CustomerSegment>('all');
  const [activeMetric, setActiveMetric] = useState<MetricType>('arr');
  const [viewMode, setViewMode] = useState<'overview' | 'table'>('overview');
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  const currentDataset = segmentData[selectedSegment];
  const multiplier = dateRangeMultipliers[selectedRange];

  const handleReset = () => {
    setSelectedRange('90D');
    setSelectedSegment('all');
    setActiveMetric('arr');
    setViewMode('overview');
    setHoveredPointIndex(null);
    onShowToast('Dashboard filters reset to executive default (90-Day All Segments).', 'info');
  };

  const handleExport = () => {
    onShowToast(`Exporting ${selectedSegment.toUpperCase()} cohort analysis (${selectedRange}) as signed CSV...`, 'success');
  };

  // Scaled values based on date range
  const scaledKpis = currentDataset.kpis.map((kpi) => {
    if (kpi.id === 'arr') {
      const baseNum = parseFloat(kpi.value.replace(/[^0-9.]/g, ''));
      const adjusted = (baseNum * multiplier).toFixed(2);
      return { ...kpi, value: `$${adjusted}M` };
    }
    if (kpi.id === 'customers') {
      const baseNum = parseInt(kpi.value.replace(/,/g, ''), 10);
      const adjusted = Math.round(baseNum * multiplier).toLocaleString();
      return { ...kpi, value: adjusted };
    }
    return kpi;
  });

  // Calculate SVG chart coordinates for revenue trend
  const chartPoints = currentDataset.revenueTrend.map((pt, idx, arr) => {
    const x = (idx / (arr.length - 1)) * 520 + 40;
    // Normalize revenue between 200k and 1500k to Y coordinate 20-180
    const normalized = (pt.revenue - 200) / 1200;
    const y = 170 - normalized * 130;
    return { x, y, ...pt };
  });

  const pathD = chartPoints.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${chartPoints[chartPoints.length - 1].x} 190 L ${chartPoints[0].x} 190 Z`;

  return (
    <section id="demo" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXECUTIVE WORKSPACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See analytics in action.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test real-time segmentation, trend exploration, and funnel decomposition against our illustrative enterprise dataset.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="bg-slate-900/80 p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {/* Segment Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-cyan-400" /> Cohort:
              </span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs">
                {(['all', 'enterprise', 'midmarket', 'smb'] as CustomerSegment[]).map((seg) => (
                  <button
                    key={seg}
                    onClick={() => {
                      setSelectedSegment(seg);
                      onShowToast(`Filter switched to ${seg.toUpperCase()} cohort`, 'info');
                    }}
                    className={`px-3 py-1 rounded-md font-medium capitalize transition-all ${
                      selectedSegment === seg
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {seg === 'all' ? 'All Segments' : seg}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Range Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Horizon:
              </span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs font-mono">
                {(['7D', '30D', '90D', 'YTD', '1Y'] as DateRange[]).map((rng) => (
                  <button
                    key={rng}
                    onClick={() => {
                      setSelectedRange(rng);
                      onShowToast(`Timeframe shifted to ${rng}`, 'info');
                    }}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                      selectedRange === rng
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {rng}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode & Reset Actions */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs">
                <button
                  onClick={() => setViewMode('overview')}
                  className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all ${
                    viewMode === 'overview'
                      ? 'bg-slate-800 text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Telemetry</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all ${
                    viewMode === 'table'
                      ? 'bg-slate-800 text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Data Grid</span>
                </button>
              </div>

              <button
                onClick={handleExport}
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Export current cohort report"
                aria-label="Export report"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                title="Reset to default view"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Sample dataset banner disclaimer */}
          <div className="bg-cyan-950/40 border-b border-cyan-900/40 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-cyan-300">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Notice: Illustrative cohort simulation. No proprietary or live customer metrics are queried.
            </span>
            <span className="hidden md:inline text-slate-500">Query Latency: 12ms</span>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Dynamic KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {scaledKpis.map((kpi) => (
                <div
                  key={kpi.id}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">{kpi.label}</span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-0.5 ${
                        kpi.changeType === 'positive'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                          : 'bg-rose-950 text-rose-400 border border-rose-800/50'
                      }`}
                    >
                      {kpi.changeType === 'positive' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mt-2 tracking-tight">
                    {kpi.value}
                  </p>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    {kpi.timeframe}
                  </span>
                </div>
              ))}
            </div>

            {viewMode === 'overview' ? (
              <>
                {/* Main Visualization Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Revenue / Velocity Interactive Line Chart */}
                  <div className="lg:col-span-2 rounded-xl bg-slate-900/40 border border-slate-800/90 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>Revenue Run-rate Velocity</span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-800 text-cyan-400 rounded">
                            {selectedSegment}
                          </span>
                        </h3>
                        <p className="text-xs text-slate-400">Monthly net recognized telemetry</p>
                      </div>

                      {/* Metric Toggle inside Chart */}
                      <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs">
                        <button
                          onClick={() => setActiveMetric('arr')}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                            activeMetric === 'arr' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                          }`}
                        >
                          ARR Velocity
                        </button>
                        <button
                          onClick={() => setActiveMetric('nrr')}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                            activeMetric === 'nrr' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                          }`}
                        >
                          NRR Expansion
                        </button>
                      </div>
                    </div>

                    {/* Chart Canvas */}
                    <div className="relative">
                      <svg
                        className="w-full h-56 sm:h-64 overflow-visible"
                        viewBox="0 0 600 200"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        <line x1="40" y1="40" x2="560" y2="40" stroke="#1E293B" strokeDasharray="3 3" />
                        <line x1="40" y1="90" x2="560" y2="90" stroke="#1E293B" strokeDasharray="3 3" />
                        <line x1="40" y1="140" x2="560" y2="140" stroke="#1E293B" strokeDasharray="3 3" />
                        <line x1="40" y1="190" x2="560" y2="190" stroke="#334155" />

                        {/* Shaded Area */}
                        <path d={areaD} fill="url(#chartGradient)" />

                        {/* Line */}
                        <path d={pathD} fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />

                        {/* Data Points */}
                        {chartPoints.map((pt, idx) => (
                          <g key={pt.month} className="cursor-pointer">
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={hoveredPointIndex === idx ? 7 : 4}
                              className={`transition-all ${
                                hoveredPointIndex === idx
                                  ? 'fill-cyan-300 stroke-cyan-500 stroke-2'
                                  : 'fill-cyan-400'
                              }`}
                              onMouseEnter={() => setHoveredPointIndex(idx)}
                              onMouseLeave={() => setHoveredPointIndex(null)}
                            />
                            {/* X-axis labels */}
                            <text
                              x={pt.x}
                              y="210"
                              fill="#64748B"
                              fontSize="10"
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              {pt.month}
                            </text>
                          </g>
                        ))}
                      </svg>

                      {/* Tooltip Hover Overlay */}
                      {hoveredPointIndex !== null && (
                        <div
                          className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/50 shadow-xl text-xs font-mono"
                          style={{
                            left: `${(hoveredPointIndex / (chartPoints.length - 1)) * 88 + 6}%`,
                            top: `${chartPoints[hoveredPointIndex].y - 20}px`,
                          }}
                        >
                          <p className="text-white font-bold">{chartPoints[hoveredPointIndex].month}</p>
                          <p className="text-cyan-400">
                            ARR: ${chartPoints[hoveredPointIndex].revenue.toLocaleString()},000
                          </p>
                          <p className="text-slate-400 text-[10px]">
                            ARR Target: ${chartPoints[hoveredPointIndex].target.toLocaleString()},000
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Recognized ARR
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-0.5 bg-slate-600" /> Target Benchmark
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">
                        Pacing +14.2% over plan
                      </span>
                    </div>
                  </div>

                  {/* Funnel & Conversion Stages */}
                  <div className="rounded-xl bg-slate-900/40 border border-slate-800/90 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">Conversion Funnel Velocity</h3>
                      <p className="text-xs text-slate-400 mb-4">Pipeline stage transition rates</p>

                      <div className="space-y-3">
                        {currentDataset.funnel.map((stage) => (
                          <div key={stage.stage} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-medium">{stage.stage}</span>
                              <div className="flex items-center gap-2 font-mono">
                                <span className="text-white font-bold">{stage.count.toLocaleString()}</span>
                                <span className="text-cyan-400 text-[11px]">({stage.conversion})</span>
                              </div>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
                                style={{ width: stage.conversion }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Funnel Note */}
                    <div className="mt-5 p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                      <span className="text-cyan-400 font-mono font-semibold block mb-0.5">
                        Stage 3 Optimization:
                      </span>
                      Discovery-to-POC rate increased by +3.4% following automated buyer intent scoring.
                    </div>
                  </div>
                </div>

                {/* AI Executive Insight & Recent Activity */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Automated Insight Annotation */}
                  <div className="md:col-span-2 rounded-xl bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-800/40 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>{currentDataset.insightAnnotation.title}</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      "{currentDataset.insightAnnotation.body}"
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Confidence Score: {currentDataset.insightAnnotation.confidence}
                      </span>
                      <button
                        onClick={() => onShowToast('Executive brief compiled and dispatched to Slack #leadership-data', 'success')}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono inline-flex items-center gap-1"
                      >
                        Forward Briefing to Team <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="rounded-xl bg-slate-900/40 border border-slate-800 p-4">
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">Live Anomaly Stream</h4>
                    <div className="space-y-2.5">
                      {currentDataset.recentActivity.map((act) => (
                        <div key={act.id} className="text-xs border-b border-slate-800/60 pb-2 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono">
                            <span>{act.actor}</span>
                            <span>{act.time}</span>
                          </div>
                          <p className="text-slate-200 mt-0.5">{act.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Detailed Metrics Data Table */
              <div className="rounded-xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="px-4 py-3">Metric Dimension</th>
                      <th className="px-4 py-3">Current Value</th>
                      <th className="px-4 py-3">Target KPI</th>
                      <th className="px-4 py-3">Period Variance</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                    {detailedMetricsTable.map((row) => (
                      <tr key={row.metric} className="hover:bg-slate-900/50">
                        <td className="px-4 py-3 font-semibold text-white">{row.metric}</td>
                        <td className="px-4 py-3 text-cyan-400">{row.current}</td>
                        <td className="px-4 py-3 text-slate-400">{row.target}</td>
                        <td className="px-4 py-3 text-emerald-400">{row.variance}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px]">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

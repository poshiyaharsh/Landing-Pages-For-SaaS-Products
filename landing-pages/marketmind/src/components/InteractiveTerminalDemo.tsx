import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Filter,
  RotateCcw,
  Calendar,
  Layers,
  FileText,
  Search,
  Activity,
  Terminal,
  Save,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { sampleAssets, macroIndicators, syntheticEvents } from '../data/sampleData';
import { MarketAsset, SectorFilter, TimeHorizon } from '../types';

interface InteractiveTerminalDemoProps {
  onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const InteractiveTerminalDemo: React.FC<InteractiveTerminalDemoProps> = ({ onShowToast }) => {
  const [selectedSector, setSelectedSector] = useState<SectorFilter>('all');
  const [selectedSymbol, setSelectedSymbol] = useState<string>(sampleAssets[1].symbol); // NVX.SEMI
  const [selectedHorizon, setSelectedHorizon] = useState<TimeHorizon>('1D');
  const [searchQuery, setSearchQuery] = useState('');
  const [researchNote, setResearchNote] = useState(
    'Catalyst Evaluation: Q4 wafer allocation for NVX accelerators increased by 18% following hyperscaler capacity expansion. Forward P/E compressing as revenue guidance rises.'
  );

  // Active asset
  const activeAsset =
    sampleAssets.find((a) => a.symbol === selectedSymbol) || sampleAssets[0];

  // Filtering assets
  const filteredAssets = sampleAssets.filter((asset) => {
    const matchesSector = selectedSector === 'all' || asset.sector === selectedSector;
    const matchesQuery =
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesQuery;
  });

  const handleReset = () => {
    setSelectedSector('all');
    setSelectedSymbol(sampleAssets[1].symbol);
    setSelectedHorizon('1D');
    setSearchQuery('');
    setResearchNote(
      'Catalyst Evaluation: Q4 wafer allocation for NVX accelerators increased by 18% following hyperscaler capacity expansion.'
    );
    onShowToast('Terminal reset to baseline watchlist.', 'info');
  };

  const handleSaveNotes = () => {
    onShowToast(`Research notes for ${activeAsset.symbol} saved to local session.`, 'success');
  };

  // SVG Chart points calculation
  const series = activeAsset.series;
  const values = series.map((s) => s.value);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = maxVal - minVal || 1;

  const chartPoints = series.map((pt, idx, arr) => {
    const x = (idx / (arr.length - 1)) * 520 + 40;
    const normalized = (pt.value - minVal) / range;
    const y = 160 - normalized * 110;
    return { x, y, ...pt };
  });

  const pathD = chartPoints.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${chartPoints[chartPoints.length - 1].x} 180 L ${chartPoints[0].x} 180 Z`;

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#080C14] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1626] border border-amber-500/30 text-amber-400 text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL MARKET TERMINAL DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-density market workstation.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Select any asset to inspect historical series, correlate macro spreads, and record audit-ready investment theses.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-xl bg-[#0B101D] border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 bg-[#0E1626] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            {/* Search Input */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="FILTER TICKER OR NAME..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-xs uppercase"
                />
              </div>
            </div>

            {/* Sector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {(['all', 'semiconductors', 'technology', 'macro', 'energy', 'crypto'] as SectorFilter[]).map(
                (sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedSector(sec)}
                    className={`px-2.5 py-1 rounded uppercase text-[11px] transition-all whitespace-nowrap ${
                      selectedSector === sec
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white bg-[#080C14] border border-white/5'
                    }`}
                  >
                    {sec}
                  </button>
                )
              )}
            </div>

            {/* Horizon Presets & Reset */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded bg-[#080C14] p-0.5 border border-white/10 text-[11px]">
                {(['1D', '1W', '1M', '1Y', '5Y'] as TimeHorizon[]).map((hor) => (
                  <button
                    key={hor}
                    onClick={() => {
                      setSelectedHorizon(hor);
                      onShowToast(`Timeseries resolution changed to ${hor}`, 'info');
                    }}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      selectedHorizon === hor ? 'bg-[#17223B] text-amber-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {hor}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#080C14] border border-white/10 text-[11px] text-slate-400 hover:text-amber-400"
                title="Reset terminal"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Synthetic Disclosure Strip */}
          <div className="bg-amber-950/30 border-b border-amber-500/20 px-4 py-1.5 flex items-center justify-between text-[11px] text-amber-300/90">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Notice: Illustrative dataset — not live market data. No commercial exchange affiliation or brokerage services.
            </span>
            <span className="hidden md:inline text-slate-400">TICK RESOLUTION: {selectedHorizon}</span>
          </div>

          {/* Main Terminal 3-Column Workstation */}
          <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column: Watchlist (4 Cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-white/5">
                <span>WATCHLIST ({filteredAssets.length})</span>
                <span>CHG %</span>
              </div>

              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredAssets.map((asset) => {
                  const isSelected = asset.symbol === activeAsset.symbol;
                  return (
                    <div
                      key={asset.symbol}
                      onClick={() => setSelectedSymbol(asset.symbol)}
                      className={`p-3 rounded cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-[#17223B] border-amber-500/80 shadow'
                          : 'bg-[#0E1626] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-xs">{asset.symbol}</span>
                            <span className="text-[10px] uppercase text-slate-400">{asset.sector}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 block truncate max-w-[170px]">
                            {asset.name}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-bold text-slate-200 block">{asset.price}</span>
                          <span
                            className={`text-[10px] font-bold ${
                              asset.isPositive ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {asset.changePercent}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle Column: Active Asset Chart & Stats (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded bg-[#0E1626] border border-white/10 space-y-3">
                {/* Active Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">{activeAsset.symbol}</h3>
                      <span className="text-xs text-amber-400">[{activeAsset.name}]</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-1">
                      <span className="text-2xl font-black text-white">{activeAsset.price}</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          activeAsset.isPositive
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                            : 'bg-rose-950 text-rose-400 border border-rose-800/40'
                        }`}
                      >
                        {activeAsset.changeValue} ({activeAsset.changePercent})
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-slate-400">
                    <span className="block">MCAP: {activeAsset.marketCap}</span>
                    <span className="block">VOL: {activeAsset.volume24h}</span>
                    <span className="block">BETA: {activeAsset.beta}</span>
                  </div>
                </div>

                {/* SVG Chart */}
                <div className="pt-2">
                  <svg className="w-full h-44 overflow-visible" viewBox="0 0 600 200">
                    <defs>
                      <linearGradient id="termGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid */}
                    <line x1="40" y1="50" x2="560" y2="50" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="40" y1="105" x2="560" y2="105" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="40" y1="160" x2="560" y2="160" stroke="#334155" />

                    <path d={areaD} fill="url(#termGrad)" />
                    <path d={pathD} fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

                    {chartPoints.map((pt) => (
                      <g key={pt.time}>
                        <circle cx={pt.x} cy={pt.y} r="3" fill="#F59E0B" />
                        <text
                          x={pt.x}
                          y="180"
                          fill="#64748B"
                          fontSize="9"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          {pt.time}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                  <span className="text-amber-400 font-bold block mb-0.5">Analyst Consensus Summary:</span>
                  <p className="text-slate-300 leading-relaxed font-sans">{activeAsset.thesisSummary}</p>
                </div>
              </div>

              {/* Research Notes Panel */}
              <div className="p-4 rounded bg-[#0E1626] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-400" /> Research Notes & Theses
                  </span>
                  <button
                    onClick={handleSaveNotes}
                    className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save Note</span>
                  </button>
                </div>
                <textarea
                  value={researchNote}
                  onChange={(e) => setResearchNote(e.target.value)}
                  rows={3}
                  className="w-full p-2.5 rounded bg-[#080C14] border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-amber-500"
                  placeholder="Record asset catalyst, price targets, and risks..."
                />
              </div>
            </div>

            {/* Right Column: Macro Indicators & Anomaly News Feed (3 Cols) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Macro Indicators */}
              <div className="p-3.5 rounded bg-[#0E1626] border border-white/10 space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-white/5 pb-1">
                  Macro Monitor (FRED)
                </span>
                <div className="space-y-2 text-xs">
                  {macroIndicators.slice(0, 4).map((macro) => (
                    <div key={macro.code} className="p-2 rounded bg-[#080C14] border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-bold">{macro.code}</span>
                        <span className="text-white font-bold">{macro.current}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                        <span className="truncate pr-1">{macro.label}</span>
                        <span className="text-emerald-400 shrink-0">{macro.variance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Synthetic Events Feed */}
              <div className="p-3.5 rounded bg-[#0E1626] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-white/5 pb-1">
                  Contextual Catalysts
                </span>
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 text-[11px]">
                  {syntheticEvents.map((ev) => (
                    <div key={ev.id} className="p-2 rounded bg-[#080C14] border border-white/5">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                        <span>{ev.time}</span>
                        <span className="text-amber-400">{ev.sector}</span>
                      </div>
                      <p className="text-slate-200 leading-snug">{ev.headline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  Sliders, 
  ShieldCheck, 
  ArrowUpDown, 
  User, 
  Calendar,
  Info
} from 'lucide-react';
import { RiskItem, RiskLevel, RiskStatus } from '../types';

interface RiskRegisterProps {
  risks: RiskItem[];
  onOpenRiskModal: (risk: RiskItem) => void;
}

export const RiskRegister: React.FC<RiskRegisterProps> = ({
  risks,
  onOpenRiskModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<RiskLevel | 'All'>('All');
  const [selectedMatrixCell, setSelectedMatrixCell] = useState<{ l: number; i: number } | null>(null);

  // Filtered risks
  const filteredRisks = risks.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || r.riskLevel === selectedLevel;
    const matchesCell = !selectedMatrixCell || (r.likelihood === selectedMatrixCell.l && r.impact === selectedMatrixCell.i);
    return matchesSearch && matchesLevel && matchesCell;
  });

  // 5x5 helper
  const getCellLevel = (l: number, i: number): { level: RiskLevel; color: string; border: string; text: string } => {
    const score = l * i;
    if (score >= 16) return { level: 'Critical', color: 'bg-[#FBEAEA]', border: 'border-[#C74747]/40', text: 'text-[#C74747]' };
    if (score >= 10) return { level: 'High', color: 'bg-[#FEF3C7]', border: 'border-[#D97706]/40', text: 'text-[#D97706]' };
    if (score >= 5) return { level: 'Moderate', color: 'bg-[#FDF5E8]', border: 'border-[#C17A18]/40', text: 'text-[#C17A18]' };
    return { level: 'Low', color: 'bg-[#E6F6F0]', border: 'border-[#17865C]/40', text: 'text-[#17865C]' };
  };

  const levelStyles: Record<RiskLevel, { bg: string; text: string; border: string }> = {
    'Critical': { bg: 'bg-[#FBEAEA]', text: 'text-[#C74747]', border: 'border-[#C74747]/40' },
    'High': { bg: 'bg-[#FEF3C7]', text: 'text-[#D97706]', border: 'border-[#D97706]/40' },
    'Moderate': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/40' },
    'Low': { bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]', border: 'border-[#17865C]/40' },
  };

  return (
    <section id="risk" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            RISK GOVERNANCE & 5×5 HEAT MAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            See risk clearly. Act deliberately.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Standardize threat evaluation with a structured likelihood and impact matrix. Prioritize remediation based on empirical operational severity.
          </p>
        </div>

        {/* 5x5 Heatmap Matrix + Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Heatmap 5x5 Grid */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#DFE6EF] shadow-subtle">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DFE6EF]">
              <div>
                <h3 className="text-base font-bold text-[#142033] flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#3569D4]" />
                  <span>5 × 5 Likelihood & Impact Matrix</span>
                </h3>
                <p className="text-xs text-[#64748B]">Click any cell to filter associated operational risks.</p>
              </div>

              {selectedMatrixCell && (
                <button
                  onClick={() => setSelectedMatrixCell(null)}
                  className="text-xs text-[#3569D4] hover:underline font-semibold"
                >
                  Clear Cell Filter
                </button>
              )}
            </div>

            {/* Matrix Table */}
            <div className="relative">
              {/* Y-axis label */}
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2 text-center">
                Impact (1 = Insignificant → 5 = Catastrophic)
              </div>

              <div className="grid grid-rows-5 gap-1.5">
                {[5, 4, 3, 2, 1].map((impactVal) => (
                  <div key={impactVal} className="grid grid-cols-6 items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-slate-500 text-right pr-2">
                      I-{impactVal}
                    </span>

                    {[1, 2, 3, 4, 5].map((likelihoodVal) => {
                      const cellConfig = getCellLevel(likelihoodVal, impactVal);
                      const matchingCount = risks.filter(
                        r => r.likelihood === likelihoodVal && r.impact === impactVal
                      ).length;
                      const isSelected = selectedMatrixCell?.l === likelihoodVal && selectedMatrixCell?.i === impactVal;

                      return (
                        <button
                          key={likelihoodVal}
                          onClick={() => setSelectedMatrixCell({ l: likelihoodVal, i: impactVal })}
                          className={`h-11 rounded-lg border text-xs font-mono font-bold transition-all relative flex flex-col items-center justify-center ${cellConfig.color} ${cellConfig.border} ${
                            isSelected ? 'ring-2 ring-[#142C4E] shadow-md scale-105 z-10' : 'hover:scale-[1.02]'
                          }`}
                          title={`Likelihood: ${likelihoodVal}, Impact: ${impactVal} (${cellConfig.level})`}
                        >
                          <span className={`text-[10px] ${cellConfig.text}`}>
                            {likelihoodVal * impactVal}
                          </span>
                          {matchingCount > 0 && (
                            <span className="text-[10px] px-1.5 rounded-full bg-[#142C4E] text-white font-mono mt-0.5">
                              {matchingCount} {matchingCount === 1 ? 'risk' : 'risks'}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* X-axis label */}
              <div className="grid grid-cols-6 gap-1.5 mt-2">
                <span />
                {[1, 2, 3, 4, 5].map(l => (
                  <span key={l} className="text-[11px] font-mono text-center text-slate-500 font-bold">
                    L-{l}
                  </span>
                ))}
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center mt-1">
                Likelihood (1 = Rare → 5 = Almost Certain)
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-5 mt-5 border-t border-[#DFE6EF] text-xs">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#E6F6F0] border border-[#17865C]/40" />
                <span className="text-[#17865C] font-semibold">Low (1-4)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#FDF5E8] border border-[#C17A18]/40" />
                <span className="text-[#C17A18] font-semibold">Moderate (5-9)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#FEF3C7] border border-[#D97706]/40" />
                <span className="text-[#D97706] font-semibold">High (10-15)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#FBEAEA] border border-[#C74747]/40" />
                <span className="text-[#C74747] font-semibold">Critical (16-25)</span>
              </span>
            </div>
          </div>

          {/* Right: Risk Severity Breakdown */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#DFE6EF] shadow-subtle space-y-4">
            <h3 className="text-base font-bold text-[#142033] flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
              <span>Risk Distribution Posture</span>
              <span className="text-xs font-mono text-[#3569D4] font-semibold">{risks.length} Total Risks</span>
            </h3>

            <div className="space-y-3">
              {(['Critical', 'High', 'Moderate', 'Low'] as RiskLevel[]).map((lvl) => {
                const count = risks.filter(r => r.riskLevel === lvl).length;
                const pct = Math.round((count / risks.length) * 100);
                const isFilterActive = selectedLevel === lvl;

                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(selectedLevel === lvl ? 'All' : lvl)}
                    className={`w-full p-3 rounded-xl border text-left transition-all ${
                      isFilterActive ? 'ring-2 ring-[#3569D4] bg-[#F6F8FB]' : 'bg-white hover:bg-[#F6F8FB]'
                    } ${levelStyles[lvl].border}`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-bold ${levelStyles[lvl].text}`}>{lvl} Severity</span>
                      <span className="font-mono text-[#142033] font-semibold">{count} risks ({pct}%)</span>
                    </div>
                    <div className="w-full bg-[#EEF2F7] h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          lvl === 'Critical' ? 'bg-[#C74747]' :
                          lvl === 'High' ? 'bg-[#D97706]' :
                          lvl === 'Moderate' ? 'bg-[#C17A18]' :
                          'bg-[#17865C]'
                        }`} 
                        style={{ width: `${pct}%` }} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-[#F6F8FB] rounded-lg border border-[#DFE6EF] text-[11px] text-[#64748B] flex items-start gap-2">
              <Info className="w-4 h-4 text-[#3569D4] shrink-0 mt-0.5" />
              <span>
                Demonstration values. Matrix coordinates guide remediation workflows and help establish audit evidence thresholds.
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Risk Register Table */}
        <div className="bg-white rounded-2xl border border-[#DFE6EF] shadow-card overflow-hidden">
          {/* Table Header Controls */}
          <div className="p-4 sm:p-5 bg-[#F6F8FB] border-b border-[#DFE6EF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search risks by ID, title, category, or owner..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-white text-[#142033] font-medium"
              >
                <option value="All">All Severity Levels</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
              </select>

              {(selectedLevel !== 'All' || selectedMatrixCell || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedLevel('All');
                    setSelectedMatrixCell(null);
                    setSearchQuery('');
                  }}
                  className="px-3 py-2 text-xs text-[#3569D4] hover:underline font-semibold"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F6F8FB] border-b border-[#DFE6EF] text-[#64748B] font-semibold">
                <tr>
                  <th className="py-3 px-4">Risk ID</th>
                  <th className="py-3 px-4">Risk Name & Category</th>
                  <th className="py-3 px-4 text-center">Likelihood</th>
                  <th className="py-3 px-4 text-center">Impact</th>
                  <th className="py-3 px-4">Risk Level</th>
                  <th className="py-3 px-4">Owner</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Next Review</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE6EF]">
                {filteredRisks.map((risk) => (
                  <tr
                    key={risk.id}
                    onClick={() => onOpenRiskModal(risk)}
                    className="hover:bg-[#F6F8FB] transition-colors cursor-pointer"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-[#142C4E]">
                      {risk.id}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-[#142033] truncate">{risk.name}</div>
                      <div className="text-[11px] text-[#64748B]">{risk.category}</div>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-[#142033]">
                      {risk.likelihood} / 5
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-[#142033]">
                      {risk.impact} / 5
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${levelStyles[risk.riskLevel].bg} ${levelStyles[risk.riskLevel].text} ${levelStyles[risk.riskLevel].border}`}>
                        {risk.riskLevel}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#142033] font-medium">
                      {risk.owner}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-medium text-[#142033] bg-[#EEF2F7] px-2 py-0.5 rounded text-[11px]">
                        {risk.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#64748B]">
                      {risk.reviewDate}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-[#3569D4] font-semibold hover:underline">
                        Review →
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

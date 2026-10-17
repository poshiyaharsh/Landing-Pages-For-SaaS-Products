import React, { useState } from 'react';
import { X, AlertTriangle, ShieldCheck, UserCheck, Calendar, Sliders } from 'lucide-react';
import { RiskItem, RiskLevel, RiskStatus } from '../types';

interface RiskDetailModalProps {
  risk: RiskItem | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateRisk: (riskId: string, updatedFields: Partial<RiskItem>) => void;
}

export const RiskDetailModal: React.FC<RiskDetailModalProps> = ({
  risk,
  isOpen,
  onClose,
  onUpdateRisk
}) => {
  if (!isOpen || !risk) return null;

  const [likelihood, setLikelihood] = useState(risk.likelihood);
  const [impact, setImpact] = useState(risk.impact);
  const [status, setStatus] = useState<RiskStatus>(risk.status);
  const [owner, setOwner] = useState(risk.owner);
  const [mitigation, setMitigation] = useState(risk.mitigationPlan);

  // Derive level dynamically based on 5x5 product
  const computeRiskLevel = (l: number, i: number): RiskLevel => {
    const score = l * i;
    if (score >= 16) return 'Critical';
    if (score >= 10) return 'High';
    if (score >= 5) return 'Moderate';
    return 'Low';
  };

  const calculatedLevel = computeRiskLevel(likelihood, impact);

  const levelBadges: Record<RiskLevel, { bg: string; text: string; border: string }> = {
    'Critical': { bg: 'bg-[#FBEAEA]', text: 'text-[#C74747]', border: 'border-[#C74747]/40' },
    'High': { bg: 'bg-[#FEF3C7]', text: 'text-[#D97706]', border: 'border-[#D97706]/40' },
    'Moderate': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/40' },
    'Low': { bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]', border: 'border-[#17865C]/40' },
  };

  const handleSave = () => {
    onUpdateRisk(risk.id, {
      likelihood,
      impact,
      riskLevel: calculatedLevel,
      status,
      owner,
      mitigationPlan: mitigation
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142033]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#DFE6EF] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#142C4E] text-white">
              {risk.id}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-700">
              {risk.category}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${levelBadges[calculatedLevel].bg} ${levelBadges[calculatedLevel].text} ${levelBadges[calculatedLevel].border}`}>
              <AlertTriangle className="w-3.5 h-3.5" />
              {calculatedLevel} Risk (Score: {likelihood * impact}/25)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748B] hover:text-[#142033] hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h3 className="text-xl font-display font-bold text-[#142033]">{risk.name}</h3>
            <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{risk.description}</p>
          </div>

          {/* Likelihood & Impact Controls */}
          <div className="p-4 bg-[#F6F8FB] rounded-lg border border-[#DFE6EF] space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold text-[#142C4E]">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#3569D4]" />
                Likelihood & Impact Scoring (5 × 5 Matrix)
              </span>
              <span className="font-mono text-[#3569D4]">
                {likelihood} × {impact} = {likelihood * impact} pts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#142033] mb-1">
                  Likelihood: <strong className="font-mono">{likelihood}</strong> / 5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={likelihood}
                  onChange={(e) => setLikelihood(parseInt(e.target.value))}
                  className="w-full accent-[#3569D4]"
                />
                <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
                  <span>1 (Rare)</span>
                  <span>3 (Moderate)</span>
                  <span>5 (Almost Certain)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#142033] mb-1">
                  Impact: <strong className="font-mono">{impact}</strong> / 5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={impact}
                  onChange={(e) => setImpact(parseInt(e.target.value))}
                  className="w-full accent-[#3569D4]"
                />
                <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
                  <span>1 (Insignificant)</span>
                  <span>3 (Moderate)</span>
                  <span>5 (Catastrophic)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Owner Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Risk Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as RiskStatus)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              >
                <option value="Active">Active</option>
                <option value="Under Review">Under Review</option>
                <option value="Mitigated">Mitigated</option>
                <option value="Accepted">Accepted</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Risk Owner</label>
              <select
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              >
                <option value="Elena Rostova">Elena Rostova (DevOps / SRE)</option>
                <option value="Sarah Jenkins">Sarah Jenkins (Admin)</option>
                <option value="Marcus Vance">Marcus Vance (Compliance Mgr)</option>
                <option value="David Chen">David Chen (Internal Auditor)</option>
              </select>
            </div>
          </div>

          {/* Mitigation Plan */}
          <div>
            <label className="block text-xs font-semibold text-[#142033] mb-1.5">Mitigation & Remediation Plan</label>
            <textarea
              rows={3}
              value={mitigation}
              onChange={(e) => setMitigation(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4] leading-relaxed"
              placeholder="Outline steps to treat or reduce this risk..."
            />
          </div>

          <div className="p-3 bg-[#F6F8FB] border border-[#DFE6EF] rounded-lg text-[11px] text-[#64748B]">
            <strong>Risk Registry Note:</strong> Risk calculations and impact rankings are demonstration data designed for risk management modeling.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-t border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="text-xs text-[#64748B]">
            Scheduled Review: <strong className="font-mono text-[#142033]">{risk.reviewDate}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#64748B] hover:text-[#142033] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3569D4] hover:bg-[#2853B8] rounded-lg shadow-sm transition-colors"
            >
              Update Risk Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

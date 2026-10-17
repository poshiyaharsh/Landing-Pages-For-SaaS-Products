import React, { useState } from 'react';
import {
  Users,
  Filter,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Sliders,
  Award,
  FileText,
  UserCheck,
  Building,
  MapPin,
  Clock,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { availableRoles, sampleCandidates } from '../data/sampleData';
import { Candidate, CandidateStage, RoleProfile } from '../types';

interface InteractiveHiringDemoProps {
  onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const InteractiveHiringDemo: React.FC<InteractiveHiringDemoProps> = ({ onShowToast }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(availableRoles[0].id);
  const [stageFilter, setStageFilter] = useState<CandidateStage>('all');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>(sampleCandidates[0].id);
  const [candidatesList, setCandidatesList] = useState<Candidate[]>(sampleCandidates);

  // Active role
  const activeRole = availableRoles.find((r) => r.id === selectedRoleId) || availableRoles[0];

  // Candidates for this role
  const roleCandidates = candidatesList.filter(
    (c) => c.roleApplied === activeRole.title
  );

  const filteredCandidates = stageFilter === 'all'
    ? roleCandidates
    : roleCandidates.filter((c) => c.stage === stageFilter);

  // Active candidate
  const activeCandidate =
    filteredCandidates.find((c) => c.id === selectedCandidateId) ||
    filteredCandidates[0] ||
    roleCandidates[0] ||
    sampleCandidates[0];

  const handleUpdateStage = (newStage: 'screen' | 'technical' | 'structured' | 'offer') => {
    setCandidatesList((prev) =>
      prev.map((c) => (c.id === activeCandidate.id ? { ...c, stage: newStage } : c))
    );
    onShowToast(`Moved ${activeCandidate.name} to "${newStage.toUpperCase()}" pipeline stage.`, 'success');
  };

  const handleReset = () => {
    setSelectedRoleId(availableRoles[0].id);
    setStageFilter('all');
    setSelectedCandidateId(sampleCandidates[0].id);
    setCandidatesList(sampleCandidates);
    onShowToast('Hiring console reset to default candidate evaluation state.', 'info');
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>INTERACTIVE EVALUATION WORKSPACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Structure your hiring consensus.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select an open role, inspect structured candidate rubrics, review human interviewer debriefs, and examine explainable AI evidence summaries.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-3xl bg-[#121A2D] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Filter and Role Selector Bar */}
          <div className="p-4 sm:p-5 bg-[#17223B] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* Role Dropdown / Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 font-mono">
                <Building className="w-3.5 h-3.5 text-violet-400" /> Role:
              </span>
              <div className="inline-flex rounded-xl bg-[#0B0F19] p-1 border border-white/10 text-xs">
                {availableRoles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      setSelectedRoleId(role.id);
                      setStageFilter('all');
                      const firstInRole = candidatesList.find((c) => c.roleApplied === role.title);
                      if (firstInRole) setSelectedCandidateId(firstInRole.id);
                      onShowToast(`Switched pipeline to "${role.title}"`, 'info');
                    }}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      selectedRoleId === role.id
                        ? 'bg-violet-600 text-white font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {role.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1 font-mono">
                <Filter className="w-3.5 h-3.5 text-teal-400" /> Stage:
              </span>
              <div className="inline-flex rounded-xl bg-[#0B0F19] p-1 border border-white/10 text-xs font-mono">
                {(['all', 'screen', 'technical', 'structured', 'offer'] as CandidateStage[]).map((stg) => (
                  <button
                    key={stg}
                    onClick={() => setStageFilter(stg)}
                    className={`px-2.5 py-1 rounded-lg capitalize transition-all ${
                      stageFilter === stg
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {stg}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs transition-colors"
                title="Reset console to default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Ethics & Transparency Banner */}
          <div className="bg-violet-950/40 border-b border-violet-500/20 px-4 py-2 flex items-center justify-between text-[11px] text-violet-300 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              Human Decision Governance: All ratings reflect human interviewer rubrics. AI outputs represent advisory synthesis only.
            </span>
            <span className="hidden md:inline text-slate-400">Total in Pipeline: {roleCandidates.length}</span>
          </div>

          {/* Main 2-Column Evaluation Grid */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Candidate List for Selected Role */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                  Candidates ({filteredCandidates.length})
                </span>
                <span className="text-[11px] text-slate-400">Click to inspect rubric & notes</span>
              </div>

              <div className="space-y-2.5">
                {filteredCandidates.map((cand) => {
                  const isSelected = cand.id === activeCandidate.id;
                  return (
                    <div
                      key={cand.id}
                      onClick={() => setSelectedCandidateId(cand.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-[#1C2844] border-violet-500 shadow-lg shadow-violet-500/20 ring-1 ring-violet-500'
                          : 'bg-[#0E1524] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-violet-600/25 border border-violet-500/40 text-violet-300 font-mono font-bold flex items-center justify-center text-sm">
                            {cand.initials}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{cand.name}</h4>
                            <p className="text-[11px] text-slate-400">
                              {cand.experienceYears} yrs • {cand.currentCompany}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/40 text-[10px] font-mono block">
                            Score: {cand.structuredScore} / 5
                          </span>
                          <span className="text-[10px] font-mono uppercase text-slate-400 capitalize mt-1 block">
                            {cand.stage}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" /> {cand.location}
                        </span>
                        <span className="text-violet-400">{cand.skills.length} verified competencies</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: In-Depth Candidate Profile, Skills & AI Synthesis */}
            <div className="lg:col-span-7 space-y-5">
              {/* Profile Card Header */}
              <div className="p-5 rounded-2xl bg-[#17223B] border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-base shadow-md">
                      {activeCandidate.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{activeCandidate.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/40 font-mono font-bold">
                          Rubric Score: {activeCandidate.structuredScore} / 5.0
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Candidate for {activeCandidate.roleApplied} • {activeCandidate.location}
                      </p>
                    </div>
                  </div>

                  {/* Stage Transition Control */}
                  <div className="flex items-center gap-1">
                    {(['screen', 'technical', 'structured', 'offer'] as const).map((stg) => (
                      <button
                        key={stg}
                        onClick={() => handleUpdateStage(stg)}
                        className={`px-2.5 py-1 rounded-lg text-xs capitalize font-medium transition-all ${
                          activeCandidate.stage === stg
                            ? 'bg-violet-600 text-white font-bold'
                            : 'bg-[#0B0F19] text-slate-400 hover:text-white'
                        }`}
                      >
                        {stg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Structured Competencies Comparison */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-violet-400" /> Objective Competency Evidence
                  </h4>
                  <div className="space-y-3">
                    {activeCandidate.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-200 font-semibold">{skill.name}</span>
                          <span className="font-mono text-teal-400 font-bold">{skill.proficiency}% match</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#0B0F19] overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-500 to-teal-400 rounded-full transition-all duration-300"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 italic">Evidence: {skill.evidence}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviewer Debrief & Notes */}
                <div className="p-4 rounded-xl bg-[#0E1524] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-violet-400 font-semibold flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5" /> Human Reviewer Debrief
                    </span>
                    <span className="text-slate-400">{activeCandidate.reviewerName}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    "{activeCandidate.reviewerNotes}"
                  </p>
                </div>

                {/* Explainable AI Assistance & Suggested Probes */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-violet-950/40 to-[#0E1524] border border-violet-500/30 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-violet-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Explainable AI Assistant
                    </span>
                    <span className="text-teal-400 font-bold">Advisory Only</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCandidate.aiAssistance.evidenceSummary}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      Suggested Structured Probes for Next Round:
                    </span>
                    {activeCandidate.aiAssistance.suggestedQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-violet-400 font-mono font-bold shrink-0">{idx + 1}.</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

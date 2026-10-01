import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, Shield, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { triggerSecurityCelebration } from '../utils/confetti';

export const Reports: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setExportMessage(null);
    setTimeout(() => {
      setIsGenerating(false);
      setExportMessage('Monthly report compiled with latest real-time telemetry.');
      triggerSecurityCelebration();
    }, 900);
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setExportMessage(null);
    setTimeout(() => {
      setIsExporting(false);
      setExportMessage('SecureNest_Executive_Report_2026.pdf ready for download.');
      triggerSecurityCelebration();
    }, 800);
  };

  return (
    <section id="resources" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-cyan">
            <FileText className="w-3.5 h-3.5" />
            <span>Executive & Technical Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Turn security data into clear decisions.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Generate board-ready executive summaries and deep technical forensics with a single click. Share verified posture with customers and auditors.
          </p>
        </div>

        {/* Report Preview Document Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-cyber-dark/95 border border-cyber-border/90 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
          {/* Document Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyber-border/70 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyber-emerald font-semibold uppercase tracking-wider">
                  SECURENEST MONTHLY SECURITY REPORT
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-slate-300">
                  Oct 2026 · Confidential
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Executive Security Posture & Risk Attestation
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-cyber-emerald hover:bg-emerald-400 disabled:opacity-50 transition-all rounded-lg shadow-sm"
              >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{isGenerating ? 'Generating…' : 'Generate Report'}</span>
              </button>

              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-cyber-card border border-cyber-border hover:border-slate-600 disabled:opacity-50 transition-all rounded-lg"
              >
                {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4 text-cyber-cyan" />}
                <span>{isExporting ? 'Exporting…' : 'Export PDF'}</span>
              </button>
            </div>
          </div>

          {/* Feedback message banner if clicked */}
          {exportMessage && (
            <div className="mb-6 p-3 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-xs font-mono text-cyber-emerald flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4" />
              <span>{exportMessage}</span>
            </div>
          )}

          {/* 5 Core Report KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Security Score</div>
              <div className="text-2xl font-bold font-mono text-cyber-emerald mt-1">98%</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">+2% MoM</div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Threats Blocked</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">12,481</div>
              <div className="text-[10px] text-cyber-emerald font-mono mt-0.5">100% Mitigated</div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Vulns Resolved</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">342</div>
              <div className="text-[10px] text-cyber-cyan font-mono mt-0.5">Avg 4.2h MTTD</div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Compliance</div>
              <div className="text-2xl font-bold font-mono text-cyber-emerald mt-1">96%</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">4 Audit ready</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Security Events</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">24,821</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Zero breaches</div>
            </div>
          </div>

          {/* Embedded Visual Summary Chart */}
          <div className="p-4 sm:p-5 rounded-xl bg-cyber-card/40 border border-cyber-border/70">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-3">
              <span className="font-semibold uppercase tracking-wider">MONTHLY INCIDENT DEFENSE VELOCITY</span>
              <span className="text-cyber-emerald">Mean Time To Remediate: 18m</span>
            </div>

            <div className="h-28 w-full">
              <svg className="w-full h-full" viewBox="0 0 500 80" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="500" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#1E293B" strokeDasharray="3 3" />
                <path
                  d="M0,70 L50,60 L100,65 L150,40 L200,45 L250,20 L300,35 L350,15 L400,25 L450,10 L500,12"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                />
                <circle cx="250" cy="20" r="3" fill="#10B981" />
                <circle cx="450" cy="10" r="3" fill="#10B981" />
                <circle cx="500" cy="12" r="3.5" fill="#10B981" />
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4 (Current)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

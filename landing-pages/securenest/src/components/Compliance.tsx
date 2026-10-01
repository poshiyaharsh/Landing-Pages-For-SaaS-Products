import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck2, ArrowRight, ShieldCheck, AlertCircle, Calendar } from 'lucide-react';
import { COMPLIANCE_FRAMEWORKS } from '../data/securenestData';

interface ComplianceProps {
  onExploreCompliance: () => void;
}

export const Compliance: React.FC<ComplianceProps> = ({ onExploreCompliance }) => {
  return (
    <section className="py-24 md:py-32 relative bg-cyber-dark/40 border-t border-cyber-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Continuous Audit Readiness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Stay compliant without the spreadsheet chaos.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Automate continuous evidence collection across your cloud, codebases, HRIS, and infrastructure for 40+ global compliance frameworks.
          </p>
        </div>

        {/* 4 Framework Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COMPLIANCE_FRAMEWORKS.map((fw, idx) => (
            <motion.div
              key={fw.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-cyber-dark/90 border border-cyber-border/80 hover:border-cyber-emerald/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header row with Circular Progress SVG */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{fw.name}</h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{fw.status}</p>
                  </div>

                  {/* SVG Progress Ring */}
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#1E293B"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray="88"
                        strokeDashoffset={`${88 - (88 * fw.score) / 100}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white">
                      {fw.score}%
                    </span>
                  </div>
                </div>

                {/* Controls Info */}
                <div className="space-y-2 py-3 border-y border-cyber-border/60 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Controls:</span>
                    <span className="font-semibold text-white">
                      {fw.controlsCompleted} / {fw.totalControls} complete
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-cyber-emerald rounded-full"
                      style={{ width: `${(fw.controlsCompleted / fw.totalControls) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-5 space-y-2 text-xs font-mono">
                <div className="text-amber-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{fw.attention}</span>
                </div>
                <div className="text-slate-500 text-[11px] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Last audited: {fw.lastAudit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onExploreCompliance}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-cyber-card border border-cyber-border hover:border-cyber-emerald/50 hover:bg-cyber-card/80 rounded-xl transition-all shadow-lg"
          >
            <span>Explore Compliance Automation</span>
            <ArrowRight className="w-4 h-4 text-cyber-emerald" />
          </button>
        </div>
      </div>
    </section>
  );
};

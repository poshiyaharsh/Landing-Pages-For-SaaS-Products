import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  FileSearch, 
  TrendingUp, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { USE_CASES } from '../data/sampleData';

interface UseCasesProps {
  onOpenDemo: () => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onOpenDemo }) => {
  const iconList = [
    <ShieldCheck className="w-5 h-5 text-[#3569D4]" />,
    <Lock className="w-5 h-5 text-[#159B91]" />,
    <Terminal className="w-5 h-5 text-[#142C4E]" />,
    <FileSearch className="w-5 h-5 text-[#17865C]" />,
    <TrendingUp className="w-5 h-5 text-[#3569D4]" />,
    <Rocket className="w-5 h-5 text-[#C17A18]" />,
  ];

  return (
    <section className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            TAILORED WORKFLOWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Designed for the people responsible for trust.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Whether preparing for your first SOC 2 audit or maintaining continuous ISO 27001 readiness across hundreds of microservices.
          </p>
        </div>

        {/* 6 Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => (
            <div
              key={uc.role}
              className="p-6 rounded-2xl bg-white border border-[#DFE6EF] shadow-subtle hover:border-[#3569D4]/50 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF] flex items-center justify-center">
                    {iconList[idx]}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#3569D4] bg-[#EAF1FF] px-2 py-0.5 rounded">
                    {uc.stat}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider font-mono">
                  {uc.role}
                </div>

                <h3 className="text-base font-bold text-[#142033] font-display mt-1">
                  {uc.headline}
                </h3>

                <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                  {uc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {uc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#F6F8FB] border border-[#DFE6EF] text-[10px] font-medium text-[#142C4E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFE6EF]">
                <button
                  onClick={onOpenDemo}
                  className="text-xs font-semibold text-[#3569D4] hover:text-[#2853B8] transition-colors flex items-center gap-1"
                >
                  <span>Explore {uc.role.toLowerCase()} setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

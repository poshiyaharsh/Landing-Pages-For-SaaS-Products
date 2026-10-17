import React from 'react';
import { ShieldCheck, AlertTriangle, FileText, History, CheckSquare, BarChart3 } from 'lucide-react';
import { CAPABILITY_ITEMS } from '../data/sampleData';

interface CapabilityStripProps {
  onSelectCapability?: (title: string) => void;
}

export const CapabilityStrip: React.FC<CapabilityStripProps> = ({ onSelectCapability }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'ShieldCheck': <ShieldCheck className="w-5 h-5 text-[#3569D4]" />,
    'AlertTriangle': <AlertTriangle className="w-5 h-5 text-[#C17A18]" />,
    'FileText': <FileText className="w-5 h-5 text-[#159B91]" />,
    'History': <History className="w-5 h-5 text-[#142C4E]" />,
    'CheckSquare': <CheckSquare className="w-5 h-5 text-[#17865C]" />,
    'BarChart3': <BarChart3 className="w-5 h-5 text-[#3569D4]" />,
  };

  return (
    <section className="py-12 bg-white border-y border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-wider text-[#64748B] uppercase font-mono">
            ONE WORKSPACE FOR YOUR COMPLIANCE OPERATIONS
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CAPABILITY_ITEMS.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectCapability && onSelectCapability(item.title)}
              className="p-4 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white hover:border-[#3569D4]/40 hover:shadow-card transition-all duration-200 cursor-pointer group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {iconMap[item.icon]}
                </div>
                <h4 className="text-sm font-semibold text-[#142033] group-hover:text-[#3569D4] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

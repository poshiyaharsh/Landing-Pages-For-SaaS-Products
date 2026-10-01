import React from 'react';
import { Shield, Cpu, Network, Compass, Zap } from 'lucide-react';
import { TRUST_LOGOS } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Compass: <Compass className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />
};

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 border-y border-cyber-border/60 bg-cyber-dark/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest uppercase text-slate-500 mb-8">
          Trusted security infrastructure for modern teams
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          {TRUST_LOGOS.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center gap-2.5 text-slate-400/80 hover:text-slate-200 transition-colors group cursor-default"
            >
              <div className="text-slate-500 group-hover:text-cyber-emerald transition-colors">
                {iconMap[company.icon]}
              </div>
              <span className="font-mono text-sm sm:text-base font-semibold tracking-wider text-slate-400 group-hover:text-white transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

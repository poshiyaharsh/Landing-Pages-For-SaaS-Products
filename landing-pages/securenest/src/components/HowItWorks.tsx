import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  Link2: <Link2 className="w-6 h-6 text-cyber-emerald" />,
  Search: <Search className="w-6 h-6 text-cyber-cyan" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-cyber-dark/40 border-t border-cyber-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
            <span>●</span>
            <span>Architecture & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Connect. Detect. Protect.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Zero-friction deployment in under 5 minutes. No kernel modules, no complex agent orchestration.
          </p>
        </div>

        {/* Horizontal Visual Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-cyber-dark/90 border border-cyber-border/80 hover:border-cyber-emerald/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-cyber-emerald px-2.5 py-1 rounded bg-cyber-emerald/10 border border-cyber-emerald/20">
                    STEP {step.step}
                  </span>
                  <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border group-hover:scale-110 transition-transform">
                    {iconMap[step.icon]}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyber-emerald transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Sub-technical badge */}
              <div className="mt-8 pt-4 border-t border-cyber-border/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Phase 0{idx + 1}</span>
                <span className="text-cyber-cyan">Ready in &lt;1 min</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

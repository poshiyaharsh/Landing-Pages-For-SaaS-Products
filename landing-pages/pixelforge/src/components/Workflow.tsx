import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Hammer, Rocket, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/pixelforgeData';

const iconMap: Record<string, React.ReactNode> = {
  '01': <Lightbulb className="w-5 h-5 text-neon-violet" />,
  '02': <Compass className="w-5 h-5 text-neon-cyan" />,
  '03': <Hammer className="w-5 h-5 text-fuchsia-400" />,
  '04': <Rocket className="w-5 h-5 text-neon-pink" />
};

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 md:py-32 relative bg-studio-950/40 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
            <span>●</span>
            <span>END-TO-END PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            From blank canvas to launch-ready.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            A linear, high-velocity creative trajectory designed to take your ideas from raw seeds to multi-format production assets in minutes.
          </p>
        </div>

        {/* 4-Step Horizontal Workflow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-violet/50 transition-all shadow-xl group flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded bg-studio-950 border border-studio-border group-hover:border-neon-violet/40 transition-colors">
                    PHASE {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-studio-950 border border-studio-border group-hover:scale-110 transition-transform">
                    {iconMap[step.number]}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-cyan transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm font-semibold text-studio-text mb-2">
                  {step.description}
                </p>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-studio-border/60 flex items-center justify-between text-xs font-mono text-studio-subtle">
                <span className="text-neon-violet">{step.badge}</span>
                <ArrowRight className="w-3.5 h-3.5 text-studio-subtle group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

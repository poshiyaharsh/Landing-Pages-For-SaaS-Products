import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Megaphone,
  Layout,
  TrendingUp,
  Share2,
  BookOpen,
  Rocket,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';
import { USE_CASES } from '../data/pixelforgeData';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-neon-violet" />,
  Megaphone: <Megaphone className="w-5 h-5 text-neon-pink" />,
  Layout: <Layout className="w-5 h-5 text-neon-cyan" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  Share2: <Share2 className="w-5 h-5 text-fuchsia-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-amber-400" />,
  Rocket: <Rocket className="w-5 h-5 text-sky-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-purple-400" />
};

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-studio-950/40 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-violet">
            <span>●</span>
            <span>CREATIVE VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Built for every kind of creative team.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            Whether you are crafting high-fashion lookbooks, responsive SaaS applications, or multi-platform global campaigns.
          </p>
        </div>

        {/* 8 Unique Creative Vertical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((uc, idx) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-studio-subtle transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-studio-950 border border-studio-border group-hover:scale-105 transition-transform">
                    {iconMap[uc.iconName]}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-studio-subtle group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-neon-cyan transition-colors">
                  {uc.title}
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-normal mb-5">
                  {uc.description}
                </p>
              </div>

              {/* Deliverable Tags */}
              <div className="pt-3 border-t border-studio-border/60 space-y-1.5 font-mono text-[11px]">
                <div className="text-[10px] uppercase text-studio-subtle tracking-wider">Deliverables:</div>
                <div className="flex flex-wrap gap-1">
                  {uc.deliverables.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded bg-studio-950 border border-studio-border text-studio-muted text-[10px]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, FileSpreadsheet, Eye, KeyRound, ShieldCheck } from 'lucide-react';
import { SECURITY_PILLARS } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  Lock: <Lock className="w-5 h-5 text-cyber-emerald" />,
  Users: <Users className="w-5 h-5 text-cyber-cyan" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
  Eye: <Eye className="w-5 h-5 text-amber-400" />,
  KeyRound: <KeyRound className="w-5 h-5 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyber-emerald" />
};

export const SecurityTrust: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-cyber-dark/40 border-t border-cyber-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Trust Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Security isn't a feature.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald to-cyber-cyan">
              It's the foundation.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Engineered from ground zero according to strict zero-trust principles. Every byte encrypted, every access verified.
          </p>
        </div>

        {/* 6 Minimal Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-cyber-dark/80 border border-cyber-border/80 hover:border-cyber-emerald/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border inline-block mb-4 group-hover:scale-105 transition-transform">
                {iconMap[pillar.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono tracking-tight group-hover:text-cyber-emerald transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

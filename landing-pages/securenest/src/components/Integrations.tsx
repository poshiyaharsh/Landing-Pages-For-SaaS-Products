import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Layers,
  GitBranch,
  MessageSquare,
  CheckSquare,
  Box,
  Server,
  Globe,
  ArrowRight,
  Puzzle
} from 'lucide-react';
import { INTEGRATIONS_LIST } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  Layers: <Layers className="w-5 h-5 text-blue-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-slate-200" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-pink-400" />,
  CheckSquare: <CheckSquare className="w-5 h-5 text-blue-500" />,
  Box: <Box className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Globe: <Globe className="w-5 h-5 text-orange-400" />
};

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-cyan">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Ecosystem Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Connect your entire security stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Ingest telemetry from every provider, pipeline, and communication tool you already trust. Instant bi-directional syncing.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {INTEGRATIONS_LIST.map((integ, idx) => (
            <motion.div
              key={integ.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-xl bg-cyber-dark/80 border border-cyber-border/70 hover:border-cyber-emerald/40 hover:bg-cyber-card/60 transition-all text-center flex flex-col items-center justify-center gap-3 group"
            >
              <div className="p-3 rounded-lg bg-cyber-card border border-cyber-border group-hover:scale-110 transition-transform">
                {iconMap[integ.icon] || <Globe className="w-5 h-5 text-slate-300" />}
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold text-white group-hover:text-cyber-emerald transition-colors">
                  {integ.name}
                </h4>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">{integ.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 50+ integrations badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card/60 border border-cyber-border text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
            <span className="text-slate-200 font-semibold">50+ integrations available</span>
            <span>· REST, gRPC & Webhook SDKs included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

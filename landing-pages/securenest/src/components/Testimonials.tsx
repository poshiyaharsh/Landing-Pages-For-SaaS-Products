import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/securenestData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
            <span>●</span>
            <span>Enterprise Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Trusted by security leaders worldwide.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            See how modern engineering and SecOps teams consolidate tools and accelerate compliance with SecureNest.
          </p>
        </div>

        {/* 3 Professional Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-cyber-dark/80 border border-cyber-border/80 hover:border-cyber-emerald/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-cyber-emerald/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-cyber-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyber-card border border-cyber-emerald/30 flex items-center justify-center font-mono text-xs font-bold text-cyber-emerald">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                  <p className="text-xs font-mono text-slate-400">
                    {t.role} · <span className="text-slate-200">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

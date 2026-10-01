import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/pixelforgeData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-studio-950/60 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
            <span>●</span>
            <span>CREATIVE INDUSTRY PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Trusted by the leaders redefining design.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            See how world-class creative directors, brand studios, and design engineers scale craft with PixelForge.
          </p>
        </div>

        {/* 3 Premium Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-studio-900/80 border border-studio-border/80 hover:border-neon-violet/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-neon-violet/40 mb-4" />
                <p className="text-sm sm:text-base text-studio-text leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-studio-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-violet to-neon-cyan p-0.5 shadow-sm">
                    <div className="w-full h-full bg-studio-950 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white">
                      {t.avatarInitials}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs font-mono text-studio-muted">
                      {t.role} · <span className="text-white">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-neon-cyan px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/20 hidden sm:inline-block">
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

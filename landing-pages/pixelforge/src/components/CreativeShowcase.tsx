import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../data/pixelforgeData';

interface CreativeShowcaseProps {
  onSelectProject?: (project: ShowcaseProject) => void;
}

export const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({ onSelectProject }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Brand Identity', 'Product Launch', 'Editorial Campaign', 'Digital Experience'];

  const filteredProjects = selectedTag === 'All'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === selectedTag);

  return (
    <section id="showcase" className="py-24 md:py-32 relative bg-studio-950/80 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-studio-border/80 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-violet">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL ARCHIVE & PRODUCTION OUTPUT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
              Designed for ideas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-fuchsia-400 to-neon-cyan">
                worth exploring.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-studio-muted font-normal">
              A curated index of production-ready campaigns, tokenized brand systems, and editorial experiences engineered inside PixelForge.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  selectedTag === tag
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-studio-900 text-studio-muted hover:text-white border border-studio-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical layout weights:
            // Item 0: 7 cols
            // Item 1: 5 cols
            // Item 2: 5 cols
            // Item 3: 7 cols
            // Item 4: 6 cols
            // Item 5: 6 cols
            const colSpan =
              idx % 6 === 0 ? 'md:col-span-7' :
              idx % 6 === 1 ? 'md:col-span-5' :
              idx % 6 === 2 ? 'md:col-span-5' :
              idx % 6 === 3 ? 'md:col-span-7' :
              'md:col-span-6';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectProject?.(project)}
                className={`${colSpan} group cursor-pointer relative rounded-2xl bg-studio-900/90 border border-studio-border/80 hover:border-neon-violet/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between`}
              >
                {/* Visual Canvas Representation */}
                <div className={`p-6 sm:p-8 min-h-[260px] sm:min-h-[300px] bg-gradient-to-br ${project.gradient} relative flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle Geometric Graphic Element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 group-hover:scale-125 group-hover:border-neon-cyan/20 transition-all duration-500 pointer-events-none" />

                  {/* Top Tags */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/50 border border-white/10 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Large Editorial Headline in Visual */}
                  <div className="z-10 py-6">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-cyan transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1">
                      {project.aspect}
                    </p>
                  </div>

                  {/* Bottom Palette Swatches */}
                  <div className="flex items-center gap-1.5 z-10">
                    {project.palette.map((color, cIdx) => (
                      <div
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                    <span className="text-[10px] font-mono text-slate-400 ml-2">Tokens Synced</span>
                  </div>
                </div>

                {/* Editorial Metadata Footer */}
                <div className="p-5 sm:p-6 bg-studio-950 border-t border-studio-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="text-studio-muted">
                    Client: <span className="text-white font-medium">{project.client}</span> · {project.highlight}
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-studio-900 border border-studio-border text-studio-subtle text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

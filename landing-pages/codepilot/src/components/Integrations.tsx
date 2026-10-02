import React, { useState } from 'react';
import { INTEGRATIONS } from '../data/codepilotData';
import {
  Github,
  Gitlab,
  GitBranch,
  Code,
  Cpu,
  MessageSquare,
  Layers,
  CheckCircle2,
  Box,
  Cloud,
  Triangle,
  Database,
  Plug
} from 'lucide-react';

export const Integrations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Version Control', 'IDE', 'Collaboration', 'Infrastructure', 'Database'];

  const getIntegrationIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github className="w-5 h-5 text-codepilot-white" />;
      case 'Gitlab': return <Gitlab className="w-5 h-5 text-[#FC6D26]" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-brand-cyan" />;
      case 'Code': return <Code className="w-5 h-5 text-[#007ACC]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-brand-purple" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#4A154B]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#5E6AD2]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#0052CC]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#2496ED]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#FF9900]" />;
      case 'Triangle': return <Triangle className="w-5 h-5 text-codepilot-white" />;
      default: return <Database className="w-5 h-5 text-[#336791]" />;
    }
  };

  const filtered = selectedCategory === 'All'
    ? INTEGRATIONS
    : INTEGRATIONS.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 relative bg-codepilot-bg" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <Plug className="w-3.5 h-3.5" />
            <span>ECOSYSTEM COMPATIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Fits into your existing stack.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Zero migration required. CodePilot hooks into your version control hosts, IDEs, issue trackers, and cloud providers seamlessly.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-semibold'
                    : 'bg-codepilot-panel border border-codepilot-border text-codepilot-dim hover:text-codepilot-text hover:border-codepilot-border-highlight'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Integration Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((integration) => (
            <div
              key={integration.name}
              className="p-5 rounded-xl bg-codepilot-panel border border-codepilot-border hover:border-brand-cyan/40 hover:bg-codepilot-surface transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-codepilot-surface border border-codepilot-border flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIntegrationIcon(integration.icon)}
                  </div>

                  {/* Status Indicator */}
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
                      integration.status === 'Native'
                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                        : integration.status === 'Supported'
                        ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20'
                        : 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {integration.status}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-codepilot-text group-hover:text-codepilot-white transition-colors">
                    {integration.name}
                  </h3>
                  <span className="text-[10px] font-mono text-codepilot-dim">
                    {integration.category}
                  </span>
                </div>

                <p className="text-xs text-codepilot-muted font-sans leading-relaxed mt-2">
                  {integration.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-codepilot-border/60 flex items-center justify-between text-[11px] font-mono text-codepilot-dim">
                <span>Webhook &amp; API Ready</span>
                <span className="group-hover:text-brand-cyan transition-colors flex items-center gap-0.5">
                  Doc specs →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

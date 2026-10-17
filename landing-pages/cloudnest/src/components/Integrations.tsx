import React, { useState } from 'react';
import { GitBranch, Box, Database, MessageSquare, Terminal, Layers, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SAMPLE_INTEGRATIONS } from '../data/sampleData';

interface IntegrationsProps {
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const Integrations: React.FC<IntegrationsProps> = ({ onToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Source Control', 'CI/CD & Containers', 'Databases', 'Notifications', 'Infrastructure as Code'];

  const filteredIntegrations = SAMPLE_INTEGRATIONS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]);
  });

  return (
    <section className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
              ECOSYSTEM CONNECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
              Fits into your existing development stack.
            </h2>
            <p className="text-base text-nest-secondary mt-3 leading-relaxed">
              Connect your repositories, container registries, telemetry tools, and notification channels without breaking your team’s existing workflows.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-nest-text text-white font-medium'
                    : 'bg-white border border-nest-border text-nest-secondary hover:text-nest-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredIntegrations.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-nest-border rounded-nest-xl p-5 shadow-subtle hover:border-nest-blue/40 hover:shadow-card transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded bg-nest-bg border border-nest-border flex items-center justify-center text-nest-blue font-mono font-bold text-xs">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-nest-blue-soft text-nest-blue font-semibold">
                    {item.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold font-display text-nest-text">{item.name}</h4>
                <span className="text-[10px] font-mono text-nest-muted block mb-2">{item.category}</span>

                <p className="text-xs text-nest-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-nest-border/60 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-nest-green flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
                <button
                  onClick={() =>
                    onToast('Integration Guide', `Viewing setup guide and token scopes for ${item.name}.`, 'info')
                  }
                  className="text-nest-blue hover:underline text-[11px] font-mono flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

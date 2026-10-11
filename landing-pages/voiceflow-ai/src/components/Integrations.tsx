import React, { useState } from 'react';
import { 
  MessageSquare, 
  Database, 
  Video, 
  FolderSync, 
  Zap, 
  Webhook, 
  Terminal, 
  CheckCircle, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { INTEGRATIONS_LIST } from '../data/voiceflowData';
import { IntegrationItem } from '../types';

interface IntegrationsProps {
  onToast: (title: string, message?: string) => void;
}

export const Integrations: React.FC<IntegrationsProps> = ({ onToast }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Communication',
    'CRM & Sales',
    'Automation',
    'Storage & Cloud',
    'Developer',
  ];

  const filteredIntegrations = INTEGRATIONS_LIST.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="integrations" className="py-24 sm:py-36 bg-vf-bg border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            ECOSYSTEM & PIPELINE CONNECTIVITY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Connect the tools behind your conversations.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Dispatch speech summaries to Slack, sync sentiment scores into Salesforce, or trigger webhook automations the instant a call finishes.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none border-b border-vf-border/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-vf-cyan text-vf-bg font-bold shadow-cyan-glow'
                  : 'bg-vf-surface border border-vf-border text-vf-text-muted hover:text-vf-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIntegrations.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-vf-border/80 bg-vf-surface/40 hover:bg-vf-surface hover:border-vf-cyan/40 transition-all duration-300 flex flex-col justify-between shadow-subtle group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-vf-border/40">
                  <div className="w-10 h-10 rounded-xl bg-vf-bg border border-vf-border flex items-center justify-center font-display font-bold text-sm text-vf-cyan group-hover:scale-105 transition-transform">
                    {item.name.charAt(0)}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-vf-cyan/10 border border-vf-cyan/30 text-[9px] font-mono uppercase text-vf-cyan">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-mono uppercase text-vf-text-muted block">
                  {item.category}
                </span>

                <h4 className="font-display text-base font-bold text-vf-text mt-1 group-hover:text-vf-cyan transition-colors">
                  {item.name}
                </h4>

                <p className="text-xs text-vf-text-muted mt-2 leading-relaxed font-sans line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-vf-border/40 flex items-center justify-between text-xs font-mono">
                <span className="text-vf-green flex items-center gap-1.5 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" /> {item.status}
                </span>

                <button
                  onClick={() => onToast('Integration Inspector', `Configuring ${item.name} webhook bridge.`)}
                  className="text-vf-text-muted hover:text-vf-cyan transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

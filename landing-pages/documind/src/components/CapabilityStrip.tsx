import React from 'react';
import { FileText, Search, BookOpen, Quote, BarChart3 } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    {
      title: 'PDF Intelligence',
      desc: 'Deep multi-page layout and coordinate awareness',
      icon: FileText,
    },
    {
      title: 'Smart Search',
      desc: 'Semantic retrieval across natural language queries',
      icon: Search,
    },
    {
      title: 'AI Summaries',
      desc: 'Structured executive briefs in seconds',
      icon: BookOpen,
    },
    {
      title: 'Source Citations',
      desc: 'Verifiable coordinate links to exact paragraphs',
      icon: Quote,
    },
    {
      title: 'Document Insights',
      desc: 'Automated entity and tabular data extraction',
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-docu-muted font-medium">
            ONE WORKSPACE FOR YOUR DOCUMENTS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-4 rounded-docu border border-docu-border bg-docu-bg/50 hover:bg-white hover:border-docu-accent/30 hover:shadow-subtle transition-all group"
              >
                <div className="w-8 h-8 rounded-md bg-white border border-docu-border group-hover:border-docu-accent/40 flex items-center justify-center text-docu-accent mb-3 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-docu-text">{cap.title}</h3>
                <p className="text-xs text-docu-secondary mt-1 leading-normal">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

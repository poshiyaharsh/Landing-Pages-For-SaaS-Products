import React, { useState } from 'react';
import { Search, Sparkles, Filter, FileText, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { DocumentItem } from '../types';
import { SAMPLE_DOCUMENTS } from '../data/sampleData';

interface SmartSearchProps {
  onSelectDocument: (doc: DocumentItem, highlightPassage?: string) => void;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ onSelectDocument }) => {
  const [query, setQuery] = useState('What were the key risks mentioned in the last quarterly report?');
  const [activeFilter, setActiveFilter] = useState<'all' | 'pdf' | 'docx' | 'xlsx' | 'recent' | 'financials'>('all');

  const filterOptions = [
    { id: 'all', label: 'All Documents' },
    { id: 'pdf', label: 'PDFs' },
    { id: 'docx', label: 'Word Documents' },
    { id: 'xlsx', label: 'Spreadsheets' },
    { id: 'recent', label: 'Recent (This Month)' },
    { id: 'financials', label: 'Financials Collection' },
  ];

  // Perform search query match against sample documents
  const searchResults = SAMPLE_DOCUMENTS.filter((doc) => {
    // Filter type
    if (activeFilter === 'pdf' && doc.type !== 'pdf') return false;
    if (activeFilter === 'docx' && doc.type !== 'docx') return false;
    if (activeFilter === 'xlsx' && doc.type !== 'xlsx') return false;
    if (activeFilter === 'financials' && doc.collection !== 'Financials') return false;

    // Match query against doc title, excerpt, summary risks, findings
    const q = query.toLowerCase().trim();
    if (!q) return true;

    const inTitle = doc.title.toLowerCase().includes(q);
    const inExcerpt = doc.excerpt.toLowerCase().includes(q);
    const inRisks = doc.summary.risks.some((r) => r.toLowerCase().includes(q) || q.includes('risk'));
    const inFindings = doc.summary.keyFindings.some((f) => f.toLowerCase().includes(q));
    const inTags = doc.tags.some((t) => t.toLowerCase().includes(q));

    // Semantic relevance fallback for sample queries
    if (q.includes('risk') && doc.summary.risks.length > 0) return true;
    if (q.includes('findings') || q.includes('report') || q.includes('quarterly')) return true;

    return inTitle || inExcerpt || inRisks || inFindings || inTags;
  });

  return (
    <section className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            DEEP SEARCH & RETRIEVAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Find the answer, not just the file.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Search by meaning, intent, and concept rather than brittle exact keywords. DocuMind surfaces matching paragraphs with exact page coordinates and confidence scoring.
          </p>
        </div>

        {/* Search Experience Wrapper */}
        <div className="bg-white border border-docu-border rounded-docu-xl p-6 sm:p-8 shadow-card space-y-6">
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-docu-accent absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question or search your documents..."
              className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base bg-docu-bg border border-docu-border rounded-docu focus:bg-white focus:border-docu-accent focus:ring-1 focus:ring-docu-accent focus:outline-none transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-docu-muted hover:text-docu-text"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Query Pills */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-[11px] font-mono text-docu-muted uppercase tracking-wider mr-1">
              Popular Queries:
            </span>
            <button
              onClick={() => setQuery('What were the key risks mentioned in the last quarterly report?')}
              className="px-2.5 py-1 rounded bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
            >
              Quarterly key risks
            </button>
            <button
              onClick={() => setQuery('What is the remote work and ergonomics equipment stipend?')}
              className="px-2.5 py-1 rounded bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
            >
              Remote work equipment stipend
            </button>
            <button
              onClick={() => setQuery('What are the main findings in this report?')}
              className="px-2.5 py-1 rounded bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
            >
              Main findings in annual report
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-docu-border pt-1">
            <Filter className="w-3.5 h-3.5 text-docu-muted shrink-0" />
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors whitespace-nowrap ${
                  activeFilter === f.id
                    ? 'bg-docu-text text-white'
                    : 'bg-docu-subtle text-docu-secondary hover:text-docu-text hover:bg-docu-border'
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="text-xs text-docu-muted font-mono ml-auto pl-2">
              {searchResults.length} matches found
            </span>
          </div>

          {/* Results List */}
          <div className="space-y-3">
            {searchResults.length === 0 ? (
              <div className="text-center py-12 text-xs text-docu-muted">
                No matching passages found for “{query}”. Try adjusting your filters or query terms.
              </div>
            ) : (
              searchResults.map((doc, idx) => {
                const matchScore = (99.4 - idx * 1.8).toFixed(1);
                const matchingPassage =
                  doc.pagesContent[0]?.highlightPassage || doc.summary.risks[0] || doc.excerpt;

                return (
                  <div
                    key={doc.id}
                    className="p-4 sm:p-5 bg-docu-bg rounded-docu border border-docu-border hover:border-docu-accent/40 hover:bg-white hover:shadow-subtle transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-docu-accent" />
                        <h4 className="text-sm font-semibold text-docu-text">{doc.title}</h4>
                        <span className="text-[10px] font-mono uppercase bg-white border border-docu-border px-1.5 py-0.5 rounded text-docu-secondary">
                          {doc.type}
                        </span>
                        <span className="text-xs text-docu-secondary hidden sm:inline font-mono">
                          Page 0{doc.pagesContent[0]?.pageNumber || 1}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-docu-success">
                          <CheckCircle2 className="w-3 h-3" /> {matchScore}% Match
                        </span>
                        <span className="text-[11px] font-mono text-docu-muted hidden sm:inline">
                          {doc.lastModified}
                        </span>
                      </div>
                    </div>

                    {/* Excerpt with highlight */}
                    <div className="p-3 bg-white rounded border border-docu-border text-xs text-docu-secondary leading-relaxed">
                      <span className="font-mono text-[10px] uppercase text-docu-accent font-semibold block mb-1">
                        Relevant Excerpt:
                      </span>
                      “{matchingPassage}”
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        {doc.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono bg-docu-subtle px-2 py-0.5 rounded text-docu-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onSelectDocument(doc, matchingPassage)}
                        className="text-xs text-docu-accent hover:underline font-medium flex items-center gap-1"
                      >
                        <span>Open Passage in Reader</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Prototype Disclosure Note */}
          <div className="pt-3 border-t border-docu-border text-[11px] text-docu-muted flex items-center justify-between">
            <span>
              Demonstration note: Local prototype simulates semantic retrieval rankings against pre-indexed sample vectors.
            </span>
            <span className="font-mono">Engine: BM25 + Dense BGE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

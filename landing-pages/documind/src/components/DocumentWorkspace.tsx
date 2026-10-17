import React, { useState } from 'react';
import {
  FileText,
  Search,
  Sparkles,
  Bookmark,
  BookmarkCheck,
  Copy,
  Clock,
  Layers,
  CheckCircle2,
  Filter,
  ExternalLink,
  ChevronRight,
  Folder,
  Send,
  Trash2,
  FileSpreadsheet,
  Settings,
  HelpCircle
} from 'lucide-react';
import { DocumentItem, ChatMessage } from '../types';
import { SAMPLE_DOCUMENTS, PRESET_QUESTIONS, PRESET_ANSWERS } from '../data/sampleData';

interface DocumentWorkspaceProps {
  onSelectDocument: (doc: DocumentItem, citationPassage?: string) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
  onOpenUpload: () => void;
}

export const DocumentWorkspace: React.FC<DocumentWorkspaceProps> = ({
  onSelectDocument,
  onToast,
  onOpenUpload,
}) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState<'all' | 'collections' | 'recent' | 'saved'>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [fileTypeFilter, setFileTypeFilter] = useState<'all' | 'pdf' | 'docx' | 'xlsx'>('all');
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem>(SAMPLE_DOCUMENTS[0]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'user',
      text: 'What are the main findings in this report?',
      timestamp: '10:14 AM',
    },
    {
      id: 'init-2',
      sender: 'assistant',
      text: 'The report identifies three key findings:\n\n1. **Rising operating costs:** Cloud infrastructure escalated by 14.2%.\n2. **Improved customer retention:** Reached an all-time record of 96.4%.\n3. **Automation opportunity:** Identified $2.4M immediate cost savings opportunity across procurement workflows.',
      timestamp: '10:14 AM',
      citations: [
        {
          id: 'cit-w1',
          docId: 'doc-1',
          docTitle: 'Annual_Report_2026.pdf',
          section: 'Section 3.2 — Core Operational Findings',
          page: 8,
          excerpt: 'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.',
        },
      ],
      saved: true,
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isProcessingQuery, setIsProcessingQuery] = useState(false);

  // Collections list
  const collections = ['All', 'Financials', 'Executive Briefs', 'Legal & Policy', 'Product & Tech'];

  // Filtered documents
  const filteredDocuments = SAMPLE_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCollection = selectedCollection === 'All' || doc.collection === selectedCollection;
    const matchesType = fileTypeFilter === 'all' || doc.type === fileTypeFilter;

    return matchesSearch && matchesCollection && matchesType;
  });

  const handleAskQuestion = (questionText: string) => {
    if (!questionText.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsProcessingQuery(true);

    setTimeout(() => {
      // Find preset response or construct grounded fallback
      const foundPreset = PRESET_ANSWERS[questionText];
      let assistantMsg: ChatMessage;

      if (foundPreset) {
        assistantMsg = {
          id: `asst-${Date.now()}`,
          sender: 'assistant',
          text: foundPreset.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: foundPreset.citations,
          saved: false,
        };
      } else {
        assistantMsg = {
          id: `asst-${Date.now()}`,
          sender: 'assistant',
          text: `Analyzing across ${selectedDoc.title}: Found high-relevance passages addressing "${questionText}". Key excerpt states: "${selectedDoc.excerpt}" with 98.4% coordinate alignment.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: [
            {
              id: `cit-${Date.now()}`,
              docId: selectedDoc.id,
              docTitle: selectedDoc.title,
              section: 'Coordinate Retrieval Passage',
              page: selectedDoc.pagesContent[0]?.pageNumber || 1,
              excerpt: selectedDoc.pagesContent[0]?.content.slice(0, 140) + '...',
            },
          ],
          saved: false,
        };
      }

      setChatMessages((prev) => [...prev, assistantMsg]);
      setIsProcessingQuery(false);
      onToast('Answer Generated', 'Synthesized with verifiable document citations.', 'purple');
    }, 550);
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    onToast('Copied to Clipboard', 'Assistant answer text copied.', 'success');
  };

  const handleToggleSave = (msgId: string) => {
    setChatMessages((prev) =>
      prev.map((m) => {
        if (m.id === msgId) {
          const nextSaved = !m.saved;
          onToast(
            nextSaved ? 'Saved to Workspace' : 'Removed from Saved',
            nextSaved ? 'Answer pinned to your workspace knowledge bank.' : 'Answer unpinned.',
            'info'
          );
          return { ...m, saved: nextSaved };
        }
        return m;
      })
    );
  };

  const handleClearChat = () => {
    setChatMessages([]);
    onToast('Conversation Cleared', 'Workspace chat session reset.', 'info');
  };

  return (
    <section id="workspace" className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE PROTOTYPE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text">
              Meet your new document workspace.
            </h2>
            <p className="text-sm text-docu-secondary mt-1">
              Test live search, collection routing, coordinate citations, and grounded document synthesis.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenUpload}
              className="px-3.5 py-2 text-xs font-medium bg-docu-text text-white hover:bg-black rounded-docu shadow-subtle transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Upload Document</span>
            </button>
            <div className="text-xs font-mono text-docu-muted hidden sm:inline-block">
              Status: <span className="text-docu-success font-medium">Ready (6 Demo Files)</span>
            </div>
          </div>
        </div>

        {/* Real Application Frame */}
        <div className="bg-white border border-docu-border rounded-docu-xl shadow-modal overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          {/* 1. Left Sidebar: Navigation & Collections (col-span-2) */}
          <div className="lg:col-span-3 border-r border-docu-border bg-docu-bg/60 p-4 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Workspace Title Header */}
              <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-docu-accent flex items-center justify-center text-white text-xs font-bold font-mono">
                    D
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-docu-text">Enterprise Vault</h4>
                    <span className="text-[10px] text-docu-muted block -mt-0.5 font-mono">
                      DocuMind v2.4
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-docu-border text-docu-secondary">
                  Local
                </span>
              </div>

              {/* Primary Views */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-docu-muted block px-2 mb-1">
                  Workspace Views
                </span>
                <button
                  onClick={() => {
                    setActiveSidebarItem('all');
                    setSelectedCollection('All');
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-docu text-xs font-medium transition-colors ${
                    activeSidebarItem === 'all' && selectedCollection === 'All'
                      ? 'bg-docu-surface text-docu-accent shadow-subtle border border-docu-border'
                      : 'text-docu-secondary hover:text-docu-text hover:bg-docu-subtle'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>All Documents</span>
                  </div>
                  <span className="text-[10px] font-mono text-docu-muted">{SAMPLE_DOCUMENTS.length}</span>
                </button>

                <button
                  onClick={() => setActiveSidebarItem('recent')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-docu text-xs font-medium transition-colors ${
                    activeSidebarItem === 'recent'
                      ? 'bg-docu-surface text-docu-accent shadow-subtle border border-docu-border'
                      : 'text-docu-secondary hover:text-docu-text hover:bg-docu-subtle'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Recent Activity</span>
                  </div>
                  <span className="text-[10px] font-mono text-docu-muted">Today</span>
                </button>

                <button
                  onClick={() => setActiveSidebarItem('saved')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-docu text-xs font-medium transition-colors ${
                    activeSidebarItem === 'saved'
                      ? 'bg-docu-surface text-docu-accent shadow-subtle border border-docu-border'
                      : 'text-docu-secondary hover:text-docu-text hover:bg-docu-subtle'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>Saved Answers</span>
                  </div>
                  <span className="text-[10px] font-mono text-docu-muted">
                    {chatMessages.filter((m) => m.saved).length}
                  </span>
                </button>
              </div>

              {/* Collections Navigation */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-docu-muted block px-2 mb-1">
                  Collections
                </span>
                {collections.map((col) => {
                  const count =
                    col === 'All'
                      ? SAMPLE_DOCUMENTS.length
                      : SAMPLE_DOCUMENTS.filter((d) => d.collection === col).length;

                  return (
                    <button
                      key={col}
                      onClick={() => {
                        setSelectedCollection(col);
                        setActiveSidebarItem('collections');
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-docu text-xs font-medium transition-colors ${
                        selectedCollection === col && activeSidebarItem === 'collections'
                          ? 'bg-docu-surface text-docu-accent shadow-subtle border border-docu-border'
                          : 'text-docu-secondary hover:text-docu-text hover:bg-docu-subtle'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Folder className="w-3.5 h-3.5 text-docu-accent/70 shrink-0" />
                        <span className="truncate">{col}</span>
                      </div>
                      <span className="text-[10px] font-mono text-docu-muted">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom Status */}
            <div className="pt-4 border-t border-docu-border space-y-2">
              <div className="p-2.5 rounded bg-white border border-docu-border text-[11px] text-docu-secondary space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span>Vector Index</span>
                  <span className="text-docu-success">Healthy</span>
                </div>
                <div className="w-full bg-docu-subtle h-1.5 rounded-full overflow-hidden">
                  <div className="bg-docu-accent h-full w-[84%]" />
                </div>
                <span className="text-[10px] text-docu-muted block font-mono">
                  142 Chunks · 0.984 Precision
                </span>
              </div>
            </div>
          </div>

          {/* 2. Center Panel: Document Library & Filtering (col-span-5) */}
          <div className="lg:col-span-5 border-r border-docu-border p-5 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-docu-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter documents or tags..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-docu-subtle/80 border border-docu-border rounded-docu focus:bg-white focus:border-docu-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Format Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {(['all', 'pdf', 'docx', 'xlsx'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFileTypeFilter(type)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono capitalize transition-colors ${
                      fileTypeFilter === type
                        ? 'bg-docu-text text-white'
                        : 'bg-docu-subtle hover:bg-docu-border text-docu-secondary'
                    }`}
                  >
                    {type}
                  </button>
                ))}
                <span className="text-[11px] text-docu-muted ml-auto font-mono">
                  {filteredDocuments.length} found
                </span>
              </div>

              {/* Document List */}
              <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredDocuments.map((doc) => {
                  const isSelected = selectedDoc.id === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc)}
                      className={`p-3.5 rounded-docu border transition-all cursor-pointer group ${
                        isSelected
                          ? 'bg-docu-accent-soft/30 border-docu-accent shadow-subtle'
                          : 'bg-white border-docu-border hover:border-docu-border-strong hover:bg-docu-subtle/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-7 h-7 rounded flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                              doc.type === 'pdf'
                                ? 'bg-rose-50 text-rose-600'
                                : doc.type === 'docx'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-emerald-50 text-emerald-600'
                            }`}
                          >
                            {doc.type.toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-xs font-semibold text-docu-text truncate group-hover:text-docu-accent transition-colors">
                              {doc.title}
                            </h5>
                            <span className="text-[10px] text-docu-secondary block font-mono">
                              {doc.fileSize} · {doc.pages} Pages · {doc.collection}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectDocument(doc);
                          }}
                          className="p-1 text-docu-muted hover:text-docu-accent rounded transition-colors"
                          title="Open full preview"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-docu-secondary mt-2 line-clamp-2 leading-relaxed">
                        {doc.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-docu-border/60 text-[10px]">
                        <div className="flex items-center gap-1">
                          {doc.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded bg-docu-subtle text-docu-secondary font-mono"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                        <span className="text-docu-muted font-mono">{doc.lastModified}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Preview Action Footer */}
            <div className="pt-3 border-t border-docu-border flex items-center justify-between text-xs">
              <span className="text-docu-secondary">
                Selected: <strong className="text-docu-text font-medium">{selectedDoc.title}</strong>
              </span>
              <button
                onClick={() => onSelectDocument(selectedDoc)}
                className="text-docu-accent hover:underline font-medium flex items-center gap-1"
              >
                <span>Read Full Document</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 3. Right Panel: Grounded AI Assistant (col-span-4) */}
          <div className="lg:col-span-4 p-5 flex flex-col justify-between bg-docu-bg/30">
            <div className="space-y-4">
              {/* Assistant Header */}
              <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-docu-accent flex items-center justify-center text-white">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-docu-text">DocuMind Intelligence</h4>
                    <span className="text-[10px] text-docu-muted block -mt-0.5 font-mono">
                      Target: {selectedDoc.title}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClearChat}
                  className="p-1 text-docu-muted hover:text-docu-text rounded transition-colors"
                  title="Clear conversation"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[90%] p-3 rounded-docu text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-docu-text text-white'
                          : 'bg-white border border-docu-border text-docu-text shadow-subtle'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Citations block */}
                      {msg.citations && msg.citations.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-docu-border/70 space-y-1.5">
                          {msg.citations.map((c) => (
                            <button
                              key={c.id}
                              onClick={() => {
                                const targetDoc =
                                  SAMPLE_DOCUMENTS.find((d) => d.id === c.docId) || selectedDoc;
                                onSelectDocument(targetDoc, c.excerpt);
                              }}
                              className="w-full text-left p-1.5 bg-docu-accent-soft/80 hover:bg-docu-accent/20 rounded border border-docu-accent/30 text-[10px] font-mono text-docu-accent transition-colors flex items-center justify-between gap-1"
                            >
                              <span className="truncate">
                                Source: {c.docTitle} · P.{c.page}
                              </span>
                              <ChevronRight className="w-3 h-3 shrink-0" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Metadata & Actions */}
                    {msg.sender === 'assistant' && (
                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-docu-muted font-mono">
                        <span>{msg.timestamp}</span>
                        <span>·</span>
                        <button
                          onClick={() => handleCopyMessage(msg.text)}
                          className="hover:text-docu-text flex items-center gap-0.5"
                        >
                          <Copy className="w-2.5 h-2.5" /> Copy
                        </button>
                        <span>·</span>
                        <button
                          onClick={() => handleToggleSave(msg.id)}
                          className="hover:text-docu-accent flex items-center gap-0.5"
                        >
                          {msg.saved ? (
                            <BookmarkCheck className="w-2.5 h-2.5 text-docu-accent" />
                          ) : (
                            <Bookmark className="w-2.5 h-2.5" />
                          )}
                          {msg.saved ? 'Saved' : 'Save'}
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {isProcessingQuery && (
                  <div className="flex items-center gap-2 text-xs text-docu-muted p-2">
                    <div className="w-3 h-3 border-2 border-docu-accent border-t-transparent rounded-full animate-spin" />
                    <span>Cross-referencing vector coordinates...</span>
                  </div>
                )}
              </div>

              {/* Preset prompt pills */}
              <div className="space-y-1.5 pt-2 border-t border-docu-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-docu-muted block">
                  Suggested Prompts:
                </span>
                <div className="flex flex-wrap gap-1">
                  {PRESET_QUESTIONS.slice(0, 3).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleAskQuestion(q)}
                      className="px-2 py-1 rounded bg-white hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border text-[10px] truncate max-w-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="pt-3 border-t border-docu-border mt-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAskQuestion(inputQuery);
                }}
                className="flex items-center gap-2 bg-white border border-docu-border rounded-docu p-1.5 focus-within:border-docu-accent shadow-subtle transition-colors"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder={`Ask about ${selectedDoc.title}...`}
                  className="w-full text-xs bg-transparent px-2 text-docu-text focus:outline-none placeholder:text-docu-muted"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isProcessingQuery}
                  className="p-1.5 rounded bg-docu-accent hover:bg-docu-accent-hover text-white transition-colors disabled:opacity-40 shrink-0"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

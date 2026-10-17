import React, { useState } from 'react';
import { Sparkles, Copy, Bookmark, BookmarkCheck, RotateCcw, ChevronDown, ChevronUp, FileText, ArrowRight, CornerDownLeft, ExternalLink } from 'lucide-react';
import { DocumentItem, ChatMessage } from '../types';
import { SAMPLE_DOCUMENTS, PRESET_ANSWERS } from '../data/sampleData';

interface DocumentChatProps {
  onSelectDocument: (doc: DocumentItem, citationPassage?: string) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
}

export const DocumentChat: React.FC<DocumentChatProps> = ({ onSelectDocument, onToast }) => {
  const proposalDoc = SAMPLE_DOCUMENTS.find((d) => d.id === 'doc-5') || SAMPLE_DOCUMENTS[0];

  const [expandedSources, setExpandedSources] = useState<Record<string, boolean>>({
    'cit-main': true,
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'demo-msg-1',
      sender: 'user',
      text: 'What are the main recommendations in the project proposal?',
      timestamp: '11:02 AM',
    },
    {
      id: 'demo-msg-2',
      sender: 'assistant',
      text: 'The proposal highlights three primary recommendations:\n\n1. Streamline the onboarding process.\n2. Automate repetitive operational tasks.\n3. Establish clear performance indicators.',
      timestamp: '11:02 AM',
      citations: [
        {
          id: 'cit-rec-1',
          docId: 'doc-5',
          docTitle: 'Project_Proposal.docx',
          section: 'Section 2 — Problem Statement & Recommendations',
          page: 2,
          excerpt: 'The proposal highlights three primary recommendations: 1. Streamline the onboarding process. 2. Automate repetitive operational tasks. 3. Establish clear performance indicators.',
        },
        {
          id: 'cit-rec-2',
          docId: 'doc-5',
          docTitle: 'Project_Proposal.docx',
          section: 'Section 4 — Implementation Architecture',
          page: 6,
          excerpt: 'By establishing DocuMind as the primary intake gate, documents are parsed in under 8 seconds.',
        },
      ],
      saved: false,
    },
  ]);

  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedPrompts = [
    'What are the main recommendations in the project proposal?',
    'What are the key findings?',
    'Find important dates, stipends, and deadlines',
    'Compare Policy_V1.pdf and Policy_V2.pdf',
    'Summarize the financial performance overview',
  ];

  const handleSendPrompt = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');
    setIsLoading(true);

    setTimeout(() => {
      const match = PRESET_ANSWERS[text];
      let reply: ChatMessage;

      if (match) {
        reply = {
          id: `asst-${Date.now()}`,
          sender: 'assistant',
          text: match.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: match.citations,
          saved: false,
        };
      } else {
        reply = {
          id: `asst-${Date.now()}`,
          sender: 'assistant',
          text: `Extracted from ${proposalDoc.title}: Analysis matches "${text}" with confirmed paragraph coordinates. All observations map to verified document text.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: [
            {
              id: `cit-${Date.now()}`,
              docId: proposalDoc.id,
              docTitle: proposalDoc.title,
              section: 'Document Body Reference',
              page: 2,
              excerpt: proposalDoc.excerpt,
            },
          ],
          saved: false,
        };
      }

      setMessages((prev) => [...prev, reply]);
      setIsLoading(false);
      onToast('Response Grounded', 'Coordinate citation verified in sample document.', 'purple');
    }, 450);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    onToast('Copied', 'Grounded answer copied to clipboard.', 'success');
  };

  const handleToggleSave = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, saved: !m.saved } : m))
    );
    onToast('Answer Saved', 'Pinned to your saved research answers.', 'info');
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'demo-msg-1',
        sender: 'user',
        text: 'What are the main recommendations in the project proposal?',
        timestamp: '11:02 AM',
      },
      {
        id: 'demo-msg-2',
        sender: 'assistant',
        text: 'The proposal highlights three primary recommendations:\n\n1. Streamline the onboarding process.\n2. Automate repetitive operational tasks.\n3. Establish clear performance indicators.',
        timestamp: '11:02 AM',
        citations: [
          {
            id: 'cit-rec-1',
            docId: 'doc-5',
            docTitle: 'Project_Proposal.docx',
            section: 'Section 2 — Problem Statement & Recommendations',
            page: 2,
            excerpt: 'The proposal highlights three primary recommendations: 1. Streamline the onboarding process. 2. Automate repetitive operational tasks. 3. Establish clear performance indicators.',
          },
          {
            id: 'cit-rec-2',
            docId: 'doc-5',
            docTitle: 'Project_Proposal.docx',
            section: 'Section 4 — Implementation Architecture',
            page: 6,
            excerpt: 'By establishing DocuMind as the primary intake gate, documents are parsed in under 8 seconds.',
          },
        ],
        saved: false,
      },
    ]);
    onToast('Conversation Reset', 'Reverted to default grounded demonstration state.', 'info');
  };

  const toggleSources = (id: string) => {
    setExpandedSources((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            GROUNDED AI DIALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Just ask. Your documents have the context.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            DocuMind provides a conversational interface where every generated answer points directly to verifiable source passages. Click any citation to inspect the original text immediately.
          </p>
        </div>

        {/* Dedicated Chat Showcase Card */}
        <div className="max-w-4xl mx-auto bg-docu-bg border border-docu-border rounded-docu-xl shadow-card overflow-hidden">
          {/* Chrome Bar */}
          <div className="px-6 py-3.5 bg-white border-b border-docu-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-docu-accent flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-docu-text">DocuMind Grounded Chat</h4>
                <span className="text-[10px] text-docu-muted font-mono">
                  Active Document Context: Project_Proposal.docx
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono text-docu-success bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Deterministic Coordinates
              </span>
              <button
                onClick={handleReset}
                className="p-1.5 text-docu-muted hover:text-docu-text rounded hover:bg-docu-subtle transition-colors"
                title="Reset demonstration thread"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Flow */}
          <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-docu p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-docu-text text-white'
                      : 'bg-white border border-docu-border text-docu-text shadow-subtle'
                  }`}
                >
                  <p className="whitespace-pre-line font-normal">{msg.text}</p>

                  {/* Grounded Citation Expandable Panel */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-docu-border space-y-2">
                      <div className="flex items-center justify-between text-xs font-medium text-docu-accent">
                        <span className="font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" /> Grounded Source References ({msg.citations.length})
                        </span>
                        <button
                          onClick={() => toggleSources(msg.id)}
                          className="text-[11px] hover:underline flex items-center gap-0.5"
                        >
                          {expandedSources[msg.id] !== false ? (
                            <>
                              <span>Collapse</span>
                              <ChevronUp className="w-3 h-3" />
                            </>
                          ) : (
                            <>
                              <span>Expand</span>
                              <ChevronDown className="w-3 h-3" />
                            </>
                          )}
                        </button>
                      </div>

                      {expandedSources[msg.id] !== false && (
                        <div className="space-y-2 mt-2">
                          {msg.citations.map((c) => (
                            <div
                              key={c.id}
                              className="p-2.5 bg-docu-accent-soft/70 border border-docu-accent/30 rounded-docu text-xs space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-docu-text font-mono text-[11px]">
                                  {c.docTitle} — {c.section} (Page {c.page})
                                </span>
                                <button
                                  onClick={() => {
                                    const doc =
                                      SAMPLE_DOCUMENTS.find((d) => d.id === c.docId) || proposalDoc;
                                    onSelectDocument(doc, c.excerpt);
                                  }}
                                  className="text-[11px] text-docu-accent hover:underline flex items-center gap-1"
                                >
                                  <span>View Page</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>

                              <p className="text-docu-secondary text-[11px] italic leading-relaxed">
                                “{c.excerpt}”
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Meta actions */}
                {msg.sender === 'assistant' && (
                  <div className="flex items-center gap-3 mt-1.5 px-1 text-xs text-docu-muted font-mono">
                    <span>{msg.timestamp}</span>
                    <span>·</span>
                    <button
                      onClick={() => handleCopy(msg.text)}
                      className="hover:text-docu-text flex items-center gap-1 transition-colors"
                    >
                      <Copy className="w-3 h-3" /> Copy Answer
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => handleToggleSave(msg.id)}
                      className="hover:text-docu-accent flex items-center gap-1 transition-colors"
                    >
                      {msg.saved ? (
                        <BookmarkCheck className="w-3 h-3 text-docu-accent" />
                      ) : (
                        <Bookmark className="w-3 h-3" />
                      )}
                      <span>{msg.saved ? 'Saved' : 'Save Answer'}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2.5 text-xs text-docu-muted p-2">
                <div className="w-4 h-4 border-2 border-docu-accent border-t-transparent rounded-full animate-spin" />
                <span>Locating coordinate citations in document corpus...</span>
              </div>
            )}
          </div>

          {/* Suggested Prompts Shelf */}
          <div className="px-6 py-3 bg-white border-t border-docu-border">
            <span className="text-[10px] font-mono uppercase tracking-wider text-docu-muted block mb-2">
              Try Suggested Queries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestedPrompts.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendPrompt(q)}
                  className="px-2.5 py-1 rounded bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border text-xs transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Query Input */}
          <div className="p-4 bg-white border-t border-docu-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendPrompt(chatInput);
              }}
              className="flex items-center gap-2 bg-docu-bg border border-docu-border rounded-docu p-2 focus-within:border-docu-accent focus-within:bg-white transition-all shadow-subtle"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask a question about project recommendations, findings, or policies..."
                className="w-full text-xs sm:text-sm bg-transparent px-2 text-docu-text focus:outline-none placeholder:text-docu-muted"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isLoading}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-docu-accent hover:bg-docu-accent-hover text-white rounded text-xs font-medium transition-colors disabled:opacity-40"
              >
                <span>Ask</span>
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

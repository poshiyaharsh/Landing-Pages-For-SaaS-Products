import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Copy, Download, Sparkles, BookOpen, Layers, Table } from 'lucide-react';
import { DocumentItem } from '../types';

interface DocumentPreviewModalProps {
  document: DocumentItem | null;
  highlightPassage?: string;
  isOpen: boolean;
  onClose: () => void;
  onAskDoc?: (doc: DocumentItem) => void;
  onToast?: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
}

export const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  document,
  highlightPassage,
  isOpen,
  onClose,
  onAskDoc,
  onToast,
}) => {
  const [activeTab, setActiveTab] = useState<'reader' | 'extracted' | 'summary'>('reader');
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (!isOpen || !document) return null;

  const activePageData = document.pagesContent.find((p) => p.pageNumber === currentPage) || document.pagesContent[0];

  const handleCopyPassage = (text: string) => {
    navigator.clipboard.writeText(text);
    onToast?.('Copied to clipboard', 'Selected passage text copied successfully.', 'success');
  };

  const handleExportSummary = () => {
    const text = `# ${document.title} — Executive Summary\n\n${document.summary.executiveSummary}\n\n## Key Findings\n${document.summary.keyFindings.map((f) => `- ${f}`).join('\n')}\n\n## Recommended Actions\n${document.summary.recommendedActions.map((a) => `- ${a}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    onToast?.('Summary Exported', 'Executive summary formatted in markdown copied to clipboard.', 'purple');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-docu-text/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-docu-surface border border-docu-border rounded-docu-lg shadow-modal overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-docu-border bg-docu-subtle/40">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded bg-white border border-docu-border flex items-center justify-center text-docu-accent shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-docu-text truncate">{document.title}</h3>
                <span className="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded bg-docu-accent-soft text-docu-accent">
                  {document.type}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-docu-success font-medium">
                  <CheckCircle2 className="w-3 h-3" /> Indexed
                </span>
              </div>
              <p className="text-xs text-docu-secondary mt-0.5">
                {document.fileSize} · {document.pages} Pages · Collection: <span className="font-medium text-docu-text">{document.collection}</span> · Last modified {document.lastModified}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onAskDoc && (
              <button
                onClick={() => {
                  onClose();
                  onAskDoc(document);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-docu-accent bg-docu-accent-soft hover:bg-docu-accent/15 rounded-docu transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ask AI About This</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-docu-muted hover:text-docu-text rounded-md hover:bg-docu-subtle transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Navigation */}
        <div className="flex items-center justify-between px-6 py-2.5 border-b border-docu-border bg-white text-xs">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('reader')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-docu font-medium transition-colors ${
                activeTab === 'reader'
                  ? 'bg-docu-subtle text-docu-text'
                  : 'text-docu-secondary hover:text-docu-text'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-docu-accent" />
              <span>Document Reader</span>
            </button>

            <button
              onClick={() => setActiveTab('extracted')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-docu font-medium transition-colors ${
                activeTab === 'extracted'
                  ? 'bg-docu-subtle text-docu-text'
                  : 'text-docu-secondary hover:text-docu-text'
              }`}
            >
              <Table className="w-3.5 h-3.5 text-docu-accent" />
              <span>Structured Data ({document.extractedData?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab('summary')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-docu font-medium transition-colors ${
                activeTab === 'summary'
                  ? 'bg-docu-subtle text-docu-text'
                  : 'text-docu-secondary hover:text-docu-text'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-docu-accent" />
              <span>AI Summary & Actions</span>
            </button>
          </div>

          {activeTab === 'summary' && (
            <button
              onClick={handleExportSummary}
              className="flex items-center gap-1 text-docu-secondary hover:text-docu-accent text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Markdown</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-docu-bg">
          {activeTab === 'reader' && (
            <div className="max-w-3xl mx-auto space-y-4">
              {/* Page Navigator */}
              <div className="flex items-center justify-between text-xs text-docu-secondary bg-white p-2.5 rounded-docu border border-docu-border">
                <span className="font-mono">
                  Displaying Page {activePageData.pageNumber} of {document.pages}
                </span>
                <div className="flex items-center gap-1">
                  {document.pagesContent.map((p) => (
                    <button
                      key={p.pageNumber}
                      onClick={() => setCurrentPage(p.pageNumber)}
                      className={`px-2 py-0.5 rounded font-mono text-xs ${
                        currentPage === p.pageNumber
                          ? 'bg-docu-text text-white'
                          : 'bg-docu-subtle hover:bg-docu-border text-docu-text'
                      }`}
                    >
                      P.{p.pageNumber}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Page Simulation */}
              <div className="bg-white border border-docu-border rounded-docu shadow-card p-8 font-sans space-y-4">
                <div className="border-b border-docu-border/60 pb-3 flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-docu-muted">
                    {document.title} · Section View
                  </span>
                  <span className="text-xs text-docu-muted font-mono">Page {activePageData.pageNumber}</span>
                </div>

                <h4 className="text-lg font-semibold text-docu-text">{activePageData.heading}</h4>

                <p className="text-sm text-docu-secondary leading-relaxed font-normal">
                  {activePageData.content}
                </p>

                {/* Highlighted Passage Citation */}
                {(highlightPassage || activePageData.highlightPassage) && (
                  <div className="mt-4 p-4 rounded-docu bg-docu-accent-soft/70 border-l-4 border-docu-accent">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-docu-accent flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Grounded Citation Anchor
                      </span>
                      <button
                        onClick={() =>
                          handleCopyPassage(
                            highlightPassage || activePageData.highlightPassage || ''
                          )
                        }
                        className="text-[11px] text-docu-accent hover:underline flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copy Citation
                      </button>
                    </div>
                    <p className="text-sm font-medium text-docu-text leading-relaxed">
                      "{highlightPassage || activePageData.highlightPassage}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'extracted' && (
            <div className="max-w-3xl mx-auto bg-white border border-docu-border rounded-docu p-6 shadow-card space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                <div>
                  <h4 className="text-sm font-semibold text-docu-text">Structured Entity Extraction</h4>
                  <p className="text-xs text-docu-secondary">
                    Normalized key-value pairs automatically parsed from document coordinates.
                  </p>
                </div>
                <span className="text-xs font-mono text-docu-accent bg-docu-accent-soft px-2 py-0.5 rounded">
                  Layout Model: v2.4 Multi-Modal
                </span>
              </div>

              {document.extractedData && document.extractedData.length > 0 ? (
                <div className="overflow-hidden border border-docu-border rounded-docu">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-docu-subtle text-docu-text font-semibold border-b border-docu-border">
                      <tr>
                        <th className="py-2.5 px-4">Entity Attribute</th>
                        <th className="py-2.5 px-4">Extracted Value</th>
                        <th className="py-2.5 px-4 text-right">Confidence Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-docu-border font-mono text-xs">
                      {document.extractedData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-docu-subtle/50 transition-colors">
                          <td className="py-3 px-4 text-docu-secondary font-sans font-medium">{row.key}</td>
                          <td className="py-3 px-4 text-docu-text font-semibold">{row.value}</td>
                          <td className="py-3 px-4 text-right">
                            <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-docu-success text-[11px]">
                              {row.confidence}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-xs text-docu-muted py-8 text-center">
                  No structured tables mapped for this document preview.
                </p>
              )}
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="max-w-3xl mx-auto space-y-5">
              <div className="bg-white border border-docu-border rounded-docu p-6 shadow-card space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono font-semibold px-2 py-0.5 rounded bg-docu-accent-soft text-docu-accent">
                    Executive Summary
                  </span>
                  <span className="text-xs text-docu-muted">Generated by DocuMind Intelligence Engine</span>
                </div>
                <p className="text-sm text-docu-text leading-relaxed">
                  {document.summary.executiveSummary}
                </p>

                {/* Important Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-docu-border">
                  {document.summary.importantNumbers.map((num, i) => (
                    <div key={i} className="p-3 bg-docu-subtle/70 rounded-docu border border-docu-border">
                      <span className="text-[11px] text-docu-secondary uppercase tracking-wider block">
                        {num.label}
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-lg font-semibold text-docu-text">{num.value}</span>
                        {num.change && (
                          <span className="text-xs text-docu-success font-medium font-mono">{num.change}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Findings & Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-docu-border rounded-docu p-5 shadow-card">
                  <h5 className="text-xs uppercase tracking-wider font-mono font-semibold text-docu-text mb-3">
                    Key Findings
                  </h5>
                  <ul className="space-y-2 text-xs text-docu-secondary leading-relaxed">
                    {document.summary.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-docu-accent mt-1.5 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-docu-border rounded-docu p-5 shadow-card">
                  <h5 className="text-xs uppercase tracking-wider font-mono font-semibold text-docu-text mb-3">
                    Recommended Actions
                  </h5>
                  <ul className="space-y-2 text-xs text-docu-secondary leading-relaxed">
                    {document.summary.recommendedActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-docu-success mt-1.5 shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-docu-border bg-white flex items-center justify-between text-xs text-docu-muted">
          <span>Client-side demonstration view · Grounded in local sample coordinate models</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-docu-text text-white hover:bg-black rounded-docu font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

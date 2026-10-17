import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, FileText, X, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { DocumentItem, DocumentType } from '../types';

interface UploadExperienceProps {
  onDocumentUploaded: (newDoc: DocumentItem) => void;
  onSelectDocument: (doc: DocumentItem) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
}

export const UploadExperience: React.FC<UploadExperienceProps> = ({
  onDocumentUploaded,
  onSelectDocument,
  onToast,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<DocumentItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedExtensions = ['.pdf', '.docx', '.xlsx', '.txt'];
  const maxSizeBytes = 25 * 1024 * 1024; // 25 MB

  const validateAndProcessFile = (file: File) => {
    setErrorMsg(null);
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();

    if (!supportedExtensions.includes(ext)) {
      setErrorMsg(`Unsupported format (${ext}). Supported formats: PDF, DOCX, XLSX, TXT.`);
      onToast('Format Unsupported', `Please select a .pdf, .docx, .xlsx, or .txt file.`, 'warning');
      return;
    }

    if (file.size > maxSizeBytes) {
      setErrorMsg(`File size exceeds 25 MB limit (${(file.size / (1024 * 1024)).toFixed(1)} MB).`);
      onToast('File Too Large', 'Maximum file size allowed is 25 MB.', 'warning');
      return;
    }

    // Determine type
    const docType: DocumentType = ext.slice(1) as DocumentType;

    // Simulate multi-stage parsing
    setIsProcessing(true);
    setProgress(15);
    setProcessingStep('Validating file header & integrity...');

    setTimeout(() => {
      setProgress(45);
      setProcessingStep('Extracting layout coordinates and tabular tokens...');
    }, 400);

    setTimeout(() => {
      setProgress(80);
      setProcessingStep('Building local dense vector embeddings...');
    }, 800);

    setTimeout(() => {
      setProgress(100);
      setProcessingStep('Document indexed successfully.');

      const newDocItem: DocumentItem = {
        id: `uploaded-${Date.now()}`,
        title: file.name,
        type: docType,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        lastModified: 'Just now',
        pages: docType === 'xlsx' ? 4 : 8,
        collection: 'User Ingested',
        status: 'indexed',
        excerpt: `Locally parsed ${file.name}. Processed 8 text pages with semantic vector anchors ready for grounded Q&A.`,
        tags: ['Uploaded', docType.toUpperCase(), 'Local Vault'],
        summary: {
          executiveSummary: `Demonstration synthesis for ${file.name}: Successfully indexed in local memory. All coordinates are mapped for immediate conversational retrieval.`,
          keyFindings: [
            'Document structure and header blocks parsed cleanly without syntax errors.',
            'Vector index active with 32 semantic coordinate chunks mapped.',
            'Ready for natural language inquiry and comparison audits.'
          ],
          importantNumbers: [
            { label: 'Parse Time', value: '1.2s' },
            { label: 'Chunks', value: '32 Nodes' },
            { label: 'Confidence', value: '99.5%' }
          ],
          decisions: ['Document added to active query workspace.'],
          risks: ['Client-side prototype: document remains in local memory only.'],
          recommendedActions: ['Ask questions or open document reader view.']
        },
        pagesContent: [
          {
            pageNumber: 1,
            heading: `1.0 Document Intake Overview: ${file.name}`,
            content: `Uploaded file ${file.name} (${(file.size / 1024).toFixed(1)} KB). This document has been processed inside local browser memory. Text streams have been tokenized into dense vectors for instant semantic lookup.`,
            highlightPassage: `This document has been processed inside local browser memory.`
          }
        ],
        extractedData: [
          { key: 'File Name', value: file.name, confidence: '100%' },
          { key: 'Detected Mime', value: file.type || `application/${docType}`, confidence: '99.9%' },
          { key: 'Ingestion State', value: 'Complete (Local Storage)', confidence: '99.8%' }
        ]
      };

      setUploadedFiles((prev) => [newDocItem, ...prev]);
      onDocumentUploaded(newDocItem);
      setIsProcessing(false);
      onToast('Document Ready', `${file.name} parsed and indexed in local workspace.`, 'success');
    }, 1250);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  return (
    <section id="upload-zone" className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            DOCUMENT INGESTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Bring your documents into focus.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Drag and drop your PDFs, Word documents, spreadsheets, or memos. DocuMind extracts layouts, builds coordinate-anchored embeddings, and readies them for instant synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Drag & Drop Area */}
          <div className="lg:col-span-7">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-10 border-2 border-dashed rounded-docu-xl text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-docu-accent bg-docu-accent-soft/50 shadow-card'
                  : 'border-docu-border bg-white hover:border-docu-accent/50 hover:bg-docu-subtle/30'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.xlsx,.txt"
                onChange={handleFileInputChange}
                className="hidden"
              />

              <div className="w-12 h-12 mx-auto rounded-full bg-docu-accent-soft flex items-center justify-center text-docu-accent mb-4">
                <UploadCloud className="w-6 h-6" />
              </div>

              <h4 className="text-base font-semibold text-docu-text">
                Click to browse or drop document here
              </h4>
              <p className="text-xs text-docu-secondary mt-1 max-w-sm mx-auto">
                Supported formats: <strong className="text-docu-text">PDF, DOCX, XLSX, TXT</strong> up to 25 MB.
              </p>

              <div className="flex items-center justify-center gap-4 mt-6 text-[11px] font-mono text-docu-muted">
                <span>PDF Documents</span>
                <span>·</span>
                <span>Word Docs</span>
                <span>·</span>
                <span>Excel Sheets</span>
                <span>·</span>
                <span>Plain Text</span>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-docu flex items-center justify-between text-xs text-rose-800">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
                <button
                  onClick={() => setErrorMsg(null)}
                  className="text-rose-600 hover:text-rose-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Progress / Processing Status */}
            {isProcessing && (
              <div className="mt-4 p-4 bg-white border border-docu-border rounded-docu shadow-subtle space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-docu-text font-medium flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-docu-accent animate-spin" />
                    {processingStep}
                  </span>
                  <span className="text-docu-accent font-semibold">{progress}%</span>
                </div>
                <div className="w-full bg-docu-subtle h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-docu-accent h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Local Prototype Privacy Notice */}
            <div className="mt-4 p-3.5 bg-docu-subtle/70 rounded-docu border border-docu-border flex items-start gap-2.5 text-xs text-docu-secondary">
              <ShieldCheck className="w-4 h-4 text-docu-success shrink-0 mt-0.5" />
              <div>
                <strong className="text-docu-text font-medium block">
                  Local Memory Sandbox Notice
                </strong>
                Files uploaded during this demo remain inside your local browser runtime. No document content is uploaded to remote servers or mixed with public AI models.
              </div>
            </div>
          </div>

          {/* Right Column: Ingested Documents List */}
          <div className="lg:col-span-5 bg-white border border-docu-border rounded-docu-xl p-6 shadow-subtle space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-docu-border">
              <h4 className="text-sm font-semibold text-docu-text">Ingestion Status Feed</h4>
              <span className="text-xs font-mono text-docu-muted">
                {uploadedFiles.length} Recent Uploads
              </span>
            </div>

            {uploadedFiles.length === 0 ? (
              <div className="py-12 text-center text-xs text-docu-muted space-y-2">
                <FileText className="w-8 h-8 text-docu-muted/60 mx-auto" />
                <p>No new uploads yet this session.</p>
                <p className="text-[11px] text-docu-secondary">
                  Drop any sample file above to watch layout parsing and embedding generation in action.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {uploadedFiles.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3 bg-docu-bg rounded-docu border border-docu-border flex items-center justify-between text-xs hover:border-docu-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded bg-emerald-50 text-docu-success border border-emerald-200 flex items-center justify-center font-mono font-bold text-[10px]">
                        {doc.type.toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <span className="font-semibold text-docu-text block truncate">{doc.title}</span>
                        <span className="text-[10px] text-docu-secondary font-mono">
                          {doc.fileSize} · Indexed & Grounded
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectDocument(doc)}
                      className="px-2.5 py-1 text-[11px] font-medium text-docu-accent bg-docu-accent-soft hover:bg-docu-accent/15 rounded transition-colors flex items-center gap-1 shrink-0"
                    >
                      <span>Preview</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

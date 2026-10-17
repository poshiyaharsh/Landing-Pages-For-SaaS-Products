import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturesSection } from './components/FeaturesSection';
import { DocumentWorkspace } from './components/DocumentWorkspace';
import { DocumentChat } from './components/DocumentChat';
import { UploadExperience } from './components/UploadExperience';
import { SummaryShowcase } from './components/SummaryShowcase';
import { SmartSearch } from './components/SmartSearch';
import { DocumentComparison } from './components/DocumentComparison';
import { InsightsDashboard } from './components/InsightsDashboard';
import { UseCases } from './components/UseCases';
import { SecuritySection } from './components/SecuritySection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DocumentPreviewModal } from './components/DocumentPreviewModal';
import { ComparisonSummaryModal } from './components/ComparisonSummaryModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { DocumentItem, ToastNotification } from './types';
import { SAMPLE_DOCUMENTS } from './data/sampleData';

export const App: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>(SAMPLE_DOCUMENTS);
  const [previewDoc, setPreviewDoc] = useState<DocumentItem | null>(null);
  const [highlightPassage, setHighlightPassage] = useState<string | undefined>();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (
    title: string,
    description?: string,
    type: 'success' | 'info' | 'warning' | 'purple' = 'info'
  ) => {
    const newToast: ToastNotification = {
      id: `toast-${Date.now()}-${Math.random()}`,
      title,
      description,
      type,
    };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectDocument = (doc: DocumentItem, citation?: string) => {
    setPreviewDoc(doc);
    setHighlightPassage(citation);
    setIsPreviewOpen(true);
  };

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleExploreWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDocumentUploaded = (newDoc: DocumentItem) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  return (
    <div className="min-h-screen bg-docu-bg text-docu-text font-sans antialiased selection:bg-docu-accent-soft selection:text-docu-accent">
      {/* Sticky Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onExploreWorkspace={handleExploreWorkspace}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAuth={handleOpenAuth}
          onExploreWorkspace={handleExploreWorkspace}
          onSelectDocument={handleSelectDocument}
          sampleDoc={documents[0]}
        />

        {/* 2. Capability Strip */}
        <CapabilityStrip />

        {/* 3. Problem and Solution Section */}
        <ProblemSolution />

        {/* 4. Features Section */}
        <FeaturesSection
          onSelectDocument={handleSelectDocument}
          onOpenComparison={() => setIsComparisonOpen(true)}
          sampleDoc={documents[0]}
        />

        {/* 5. Interactive Document Workspace (The Core Product Showcase) */}
        <DocumentWorkspace
          onSelectDocument={handleSelectDocument}
          onToast={addToast}
          onOpenUpload={() => {
            const el = document.getElementById('upload-zone');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 6. AI Document Chat (Dedicated Conversational Showcase) */}
        <DocumentChat
          onSelectDocument={handleSelectDocument}
          onToast={addToast}
        />

        {/* 7. Document Upload Experience */}
        <UploadExperience
          onDocumentUploaded={handleDocumentUploaded}
          onSelectDocument={handleSelectDocument}
          onToast={addToast}
        />

        {/* 8. Document Summary Showcase */}
        <SummaryShowcase
          onSelectDocument={handleSelectDocument}
          onToast={addToast}
        />

        {/* 9. Smart Search Experience */}
        <SmartSearch
          onSelectDocument={handleSelectDocument}
        />

        {/* 10. Document Comparison */}
        <DocumentComparison
          onOpenComparisonModal={() => setIsComparisonOpen(true)}
        />

        {/* 11. Document Insights Dashboard */}
        <InsightsDashboard />

        {/* 12. Use Cases */}
        <UseCases />

        {/* 13. Privacy and Document Security */}
        <SecuritySection />

        {/* 14. Testimonials */}
        <Testimonials />

        {/* 15. Pricing Section */}
        <Pricing
          onSelectPlan={(plan) => {
            addToast(`Selected ${plan} Plan`, 'Welcome to the DocuMind prototype demonstration.', 'purple');
            handleOpenAuth('signup');
          }}
        />

        {/* 16. FAQ Section */}
        <FAQ />

        {/* 17. Final CTA Section */}
        <FinalCTA
          onOpenAuth={handleOpenAuth}
          onExploreWorkspace={handleExploreWorkspace}
          sampleDoc={documents[0]}
        />
      </main>

      {/* Footer */}
      <Footer onExploreWorkspace={handleExploreWorkspace} />

      {/* Modals & Dialogs */}
      <DocumentPreviewModal
        document={previewDoc}
        highlightPassage={highlightPassage}
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setHighlightPassage(undefined);
        }}
        onAskDoc={(doc) => {
          handleExploreWorkspace();
          addToast('Ready to Ask', `Ask questions directly about ${doc.title} in the workspace.`, 'info');
        }}
        onToast={addToast}
      />

      <ComparisonSummaryModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onToast={addToast}
      />

      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(email) => {
          addToast('Workspace Ready', `Signed in as ${email}. Full prototype unlocked.`, 'success');
        }}
      />

      {/* Floating Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default App;

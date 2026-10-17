import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromptPlayground } from './components/PromptPlayground';
import { FeaturesSection } from './components/FeaturesSection';
import { ExperimentWorkflow } from './components/ExperimentWorkflow';
import { EvaluationComparison } from './components/EvaluationComparison';
import { UseCasesSection } from './components/UseCasesSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LabModal } from './components/LabModal';
import { Toast, ToastType } from './components/Toast';

export function App() {
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'signup' | 'start'>('start');
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: ToastType;
  }>({
    isOpen: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: ToastType = 'info') => {
    setToast({
      isOpen: true,
      message,
      type,
    });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setModalMode(mode);
    setIsLabModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setModalMode('signup');
    setIsLabModalOpen(true);
    showToast(`Selected ${planName} plan tier. Configure your sandbox environment.`);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Toast Notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />

      {/* Lab Authentication & Workspace Modal */}
      <LabModal
        isOpen={isLabModalOpen}
        defaultMode={modalMode}
        onClose={() => setIsLabModalOpen(false)}
        onSuccess={(msg) => showToast(msg, 'success')}
      />

      {/* Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenLab={() => {
            setModalMode('start');
            setIsLabModalOpen(true);
          }}
          onExploreExperiments={() => handleNavigateSection('playground')}
          onCopyNotice={(msg) => showToast(msg, 'success')}
        />

        {/* Flagship Interactive Prompt Playground */}
        <PromptPlayground onNotify={showToast} />

        {/* 6 Visual Feature Modules */}
        <FeaturesSection />

        {/* 4-Step Interactive Experiment Workflow */}
        <ExperimentWorkflow />

        {/* Evaluation and Comparison Rubrics */}
        <EvaluationComparison />

        {/* Production Use Cases */}
        <UseCasesSection onCopyNotice={(msg) => showToast(msg, 'success')} />

        {/* Ecosystem Integrations */}
        <IntegrationsSection />

        {/* Pricing Tiers */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* FAQs */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA
          onOpenLab={() => {
            setModalMode('start');
            setIsLabModalOpen(true);
          }}
          onExplorePlayground={() => handleNavigateSection('playground')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenLab={() => {
          setModalMode('start');
          setIsLabModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;

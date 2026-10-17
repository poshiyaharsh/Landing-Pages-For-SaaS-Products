import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveWorkflowBuilder } from './components/InteractiveWorkflowBuilder';
import { FeaturesSection } from './components/FeaturesSection';
import { TemplatesSection } from './components/TemplatesSection';
import { WorkflowProcess } from './components/WorkflowProcess';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WorkflowModal } from './components/WorkflowModal';
import { Toast, ToastType } from './components/Toast';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setModalMode('signup');
    setIsModalOpen(true);
    showToast(`Selected ${planName} plan tier. Configure your automation workspace.`);
  };

  const handleSelectTemplate = (templateName: string) => {
    handleNavigateSection('builder-demo');
    showToast(`Loaded "${templateName}" blueprint into canvas builder!`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />

      {/* Workflow Signup / Modal */}
      <WorkflowModal
        isOpen={isModalOpen}
        defaultMode={modalMode}
        onClose={() => setIsModalOpen(false)}
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
          onBuildWorkflow={() => {
            setModalMode('start');
            setIsModalOpen(true);
          }}
          onExploreAutomation={() => handleNavigateSection('builder-demo')}
          onNotify={(msg) => showToast(msg, 'info')}
        />

        {/* Flagship Interactive Workflow Builder */}
        <InteractiveWorkflowBuilder onNotify={(msg) => showToast(msg, 'info')} />

        {/* 6 Feature Bento Modules */}
        <FeaturesSection />

        {/* 6 Reusable Templates Deep-Dive */}
        <TemplatesSection onSelectTemplate={handleSelectTemplate} />

        {/* 4-Step Process */}
        <WorkflowProcess />

        {/* 150+ App Ecosystem */}
        <IntegrationsSection />

        {/* Transparent Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* FAQs */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA
          onBuildWorkflow={() => {
            setModalMode('start');
            setIsModalOpen(true);
          }}
          onExploreCanvas={() => handleNavigateSection('builder-demo')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onBuildWorkflow={() => {
          setModalMode('start');
          setIsModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;

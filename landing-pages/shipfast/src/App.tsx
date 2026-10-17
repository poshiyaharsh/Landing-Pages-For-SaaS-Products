import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkflowBuilder } from './components/WorkflowBuilder';
import { FeaturesSection } from './components/FeaturesSection';
import { FiveStageWorkflow } from './components/FiveStageWorkflow';
import { EcosystemSection } from './components/EcosystemSection';
import { DevExperienceSection } from './components/DevExperienceSection';
import { UseCasesSection } from './components/UseCasesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BuildModal } from './components/BuildModal';
import { Toast, ToastType } from './components/Toast';

export function App() {
  const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);
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
    setIsBuildModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setModalMode('signup');
    setIsBuildModalOpen(true);
    showToast(`Selected ${planName} plan tier. Configure your launch kit.`);
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

      {/* Build & Launch Modal */}
      <BuildModal
        isOpen={isBuildModalOpen}
        defaultMode={modalMode}
        onClose={() => setIsBuildModalOpen(false)}
        onSuccess={(msg) => showToast(msg, 'success')}
      />

      {/* Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with layered launch visual */}
        <HeroSection
          onStartBuilding={() => {
            setModalMode('start');
            setIsBuildModalOpen(true);
          }}
          onSeeWorkflow={() => handleNavigateSection('workflow-builder')}
          onNotify={(msg) => showToast(msg, 'info')}
        />

        {/* Flagship Interactive Launch Workflow Builder */}
        <WorkflowBuilder onNotify={(msg) => showToast(msg, 'info')} />

        {/* 6 Developer Feature Modules */}
        <FeaturesSection />

        {/* 5-Stage Connected Workflow Stepper */}
        <FiveStageWorkflow />

        {/* Supported Tool & Framework Ecosystem */}
        <EcosystemSection />

        {/* Developer Experience Pillars */}
        <DevExperienceSection />

        {/* 4 Launch Use Cases */}
        <UseCasesSection />

        {/* Transparent Developer Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* FAQs */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTA
          onStartBuilding={() => {
            setModalMode('start');
            setIsBuildModalOpen(true);
          }}
          onSeeHowItWorks={() => handleNavigateSection('workflow-builder')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onStartBuilding={() => {
          setModalMode('start');
          setIsBuildModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;

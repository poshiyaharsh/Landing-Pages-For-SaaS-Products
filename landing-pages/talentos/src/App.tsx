import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveHiringDemo } from './components/InteractiveHiringDemo';
import { FeaturesSection } from './components/FeaturesSection';
import { HumanAIWorkflow } from './components/HumanAIWorkflow';
import { TalentDevelopmentSection } from './components/TalentDevelopmentSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BriefingModal } from './components/BriefingModal';
import { Toast } from './components/Toast';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'info' }>({
    visible: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ visible: true, message, type });
  };

  const scrollToDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-violet-600 selection:text-white">
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        onScrollToDemo={scrollToDemo}
      />

      <main>
        <HeroSection
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />

        <InteractiveHiringDemo onShowToast={showToast} />

        <FeaturesSection />

        <HumanAIWorkflow />

        <TalentDevelopmentSection />

        <IntegrationsSection />

        <PricingSection onOpenModal={() => setModalOpen(true)} />

        <FAQSection />

        <FinalCTA
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />
      </main>

      <Footer />

      <BriefingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Schedule TalentOS Walkthrough"
        onSuccess={(msg) => showToast(msg, 'success')}
      />

      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
        />
      )}
    </div>
  );
}

export default App;

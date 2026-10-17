import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractivePrivacyDashboard } from './components/InteractivePrivacyDashboard';
import { FeaturesSection } from './components/FeaturesSection';
import { PrivacyWorkflow } from './components/PrivacyWorkflow';
import { GovernanceRegister } from './components/GovernanceRegister';
import { TrustPrinciplesSection } from './components/TrustPrinciplesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
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
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-teal-600 selection:text-white font-sans">
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        onScrollToDemo={scrollToDemo}
      />

      <main>
        <HeroSection
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />

        <InteractivePrivacyDashboard onShowToast={showToast} />

        <FeaturesSection />

        <PrivacyWorkflow />

        <GovernanceRegister />

        <TrustPrinciplesSection />

        <PricingSection onOpenModal={() => setModalOpen(true)} />

        <FAQSection />

        <FinalCTA
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />
      </main>

      <Footer />

      <PrivacyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Initialize Privacy Operations"
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

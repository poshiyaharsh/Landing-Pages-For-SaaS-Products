import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { FeaturesSection } from './components/FeaturesSection';
import { DataStorySection } from './components/DataStorySection';
import { TeamUseCasesSection } from './components/TeamUseCasesSection';
import { DataConnectionsSection } from './components/DataConnectionsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DashboardModal } from './components/DashboardModal';
import { Toast } from './components/Toast';

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial';
    title: string;
  }>({
    isOpen: false,
    type: 'demo',
    title: 'Schedule Executive Briefing',
  });

  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'info' | 'warning';
  }>({
    visible: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({
      visible: true,
      message,
      type,
    });
  };

  const handleOpenModal = (type: 'demo' | 'trial') => {
    setModalState({
      isOpen: true,
      type,
      title: type === 'demo' ? 'Schedule Executive Briefing' : 'Activate 14-Day Free Sandbox',
    });
  };

  const scrollToDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar
        onOpenModal={handleOpenModal}
        onScrollToDemo={scrollToDemo}
      />

      <main>
        <HeroSection
          onScrollToDemo={scrollToDemo}
          onOpenModal={handleOpenModal}
        />

        <InteractiveDashboard onShowToast={showToast} />

        <FeaturesSection />

        <DataStorySection />

        <TeamUseCasesSection />

        <DataConnectionsSection />

        <PricingSection onOpenModal={handleOpenModal} />

        <FAQSection />

        <FinalCTA
          onScrollToDemo={scrollToDemo}
          onOpenModal={handleOpenModal}
        />
      </main>

      <Footer />

      <DashboardModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        type={modalState.type}
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

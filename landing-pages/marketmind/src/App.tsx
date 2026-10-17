import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveTerminalDemo } from './components/InteractiveTerminalDemo';
import { FeaturesSection } from './components/FeaturesSection';
import { ResearchWorkflow } from './components/ResearchWorkflow';
import { SectorPerformance } from './components/SectorPerformance';
import { DataFeedsSection } from './components/DataFeedsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
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
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        onScrollToDemo={scrollToDemo}
      />

      <main>
        <HeroSection
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />

        <InteractiveTerminalDemo onShowToast={showToast} />

        <FeaturesSection />

        <ResearchWorkflow />

        <SectorPerformance />

        <DataFeedsSection />

        <PricingSection onOpenModal={() => setModalOpen(true)} />

        <FAQSection />

        <FinalCTA
          onScrollToDemo={scrollToDemo}
          onOpenModal={() => setModalOpen(true)}
        />
      </main>

      <Footer />

      <TerminalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="MarketMind Terminal Access"
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

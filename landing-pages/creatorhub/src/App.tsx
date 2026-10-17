import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveCreatorStudio } from './components/InteractiveCreatorStudio';
import { FeaturesSection } from './components/FeaturesSection';
import { CreateToGrowWorkflow } from './components/CreateToGrowWorkflow';
import { CreatorCategories } from './components/CreatorCategories';
import { CollaborationShowcase } from './components/CollaborationShowcase';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StudioModal } from './components/StudioModal';
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

  const scrollToStudio = () => {
    const studioElement = document.getElementById('studio');
    if (studioElement) {
      studioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A10] text-slate-100 selection:bg-pink-500 selection:text-white">
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        onScrollToStudio={scrollToStudio}
      />

      <main>
        <HeroSection
          onScrollToStudio={scrollToStudio}
          onOpenModal={() => setModalOpen(true)}
        />

        <InteractiveCreatorStudio onShowToast={showToast} />

        <FeaturesSection />

        <CreateToGrowWorkflow />

        <CreatorCategories />

        <CollaborationShowcase />

        <PricingSection onOpenModal={() => setModalOpen(true)} />

        <FAQSection />

        <FinalCTA
          onScrollToStudio={scrollToStudio}
          onOpenModal={() => setModalOpen(true)}
        />
      </main>

      <Footer />

      <StudioModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Unlock Your Creator Hub"
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

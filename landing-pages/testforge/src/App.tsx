import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveQADemo } from './components/InteractiveQADemo';
import { FeaturesSection } from './components/FeaturesSection';
import { TestLifecycleSection } from './components/TestLifecycleSection';
import { FailureAnalysisSection } from './components/FailureAnalysisSection';
import { DeveloperEcosystem } from './components/DeveloperEcosystem';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoSuiteModal } from './components/DemoSuiteModal';
import { Toast } from './components/Toast';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleSelectPlan = (planName: string) => {
    showToast(`Configuring ${planName} trial sandbox. Sample environment provisioned.`);
  };

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-zinc-100 flex flex-col font-mono selection:bg-emerald-500 selection:text-black">
      {/* Toast notifications */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}

      {/* Navigation bar */}
      <Navbar 
        onOpenModal={() => setIsDemoModalOpen(true)} 
        onScrollToDemo={handleScrollToDemo}
      />

      {/* Main content */}
      <main className="flex-grow">
        <HeroSection 
          onOpenModal={() => setIsDemoModalOpen(true)}
          onScrollToDemo={handleScrollToDemo}
        />

        <InteractiveQADemo onShowToast={showToast} />

        <FeaturesSection />

        <TestLifecycleSection />

        <FailureAnalysisSection />

        <DeveloperEcosystem />

        <PricingSection onSelectPlan={handleSelectPlan} />

        <FAQSection />

        <FinalCTA 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onExplore={handleScrollToDemo}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Suite Modal */}
      <DemoSuiteModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Schedule TestForge Demo &amp; Sandbox"
        onSuccess={showToast}
      />
    </div>
  );
}

export default App;

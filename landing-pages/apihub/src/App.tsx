import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveAPIExplorer } from './components/InteractiveAPIExplorer';
import { FeaturesSection } from './components/FeaturesSection';
import { DeveloperWorkflow } from './components/DeveloperWorkflow';
import { DocumentationShowcase } from './components/DocumentationShowcase';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WorkspaceModal } from './components/WorkspaceModal';
import { Toast } from './components/Toast';

export function App() {
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleSelectPlan = (planName: string) => {
    setIsWorkspaceModalOpen(true);
    showToast(`Configuring ${planName} sandbox tier.`);
  };

  const handleScrollToExplorer = () => {
    const el = document.getElementById('explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] flex flex-col font-mono selection:bg-[#22C55E] selection:text-[#020617]">
      {/* Toast Notification */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}

      {/* Navigation */}
      <Navbar 
        onOpenWorkspaceModal={() => setIsWorkspaceModalOpen(true)}
        onScrollToExplorer={handleScrollToExplorer}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection 
          onOpenWorkspaceModal={() => setIsWorkspaceModalOpen(true)}
          onScrollToExplorer={handleScrollToExplorer}
          onShowToast={showToast}
        />

        <InteractiveAPIExplorer onShowToast={showToast} />

        <FeaturesSection />

        <DeveloperWorkflow />

        <DocumentationShowcase onShowToast={showToast} />

        <ArchitectureDiagram />

        <PricingSection onSelectPlan={handleSelectPlan} />

        <FAQSection />

        <FinalCTA 
          onOpenWorkspaceModal={() => setIsWorkspaceModalOpen(true)}
          onScrollToExplorer={handleScrollToExplorer}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Workspace Sandbox Provisioning Modal */}
      <WorkspaceModal 
        isOpen={isWorkspaceModalOpen}
        onClose={() => setIsWorkspaceModalOpen(false)}
        onSuccess={showToast}
      />
    </div>
  );
}

export default App;

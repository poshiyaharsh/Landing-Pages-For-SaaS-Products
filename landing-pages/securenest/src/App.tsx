import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SecurityOverview } from './components/SecurityOverview';
import { SecurityDashboard } from './components/SecurityDashboard';
import { ThreatMonitor } from './components/ThreatMonitor';
import { VulnerabilityScanner } from './components/VulnerabilityScanner';
import { SecurityAlerts } from './components/SecurityAlerts';
import { Compliance } from './components/Compliance';
import { Reports } from './components/Reports';
import { HowItWorks } from './components/HowItWorks';
import { Integrations } from './components/Integrations';
import { SecurityTrust } from './components/SecurityTrust';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'trial' | 'demo' | 'signin' | 'expert' | null;
    planName?: string;
  }>({
    isOpen: false,
    type: null
  });

  const openTrialModal = (planName?: string) => {
    setModalState({ isOpen: true, type: 'trial', planName });
  };

  const openDemoModal = () => {
    setModalState({ isOpen: true, type: 'demo' });
  };

  const openSignInModal = () => {
    setModalState({ isOpen: true, type: 'signin' });
  };

  const openExpertModal = () => {
    setModalState({ isOpen: true, type: 'expert' });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, planName: undefined });
  };

  return (
    <div className="min-h-screen bg-cyber-black text-slate-100 selection:bg-cyber-emerald selection:text-slate-950 font-sans antialiased relative">
      {/* Global Navbar */}
      <Navbar
        onStartProtecting={() => openTrialModal()}
        onSignIn={openSignInModal}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with realistic floating Command Center */}
        <Hero
          onStartProtecting={() => openTrialModal()}
          onViewDemo={openDemoModal}
        />

        {/* 2. Trust Bar with monochrome fictional logos */}
        <TrustBar />

        {/* 3. Security Overview with 4 command center cards */}
        <SecurityOverview />

        {/* 4. Interactive Full-Width Posture Dashboard */}
        <SecurityDashboard />

        {/* 5. Threat Monitoring with split live threat map */}
        <ThreatMonitor />

        {/* 6. Vulnerability Scanner with interactive scan trigger */}
        <VulnerabilityScanner />

        {/* 7. Security Alerts with real-time severity filters */}
        <SecurityAlerts />

        {/* 8. Compliance Dashboard with SOC 2, ISO, GDPR, HIPAA rings */}
        <Compliance onExploreCompliance={() => openTrialModal('Compliance Enterprise')} />

        {/* 9. Security Reports preview and generation */}
        <Reports />

        {/* 10. How It Works (Connect → Detect → Protect) */}
        <HowItWorks />

        {/* 11. Integrations Grid */}
        <Integrations />

        {/* 12. Security Foundation & Zero-Trust Pillars */}
        <SecurityTrust />

        {/* 13. Testimonials */}
        <Testimonials />

        {/* 14. Transparent Enterprise Pricing */}
        <Pricing onSelectPlan={(plan) => openTrialModal(plan)} />

        {/* 15. FAQ Accordions */}
        <FAQ />

        {/* 16. Final CTA with geometric backdrop */}
        <FinalCTA
          onStartProtecting={() => openTrialModal()}
          onTalkToExpert={openExpertModal}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Universal Action Modal */}
      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        planName={modalState.planName}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;

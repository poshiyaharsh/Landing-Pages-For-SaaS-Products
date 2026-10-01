import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

import HeroSection from './sections/HeroSection.jsx';
import SocialProofSection from './sections/SocialProofSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import InteractiveShowcaseSection from './sections/InteractiveShowcaseSection.jsx';
import TemplatesSection from './sections/TemplatesSection.jsx';
import ConditionalLogicSection from './sections/ConditionalLogicSection.jsx';
import AnalyticsSection from './sections/AnalyticsSection.jsx';
import IntegrationsSection from './sections/IntegrationsSection.jsx';
import HowItWorksSection from './sections/HowItWorksSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection.jsx';
import PricingSection from './sections/PricingSection.jsx';
import CtaSection from './sections/CtaSection.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalMode, setModalMode] = useState('builder');

  const handleOpenDemo = (mode = 'builder', data = null) => {
    setModalMode(mode);
    setModalData(data);
    setModalOpen(true);
  };

  const handleSelectTemplate = (template) => {
    setModalMode('template');
    setModalData({
      title: `Use Template: ${template.title}`,
      description: template.description,
      fields: template.fields
    });
    setModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection onOpenDemo={handleOpenDemo} />
        <SocialProofSection />
        <FeaturesSection onOpenDemo={handleOpenDemo} />
        <InteractiveShowcaseSection onOpenDemo={handleOpenDemo} />
        <TemplatesSection onSelectTemplate={handleSelectTemplate} />
        <ConditionalLogicSection />
        <AnalyticsSection />
        <IntegrationsSection onOpenDemo={handleOpenDemo} />
        <HowItWorksSection onOpenDemo={handleOpenDemo} />
        <TestimonialsSection />
        <PricingSection onOpenDemo={handleOpenDemo} />
        <CtaSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Formly Preview & Submission Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={modalData}
        mode={modalMode}
      />
    </div>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

import HeroSection from './sections/HeroSection.jsx';
import SocialProofSection from './sections/SocialProofSection.jsx';
import ProblemSolutionSection from './sections/ProblemSolutionSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import ProductShowcaseSection from './sections/ProductShowcaseSection.jsx';
import HowItWorksSection from './sections/HowItWorksSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection.jsx';
import PricingSection from './sections/PricingSection.jsx';
import FaqSection from './sections/FaqSection.jsx';
import FinalCtaSection from './sections/FinalCtaSection.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('growth');

  const handleOpenCta = (tier = 'growth') => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCta={handleOpenCta} />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection onOpenCta={handleOpenCta} />
        <SocialProofSection />
        <ProblemSolutionSection />
        <FeaturesSection onOpenCta={handleOpenCta} />
        <ProductShowcaseSection onOpenCta={handleOpenCta} />
        <HowItWorksSection onOpenCta={handleOpenCta} />
        <TestimonialsSection />
        <PricingSection onOpenCta={handleOpenCta} />
        <FaqSection />
        <FinalCtaSection onOpenCta={handleOpenCta} />
      </main>

      {/* Footer */}
      <Footer onOpenCta={handleOpenCta} />

      {/* Interactive Project Initialization Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTier={selectedTier}
      />
    </div>
  );
}

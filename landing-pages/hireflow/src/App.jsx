import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import MetricsSection from './sections/MetricsSection';
import ProblemSection from './sections/ProblemSection';
import WorkflowSection from './sections/WorkflowSection';
import FeatureSection from './sections/FeatureSection';
import AIIntelligenceSection from './sections/AIIntelligenceSection';
import CandidateProfileSection from './sections/CandidateProfileSection';
import AnalyticsSection from './sections/AnalyticsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import IntegrationsSection from './sections/IntegrationsSection';
import SecuritySection from './sections/SecuritySection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import DemoModal from './components/DemoModal';
import AuthModal from './components/AuthModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoContext, setDemoContext] = useState('Product Demo');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenDemo = (context = 'Product Demo') => {
    setDemoContext(context);
    setIsDemoModalOpen(true);
  };

  const handleOpenAuth = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onOpenAuth={handleOpenAuth}
      />
      <main id="main-content">
        <HeroSection 
          onOpenDemo={handleOpenDemo}
        />
        <MetricsSection />
        <ProblemSection />
        <WorkflowSection />
        <FeatureSection />
        <AIIntelligenceSection 
          onOpenDemo={handleOpenDemo}
        />
        <CandidateProfileSection 
          onOpenDemo={handleOpenDemo}
        />
        <AnalyticsSection />
        <HowItWorksSection 
          onOpenDemo={handleOpenDemo}
        />
        <IntegrationsSection 
          onOpenDemo={handleOpenDemo}
        />
        <SecuritySection />
        <TestimonialsSection />
        <PricingSection 
          onOpenDemo={handleOpenDemo}
        />
        <FAQSection />
        <CTASection 
          onOpenDemo={handleOpenDemo}
        />
      </main>
      <Footer />

      {/* Global Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialContext={demoContext}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}

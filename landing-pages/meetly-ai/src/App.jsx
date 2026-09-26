import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ProblemSection from './sections/ProblemSection';
import FeaturesSection from './sections/FeaturesSection';
import FeatureShowcaseSection from './sections/FeatureShowcaseSection';
import WorkflowSection from './sections/WorkflowSection';
import InteractiveDemoSection from './sections/InteractiveDemoSection';
import IntegrationsSection from './sections/IntegrationsSection';
import UseCasesSection from './sections/UseCasesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import { ArrowUp } from 'lucide-react';

export const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main style={{ flex: 1 }}>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <FeaturesSection />
        <FeatureShowcaseSection />
        <WorkflowSection />
        <InteractiveDemoSection />
        <IntegrationsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 40,
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: '#0F172A',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.3)',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = '#6366F1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#0F172A';
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;

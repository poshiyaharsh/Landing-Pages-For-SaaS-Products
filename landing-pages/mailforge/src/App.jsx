import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ProblemSection from './sections/ProblemSection';
import FeatureSection from './sections/FeatureSection';
import WorkflowSection from './sections/WorkflowSection';
import EmailBuilderShowcase from './sections/EmailBuilderShowcase';
import AnalyticsShowcase from './sections/AnalyticsShowcase';
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
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Sticky Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main style={{ flex: 1 }}>
        {/* 3. Hero Section & Realistic Dashboard Preview */}
        <HeroSection />

        {/* 4. Social Proof: Partner Logos & Key Metrics */}
        <TrustSection />

        {/* 5. Problem Section & Before/After Comparison */}
        <ProblemSection />

        {/* 6. Five Core Feature Deep-Dives */}
        <FeatureSection />

        {/* 7. AI Workflow Section (6 Steps Pipeline) */}
        <WorkflowSection />

        {/* 8. Email Builder Showcase with Desktop/Mobile Switcher */}
        <EmailBuilderShowcase />

        {/* 9. Campaign Analytics Showcase with Interactive Telemetry */}
        <AnalyticsShowcase />

        {/* 10. Customer Testimonials */}
        <TestimonialsSection />

        {/* 11. SaaS Pricing Plans */}
        <PricingSection />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. High-Conversion Final CTA */}
        <CTASection />
      </main>

      {/* 14. Global Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
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
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: '#0F172A',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.35)',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = '#2563EB';
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

import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import DashboardPreviewSection from './sections/DashboardPreviewSection';
import CoreFeaturesSection from './sections/CoreFeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import RevenueAnalyticsSection from './sections/RevenueAnalyticsSection';
import BenefitsSection from './sections/BenefitsSection';
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
      {/* 1. Announcement / Top Bar */}
      <AnnouncementBar />

      {/* 2. Navbar */}
      <Navbar />

      {/* Page Content Flow */}
      <main style={{ flex: 1 }}>
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Trust / Social Proof */}
        <TrustSection />

        {/* 5. Product Dashboard Preview */}
        <DashboardPreviewSection />

        {/* 6. Core Features Section (Invoice Generation, Expense Tracking, Payment Tracking, Revenue Analytics, Client Management) */}
        <CoreFeaturesSection />

        {/* 7. How It Works (01 Create, 02 Invoice, 03 Track) */}
        <HowItWorksSection />

        {/* 8. Financial / Revenue Analytics Section */}
        <RevenueAnalyticsSection />

        {/* 9. Benefits / Why InvoiceX */}
        <BenefitsSection />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. Pricing */}
        <PricingSection />

        {/* 12. FAQ */}
        <FAQSection />

        {/* 13. Final CTA */}
        <CTASection />
      </main>

      {/* 14. Footer */}
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
            backgroundColor: '#0B0F19',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(11, 15, 25, 0.3)',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = '#4F46E5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#0B0F19';
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;

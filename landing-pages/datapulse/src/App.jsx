import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ProblemSection from './sections/ProblemSection';
import FeaturesSection from './sections/FeaturesSection';
import DashboardSection from './sections/DashboardSection';
import AIInsightsSection from './sections/AIInsightsSection';
import WorkflowSection from './sections/WorkflowSection';
import ReportsSection from './sections/ReportsSection';
import IntegrationsSection from './sections/IntegrationsSection';
import SecuritySection from './sections/SecuritySection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <FeaturesSection />
        <DashboardSection />
        <AIInsightsSection />
        <WorkflowSection />
        <ReportsSection />
        <IntegrationsSection />
        <SecuritySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

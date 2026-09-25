import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { SocialProofSection } from '../sections/SocialProofSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { InteractiveDemoSection } from '../sections/InteractiveDemoSection';
import { WorkflowSection } from '../sections/WorkflowSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { PricingSection } from '../sections/PricingSection';
import { FAQSection } from '../sections/FAQSection';
import { CTASection } from '../sections/CTASection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <InteractiveDemoSection />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Home;

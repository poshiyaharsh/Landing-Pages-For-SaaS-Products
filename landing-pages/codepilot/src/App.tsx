import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { CodeEditorShowcase } from './components/CodeEditorShowcase';
import { CodeReview } from './components/CodeReview';
import { Workflow } from './components/Workflow';
import { CommandPalette } from './components/CommandPalette';
import { Integrations } from './components/Integrations';
import { TechStack } from './components/TechStack';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { InteractiveModals } from './components/InteractiveModals';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    type: 'start' | 'signin' | 'docs' | 'team' | null;
    planName?: string;
  }>({
    type: null,
  });

  const handleStartBuilding = () => {
    setModalState({ type: 'start' });
  };

  const handleSignIn = () => {
    setModalState({ type: 'signin' });
  };

  const handleExploreDocs = () => {
    setModalState({ type: 'docs' });
  };

  const handleSelectPlan = (planId: string) => {
    if (planId === 'free') {
      setModalState({ type: 'start' });
    } else if (planId === 'pro') {
      setModalState({ type: 'start', planName: 'Pro' });
    } else {
      setModalState({ type: 'team', planName: 'Team' });
    }
  };

  const handleCloseModal = () => {
    setModalState({ type: null });
  };

  return (
    <div className="min-h-screen bg-codepilot-bg text-codepilot-text font-sans antialiased selection:bg-brand-green/20 selection:text-brand-green relative overflow-x-hidden">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onStartBuilding={handleStartBuilding}
        onSignIn={handleSignIn}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* 2. Hero Section with realistic IDE workspace */}
      <Hero
        onStartBuilding={handleStartBuilding}
        onExploreDocs={handleExploreDocs}
      />

      {/* 3. Trust Bar: Monochrome logos & claims */}
      <TrustBar />

      {/* 4. Problem / Solution: The 6 friction points & animated transformation */}
      <ProblemSolution />

      {/* 5. 6 Feature Modules */}
      <FeatureGrid />

      {/* 6. Full-Width Immersive Code Editor Showcase (401 fix flow) */}
      <CodeEditorShowcase />

      {/* 7. AI Code Review Section: PR #248 */}
      <CodeReview />

      {/* 8. 4-Step Shipping Workflow */}
      <Workflow />

      {/* 9. Interactive Command Palette Section */}
      <CommandPalette />

      {/* 10. Ecosystem Integrations (12 cards) */}
      <Integrations />

      {/* 11. Supported Polyglot Technologies & Frameworks */}
      <TechStack />

      {/* 12. Security & Zero-Retention Technical Pipeline */}
      <Security />

      {/* 13. Developer Testimonials */}
      <Testimonials />

      {/* 14. Developer-friendly Pricing */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* 15. FAQ Accordion */}
      <FAQ />

      {/* 16. Final Dark Dramatic CTA */}
      <FinalCTA
        onStartBuilding={handleStartBuilding}
        onReadDocs={handleExploreDocs}
      />

      {/* 17. Engineering Footer */}
      <Footer />

      {/* Global ⌘K Command Palette Modal */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectAction={(action) => {
          if (action === 'toggle-open') setCommandPaletteOpen(!commandPaletteOpen);
        }}
      />

      {/* Global Action Modals */}
      <InteractiveModals
        modalType={modalState.type}
        onClose={handleCloseModal}
        planName={modalState.planName}
      />
    </div>
  );
};

export default App;

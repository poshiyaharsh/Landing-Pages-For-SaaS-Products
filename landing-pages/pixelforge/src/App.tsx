import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { CreativeShowcase } from './components/CreativeShowcase';
import { Workflow } from './components/Workflow';
import { CanvasShowcase } from './components/CanvasShowcase';
import { AIAssistant } from './components/AIAssistant';
import { BeforeAfter } from './components/BeforeAfter';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ShowcaseProject } from './data/pixelforgeData';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'create' | 'explore' | 'signin' | 'plan' | 'project' | null;
    planName?: string;
    project?: ShowcaseProject | null;
  }>({
    isOpen: false,
    type: null
  });

  const openCreateModal = (planName?: string) => {
    setModalState({ isOpen: true, type: 'create', planName });
  };

  const openExploreModal = () => {
    setModalState({ isOpen: true, type: 'explore' });
  };

  const openSignInModal = () => {
    setModalState({ isOpen: true, type: 'signin' });
  };

  const openPlanModal = (planName: string) => {
    setModalState({ isOpen: true, type: 'plan', planName });
  };

  const openProjectModal = (project: ShowcaseProject) => {
    setModalState({ isOpen: true, type: 'project', project });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, planName: undefined, project: null });
  };

  return (
    <div className="min-h-screen bg-studio-950 text-studio-text selection:bg-neon-violet selection:text-white font-sans antialiased relative">
      {/* 1. Minimal Sticky Navbar */}
      <Navbar
        onStartCreating={() => openCreateModal()}
        onSignIn={openSignInModal}
      />

      {/* Main Content Experience */}
      <main>
        {/* 2. Editorial Hero with Floating Creative Workspace */}
        <Hero
          onStartCreating={() => openCreateModal()}
          onExplore={openExploreModal}
        />

        {/* 3. Understated Trust / Social Proof Logo Strip */}
        <LogoCloud />

        {/* 4. Problem → Solution Editorial Split */}
        <ProblemSolution />

        {/* 5. 5 Distinct Feature Cards in Bento Grid */}
        <FeatureGrid />

        {/* 6. Magazine-Style Editorial Showcase */}
        <CreativeShowcase onSelectProject={openProjectModal} />

        {/* 7. 4-Step Horizontal Workflow */}
        <Workflow />

        {/* 8. Immersive Creative Canvas Showcase */}
        <CanvasShowcase />

        {/* 9. AI Creative Copilot Assistant */}
        <AIAssistant />

        {/* 10. Interactive Before / After Slider */}
        <BeforeAfter />

        {/* 11. 8 Creative Team Use Cases */}
        <UseCases />

        {/* 12. Editorial Testimonials */}
        <Testimonials />

        {/* 13. Transparent Pricing Plans */}
        <Pricing onSelectPlan={(plan) => openPlanModal(plan)} />

        {/* 14. Smooth Accordion FAQs */}
        <FAQ />

        {/* 15. Dramatic Final CTA */}
        <FinalCTA
          onStartCreating={() => openCreateModal()}
          onExploreWorkspace={openExploreModal}
        />
      </main>

      {/* 16. Multi-Column Footer */}
      <Footer />

      {/* Universal Interactive Modal */}
      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        planName={modalState.planName}
        project={modalState.project}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;

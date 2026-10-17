import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofStrip } from './components/SocialProofStrip';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveWorkspace } from './components/InteractiveWorkspace';
import { WorkflowSection } from './components/WorkflowSection';
import { UseCasesSection } from './components/UseCasesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Toast, ToastMessage } from './components/Toast';

export const App: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleStartFree = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  const handleExploreWorkspace = () => {
    const el = document.getElementById('workspace-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#0F172A] flex flex-col font-sans">
      <Toast toasts={toasts} onDismiss={dismissToast} />

      <Navbar
        onOpenSignup={handleStartFree}
        onOpenLogin={handleLogin}
      />

      <HeroSection
        onStartFree={handleStartFree}
        onExploreWorkspace={handleExploreWorkspace}
      />

      <SocialProofStrip />

      <FeaturesSection
        onExploreFeature={() => handleExploreWorkspace()}
      />

      <InteractiveWorkspace
        onTaskMoveToast={(title, col) => addToast('Task Status Updated', `"${title}" moved to ${col}.`, 'success')}
      />

      <WorkflowSection />

      <UseCasesSection />

      <PricingSection
        onSelectPlan={(planId) => {
          if (planId === 'business') {
            handleLogin();
          } else {
            handleStartFree();
          }
        }}
      />

      <FAQSection />

      <FinalCTA
        onStartFree={handleStartFree}
        onExploreWorkspace={handleExploreWorkspace}
      />

      <Footer
        onOpenSignup={handleStartFree}
        onOpenLogin={handleLogin}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onSuccessToast={(msg) => addToast('Workspace Initialized', msg, 'success')}
      />
    </div>
  );
};

export default App;

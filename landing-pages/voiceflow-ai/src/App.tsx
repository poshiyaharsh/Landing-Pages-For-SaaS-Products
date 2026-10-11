import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CapabilityStrip } from './components/CapabilityStrip.tsx';
import { ProblemSolution } from './components/ProblemSolution.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { SpeechToTextDemo } from './components/SpeechToTextDemo.tsx';
import { ConversationDashboard } from './components/ConversationDashboard.tsx';
import { VoiceWorkspace } from './components/VoiceWorkspace.tsx';
import { AgentBuilder } from './components/AgentBuilder.tsx';
import { TextToSpeechStudio } from './components/TextToSpeechStudio.tsx';
import { DeveloperAPI } from './components/DeveloperAPI.tsx';
import { Integrations } from './components/Integrations.tsx';
import { UseCases } from './components/UseCases.tsx';
import { SecuritySection } from './components/SecuritySection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { StartBuildingModal } from './components/StartBuildingModal.tsx';
import { Toast, ToastMessage } from './components/Toast.tsx';
import { X, ShieldAlert, FileText } from 'lucide-react';

export const App: React.FC = () => {
  // Modal state
  const [isBuildingModalOpen, setIsBuildingModalOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Toast state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStartBuilding = () => {
    setIsBuildingModalOpen(true);
  };

  const handleSignIn = () => {
    addToast('Developer Sandbox Active', 'Redirecting to interactive project workspace session...', 'info');
    setIsBuildingModalOpen(true);
  };

  const handleSelectPlan = (planId: string) => {
    addToast('Tier Configured', `Selected ${planId.toUpperCase()} workspace tier for initialization.`, 'info');
    setIsBuildingModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-primary font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Toast Notification Deck */}
      <Toast toasts={toasts} onDismiss={removeToast} />

      {/* Navigation */}
      <Navbar onStartBuilding={handleStartBuilding} onSignIn={handleSignIn} />

      {/* Hero Section with Luminous Voice Orb & Simulated Voice Stream */}
      <main id="main-content">
        <HeroSection
          onExplorePlatform={handleStartBuilding}
          onSeeHowItWorks={() => handleScrollToSection('pipeline')}
          onToast={addToast}
        />

        {/* 6-Pillar Credibility Strip */}
        <CapabilityStrip />

        {/* Problem & Unified Pipeline Solution */}
        <ProblemSolution />

        {/* 6 Core Capabilities Modules */}
        <FeaturesSection onToast={(title, msg) => addToast(title, msg, 'info')} />

        {/* Interactive Speech-to-Text Demo (Scrubber, Diarization, Download TXT) */}
        <SpeechToTextDemo onToast={addToast} />

        {/* Conversational Intelligence Dashboard (Sentiment, Topics, Summary Tabs) */}
        <ConversationDashboard />

        {/* Voice AI Command Center & Workspace Mockup */}
        <VoiceWorkspace onToast={(title, msg) => addToast(title, msg, 'info')} />

        {/* Interactive Voice Agent Flow Builder */}
        <AgentBuilder onToast={(title, msg) => addToast(title, msg, 'info')} />

        {/* Text-to-Speech Studio (Web Speech Synthesis + Presets) */}
        <TextToSpeechStudio onToast={addToast} />

        {/* Developer API & Multi-Language Code Runner */}
        <DeveloperAPI onToast={(title, msg) => addToast(title, msg, 'info')} />

        {/* Integrations Grid */}
        <Integrations onToast={(title, msg) => addToast(title, msg, 'info')} />

        {/* Use Cases for Enterprise Conversational Intelligence */}
        <UseCases onStartBuilding={handleStartBuilding} />

        {/* Security & Transparent Data Handling */}
        <SecuritySection />

        {/* Editorial Testimonials */}
        <Testimonials />

        {/* Transparent Pricing with Monthly / Annual Switch */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Dramatic Final CTA with Central Voice Orb */}
        <FinalCTA
          onExplore={handleStartBuilding}
          onDocs={() => handleScrollToSection('api')}
        />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
      />

      {/* Project Provisioning Modal */}
      <StartBuildingModal
        isOpen={isBuildingModalOpen}
        onClose={() => setIsBuildingModalOpen(false)}
        onInitialized={(projectName, _apiKey) => {
          addToast('Environment Provisioned', `Workspace "${projectName}" initialized with sub-120ms latency.`, 'success');
        }}
      />

      {/* Legal & Privacy Transparency Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0E1320] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(82,232,255,0.15)] max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 text-secondary hover:text-white p-1 rounded-lg bg-[#131A28] border border-border-subtle"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' ? (
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Privacy Framework & Data Scope</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  VoiceFlow AI Privacy & Processing Architecture
                </h3>
                <div className="space-y-4 text-secondary text-sm leading-relaxed">
                  <p>
                    VoiceFlow AI processes voice communications with a strict principle of least privilege. In this demonstration environment:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-white">Microphone Consent:</strong> Live microphone capture is strictly opt-in and handled via local browser AudioContext without external audio data upload.</li>
                    <li><strong className="text-white">Zero Biometric Storage:</strong> No permanent voiceprint biometric templates or facial features are ever derived or retained.</li>
                    <li><strong className="text-white">Ephemeral Buffering:</strong> Audio buffers live exclusively within browser heap RAM during simulation and are instantly wiped when stopped or refreshed.</li>
                    <li><strong className="text-white">Enterprise Deployments:</strong> Production pipelines deployed within client VPC infrastructure run isolated on dedicated self-hosted nodes.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs uppercase mb-2">
                  <FileText className="w-4 h-4" />
                  <span>Developer Terms of Evaluation</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Prototype Evaluation Terms
                </h3>
                <div className="space-y-4 text-secondary text-sm leading-relaxed">
                  <p>
                    These terms govern the use of the VoiceFlow AI conversational intelligence interactive interface:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-white">Prototype Status:</strong> Audio samples, telemetry charts, and analytics dashboards represent illustrative demonstration data.</li>
                    <li><strong className="text-white">Local Synthesis:</strong> Text-to-speech previews use client-side Web SpeechSynthesis API when supported by the client browser.</li>
                    <li><strong className="text-white">API Sandboxing:</strong> Code snippets show functional syntax structures for target implementations.</li>
                    <li><strong className="text-white">Permitted Use:</strong> You may test, evaluate, copy generated transcripts, and experiment with workflow node builders freely.</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-border-subtle flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2.5 rounded-xl bg-[#192235] hover:bg-[#222E48] text-white text-xs font-mono uppercase tracking-wider transition-colors border border-border-subtle"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandTrustStrip } from './components/BrandTrustStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureShowcase } from './components/FeatureShowcase';
import { WorkspacePreview } from './components/WorkspacePreview';
import { BrandIdentityGallery } from './components/BrandIdentityGallery';
import { AssetLibrary } from './components/AssetLibrary';
import { GuidelinesShowcase } from './components/GuidelinesShowcase';
import { WorkflowSection } from './components/WorkflowSection';
import { TemplateGallery } from './components/TemplateGallery';
import { CollaborationSection } from './components/CollaborationSection';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { Toast, ToastMessage } from './components/Toast';
import { AssetModal } from './components/AssetModal';
import { BrandKitModal } from './components/BrandKitModal';
import { TemplateModal } from './components/TemplateModal';
import { StartWorkspaceModal } from './components/StartWorkspaceModal';

import { BrandAsset, BrandKitIdentity, TemplateItem, PricingPlan } from './types';
import confetti from 'canvas-confetti';

export function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<BrandKitIdentity | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [isStartWorkspaceOpen, setIsStartWorkspaceOpen] = useState(false);

  // Toast Helper
  const addToast = (title: string, message?: string, type: 'success' | 'info' = 'success') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Copy to clipboard helper
  const copyToClipboard = async (text: string, label: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      addToast(`Copied ${label}`, text, 'success');
    } catch (err) {
      addToast(`Copied ${label}`, text, 'success');
    }
  };

  // Color hex copy handler
  const handleCopyHex = (hex: string) => {
    copyToClipboard(hex, 'Color HEX to Clipboard');
  };

  // Asset download simulation
  const handleDownloadAsset = (asset: BrandAsset) => {
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#E8DFD2', '#191919', '#777B65']
      });
    } catch (err) {
      // fallback
    }
    addToast(
      `Download Initialized: ${asset.format}`,
      `${asset.name} (${asset.size}) packaged and exported.`
    );
  };

  // Asset copy link handler
  const handleCopyAssetLink = (asset: BrandAsset) => {
    const shareUrl = `https://brandly.app/assets/${asset.id}?brand=maison-form`;
    copyToClipboard(shareUrl, 'Verified Asset Link');
  };

  // Use Template handler
  const handleUseTemplate = (template: TemplateItem) => {
    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.75 },
        colors: ['#E8DFD2', '#191919', '#B8ADA0']
      });
    } catch (err) {
      // fallback
    }
    addToast(
      'Template Cloned to Workspace',
      `"${template.title}" is now ready in your active brand canvas.`
    );
    setSelectedTemplate(null);
  };

  // Plan selection handler
  const handleSelectPlan = (plan: PricingPlan) => {
    addToast(
      `Selected ${plan.name} Plan`,
      `Initializing 14-day studio trial for ${plan.name} workspace.`
    );
    setIsStartWorkspaceOpen(true);
  };

  // Workspace creation completion
  const handleWorkspaceCreated = (brandName: string) => {
    addToast(
      'Workspace Established',
      `Welcome to Brandly. "${brandName}" is now initialized with editorial defaults.`
    );
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-ink selection:bg-brand-champagne selection:text-brand-ink font-sans relative">
      {/* Toast Overlay */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Navigation */}
      <Navbar
        onStartWorkspace={() => setIsStartWorkspaceOpen(true)}
        onSignIn={() => addToast('Authentication Portal', 'Single Sign-On (SSO) & Studio Sign-in demo active.', 'info')}
      />

      {/* Main Page Flow (All 20 Required Sections) */}
      <main>
        {/* Section 4: Hero Section */}
        <HeroSection
          onStartWorkspace={() => setIsStartWorkspaceOpen(true)}
          onExplorePlatform={() => {
            const el = document.getElementById('platform');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onCopyHex={handleCopyHex}
        />

        {/* Section 5: Brand Trust Strip */}
        <BrandTrustStrip />

        {/* Section 6: Problem and Solution */}
        <ProblemSolution />

        {/* Section 7: Feature Showcase (6 distinct modules) */}
        <FeatureShowcase
          onCopyHex={handleCopyHex}
          onExploreAsset={(name) => addToast('Asset Selected', name, 'info')}
        />

        {/* Section 8: Interactive Brand Workspace Preview */}
        <WorkspacePreview
          onCopyHex={handleCopyHex}
          onOpenAssetModal={(asset) => setSelectedAsset(asset)}
        />

        {/* Section 9: Brand Identity Gallery (6 fictional brands) */}
        <BrandIdentityGallery
          onViewBrandKit={(brand) => setSelectedBrand(brand)}
        />

        {/* Section 10: Brand Asset Search Experience */}
        <AssetLibrary
          onOpenAssetModal={(asset) => setSelectedAsset(asset)}
          onCopyLink={handleCopyAssetLink}
          onToast={(title, msg) => addToast(title, msg, 'info')}
        />

        {/* Section 11: Brand Guidelines Experience */}
        <GuidelinesShowcase
          onCopyHex={handleCopyHex}
        />

        {/* Section 12: How It Works */}
        <WorkflowSection />

        {/* Section 13: Templates Showcase */}
        <TemplateGallery
          onOpenTemplateModal={(tpl) => setSelectedTemplate(tpl)}
          onUseTemplate={handleUseTemplate}
        />

        {/* Section 14: Collaboration and Permissions */}
        <CollaborationSection
          onToast={(title, msg) => addToast(title, msg, 'info')}
        />

        {/* Section 15: Use Cases */}
        <UseCases
          onStartWorkspace={() => setIsStartWorkspaceOpen(true)}
        />

        {/* Section 16: Testimonials */}
        <Testimonials />

        {/* Section 17: Pricing Section */}
        <Pricing
          onSelectPlan={handleSelectPlan}
        />

        {/* Section 18: FAQ Accordion */}
        <FAQ />

        {/* Section 19: Final CTA */}
        <FinalCTA
          onStartWorkspace={() => setIsStartWorkspaceOpen(true)}
          onExplorePlatform={() => {
            const el = document.getElementById('platform');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onCopyHex={handleCopyHex}
        />
      </main>

      {/* Section 20: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AssetModal
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
        onToggleFavorite={(id) => {
          if (selectedAsset) {
            setSelectedAsset({ ...selectedAsset, isFavorite: !selectedAsset.isFavorite });
          }
        }}
        onCopyLink={handleCopyAssetLink}
        onDownload={handleDownloadAsset}
      />

      <BrandKitModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onCopyHex={handleCopyHex}
        onOpenWorkspace={(name) => {
          addToast('Brand Kit Loaded in Workspace', name, 'success');
          const el = document.getElementById('platform');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <TemplateModal
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        onUseTemplate={handleUseTemplate}
      />

      <StartWorkspaceModal
        isOpen={isStartWorkspaceOpen}
        onClose={() => setIsStartWorkspaceOpen(false)}
        onWorkspaceCreated={handleWorkspaceCreated}
      />
    </div>
  );
}

export default App;

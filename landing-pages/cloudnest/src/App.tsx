import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { CoreFeatures } from './components/CoreFeatures';
import { CloudConsole } from './components/CloudConsole';
import { DeploymentWorkflow } from './components/DeploymentWorkflow';
import { InfrastructureTopology } from './components/InfrastructureTopology';
import { MonitoringDashboard } from './components/MonitoringDashboard';
import { LogExplorer } from './components/LogExplorer';
import { DatabaseStorage } from './components/DatabaseStorage';
import { CostDashboard } from './components/CostDashboard';
import { DeveloperExperience } from './components/DeveloperExperience';
import { Integrations } from './components/Integrations';
import { SecuritySection } from './components/SecuritySection';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DeploymentLogsModal } from './components/DeploymentLogsModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { ServiceItem, DeploymentItem, ToastNotification } from './types';
import { SAMPLE_SERVICES, SAMPLE_DEPLOYMENTS } from './data/sampleData';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentItem | null>(null);
  const [isDeploymentModalOpen, setIsDeploymentModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (
    title: string,
    description?: string,
    type: 'success' | 'info' | 'warning' | 'blue' = 'info'
  ) => {
    const newToast: ToastNotification = {
      id: `toast-${Date.now()}-${Math.random()}`,
      title,
      description,
      type,
    };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleInspectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleInspectDeployment = (dep: DeploymentItem) => {
    setSelectedDeployment(dep);
    setIsDeploymentModalOpen(true);
  };

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleExploreConsole = () => {
    const el = document.getElementById('console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nest-bg text-nest-text font-sans antialiased selection:bg-nest-blue-soft selection:text-nest-blue">
      {/* Sticky Header */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onExploreConsole={handleExploreConsole}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAuth={handleOpenAuth}
          onExploreConsole={handleExploreConsole}
          onSelectService={handleInspectService}
          sampleService={SAMPLE_SERVICES[0]}
        />

        {/* 2. Capability Strip */}
        <CapabilityStrip />

        {/* 3. Problem and Solution */}
        <ProblemSolution />

        {/* 4. Core Features */}
        <CoreFeatures
          onInspectDeployment={handleInspectDeployment}
          sampleDeployment={SAMPLE_DEPLOYMENTS[0]}
        />

        {/* 5. Interactive Cloud Console (Product Centerpiece) */}
        <CloudConsole
          onSelectService={handleInspectService}
          onInspectDeployment={handleInspectDeployment}
          onToast={addToast}
        />

        {/* 6. Deployment Workflow */}
        <DeploymentWorkflow
          onInspectLogs={handleInspectDeployment}
          onToast={addToast}
          sampleDeployment={SAMPLE_DEPLOYMENTS[0]}
        />

        {/* 7. Infrastructure Topology Visualization */}
        <InfrastructureTopology
          onSelectService={handleInspectService}
        />

        {/* 8. Monitoring and Observability */}
        <MonitoringDashboard />

        {/* 9. Log Explorer */}
        <LogExplorer onToast={addToast} />

        {/* 10. Database and Storage */}
        <DatabaseStorage onToast={addToast} />

        {/* 11. Cost Visibility */}
        <CostDashboard onToast={addToast} />

        {/* 12. Developer Experience */}
        <DeveloperExperience onToast={addToast} />

        {/* 13. Integrations */}
        <Integrations onToast={addToast} />

        {/* 14. Security and Reliability */}
        <SecuritySection />

        {/* 15. Use Cases */}
        <UseCases />

        {/* 16. Testimonials */}
        <Testimonials />

        {/* 17. Pricing */}
        <Pricing
          onSelectPlan={(plan) => {
            addToast(`Selected ${plan} Plan`, 'Welcome to the CloudNest prototype workspace.', 'blue');
            handleOpenAuth('signup');
          }}
        />

        {/* 18. FAQ */}
        <FAQ />

        {/* 19. Final CTA */}
        <FinalCTA
          onOpenAuth={handleOpenAuth}
          onExploreConsole={handleExploreConsole}
        />
      </main>

      {/* Footer */}
      <Footer onExploreConsole={handleExploreConsole} />

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onOpenLogs={(svcName) => {
          const el = document.getElementById('logs');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          addToast('Logs Stream Active', `Filtering logs stream for service: ${svcName}`, 'info');
        }}
        onToast={addToast}
      />

      <DeploymentLogsModal
        deployment={selectedDeployment}
        isOpen={isDeploymentModalOpen}
        onClose={() => setIsDeploymentModalOpen(false)}
        onToast={addToast}
      />

      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(email) => {
          addToast('Console Ready', `Signed in as ${email}. Demo cluster unlocked.`, 'success');
        }}
      />

      {/* Non-intrusive Toasts */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default App;

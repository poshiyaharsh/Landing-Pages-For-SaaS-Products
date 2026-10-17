import React, { useState } from 'react';
import { 
  SAMPLE_FRAMEWORKS, 
  INITIAL_CONTROLS, 
  INITIAL_RISKS, 
  INITIAL_EVIDENCE, 
  INITIAL_AUDIT_EVENTS, 
  INITIAL_TASKS, 
  SAMPLE_TEAM_MEMBERS 
} from './data/sampleData';
import { 
  ControlItem, 
  RiskItem, 
  EvidenceItem, 
  AuditEvent, 
  RemediationTask, 
  ControlStatus, 
  TaskColumn 
} from './types';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { CoreFeatures } from './components/CoreFeatures';
import { ComplianceDashboard } from './components/ComplianceDashboard';
import { FrameworkManager } from './components/FrameworkManager';
import { RiskRegister } from './components/RiskRegister';
import { EvidenceLibrary } from './components/EvidenceLibrary';
import { AuditTrail } from './components/AuditTrail';
import { RemediationBoard } from './components/RemediationBoard';
import { ReportingDashboard } from './components/ReportingDashboard';
import { TeamManagement } from './components/TeamManagement';
import { AutomationShowcase } from './components/AutomationShowcase';
import { SecuritySection } from './components/SecuritySection';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals & Feedback
import { Toast, ToastMessage } from './components/Toast';
import { AuthModal } from './components/AuthModal';
import { ControlDetailModal } from './components/ControlDetailModal';
import { EvidencePreviewModal } from './components/EvidencePreviewModal';
import { RiskDetailModal } from './components/RiskDetailModal';
import { TaskDetailModal } from './components/TaskDetailModal';

export const App: React.FC = () => {
  // Master state
  const [controls, setControls] = useState<ControlItem[]>(INITIAL_CONTROLS);
  const [risks, setRisks] = useState<RiskItem[]>(INITIAL_RISKS);
  const [evidence, setEvidence] = useState<EvidenceItem[]>(INITIAL_EVIDENCE);
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>(INITIAL_AUDIT_EVENTS);
  const [tasks, setTasks] = useState<RemediationTask[]>(INITIAL_TASKS);

  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'demo' | 'signin'>('demo');
  const [selectedControl, setSelectedControl] = useState<ControlItem | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null);
  const [selectedTask, setSelectedTask] = useState<RemediationTask | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Handlers for interactive actions
  const handleOpenDemo = () => {
    setAuthModalMode('demo');
    setIsAuthModalOpen(true);
  };

  const handleOpenSignIn = () => {
    setAuthModalMode('signin');
    setIsAuthModalOpen(true);
  };

  const handleExplorePlatform = () => {
    const el = document.getElementById('dashboard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update control status & owner
  const handleUpdateControl = (controlId: string, newStatus: ControlStatus, newOwner?: string) => {
    setControls(prev => prev.map(c => {
      if (c.id === controlId) {
        return {
          ...c,
          status: newStatus,
          owner: newOwner || c.owner
        };
      }
      return c;
    }));

    // Add audit event log
    const newEvent: AuditEvent = {
      id: `EVT-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString(),
      timeFormatted: 'Just now',
      user: 'Sarah Jenkins',
      userEmail: 's.jenkins@auditly-demo.internal',
      role: 'Administrator',
      action: 'Control status updated',
      actionType: 'status_update',
      resource: `Control ${controlId}`,
      details: `Status set to "${newStatus}"${newOwner ? ` with owner ${newOwner}` : ''}.`
    };

    setAuditEvents(prev => [newEvent, ...prev]);
    addToast('Control Updated', `Control ${controlId} is now marked as "${newStatus}".`, 'success');
  };

  // Update risk details
  const handleUpdateRisk = (riskId: string, updatedFields: Partial<RiskItem>) => {
    setRisks(prev => prev.map(r => {
      if (r.id === riskId) {
        return { ...r, ...updatedFields };
      }
      return r;
    }));

    const newEvent: AuditEvent = {
      id: `EVT-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString(),
      timeFormatted: 'Just now',
      user: 'Elena Rostova',
      userEmail: 'e.rostova@auditly-demo.internal',
      role: 'Control Owner',
      action: 'Risk assessment updated',
      actionType: 'status_update',
      resource: `Risk ${riskId}`,
      details: `Parameters updated in active risk registry.`
    };

    setAuditEvents(prev => [newEvent, ...prev]);
    addToast('Risk Updated', `Risk ${riskId} scoring parameters refreshed.`, 'info');
  };

  // Move remediation task
  const handleMoveTaskStatus = (taskId: string, targetStatus: TaskColumn) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return { ...t, status: targetStatus };
      }
      return t;
    }));

    const statusNames: Record<TaskColumn, string> = {
      'todo': 'To Do',
      'in_progress': 'In Progress',
      'completed': 'Completed'
    };

    addToast('Task Moved', `Task ${taskId} moved to ${statusNames[targetStatus]}.`, 'success');
  };

  // Update task details from modal
  const handleUpdateTask = (taskId: string, updatedFields: Partial<RemediationTask>) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return { ...t, ...updatedFields };
      }
      return t;
    }));
    addToast('Task Updated', `Task ${taskId} details updated successfully.`, 'success');
  };

  // Copy Event ID
  const handleCopyEventId = (eventId: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(eventId);
    }
    addToast('Event ID Copied', `Copied ${eventId} to clipboard for audit verification.`, 'info');
  };

  // CSV Export feature
  const handleExportCSV = () => {
    const headers = ['Control ID', 'Title', 'Category', 'Framework', 'Owner', 'Status', 'Linked Evidence', 'Next Review'];
    const rows = controls.map(c => [
      c.id,
      `"${c.title.replace(/"/g, '""')}"`,
      c.category,
      c.framework,
      `"${c.owner}"`,
      c.status,
      c.linkedEvidence.length,
      c.nextReview
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Auditly_Control_Compliance_Matrix_Q3.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('CSV Exported', 'Auditly_Control_Compliance_Matrix_Q3.csv has been downloaded.', 'success');
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#142033] flex flex-col">
      {/* Toast notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Navigation */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenSignIn={handleOpenSignIn}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenDemo={handleOpenDemo}
        onExplorePlatform={handleExplorePlatform}
        onOpenControlDetail={(id) => {
          const c = controls.find(item => item.id === id);
          if (c) setSelectedControl(c);
        }}
      />

      {/* Capability Strip */}
      <CapabilityStrip
        onSelectCapability={(title) => {
          if (title.includes('Risk')) handleNavigateToSection('risk');
          else if (title.includes('Evidence')) handleNavigateToSection('resources');
          else if (title.includes('Audit')) handleNavigateToSection('audit-trail');
          else if (title.includes('Remediation')) handleNavigateToSection('remediation');
          else if (title.includes('Reporting')) handleNavigateToSection('reporting');
          else handleNavigateToSection('frameworks');
        }}
      />

      {/* Problem & Solution (Scattered Spreadsheets vs Auditly) */}
      <ProblemSolution />

      {/* Core Features Overview */}
      <CoreFeatures
        onNavigateToModule={(moduleId) => handleNavigateToSection(moduleId)}
      />

      {/* Interactive Centerpiece Compliance Dashboard */}
      <ComplianceDashboard
        frameworks={SAMPLE_FRAMEWORKS}
        controls={controls}
        risks={risks}
        evidence={evidence}
        auditEvents={auditEvents}
        tasks={tasks}
        onOpenControl={(c) => setSelectedControl(c)}
        onOpenRisk={(r) => setSelectedRisk(r)}
        onOpenEvidence={(ev) => setSelectedEvidence(ev)}
        onOpenTask={(t) => setSelectedTask(t)}
        onExportReport={handleExportCSV}
      />

      {/* Framework and Control Management */}
      <FrameworkManager
        controls={controls}
        onOpenControlModal={(c) => setSelectedControl(c)}
        onOpenEvidenceModal={(evId) => {
          const ev = evidence.find(e => e.id === evId);
          if (ev) setSelectedEvidence(ev);
        }}
      />

      {/* Risk Register and 5x5 Heatmap */}
      <RiskRegister
        risks={risks}
        onOpenRiskModal={(r) => setSelectedRisk(r)}
      />

      {/* Evidence Library */}
      <EvidenceLibrary
        evidence={evidence}
        onOpenEvidenceModal={(ev) => setSelectedEvidence(ev)}
        onUploadToast={(msg) => addToast('Evidence Uploaded', msg, 'success')}
      />

      {/* Audit Trail & Activity Log */}
      <AuditTrail
        events={auditEvents}
        onCopyEventId={handleCopyEventId}
      />

      {/* Remediation & Task Management */}
      <RemediationBoard
        tasks={tasks}
        onOpenTaskModal={(t) => setSelectedTask(t)}
        onMoveTaskStatus={handleMoveTaskStatus}
      />

      {/* Reporting Dashboard */}
      <ReportingDashboard
        frameworks={SAMPLE_FRAMEWORKS}
        controls={controls}
        risks={risks}
        tasks={tasks}
        onExportCSV={handleExportCSV}
        onPrintReport={handlePrintReport}
      />

      {/* Enterprise Access & Team Management */}
      <TeamManagement
        teamMembers={SAMPLE_TEAM_MEMBERS}
        onRoleSwitchToast={(name, role) => addToast('Role Updated', `${name} reassigned to ${role} role.`, 'info')}
      />

      {/* Automation & Intelligent Assistance */}
      <AutomationShowcase
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Security Architecture & Transparency */}
      <SecuritySection />

      {/* Use Cases */}
      <UseCases
        onOpenDemo={handleOpenDemo}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing
        onSelectPlan={(planId) => {
          if (planId === 'enterprise') {
            handleOpenDemo();
          } else {
            handleOpenSignIn();
          }
        }}
      />

      {/* FAQ Section */}
      <FAQ />

      {/* Final Call to Action */}
      <FinalCTA
        onOpenDemo={handleOpenDemo}
        onExplorePlatform={handleExplorePlatform}
      />

      {/* Footer */}
      <Footer
        onOpenDemo={handleOpenDemo}
        onOpenSignIn={handleOpenSignIn}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
        onSuccessToast={(msg) => addToast('Request Received', msg, 'success')}
      />

      <ControlDetailModal
        control={selectedControl}
        isOpen={!!selectedControl}
        onClose={() => setSelectedControl(null)}
        onUpdateStatus={handleUpdateControl}
        onViewEvidence={(evId) => {
          const ev = evidence.find(e => e.id === evId);
          if (ev) {
            setSelectedControl(null);
            setSelectedEvidence(ev);
          }
        }}
      />

      <EvidencePreviewModal
        evidence={selectedEvidence}
        isOpen={!!selectedEvidence}
        onClose={() => setSelectedEvidence(null)}
        onDownloadToast={(msg) => addToast('Download Started', msg, 'info')}
      />

      <RiskDetailModal
        risk={selectedRisk}
        isOpen={!!selectedRisk}
        onClose={() => setSelectedRisk(null)}
        onUpdateRisk={handleUpdateRisk}
      />

      <TaskDetailModal
        task={selectedTask}
        isOpen={!!selectedTask}
        onClose={() => setSelectedTask(null)}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  );
};

export default App;

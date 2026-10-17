import React, { useState } from 'react';
import {
  Network,
  Play,
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Database,
  Bell,
  CheckSquare,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';
import { INITIAL_HERO_NODES } from '../data/sampleData';

interface HeroSectionProps {
  onBuildWorkflow: () => void;
  onExploreAutomation: () => void;
  onNotify: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBuildWorkflow,
  onExploreAutomation,
  onNotify,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState('node-1');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const selectedNode =
    INITIAL_HERO_NODES.find((n) => n.id === selectedNodeId) || INITIAL_HERO_NODES[0];

  const handleTestHeroRun = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);
    onNotify('Initiating sample workflow test: New Form Submission received...');

    setTimeout(() => {
      setActiveStep(1);
      onNotify('Step 2: Checking email domain & company tier criteria (PASSED)...');

      setTimeout(() => {
        setActiveStep(2);
        onNotify('Step 3: Enriching lead data via Clearbit / Apollo graph...');

        setTimeout(() => {
          setActiveStep(3);
          onNotify('Step 4: Dispatching lead notification to Slack #revops-alerts...');

          setTimeout(() => {
            setActiveStep(4);
            onNotify('Step 5: Created task in Linear for SDR outreach (SLA: 15m)!');

            setTimeout(() => {
              setIsSimulating(false);
              setActiveStep(null);
              onNotify('Sample workflow run completed successfully! (Zero errors)');
            }, 700);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-4 h-4 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-purple-600" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-600" />;
      case 'Bell': return <Bell className="w-4 h-4 text-emerald-600" />;
      case 'CheckSquare': return <CheckSquare className="w-4 h-4 text-sky-600" />;
      default: return <Activity className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-canvas-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>WORKFLOWS THAT WORK FOR YOU</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Automate the work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              behind your work.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Connect the tools you use, automate repetitive processes, and give your team more time for the work that moves your business forward.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBuildWorkflow}
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Network className="w-4 h-4" />
              <span>Build your first workflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreAutomation}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore automation</span>
            </button>
          </div>

          {/* Value Microcopy */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              150+ App Integrations
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Real-Time Webhooks
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              SOC2 Type II Certified
            </span>
          </div>
        </div>

        {/* Hero Visual — Visual Workflow Canvas */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-300 bg-white shadow-2xl overflow-hidden">
          {/* Canvas Window Header */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2">
                workflow://inbound-enterprise-lead-orchestrator.flow
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Status:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold">
                ACTIVE (PROD)
              </span>
              <button
                onClick={handleTestHeroRun}
                disabled={isSimulating}
                className="ml-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded-lg shadow transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSimulating ? (
                  <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
                <span>Test Run</span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Node Diagram */}
          <div className="p-6 sm:p-8 bg-slate-50/80">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
              {INITIAL_HERO_NODES.map((node, index) => {
                const isSelected = selectedNodeId === node.id;
                const isCurrentlyExecuting = activeStep === index;
                const isCompleted = activeStep !== null && activeStep > index;

                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full lg:w-48 p-3.5 rounded-xl border bg-white shadow-sm transition-all cursor-pointer relative ${
                        isCurrentlyExecuting
                          ? 'border-blue-600 ring-2 ring-blue-400 scale-105'
                          : isSelected
                          ? 'border-blue-600 ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {/* Node Type Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded ${
                            node.type === 'trigger'
                              ? 'bg-amber-100 text-amber-800'
                              : node.type === 'condition'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {node.type}
                        </span>
                        {isCompleted && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded bg-slate-50 border border-slate-200">
                          {getIcon(node.icon)}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {node.title}
                        </h4>
                      </div>

                      <p className="text-[10px] text-slate-500 truncate font-sans">
                        {node.subtitle}
                      </p>
                    </div>

                    {/* Arrow connector between nodes */}
                    {index < INITIAL_HERO_NODES.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center text-slate-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Node Inspector Drawer */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 font-sans">
                    Inspecting Node: {selectedNode.title}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Configuration Parameters: {JSON.stringify(selectedNode.config)}
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400">
                * Sample interactive execution state
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

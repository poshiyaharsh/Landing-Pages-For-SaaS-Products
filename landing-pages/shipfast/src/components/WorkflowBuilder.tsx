import React, { useState } from 'react';
import {
  Rocket,
  Play,
  RotateCcw,
  CheckCircle2,
  GitBranch,
  Terminal,
  Server,
  Copy,
  Check
} from 'lucide-react';
import { SAMPLE_FRAMEWORKS, INITIAL_CHECKLIST_ITEMS } from '../data/sampleData';
import confetti from 'canvas-confetti';

interface WorkflowBuilderProps {
  onNotify: (msg: string) => void;
}

type StageProgress = 'idle' | 'building' | 'testing' | 'deploying' | 'completed';

export const WorkflowBuilder: React.FC<WorkflowBuilderProps> = ({ onNotify }) => {
  const [projectName, setProjectName] = useState('my-saas-platform');
  const [selectedFramework, setSelectedFramework] = useState(SAMPLE_FRAMEWORKS[0].id);
  const [repoConnected, setRepoConnected] = useState(true);
  const [checklist, setChecklist] = useState(INITIAL_CHECKLIST_ITEMS);
  const [currentStage, setCurrentStage] = useState<StageProgress>('idle');
  const [copiedConfig, setCopiedConfig] = useState(false);

  const activeFramework =
    SAMPLE_FRAMEWORKS.find((f) => f.id === selectedFramework) || SAMPLE_FRAMEWORKS[0];

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleRunDemoWorkflow = () => {
    if (currentStage !== 'idle' && currentStage !== 'completed') return;

    setCurrentStage('building');
    onNotify('Stage 1: Executing simulated production build...');

    setTimeout(() => {
      setCurrentStage('testing');
      onNotify('Stage 2: Running automated pre-flight tests & checklist audits...');

      setTimeout(() => {
        setCurrentStage('deploying');
        onNotify('Stage 3: Dispatching edge artifacts to simulated global CDN...');

        setTimeout(() => {
          setCurrentStage('completed');
          try {
            confetti({
              particleCount: 60,
              spread: 70,
              origin: { y: 0.7 },
              colors: ['#2563EB', '#10B981', '#60A5FA'],
            });
          } catch (e) {
            // fallback
          }
          onNotify(`Success! ${projectName} is launch-ready! (Simulated preview)`);
        }, 800);
      }, 700);
    }, 700);
  };

  const handleRestart = () => {
    setCurrentStage('idle');
    onNotify('Demo workflow reset to initial configuration.');
  };

  const handleCopyConfiguration = () => {
    const configExport = {
      project: projectName,
      framework: activeFramework.name,
      buildCommand: activeFramework.buildCommand,
      repository: repoConnected ? `github.com/developer/${projectName}` : 'local',
      verifiedChecklist: checklist.filter((c) => c.checked).map((c) => c.label),
      generatedAt: new Date().toISOString(),
      disclaimer: 'ShipFast local demonstration configuration artifact.',
    };

    navigator.clipboard.writeText(JSON.stringify(configExport, null, 2));
    setCopiedConfig(true);
    onNotify('Exported launch configuration JSON to clipboard!');
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  const checkedCount = checklist.filter((c) => c.checked).length;
  const deploymentUrl = `https://${projectName || 'app'}.shipfast.app`;

  return (
    <section id="workflow-builder" className="py-20 lg:py-28 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Launch Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Configure, audit, and simulate your{' '}
            <span className="text-blue-600">launch pipeline.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Test project parameters, customize setup checklists, and watch the automated pipeline transition from build to deployment.
          </p>
        </div>

        {/* Workflow Builder Studio Card */}
        <div className="rounded-2xl border border-slate-300 bg-slate-50 shadow-xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              <span className="font-mono text-xs font-bold text-slate-800">
                Workflow Builder // {projectName || 'untitled-project'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyConfiguration}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy launch config JSON"
              >
                {copiedConfig ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Config</span>
              </button>
              <button
                onClick={handleRestart}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-mono text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset workflow progression"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* 2-Column Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Col: Setup & Config Controls (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-white space-y-6">
              {/* Project Name Input */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 mb-2">
                  1. Project Name
                </label>
                <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="px-3.5 py-2.5 bg-slate-100 font-mono text-xs text-slate-500 border-r border-slate-300">
                    https://
                  </span>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    placeholder="my-saas-app"
                    className="flex-1 px-3.5 py-2.5 bg-white font-mono text-xs text-slate-900 outline-none"
                  />
                  <span className="px-3 py-2.5 bg-slate-100 font-mono text-xs text-slate-500 border-l border-slate-300">
                    .shipfast.app
                  </span>
                </div>
              </div>

              {/* Framework Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 mb-2">
                  2. Select Framework & Runtime
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                  {SAMPLE_FRAMEWORKS.map((fw) => (
                    <button
                      key={fw.id}
                      onClick={() => setSelectedFramework(fw.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedFramework === fw.id
                          ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 truncate">{fw.name}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{fw.buildCommand}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* GitHub Repo Connection Simulation */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 mb-2">
                  3. Source Repository Connection
                </label>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <GitBranch className="w-4 h-4 text-blue-600" />
                    <div>
                      <span className="font-semibold text-slate-900">
                        {repoConnected ? `github.com/developer/${projectName || 'app'}` : 'Local Repository (Disconnected)'}
                      </span>
                      <p className="text-[10px] text-slate-500">Auto-deploy on git push to main</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRepoConnected(!repoConnected)}
                    className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                      repoConnected
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {repoConnected ? 'Connected' : 'Connect Repo'}
                  </button>
                </div>
              </div>

              {/* Setup Checklist */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700">
                    4. Pre-Flight Launch Checklist
                  </label>
                  <span className="text-xs font-mono font-semibold text-blue-600">
                    {checkedCount} of {checklist.length} verified
                  </span>
                </div>
                <div className="space-y-2">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`p-2.5 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition-colors ${
                        item.checked
                          ? 'bg-emerald-50/60 border-emerald-200 text-slate-800'
                          : 'bg-white border-slate-200 text-slate-500'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            item.checked ? 'text-emerald-600' : 'text-slate-300'
                          }`}
                        />
                        <span>{item.label}</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        {item.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Run Trigger */}
              <button
                onClick={handleRunDemoWorkflow}
                disabled={currentStage !== 'idle' && currentStage !== 'completed'}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {currentStage === 'idle' || currentStage === 'completed' ? (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Demo Launch Workflow</span>
                  </>
                ) : (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing {currentStage}...</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Col: Interactive Pipeline Telemetry (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0B0F19] text-slate-200 space-y-6 flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-slate-400">
                    <Server className="w-4 h-4 text-blue-400" />
                    <span>Pipeline Execution Stream</span>
                  </div>
                  <span className="text-[11px] text-blue-400">
                    Stage: {currentStage.toUpperCase()}
                  </span>
                </div>

                {/* Simulated Pipeline Steps */}
                <div className="mt-6 space-y-4">
                  {[
                    {
                      id: 'building',
                      label: '1. Build & Dependency Resolution',
                      command: `$ ${activeFramework.buildCommand} --production`,
                      active: currentStage === 'building',
                      done: currentStage === 'testing' || currentStage === 'deploying' || currentStage === 'completed',
                    },
                    {
                      id: 'testing',
                      label: '2. Pre-flight Verification & Checks',
                      command: `$ shipfast audit --checks ${checkedCount}`,
                      active: currentStage === 'testing',
                      done: currentStage === 'deploying' || currentStage === 'completed',
                    },
                    {
                      id: 'deploying',
                      label: '3. Edge CDN Deployment & Routing',
                      command: `$ shipfast deploy -> ${deploymentUrl}`,
                      active: currentStage === 'deploying',
                      done: currentStage === 'completed',
                    },
                  ].map((step) => (
                    <div
                      key={step.id}
                      className={`p-3.5 rounded-xl border text-xs transition-all ${
                        step.active
                          ? 'bg-blue-950/60 border-blue-500 shadow-lg'
                          : step.done
                          ? 'bg-emerald-950/40 border-emerald-500/40'
                          : 'bg-slate-900 border-slate-800 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-slate-100">{step.label}</span>
                        {step.active && (
                          <span className="text-[10px] text-blue-400 animate-pulse">RUNNING...</span>
                        )}
                        {step.done && (
                          <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> PASS
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">{step.command}</div>
                    </div>
                  ))}
                </div>

                {/* Final Deployment Summary Card */}
                {currentStage === 'completed' && (
                  <div className="mt-6 p-4 rounded-xl bg-[#0F172A] border border-emerald-500/50 shadow-xl space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Rocket className="w-4 h-4" /> LIVE DEPLOYMENT PREVIEW
                      </span>
                      <span className="text-[10px] text-slate-400">v1.0.0</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <p className="text-slate-300">
                        Target URL:{' '}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onNotify('Simulated preview link clicked!');
                          }}
                          className="text-blue-400 underline font-bold"
                        >
                          {deploymentUrl}
                        </a>
                      </p>
                      <p className="text-slate-400 text-[11px]">
                        Latency: 18ms | Edge Cache: HIT | Status: 200 OK
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Informational Disclaimer Footer */}
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-blue-400">* Note:</span> This is a client-side simulated demonstration workflow. Live deployment requires configuring your own AWS, Vercel, or custom hosting provider credentials.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

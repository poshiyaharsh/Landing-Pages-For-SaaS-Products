import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  XCircle,
  Network,
  Sliders,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { WorkflowNode } from '../types';
import confetti from 'canvas-confetti';

interface InteractiveWorkflowBuilderProps {
  onNotify: (msg: string) => void;
}

const AVAILABLE_ACTIONS = [
  { title: 'Send Slack Notification', subtitle: 'Posts payload to #team-channel', icon: 'Bell' },
  { title: 'Create HubSpot Contact', subtitle: 'Syncs lead details & company size', icon: 'UserCheck' },
  { title: 'Draft Linear Issue', subtitle: 'Creates high-priority engineering task', icon: 'CheckSquare' },
  { title: 'Generate Stripe Customer', subtitle: 'Provisions billing customer record', icon: 'CreditCard' },
  { title: 'Dispatch Webhook', subtitle: 'POST payload to custom endpoint', icon: 'Send' },
];

export const InteractiveWorkflowBuilder: React.FC<InteractiveWorkflowBuilderProps> = ({ onNotify }) => {
  const [workflowTitle, setWorkflowTitle] = useState('New Customer Triage & Notification');
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'step-1',
      type: 'trigger',
      title: 'Typeform Submitted',
      subtitle: 'Webhook listener active',
      icon: 'FileText',
      enabled: true,
      config: { formId: 'enterprise_quote_v2' },
    },
    {
      id: 'step-2',
      type: 'condition',
      title: 'Filter: Budget >= $10k',
      subtitle: 'Evaluate response qualification',
      icon: 'ShieldCheck',
      enabled: true,
      config: { field: 'annual_budget', operator: 'gte', value: '10000' },
    },
    {
      id: 'step-3',
      type: 'action',
      title: 'Send Slack Notification',
      subtitle: 'Posts payload to #sales-leads',
      icon: 'Bell',
      enabled: true,
      config: { channel: '#sales-leads' },
    },
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [executionState, setExecutionState] = useState<'idle' | 'running' | 'success'>('idle');

  const toggleNode = (id: string) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  const removeNode = (id: string) => {
    if (nodes.length <= 2) {
      onNotify('Workflow requires at least 2 nodes (Trigger and Action).');
      return;
    }
    setNodes((prev) => prev.filter((n) => n.id !== id));
    onNotify('Removed workflow node from canvas.');
  };

  const addActionNode = (actionItem: typeof AVAILABLE_ACTIONS[0]) => {
    if (nodes.length >= 6) {
      onNotify('Maximum of 6 nodes reached in demo sandbox.');
      return;
    }
    const newNode: WorkflowNode = {
      id: `step-${Date.now()}`,
      type: 'action',
      title: actionItem.title,
      subtitle: actionItem.subtitle,
      icon: actionItem.icon,
      enabled: true,
      config: { action: actionItem.title },
    };
    setNodes([...nodes, newNode]);
    onNotify(`Added node "${actionItem.title}" to canvas!`);
  };

  const handleRunSimulatedExecution = () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionState('running');
    onNotify('Executing workflow sequence...');

    setTimeout(() => {
      setIsRunning(false);
      setExecutionState('success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#10B981', '#38BDF8'],
        });
      } catch (e) {
        // fallback
      }
      onNotify(`Workflow "${workflowTitle}" executed successfully! 3/3 active nodes passed.`);
    }, 1000);
  };

  const handleReset = () => {
    setWorkflowTitle('New Customer Triage & Notification');
    setExecutionState('idle');
    setNodes([
      {
        id: 'step-1',
        type: 'trigger',
        title: 'Typeform Submitted',
        subtitle: 'Webhook listener active',
        icon: 'FileText',
        enabled: true,
        config: { formId: 'enterprise_quote_v2' },
      },
      {
        id: 'step-2',
        type: 'condition',
        title: 'Filter: Budget >= $10k',
        subtitle: 'Evaluate response qualification',
        icon: 'ShieldCheck',
        enabled: true,
        config: { field: 'annual_budget', operator: 'gte', value: '10000' },
      },
      {
        id: 'step-3',
        type: 'action',
        title: 'Send Slack Notification',
        subtitle: 'Posts payload to #sales-leads',
        icon: 'Bell',
        enabled: true,
        config: { channel: '#sales-leads' },
      },
    ]);
    onNotify('Restored default workflow nodes.');
  };

  return (
    <section id="builder-demo" className="py-20 lg:py-28 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Workflow Canvas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Design your process visually.{' '}
            <span className="text-blue-600">Test it live.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Add triggers and actions, toggle steps on or off, and run simulated executions in a deterministic client-side sandbox.
          </p>
        </div>

        {/* Builder Studio Container */}
        <div className="rounded-2xl border border-slate-300 bg-slate-50 shadow-xl overflow-hidden">
          {/* Top Bar with Name Editor & Controls */}
          <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <input
                type="text"
                value={workflowTitle}
                onChange={(e) => setWorkflowTitle(e.target.value)}
                className="font-bold text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-600 outline-none pb-0.5"
                title="Click to rename workflow"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="px-3 py-1.5 text-xs font-mono text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              <button
                onClick={handleRunSimulatedExecution}
                disabled={isRunning}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isRunning ? (
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>Run Test Execution</span>
              </button>
            </div>
          </div>

          {/* 2-Column Split: Active Canvas Nodes & Action Palette */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left: Active Workflow Sequence (8 Cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-4 bg-canvas-grid min-h-[420px]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>Active Sequence: {nodes.length} Nodes</span>
                <span>Click switch to toggle step</span>
              </div>

              {nodes.map((node, index) => (
                <div
                  key={node.id}
                  className={`p-4 rounded-xl border bg-white shadow-sm transition-all flex items-center justify-between gap-4 ${
                    node.enabled ? 'border-slate-200' : 'border-slate-200 bg-slate-50 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                            node.type === 'trigger'
                              ? 'bg-amber-100 text-amber-800'
                              : node.type === 'condition'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {node.type}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{node.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{node.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleNode(node.id)}
                      className={`text-xs font-mono px-2 py-1 rounded transition-colors cursor-pointer ${
                        node.enabled
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {node.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    {nodes.length > 2 && (
                      <button
                        onClick={() => removeNode(node.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                        title="Delete node"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Execution Feedback Banner */}
              {executionState === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>All active steps executed in 420ms with 200 OK responses.</span>
                  </div>
                  <span className="font-bold text-emerald-700">0 ERRORS</span>
                </div>
              )}
            </div>

            {/* Right: Available Actions Palette (4 Cols) */}
            <div className="lg:col-span-4 p-6 bg-white space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider">
                  Available Actions Palette
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Click to append node to the workflow
                </p>
              </div>

              <div className="space-y-2">
                {AVAILABLE_ACTIONS.map((action) => (
                  <button
                    key={action.title}
                    onClick={() => addActionNode(action)}
                    className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                        {action.title}
                      </div>
                      <div className="text-[11px] text-slate-500">{action.subtitle}</div>
                    </div>
                    <Plus className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                * Client-side sandbox. External automation requires authenticated cloud integration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

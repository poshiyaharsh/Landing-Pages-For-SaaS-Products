import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Copy,
  Plus,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  Info,
  SplitSquareVertical
} from 'lucide-react';
import { AVAILABLE_MODELS } from '../data/sampleData';

interface PromptPlaygroundProps {
  onNotify: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

interface PlaygroundVariant {
  id: string;
  name: string;
  prompt: string;
  model: string;
  temperature: number;
  output: string;
  metrics: {
    latencyMs: number;
    tokens: number;
    coherence: number;
  };
}

export const PromptPlayground: React.FC<PromptPlaygroundProps> = ({ onNotify }) => {
  // Playground state
  const [productVar, setProductVar] = useState('TaskFlow');
  const [audienceVar, setAudienceVar] = useState('Engineering Managers');
  const [temperature, setTemperature] = useState(0.7);
  const [selectedModel, setSelectedModel] = useState(AVAILABLE_MODELS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [hasRun, setHasRun] = useState(false);

  // Active prompt editor text
  const [promptText, setPromptText] = useState(
    `You are a senior product copywriter. Write a compelling 2-sentence value proposition for {{product}}, targeting {{audience}}. Highlight velocity and cross-team alignment.`
  );

  // Variants list for side-by-side comparison
  const [variants, setVariants] = useState<PlaygroundVariant[]>([
    {
      id: 'var-1',
      name: 'Variant A (Baseline)',
      prompt: `You are a senior product copywriter. Write a compelling 2-sentence value proposition for {{product}}, targeting {{audience}}. Highlight velocity and cross-team alignment.`,
      model: 'claude-3-5-sonnet',
      temperature: 0.7,
      output: `TaskFlow connects code commits with sprint objectives so engineering managers can eliminate standup churn and accelerate roadmap delivery. Give every developer clear priorities while keeping leadership informed in real time.`,
      metrics: { latencyMs: 240, tokens: 46, coherence: 94 },
    },
    {
      id: 'var-2',
      name: 'Variant B (Zero-shot Bulleted)',
      prompt: `Role: Technical Marketer\nProduct: {{product}}\nAudience: {{audience}}\nInstruction: Draft a high-impact hook with concrete operational metrics.`,
      model: 'gpt-4o',
      temperature: 0.4,
      output: `Stop spending 6+ hours weekly reconciling status reports across fragmented repos. TaskFlow gives engineering managers unified sprint metrics and automated progress tracking in one clean view.`,
      metrics: { latencyMs: 195, tokens: 42, coherence: 97 },
    },
  ]);

  const [activeTabVariant, setActiveTabVariant] = useState(variants[0].id);

  // Variable replacement helper
  const interpolatePrompt = (template: string) => {
    return template
      .replace(/\{\{product\}\}/g, productVar || '[product]')
      .replace(/\{\{audience\}\}/g, audienceVar || '[audience]');
  };

  const handleRunExperiment = () => {
    if (!promptText.trim()) {
      setErrorMsg('Prompt cannot be empty. Please enter your prompt instructions.');
      onNotify('Validation error: prompt text is empty.', 'error');
      return;
    }

    setErrorMsg('');
    setIsRunning(true);

    const resolved = interpolatePrompt(promptText);

    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);

      // Deterministic generation based on inputs
      const simulatedOutput = `[Simulated demonstration for ${resolved.slice(0, 45)}...]\n\nWith ${productVar}, ${audienceVar} gain complete operational clarity without manual status pinging. Accelerate team velocity by 35% through automated workflow orchestration and unified roadmap tracking.`;

      // Update active variant
      setVariants((prev) =>
        prev.map((v) =>
          v.id === activeTabVariant
            ? {
                ...v,
                prompt: promptText,
                temperature,
                model: selectedModel,
                output: simulatedOutput,
                metrics: {
                  latencyMs: Math.floor(180 + Math.random() * 80),
                  tokens: Math.floor(38 + Math.random() * 20),
                  coherence: Math.floor(92 + Math.random() * 7),
                },
              }
            : v
        )
      );

      onNotify(`Sample experiment completed for active variant! Output updated.`, 'success');
    }, 650);
  };

  const handleAddVariant = () => {
    if (variants.length >= 4) {
      onNotify('Maximum of 4 comparison variants reached in demo sandbox.', 'info');
      return;
    }

    const nextChar = String.fromCharCode(65 + variants.length);
    const newVariant: PlaygroundVariant = {
      id: `var-${Date.now()}`,
      name: `Variant ${nextChar} (Custom)`,
      prompt: `Act as a growth engineer writing for {{product}} to {{audience}}. Be concise, direct, and metric-focused.`,
      model: selectedModel,
      temperature: 0.5,
      output: `Unblock your teams with ${productVar}. Built specifically for ${audienceVar} who demand speed, automated compliance, and real-time sprint execution.`,
      metrics: {
        latencyMs: 210,
        tokens: 39,
        coherence: 95,
      },
    };

    setVariants([...variants, newVariant]);
    setActiveTabVariant(newVariant.id);
    setPromptText(newVariant.prompt);
    onNotify(`Created ${newVariant.name} for comparison!`, 'info');
  };

  const handleReset = () => {
    setPromptText(
      `You are a senior product copywriter. Write a compelling 2-sentence value proposition for {{product}}, targeting {{audience}}. Highlight velocity and cross-team alignment.`
    );
    setProductVar('TaskFlow');
    setAudienceVar('Engineering Managers');
    setTemperature(0.7);
    setSelectedModel(AVAILABLE_MODELS[0].id);
    setErrorMsg('');
    onNotify('Playground restored to default baseline prompt.', 'info');
  };

  const handleCopyPrompt = () => {
    const interpolated = interpolatePrompt(promptText);
    navigator.clipboard.writeText(interpolated);
    onNotify('Interpolated prompt copied to clipboard!', 'success');
  };

  return (
    <section id="playground" className="py-20 lg:py-28 bg-[#080C16] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Prompt Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test variations. Compare outputs.{' '}
            <span className="text-cyan-400">In real time.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Edit variables, test prompt variants against sample outputs, and evaluate token count, latency, and coherence in a deterministic client-side sandbox.
          </p>
        </div>

        {/* Playground Main Card */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0E1526] shadow-2xl overflow-hidden">
          {/* Top Bar with Variant Tabs & Controls */}
          <div className="px-5 py-3.5 bg-[#0A0E1A] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            {/* Variant Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                Variants:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setActiveTabVariant(v.id);
                      setPromptText(v.prompt);
                      setTemperature(v.temperature);
                      setSelectedModel(v.model);
                    }}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                      activeTabVariant === v.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
                {variants.length < 4 && (
                  <button
                    onClick={handleAddVariant}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Variant</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyPrompt}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded hover:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy prompt with substituted variables"
              >
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy Prompt</span>
              </button>
              <button
                onClick={handleReset}
                className="px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-rose-300 bg-slate-900 border border-slate-800 rounded hover:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset to default prompt"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Main 2-Column Split: Config/Editor & Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Left: Input, Variables, Model Controls (7 Cols) */}
            <div className="lg:col-span-7 p-5 sm:p-6 space-y-5 bg-[#0B101E]">
              {/* Variable Input Area */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    Dynamic Variables Injection
                  </label>
                  <span className="text-[11px] font-mono text-cyan-400/80">
                    Auto-interpolated into prompt
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800 focus-within:border-cyan-500/50">
                    <span className="text-[10px] text-cyan-400 block mb-1">{`{{product}}`}</span>
                    <input
                      type="text"
                      value={productVar}
                      onChange={(e) => setProductVar(e.target.value)}
                      placeholder="e.g. TaskFlow"
                      className="w-full bg-transparent text-white outline-none font-sans text-xs"
                    />
                  </div>
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800 focus-within:border-cyan-500/50">
                    <span className="text-[10px] text-cyan-400 block mb-1">{`{{audience}}`}</span>
                    <input
                      type="text"
                      value={audienceVar}
                      onChange={(e) => setAudienceVar(e.target.value)}
                      placeholder="e.g. Engineering Managers"
                      className="w-full bg-transparent text-white outline-none font-sans text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Editable Prompt Area */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Prompt Template
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {promptText.length} characters
                  </span>
                </div>
                <textarea
                  rows={5}
                  value={promptText}
                  onChange={(e) => {
                    setPromptText(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full p-3.5 bg-[#070B14] border border-cyan-500/20 focus:border-cyan-400 rounded-xl text-xs font-mono text-slate-200 outline-none leading-relaxed transition-colors resize-y"
                  placeholder="Enter your system prompt or instructions..."
                />
                {errorMsg && (
                  <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errorMsg}
                  </p>
                )}
              </div>

              {/* Controls: Model Selector & Temperature Slider */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Select Evaluated Model
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white outline-none focus:border-cyan-400"
                  >
                    {AVAILABLE_MODELS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name} ({m.provider})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    <span>Temperature</span>
                    <span className="text-cyan-400 font-bold">{temperature.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>0.0 (Deterministic)</span>
                    <span>1.0 (Creative)</span>
                  </div>
                </div>
              </div>

              {/* Run Experiment Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={handleRunExperiment}
                  disabled={isRunning}
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Simulating experiment run...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Run Sample Experiment</span>
                    </>
                  )}
                </button>
                <p className="mt-2 text-[11px] font-mono text-slate-400 text-center">
                  * Deterministic local demonstration. Outputs generated safely in-browser with zero external API calls.
                </p>
              </div>
            </div>

            {/* Right: Side-by-Side Result Comparison (5 Cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 bg-[#0E1526] space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <SplitSquareVertical className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                      Side-by-Side Outputs
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    {variants.length} active variants
                  </span>
                </div>

                {/* Variants Output Feed */}
                <div className="mt-4 space-y-4 max-h-[460px] overflow-y-auto pr-1">
                  {variants.map((v) => (
                    <div
                      key={v.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        activeTabVariant === v.id
                          ? 'bg-[#090D17] border-cyan-500/40 shadow-md shadow-cyan-950/40'
                          : 'bg-slate-900/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800/80 mb-2">
                        <span className="font-semibold text-cyan-300">{v.name}</span>
                        <span className="text-[10px] text-slate-400">
                          {v.model} • T={v.temperature}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-200 leading-relaxed">
                        {v.output}
                      </p>

                      {/* Micro Metric Tag Strip */}
                      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Latency: <strong className="text-slate-200">{v.metrics.latencyMs}ms</strong></span>
                        <span>Tokens: <strong className="text-slate-200">{v.metrics.tokens}</strong></span>
                        <span>Score: <strong className="text-emerald-400">{v.metrics.coherence}%</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informational Disclaimer Footer */}
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Ready to link your team's live OpenAI or Anthropic keys? Connect your endpoint in the full lab console with zero prompt retention.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

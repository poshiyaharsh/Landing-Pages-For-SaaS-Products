import React, { useState } from 'react';
import { 
  Play, 
  Plus, 
  Sliders, 
  ArrowDown, 
  Bot, 
  Mic, 
  BrainCircuit, 
  Volume2, 
  Sparkles, 
  Settings2,
  Check,
  Send
} from 'lucide-react';
import { WORKFLOW_NODES } from '../data/voiceflowData';
import { VoiceAgentNode } from '../types';

interface AgentBuilderProps {
  onToast: (title: string, message?: string) => void;
}

export const AgentBuilder: React.FC<AgentBuilderProps> = ({ onToast }) => {
  const [selectedNodeId, setSelectedNodeId] = useState('node-1');
  const [simulatedChat, setSimulatedChat] = useState<{ role: 'user' | 'agent'; text: string }[]>([
    { role: 'user', text: 'I need help tracking my order.' },
    { role: 'agent', text: 'I can help with that. Please provide your order reference or registered email.' }
  ]);
  const [userInput, setUserInput] = useState('');

  const selectedNode = WORKFLOW_NODES.find((n) => n.id === selectedNodeId) || WORKFLOW_NODES[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userText = userInput.trim();
    setUserInput('');
    setSimulatedChat((prev) => [...prev, { role: 'user', text: userText }]);

    setTimeout(() => {
      setSimulatedChat((prev) => [
        ...prev,
        {
          role: 'agent',
          text: `Found reference "${userText.toUpperCase()}". Your package is in transit with estimated delivery tomorrow by 2:00 PM.`
        }
      ]);
      onToast('Agent Response Synthesized', 'Audio response stream queued via Aura Neural TTS.');
    }, 600);
  };

  return (
    <section id="agent-builder" className="py-24 sm:py-36 bg-vf-bg-secondary border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            VISUAL CONVERSATIONAL GRAPH
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Build conversations that feel natural.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Construct end-to-end voice topologies linking acoustic capture, semantic routing, and neural voice synthesis into resilient conversational loops.
          </p>
        </div>

        {/* 2-Column: Left Workflow Graph & Inspector, Right Agent Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Node Topology (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-vf-border bg-vf-surface p-6 sm:p-8 flex flex-col justify-between shadow-surface">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-vf-border/60">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-vf-cyan" />
                  <h4 className="font-display text-base font-bold text-vf-text">
                    Customer Support Assistant Flow
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToast('Workflow Saved', 'Topology graph validated with 0 syntax warnings.')}
                    className="px-3 py-1 rounded-lg border border-vf-border bg-vf-bg hover:bg-vf-surface-elevated text-xs font-mono text-vf-text transition-colors"
                  >
                    Validate Flow
                  </button>
                  <button
                    onClick={() => onToast('Step Added', 'Appended conditional fallback node.')}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-vf-cyan/15 border border-vf-cyan/30 text-xs font-mono text-vf-cyan hover:bg-vf-cyan/25 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Step</span>
                  </button>
                </div>
              </div>

              {/* Vertical Step Nodes Sequence */}
              <div className="space-y-3 mb-6">
                {WORKFLOW_NODES.map((node, index) => {
                  const isSelected = selectedNodeId === node.id;
                  return (
                    <div key={node.id}>
                      <button
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-vf-cyan bg-vf-cyan/10 shadow-cyan-glow'
                            : 'border-vf-border/80 bg-vf-bg hover:border-vf-border'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-vf-surface border border-vf-border flex items-center justify-center font-mono text-xs font-bold text-vf-cyan">
                            {node.label}
                          </span>
                          <div>
                            <span className="font-display text-sm font-bold text-vf-text block">
                              {node.title}
                            </span>
                            <span className="text-xs text-vf-text-muted font-sans line-clamp-1 block">
                              {node.description}
                            </span>
                          </div>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isSelected ? 'bg-vf-cyan text-vf-bg font-bold' : 'bg-vf-surface text-vf-text-muted'
                        }`}>
                          {isSelected ? 'Inspecting' : 'Configure'}
                        </span>
                      </button>

                      {index < WORKFLOW_NODES.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="w-4 h-4 text-vf-cyan/50" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Selected Node Parameter Inspector */}
              <div className="p-4 rounded-xl bg-vf-bg border border-vf-border font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between text-vf-cyan pb-2 border-b border-vf-border/40">
                  <span className="uppercase tracking-wider">
                    NODE PARAMETERS: {selectedNode.title.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-vf-green">Live Active</span>
                </div>
                <div className="space-y-1.5">
                  {selectedNode.config.map((param, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-vf-text-muted">{param.key}:</span>
                      <span className="text-vf-text font-bold">{param.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-vf-border/40 text-xs font-mono text-vf-text-muted">
              Interactive node topology · Select any step above to inspect slot parameters.
            </div>
          </div>

          {/* Right: Live Interactive Agent Simulator (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-vf-border bg-vf-surface p-6 sm:p-8 flex flex-col justify-between shadow-surface">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-vf-border/60">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan block">
                    INTERACTIVE SIMULATOR
                  </span>
                  <h4 className="font-display text-base font-bold text-vf-text mt-0.5">
                    Customer Support Agent Preview
                  </h4>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-vf-green shadow-cyan-glow animate-pulse" />
              </div>

              {/* Chat Message Window */}
              <div className="space-y-3 min-h-[320px] max-h-[380px] overflow-y-auto pr-1">
                {simulatedChat.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl text-xs font-mono leading-relaxed max-w-[88%] ${
                      msg.role === 'user'
                        ? 'ml-auto bg-vf-surface-elevated border border-vf-border text-vf-text'
                        : 'mr-auto bg-vf-bg border border-vf-cyan/30 text-vf-cyan shadow-cyan-glow'
                    }`}
                  >
                    <div className="text-[9px] uppercase tracking-wider text-vf-text-muted mb-1">
                      {msg.role === 'user' ? 'Caller Speech' : 'VoiceFlow AI (TTS)'}
                    </div>
                    <p className="font-sans text-xs text-vf-text">{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Simulation Bar */}
            <form onSubmit={handleSendMessage} className="mt-6 pt-4 border-t border-vf-border/60 flex gap-2">
              <input
                type="text"
                placeholder="Type customer reply to test agent..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-vf-border bg-vf-bg text-xs font-mono text-vf-text focus:border-vf-cyan"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-vf-cyan text-vf-bg font-bold font-mono text-xs uppercase hover:opacity-90 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

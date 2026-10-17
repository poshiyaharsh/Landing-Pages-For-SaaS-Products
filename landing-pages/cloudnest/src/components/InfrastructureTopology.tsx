import React, { useState } from 'react';
import { Layers, Server, Database, Terminal, HardDrive, Activity, ExternalLink, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { TopologyNode, ServiceItem, Environment } from '../types';
import { SAMPLE_TOPOLOGY_NODES, SAMPLE_SERVICES } from '../data/sampleData';

interface InfrastructureTopologyProps {
  onSelectService: (service: ServiceItem) => void;
}

export const InfrastructureTopology: React.FC<InfrastructureTopologyProps> = ({ onSelectService }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-api');
  const [topologyEnv, setTopologyEnv] = useState<Environment>('production');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const activeNode = SAMPLE_TOPOLOGY_NODES.find((n) => n.id === selectedNodeId) || SAMPLE_TOPOLOGY_NODES[1];

  const handleNodeClick = (node: TopologyNode) => {
    setSelectedNodeId(node.id);
    const matchedService = SAMPLE_SERVICES.find(
      (s) => s.name.toLowerCase().includes(node.label.toLowerCase().split(' ')[0]) || s.id.includes(node.category)
    ) || SAMPLE_SERVICES[0];
    onSelectService(matchedService);
  };

  return (
    <section id="topology" className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
              TOPOLOGY VISUALIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
              Understand how everything connects.
            </h2>
            <p className="text-base text-nest-secondary mt-3 leading-relaxed">
              Explore your services, dependencies, datastores, and ingress gateways through an interactive topology graph with real-time throughput metrics.
            </p>
          </div>

          {/* Environment Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-nest-border rounded-nest shadow-subtle self-start md:self-auto">
            {(['production', 'staging', 'development'] as Environment[]).map((env) => (
              <button
                key={env}
                onClick={() => setTopologyEnv(env)}
                className={`px-3 py-1.5 rounded text-xs font-mono capitalize transition-colors ${
                  topologyEnv === env
                    ? 'bg-nest-blue text-white shadow-subtle font-medium'
                    : 'text-nest-secondary hover:text-nest-text'
                }`}
              >
                {env}
              </button>
            ))}
          </div>
        </div>

        {/* Main Topology Visualizer Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas Panel (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-nest-border rounded-nest-xl p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-nest-border text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-nest-green animate-pulse" />
                <span className="font-display font-bold text-nest-text">Active Service Mesh: {topologyEnv}</span>
              </div>
              <span className="text-nest-muted font-mono text-[11px]">Click any node to inspect telemetry</span>
            </div>

            {/* SVG Interactive Topology Canvas */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-nest-bg/50 rounded-nest border border-nest-border overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 820 340" fill="none">
                {/* Background micro grid */}
                <pattern id="topology-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
                </pattern>
                <rect width="820" height="340" fill="url(#topology-grid)" />

                {/* Connection lines between nodes */}
                {/* Web -> API */}
                <path
                  d="M 170 190 L 260 190"
                  stroke={selectedNodeId === 'node-web' || selectedNodeId === 'node-api' ? '#3468F5' : '#CBD5E1'}
                  strokeWidth="2"
                  className={selectedNodeId === 'node-web' || selectedNodeId === 'node-api' ? 'animate-flow' : ''}
                />

                {/* API -> Worker */}
                <path
                  d="M 370 190 C 430 190, 430 90, 480 90"
                  stroke={selectedNodeId === 'node-api' || selectedNodeId === 'node-worker' ? '#3468F5' : '#CBD5E1'}
                  strokeWidth="2"
                  className="animate-flow"
                />

                {/* API -> Cache */}
                <path
                  d="M 370 190 L 480 190"
                  stroke={selectedNodeId === 'node-api' || selectedNodeId === 'node-cache' ? '#35C5E8' : '#CBD5E1'}
                  strokeWidth="2"
                  className="animate-flow"
                />

                {/* API -> DB */}
                <path
                  d="M 370 190 C 430 190, 430 290, 480 290"
                  stroke={selectedNodeId === 'node-api' || selectedNodeId === 'node-db' ? '#159B69' : '#CBD5E1'}
                  strokeWidth="2"
                  className="animate-flow"
                />

                {/* Worker -> DB */}
                <path
                  d="M 590 90 C 650 90, 650 290, 590 290"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* API -> Object Storage */}
                <path
                  d="M 590 190 C 650 190, 660 130, 700 130"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* API -> External */}
                <path
                  d="M 590 190 C 650 190, 660 250, 700 250"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Render Nodes as Interactive HTML Elements */}
              <div className="absolute inset-0 p-4">
                {SAMPLE_TOPOLOGY_NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;

                  return (
                    <div
                      key={node.id}
                      onClick={() => handleNodeClick(node)}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      style={{
                        position: 'absolute',
                        left: `${(node.x / 820) * 100}%`,
                        top: `${(node.y / 340) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'ring-2 ring-nest-blue shadow-glow-blue scale-105 z-20'
                          : 'hover:scale-102 hover:shadow-subtle z-10'
                      }`}
                    >
                      <div className="bg-white border border-nest-border rounded-nest p-3 shadow-subtle min-w-[130px] sm:min-w-[140px] text-left">
                        <div className="flex items-center justify-between mb-1">
                          <span className="w-2 h-2 rounded-full bg-nest-green" />
                          <span className="text-[9px] font-mono uppercase bg-nest-subtle px-1.5 py-0.2 rounded text-nest-secondary">
                            {node.category}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold font-display text-nest-text truncate">{node.label}</h4>
                        <div className="flex items-center justify-between text-[10px] font-mono text-nest-secondary mt-1">
                          <span>{node.metrics.latency}</span>
                          <span className="text-nest-blue">{node.metrics.rps}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-nest-muted font-mono pt-1">
              <span>● Real-time data packet animation active</span>
              <span>Cluster Region: us-east-1</span>
            </div>
          </div>

          {/* Right Selected Node Inspection Card (col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-nest-border rounded-nest-xl p-6 shadow-subtle space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-nest-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-nest-green" />
                <h4 className="font-bold font-display text-nest-text text-sm">{activeNode.label}</h4>
              </div>
              <span className="text-xs font-mono text-nest-blue bg-nest-blue-soft px-2 py-0.5 rounded">
                Active
              </span>
            </div>

            <p className="text-xs text-nest-secondary leading-relaxed font-normal">
              {activeNode.details}
            </p>

            {/* Metrics Breakdown */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-nest-muted font-semibold block">
                Resource Utilization
              </span>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-2.5 bg-nest-bg rounded border border-nest-border">
                  <span className="text-nest-muted text-[10px] block">CPU Load</span>
                  <span className="font-bold text-nest-text">{activeNode.metrics.cpu}</span>
                </div>
                <div className="p-2.5 bg-nest-bg rounded border border-nest-border">
                  <span className="text-nest-muted text-[10px] block">Memory</span>
                  <span className="font-bold text-nest-text">{activeNode.metrics.memory}</span>
                </div>
                <div className="p-2.5 bg-nest-bg rounded border border-nest-border">
                  <span className="text-nest-muted text-[10px] block">Latency (p95)</span>
                  <span className="font-bold text-nest-text">{activeNode.metrics.latency}</span>
                </div>
                <div className="p-2.5 bg-nest-bg rounded border border-nest-border">
                  <span className="text-nest-muted text-[10px] block">Throughput</span>
                  <span className="font-bold text-nest-text">{activeNode.metrics.rps}</span>
                </div>
              </div>
            </div>

            {/* Connections */}
            <div className="space-y-2 pt-2 border-t border-nest-border text-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-nest-muted font-semibold block">
                Outbound Connections ({activeNode.connections.length})
              </span>
              {activeNode.connections.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {activeNode.connections.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 bg-nest-bg rounded border border-nest-border text-nest-secondary"
                    >
                      → {c}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-nest-muted text-[11px] font-mono">Terminal sink node (Datastore/Storage)</span>
              )}
            </div>

            <button
              onClick={() => {
                const matchedService =
                  SAMPLE_SERVICES.find((s) => s.name.toLowerCase().includes(activeNode.label.toLowerCase().split(' ')[0])) ||
                  SAMPLE_SERVICES[0];
                onSelectService(matchedService);
              }}
              className="w-full py-2 bg-nest-blue hover:bg-nest-blue-deep text-white text-xs font-semibold rounded-nest transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Open Detailed Metrics</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

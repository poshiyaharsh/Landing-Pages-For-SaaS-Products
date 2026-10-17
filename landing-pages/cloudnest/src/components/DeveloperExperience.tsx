import React, { useState } from 'react';
import { Terminal, Copy, CheckCircle2, Code2, FileCode, Check } from 'lucide-react';

interface DeveloperExperienceProps {
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const DeveloperExperience: React.FC<DeveloperExperienceProps> = ({ onToast }) => {
  const [activeTab, setActiveTab] = useState<'cli' | 'yaml'>('cli');

  const yamlConfig = `name: web-frontend

environment: production

build:
  command: npm run build
  env:
    NODE_ENV: production

deploy:
  replicas: 4
  health_check: /healthz
  port: 3000
  autoscale:
    min: 2
    max: 8
    target_cpu: 75%`;

  const handleCopyYaml = () => {
    navigator.clipboard.writeText(yamlConfig);
    onToast('Configuration Copied', 'cloudnest.yaml snippet copied to clipboard.', 'success');
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npm install -g cloudnest-cli && cloudnest init');
    onToast('CLI Command Copied', 'cloudnest installation command copied to clipboard.', 'blue');
  };

  return (
    <section id="developer-experience" className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            ENGINEER-FIRST TOOLING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Built for the way developers work.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Manage your entire infrastructure via a lightweight CLI, declarative YAML configuration, or native Git hooks. No clicking through hundreds of cloud menus.
          </p>
        </div>

        {/* Split Code & Terminal Showcase */}
        <div className="bg-nest-console-bg text-nest-console-text rounded-nest-xl border border-nest-console-border overflow-hidden shadow-modal">
          {/* Navigation Bar */}
          <div className="px-5 py-3 border-b border-nest-console-border bg-nest-console-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('cli')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  activeTab === 'cli'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-nest-console-muted hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-nest-cyan" />
                <span>CLI Workflow</span>
              </button>

              <button
                onClick={() => setActiveTab('yaml')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  activeTab === 'yaml'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-nest-console-muted hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-nest-blue" />
                <span>cloudnest.yaml</span>
              </button>
            </div>

            <button
              onClick={activeTab === 'yaml' ? handleCopyYaml : handleCopyCli}
              className="text-xs font-mono text-nest-console-muted hover:text-white flex items-center gap-1.5 transition-colors p-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy {activeTab === 'yaml' ? 'Config' : 'Command'}</span>
            </button>
          </div>

          {/* Tab 1: Terminal CLI View */}
          {activeTab === 'cli' && (
            <div className="p-6 font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
              <div className="text-nest-console-muted text-[11px] select-none pb-2 border-b border-nest-console-border">
                # Initialize and deploy an application in seconds
              </div>

              <div className="space-y-1">
                <div className="text-nest-cyan">$ cloudnest init</div>
                <div className="text-nest-green pl-4">✓ Project detected: Node.js 20 / Next.js</div>
                <div className="text-nest-green pl-4">✓ Configuration generated: cloudnest.yaml</div>
                <div className="text-nest-green pl-4">✓ Environment ready: production</div>
              </div>

              <div className="space-y-1 pt-3">
                <div className="text-nest-cyan">$ cloudnest deploy --env production</div>
                <div className="text-slate-300 pl-4">Building container image for commit 7f8a91c...</div>
                <div className="text-nest-green pl-4">✓ Build completed in 42s</div>
                <div className="text-nest-green pl-4">✓ Health checks passed (HTTP 200 on /healthz)</div>
                <div className="text-white font-bold pl-4">Deployment successful: https://app.cloudnest.io</div>
              </div>

              <div className="pt-4 border-t border-nest-console-border flex items-center justify-between text-xs text-nest-console-muted">
                <span>Supports macOS, Linux, and Windows terminal shells</span>
                <span className="text-nest-cyan font-bold">curl -fsSL https://get.cloudnest.io | sh</span>
              </div>
            </div>
          )}

          {/* Tab 2: Declarative YAML View */}
          {activeTab === 'yaml' && (
            <div className="p-6 font-mono text-xs sm:text-sm space-y-3">
              <div className="text-nest-console-muted text-[11px] select-none pb-2 border-b border-nest-console-border flex justify-between">
                <span># Declarative service specification</span>
                <span>Version: v1.0.0</span>
              </div>

              <pre className="text-slate-200 overflow-x-auto leading-relaxed select-all">
                {yamlConfig}
              </pre>

              <div className="pt-4 border-t border-nest-console-border flex items-center justify-between text-xs text-nest-console-muted">
                <span>Checked directly into your source repository root</span>
                <button
                  onClick={handleCopyYaml}
                  className="text-nest-blue hover:underline"
                >
                  Copy YAML to Clipboard →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

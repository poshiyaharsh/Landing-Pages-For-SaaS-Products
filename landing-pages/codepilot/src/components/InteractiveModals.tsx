import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Github,
  Gitlab,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface InteractiveModalsProps {
  modalType: 'start' | 'signin' | 'docs' | 'team' | null;
  onClose: () => void;
  planName?: string;
}

export const InteractiveModals: React.FC<InteractiveModalsProps> = ({
  modalType,
  onClose,
  planName,
}) => {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [selectedEditor, setSelectedEditor] = useState<'vscode' | 'jetbrains' | 'cli'>('vscode');
  const [teamSize, setTeamSize] = useState(15);
  const [submitted, setSubmitted] = useState(false);

  if (!modalType) return null;

  const copyCommand = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-brand-green/40 bg-codepilot-panel shadow-terminal overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Bar */}
        <div className="h-11 px-4 bg-codepilot-bg border-b border-codepilot-border flex items-center justify-between font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
            <span className="text-codepilot-text font-bold">
              {modalType === 'start' && 'Initialize CodePilot Workspace'}
              {modalType === 'signin' && 'Developer Authentication'}
              {modalType === 'docs' && 'Developer Quickstart Reference'}
              {modalType === 'team' && `Configure ${planName || 'Enterprise'} Plan`}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-codepilot-surface text-codepilot-dim hover:text-codepilot-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* 1. START FREE MODAL */}
          {modalType === 'start' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-codepilot-white mb-1">
                  Start Building with CodePilot
                </h3>
                <p className="text-xs text-codepilot-muted">
                  No credit card required. Free tier includes 2,000 requests/month and complete local AST context.
                </p>
              </div>

              {/* IDE selector */}
              <div>
                <label className="block text-xs font-mono text-codepilot-dim uppercase mb-2">
                  Select your environment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedEditor('vscode')}
                    className={`p-2.5 rounded-lg border font-mono text-xs text-center transition-all ${
                      selectedEditor === 'vscode'
                        ? 'border-brand-green bg-brand-green/10 text-brand-green font-bold'
                        : 'border-codepilot-border bg-codepilot-surface text-codepilot-muted hover:border-codepilot-border-highlight'
                    }`}
                  >
                    VS Code
                  </button>
                  <button
                    onClick={() => setSelectedEditor('jetbrains')}
                    className={`p-2.5 rounded-lg border font-mono text-xs text-center transition-all ${
                      selectedEditor === 'jetbrains'
                        ? 'border-brand-green bg-brand-green/10 text-brand-green font-bold'
                        : 'border-codepilot-border bg-codepilot-surface text-codepilot-muted hover:border-codepilot-border-highlight'
                    }`}
                  >
                    JetBrains
                  </button>
                  <button
                    onClick={() => setSelectedEditor('cli')}
                    className={`p-2.5 rounded-lg border font-mono text-xs text-center transition-all ${
                      selectedEditor === 'cli'
                        ? 'border-brand-green bg-brand-green/10 text-brand-green font-bold'
                        : 'border-codepilot-border bg-codepilot-surface text-codepilot-muted hover:border-codepilot-border-highlight'
                    }`}
                  >
                    Terminal CLI
                  </button>
                </div>
              </div>

              {/* Install CLI Snippet */}
              <div className="p-3.5 rounded-xl bg-[#060709] border border-codepilot-border font-mono text-xs">
                <div className="flex items-center justify-between text-codepilot-dim text-[11px] mb-2">
                  <span>INSTALL COMMAND</span>
                  <button
                    onClick={() => copyCommand('npm i -g @codepilot/cli && codepilot auth')}
                    className="flex items-center gap-1 text-brand-green hover:underline"
                  >
                    {copiedInstall ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-brand-cyan font-bold break-all">
                  npm i -g @codepilot/cli &amp;&amp; codepilot auth
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(true);
                    setTimeout(() => onClose(), 1500);
                  }}
                  className="w-full py-3 rounded-lg bg-brand-green text-codepilot-bg font-bold font-mono text-xs hover:bg-[#15f8a3] transition-colors flex items-center justify-center gap-2 shadow-glow-green"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-codepilot-bg" />
                      <span>Workspace Key Generated!</span>
                    </>
                  ) : (
                    <>
                      <span>Launch Workspace</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* 2. SIGN IN MODAL */}
          {modalType === 'signin' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-codepilot-white mb-1">
                  Sign In to CodePilot
                </h3>
                <p className="text-xs text-codepilot-muted">
                  Authenticate using your version control identity for single-click repo syncing.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    setSubmitted(true);
                    setTimeout(() => onClose(), 1200);
                  }}
                  className="w-full py-3 rounded-lg bg-codepilot-surface hover:bg-codepilot-hover border border-codepilot-border text-xs font-mono text-codepilot-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Continue with GitHub</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(true);
                    setTimeout(() => onClose(), 1200);
                  }}
                  className="w-full py-3 rounded-lg bg-codepilot-surface hover:bg-codepilot-hover border border-codepilot-border text-xs font-mono text-codepilot-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Gitlab className="w-4 h-4 text-[#FC6D26]" />
                  <span>Continue with GitLab</span>
                </button>
              </div>

              <div className="pt-3 border-t border-codepilot-border text-center">
                <span className="text-[11px] font-mono text-codepilot-dim">
                  Or authenticate from terminal using: <code className="text-brand-green">codepilot login</code>
                </span>
              </div>
            </div>
          )}

          {/* 3. DOCS MODAL */}
          {modalType === 'docs' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-codepilot-white mb-1">
                  Developer Documentation
                </h3>
                <p className="text-xs text-codepilot-muted">
                  Quick reference for terminal commands, AST flags, and environment configs.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#060709] border border-codepilot-border">
                  <div className="text-brand-green font-bold">$ codepilot init</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Scans repository root and builds local AST token index.</div>
                </div>

                <div className="p-3 rounded-lg bg-[#060709] border border-codepilot-border">
                  <div className="text-brand-green font-bold">$ codepilot analyze ./src --strict</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Runs AST type checking and flags unhandled exception boundaries.</div>
                </div>

                <div className="p-3 rounded-lg bg-[#060709] border border-codepilot-border">
                  <div className="text-brand-green font-bold">$ codepilot ship --pr</div>
                  <div className="text-[11px] text-codepilot-dim mt-0.5">Executes local test suite and drafts pull request with release notes.</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#faq"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-lg border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-brand-cyan/20 transition-colors"
                >
                  <span>Explore FAQ &amp; Full Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* 4. TEAM / SALES MODAL */}
          {modalType === 'team' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-codepilot-white mb-1">
                  Team &amp; Enterprise Onboarding
                </h3>
                <p className="text-xs text-codepilot-muted">
                  Custom sandbox isolation, SAML SSO, team analytics, and dedicated success engineers.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-codepilot-dim">Team Seats:</span>
                    <span className="text-brand-green font-bold">{teamSize} developers</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-codepilot-dim mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="engineering.lead@company.com"
                    className="w-full p-2.5 rounded bg-codepilot-surface border border-codepilot-border text-codepilot-white focus:outline-none focus:border-brand-green"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(true);
                    setTimeout(() => onClose(), 1500);
                  }}
                  className="w-full py-3 rounded-lg bg-brand-green text-codepilot-bg font-bold font-mono text-xs hover:bg-[#15f8a3] transition-colors flex items-center justify-center gap-2 shadow-glow-green"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-codepilot-bg" />
                      <span>Request Dispatched to Enterprise Engineering!</span>
                    </>
                  ) : (
                    <span>Request Team Sandbox Access</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

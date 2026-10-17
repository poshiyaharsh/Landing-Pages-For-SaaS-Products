import React, { useState } from 'react';
import { X, ArrowRight, Key, Globe, Terminal, CheckCircle2, Shield } from 'lucide-react';

interface WorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const WorkspaceModal: React.FC<WorkspaceModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [workspaceName, setWorkspaceName] = useState('hyperion-gateway');
  const [region, setRegion] = useState('us-east-1');
  const [authScheme, setAuthScheme] = useState('jwt-bearer');
  const [isProvisioning, setIsProvisioning] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProvisioning(true);

    setTimeout(() => {
      setIsProvisioning(false);
      onSuccess(`Workspace '${workspaceName}' provisioned in ${region}. Mock API key issued.`);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0B0F19] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 font-mono">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Provision API Workspace</h3>
            <p className="text-xs text-zinc-400">Deploy an isolated gateway sandbox with mock edge proxy</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Workspace Slug / Domain
            </label>
            <div className="flex items-center rounded-xl bg-slate-900 border border-slate-700 focus-within:border-cyan-400 px-3 py-2 text-xs">
              <span className="text-zinc-500 mr-1">https://api.</span>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                required
                className="bg-transparent text-white focus:outline-none flex-grow font-mono"
                placeholder="my-company"
              />
              <span className="text-zinc-500">.apihub.dev</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Primary Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 px-3 py-2 text-xs text-white focus:outline-none font-mono"
              >
                <option value="us-east-1">us-east-1 (N. Virginia)</option>
                <option value="us-west-2">us-west-2 (Oregon)</option>
                <option value="eu-central-1">eu-central-1 (Frankfurt)</option>
                <option value="ap-southeast-1">ap-southeast-1 (Singapore)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Auth Standard
              </label>
              <select
                value={authScheme}
                onChange={(e) => setAuthScheme(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 px-3 py-2 text-xs text-white focus:outline-none font-mono"
              >
                <option value="jwt-bearer">OAuth2 / Bearer JWT</option>
                <option value="api-key">Hashed API Secret Keys</option>
                <option value="mtls">mTLS Mutual TLS 1.3</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-zinc-400 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Sandbox Policy</span>
            </div>
            <div>&bull; Includes 500,000 simulated monthly requests</div>
            <div>&bull; Automatic OpenAPI 3.1 &amp; Postman collection generation</div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isProvisioning}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-950/40 disabled:opacity-70"
            >
              {isProvisioning ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Provisioning Gateway Cluster...</span>
                </>
              ) : (
                <>
                  <span>Create Developer Sandbox</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[10px] text-zinc-500 text-center mt-2.5">
              * Local client-side simulation. No cloud infrastructure billed.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

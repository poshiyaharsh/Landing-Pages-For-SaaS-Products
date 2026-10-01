import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2, Layers } from 'lucide-react';
import { triggerCreativeBurst } from '../utils/confetti';
import { ShowcaseProject } from '../data/pixelforgeData';

interface ModalProps {
  isOpen: boolean;
  type: 'create' | 'explore' | 'signin' | 'plan' | 'project' | null;
  onClose: () => void;
  planName?: string;
  project?: ShowcaseProject | null;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  type,
  onClose,
  planName,
  project
}) => {
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      triggerCreativeBurst();
    }, 700);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setEmail('');
    setProjectName('');
    onClose();
  };

  const getTitle = () => {
    if (type === 'create') return 'Create Your First Project';
    if (type === 'explore') return 'Explore PixelForge Workspace';
    if (type === 'signin') return 'Sign In to PixelForge Studio';
    if (type === 'plan') return `Unlock: ${planName} Plan`;
    if (type === 'project' && project) return `${project.title} — ${project.category}`;
    return 'PixelForge Creative Studio';
  };

  const getSubtitle = () => {
    if (type === 'create') return 'Instant setup. Prompt your concept, define tokens, and export production assets in minutes.';
    if (type === 'explore') return 'Take a live guided tour of the infinite creative canvas, generative copilot, and token inspectors.';
    if (type === 'signin') return 'Access your team workspaces, custom style models, and saved creative design systems.';
    if (type === 'plan') return 'Get immediate access to unlimited projects, vector exports, and team multiplayer collaboration.';
    if (type === 'project' && project) return `Client: ${project.client} · ${project.highlight}`;
    return 'The intelligent creative production platform.';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-studio-900 border border-studio-border p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient inside modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-neon-violet/15 blur-2xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-studio-muted hover:text-white bg-studio-950 border border-studio-border hover:border-studio-subtle transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-neon-cyan/15 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
              Workspace Initialized
            </h3>
            <p className="text-sm text-studio-muted max-w-sm mx-auto">
              Your creative canvas is ready! We've sent your instant access key and invitation to{' '}
              <span className="text-white font-mono">{email}</span>.
            </p>
            <button
              onClick={handleModalClose}
              className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-neon-violet to-neon-cyan hover:opacity-90 transition-opacity"
            >
              Enter PixelForge Studio
            </button>
          </div>
        ) : type === 'project' && project ? (
          /* Project Inspection Modal Mode */
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-studio-950 border border-studio-border text-[11px] font-mono uppercase text-neon-violet">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Showcase Archive</span>
              </div>
              <h3 className="text-2xl font-display font-black text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                {project.highlight}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-studio-950 border border-studio-border space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-studio-muted">Client:</span>
                <span className="text-white font-bold">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-studio-muted">Deliverable Format:</span>
                <span className="text-neon-cyan">{project.aspect}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-studio-border">
                <span className="text-studio-muted">Palette Tokens:</span>
                <div className="flex items-center gap-1.5">
                  {project.palette.map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                triggerCreativeBurst();
                handleModalClose();
              }}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-neon-violet to-neon-cyan hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span>Fork System to Your Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Standard Lead / Sign-In Form Mode */
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-studio-950 border border-studio-border text-[11px] font-mono uppercase text-neon-violet">
                <Layers className="w-3.5 h-3.5" />
                <span>Instant Provisioning</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                {getTitle()}
              </h3>
              <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-normal">
                {getSubtitle()}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-studio-muted uppercase mb-1.5">
                  Creative Email <span className="text-neon-pink">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="designer@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-studio-950 border border-studio-border text-white placeholder-studio-subtle text-sm focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-colors font-mono"
                />
              </div>

              {type !== 'signin' && (
                <div>
                  <label className="block text-xs font-mono text-studio-muted uppercase mb-1.5">
                    Project / Studio Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Orbit Brand System 2026"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-studio-950 border border-studio-border text-white placeholder-studio-subtle text-sm focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-colors font-mono"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-neon-violet to-neon-cyan hover:opacity-95 active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neon-violet/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing Infinite Canvas…</span>
                  </>
                ) : (
                  <>
                    <span>Launch Studio Workspace</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-1 text-center">
                <p className="text-[11px] font-mono text-studio-subtle">
                  No credit card required · Free 14-day full access
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

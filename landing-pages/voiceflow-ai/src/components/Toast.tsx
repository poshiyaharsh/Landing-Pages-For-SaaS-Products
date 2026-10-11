import React, { useEffect } from 'react';
import { Check, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'info' | 'warning';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm w-full px-4">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 3800);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const icons = {
    success: <Check className="w-3.5 h-3.5 text-vf-cyan" />,
    info: <Info className="w-3.5 h-3.5 text-vf-blue" />,
    warning: <AlertTriangle className="w-3.5 h-3.5 text-vf-amber" />,
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-auto flex items-center justify-between gap-3 bg-vf-surface border border-vf-border px-4 py-3 rounded-lg shadow-cyan-glow animate-fade-in"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vf-surface-elevated flex items-center justify-center border border-vf-border/60">
          {icons[toast.type || 'success']}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold font-mono tracking-wide text-vf-text truncate">
            {toast.title}
          </p>
          {toast.message && (
            <p className="text-[11px] text-vf-text-muted truncate mt-0.5">{toast.message}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-vf-text-muted hover:text-vf-text transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

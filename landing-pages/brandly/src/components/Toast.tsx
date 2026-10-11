import React, { useEffect } from 'react';
import { Check, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
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
    }, 3600);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-auto flex items-center justify-between gap-3 bg-brand-ink text-brand-ivory border border-brand-charcoal/50 px-4 py-3 rounded shadow-2xl animate-fade-in"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-charcoal flex items-center justify-center text-brand-champagne">
          {toast.type === 'info' ? <Info className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-brand-soft-white truncate">
            {toast.title}
          </p>
          {toast.message && (
            <p className="text-[11px] text-brand-taupe truncate">{toast.message}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-brand-taupe hover:text-brand-ivory transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

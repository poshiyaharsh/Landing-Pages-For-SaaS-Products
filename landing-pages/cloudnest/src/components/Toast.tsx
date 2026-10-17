import React from 'react';
import { CheckCircle2, Info, AlertTriangle, X, Terminal } from 'lucide-react';
import { ToastNotification } from '../types';

interface ToastProps {
  toasts: ToastNotification[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-3.5 bg-white border border-nest-border rounded-nest shadow-modal animate-slide-up transition-all text-xs"
        >
          {toast.type === 'blue' && <Terminal className="w-4 h-4 text-nest-blue shrink-0 mt-0.5" />}
          {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-nest-green shrink-0 mt-0.5" />}
          {toast.type === 'warning' && <AlertTriangle className="w-4 h-4 text-nest-amber shrink-0 mt-0.5" />}
          {(!toast.type || toast.type === 'info') && <Info className="w-4 h-4 text-nest-secondary shrink-0 mt-0.5" />}

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-nest-text">{toast.title}</p>
            {toast.description && (
              <p className="text-nest-secondary mt-0.5 leading-relaxed">{toast.description}</p>
            )}
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-nest-muted hover:text-nest-text p-0.5 rounded transition-colors"
            aria-label="Dismiss alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

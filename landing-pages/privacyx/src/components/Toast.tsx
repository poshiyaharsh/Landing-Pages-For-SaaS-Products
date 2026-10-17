import React, { useEffect } from 'react';
import { ShieldCheck, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose, duration = 3200 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border border-teal-500/30 bg-[#111827]/95 text-white shadow-2xl backdrop-blur-md text-xs sm:text-sm font-medium animate-slide-up">
      <div className="p-1 rounded-full bg-teal-500/20 text-teal-400">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

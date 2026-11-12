import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#143651] text-white px-5 py-3 rounded shadow-2xl text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fade-in border border-[#00b0b9]/40 max-w-[90vw]">
      <CheckCircle2 className="w-4 h-4 text-[#00b0b9] flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
};

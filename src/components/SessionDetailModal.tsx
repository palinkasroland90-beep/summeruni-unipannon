import React, { useEffect } from 'react';
import { X, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { Session } from '../types';
import { categoryLabels, weekdays } from '../data/programme';

interface SessionDetailModalProps {
  session: Session | null;
  dayNumber: number;
  isOpen: boolean;
  onClose: () => void;
  onJumpToDay: (dayNumber: number) => void;
}

export const SessionDetailModal: React.FC<SessionDetailModalProps> = ({
  session,
  dayNumber,
  isOpen,
  onClose,
  onJumpToDay,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !session) return null;

  const weekdayName = weekdays[(dayNumber - 1) % 7];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d2b46]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm border border-[#cfdee3] shadow-2xl max-w-[620px] w-full p-6 sm:p-10 relative overflow-hidden text-[#193c55]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="session-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#143651] rounded hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#285780]">
            DAY {String(dayNumber).padStart(2, '0')} ({weekdayName.toUpperCase()})
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#f6f5f1] text-[#87682c] border border-[#e7decd] rounded">
            {categoryLabels[session.category] || session.category}
          </span>
        </div>

        {/* Modal Title */}
        <h2
          id="session-modal-title"
          className="text-2xl sm:text-3xl font-bold text-[#143651] tracking-tight mb-4 leading-snug"
        >
          {session.title}
        </h2>

        {/* Time Strip */}
        <div className="flex items-center gap-2 py-3 border-y border-[#dce4e8] text-xs font-semibold text-[#285780] mb-6">
          <Clock className="w-4 h-4 text-[#00b0b9]" />
          <span>Session Time: {session.time}</span>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base text-[#657886] leading-relaxed">
            {session.description}
          </p>

          {session.tentative && (
            <div className="flex items-start gap-2.5 p-3.5 bg-[#f1fbf9] border-l-2 border-[#00b0b9] text-xs text-[#00757a] rounded-r">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                Schedule, venue booking and exact 2027 festival opening hours are subject to final confirmation.
              </span>
            </div>
          )}

          {session.track && (
            <p className="text-xs font-semibold text-[#285780]">
              Academic Faculty Track: {session.track}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onJumpToDay(dayNumber);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00b0b9] hover:bg-[#61d6d7] text-[#093b49] text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shadow-sm"
          >
            <span>View Full Day Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

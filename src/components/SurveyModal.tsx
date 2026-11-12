import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import {
  programmeInterests,
  paceOptions,
  languageOptions,
  academicTrackOptions,
  learningFormatOptions,
} from '../data/surveys';

interface SurveyModalProps {
  kind: 'programme' | 'academic' | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (kind: 'programme' | 'academic') => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({
  kind,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [step, setStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Form State
  const [programmeState, setProgrammeState] = useState({
    interests: [] as string[],
    pace: 'balanced',
    language: 'yes',
    comment: '',
  });

  const [academicState, setAcademicState] = useState({
    topic: 'gtk',
    format: 'interactive',
    comment: '',
  });

  // Load existing saved values from localStorage if available
  useEffect(() => {
    if (kind && isOpen) {
      setStep(0);
      setIsCompleted(false);
      setErrorMessage('');

      try {
        const saved = localStorage.getItem(`pannon-summer-2027-survey-${kind}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (kind === 'programme') {
            setProgrammeState({
              interests: parsed.interests || [],
              pace: parsed.pace || 'balanced',
              language: parsed.language || 'yes',
              comment: parsed.comment || '',
            });
          } else {
            setAcademicState({
              topic: parsed.topic || 'gtk',
              format: parsed.format || 'interactive',
              comment: parsed.comment || '',
            });
          }
        }
      } catch {
        // ignore JSON parse error
      }
    }
  }, [kind, isOpen]);

  // Handle escape key
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

  if (!isOpen || !kind) return null;

  const toggleInterest = (val: string) => {
    setProgrammeState((prev) => {
      const exists = prev.interests.includes(val);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== val)
          : [...prev.interests, val],
      };
    });
  };

  const handleNext = () => {
    setErrorMessage('');
    if (kind === 'programme') {
      if (step === 0 && programmeState.interests.length === 0) {
        setErrorMessage('Please select at least one experience or destination to proceed.');
        return;
      }
    }

    if (step < 2) {
      setStep(step + 1);
    } else {
      // Save to localStorage
      try {
        const payload = kind === 'programme' ? programmeState : academicState;
        localStorage.setItem(
          `pannon-summer-2027-survey-${kind}`,
          JSON.stringify({ ...payload, submittedAt: new Date().toISOString() })
        );
      } catch (err) {
        console.error('LocalStorage write failed', err);
      }
      setIsCompleted(true);
      onSuccess(kind);
    }
  };

  const handleBack = () => {
    setErrorMessage('');
    if (step > 0) setStep(step - 1);
  };

  const progressPercent = isCompleted ? 100 : Math.round(((step + 1) / 3) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d2b46]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm border border-[#cfdee3] shadow-2xl max-w-[660px] w-full p-6 sm:p-9 relative overflow-hidden text-[#193c55]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#285780]">
            {kind === 'programme'
              ? 'SURVEY 01 // PROGRAMME & EXPERIENCE PREVIEW'
              : 'SURVEY 02 // ACADEMIC & FACULTY PREFERENCES'}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-[#143651] rounded transition-colors"
            aria-label="Close survey"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#e5edef] rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-[#00b0b9] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Content Body */}
        {!isCompleted ? (
          <div>
            {/* Step Counter */}
            <div className="flex items-center justify-between text-xs text-[#657886] mb-3">
              <span className="font-bold text-[#285780]">Step {step + 1} of 3</span>
              <span>Your responses stay in your local browser</span>
            </div>

            {/* PROGRAMME SURVEY STEPS */}
            {kind === 'programme' && (
              <>
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      What would you love to explore?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657886]">
                      Select all destinations and cultural elements that interest you:
                    </p>
                    <div className="grid grid-cols-1 gap-2.5 max-h-[290px] overflow-y-auto pr-1">
                      {programmeInterests.map((opt) => {
                        const isChecked = programmeState.interests.includes(opt.value);
                        return (
                          <label
                            key={opt.value}
                            className={`flex items-center gap-3 p-3.5 border rounded cursor-pointer transition-all text-xs sm:text-sm ${
                              isChecked
                                ? 'border-[#00b0b9] bg-[#f1fbf9] font-semibold text-[#143651]'
                                : 'border-[#cedce2] hover:bg-slate-50 text-[#657886]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleInterest(opt.value)}
                              className="w-4 h-4 text-[#285780] accent-[#285780] rounded"
                            />
                            <span>{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-[#143651] mb-1">
                        Find your own travel rhythm
                      </h3>
                      <p className="text-xs text-[#657886] mb-3">
                        How active do you prefer your summer days to be?
                      </p>
                      <div className="space-y-2">
                        {paceOptions.map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex items-start gap-3 p-3 border rounded cursor-pointer text-xs ${
                              programmeState.pace === opt.value
                                ? 'border-[#00b0b9] bg-[#f1fbf9] font-medium'
                                : 'border-[#cedce2] hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="pace"
                              value={opt.value}
                              checked={programmeState.pace === opt.value}
                              onChange={() =>
                                setProgrammeState({ ...programmeState, pace: opt.value })
                              }
                              className="mt-0.5 accent-[#285780]"
                            />
                            <div>
                              <strong className="block text-[#143651]">{opt.label}</strong>
                              <span className="text-[#657886] text-[11px]">{opt.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#143651] mb-1">
                        Language & Cultural Practice
                      </h4>
                      <div className="space-y-2">
                        {languageOptions.map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex items-start gap-3 p-3 border rounded cursor-pointer text-xs ${
                              programmeState.language === opt.value
                                ? 'border-[#00b0b9] bg-[#f1fbf9] font-medium'
                                : 'border-[#cedce2] hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="language"
                              value={opt.value}
                              checked={programmeState.language === opt.value}
                              onChange={() =>
                                setProgrammeState({ ...programmeState, language: opt.value })
                              }
                              className="mt-0.5 accent-[#285780]"
                            />
                            <div>
                              <strong className="block text-[#143651]">{opt.label}</strong>
                              <span className="text-[#657886] text-[11px]">{opt.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#143651]">
                      Anything else on your mind?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657886]">
                      Feel free to share dietary requirements, accessibility needs, or specific questions about Hungary:
                    </p>
                    <textarea
                      value={programmeState.comment}
                      onChange={(e) =>
                        setProgrammeState({ ...programmeState, comment: e.target.value })
                      }
                      rows={5}
                      placeholder="e.g. Vegetarian diet, interested in photography locations, questions about airport pickup..."
                      className="w-full p-3.5 border border-[#c1d4dd] rounded text-sm text-[#193c55] focus:border-[#00b0b9] focus:ring-1 focus:ring-[#00b0b9] outline-none"
                    />
                  </div>
                )}
              </>
            )}

            {/* ACADEMIC SURVEY STEPS */}
            {kind === 'academic' && (
              <>
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      Which academic track calls to you?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657886]">
                      Choose the primary faculty theme aligned with your study goals:
                    </p>
                    <div className="space-y-3">
                      {academicTrackOptions.map((opt) => (
                        <label
                          key={opt.value}
                          className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition-all ${
                            academicState.topic === opt.value
                              ? 'border-[#00b0b9] bg-[#f1fbf9]'
                              : 'border-[#cedce2] hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="topic"
                            value={opt.value}
                            checked={academicState.topic === opt.value}
                            onChange={() =>
                              setAcademicState({ ...academicState, topic: opt.value })
                            }
                            className="mt-1 accent-[#285780]"
                          />
                          <div>
                            <strong className="block text-sm font-bold text-[#143651]">
                              {opt.label}
                            </strong>
                            <p className="text-xs text-[#657886] mt-0.5">{opt.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      Preferred learning format
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657886]">
                      What classroom and lab environment do you learn best in?
                    </p>
                    <div className="space-y-3">
                      {learningFormatOptions.map((opt) => (
                        <label
                          key={opt.value}
                          className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition-all ${
                            academicState.format === opt.value
                              ? 'border-[#00b0b9] bg-[#f1fbf9]'
                              : 'border-[#cedce2] hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="format"
                            value={opt.value}
                            checked={academicState.format === opt.value}
                            onChange={() =>
                              setAcademicState({ ...academicState, format: opt.value })
                            }
                            className="mt-1 accent-[#285780]"
                          />
                          <div>
                            <strong className="block text-sm font-bold text-[#143651]">
                              {opt.label}
                            </strong>
                            <p className="text-xs text-[#657886] mt-0.5">{opt.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#143651]">
                      Academic goals & research questions
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657886]">
                      What specific case studies or technologies would you like our professors to cover?
                    </p>
                    <textarea
                      value={academicState.comment}
                      onChange={(e) =>
                        setAcademicState({ ...academicState, comment: e.target.value })
                      }
                      rows={5}
                      placeholder="e.g. Interested in LLM deployment, green chemical synthesis, European carbon markets..."
                      className="w-full p-3.5 border border-[#c1d4dd] rounded text-sm text-[#193c55] focus:border-[#00b0b9] focus:ring-1 focus:ring-[#00b0b9] outline-none"
                    />
                  </div>
                )}
              </>
            )}

            {/* Error Message */}
            {errorMessage && (
              <p className="text-xs text-[#a73a36] font-medium pt-2 animate-fade-in">
                {errorMessage}
              </p>
            )}

            {/* Footer Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded border border-[#cbd4da] ${
                  step === 0
                    ? 'opacity-30 cursor-not-allowed text-slate-400'
                    : 'text-[#285780] hover:bg-slate-50'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#285780] hover:bg-[#143651] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm"
              >
                <span>{step === 2 ? 'Save Responses' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#e2f8f3] text-[#08796b] flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#143651]">
                Thank you for sharing your thoughts!
              </h3>
              <p className="text-xs sm:text-sm text-[#657886] max-w-[440px] mx-auto leading-relaxed">
                Your responses have been saved in your browser. They will directly assist the University of Pannonia academic team in refining the 2027 Summer University.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#00b0b9] hover:bg-[#61d6d7] text-[#093b49] text-xs font-bold uppercase tracking-wider rounded"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

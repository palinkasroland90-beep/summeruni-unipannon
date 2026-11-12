import React, { useState, useEffect } from 'react';
import { Download, Clock, ChevronRight, Info } from 'lucide-react';
import { programmeData, weekdays, dayThemes, categoryLabels } from '../data/programme';
import { Session } from '../types';

interface ProgrammeProps {
  activeDay?: number;
  onSelectSession: (session: Session, dayNumber: number) => void;
  onDownloadProgramme: () => void;
}

export const Programme: React.FC<ProgrammeProps> = ({
  activeDay,
  onSelectSession,
  onDownloadProgramme,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<1 | 2>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  // Sync when activeDay prop changes from outside (e.g. from Academics or Modal jump)
  useEffect(() => {
    if (activeDay) {
      setSelectedWeek(activeDay <= 7 ? 1 : 2);
      setSelectedDay(activeDay);
    }
  }, [activeDay]);

  // Switch week helper
  const handleWeekChange = (w: 1 | 2) => {
    setSelectedWeek(w);
    setSelectedDay(w === 1 ? 1 : 8);
  };

  const startDay = selectedWeek === 1 ? 1 : 8;
  const daysInWeek = Array.from({ length: 7 }, (_, i) => startDay + i);
  const currentSessions = programmeData[String(selectedDay)] || [];

  const getBadgeClass = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-[#285780]/10 text-[#285780] border-[#285780]/20';
      case 'learning':
      case 'culture':
        return 'bg-[#fcfaf5] text-[#87682c] border-[#e7decd]';
      case 'optional':
        return 'bg-[#f1fbf9] text-[#00757a] border-[#b0deda]';
      case 'meal':
        return 'bg-[#f6f6f6] text-[#7a858b] border-[#e6e6e6]';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="programme" className="py-20 md:py-28 bg-[#f6f5f1] border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
              <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
                14-DAY CURRICULUM & ITINERARY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight">
              A little structure. <span className="text-[#285780]">A lot to discover.</span>
            </h2>
          </div>

          {/* Download button */}
          <button
            onClick={onDownloadProgramme}
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-slate-50 text-[#285780] border border-[#cbd4da] text-xs font-bold tracking-wide uppercase transition-all rounded-sm shadow-sm hover:shadow"
          >
            <Download className="w-4 h-4 text-[#00b0b9]" />
            <span>Download Programme (.TXT)</span>
          </button>
        </div>

        {/* Toolbar: Week switcher & Legend */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#cbd4da] mb-8">
          {/* Segmented Week Control */}
          <div className="flex items-center gap-2 bg-[#eeede8] p-1 rounded-sm border border-[#cbd4da]">
            <button
              onClick={() => handleWeekChange(1)}
              className={`px-5 py-2.5 text-xs font-bold transition-all rounded-sm ${
                selectedWeek === 1
                  ? 'bg-[#285780] text-white shadow-sm'
                  : 'text-[#657886] hover:text-[#193c55]'
              }`}
            >
              Week 1 <span className="font-normal opacity-80">(Days 01–07)</span>
            </button>
            <button
              onClick={() => handleWeekChange(2)}
              className={`px-5 py-2.5 text-xs font-bold transition-all rounded-sm ${
                selectedWeek === 2
                  ? 'bg-[#285780] text-white shadow-sm'
                  : 'text-[#657886] hover:text-[#193c55]'
              }`}
            >
              Week 2 <span className="font-normal opacity-80">(Days 08–14)</span>
            </button>
          </div>

          {/* Category Legend */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#657886]">
            <span className="font-bold uppercase tracking-wider text-[#193c55]">Legend:</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#285780]"></span>
              Academic Lectures
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b48948]"></span>
              Culture & Excursions
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00b0b9]"></span>
              Optional & Evening
            </span>
          </div>
        </div>

        {/* Main Agenda Grid (Sidebar Days + Main Sessions List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-[#cbd4da] shadow-sm rounded-sm overflow-hidden min-h-[580px]">
          {/* Left Days List (horizontal scroll on mobile, vertical list on desktop) */}
          <div className="lg:col-span-4 bg-[#eeede8] flex lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-[#cbd4da]">
            {daysInWeek.map((dayNum, idx) => {
              const isSelected = dayNum === selectedDay;
              const weekdayName = weekdays[idx % 7];
              const themeName = dayThemes[dayNum - 1];

              return (
                <button
                  key={dayNum}
                  onClick={() => setSelectedDay(dayNum)}
                  className={`flex-shrink-0 lg:flex-shrink flex items-center justify-between p-4 sm:p-5 text-left border-r lg:border-r-0 border-b border-[#d9ddd9] transition-all relative ${
                    isSelected
                      ? 'bg-white text-[#143651] font-bold'
                      : 'hover:bg-white/60 text-[#657886]'
                  }`}
                >
                  {/* Left accent bar for selected item */}
                  {isSelected && (
                    <span className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#00b0b9]" />
                  )}

                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#7e8d92] block">
                      {weekdayName}
                    </span>
                    <strong className="text-base font-bold text-[#143651] block tracking-tight">
                      Day {String(dayNum).padStart(2, '0')}
                    </strong>
                    <span className="text-xs text-[#77868b] line-clamp-1 font-normal">
                      {themeName}
                    </span>
                  </div>

                  <ChevronRight
                    className={`hidden lg:block w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#285780] translate-x-0.5' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Sessions Container */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Day Header */}
              <div className="flex items-center justify-between border-b border-[#dce4e8] pb-6 mb-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#285780] block mb-1">
                    WEEK {String(selectedWeek).padStart(2, '0')} / {weekdays[(selectedDay - 1) % 7].toUpperCase()}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#143651] tracking-tight">
                    {dayThemes[selectedDay - 1]}
                  </h3>
                </div>
                <span className="text-4xl sm:text-5xl font-light text-[#c6d8e1] tracking-tighter">
                  {String(selectedDay).padStart(2, '0')}
                </span>
              </div>

              {/* Sessions List */}
              <div className="space-y-3">
                {currentSessions.length > 0 ? (
                  currentSessions.map((session) => (
                    <div
                      key={session.id}
                      onClick={() => onSelectSession(session, selectedDay)}
                      className="group p-4 sm:p-5 rounded border border-transparent hover:border-[#cbd4da] hover:bg-[#f8fbfc] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#71818c] min-w-[100px] pt-0.5">
                          <Clock className="w-3.5 h-3.5 text-[#00b0b9]" />
                          <span>{session.time}</span>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-[#193c55] group-hover:text-[#285780] transition-colors">
                            {session.title}
                          </h4>
                          <p className="text-xs text-[#657886] line-clamp-2 max-w-[500px]">
                            {session.description}
                          </p>
                          <div className="pt-1">
                            <span
                              className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border rounded ${getBadgeClass(
                                session.category
                              )}`}
                            >
                              {categoryLabels[session.category] || session.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-[#285780] group-hover:translate-x-1 transition-transform self-end sm:self-center">
                        <span className="hidden sm:inline">Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16 text-[#657886]">
                    <Info className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                    <p>No scheduled sessions found for this day.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom footnote hint */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#7c8c96]">
              <span>Click any session card for complete descriptions, venues and highlights.</span>
              <span className="hidden sm:inline">Subject to final confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

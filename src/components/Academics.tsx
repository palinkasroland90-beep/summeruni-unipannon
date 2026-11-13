import React, { useState } from 'react';
import { facultiesData } from '../data/faculties';
import { Check, ArrowRight, BookOpen } from 'lucide-react';

interface AcademicsProps {
  onJumpToDay: (dayNumber: number) => void;
}

const facultyBgColors: Record<'gtk' | 'mik' | 'mk', string> = {
  gtk: '#272945',
  mk: '#7F2A21',
  mik: '#671C90',
};

const facultyLogos: Record<'gtk' | 'mik' | 'mk', string> = {
  gtk: '/images/gtk-logo.svg',
  mik: '/images/mik-logo.svg',
  mk: '/images/mk-logo.svg',
};

export const Academics: React.FC<AcademicsProps> = ({ onJumpToDay }) => {
  const [activeFacultyKey, setActiveFacultyKey] = useState<'gtk' | 'mik' | 'mk'>('gtk');
  const faculty = facultiesData[activeFacultyKey];

  return (
    <section id="academics" className="py-20 md:py-28 bg-white border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
            <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
              ACADEMIC EXCELLENCE & FACULTIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight mb-4">
            New ideas. <span className="text-[#285780]">Different perspectives.</span>
          </h2>
          <p className="text-base text-[#657886] leading-relaxed">
            Our curriculum unites three prestigious faculties of the University of Pannonia, providing international students with an interdisciplinary understanding of European business, artificial intelligence, and sustainable green engineering.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-3 border border-[#dce4e8] bg-slate-50/50 rounded-t-sm overflow-hidden">
          {(['gtk', 'mik', 'mk'] as const).map((key) => {
            const f = facultiesData[key];
            const isActive = activeFacultyKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFacultyKey(key)}
                className={`py-4 sm:py-5 px-3 sm:px-6 text-left transition-all relative border-b-2 ${
                  isActive
                    ? 'bg-white text-[#285780] font-bold border-[#00b0b9] shadow-sm'
                    : 'text-[#657886] hover:bg-white/60 border-transparent'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-sm sm:text-base font-bold">{f.code}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {key.toUpperCase()}
                  </span>
                </div>
                <span className="hidden md:block text-xs font-normal text-slate-500 truncate mt-0.5">
                  {f.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Faculty Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-[#dce4e8] rounded-b-sm overflow-hidden shadow-sm">
          {/* Visual Left Banner */}
          <div
            className="lg:col-span-5 text-white p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden min-h-[320px] transition-colors duration-300"
            style={{ backgroundColor: facultyBgColors[activeFacultyKey] }}
          >
            {/* SVG Background Art */}
            <svg
              className="absolute right-[-40px] top-[-20px] w-[340px] h-[340px] stroke-white/20 fill-none stroke-[1.5] pointer-events-none"
              viewBox="0 0 300 300"
              dangerouslySetInnerHTML={{ __html: faculty.art }}
            />

            <div className="relative z-10">
              <img
                src={facultyLogos[activeFacultyKey]}
                alt={`${faculty.code} - ${faculty.name}`}
                className="h-20 sm:h-24 w-auto object-contain object-left"
              />
            </div>

            <div className="relative z-10 pt-12">
              <span className="text-xl sm:text-2xl font-light text-white/95 leading-snug block">
                {faculty.name}
              </span>
            </div>
          </div>

          {/* Details Right Column */}
          <div className="lg:col-span-7 bg-[#f9faf9] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#285780] mb-3">
                <BookOpen className="w-4 h-4 text-[#00b0b9]" />
                <span>Curriculum Overview</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#143651] tracking-tight mb-4">
                {faculty.name}
              </h3>

              <p className="text-sm sm:text-base text-[#657886] leading-relaxed mb-6">
                {faculty.text}
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {faculty.meta.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#dce4e8] text-xs font-semibold text-[#285780] rounded-sm shadow-2xs"
                  >
                    <Check className="w-3.5 h-3.5 text-[#00b0b9]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* 3 Pillars / Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#dce4e8]">
                {faculty.features.map((feat, i) => (
                  <div key={i} className="space-y-1.5">
                    <strong className="text-xs font-bold text-[#143651] uppercase tracking-wider block">
                      {feat.title}
                    </strong>
                    <p className="text-xs text-[#657886] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump to agenda link */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={() => onJumpToDay(3)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#285780] hover:text-[#007d83] transition-colors group"
              >
                <span>Jump to academic sessions in agenda (Day 03)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

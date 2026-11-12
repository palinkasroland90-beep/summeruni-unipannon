import React, { useState } from 'react';
import {
  cultureDiscoveries,
  optionalActivities,
  experienceArtSvg,
} from '../data/experiences';
import { DiscoveryItem } from '../types';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ExperiencesProps {
  onSelectExperience: (item: DiscoveryItem) => void;
  onJumpToDay: (dayNumber: number) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({
  onSelectExperience,
  onJumpToDay,
}) => {
  const [filterMode, setFilterMode] = useState<'culture' | 'optional'>('culture');
  const items = filterMode === 'culture' ? cultureDiscoveries : optionalActivities;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'teal':
        return 'bg-[#d8efee] text-[#367b80]';
      case 'sand':
        return 'bg-[#ece6d9] text-[#967449]';
      case 'green':
        return 'bg-[#dfe9e0] text-[#527b5b]';
      case 'gold':
        return 'bg-[#fbf4e6] text-[#b48948]';
      case 'blue':
      default:
        return 'bg-[#dce8f0] text-[#285780]';
    }
  };

  return (
    <section id="experiences" className="py-20 md:py-28 bg-[#f6f5f1] border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
              <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
                CULTURAL & REGIONAL DISCOVERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight">
              Meet the place. <span className="text-[#285780]">Make the memories.</span>
            </h2>
          </div>

          {/* Filter switcher */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-sm border border-[#cbd4da] shadow-sm">
            <button
              onClick={() => setFilterMode('culture')}
              className={`px-4 py-2 text-xs font-bold transition-all rounded-sm ${
                filterMode === 'culture'
                  ? 'bg-[#285780] text-white'
                  : 'text-[#657886] hover:text-[#193c55]'
              }`}
            >
              Culture & Heritage ({cultureDiscoveries.length})
            </button>
            <button
              onClick={() => setFilterMode('optional')}
              className={`px-4 py-2 text-xs font-bold transition-all rounded-sm ${
                filterMode === 'optional'
                  ? 'bg-[#285780] text-white'
                  : 'text-[#657886] hover:text-[#193c55]'
              }`}
            >
              Optional Activities ({optionalActivities.length})
            </button>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectExperience(item)}
              className="bg-white border border-[#dde1e1] rounded-sm overflow-hidden flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
            >
              {/* Visual Art Header */}
              <div
                className={`h-36 relative overflow-hidden flex flex-col justify-between p-5 transition-colors ${getColorClasses(
                  item.color
                )}`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-current">
                    Day {String(item.day).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-bold opacity-75">
                    {filterMode === 'culture' ? 'Excursion' : 'Evening Event'}
                  </span>
                </div>

                {/* Vector SVG line illustration */}
                <svg
                  className="absolute right-3 bottom-0 w-44 h-28 stroke-current fill-none stroke-[1.2] opacity-85 group-hover:scale-105 transition-transform"
                  viewBox="0 0 204 120"
                  dangerouslySetInnerHTML={{
                    __html: experienceArtSvg[item.art] || experienceArtSvg.city,
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#143651] tracking-tight group-hover:text-[#285780] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#657886] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#285780]">
                  <span>Explore this experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intercultural Language & Gastronomy Banner */}
        <div className="bg-white border border-[#cbd8db] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#d8efee] text-[#087e85] flex items-center justify-center flex-shrink-0 shadow-inner">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#143651] mb-1">
                Intercultural Language & Food Evenings
              </h3>
              <p className="text-xs sm:text-sm text-[#657886] max-w-[620px] leading-relaxed">
                Connect with local Hungarian students through structured language exchanges, shared dinners, folk dance workshops, and joint cooking sessions.
              </p>
            </div>
          </div>

          <button
            onClick={() => onJumpToDay(8)}
            className="flex-shrink-0 px-5 py-3 border border-[#285780] text-[#285780] hover:bg-[#285780] hover:text-white text-xs font-bold uppercase tracking-wider transition-all rounded-sm flex items-center gap-2"
          >
            <span>View Student Evening (Day 08)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

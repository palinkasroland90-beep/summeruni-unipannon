import React, { useState, useEffect } from 'react';
import {
  dailyRhythm,
  hungarianDishes,
  recommendedAccommodations,
  HungarianDish,
} from '../data/practical';
import {
  Clock,
  UtensilsCrossed,
  Building2,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  X,
  Users,
} from 'lucide-react';

export const DailyEssentials: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<HungarianDish | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDish(null);
    };
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDish]);

  return (
    <section id="essentials" className="py-20 md:py-28 bg-white border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
            <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
              DAILY RHYTHM, CUISINE & ACCOMMODATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight mb-4">
            Live like a local. <span className="text-[#285780]">Feel at home.</span>
          </h2>
          <p className="text-base text-[#657886] leading-relaxed">
            Get a feel for your everyday routine in Veszprém, discover classic Hungarian dishes with simple recipes to try yourself, and explore recommended accommodation options.
          </p>
        </div>

        {/* 3-Column Unified Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Block 1: Typical Daily Rhythm */}
          <div className="bg-[#f6f5f1] border border-[#dce4e8] p-6 sm:p-7 rounded-sm flex flex-col">
            <div className="flex items-center gap-2 mb-5 text-[#285780]">
              <Clock className="w-4 h-4 text-[#00b0b9]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#143651]">
                Typical Daily Rhythm
              </h3>
            </div>

            <div className="space-y-4 flex-1">
              {dailyRhythm.map((slot, i) => (
                <div
                  key={i}
                  className="border-b border-[#dce4e8] last:border-0 pb-3.5 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2 text-xs mb-1">
                    <strong className="text-[#143651] font-bold">{slot.label}</strong>
                    <span className="text-[#285780] font-mono text-[11px] font-semibold flex-shrink-0">
                      {slot.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#657886] leading-relaxed">
                    {slot.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: Typical Hungarian Dishes */}
          <div className="bg-[#f6f5f1] border border-[#dce4e8] p-6 sm:p-7 rounded-sm flex flex-col">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2 text-[#285780]">
                <UtensilsCrossed className="w-4 h-4 text-[#00b0b9]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#143651]">
                  Typical Hungarian Dishes
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#007d83]">
                Click for recipe
              </span>
            </div>

            <div className="space-y-3.5 flex-1">
              {hungarianDishes.map((dish) => (
                <button
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className="w-full text-left flex items-start gap-3.5 border-b border-[#dce4e8] last:border-0 pb-3.5 last:pb-0 group"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-sm object-cover flex-shrink-0 border border-[#dce4e8] group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <strong className="text-xs text-[#143651] font-bold group-hover:text-[#285780] transition-colors truncate">
                        {dish.name}
                      </strong>
                      <ChevronRight className="w-3.5 h-3.5 text-[#00b0b9] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#285780] block mb-1">
                      {dish.subtitle}
                    </span>
                    <p className="text-[11px] text-[#657886] leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Block 3: Recommended Accommodation */}
          <div className="bg-[#f6f5f1] border border-[#dce4e8] p-6 sm:p-7 rounded-sm flex flex-col">
            <div className="flex items-center gap-2 mb-5 text-[#285780]">
              <Building2 className="w-4 h-4 text-[#00b0b9]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#143651]">
                Recommended Accommodation
              </h3>
            </div>

            <div className="space-y-4 flex-1">
              {recommendedAccommodations.map((hotel, i) => (
                <div
                  key={i}
                  className="border-b border-[#dce4e8] last:border-0 pb-3.5 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    {hotel.url ? (
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#143651] hover:text-[#285780] font-bold transition-colors group"
                      >
                        <span>{hotel.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#00b0b9] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <strong className="text-xs text-[#143651] font-bold">
                        {hotel.name}
                      </strong>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#285780] bg-white px-2 py-0.5 border border-[#dce4e8] rounded flex-shrink-0">
                      {hotel.category}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#007d83] mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{hotel.location}</span>
                  </div>
                  <p className="text-[11px] text-[#657886] leading-relaxed">
                    {hotel.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Recipe Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d2b46]/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="bg-white rounded-sm border border-[#cfdee3] shadow-2xl max-w-[600px] w-full max-h-[90vh] overflow-y-auto relative text-[#193c55]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="recipe-modal-title"
          >
            {/* Dish Header Photo */}
            <div className="relative h-52 sm:h-60 overflow-hidden bg-[#143651]">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b273d]/90 via-[#0b273d]/25 to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#00b0b9] block mb-1">
                    HUNGARIAN RECIPE · {selectedDish.subtitle.toUpperCase()}
                  </span>
                  <h2
                    id="recipe-modal-title"
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                  >
                    {selectedDish.name}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-[#143651] rounded-full shadow transition-colors"
                aria-label="Close recipe dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Recipe Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-[#657886] leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Quick Meta */}
              <div className="flex flex-wrap items-center gap-4 py-3 border-y border-[#dce4e8] text-xs font-semibold text-[#285780]">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#00b0b9]" />
                  <span>Prep & Cook: {selectedDish.prepTime}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#00b0b9]" />
                  <span>Yield: {selectedDish.servings}</span>
                </span>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#143651] mb-3">
                  Ingredients
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#657886]">
                  {selectedDish.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b0b9] mt-1.5 flex-shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Simple Preparation Steps */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#143651] mb-3">
                  Simple Preparation
                </h3>
                <ol className="space-y-2.5 text-xs sm:text-sm text-[#657886]">
                  {selectedDish.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#dce8f0] text-[#285780] text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

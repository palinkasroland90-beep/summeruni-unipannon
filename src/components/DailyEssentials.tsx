import React, { useState, useEffect, useRef } from 'react';
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
  ChevronLeft,
  ChevronRight,
  X,
  Users,
} from 'lucide-react';

interface CarouselSlideMeta {
  id: string;
  step: string;
  title: string;
  subtext: string;
  Icon: React.FC<{ className?: string }>;
}

const SLIDE_META: CarouselSlideMeta[] = [
  {
    id: 'accommodation',
    step: '01',
    title: 'Recommended Accommodation',
    subtext: `${recommendedAccommodations.length} partner hotels`,
    Icon: Building2,
  },
  {
    id: 'rhythm',
    step: '02',
    title: 'Typical Daily Rhythm',
    subtext: `${dailyRhythm.length} daily blocks`,
    Icon: Clock,
  },
  {
    id: 'dishes',
    step: '03',
    title: 'Typical Hungarian Dishes',
    subtext: `${hungarianDishes.length} dishes & recipes`,
    Icon: UtensilsCrossed,
  },
];

export const DailyEssentials: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<HungarianDish | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => setActiveSlide((prev) => (prev + 2) % 3);
  const goNext = () => setActiveSlide((prev) => (prev + 1) % 3);

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

  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (selectedDish) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  };

  return (
    <section id="essentials" className="py-20 md:py-28 bg-white border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-[760px] mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
            <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
              ACCOMMODATION, DAILY RHYTHM & CUISINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight mb-4">
            Live like a local. <span className="text-[#285780]">Feel at home.</span>
          </h2>
          <p className="text-base text-[#657886] leading-relaxed">
            Explore recommended hotels, browse our daily schedule rhythm, and discover classic Hungarian dishes with simple recipes in comfort.
          </p>
        </div>

        {/* Top Carousel Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 flex-1">
            {SLIDE_META.map((slide, idx) => {
              const isActive = activeSlide === idx;
              const SlideIcon = slide.Icon;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#285780] text-white border-[#285780] shadow-sm'
                      : 'bg-[#f6f5f1] text-[#143651] border-[#dce4e8] hover:border-[#285780]/50 hover:bg-white'
                  }`}
                >
                  <SlideIcon
                    className={`w-4 h-4 flex-shrink-0 ${
                      isActive ? 'text-[#00b0b9]' : 'text-[#285780]'
                    }`}
                  />
                  <div className="min-w-0">
                    <span className="text-sm font-bold block leading-tight truncate">
                      {slide.step}. {slide.title}
                    </span>
                    <span
                      className={`text-xs block mt-0.5 ${
                        isActive ? 'text-white/80' : 'text-[#657886]'
                      }`}
                    >
                      {slide.subtext}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2 flex-shrink-0">
            <span className="text-xs font-bold text-[#657886] tabular-nums mr-1">
              {activeSlide + 1} / 3
            </span>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-[#cbd4da] bg-white text-[#143651] hover:bg-[#285780] hover:text-white hover:border-[#285780] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-[#cbd4da] bg-white text-[#143651] hover:bg-[#285780] hover:text-white hover:border-[#285780] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden rounded-sm border border-[#dce4e8] bg-[#f6f5f1]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Daily rhythm, Hungarian dishes and accommodation"
          onKeyDown={handleCarouselKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Slide 0: Recommended Accommodation */}
            <div
              className="w-full flex-shrink-0 p-6 sm:p-8 md:p-10"
              aria-hidden={activeSlide !== 0}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#dce4e8]">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#00b0b9] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      Recommended Accommodation
                    </h3>
                    <p className="text-sm text-[#657886] mt-0.5">
                      Trusted hotel and campus residence options across Veszprém and Lake Balaton.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {recommendedAccommodations.map((hotel, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#dce4e8] p-6 rounded-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        {hotel.url ? (
                          <a
                            href={hotel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={activeSlide === 0 ? 0 : -1}
                            className="inline-flex items-center gap-1.5 text-lg font-bold text-[#143651] hover:text-[#285780] transition-colors group"
                          >
                            <span>{hotel.name}</span>
                            <ArrowUpRight className="w-4 h-4 text-[#00b0b9] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <strong className="text-lg text-[#143651] font-bold">
                            {hotel.name}
                          </strong>
                        )}
                        <span className="text-xs font-bold uppercase tracking-wider text-[#285780] bg-[#f6f5f1] px-2.5 py-1 border border-[#dce4e8] rounded-sm flex-shrink-0">
                          {hotel.category}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007d83] mt-1.5 mb-3">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{hotel.location}</span>
                      </div>

                      <p className="text-sm sm:text-base text-[#657886] leading-relaxed">
                        {hotel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 1: Typical Daily Rhythm */}
            <div
              className="w-full flex-shrink-0 p-6 sm:p-8 md:p-10"
              aria-hidden={activeSlide !== 1}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#dce4e8]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00b0b9] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      Typical Daily Rhythm
                    </h3>
                    <p className="text-sm text-[#657886] mt-0.5">
                      Balanced mornings, shared lunches, afternoon workshops, and vibrant evenings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {dailyRhythm.map((slot, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#dce4e8] p-6 rounded-sm"
                  >
                    <span className="inline-block text-xs sm:text-sm font-mono font-bold text-[#285780] bg-[#edf5f6] px-3 py-1 rounded-sm mb-3">
                      {slot.time}
                    </span>
                    <h4 className="text-lg font-bold text-[#143651] mb-2">
                      {slot.label}
                    </h4>
                    <p className="text-sm sm:text-base text-[#657886] leading-relaxed">
                      {slot.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 2: Typical Hungarian Dishes */}
            <div
              className="w-full flex-shrink-0 p-6 sm:p-8 md:p-10"
              aria-hidden={activeSlide !== 2}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#dce4e8]">
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-[#00b0b9] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143651]">
                      Typical Hungarian Dishes
                    </h3>
                    <p className="text-sm text-[#657886] mt-0.5">
                      Five beloved Hungarian classics you can taste during the summer programme.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#007d83]">
                  Click any dish for a simple recipe
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {hungarianDishes.map((dish) => (
                  <button
                    key={dish.id}
                    type="button"
                    tabIndex={activeSlide === 2 ? 0 : -1}
                    onClick={() => setSelectedDish(dish)}
                    className="w-full bg-white border border-[#dce4e8] hover:border-[#00b0b9] hover:shadow-md p-4 sm:p-5 rounded-sm text-left flex items-start gap-4 sm:gap-5 transition-all group cursor-pointer"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm object-cover flex-shrink-0 border border-[#dce4e8] group-hover:scale-105 transition-transform"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-bold text-[#143651] group-hover:text-[#285780] transition-colors">
                        {dish.name}
                      </h4>
                      <span className="text-xs sm:text-sm font-semibold text-[#285780] block mb-1.5">
                        {dish.subtitle}
                      </span>
                      <p className="text-sm text-[#657886] leading-relaxed mb-2.5">
                        {dish.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#007d83]">
                        <span>View recipe</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-5">
          {SLIDE_META.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to ${slide.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'w-8 bg-[#00b0b9]'
                    : 'w-2.5 bg-[#cbd4da] hover:bg-[#285780]/50'
                }`}
              />
            );
          })}
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
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-[#143651] rounded-full shadow transition-colors cursor-pointer"
                aria-label="Close recipe dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Recipe Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-[#657886] leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Quick Meta */}
              <div className="flex flex-wrap items-center gap-4 py-3 border-y border-[#dce4e8] text-sm font-semibold text-[#285780]">
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
                <ul className="space-y-1.5 text-sm sm:text-base text-[#657886]">
                  {selectedDish.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b0b9] mt-2 flex-shrink-0" />
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
                <ol className="space-y-2.5 text-sm sm:text-base text-[#657886]">
                  {selectedDish.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#dce8f0] text-[#285780] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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

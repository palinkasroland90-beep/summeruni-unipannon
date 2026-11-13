import React from 'react';
import { ArrowRight, BookOpen, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProgramme: () => void;
  onExploreAcademics: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProgramme, onExploreAcademics }) => {
  return (
    <section className="relative min-h-[640px] md:min-h-[700px] flex flex-col justify-between text-white overflow-hidden bg-[#143651]">
      {/* Background with subtle photo & dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11, 39, 61, 0.94) 0%, rgba(11, 39, 61, 0.85) 45%, rgba(11, 39, 61, 0.35) 100%), url('/images/hero-balaton.webp')`,
        }}
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="shell relative z-10 pt-16 md:pt-24 pb-16 flex-1 flex flex-col justify-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
          <span className="text-[#b4f5f4] text-[11px] font-bold uppercase tracking-[0.16em]">
            SUMMER UNIVERSITY 2027 · VESZPRÉM & LAKE BALATON
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-[820px] mb-6 leading-[1.08]">
          A summer of <span className="text-[#00b0b9]">new perspectives.</span>
        </h1>

        {/* Lead */}
        <p className="text-xl sm:text-2xl md:text-[23px] text-white/95 max-w-[700px] font-light leading-snug mb-4">
          Academic discovery, Hungarian culture and shared experiences in Veszprém and around Lake Balaton.
        </p>

        {/* Description paragraph */}
        <p className="text-sm sm:text-base text-slate-200/90 max-w-[560px] leading-relaxed mb-8">
          Join a 14-day international summer experience at the University of Pannonia. Combine rigorous lectures across business, engineering and computing with cultural expeditions, regional wine discovery, and lifelong global friendships.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <button
            onClick={onExploreProgramme}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#00b0b9] hover:bg-[#61d6d7] text-[#093b49] text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-transform hover:-translate-y-0.5 rounded-sm shadow-md"
          >
            <span>Explore 14-Day Programme</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreAcademics}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-[13px] font-bold tracking-wider uppercase backdrop-blur-sm transition-all rounded-sm"
          >
            <BookOpen className="w-4 h-4 text-[#00b0b9]" />
            <span>Academic Faculties</span>
          </button>
        </div>

        {/* Location badge tag */}
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-[#00b0b9]" />
          <span>University of Pannonia, 8200 Veszprém, Egyetem u. 10.</span>
        </div>
      </div>

      {/* Quick Facts Strip (Bottom of Hero) */}
      <div className="relative z-10 bg-white border-t border-[#dce4e8] text-[#193c55] shadow-lg">
        <div className="shell grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#dce4e8]">
          {/* Fact 1 */}
          <div className="p-5 sm:p-7 flex items-center gap-4">
            <span className="text-3xl sm:text-4xl md:text-[42px] font-light text-[#285780] tracking-tight">
              14
            </span>
            <div className="text-xs leading-snug">
              <strong className="block text-[#193c55] font-bold">Days of Discovery</strong>
              <span className="text-[#657886]">Structured yet flexible</span>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="p-5 sm:p-7 flex items-center gap-4">
            <span className="text-3xl sm:text-4xl md:text-[42px] font-light text-[#285780] tracking-tight">
              02
            </span>
            <div className="text-xs leading-snug">
              <strong className="block text-[#193c55] font-bold">Comprehensive Weeks</strong>
              <span className="text-[#657886]">Academics & excursions</span>
            </div>
          </div>

          {/* Fact 3 */}
          <div className="p-5 sm:p-7 flex items-center gap-4">
            <span className="text-3xl sm:text-4xl md:text-[42px] font-light text-[#285780] tracking-tight">
              03
            </span>
            <div className="text-xs leading-snug">
              <strong className="block text-[#193c55] font-bold">Faculty Perspectives</strong>
              <span className="text-[#657886]">GTK · MIK · MK</span>
            </div>
          </div>

          {/* Fact 4 - Interactive CTA cell */}
          <a
            href="#programme"
            className="p-5 sm:p-7 flex items-center justify-between bg-[#eef8f7] hover:bg-[#d8efee] transition-colors group cursor-pointer"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#007d83] block">
                Preview Schedule
              </span>
              <strong className="text-sm sm:text-base font-bold text-[#143651]">
                Full Agenda & Times
              </strong>
            </div>
            <span className="w-10 h-10 rounded-full border border-[#aac6ca] bg-white flex items-center justify-center text-[#285780] group-hover:scale-105 group-hover:bg-[#285780] group-hover:text-white transition-all shadow-sm">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

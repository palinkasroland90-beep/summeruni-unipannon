import React, { useState } from 'react';
import { dailyRhythm, faqList } from '../data/practical';
import { Plus, Minus, Clock } from 'lucide-react';

export const Practical: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="practical" className="py-20 md:py-28 bg-white border-b border-[#dce4e8]">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Campus Community Photo & Daily Rhythm */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-sm overflow-hidden shadow-md group">
              <img
                src="/images/hallgatok.jpeg"
                alt="University of Pannonia student community"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143651]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#00b0b9] block mb-1">
                    VESZPRÉM CAMPUS COMMUNITY
                  </span>
                  <p className="text-sm font-medium text-white/95 leading-snug">
                    International students engaging in active campus life at the University of Pannonia.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Schedule Rhythm Card */}
            <div className="bg-[#f6f5f1] border border-[#dce4e8] p-6 sm:p-7 rounded-sm">
              <div className="flex items-center gap-2 mb-4 text-[#285780]">
                <Clock className="w-4 h-4 text-[#00b0b9]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#143651]">
                  Typical Daily Rhythm
                </h3>
              </div>

              <div className="space-y-4">
                {dailyRhythm.map((slot, i) => (
                  <div key={i} className="border-b border-[#dce4e8] last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <strong className="text-[#143651] font-bold">{slot.label}</strong>
                      <span className="text-[#285780] font-mono text-[11px] font-semibold">
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
          </div>

          {/* Right Column: FAQ Accordion & Key Information */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
                <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
                  PRACTICAL INFORMATION & FAQ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight mb-4">
                Everything you need to know.
              </h2>
              <p className="text-base text-[#657886] leading-relaxed">
                Whether you are preparing for your visa, curious about dietary options, or wondering about local transport in Hungary, here are the essential answers.
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="border-t border-[#dce4e8] divide-y divide-[#dce4e8]">
              {faqList.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-4 sm:py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left group gap-4"
                      aria-expanded={isOpen}
                    >
                      <h4 className="text-base sm:text-lg font-bold text-[#143651] group-hover:text-[#285780] transition-colors leading-snug">
                        {item.question}
                      </h4>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#cbd4da] flex items-center justify-center text-[#00b0b9] group-hover:border-[#00b0b9] transition-all">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-8 text-xs sm:text-sm text-[#657886] leading-relaxed animate-fade-in">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

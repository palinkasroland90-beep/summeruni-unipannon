import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f6f5f1] border-b border-[#dce4e8]">
      <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Heading & Eyebrow */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
            <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
              THE PANNON PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight leading-[1.14]">
            Come for the learning. <br className="hidden sm:inline" />
            <span className="text-[#285780]">Stay curious about everything.</span>
          </h2>
        </div>

        {/* Right Column: Lead copy and thematic highlights */}
        <div className="lg:col-span-6 text-[#657886] text-base leading-relaxed space-y-5">
          <p className="text-lg text-[#193c55] font-normal leading-snug">
            More than standard lectures: the University of Pannonia Summer University creates a bridge between contemporary Central European higher education and hands-on regional experiences.
          </p>

          <p>
            From the historic Castle of Veszprém to the calm shores of Lake Balaton, every morning combines academic depth with afternoon cultural discoveries. Meet leading professors in business, informatics, and sustainable engineering, while connecting with Hungarian student mentors in a welcoming, safe international community.
          </p>

          <div className="pt-2">
            <a
              href="#academics"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#285780] border-b-2 border-[#285780]/30 hover:border-[#00b0b9] hover:text-[#007d83] transition-all pb-1 group"
            >
              <span>Explore the academic faculties</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

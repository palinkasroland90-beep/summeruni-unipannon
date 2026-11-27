import React from 'react';
import { ClipboardList, GraduationCap, Building2, ArrowUpRight } from 'lucide-react';

const SURVEY_FORMS = {
  programme:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=UpB71-iEOk62H9H5oD0KirtoU2ySpA9DppKsWZhnVENUQVdFN1U1OE5LQ1VVUTlWRVVGN1haVDMxRy4u',
  academic:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=UpB71-iEOk62H9H5oD0KirtoU2ySpA9DppKsWZhnVENUQUUzSzQwOFlGT0VYQVFBTUw2V0VFOFQwNi4u',
  accommodation:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=UpB71-iEOk62H9H5oD0KirtoU2ySpA9DppKsWZhnVENUQ1c4S0VBTTlLWUJRTEFYTFA4VTcyRkJHTS4u',
} as const;

export const Surveys: React.FC = () => {
  return (
    <section id="surveys" className="py-20 md:py-28 bg-[#edf5f6] border-b border-[#dce4e8]">
      <div className="shell">
        {/* Section Heading */}
        <div className="max-w-[700px] mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00b0b9]"></span>
            <span className="text-[#285780] text-[11px] font-bold uppercase tracking-[0.16em]">
              STUDENT VOICE & INTERACTIVE SURVEYS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143651] tracking-tight mb-4">
            Your summer. <span className="text-[#285780]">Your point of view.</span>
          </h2>
          <p className="text-base text-[#657886] leading-relaxed">
            Help us tailor the 2027 Summer University to your academic, accommodation, and travel aspirations. Take 2 minutes to share your preferred topics, stays, pacing, and cultural highlights.
          </p>
        </div>

        {/* Survey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Programme Experience Survey */}
          <div className="bg-white border border-[#cfdee3] p-7 sm:p-9 rounded-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-light text-[#abc1cd] font-heading">01</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#b9ced8] text-[#285780] rounded">
                  Itinerary & Experiences
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3 text-[#285780]">
                <ClipboardList className="w-6 h-6 text-[#00b0b9]" />
                <h3 className="text-2xl font-bold text-[#143651] tracking-tight">
                  Programme Experience
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#657886] leading-relaxed mb-6">
                Tell us which destinations excite you most (Lake Balaton, Budapest, porcelain making), your preferred daily activity pace, and language practice preferences.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#657886]">Opens Microsoft Forms · ~2 mins</span>

              <a
                href={SURVEY_FORMS.programme}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#285780] hover:bg-[#143651] text-white text-xs font-bold tracking-wider uppercase transition-colors rounded-sm"
              >
                <span>Start Survey</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Academic Preferences Survey */}
          <div className="bg-[#f8faf9] border border-[#cfdee3] p-7 sm:p-9 rounded-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-light text-[#abc1cd] font-heading">02</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#b9ced8] text-[#285780] rounded">
                  Curriculum & Formats
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3 text-[#285780]">
                <GraduationCap className="w-6 h-6 text-[#00b0b9]" />
                <h3 className="text-2xl font-bold text-[#143651] tracking-tight">
                  Academic Preferences
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#657886] leading-relaxed mb-6">
                Select the faculty topics you wish to explore (Entrepreneurship, Materials Science, English Communication, Multimedia & AI) and your preferred classroom formats (hands-on workshops vs expert lectures).
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-[#657886]">Opens Microsoft Forms · ~2 mins</span>

              <a
                href={SURVEY_FORMS.academic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00b0b9] hover:bg-[#007d83] text-[#093b49] hover:text-white text-xs font-bold tracking-wider uppercase transition-colors rounded-sm"
              >
                <span>Start Preferences</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Accommodation Preferences Survey */}
          <div className="bg-white border border-[#cfdee3] p-7 sm:p-9 rounded-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-light text-[#abc1cd] font-heading">03</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#b9ced8] text-[#285780] rounded">
                  Stays & Comfort
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3 text-[#285780]">
                <Building2 className="w-6 h-6 text-[#00b0b9]" />
                <h3 className="text-2xl font-bold text-[#143651] tracking-tight">
                  Accommodation Preferences
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#657886] leading-relaxed mb-6">
                Let us know your preferred stay option across our campus residence and partner hotels, and share any arrival or stay notes.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#657886]">Opens Microsoft Forms · ~1 min</span>

              <a
                href={SURVEY_FORMS.accommodation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#143651] hover:bg-[#285780] text-white text-xs font-bold tracking-wider uppercase transition-colors rounded-sm"
              >
                <span>Start Survey</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

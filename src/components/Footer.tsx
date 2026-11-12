import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#dce4e8] pt-16 pb-12 text-[#193c55]">
      <div className="shell space-y-12">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#dce4e8]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/images/logo.png"
              alt="University of Pannonia"
              className="h-12 w-auto object-contain"
            />
            <div className="border-l-0 sm:border-l border-slate-200 sm:pl-6 space-y-0.5">
              <p className="text-lg font-bold text-[#143651] font-heading">
                Ideas. Experiences. Pannon.
              </p>
              <span className="text-xs text-[#657886] block">
                Summer University 2027 · Veszprém, Hungary
              </span>
            </div>
          </div>

          <a
            href="https://uni-pannon.hu/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#285780] hover:text-[#00b0b9] transition-colors"
          >
            <span>Official University Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d909d]">
          <span>
            Interactive programme concept · University of Pannonia Summer University 2027.
          </span>
          <div className="flex items-center gap-6">
            <span>
              Visual identity & photography:{' '}
              <a
                href="https://alumni.uni-pannon.hu/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#285780]"
              >
                Pannon Alumni
              </a>
            </span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

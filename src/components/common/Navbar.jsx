import React from 'react';
import { Logo, SearchIcon } from './Icons';
import { translations } from '../../data/translations';

export const Navbar = ({ onNavigate, lang = 'en', onToggleLang }) => {
  const t = translations[lang] || translations.en;

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] sticky top-0 z-40 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo & School Branding */}
        <div onClick={() => onNavigate('landing')} className="flex items-center gap-3 cursor-pointer">
          <Logo textClassName="hidden sm:inline text-base font-extrabold text-gray-900" />
          <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-[#7F58FA] block leading-tight">
              GSSS 52 LNP (MANJHUWAS)
            </span>
            <span className="text-[10px] text-gray-500 hidden md:block">
              {lang === 'hi' ? 'राजकीय उच्च माध्यमिक विद्यालय' : 'Govt. Senior Secondary School'}
            </span>
          </div>
        </div>

        {/* Center Links: Home & Mock Tests Only */}
        <nav className="hidden sm:flex items-center gap-7 text-sm font-medium text-gray-600">
          <button 
            onClick={() => onNavigate('landing')}
            className="text-[#7F58FA] font-bold transition-colors hover:text-[#6C44E8]"
          >
            {t.navHome}
          </button>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-gray-600 hover:text-[#7F58FA] transition-colors font-semibold"
          >
            {lang === 'hi' ? 'मॉक टेस्ट (कक्षा 6–12)' : 'Mock Tests (Class 6–12)'}
          </button>
        </nav>

        {/* Right Actions: Hindi/English Switcher & Direct Start Test */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Pill */}
          <button
            onClick={onToggleLang}
            title={lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-200 bg-[#F3EFFF] text-[#7F58FA] text-xs font-bold hover:bg-[#7F58FA] hover:text-white transition-all shadow-sm"
          >
            <span>🌐</span>
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          <button 
            onClick={() => onNavigate('catalog')}
            aria-label="Search exams"
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
          >
            <SearchIcon className="w-4 h-4" />
          </button>

          <button 
            onClick={() => onNavigate('catalog')}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95 shrink-0 flex items-center gap-1.5"
          >
            <span>📝</span>
            <span>{lang === 'hi' ? 'मॉक टेस्ट शुरू करें' : 'Start Mock Test'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { Logo, SearchIcon } from './Icons';
import { translations } from '../../data/translations';

export const Navbar = ({ onNavigate, onOpenLogin, onOpenGetStarted, lang = 'en', onToggleLang }) => {
  const t = translations[lang] || translations.en;

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] sticky top-[41px] z-40 transition-all">
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

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-600">
          <button 
            onClick={() => onNavigate('landing')}
            className="text-[#7F58FA] font-bold transition-colors hover:text-[#6C44E8]"
          >
            {t.navHome}
          </button>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-gray-600 hover:text-[#7F58FA] transition-colors"
          >
            {t.navExams}
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="text-gray-600 hover:text-[#7F58FA] transition-colors"
          >
            {t.navPricing}
          </button>
          <button 
            onClick={() => onNavigate('admin')}
            className="text-gray-600 hover:text-[#7F58FA] transition-colors"
          >
            {lang === 'hi' ? 'शिक्षक पोर्टल' : 'Faculty'}
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="text-gray-600 hover:text-[#7F58FA] transition-colors"
          >
            {t.navAbout}
          </button>
        </nav>

        {/* Right Actions: Hindi/English Switcher & Login */}
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
            onClick={onOpenLogin}
            className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#7F58FA] px-2 sm:px-3 py-2 transition-colors"
          >
            {t.login}
          </button>

          <button 
            onClick={onOpenGetStarted}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            {t.getStarted}
          </button>
        </div>
      </div>
    </header>
  );
};

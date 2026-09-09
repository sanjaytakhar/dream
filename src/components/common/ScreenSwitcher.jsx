import React from 'react';

const screens = [
  { id: 'landing', labelEn: 'Landing Page', labelHi: 'मुख्य पृष्ठ', icon: '🏠' },
  { id: 'auth', labelEn: 'Login / Auth', labelHi: 'लॉगिन पोर्टल', icon: '🔐' },
  { id: 'dashboard', labelEn: 'Student Dashboard', labelHi: 'विद्यार्थी डैशबोर्ड', icon: '📊' },
  { id: 'catalog', labelEn: 'Mock Tests (6–12)', labelHi: 'मॉक टेस्ट (6-12)', icon: '📚' },
  { id: 'cbt', labelEn: 'CBT Simulator', labelHi: 'ऑनलाइन परीक्षा', icon: '⏱️' },
  { id: 'results', labelEn: 'Report Card', labelHi: 'अंक तालिका', icon: '📈' },
  { id: 'admin', labelEn: 'School Admin', labelHi: 'शिक्षक व्यवस्थापक', icon: '🛠️' },
  { id: 'question-creator', labelEn: 'Create Question', labelHi: 'प्रश्न निर्माण', icon: '✍️' },
  { id: 'profile', labelEn: 'Student Profile', labelHi: 'छात्र प्रोफाइल', icon: '👤' },
];

export const ScreenSwitcher = ({ currentScreen, onSelectScreen, lang = 'en', onToggleLang }) => {
  return (
    <aside aria-label="Mockup Screen Navigator" className="sticky top-0 z-50 bg-[#1F2937]/95 backdrop-blur-md text-white border-b border-gray-700/60 px-4 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#60D6A7] animate-pulse"></span>
          <span className="font-bold text-white tracking-wide uppercase text-[11px]">
            GSSS 52 LNP (MANJHUWAS)
          </span>
          <span className="text-gray-400 hidden sm:inline">&bull; {lang === 'hi' ? 'कक्षा 6 से 12' : 'Class 6 to 12'}</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-0.5 max-w-full scrollbar-none">
          {/* Language Switcher in sticky header */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-3 py-1 rounded-full font-bold bg-purple-600/60 hover:bg-purple-600 text-white border border-purple-400/40 transition-all text-nowrap"
          >
            <span>🌐</span>
            <span>{lang === 'en' ? 'हिन्दी में देखें' : 'View in English'}</span>
          </button>

          <div className="h-4 w-px bg-gray-700 mx-1 hidden sm:block"></div>

          <nav aria-label="Screen links" className="flex items-center gap-1.5">
            {screens.map((screen) => {
              const isActive = currentScreen === screen.id;
              const label = lang === 'hi' ? screen.labelHi : screen.labelEn;
              return (
                <button
                  key={screen.id}
                  onClick={() => onSelectScreen(screen.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all text-nowrap ${
                    isActive
                      ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/40 font-semibold scale-105'
                      : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{screen.icon}</span>
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

import React, { useState } from 'react';
import { SearchIcon, ChevronRight } from '../common/Icons';
import { schoolClasses } from '../../data/mockData';
import { translations } from '../../data/translations';

export const LandingPage = ({ onNavigate, onStartTest, onSelectClassFilter, lang = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[lang] || translations.en;

  const features = [
    { title: t.ncertAligned, icon: '📑', color: 'text-emerald-600', bg: 'bg-[#E9FBF3]' },
    { title: t.realCBT, icon: '⏱️', color: 'text-purple-600', bg: 'bg-[#F3EFFF]' },
    { title: t.diagnosticReports, icon: '📊', color: 'text-blue-600', bg: 'bg-[#EFF6FF]' },
    { title: t.unitTests, icon: '🎯', color: 'text-pink-600', bg: 'bg-[#FFF0F4]' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onNavigate('catalog');
  };

  const handleClassClick = (cls) => {
    if (onSelectClassFilter) onSelectClassFilter(cls.grade);
    onNavigate('catalog');
  };

  return (
    <div className="min-h-screen bg-[#FDFAFF] text-[#1F2937]">
      {/* School Portal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFFF] text-[#7F58FA] text-xs font-bold border border-purple-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7F58FA] animate-pulse"></span>
              {t.schoolName} &bull; {t.classesRange}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              {t.heroTitle1} <br />
              <span className="text-[#7F58FA] bg-clip-text text-transparent bg-gradient-to-r from-[#7F58FA] to-[#9B77FF]">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              {t.heroDesc}
            </p>

            {/* Class Quick-Select Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">
                {lang === 'hi' ? 'कक्षा चुनें:' : 'Select Grade:'}
              </span>
              {schoolClasses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    if (onSelectClassFilter) onSelectClassFilter(c.grade);
                    onNavigate('catalog');
                  }}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-[#7F58FA] hover:text-[#7F58FA] hover:bg-purple-50 transition-all"
                >
                  {lang === 'hi' ? c.labelHi : c.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl pt-2">
              <div className="relative flex items-center bg-white rounded-full p-2 border border-gray-200 shadow-soft focus-within:border-[#7F58FA] focus-within:ring-2 focus-within:ring-[#7F58FA]/20 transition-all">
                <SearchIcon className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm shrink-0"
                >
                  {t.findTests}
                </button>
              </div>
            </form>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-7 py-3.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-sm font-bold shadow-lg shadow-[#7F58FA]/30 hover:shadow-[#7F58FA]/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.startFree}
              </button>
              <button
                onClick={onStartTest}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-[#7F58FA] border border-[#7F58FA]/40 text-sm font-bold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.sampleTest}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Illustration & Floating Notes */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#F3EFFF]/60 to-white/80 p-6 rounded-3xl border border-purple-100 shadow-card flex flex-col items-center">
              
              <div className="absolute -top-3 -left-4 bg-[#EFF6FF] border border-blue-200 text-[#1E40AF] px-4 py-2 rounded-2xl shadow-md rotate-[-6deg] text-xs font-bold leading-tight flex items-center gap-1.5">
                <span>📝</span>
                <div>
                  <div>{t.smallTests}</div>
                  <div className="text-blue-700 font-extrabold">{t.bigDreams}</div>
                </div>
              </div>

              <div className="absolute top-4 -right-3 bg-[#FEF9C3] border border-amber-200 text-amber-900 px-4 py-2.5 rounded-2xl shadow-md rotate-[8deg] text-xs font-bold leading-tight">
                <div className="text-amber-800 font-extrabold text-sm">{t.youCanDoIt}</div>
              </div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-4 rounded-2xl overflow-hidden shadow-inner bg-gradient-to-tr from-purple-100 to-indigo-50 border-2 border-white flex items-center justify-center">
                <img 
                  src="/hero-student.jpg" 
                  alt="School Student with Laptop" 
                  className="w-full h-full object-cover rounded-2xl transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* School Metric pill */}
              <div className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-gray-100 flex items-center justify-around text-center mt-2 shadow-sm">
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-gray-900">
                    {lang === 'hi' ? 'कक्षा 6–12' : 'Class 6–12'}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {lang === 'hi' ? 'सभी वर्ग' : 'All Grades'}
                  </p>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-[#7F58FA]">
                    {lang === 'hi' ? 'एनसीईआरटी' : 'NCERT'}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {lang === 'hi' ? 'पाठ्यक्रम' : 'Curriculum'}
                  </p>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-600">
                    {lang === 'hi' ? '100% निःशुल्क' : '100% Free'}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {lang === 'hi' ? 'छात्रों हेतु' : 'For Students'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft flex items-center gap-3.5 hover:shadow-card hover:border-purple-200 transition-all cursor-pointer"
              onClick={() => onNavigate('catalog')}
            >
              <div className={`w-11 h-11 rounded-xl ${feat.bg} flex items-center justify-center text-lg shrink-0`}>
                {feat.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Class 6 to 12 Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">{t.chooseClass}</h2>
            <p className="text-sm text-gray-500">{t.chooseClassDesc}</p>
          </div>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-xs sm:text-sm font-semibold text-[#7F58FA] hover:text-[#6C44E8] flex items-center gap-1"
          >
            <span>{lang === 'hi' ? 'सभी टेस्ट देखें' : 'View All Tests'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {schoolClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => handleClassClick(cls)}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all cursor-pointer text-center group flex flex-col justify-between"
            >
              <div>
                <div 
                  className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-2.5 transition-transform group-hover:scale-110 shadow-inner"
                  style={{ backgroundColor: cls.bg }}
                >
                  {cls.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {lang === 'hi' ? cls.labelHi : cls.label}
                </h3>
                <p className="text-[11px] text-gray-400 font-medium">
                  {lang === 'hi' ? cls.categoryHi : cls.category}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-50 text-[10px] font-semibold text-[#7F58FA]">
                {t.exploreTests} &rarr;
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* School CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#7F58FA] to-[#6042DF] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#7F58FA]/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">{t.readyHeading}</h3>
            <p className="text-purple-100 text-xs sm:text-sm max-w-lg">
              {t.readySubtext}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3 rounded-full bg-white text-[#7F58FA] font-bold text-xs sm:text-sm shadow-md hover:bg-purple-50 transition-all hover:scale-105"
            >
              {t.enterPortal}
            </button>
            <button
              onClick={() => onNavigate('admin')}
              className="px-6 py-3 rounded-full bg-purple-900/40 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-purple-900/60 transition-all"
            >
              {t.teacherLogin}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { StudentSidebar } from '../common/Sidebar';
import { SearchIcon, BellIcon, ChevronRight } from '../common/Icons';
import { studentProfile } from '../../data/mockData';
import { translations } from '../../data/translations';

export const StudentDashboard = ({ onNavigate, onStartTest, lang = 'en' }) => {
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <StudentSidebar activeTab="Dashboard" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Bar */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between gap-4 sticky top-[41px] z-30">
          <div className="relative max-w-md w-full">
            <SearchIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={isHi ? "पाठ्यक्रम, अध्याय, टेस्ट खोजें..." : "Search school syllabus, chapters, unit tests..."}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-full text-xs sm:text-sm border border-transparent focus:border-[#7F58FA] focus:bg-white focus:ring-2 focus:ring-[#7F58FA]/15 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#FFB3C7] rounded-full border-2 border-white"></span>
            </button>

            {/* Student Profile Info */}
            <div 
              onClick={() => onNavigate('profile')}
              className="flex items-center gap-3 pl-2 cursor-pointer group"
            >
              <img
                src={studentProfile.avatar}
                alt={studentProfile.name}
                className="w-9 h-9 rounded-full object-cover border-2 border-[#7F58FA] shadow-sm"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-gray-900 group-hover:text-[#7F58FA] transition-colors">
                  {isHi ? studentProfile.nameHi : studentProfile.name}
                </p>
                <p className="text-[11px] text-gray-500">
                  {isHi ? studentProfile.gradeHi : studentProfile.grade}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="p-6 sm:p-8 space-y-7 max-w-7xl">
          {/* Welcome School Banner */}
          <div className="bg-gradient-to-r from-[#F3EFFF] via-white to-[#FFF0F4] border border-purple-100 rounded-3xl p-6 sm:p-7 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-100 text-[#7F58FA] text-[11px] font-bold mb-2">
                <span>🏫 {isHi ? studentProfile.schoolNameHi : studentProfile.schoolName}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t.goodMorning}, {isHi ? studentProfile.nameHi : studentProfile.name}! 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {isHi 
                  ? `पंजीकृत: ${studentProfile.gradeHi} • सत्र 2025-26 • टर्म 1 मूल्यांकन`
                  : `Enrolled in ${studentProfile.grade} • Session 2025-26 • Term 1 Assessment`}
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl border border-purple-200/60 shadow-sm max-w-xs shrink-0">
              <p className="text-xs italic text-[#7F58FA] font-medium leading-relaxed">
                {t.quote}
              </p>
            </div>
          </div>

          {/* 4 School KPI Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.testsTaken}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {studentProfile.stats.testsTaken}
                </span>
                <span className="text-xs text-emerald-600 font-bold bg-[#E9FBF3] px-2 py-0.5 rounded-full">
                  {isHi ? '100% पूर्ण' : '100% Done'}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.academicAverage}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {studentProfile.stats.avgScore}%
                </span>
                <span className="text-xs text-[#7F58FA] font-bold bg-[#F3EFFF] px-2 py-0.5 rounded-full">
                  Grade A1 🌟
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.studyStreak}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-1.5">
                  {studentProfile.stats.currentStreak} <span className="text-base font-normal text-gray-600">{isHi ? 'दिन' : 'days'}</span>
                </span>
                <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  🔥 {isHi ? 'सक्रिय' : 'Active'}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.classRank}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#7F58FA]">
                  #{studentProfile.stats.classRank}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {isHi ? 'कक्षा 10-अ में' : 'in Section 10-A'}
                </span>
              </div>
            </div>
          </div>

          {/* Two Columns: Class Tests & School Subject Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className="lg:col-span-8 space-y-7">
              {/* Assigned by Class Teacher */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">{t.assignedTests}</h2>
                  <button 
                    onClick={() => onNavigate('catalog')}
                    className="text-xs font-semibold text-[#7F58FA] hover:text-[#6C44E8] flex items-center gap-1"
                  >
                    <span>{isHi ? 'सभी देखें' : 'View All'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {studentProfile.recommendedTests.map((test) => (
                    <div 
                      key={test.id}
                      className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: `${test.color}20`, color: test.color }}
                          >
                            {isHi ? test.titleHi : test.title}
                          </span>
                          <span className="text-[11px] text-gray-400">{test.duration}</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {isHi ? test.subtitleHi : test.subtitle}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {test.questions} {isHi ? 'प्रश्न' : 'Questions'}
                        </p>
                      </div>

                      <button
                        onClick={onStartTest}
                        className="mt-4 w-full py-2 bg-[#7F58FA] hover:bg-[#6C44E8] text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                      >
                        {t.startTest}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming School Term & Unit Exams */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">{t.upcomingSchedule}</h2>
                  <button 
                    onClick={() => onNavigate('catalog')}
                    className="text-xs font-semibold text-[#7F58FA] hover:text-[#6C44E8] flex items-center gap-1"
                  >
                    <span>{isHi ? 'समय-सारणी' : 'Calendar'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {studentProfile.upcomingTests.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft flex items-center justify-between hover:border-purple-200 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                          style={{ backgroundColor: `${item.color}18`, color: item.color }}
                        >
                          📅
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">
                            {isHi ? item.titleHi : item.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {isHi ? item.timeHi : item.time}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={onStartTest}
                        className="px-4 py-1.5 rounded-full border border-[#7F58FA] text-[#7F58FA] hover:bg-[#7F58FA] hover:text-white text-xs font-semibold transition-colors"
                      >
                        {isHi ? 'अभ्यास करें' : 'Revise Now'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* School Subjects Progress */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-bold text-gray-900">{t.subjectProgress}</h2>
                  <span className="text-xs font-semibold text-[#7F58FA]">{isHi ? 'कक्षा 10' : 'Class 10'}</span>
                </div>

                <div className="space-y-4">
                  {studentProfile.progress.map((prog) => (
                    <div key={prog.subject} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-700">
                          {isHi ? prog.subjectHi : prog.subject}
                        </span>
                        <span className="font-bold text-gray-900">{prog.score}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${prog.score}%`,
                            backgroundColor: prog.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="bg-[#FDFAFF] rounded-xl p-3.5 border border-purple-100">
                    <p className="text-xs font-bold text-[#7F58FA] mb-1">
                      📖 {t.teacherNote} (GSSS 52 LNP)
                    </p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      {isHi 
                        ? 'आगामी बोर्ड परीक्षा अभ्यास टेस्ट हेतु सामाजिक विज्ञान व विज्ञान के अध्याय 1 व 2 का पुनराभ्यास करें।'
                        : 'Social Science and Science chapters 1 & 2 require revision before upcoming board assessment.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

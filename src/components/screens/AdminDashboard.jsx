import React from 'react';
import { AdminSidebar } from '../common/Sidebar';
import { adminData } from '../../data/mockData';
import { translations } from '../../data/translations';

export const AdminDashboard = ({ onNavigate, lang = 'en' }) => {
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <AdminSidebar activeTab="Admin Dashboard" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{t.adminTitle}</h1>
            <p className="text-xs text-gray-500">{t.adminSubtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('question-creator')}
              className="px-4 py-2 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs font-bold shadow-md shadow-[#7F58FA]/20 transition-all"
            >
              {t.createQuestion}
            </button>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-7 max-w-7xl">
          {/* 4 School KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.enrolledStudents}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {adminData.stats.students}
                </span>
                <span className="text-xs text-emerald-600 font-bold bg-[#E9FBF3] px-2 py-0.5 rounded-full">
                  {isHi ? 'कक्षा 6–12' : 'Classes 6–12'}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.activeGrades}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {isHi ? '7 कक्षाएं' : '7 Grades'}
                </span>
                <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                  GSSS 52 LNP
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.schoolTests}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {adminData.stats.tests}
                </span>
                <span className="text-xs text-[#7F58FA] font-bold bg-[#F3EFFF] px-2 py-0.5 rounded-full">
                  {isHi ? 'सत्र 2025-26' : 'Session 25-26'}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <p className="text-xs font-semibold text-gray-500">{t.schoolAverage}</p>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#7F58FA]">
                  {adminData.stats.avgScore}
                </span>
                <span className="text-xs text-emerald-600 font-bold bg-[#E9FBF3] px-2 py-0.5 rounded-full">
                  +3.2%
                </span>
              </div>
            </div>
          </div>

          {/* Two-Column: Faculty Activity & Grade-wise Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-soft">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-gray-900">{t.recentActivity}</h2>
                <span className="text-xs text-gray-400 font-medium">52 LNP Manjhuwas</span>
              </div>

              <div className="space-y-4">
                {adminData.recentActivity.map((act) => (
                  <div
                    key={act.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-purple-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#F3EFFF] text-[#7F58FA] flex items-center justify-center text-sm">
                        🏫
                      </div>
                      <p className="text-xs font-semibold text-gray-800">
                        {isHi ? act.textHi : act.text}
                      </p>
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium shrink-0 ml-2">
                      {isHi ? act.timeHi : act.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-base font-bold text-gray-900">{t.gradePerformance}</h2>
                  <span className="text-xs font-semibold text-[#7F58FA]">GSSS 52 LNP</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {isHi ? 'रा.उ.मा.वि. 52 एलएनपी के कक्षा 6 से 12 तक के विद्यार्थियों का औसत' : 'School-wide academic comparison across all 7 grades'}
                </p>

                <div className="flex items-end justify-between h-48 pt-6 px-2 sm:px-4 border-b border-gray-100">
                  {adminData.classPerformance.map((batch) => (
                    <div key={batch.name} className="flex flex-col items-center gap-2 group">
                      <span className="text-[11px] font-bold text-gray-800 opacity-80 group-hover:opacity-100">
                        {batch.score}%
                      </span>
                      <div
                        className="w-8 sm:w-10 rounded-t-xl transition-all duration-700 hover:opacity-90 cursor-pointer shadow-sm"
                        style={{
                          height: `${(batch.score / 100) * 140}px`,
                          backgroundColor: batch.color
                        }}
                      ></div>
                      <span className="text-[11px] font-bold text-gray-600 mt-2 text-center whitespace-nowrap">
                        {isHi ? batch.nameHi : batch.name.replace('Class ', 'C-')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {isHi ? 'सर्वश्रेष्ठ कक्षा: ' : 'Top Grade: '}
                  <b className="text-[#7F58FA]">{isHi ? 'कक्षा 10 (86%)' : 'Class 10 (86%)'}</b>
                </span>
                <button 
                  onClick={() => alert("Downloading GSSS 52 LNP Progress Report...")}
                  className="text-[#7F58FA] font-bold hover:underline"
                >
                  {isHi ? 'रिपोर्ट कार्ड डाउनलोड करें' : 'Download Report PDF'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

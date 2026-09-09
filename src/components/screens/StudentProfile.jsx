import React, { useState } from 'react';
import { StudentSidebar } from '../common/Sidebar';
import { EditIcon, BookOpenIcon, BookmarkIcon } from '../common/Icons';
import { studentProfile } from '../../data/mockData';
import { translations } from '../../data/translations';

export const StudentProfile = ({ onNavigate, lang = 'en' }) => {
  const [profileTab, setProfileTab] = useState('Achievements');
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <StudentSidebar activeTab="Profile" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{t.studentProfileTitle}</h1>
            <p className="text-xs text-gray-500">
              {isHi ? 'रा.उ.मा.वि. 52 एलएनपी (मांझूवास) • आधिकारिक विद्यार्थी अभिलेख 2025-26' : 'GSSS 52 LNP (MANJHUWAS) • Student Academic Record 2025–26'}
            </p>
          </div>

          <button 
            onClick={() => alert(isHi ? "विद्यार्थी विवरण विद्यालय व्यवस्थापक द्वारा सत्यापित है।" : "Student details verified by school admin.")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-xs font-bold text-gray-700 transition-colors shadow-sm"
          >
            <EditIcon className="w-3.5 h-3.5 text-gray-500" />
            <span>{isHi ? 'विवरण अद्यतन करें' : 'Update Details'}</span>
          </button>
        </header>

        <main className="p-6 sm:p-8 space-y-7 max-w-7xl">
          {/* School Student Bio Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-soft">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <img
                src={studentProfile.avatar}
                alt={studentProfile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-100 shadow-md"
              />

              <div className="space-y-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">
                      {isHi ? studentProfile.nameHi : studentProfile.name}
                    </h2>
                    <p className="text-sm font-bold text-[#7F58FA]">
                      {isHi ? studentProfile.gradeHi : studentProfile.grade} &bull; {t.rollNo} {studentProfile.rollNo}
                    </p>
                    <p className="text-xs text-gray-600 font-bold mt-1">
                      🏫 {isHi ? studentProfile.schoolNameHi : studentProfile.schoolName}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 self-center sm:self-start px-3 py-1 bg-[#E9FBF3] text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {t.verifiedStudent} &bull; ID: {studentProfile.admissionNo}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span>✉️</span> {studentProfile.email}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <span>📍</span> {isHi ? '52 एलएनपी, मांझूवास (राजस्थान)' : studentProfile.location}
                  </span>
                  <span>&bull;</span>
                  <span>{isHi ? 'प्रवेश सत्र' : 'Enrolled'}: 2025-26</span>
                </div>
              </div>
            </div>

            {/* 4 School Summary Stats Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="text-center p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100">
                <p className="text-2xl font-extrabold text-gray-900">
                  {studentProfile.stats.totalTestsProfile}
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {isHi ? 'कुल पूर्ण टेस्ट' : 'School Tests Completed'}
                </p>
              </div>

              <div className="text-center p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100">
                <p className="text-2xl font-extrabold text-gray-900">
                  {studentProfile.stats.avgScore}%
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {isHi ? 'कुल औसत ग्रेड (A1)' : 'Overall Grade (A1)'}
                </p>
              </div>

              <div className="text-center p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100">
                <p className="text-2xl font-extrabold text-[#7F58FA]">
                  #{studentProfile.stats.classRank}
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {isHi ? 'कक्षा रैंक (वर्ग 10-अ)' : 'Class Rank (10-A)'}
                </p>
              </div>

              <div className="text-center p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100">
                <p className="text-2xl font-extrabold text-orange-500 flex items-center justify-center gap-1">
                  <span>{studentProfile.stats.currentStreak}</span>
                  <span className="text-base">🔥</span>
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {isHi ? 'दिन निरंतर अभ्यास' : 'Day Practice Streak'}
                </p>
              </div>
            </div>
          </div>

          {/* Badges & School Honors */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-soft">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-5 mb-6">
              {[
                { id: 'Achievements', en: 'Achievements', hi: 'उपलब्धियां एवं सम्मान' },
                { id: 'Homework', en: 'Homework Submissions', hi: 'गृहकार्य विवरण' },
                { id: 'Feedback', en: 'Teacher Feedback', hi: 'शिक्षक समीक्षा' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProfileTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    profileTab === tab.id
                      ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/20'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {isHi ? tab.hi : tab.en}
                </button>
              ))}
            </div>

            {profileTab === 'Achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studentProfile.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="p-4 rounded-2xl border border-gray-100 shadow-soft flex items-center gap-4 bg-white hover:border-purple-200 transition-all group"
                  >
                    <div 
                      className="w-13 h-13 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-inner"
                      style={{ backgroundColor: badge.color }}
                    >
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-0.5">
                        {isHi ? badge.titleHi : badge.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-snug">{badge.desc}</p>
                      <span className="inline-block text-[10px] text-emerald-600 font-bold mt-1">
                        ✓ {isHi ? 'रा.उ.मा.वि. 52 एलएनपी सम्मान' : 'GSSS 52 LNP Honor'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {profileTab === 'Homework' && (
              <div className="p-8 text-center text-gray-500 text-xs">
                <BookOpenIcon className="w-8 h-8 mx-auto text-purple-300 mb-2" />
                <p className="font-semibold text-gray-700">
                  {isHi ? 'सभी 14 ऑनलाइन गृहकार्य टेस्ट सफलतापूर्वक जमा' : 'All 14 Unit Homework Tests Submitted'}
                </p>
                <p className="text-gray-400 mt-1">
                  {isHi ? 'गृहकार्य में औसत अंक: 86.5%' : 'Average score across homework assignments: 86.5%'}
                </p>
              </div>
            )}

            {profileTab === 'Feedback' && (
              <div className="p-8 text-center text-gray-500 text-xs">
                <BookmarkIcon className="w-8 h-8 mx-auto text-amber-300 mb-2" />
                <p className="font-semibold text-gray-700">
                  {isHi ? '"अर्जुन गणित एवं विज्ञान में उत्कृष्ट समस्या समाधान क्षमता प्रदर्शित कर रहे हैं।"' : '"Arjun exhibits exceptional problem solving in Mathematics."'}
                </p>
                <p className="text-gray-400 mt-1">
                  — {isHi ? 'कक्षाध्यापक, 10-अ (रा.उ.मा.वि. 52 एलएनपी मांझूवास)' : 'Class Teacher 10-A (GSSS 52 LNP)'}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

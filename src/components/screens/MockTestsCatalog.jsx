import React, { useState, useEffect } from 'react';
import { StudentSidebar } from '../common/Sidebar';
import { SearchIcon, StarIcon } from '../common/Icons';
import { mockTests } from '../../data/mockData';
import { translations } from '../../data/translations';

export const MockTestsCatalog = ({ onNavigate, onStartTest, selectedClassFilter = 'All', lang = 'en' }) => {
  const [selectedClass, setSelectedClass] = useState(selectedClassFilter);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTab, setSelectedTab] = useState('All Tests');
  const [searchQuery, setSearchQuery] = useState('');

  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  useEffect(() => {
    if (selectedClassFilter && selectedClassFilter !== 'All') {
      setSelectedClass(selectedClassFilter);
    }
  }, [selectedClassFilter]);

  const tabs = [
    { id: 'all', en: 'All Tests', hi: 'सभी टेस्ट' },
    { id: 'middle', en: 'Class 6-8 (Middle)', hi: 'कक्षा 6-8 (उच्च प्राथमिक)' },
    { id: 'secondary', en: 'Class 9-10 (Secondary)', hi: 'कक्षा 9-10 (माध्यमिक)' },
    { id: 'senior', en: 'Class 11-12 (Senior)', hi: 'कक्षा 11-12 (उच्च माध्यमिक)' },
    { id: 'board', en: 'Board Mocks', hi: 'बोर्ड परीक्षा मॉक' },
  ];

  const filteredTests = mockTests.filter(test => {
    // Tab filter
    if (selectedTab === 'Class 6-8 (Middle)' || selectedTab === 'कक्षा 6-8 (उच्च प्राथमिक)') {
      if (!['Class 6', 'Class 7', 'Class 8'].includes(test.schoolClass)) return false;
    } else if (selectedTab === 'Class 9-10 (Secondary)' || selectedTab === 'कक्षा 9-10 (माध्यमिक)') {
      if (!['Class 9', 'Class 10'].includes(test.schoolClass)) return false;
    } else if (selectedTab === 'Class 11-12 (Senior)' || selectedTab === 'कक्षा 11-12 (उच्च माध्यमिक)') {
      if (!['Class 11', 'Class 12'].includes(test.schoolClass)) return false;
    } else if (selectedTab === 'Board Mocks' || selectedTab === 'बोर्ड परीक्षा मॉक') {
      if (!['Class 10', 'Class 12'].includes(test.schoolClass)) return false;
    }

    if (selectedClass !== 'All' && test.schoolClass !== selectedClass) return false;
    if (selectedSubject !== 'All' && test.subject !== selectedSubject) return false;
    if (selectedDifficulty !== 'All' && test.difficulty !== selectedDifficulty) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const titleMatch = (test.title || '').toLowerCase().includes(q) || (test.titleHi || '').toLowerCase().includes(q);
      const subjMatch = (test.subject || '').toLowerCase().includes(q) || (test.subjectHi || '').toLowerCase().includes(q);
      return titleMatch || subjMatch || test.schoolClass.toLowerCase().includes(q);
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <StudentSidebar activeTab="My Tests" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{t.catalogTitle}</h1>
            <p className="text-xs text-gray-500">GSSS 52 LNP (MANJHUWAS) &bull; {t.catalogSubtitle}</p>
          </div>
          <button 
            onClick={() => onNavigate('question-creator')}
            className="px-4 py-2 rounded-full bg-[#F3EFFF] text-[#7F58FA] hover:bg-[#7F58FA] hover:text-white text-xs font-bold transition-all border border-purple-200 shadow-sm"
          >
            {isHi ? '+ नया प्रश्न बनाएं' : '+ Create Class Test'}
          </button>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl">
          {/* Filter Bar with School Class */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-soft flex flex-wrap items-center gap-3">
            {/* School Class */}
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {t.selectClass}
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:border-[#7F58FA]"
              >
                <option value="All">{isHi ? 'सभी कक्षाएं (6 से 12)' : 'All Classes (6 to 12)'}</option>
                <option value="Class 6">{isHi ? 'कक्षा 6' : 'Class 6'}</option>
                <option value="Class 7">{isHi ? 'कक्षा 7' : 'Class 7'}</option>
                <option value="Class 8">{isHi ? 'कक्षा 8' : 'Class 8'}</option>
                <option value="Class 9">{isHi ? 'कक्षा 9' : 'Class 9'}</option>
                <option value="Class 10">{isHi ? 'कक्षा 10 (बोर्ड)' : 'Class 10 (Board)'}</option>
                <option value="Class 11">{isHi ? 'कक्षा 11' : 'Class 11'}</option>
                <option value="Class 12">{isHi ? 'कक्षा 12 (बोर्ड)' : 'Class 12 (Board)'}</option>
              </select>
            </div>

            {/* Subject */}
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {t.subject}
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:border-[#7F58FA]"
              >
                <option value="All">{isHi ? 'सभी विषय' : 'All Subjects'}</option>
                <option value="Computer Science">{isHi ? 'कंप्यूटर साइंस (Python)' : 'Computer Science'}</option>
                <option value="Mathematics">{isHi ? 'गणित' : 'Mathematics'}</option>
                <option value="Science">{isHi ? 'विज्ञान' : 'Science'}</option>
                <option value="Social Science">{isHi ? 'सामाजिक विज्ञान' : 'Social Science'}</option>
                <option value="Physics">{isHi ? 'भौतिक विज्ञान' : 'Physics'}</option>
                <option value="Chemistry">{isHi ? 'रसायन विज्ञान' : 'Chemistry'}</option>
                <option value="Biology">{isHi ? 'जीव विज्ञान' : 'Biology'}</option>
                <option value="Hindi">{isHi ? 'हिंदी' : 'Hindi'}</option>
                <option value="English">{isHi ? 'अंग्रेज़ी' : 'English'}</option>
              </select>
            </div>

            {/* Difficulty */}
            <div className="flex-1 min-w-[120px]">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {t.difficulty}
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:border-[#7F58FA]"
              >
                <option value="All">{isHi ? 'सभी स्तर' : 'All Levels'}</option>
                <option value="Easy">{isHi ? 'सरल (Easy)' : 'Easy'}</option>
                <option value="Medium">{isHi ? 'मध्यम (Medium)' : 'Medium'}</option>
                <option value="Hard">{isHi ? 'कठिन (Hard)' : 'Hard'}</option>
              </select>
            </div>

            {/* Search */}
            <div className="w-full md:w-64 mt-2 md:mt-0">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {t.searchTopics}
              </label>
              <div className="relative">
                <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isHi ? "अध्याय, विषय खोजें..." : "Search by chapter, topic..."}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 outline-none focus:border-[#7F58FA]"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => {
              const active = selectedTab === (isHi ? tab.hi : tab.en);
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(isHi ? tab.hi : tab.en)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all text-nowrap ${
                    active
                      ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/25'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {isHi ? tab.hi : tab.en}
                </button>
              );
            })}
          </div>

          {/* Test Cards List */}
          <div className="space-y-4">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft hover:shadow-card hover:border-purple-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EFFF] text-[#7F58FA] flex items-center justify-center font-bold text-lg shrink-0">
                    {test.subject === 'Computer Science' ? '💻' : test.subject === 'Mathematics' ? '📐' : test.subject === 'Science' ? '🔬' : test.subject === 'Physics' ? '⚛️' : test.subject === 'Chemistry' ? '🧪' : test.subject === 'Social Science' ? '🌍' : '📘'}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-gray-900">
                      {isHi ? test.titleHi : test.title}
                    </h3>

                    {/* School Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-[#7F58FA] font-bold">
                        {test.schoolClass}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-semibold border border-blue-100">
                        {isHi ? test.subjectHi : test.subject}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                        {test.testType}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md font-semibold border ${
                        test.difficulty === 'Hard'
                          ? 'bg-rose-50 text-rose-600 border-rose-100'
                          : test.difficulty === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border-amber-100'
                          : 'bg-teal-50 text-teal-700 border-teal-100'
                      }`}>
                        {test.difficulty}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
                      <span>{test.questionsCount} {isHi ? 'प्रश्न' : 'Questions'}</span>
                      <span>&bull;</span>
                      <span>{test.durationMins} {isHi ? 'मिनट' : 'mins'}</span>
                      <span>&bull;</span>
                      <span>{test.totalMarks} {isHi ? 'पूर्णांक' : 'Marks'}</span>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <div className="text-left md:text-right">
                    <p className="text-xs text-gray-400 font-medium">
                      {test.attempts.toLocaleString()} {t.attempts}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5 text-xs font-bold text-gray-800">
                      <StarIcon className="w-3.5 h-3.5" />
                      <span>{test.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onStartTest(test)}
                    className="px-6 py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95 shrink-0"
                  >
                    {t.startTest}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

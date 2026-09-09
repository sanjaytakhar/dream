import React, { useState } from 'react';
import { StudentSidebar } from '../common/Sidebar';
import { DownloadIcon } from '../common/Icons';
import { defaultQuestions } from '../../data/mockData';
import { translations } from '../../data/translations';

export const TestResults = ({ examSummary, onNavigate, lang = 'en' }) => {
  const [activeTab, setActiveTab] = useState('Question Analysis');
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  const userAnswers = examSummary?.answers || {
    1: 'A', 2: 'C', 3: 'C', 4: 'D', 5: 'B'
  };

  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;

  defaultQuestions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) {
      skippedCount++;
    } else if (ans === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalScore = correctCount * 4;
  const maxScore = defaultQuestions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const subjectBreakdown = [
    { topic: 'Physics & Motion', topicHi: 'भौतिक विज्ञान व गति', score: 88, color: '#60D6A7' },
    { topic: 'Optics & Light', topicHi: 'प्रकाशिकी व लेंस', score: 80, color: '#7F58FA' },
    { topic: 'Algebra & Polynomials', topicHi: 'बीजगणित व बहुपद', score: 90, color: '#93C5FD' },
    { topic: 'Cell Biology', topicHi: 'कोशिका विज्ञान', score: 85, color: '#FFB3C7' },
    { topic: 'Mensuration', topicHi: 'क्षेत्रमिति', score: 80, color: '#FDE68A' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <StudentSidebar activeTab="Performance" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{t.resultsTitle}</h1>
            <p className="text-xs text-gray-500">
              GSSS 52 LNP (MANJHUWAS) &bull; {isHi ? 'कक्षा 10 मूल्यांकन रिपोर्ट' : 'Class 10 Assessment Report Card'}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-[#F3EFFF] text-[#7F58FA] hover:bg-[#7F58FA] hover:text-white text-xs font-bold transition-all shadow-sm"
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            <span>{t.downloadReport}</span>
          </button>
        </header>

        <main className="p-6 sm:p-8 space-y-7 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Donut Score Gauge */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-soft flex flex-col items-center text-center justify-between">
              <div className="w-full">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {t.performanceSummary}
                </span>

                <div className="relative w-44 h-44 mx-auto my-5 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#60D6A7] transition-all duration-1000 ease-out"
                      strokeDasharray={`${percentage}, 100`}
                      strokeLinecap="round"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-extrabold text-gray-900">{percentage}%</span>
                    <span className="text-[11px] font-semibold text-gray-500">{t.yourScore}</span>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <p className="text-xl font-extrabold text-gray-900">{totalScore} / {maxScore} {isHi ? 'अंक' : 'Marks'}</p>
                  <p className="text-xs text-gray-500">
                    {t.percentile}: <span className="font-bold text-[#7F58FA]">94.2% 🎯</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 w-full py-2.5 px-4 bg-[#E9FBF3] border border-emerald-200 rounded-2xl flex items-center justify-center gap-2 text-emerald-800 text-xs font-bold">
                <span>{t.greatPerformance}</span>
              </div>
            </div>

            {/* Subject Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-soft text-center">
                  <p className="text-[11px] text-gray-400 font-semibold">{isHi ? 'कुल प्रश्न' : 'Total Questions'}</p>
                  <p className="text-xl font-extrabold text-gray-900 mt-1">{defaultQuestions.length}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 bg-emerald-50/30 shadow-soft text-center">
                  <p className="text-[11px] text-emerald-700 font-semibold">{isHi ? 'सही उत्तर' : 'Correct'}</p>
                  <p className="text-xl font-extrabold text-emerald-600 mt-1">{correctCount}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-rose-100 bg-rose-50/30 shadow-soft text-center">
                  <p className="text-[11px] text-rose-700 font-semibold">{isHi ? 'गलत उत्तर' : 'Incorrect'}</p>
                  <p className="text-xl font-extrabold text-rose-600 mt-1">{incorrectCount}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 bg-blue-50/30 shadow-soft text-center">
                  <p className="text-[11px] text-blue-700 font-semibold">{isHi ? 'ग्रेड' : 'Grade'}</p>
                  <p className="text-xl font-extrabold text-blue-600 mt-1">A1</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft">
                <h3 className="text-sm font-extrabold text-gray-900 mb-4">{t.subjectAnalysis}</h3>
                <div className="space-y-3.5">
                  {subjectBreakdown.map((item) => (
                    <div key={item.topic} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-700">
                          {isHi ? item.topicHi : item.topic}
                        </span>
                        <span className="font-bold text-gray-900">{item.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.score}%`,
                            backgroundColor: item.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Question Breakdown Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-5">
              <h3 className="text-sm font-extrabold text-gray-900">{t.questionAnalysis}</h3>
              <span className="text-xs text-gray-500 font-medium">
                GSSS 52 LNP &bull; {defaultQuestions.length} {isHi ? 'प्रश्न' : 'Questions'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pl-2">#</th>
                    <th className="pb-3">{isHi ? 'आपका उत्तर' : 'Your Answer'}</th>
                    <th className="pb-3">{isHi ? 'सही उत्तर' : 'Correct Answer'}</th>
                    <th className="pb-3">{isHi ? 'स्थिति' : 'Status'}</th>
                    <th className="pb-3">{isHi ? 'अध्याय' : 'Topic'}</th>
                    <th className="pb-3 pr-2 text-right">{isHi ? 'हल देखें' : 'Solution'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {defaultQuestions.map((q, idx) => {
                    const ans = userAnswers[q.id];
                    const isCorrect = ans === q.correctAnswer;
                    const isSkipped = !ans;

                    return (
                      <tr key={q.id} className="hover:bg-[#FDFAFF] transition-colors">
                        <td className="py-3.5 pl-2 font-bold text-gray-900">{idx + 1}</td>
                        <td className="py-3.5 font-bold">
                          {isSkipped ? (
                            <span className="text-gray-400 italic">{isHi ? 'छोड़ा गया' : 'Skipped'}</span>
                          ) : (
                            <span className={`px-2 py-0.5 rounded-md font-bold ${
                              isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                            }`}>
                              Option {ans}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 font-bold text-gray-800">
                          Option {q.correctAnswer}
                        </td>
                        <td className="py-3.5">
                          {isCorrect ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 font-bold">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-600 font-bold">
                              ✕
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 text-gray-700 font-medium">{q.topic}</td>
                        <td className="py-3.5 pr-2 text-right">
                          <button
                            onClick={() => alert(`Solution (हल):\n${isHi && q.explanationHi ? q.explanationHi : q.explanation}`)}
                            className="text-[#7F58FA] font-bold hover:underline"
                          >
                            {isHi ? 'हल देखें' : 'View Solution'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

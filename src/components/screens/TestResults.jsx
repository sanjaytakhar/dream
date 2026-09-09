import React, { useState } from 'react';
import { StudentSidebar } from '../common/Sidebar';
import { DownloadIcon } from '../common/Icons';
import { defaultQuestions } from '../../data/mockData';
import { translations } from '../../data/translations';

export const TestResults = ({ examSummary, questions, testInfo, onNavigate, lang = 'en' }) => {
  const [activeTab, setActiveTab] = useState('Question Analysis');
  const [selectedSolutionQ, setSelectedSolutionQ] = useState(null);
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  const activeQuestions = examSummary?.questions || (questions && questions.length > 0 ? questions : defaultQuestions);
  const activeTestInfo = examSummary?.testInfo || testInfo;

  const userAnswers = examSummary?.answers || {
    1: 'A', 2: 'C', 3: 'C', 4: 'D', 5: 'B'
  };

  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;
  let totalScore = 0;
  let maxScore = 0;

  activeQuestions.forEach((q) => {
    const qMarks = q.marks || 1;
    maxScore += qMarks;
    const ans = userAnswers[q.id];
    if (!ans) {
      skippedCount++;
    } else if (ans === q.correctAnswer) {
      correctCount++;
      totalScore += qMarks;
    } else {
      incorrectCount++;
    }
  });

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  // Dynamic chapter breakdown
  const chaptersMap = {};
  activeQuestions.forEach((q) => {
    const chap = q.chapter || q.section || q.topic || 'General';
    if (!chaptersMap[chap]) {
      chaptersMap[chap] = { total: 0, correct: 0 };
    }
    chaptersMap[chap].total++;
    if (userAnswers[q.id] === q.correctAnswer) {
      chaptersMap[chap].correct++;
    }
  });

  const colors = ['#7F58FA', '#60D6A7', '#3B82F6', '#EC4899', '#F59E0B', '#10B981', '#8B5CF6'];
  const subjectBreakdown = Object.keys(chaptersMap).map((chapName, idx) => {
    const item = chaptersMap[chapName];
    const scorePct = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    
    let labelHi = chapName
      .replace('Chapter 1: Crop Production and Management', 'अध्याय 1: फसल उत्पादन एवं प्रबंध')
      .replace('Chapter 5: Coal and Petroleum', 'अध्याय 5: कोयला और पेट्रोलियम')
      .replace('Chapter 7: Conservation of Plants and Animals', 'अध्याय 7: पौधे एवं जंतुओं का संरक्षण')
      .replace('Chapter 5: Getting Started with Python', 'अध्याय 5: पायथन की शुरुआत')
      .replace('Chapter 6: Flow of Control', 'अध्याय 6: प्रवाह नियंत्रण (कंट्रोल फ्लो)')
      .replace('Chapter 7: Functions', 'अध्याय 7: फंक्शंस (Functions)')
      .replace('Chapter 8: Strings', 'अध्याय 8: स्ट्रिंग्स (Strings)')
      .replace('Chapter 9: Lists', 'अध्याय 9: लिस्ट्स (Lists)')
      .replace('Chapter 10: Tuples & Dictionaries', 'अध्याय 10: टुपल्स एवं डिक्शनरी')
      .replace('Section A - Physics', 'भाग अ - भौतिकी')
      .replace('Section A - Science', 'भाग अ - विज्ञान')
      .replace('Section A - Mathematics', 'भाग अ - गणित');

    return {
      topic: chapName,
      topicHi: labelHi,
      score: scorePct,
      correct: item.correct,
      total: item.total,
      color: colors[idx % colors.length]
    };
  });

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <StudentSidebar activeTab="Performance" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{t.resultsTitle}</h1>
            <p className="text-xs text-gray-500">
              GSSS 52 LNP (MANJHUWAS) &bull; {activeTestInfo ? (isHi ? activeTestInfo.titleHi || activeTestInfo.title : activeTestInfo.title) : (isHi ? 'कक्षा 10 मूल्यांकन रिपोर्ट' : 'Class 10 Assessment Report Card')}
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
                <span>{percentage >= 75 ? (isHi ? 'शानदार प्रदर्शन! आपने परीक्षा उत्तीर्ण की!' : 'Outstanding Performance! You mastered this test!') : t.greatPerformance}</span>
              </div>
            </div>

            {/* Subject Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-soft text-center">
                  <p className="text-[11px] text-gray-400 font-semibold">{isHi ? 'कुल प्रश्न' : 'Total Questions'}</p>
                  <p className="text-xl font-extrabold text-gray-900 mt-1">{activeQuestions.length}</p>
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
                  <p className="text-xl font-extrabold text-blue-600 mt-1">
                    {percentage >= 90 ? 'A1' : percentage >= 80 ? 'A2' : percentage >= 70 ? 'B1' : percentage >= 60 ? 'B2' : 'C1'}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft">
                <h3 className="text-sm font-extrabold text-gray-900 mb-4">
                  {isHi ? 'अध्यायवार विश्लेषण (Chapter Analysis)' : t.subjectAnalysis}
                </h3>
                <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                  {subjectBreakdown.map((item) => (
                    <div key={item.topic} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-700">
                          {isHi ? item.topicHi : item.topic}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-gray-400">({item.correct}/{item.total})</span>
                          <span className="font-bold text-gray-900">{item.score}%</span>
                        </div>
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
                GSSS 52 LNP &bull; {activeQuestions.length} {isHi ? 'प्रश्न' : 'Questions'}
              </span>
            </div>

            <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pl-2">#</th>
                    <th className="pb-3">{isHi ? 'आपका उत्तर' : 'Your Answer'}</th>
                    <th className="pb-3">{isHi ? 'सही उत्तर' : 'Correct Answer'}</th>
                    <th className="pb-3">{isHi ? 'स्थिति' : 'Status'}</th>
                    <th className="pb-3">{isHi ? 'अध्याय / विषय' : 'Topic / Chapter'}</th>
                    <th className="pb-3 pr-2 text-right">{isHi ? 'हल देखें' : 'Solution'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {activeQuestions.map((q, idx) => {
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
                        <td className="py-3.5 text-gray-700 font-medium">
                          <span className="text-gray-900 font-semibold">{q.topic}</span>
                          {q.chapter && <span className="block text-[10px] text-gray-400">{q.chapter}</span>}
                        </td>
                        <td className="py-3.5 pr-2 text-right">
                          <button
                            onClick={() => setSelectedSolutionQ(q)}
                            className="px-3 py-1 bg-[#F3EFFF] text-[#7F58FA] rounded-full font-bold hover:bg-[#7F58FA] hover:text-white transition-all text-xs"
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

      {/* Solution Detail Modal */}
      {selectedSolutionQ && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div>
                <span className="text-xs font-bold text-[#7F58FA]">
                  {selectedSolutionQ.chapter || 'Question Solution'}
                </span>
                <h3 className="text-base font-extrabold text-gray-900">
                  {isHi ? `प्रश्न संख्या ${selectedSolutionQ.id} का विस्तृत हल` : `Question ${selectedSolutionQ.id} Detailed Solution`}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSolutionQ(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                  {isHi && selectedSolutionQ.questionHi ? selectedSolutionQ.questionHi : selectedSolutionQ.question}
                </p>
              </div>

              {selectedSolutionQ.options && (
                <div className="space-y-2">
                  <p className="font-bold text-gray-700">{isHi ? 'विकल्प:' : 'Options:'}</p>
                  {selectedSolutionQ.options.map((opt) => {
                    const isRight = opt.id === selectedSolutionQ.correctAnswer;
                    const wasChosen = userAnswers[selectedSolutionQ.id] === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={`p-3 rounded-xl border flex items-center justify-between ${
                          isRight
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                            : wasChosen
                            ? 'bg-rose-50 border-rose-300 text-rose-900'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <span>
                          <strong className="mr-2">{opt.id}.</strong>
                          {isHi && opt.textHi ? opt.textHi : opt.text}
                        </span>
                        {isRight && (
                          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                            ✓ {isHi ? 'सही उत्तर' : 'Correct Answer'}
                          </span>
                        )}
                        {!isRight && wasChosen && (
                          <span className="text-xs text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full font-bold">
                            ✕ {isHi ? 'आपका उत्तर' : 'Your Answer'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                <p className="font-bold text-[#7F58FA] mb-1">
                  💡 {isHi ? 'व्याख्या एवं स्पष्टीकरण:' : 'Explanation:'}
                </p>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {isHi && selectedSolutionQ.explanationHi ? selectedSolutionQ.explanationHi : selectedSolutionQ.explanation}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSolutionQ(null)}
                className="px-6 py-2 rounded-full bg-[#7F58FA] text-white text-xs font-bold hover:bg-[#6C44E8] shadow-md shadow-[#7F58FA]/20"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

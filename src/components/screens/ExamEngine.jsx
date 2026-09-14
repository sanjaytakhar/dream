import React, { useState, useEffect } from 'react';
import { ClockIcon, PauseIcon, PlayIcon } from '../common/Icons';
import { defaultQuestions } from '../../data/mockData';
import { translations } from '../../data/translations';
import { ThemeToggle } from '../common/ThemeToggle';
const STORAGE_KEY = 'pariksha_active_exam';

const getInitialSession = (testId) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.testId === testId) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading active exam from storage:', e);
  }
  return null;
};

export const ExamEngine = ({
  questions,
  testInfo,
  onFinishExam,
  onExit,
  lang = 'en',
  restoredSession = null,
  theme = 'light',
  onToggleTheme
}) => {
  const activeQuestions = questions && questions.length > 0 ? questions : defaultQuestions;
  const initialTime = testInfo?.durationMins
    ? testInfo.durationMins * 60
    : (activeQuestions.length === 40 ? 3600 : 5400);

  // Retrieve saved progress from localStorage or restored session
  const existingSession = restoredSession || getInitialSession(testInfo?.id);

  const [currentIdx, setCurrentIdx] = useState(() => {
    if (existingSession && typeof existingSession.currentIdx === 'number') {
      return Math.min(Math.max(0, existingSession.currentIdx), activeQuestions.length - 1);
    }
    return 0;
  });

  const [answers, setAnswers] = useState(() => {
    if (existingSession && existingSession.answers) {
      return existingSession.answers;
    }
    return {};
  });

  const [markedForReview, setMarkedForReview] = useState(() => {
    if (existingSession && existingSession.markedForReview) {
      return existingSession.markedForReview;
    }
    return {};
  });

  const [timeLeft, setTimeLeft] = useState(() => {
    if (existingSession && existingSession.endTime) {
      const remaining = Math.max(0, Math.floor((existingSession.endTime - Date.now()) / 1000));
      return remaining > 0 ? remaining : initialTime;
    }
    return initialTime;
  });

  const [isPaused, setIsPaused] = useState(false);
  const [pauseStart, setPauseStart] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showRestoredNotice, setShowRestoredNotice] = useState(() => {
    return Boolean(
      existingSession &&
      (Object.keys(existingSession.answers || {}).length > 0 ||
        existingSession.currentIdx > 0 ||
        (existingSession.endTime && (existingSession.endTime - Date.now()) < (initialTime * 1000 - 5000)))
    );
  });

  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  // Warn user before accidental page reload / closing tab during active exam
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Auto-dismiss restore notice after 6 seconds
  useEffect(() => {
    if (showRestoredNotice) {
      const timer = setTimeout(() => {
        setShowRestoredNotice(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showRestoredNotice]);

  // Synchronize state changes immediately to localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      let session = saved ? JSON.parse(saved) : null;
      if (!session || session.testId !== testInfo?.id) {
        session = {
          testId: testInfo?.id,
          endTime: Date.now() + timeLeft * 1000,
          initialDuration: initialTime,
          startedAt: Date.now()
        };
      }
      session.answers = answers;
      session.markedForReview = markedForReview;
      session.currentIdx = currentIdx;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch (e) {
      console.error('Error saving exam progress to localStorage:', e);
    }
  }, [answers, markedForReview, currentIdx, testInfo?.id, initialTime, timeLeft]);

  // Countdown timer synced with target endTime
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const session = JSON.parse(saved);
          if (session && session.endTime) {
            const remaining = Math.max(0, Math.floor((session.endTime - Date.now()) / 1000));
            setTimeLeft(remaining);
            if (remaining <= 0) {
              clearInterval(timer);
              handleSubmitConfirmed();
            }
            return;
          }
        }
      } catch (e) {}

      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitConfirmed();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, testInfo?.id]);

  const togglePause = () => {
    if (!isPaused) {
      setIsPaused(true);
      setPauseStart(Date.now());
    } else {
      setIsPaused(false);
      if (pauseStart) {
        const duration = Date.now() - pauseStart;
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const session = JSON.parse(saved);
            if (session.endTime) {
              session.endTime += duration;
              localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
            }
          }
        } catch (e) {}
        setPauseStart(null);
      }
    }
  };

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const currentQ = activeQuestions[currentIdx] || activeQuestions[0];

  const handleSelectOption = (optId) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: optId }));
  };

  const toggleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleSaveAndNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const notAnsweredCount = activeQuestions.length - answeredCount;

  const handleSubmitConfirmed = () => {
    setShowSubmitModal(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    if (onFinishExam) {
      onFinishExam({
        answers,
        markedForReview,
        timeTakenSecs: Math.max(0, initialTime - timeLeft),
        totalQuestions: activeQuestions.length,
        questions: activeQuestions,
        testInfo
      });
    }
  };

  const handleExitConfirmed = () => {
    setShowExitModal(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    if (onExit) {
      onExit();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex flex-col select-none">
      {/* Restored Session Notification Banner */}
      {showRestoredNotice && (
        <div className="bg-emerald-500 text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm font-semibold shadow-md animate-in fade-in slide-in-from-top duration-300 z-40">
          <div className="flex items-center gap-2.5 max-w-5xl mx-auto w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0"></span>
            <span>
              {isHi
                ? '✅ परीक्षा सत्र पुनर्स्थापित किया गया: आपके हल किए गए उत्तर एवं शेष समय सुरक्षित हैं।'
                : '✅ Exam session restored: Your saved responses and remaining time have been preserved.'}
            </span>
          </div>
          <button
            onClick={() => setShowRestoredNotice(false)}
            className="text-white/80 hover:text-white font-bold ml-3 text-base shrink-0"
            title={isHi ? 'बंद करें' : 'Close'}
          >
            ✕
          </button>
        </div>
      )}

      {/* CBT Header */}
      <header className="bg-white border-b border-[#E5E7EB] px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}rajasthan-education-logo.png`}
            alt="सतत् एवं व्यापक शिक्षा"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm shrink-0"
          />
          <div>
            <h1 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
              परीक्षा &bull; GSSS 52 LNP (MANJHUWAS) &bull; {testInfo ? (isHi ? testInfo.titleHi || testInfo.title : testInfo.title) : (isHi ? 'कक्षा 10 बोर्ड मॉक परीक्षा' : 'Class 10 Board Mock Examination')}
            </h1>
            <p className="text-[11px] text-gray-500">
              {isHi ? 'डिजिटल कंप्यूटर लैब परीक्षा प्रणाली • राजस्थान सरकार' : 'Digital Assessment Lab System • Govt. of Rajasthan'}
            </p>
          </div>
        </div>

        {/* Timer, Exit & Submit Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onToggleTheme && (
            <ThemeToggle
              theme={theme}
              onToggleTheme={onToggleTheme}
              showLabels={false}
              className="hidden sm:inline-flex"
            />
          )}

          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full shadow-inner">
            <ClockIcon className="w-4 h-4 text-[#7F58FA]" />
            <span className="font-mono text-sm sm:text-base font-bold text-gray-800 tracking-wider">
              {formatTime(timeLeft)}
            </span>
            <button
              onClick={togglePause}
              title={isPaused ? "Resume" : "Pause"}
              className="ml-1 text-gray-400 hover:text-gray-700 transition-colors"
            >
              {isPaused ? <PlayIcon className="w-3.5 h-3.5 text-emerald-600" /> : <PauseIcon className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 sm:px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-500/20 transition-all hover:scale-105 active:scale-95"
          >
            {t.submit}
          </button>

          <button
            onClick={() => setShowExitModal(true)}
            title={isHi ? 'परीक्षा से बाहर निकलें' : 'Exit Exam'}
            className="px-3 sm:px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-600 hover:text-gray-900 text-xs font-semibold transition-all"
          >
            {isHi ? 'बाहर निकलें' : 'Exit'}
          </button>
        </div>
      </header>

      {/* Main CBT Workspace: Split Screen */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 gap-6">
        
        {/* Left Column: Question Palette */}
        <div className="w-full md:w-80 bg-white rounded-3xl p-5 border border-gray-100 shadow-soft flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div>
                <span className="text-xs font-bold text-[#7F58FA] uppercase tracking-wider">
                  {testInfo ? (isHi ? testInfo.subjectHi || testInfo.subject : testInfo.subject) : (isHi ? 'भाग अ - विज्ञान व गणित' : 'Section A')}
                </span>
                <h3 className="text-sm font-extrabold text-gray-800">
                  {isHi ? 'प्रश्न तालिका' : 'Question Palette'}
                </h3>
              </div>
              <span className="text-xs bg-[#F3EFFF] text-[#7F58FA] font-bold px-2.5 py-1 rounded-full">
                {activeQuestions.length} {isHi ? 'प्रश्न' : 'Questions'}
              </span>
            </div>

            {/* Grid numbers */}
            <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
              {activeQuestions.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = !!answers[q.id];
                const isMarked = !!markedForReview[q.id];

                let bgClass = 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                if (isAnswered && isMarked) {
                  bgClass = 'bg-purple-600 text-white shadow-sm font-extrabold';
                } else if (isAnswered) {
                  bgClass = 'bg-emerald-500 text-white shadow-sm font-extrabold';
                } else if (isMarked) {
                  bgClass = 'bg-amber-500 text-white shadow-sm font-extrabold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center relative ${bgClass} ${
                      isCurrent ? 'ring-2 ring-offset-1 ring-[#7F58FA] scale-105 font-extrabold' : ''
                    }`}
                  >
                    {idx + 1}
                    {isMarked && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Palette Legend */}
          <div className="pt-5 border-t border-gray-100 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="text-gray-600 font-medium">{t.answered} ({answeredCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-gray-600 font-medium">{isHi ? 'समीक्षा हेतु चिह्नित' : 'Marked for Review'} ({reviewCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-200 shrink-0"></span>
              <span className="text-gray-600 font-medium">{t.notAnswered} ({notAnsweredCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-[#7F58FA] bg-white shrink-0"></span>
              <span className="text-gray-600 font-medium">{isHi ? 'वर्तमान प्रश्न' : 'Current Question'}</span>
            </div>
          </div>
        </div>

        {/* Center/Right Main Question Panel */}
        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-soft flex flex-col justify-between">
          <div>
            {/* Question Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {currentQ.chapter || currentQ.section || (isHi ? 'भाग अ' : 'Section A')} &bull; {currentQ.topic}
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5">
                  {t.question} {currentIdx + 1} {t.of} {activeQuestions.length}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs font-semibold text-gray-500">
                  {isHi ? 'अंक:' : 'Marks:'} <span className="text-emerald-600 font-bold">+{currentQ.marks}</span>
                </div>
              </div>
            </div>

            {/* Question Prompt */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
                {isHi && currentQ.questionHi ? currentQ.questionHi : currentQ.question}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3.5">
              {currentQ.options.map((option) => {
                const isSelected = answers[currentQ.id] === option.id;
                const optText = isHi && option.textHi ? option.textHi : option.text;
                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#2dc38c] bg-[#e9fbf3]/60 shadow-sm ring-2 ring-[#2dc38c]/20'
                        : 'border-gray-200 hover:border-[#beddd0] hover:bg-gray-50/70'
                    }`}
                  >
                    {/* Custom Uiverse.io animated checkbox by elijahgummer */}
                    <div className="uiverse-checkbox-container pointer-events-none">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        aria-label={`Option ${option.id}`}
                      />
                      <div className="checkmark"></div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                        isSelected
                          ? 'bg-[#2dc38c] text-white shadow-sm'
                          : 'border-2 border-gray-300 text-gray-600'
                      }`}
                    >
                      {option.id}
                    </div>
                    <span className="text-sm sm:text-base text-gray-800 font-medium">
                      {optText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-gray-100 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIdx === 0}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                currentIdx === 0
                  ? 'opacity-40 cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
              }`}
            >
              &larr; {t.previous}
            </button>

            <div className="flex flex-wrap items-center gap-3">
              {answers[currentQ.id] && (
                <button
                  onClick={() => {
                    const copy = { ...answers };
                    delete copy[currentQ.id];
                    setAnswers(copy);
                  }}
                  className="text-xs text-rose-500 hover:underline font-semibold"
                >
                  {isHi ? 'उत्तर हटाएं' : 'Clear Response'}
                </button>
              )}

              <button
                onClick={toggleMarkForReview}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                  markedForReview[currentQ.id]
                    ? 'border-amber-400 bg-amber-50 text-amber-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {markedForReview[currentQ.id]
                  ? (isHi ? '★ समीक्षा हेतु चिह्नित' : '★ Marked for Review')
                  : (isHi ? '☆ समीक्षा हेतु चिह्न लगाएं' : '☆ Mark for Review')}
              </button>

              <button
                onClick={handleSaveAndNext}
                className="px-7 py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95"
              >
                {currentIdx === activeQuestions.length - 1 ? (isHi ? 'परीक्षा सबमिट करें' : 'Submit Exam') : `${t.saveAndNext} \u2192`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Examination Paused Modal */}
      {isPaused && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 text-2xl font-bold">
              ⏸️
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-2">
              {isHi ? 'परीक्षा रुकी हुई है' : 'Examination Paused'}
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              {isHi ? 'टाइमर रुका हुआ है। परीक्षा जारी रखने के लिए नीचे क्लिक करें।' : 'Timer is paused. Click below when you are ready to resume.'}
            </p>
            <button
              onClick={togglePause}
              className="w-full py-3 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-sm font-bold shadow-lg shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95"
            >
              {isHi ? 'परीक्षा पुनः शुरू करें' : 'Resume Examination'}
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.submitConfirmTitle}</h3>
            <p className="text-xs text-gray-500 mb-4">{t.submitConfirmDesc}</p>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-2 text-xs">
              <div className="flex justify-between font-medium text-gray-600">
                <span>{isHi ? 'कुल प्रश्न:' : 'Total Questions:'}</span>
                <span className="font-bold text-gray-900">{activeQuestions.length}</span>
              </div>
              <div className="flex justify-between font-medium text-emerald-600">
                <span>{isHi ? 'हल किए गए:' : 'Attempted:'}</span>
                <span className="font-bold">{answeredCount}</span>
              </div>
              {reviewCount > 0 && (
                <div className="flex justify-between font-medium text-amber-600">
                  <span>{isHi ? 'समीक्षा हेतु चिह्नित:' : 'Marked for Review:'}</span>
                  <span className="font-bold">{reviewCount}</span>
                </div>
              )}
              <div className="flex justify-between font-medium text-gray-500">
                <span>{isHi ? 'हल नहीं किए गए:' : 'Unattempted:'}</span>
                <span className="font-bold">{notAnsweredCount}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-5 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                {isHi ? 'परीक्षा जारी रखें' : 'Continue Exam'}
              </button>
              <button
                onClick={handleSubmitConfirmed}
                className="px-6 py-2 rounded-full bg-[#7F58FA] text-white text-xs font-bold hover:bg-[#6C44E8] shadow-md shadow-[#7F58FA]/20"
              >
                {isHi ? 'पुष्टि करें और जमा करें' : 'Confirm Submission'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 text-xl font-bold">
              ⚠️
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {isHi ? 'क्या आप परीक्षा से बाहर निकलना चाहते हैं?' : 'Exit Examination?'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              {isHi
                ? 'यदि आप अभी बाहर निकलते हैं, तो आपका वर्तमान सत्र समाप्त हो जाएगा। क्या आप वाकई मुख्य सूची में वापस जाना चाहते हैं?'
                : 'If you exit now, your active exam session will be terminated and unsaved progress will be cleared. Do you want to return to the catalog?'}
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowExitModal(false)}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-all"
              >
                {isHi ? 'नहीं, परीक्षा जारी रखें' : 'Stay in Exam'}
              </button>
              <button
                onClick={handleExitConfirmed}
                className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/20"
              >
                {isHi ? 'हाँ, बाहर निकलें' : 'Yes, Exit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { UiverseLoader } from './components/common/UiverseLoader';

import { LandingPage } from './components/screens/LandingPage';
import { MockTestsCatalog } from './components/screens/MockTestsCatalog';
import { ExamEngine } from './components/screens/ExamEngine';
import { TestResults } from './components/screens/TestResults';
import { SimulationHub } from './components/screens/SimulationHub';

import { mockTests, defaultQuestions } from './data/mockData';
import { class11CsQuestions } from './data/class11CsQuestions';
import {
  class12CsBoard2025Questions,
  class12CsBoard2023Questions,
  class12CsBoard2022Questions,
  class12CsGrandMasterQuestions
} from './data/class12CsQuestions';
import {
  class8CropQuestions,
  class8CoalQuestions,
  class8ConservationQuestions,
  class8CombinedResourcesQuestions,
  class8GrandMasterQuestions
} from './data/class8ScienceQuestions';
import {
  class6MathsTest1Questions,
  class6MathsTest2Questions,
  class6MathsTest3Questions
} from './data/class6MathsQuestions';

// Storage Keys
export const EXAM_STORAGE_KEY = 'pariksha_active_exam';
export const RESULTS_STORAGE_KEY = 'pariksha_last_results';
export const LANG_STORAGE_KEY = 'pariksha_lang';
export const SCREEN_STORAGE_KEY = 'pariksha_screen';

export function getTestById(testId) {
  if (!testId) return mockTests[0];
  return mockTests.find((t) => t.id === testId) || mockTests[0];
}

export function getQuestionsForTest(testOrId) {
  const testId = typeof testOrId === 'string' ? testOrId : testOrId?.id;
  if (!testId) return class6MathsTest1Questions;

  // Class 6 Mathematics Chapter 10 Tests
  if (testId === 'c6-maths-ch10-t1') {
    return class6MathsTest1Questions;
  } else if (testId === 'c6-maths-ch10-t2') {
    return class6MathsTest2Questions;
  } else if (testId === 'c6-maths-ch10-t3') {
    return class6MathsTest3Questions;
  // Class 12 Board Computer Science Papers
  } else if (testId === 'c12-cs-board-2025') {
    return class12CsBoard2025Questions;
  } else if (testId === 'c12-cs-board-2023') {
    return class12CsBoard2023Questions;
  } else if (testId === 'c12-cs-board-2022') {
    return class12CsBoard2022Questions;
  } else if (testId === 'c12-cs-grand-master') {
    return class12CsGrandMasterQuestions;
  // Class 8 Science Tests
  } else if (testId === 'c8-sci-t1-crops') {
    return class8CropQuestions;
  } else if (testId === 'c8-sci-t2-coal-petro') {
    return class8CoalQuestions;
  } else if (testId === 'c8-sci-t3-conservation') {
    return class8ConservationQuestions;
  } else if (testId === 'c8-sci-t4-resources') {
    return class8CombinedResourcesQuestions;
  } else if (testId === 'c8-sci-t5-grand') {
    return class8GrandMasterQuestions;
  // Class 11 CS
  } else if (
    testId === 'c11-cs-python' ||
    (typeof testOrId === 'object' && testOrId?.schoolClass === 'Class 11' && testOrId?.subject === 'Computer Science')
  ) {
    return class11CsQuestions;
  } else {
    return defaultQuestions;
  }
}

export function App() {
  // Check if there is an active exam or scorecard saved in localStorage
  const [initialState] = useState(() => {
    try {
      const savedActiveExam = localStorage.getItem(EXAM_STORAGE_KEY);
      if (savedActiveExam) {
        const session = JSON.parse(savedActiveExam);
        if (session && session.testId && session.endTime) {
          const remaining = Math.max(0, Math.floor((session.endTime - Date.now()) / 1000));
          if (remaining > 0) {
            const test = getTestById(session.testId);
            const questions = getQuestionsForTest(test);
            return {
              screen: 'cbt',
              activeTest: test,
              activeQuestions: questions,
              restoredSession: session,
              examSummary: null
            };
          } else {
            // Exam session expired
            localStorage.removeItem(EXAM_STORAGE_KEY);
          }
        }
      }

      // If not taking exam, check if user was on results page
      const savedResults = localStorage.getItem(RESULTS_STORAGE_KEY);
      if (savedResults) {
        const parsed = JSON.parse(savedResults);
        if (parsed && parsed.examSummary) {
          const test = parsed.activeTest || getTestById(parsed.activeTestId);
          const questions = parsed.examSummary.questions || getQuestionsForTest(test);
          return {
            screen: 'results',
            activeTest: test,
            activeQuestions: questions,
            restoredSession: null,
            examSummary: parsed.examSummary
          };
        }
      }

      // Check saved screen (e.g. simulations)
      const savedScreen = localStorage.getItem(SCREEN_STORAGE_KEY);
      if (savedScreen === 'simulations') {
        return {
          screen: 'simulations',
          activeTest: mockTests[0],
          activeQuestions: class6MathsTest1Questions,
          restoredSession: null,
          examSummary: null
        };
      }
    } catch (e) {
      console.error('Error recovering state from localStorage:', e);
    }
    return null;
  });

  const [currentScreen, setCurrentScreen] = useState(
    initialState ? initialState.screen : 'landing'
  );
  const [lang, setLang] = useState(() => {
    return localStorage.getItem(LANG_STORAGE_KEY) || 'hi';
  });
  const [selectedClassFilter, setSelectedClassFilter] = useState('All');
  const [activeTest, setActiveTest] = useState(
    initialState ? initialState.activeTest : mockTests[0]
  );
  const [activeQuestions, setActiveQuestions] = useState(
    initialState ? initialState.activeQuestions : class6MathsTest1Questions
  );
  const [examSummary, setExamSummary] = useState(
    initialState ? initialState.examSummary : null
  );
  const [restoredSession, setRestoredSession] = useState(
    initialState ? initialState.restoredSession : null
  );
  const [loadingOverlay, setLoadingOverlay] = useState(null);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'hi' : 'en';
      try {
        localStorage.setItem(LANG_STORAGE_KEY, next);
      } catch (e) {}
      return next;
    });
  };

  const handleStartExam = (testOrId) => {
    let test = null;
    if (typeof testOrId === 'string') {
      test = getTestById(testOrId);
    } else if (testOrId && typeof testOrId === 'object' && testOrId.id) {
      test = testOrId;
    } else {
      test = mockTests[0];
    }
    const questions = getQuestionsForTest(test);

    setActiveTest(test);
    setActiveQuestions(questions);

    const durationSecs = test.durationMins
      ? test.durationMins * 60
      : (questions.length === 40 ? 3600 : 5400);

    const newSession = {
      testId: test.id,
      endTime: Date.now() + durationSecs * 1000,
      initialDuration: durationSecs,
      answers: {},
      markedForReview: {},
      currentIdx: 0,
      startedAt: Date.now()
    };

    try {
      localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(newSession));
      localStorage.removeItem(RESULTS_STORAGE_KEY);
    } catch (e) {}

    setRestoredSession(newSession);

    setLoadingOverlay({
      text: lang === 'hi' ? 'परीक्षा लोड हो रही है' : 'Loading Examination',
      subtitle: lang === 'hi' ? 'प्रश्न पत्र तैयार किया जा रहा है...' : 'Preparing question paper...'
    });

    setTimeout(() => {
      setCurrentScreen('cbt');
      setLoadingOverlay(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1300);
  };

  const handleFinishExam = (summary) => {
    try {
      localStorage.removeItem(EXAM_STORAGE_KEY);
      localStorage.setItem(
        RESULTS_STORAGE_KEY,
        JSON.stringify({
          examSummary: summary,
          activeTestId: activeTest?.id,
          activeTest: activeTest,
          timestamp: Date.now()
        })
      );
    } catch (e) {}

    setRestoredSession(null);
    setExamSummary(summary);
    setLoadingOverlay({
      text: lang === 'hi' ? 'अंक तालिका तैयार हो रही है' : 'Generating Report Card',
      subtitle: lang === 'hi' ? 'उत्तरों की जांच व विश्लेषण किया जा रहा है...' : 'Evaluating answers and calculating score...'
    });

    setTimeout(() => {
      setCurrentScreen('results');
      setLoadingOverlay(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1300);
  };

  const handleExitExam = () => {
    try {
      localStorage.removeItem(EXAM_STORAGE_KEY);
    } catch (e) {}
    setRestoredSession(null);
    setCurrentScreen('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (screen) => {
    if (currentScreen === 'results') {
      try {
        localStorage.removeItem(RESULTS_STORAGE_KEY);
      } catch (e) {}
    }
    try {
      if (screen !== 'cbt') {
        localStorage.setItem(SCREEN_STORAGE_KEY, screen);
      }
    } catch (e) {}
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAFF] font-sans antialiased text-[#1F2937]">
      {/* Uiverse Loader Modal Overlay */}
      {loadingOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all">
          <div className="bg-[#1a1a24] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col items-center max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in-95 duration-200">
            <img
              src={`${import.meta.env.BASE_URL}rajasthan-education-logo.png`}
              alt="Official Logo"
              className="w-14 h-14 object-contain mb-4 drop-shadow-md"
            />
            <UiverseLoader text={loadingOverlay.text} />
            {loadingOverlay.subtitle && (
              <p className="mt-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                {loadingOverlay.subtitle}
              </p>
            )}
            <span className="mt-3 text-[11px] text-[#2dc38c] font-semibold tracking-wider uppercase">
              GSSS 52 LNP (MANJHUWAS)
            </span>
          </div>
        </div>
      )}

      {/* Clean School Header across all browsing pages */}
      {currentScreen !== 'cbt' && (
        <Navbar
          onNavigate={handleNavigate}
          lang={lang}
          onToggleLang={toggleLang}
        />
      )}

      {/* Main Student Portal View */}
      <div className="flex-1">
        {currentScreen === 'landing' && (
          <LandingPage
            onNavigate={handleNavigate}
            onStartTest={handleStartExam}
            onSelectClassFilter={(cls) => setSelectedClassFilter(cls)}
            lang={lang}
          />
        )}

        {currentScreen === 'catalog' && (
          <MockTestsCatalog
            selectedClassFilter={selectedClassFilter}
            onNavigate={handleNavigate}
            onStartTest={handleStartExam}
            lang={lang}
          />
        )}

        {currentScreen === 'cbt' && (
          <ExamEngine
            questions={activeQuestions}
            testInfo={activeTest}
            onFinishExam={handleFinishExam}
            onExit={handleExitExam}
            lang={lang}
            restoredSession={restoredSession}
          />
        )}

        {currentScreen === 'results' && (
          <TestResults
            examSummary={examSummary}
            questions={activeQuestions}
            testInfo={activeTest}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {currentScreen === 'simulations' && (
          <SimulationHub
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}

export default App;

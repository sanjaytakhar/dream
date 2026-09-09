import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { UiverseLoader } from './components/common/UiverseLoader';

import { LandingPage } from './components/screens/LandingPage';
import { MockTestsCatalog } from './components/screens/MockTestsCatalog';
import { ExamEngine } from './components/screens/ExamEngine';
import { TestResults } from './components/screens/TestResults';

import { mockTests, defaultQuestions } from './data/mockData';
import { class11CsQuestions } from './data/class11CsQuestions';
import {
  class8CropQuestions,
  class8CoalQuestions,
  class8ConservationQuestions,
  class8CombinedResourcesQuestions,
  class8GrandMasterQuestions
} from './data/class8ScienceQuestions';

export function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [lang, setLang] = useState('hi'); // Defaulting to Hindi
  const [selectedClassFilter, setSelectedClassFilter] = useState('All');
  const [activeTest, setActiveTest] = useState(mockTests[0]);
  const [activeQuestions, setActiveQuestions] = useState(class8CropQuestions);
  const [examSummary, setExamSummary] = useState(null);
  const [loadingOverlay, setLoadingOverlay] = useState(null);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleStartExam = (testOrId) => {
    let test = null;
    if (typeof testOrId === 'string') {
      test = mockTests.find((t) => t.id === testOrId) || mockTests[0];
    } else if (testOrId && typeof testOrId === 'object' && testOrId.id) {
      test = testOrId;
    } else {
      test = mockTests[0];
    }
    setActiveTest(test);

    if (test.id === 'c8-sci-t1-crops') {
      setActiveQuestions(class8CropQuestions);
    } else if (test.id === 'c8-sci-t2-coal-petro') {
      setActiveQuestions(class8CoalQuestions);
    } else if (test.id === 'c8-sci-t3-conservation') {
      setActiveQuestions(class8ConservationQuestions);
    } else if (test.id === 'c8-sci-t4-resources') {
      setActiveQuestions(class8CombinedResourcesQuestions);
    } else if (test.id === 'c8-sci-t5-grand') {
      setActiveQuestions(class8GrandMasterQuestions);
    } else if (
      test.id === 'c11-cs-python' ||
      test.subject === 'Computer Science' ||
      (test.title && test.title.includes('Computer Science'))
    ) {
      setActiveQuestions(class11CsQuestions);
    } else {
      setActiveQuestions(defaultQuestions);
    }

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
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          lang={lang}
          onToggleLang={toggleLang}
        />
      )}

      {/* Main Student Portal View */}
      <div className="flex-1">
        {currentScreen === 'landing' && (
          <LandingPage
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartTest={handleStartExam}
            onSelectClassFilter={(cls) => setSelectedClassFilter(cls)}
            lang={lang}
          />
        )}

        {currentScreen === 'catalog' && (
          <MockTestsCatalog
            selectedClassFilter={selectedClassFilter}
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartTest={handleStartExam}
            lang={lang}
          />
        )}

        {currentScreen === 'cbt' && (
          <ExamEngine
            questions={activeQuestions}
            testInfo={activeTest}
            onFinishExam={handleFinishExam}
            onExit={() => setCurrentScreen('catalog')}
            lang={lang}
          />
        )}

        {currentScreen === 'results' && (
          <TestResults
            examSummary={examSummary}
            questions={activeQuestions}
            testInfo={activeTest}
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}

export default App;

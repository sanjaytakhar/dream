import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';

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

    setCurrentScreen('cbt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishExam = (summary) => {
    setExamSummary(summary);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAFF] font-sans antialiased text-[#1F2937]">
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

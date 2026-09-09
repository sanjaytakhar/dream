import React, { useState } from 'react';
import { ScreenSwitcher } from './components/common/ScreenSwitcher';
import { Navbar } from './components/common/Navbar';
import { DesignSystemBar } from './components/common/DesignSystemBar';

import { LandingPage } from './components/screens/LandingPage';
import { AuthModal } from './components/screens/AuthModal';
import { StudentDashboard } from './components/screens/StudentDashboard';
import { MockTestsCatalog } from './components/screens/MockTestsCatalog';
import { ExamEngine } from './components/screens/ExamEngine';
import { TestResults } from './components/screens/TestResults';
import { AdminDashboard } from './components/screens/AdminDashboard';
import { QuestionCreator } from './components/screens/QuestionCreator';
import { StudentProfile } from './components/screens/StudentProfile';

export function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [lang, setLang] = useState('hi'); // Defaulting to Hindi or easily toggleable
  const [selectedClassFilter, setSelectedClassFilter] = useState('All');
  const [examSummary, setExamSummary] = useState(null);
  const [customQuestions, setCustomQuestions] = useState([]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleStartExam = () => {
    setCurrentScreen('cbt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishExam = (summary) => {
    setExamSummary(summary);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionCreated = (question) => {
    setCustomQuestions((prev) => [question, ...prev]);
  };

  const handleLoginSuccess = (role, studentClass) => {
    if (role === 'admin') {
      setCurrentScreen('admin');
    } else {
      if (studentClass) {
        setSelectedClassFilter(studentClass);
      }
      setCurrentScreen('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAFF] font-sans antialiased text-[#1F2937]">
      {/* Top Floating Screen Navigator with Hindi/English Toggle */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={(screenId) => {
          setCurrentScreen(screenId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Conditional Top Navbar on public pages */}
      {(currentScreen === 'landing') && (
        <Navbar
          onNavigate={setCurrentScreen}
          onOpenLogin={() => setCurrentScreen('auth')}
          onOpenGetStarted={() => setCurrentScreen('dashboard')}
          lang={lang}
          onToggleLang={toggleLang}
        />
      )}

      {/* Main Screen View with Language prop */}
      <div className="flex-1">
        {currentScreen === 'landing' && (
          <LandingPage
            onNavigate={setCurrentScreen}
            onStartTest={handleStartExam}
            onSelectClassFilter={(cls) => setSelectedClassFilter(cls)}
            onOpenAuth={() => setCurrentScreen('auth')}
            lang={lang}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthModal
            isOpen={true}
            onClose={() => setCurrentScreen('landing')}
            onLoginSuccess={handleLoginSuccess}
            lang={lang}
          />
        )}

        {currentScreen === 'dashboard' && (
          <StudentDashboard
            onNavigate={setCurrentScreen}
            onStartTest={handleStartExam}
            lang={lang}
          />
        )}

        {currentScreen === 'catalog' && (
          <MockTestsCatalog
            selectedClassFilter={selectedClassFilter}
            onNavigate={setCurrentScreen}
            onStartTest={handleStartExam}
            lang={lang}
          />
        )}

        {currentScreen === 'cbt' && (
          <ExamEngine
            onFinishExam={handleFinishExam}
            onExit={() => setCurrentScreen('catalog')}
            lang={lang}
          />
        )}

        {currentScreen === 'results' && (
          <TestResults
            examSummary={examSummary}
            onNavigate={setCurrentScreen}
            lang={lang}
          />
        )}

        {currentScreen === 'admin' && (
          <AdminDashboard
            onNavigate={setCurrentScreen}
            lang={lang}
          />
        )}

        {currentScreen === 'question-creator' && (
          <QuestionCreator
            onNavigate={setCurrentScreen}
            onQuestionCreated={handleQuestionCreated}
            lang={lang}
          />
        )}

        {currentScreen === 'profile' && (
          <StudentProfile
            onNavigate={setCurrentScreen}
            lang={lang}
          />
        )}
      </div>

      {/* Bottom Live Design System Token Specs */}
      <DesignSystemBar />
    </div>
  );
}

export default App;

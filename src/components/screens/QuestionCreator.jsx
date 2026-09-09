import React, { useState } from 'react';
import { AdminSidebar } from '../common/Sidebar';
import { ChevronLeft } from '../common/Icons';
import { translations } from '../../data/translations';

export const QuestionCreator = ({ onNavigate, onQuestionCreated, lang = 'en' }) => {
  const [qType, setQType] = useState('MCQ');
  const [targetClass, setTargetClass] = useState('Class 10');
  const [subject, setSubject] = useState('Science');
  const [topic, setTopic] = useState('Light: Reflection & Refraction');
  const [difficulty, setDifficulty] = useState('Medium');
  const [testCategory, setTestCategory] = useState('Term Exam');
  const [marks, setMarks] = useState(4);
  const [negativeMarks, setNegativeMarks] = useState(0);
  const [questionText, setQuestionText] = useState('एक उत्तल लेंस की फोकस दूरी 20 सेमी है। लेंस से कितनी दूरी पर वस्तु को रखा जाए ताकि उसी आकार का वास्तविक एवं उल्टा प्रतिबिंब बने?');
  const [explanation, setExplanation] = useState('उत्तल लेंस में जब वस्तु 2F पर रखी जाती है, तब समान आकार का प्रतिबिंब बनता है। (2 × 20 = 40 सेमी)');
  const [tags, setTags] = useState('GSSS52, Class10, NCERT, Optics');
  const [correctOption, setCorrectOption] = useState('C');
  const [options, setOptions] = useState([
    { id: 'A', text: '10 cm (10 सेमी)' },
    { id: 'B', text: '20 cm (20 सेमी)' },
    { id: 'C', text: '40 cm (40 सेमी - 2F पर)' },
    { id: 'D', text: '60 cm (60 सेमी)' }
  ]);
  const [statusMsg, setStatusMsg] = useState('');

  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';

  const handleOptionTextChange = (id, text) => {
    setOptions(options.map((opt) => (opt.id === id ? { ...opt, text } : opt)));
  };

  const handlePublish = () => {
    const newQuestion = {
      id: Date.now(),
      section: `${targetClass} - ${subject}`,
      topic,
      classLevel: targetClass,
      question: questionText,
      questionHi: questionText,
      options,
      correctAnswer: correctOption,
      marks: Number(marks),
      negativeMarks: Number(negativeMarks),
      explanation,
      explanationHi: explanation,
      timeEstimate: '45s'
    };

    if (onQuestionCreated) {
      onQuestionCreated(newQuestion);
    }

    setStatusMsg(isHi 
      ? `प्रश्न सफलतापूर्वक ${targetClass} के प्रश्न बैंक में जोड़ दिया गया!`
      : `Question successfully published to ${targetClass} Question Bank!`
    );
    setTimeout(() => {
      setStatusMsg('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex">
      <AdminSidebar activeTab="Question Bank" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-[41px] z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin')}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-lg font-extrabold text-gray-900">{t.authorQuestion}</h1>
              <p className="text-[11px] text-gray-400">GSSS 52 LNP (MANJHUWAS) &bull; {t.authorSubtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStatusMsg(isHi ? 'ड्राफ्ट सहेज लिया गया!' : 'Draft saved!')}
              className="px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              {t.saveDraft}
            </button>
            <button
              onClick={handlePublish}
              className="px-6 py-2 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs font-bold shadow-md shadow-[#7F58FA]/20 transition-all hover:scale-105 active:scale-95"
            >
              {t.publish}
            </button>
          </div>
        </header>

        {statusMsg && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 text-xs font-bold text-emerald-800 flex items-center justify-between">
            <span>✓ {statusMsg}</span>
            <button onClick={() => setStatusMsg('')} className="text-emerald-600">&times;</button>
          </div>
        )}

        <main className="p-6 sm:p-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  {t.questionFormat}
                </label>
                <div className="flex flex-wrap gap-2">
                  {['MCQ (बहुविकल्पीय)', 'True/False (सत्य/असत्य)', 'Fill Blank (रिक्त स्थान)', 'Matching (सुमेलित)'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setQType(type)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        qType === type
                          ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/20'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-soft space-y-3">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {t.questionStatement}
                </label>

                <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
                  <button type="button" className="w-7 h-7 font-bold hover:bg-white rounded">B</button>
                  <button type="button" className="w-7 h-7 italic hover:bg-white rounded">I</button>
                  <button type="button" className="w-7 h-7 underline hover:bg-white rounded">U</button>
                  <button type="button" className="w-7 h-7 font-mono hover:bg-white rounded">x²</button>
                  <button type="button" className="w-7 h-7 font-mono hover:bg-white rounded">x₂</button>
                  <div className="w-px h-4 bg-gray-300 mx-1"></div>
                  <button type="button" className="px-2.5 py-1 hover:bg-white rounded font-medium text-[11px]">
                    🖼️ चित्र जोड़ें (Diagram)
                  </button>
                  <button type="button" className="px-2.5 py-1 hover:bg-white rounded font-medium text-[11px]">
                    ∑ सूत्र जोड़ें (Formula)
                  </button>
                </div>

                <textarea
                  rows={4}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={isHi ? "एनसीईआरटी अध्याय अनुसार प्रश्न यहां लिखें..." : "Enter the question text..."}
                  className="w-full p-4 text-sm bg-white border border-gray-200 rounded-2xl focus:border-[#7F58FA] focus:ring-2 focus:ring-[#7F58FA]/15 outline-none font-medium text-gray-900"
                />
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t.answerOptions}
                  </label>
                  <span className="text-[11px] text-gray-400">
                    {isHi ? 'सही उत्तर का रेडियो बटन चुनें' : 'Select the correct radio'}
                  </span>
                </div>

                <div className="space-y-3">
                  {options.map((opt) => {
                    const isCorrect = correctOption === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                          isCorrect ? 'border-[#60D6A7] bg-[#E9FBF3]/40 ring-1 ring-[#60D6A7]' : 'border-gray-200 bg-white'
                        }`}
                      >
                        <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {opt.id}
                        </span>

                        <input
                          type="text"
                          value={opt.text}
                          onChange={(e) => handleOptionTextChange(opt.id, e.target.value)}
                          className="flex-1 bg-transparent text-sm text-gray-900 font-medium outline-none"
                        />

                        <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold shrink-0">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={isCorrect}
                            onChange={() => setCorrectOption(opt.id)}
                            className="accent-[#60D6A7] w-4 h-4 cursor-pointer"
                          />
                          <span className={isCorrect ? 'text-emerald-700' : 'text-gray-400'}>
                            {isCorrect ? (isHi ? 'सही उत्तर' : 'Correct Option') : (isHi ? 'सही चुनें' : 'Mark Correct')}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {isHi ? 'कक्षा एवं विषय विवरण' : 'Class & Subject Info'}
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">{t.targetClass}</label>
                  <select
                    value={targetClass}
                    onChange={(e) => setTargetClass(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-[#7F58FA] outline-none focus:border-[#7F58FA]"
                  >
                    <option value="Class 6">{isHi ? 'कक्षा 6' : 'Class 6'}</option>
                    <option value="Class 7">{isHi ? 'कक्षा 7' : 'Class 7'}</option>
                    <option value="Class 8">{isHi ? 'कक्षा 8' : 'Class 8'}</option>
                    <option value="Class 9">{isHi ? 'कक्षा 9' : 'Class 9'}</option>
                    <option value="Class 10">{isHi ? 'कक्षा 10 (बोर्ड)' : 'Class 10 (Board)'}</option>
                    <option value="Class 11">{isHi ? 'कक्षा 11' : 'Class 11'}</option>
                    <option value="Class 12">{isHi ? 'कक्षा 12 (बोर्ड)' : 'Class 12 (Board)'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">{t.subject}</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:border-[#7F58FA]"
                  >
                    <option value="Science">{isHi ? 'विज्ञान' : 'Science'}</option>
                    <option value="Mathematics">{isHi ? 'गणित' : 'Mathematics'}</option>
                    <option value="Social Science">{isHi ? 'सामाजिक विज्ञान' : 'Social Science'}</option>
                    <option value="Hindi">{isHi ? 'हिंदी' : 'Hindi'}</option>
                    <option value="English">{isHi ? 'अंग्रेज़ी' : 'English'}</option>
                    <option value="Physics">{isHi ? 'भौतिक विज्ञान' : 'Physics'}</option>
                    <option value="Chemistry">{isHi ? 'रसायन विज्ञान' : 'Chemistry'}</option>
                    <option value="Biology">{isHi ? 'जीव विज्ञान' : 'Biology'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isHi ? 'अध्याय / पाठ' : 'Chapter / Unit'}
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-none focus:border-[#7F58FA]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {isHi ? 'पूर्णांक' : 'Marks'}
                    </label>
                    <input
                      type="number"
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-emerald-600 outline-none focus:border-[#7F58FA]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {isHi ? 'ऋणात्मक अंक' : 'Negative Marks'}
                    </label>
                    <input
                      type="number"
                      value={negativeMarks}
                      onChange={(e) => setNegativeMarks(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-600 outline-none focus:border-[#7F58FA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isHi ? 'हल एवं स्पष्टीकरण' : 'Explanation'}
                  </label>
                  <textarea
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-800 outline-none focus:border-[#7F58FA]"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

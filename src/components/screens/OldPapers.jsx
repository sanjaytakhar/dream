import React, { useState } from 'react';
import { ExternalLinkIcon, CopyIcon, CheckIcon, ChevronRight } from '../common/Icons';
import {
  OFFICIAL_RBSE_URL,
  oldPapersCategories,
  featuredOldPapers,
  rbseOfficialSubjects,
  rbsePortalGuide
} from '../../data/oldPapersData';
import { translations } from '../../data/translations';

export const OldPapers = ({ onNavigate, onStartTest, lang = 'hi', isEmbedded = false }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);
  const isHi = lang === 'hi';
  const t = translations[lang] || translations.hi;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(OFFICIAL_RBSE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="old-papers" className={isEmbedded ? "py-8" : "min-h-screen bg-[#FDFAFF] text-[#1F2937] py-8 sm:py-12"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7F58FA] text-xs font-bold border border-purple-200 mb-3 shadow-sm">
              <img src="./rajasthan-education-logo.png" alt="RBSE" className="w-4 h-4 object-contain" />
              <span>{isHi ? 'माध्यमिक शिक्षा बोर्ड राजस्थान (RBSE) • पुराना प्रश्न पत्र पोर्टल' : 'Rajasthan Board (RBSE) • Old Question Papers'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {isHi ? 'विगत वर्ष बोर्ड प्रश्न पत्र एवं ई-बुक्स' : 'RBSE Board Old Papers & Textbooks'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              {isHi
                ? 'राजस्थान माध्यमिक शिक्षा बोर्ड, अजमेर द्वारा आयोजित परीक्षाओं के मूल प्रश्न पत्र, मॉडल टेस्ट व पाठ्यपुस्तकें। ऑनलाइन कंप्यूटर आधारित परीक्षा (CBT) दें या बोर्ड की आधिकारिक वेबसाइट से डाउनलोड करें।'
                : 'Official question papers, model tests, and textbooks from Board of Secondary Education Rajasthan, Ajmer. Take interactive CBT mocks or download from the official RBSE repository.'}
            </p>
          </div>

          {!isEmbedded && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('catalog')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-1.5"
              >
                <span>← {isHi ? 'सभी मॉक टेस्ट' : 'All Mock Tests'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Hero Banner: Official RBSE Portal Callout */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#4C1D95] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-purple-400/20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{isHi ? 'आधिकारिक सरकारी स्त्रोत (Official Govt. Portal)' : 'Official Government Source'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {isHi ? 'माध्यमिक शिक्षा बोर्ड राजस्थान, अजमेर' : 'Board of Secondary Education Rajasthan, Ajmer'}
              </h3>

              <p className="text-sm sm:text-base text-purple-100 max-w-2xl leading-relaxed">
                {isHi
                  ? 'आरबीएसई (RBSE) की आधिकारिक वेबसाइट पर कक्षा 6 से 12 तक की पाठ्यपुस्तकें (Books), विगत वर्षों (2018–2025) के मूल प्रश्न पत्र एवं नवीनतम मॉडल पेपर्स निशुल्क उपलब्ध हैं।'
                  : 'Access official textbooks, model papers, blueprints, and past years (2018–2025) board question papers directly from the official RBSE portal.'}
              </p>

              {/* URL Display Pill */}
              <div className="pt-2">
                <div className="inline-flex flex-wrap items-center gap-2 p-1.5 sm:p-2 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-xs sm:text-sm font-mono text-purple-200 max-w-full overflow-hidden">
                  <span className="px-2 py-0.5 rounded bg-purple-500/30 text-purple-100 font-sans font-bold text-[11px] uppercase tracking-wider">
                    Official URL
                  </span>
                  <a
                    href={OFFICIAL_RBSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate hover:underline text-white font-medium px-1"
                    title={OFFICIAL_RBSE_URL}
                  >
                    https://rajeduboard.rajasthan.gov.in/books/index.htm
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={OFFICIAL_RBSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7F58FA] to-[#9333EA] hover:from-[#6C44E8] hover:to-[#7E22CE] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>🌐</span>
                  <span>{isHi ? 'RBSE आधिकारिक पोर्टल खोलें' : 'Open RBSE Official Portal'}</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-0.5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-bold">{isHi ? 'कॉपी हो गया!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4" />
                      <span>{isHi ? 'लिंक कॉपी करें' : 'Copy Link'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Emblem & Highlights */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
              <img
                src="./rajasthan-education-logo.png"
                alt="Rajasthan Board Emblem"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3 drop-shadow-lg"
              />
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-300">
                BSER AJMER
              </span>
              <p className="text-xs text-purple-200 mt-1">
                {isHi ? 'कक्षा 10वीं व 12वीं बोर्ड परीक्षा संदर्भ' : 'Class 10th & 12th Board Repository'}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 w-full grid grid-cols-2 gap-2 text-left text-xs">
                <div className="bg-white/5 p-2 rounded-lg">
                  <p className="text-[10px] text-purple-300">{isHi ? 'उपलब्ध वर्ष' : 'Available Years'}</p>
                  <p className="font-bold text-white">2018–2025</p>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <p className="text-[10px] text-purple-300">{isHi ? 'कक्षाएं' : 'Classes'}</p>
                  <p className="font-bold text-white">Class 6–12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-3">
              📜
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              {isHi ? 'विगत वर्ष मूल प्रश्न पत्र' : 'Previous Year Board Papers'}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {isHi ? '2022, 2023, 2024 व 2025 के मूल बोर्ड प्रश्न पत्र उपलब्ध।' : 'Authentic papers from 2022, 2023, 2024, and 2025 exams.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3">
              📝
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              {isHi ? 'मॉडल पेपर व ब्लूप्रिंट' : 'Model Papers & Blueprint'}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {isHi ? 'नवीनतम परीक्षा पैटर्न व अंक विभाजन के अनुसार मॉडल पेपर्स।' : 'Latest exam pattern, question typology & blueprints.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-3">
              📚
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              {isHi ? 'आरबीएसई ई-बुक्स' : 'RBSE Digital Textbooks'}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {isHi ? 'एनसीईआरटी व माध्यमिक शिक्षा बोर्ड की सभी पाठ्यपुस्तकें।' : 'Full curriculum textbooks for all streams in PDF format.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-3">
              ⏱️
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              {isHi ? 'ऑनलाइन CBT टेस्ट अभ्यास' : 'Interactive Online CBT'}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {isHi ? 'टाइमर व तुरंत परिणाम के साथ हमारे स्कूल पोर्टल पर अभ्यास करें।' : 'Solve with automatic evaluation and answer analytics.'}
            </p>
          </div>
        </div>

        {/* Live Interactive CBT Board Papers (Integrated in our School Portal) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {isHi ? 'ऑनलाइन अभ्यास हेतु उपलब्ध बोर्ड प्रश्न पत्र' : 'Online CBT Practice - Official Board Papers'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {isHi ? 'इन बोर्ड प्रश्न पत्रों को आप तुरंत ऑनलाइन कंप्यूटर आधारित परीक्षा (CBT) द्वारा हल कर सकते हैं:' : 'Take real board papers in an interactive examination mode right now:'}
              </p>
            </div>
            <a
              href={OFFICIAL_RBSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#7F58FA] hover:text-[#6C44E8] flex items-center gap-1 self-start sm:self-auto"
            >
              <span>{isHi ? 'सभी बोर्ड पेपर PDF डाउनलोड' : 'Download All PDFs on RBSE'}</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredOldPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft hover:shadow-card hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${paper.badgeColor}`}>
                      {paper.year} • {paper.badge}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-[#7F58FA]">
                      {paper.schoolClass}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 leading-snug">
                    {isHi ? paper.titleHi : paper.titleEn}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    {isHi ? paper.subjectHi : paper.subjectEn} &bull; {isHi ? paper.typeHi : paper.type}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-3 pt-3 border-t border-gray-50">
                    <span>📝 {paper.questions} {isHi ? 'प्रश्न' : 'Questions'}</span>
                    <span>⏱️ {paper.duration}</span>
                    <span>🎯 {paper.totalMarks} {isHi ? 'पूर्णांक' : 'Marks'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={OFFICIAL_RBSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-500 hover:text-gray-800 flex items-center gap-1"
                    title={OFFICIAL_RBSE_URL}
                  >
                    <span>{isHi ? 'मूल बोर्ड PDF' : 'Original PDF'}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => onStartTest(paper.testId)}
                    className="px-5 py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
                  >
                    <span>✍️</span>
                    <span>{isHi ? 'CBT टेस्ट शुरू करें' : 'Start CBT Test'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official RBSE Subject Directory */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {isHi ? 'आरबीएसई विषयवार प्रश्न पत्र एवं पाठ्यपुस्तक विवरण' : 'RBSE Subject-wise Papers & Syllabus Guide'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {isHi ? 'कक्षा 10वीं व 12वीं के सभी संकायों के प्रश्न पत्र आधिकारिक पोर्टल पर उपलब्ध हैं:' : 'All stream papers for Class 10 and 12 are hosted on the Rajasthan Board portal:'}
              </p>
            </div>

            <a
              href={OFFICIAL_RBSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-purple-50 text-[#7F58FA] hover:bg-purple-100 text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto shrink-0"
            >
              <span>{isHi ? 'आधिकारिक पोर्टल लिंक' : 'Official Portal Link'}</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rbseOfficialSubjects.map((group, idx) => (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-2xl p-5 border border-gray-200/70 hover:border-purple-200 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">
                    {isHi ? group.schoolClassHi : group.schoolClass}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                    {group.stream}
                  </span>
                </div>

                <p className="text-xs text-gray-600">
                  {isHi ? group.descriptionHi : group.descriptionEn}
                </p>

                {/* Subject chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.subjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[11px] font-medium text-gray-700"
                    >
                      <span>{sub.icon}</span>
                      <span>{isHi ? sub.nameHi : sub.nameEn}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500">
                  <span>
                    {isHi ? 'वर्ष:' : 'Years:'} {group.availableYears.join(', ')}
                  </span>
                  <a
                    href={OFFICIAL_RBSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7F58FA] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>{isHi ? 'डाउनलोड करें' : 'Download'}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Instructions on how to download from RBSE portal */}
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-soft">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
              {isHi ? 'आरबीएसई पोर्टल से पुराने पेपर कैसे डाउनलोड करें?' : 'How to Download Papers from the RBSE Portal?'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {isHi
                ? 'rajeduboard.rajasthan.gov.in/books/index.htm पर पेपर प्राप्त करने हेतु आसान निर्देश:'
                : 'Simple step-by-step instructions to get past year question papers:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rbsePortalGuide.map((step) => (
              <div
                key={step.step}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-purple-100/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#7F58FA] text-white flex items-center justify-center text-xs font-black mb-3 shadow-md shadow-[#7F58FA]/20">
                    {step.step}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                    {isHi ? step.titleHi : step.titleEn}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                    {isHi ? step.descHi : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick External Link Call to Action */}
          <div className="mt-6 pt-6 border-t border-purple-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
              <span className="font-bold text-[#7F58FA]">
                {isHi ? 'सीधा वेब पता:' : 'Direct Web Address:'}
              </span>{' '}
              <code className="bg-white px-2 py-1 rounded border border-purple-200 font-mono text-purple-700">
                https://rajeduboard.rajasthan.gov.in/books/index.htm
              </code>
            </div>

            <a
              href={OFFICIAL_RBSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7F58FA]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <span>{isHi ? 'पोर्टल पर जाएं' : 'Visit Portal Now'}</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { simulationSubjects, simulationsList } from '../../data/simulationsData';
import { ProjectileMotionSim } from '../simulations/ProjectileMotionSim';
import { HumanHeartSim } from '../simulations/HumanHeartSim';
import { OhmsLawSim } from '../simulations/OhmsLawSim';
import { PhScaleSim } from '../simulations/PhScaleSim';

export const SimulationHub = ({ lang = 'en', onNavigate, initialSimId = null }) => {
  const isHi = lang === 'hi';

  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState('all');
  const [activeSimId, setActiveSimId] = useState(initialSimId);

  // Filtered list of simulations
  const filteredSimulations = simulationsList.filter((sim) => {
    const matchSubject = selectedSubject === 'all' || sim.subjectId === selectedSubject;
    const matchGrade = selectedGradeFilter === 'all' || sim.schoolClass.toLowerCase().includes(selectedGradeFilter.toLowerCase());
    return matchSubject && matchGrade;
  });

  const handleOpenSim = (simId) => {
    setActiveSimId(simId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setActiveSimId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a simulation is actively running, render its dedicated interface
  if (activeSimId) {
    return (
      <div className="min-h-screen bg-[#060813] text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Quick Simulation Switcher Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#111827]/80 backdrop-blur-md border border-gray-800 px-4 py-2.5 rounded-2xl text-xs">
            <button
              onClick={handleBackToHub}
              className="flex items-center gap-1.5 text-sky-400 hover:text-white font-bold transition-colors"
            >
              <span>←</span>
              <span>{isHi ? 'सभी सिमुलेशन देखें' : 'Back to Simulation Lab'}</span>
            </button>

            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-[11px] text-gray-500 font-semibold">{isHi ? 'अन्य प्रयोग:' : 'Switch Experiment:'}</span>
              {simulationsList.map((sim) => (
                <button
                  key={sim.id}
                  onClick={() => setActiveSimId(sim.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    activeSimId === sim.id
                      ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold shadow-sm'
                      : 'bg-gray-800/60 border-gray-700 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="mr-1">{sim.icon}</span>
                  <span>{isHi ? sim.titleHi : sim.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Sim Component */}
          {activeSimId === 'projectile-motion' && (
            <ProjectileMotionSim lang={lang} onBack={handleBackToHub} />
          )}
          {activeSimId === 'human-heart' && (
            <HumanHeartSim lang={lang} onBack={handleBackToHub} />
          )}
          {activeSimId === 'ohms-law' && (
            <OhmsLawSim lang={lang} onBack={handleBackToHub} />
          )}
          {activeSimId === 'ph-scale' && (
            <PhScaleSim lang={lang} onBack={handleBackToHub} />
          )}
        </div>
      </div>
    );
  }

  // Otherwise, render the Main Simulation Lab Hub Catalog
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans">
      {/* SciVerse-inspired Cosmic Hero Banner */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-[#111827] via-[#0b0f19] to-[#060813] pt-10 pb-16">
        {/* Glow ambient background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Hero Text */}
            <div className="max-w-2xl space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>{isHi ? 'प्रायोगिक विज्ञान लैब • GSSS 52 LNP' : 'Interactive 3D Virtual Science Lab • GSSS 52 LNP'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    विज्ञान को <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                      जीवंत रूप में देखें
                    </span>
                  </>
                ) : (
                  <>
                    See Science <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                      Come to Life
                    </span>
                  </>
                )}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {isHi
                  ? 'कक्षा 6 से 12 तक के विद्यार्थियों के लिए भौतिकी, रसायन, जीव विज्ञान एवं गणित के सिद्धांतों को इंटरएक्टिव सिमुलेटर और 3D मॉडल के माध्यम से स्वयं करके सीखें।'
                  : 'Interactive virtual simulations for curious minds. Experiment with projectile trajectories, cardiac anatomy, electric circuits, and chemical reactions in real time.'}
              </p>

              {/* Quick Launch Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => handleOpenSim('projectile-motion')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>🚀</span>
                  <span>{isHi ? 'प्रक्षेप्य गति चलाएं' : 'Launch Projectile Sim'}</span>
                </button>
                <button
                  onClick={() => handleOpenSim('human-heart')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-600/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>🫀</span>
                  <span>{isHi ? 'हृदय रचना 3D' : 'Human Heart 3D'}</span>
                </button>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-[#111827]/80 border border-gray-800 p-3 rounded-2xl text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-white block">4</span>
                  <span className="text-[11px] text-gray-400">{isHi ? 'प्रमुख विषय' : 'Core Subjects'}</span>
                </div>
                <div className="bg-[#111827]/80 border border-gray-800 p-3 rounded-2xl text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-sky-400 block">60 FPS</span>
                  <span className="text-[11px] text-gray-400">{isHi ? 'रीयल-टाइम गति' : 'Real-time Physics'}</span>
                </div>
                <div className="bg-[#111827]/80 border border-gray-800 p-3 rounded-2xl text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-emerald-400 block">100%</span>
                  <span className="text-[11px] text-gray-400">{isHi ? 'एनसीईआरटी आधारित' : 'NCERT Aligned'}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="w-full max-w-md bg-gradient-to-b from-[#1e293b]/70 to-[#0f172a] p-6 rounded-3xl border border-gray-700/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌌</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-white">{isHi ? 'वर्चुअल लैबोरेट्री' : 'Virtual Lab Suite'}</h3>
                    <p className="text-[10px] text-gray-400">GSSS 52 LNP (MANJHUWAS)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  {isHi ? 'लाइव सिमुलेटर' : 'Live Interactive'}
                </span>
              </div>

              {/* Quick simulation cards list inside preview */}
              <div className="space-y-2.5">
                {simulationsList.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => handleOpenSim(sim.id)}
                    className="p-3 rounded-2xl bg-[#111827] hover:bg-[#1a233a] border border-gray-800 hover:border-sky-500/50 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                        {sim.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                          {isHi ? sim.titleHi : sim.title}
                        </h4>
                        <span className="text-[10px] text-gray-400">{isHi ? sim.topicHi : sim.topic}</span>
                      </div>
                    </div>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform text-sm font-bold">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Experiments Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subject Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {isHi ? 'उपलब्ध सिमुलेशन प्रयोग' : 'Curriculum Simulations'}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {isHi ? 'विषय चुनें और इंटरएक्टिव 3D प्रयोग शुरू करें' : 'Select a subject to begin your interactive hands-on exploration'}
            </p>
          </div>

          {/* Subject Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {simulationSubjects.map((sub) => {
              const isSelected = selectedSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-sky-500 border-sky-400 text-white shadow-md shadow-sky-500/25'
                      : 'bg-gray-800/60 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span>{sub.icon}</span>
                  <span>{isHi ? sub.nameHi : sub.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade Pills */}
        <div className="flex items-center gap-2 py-4">
          <span className="text-xs font-semibold text-gray-500">{isHi ? 'कक्षा:' : 'Class:'}</span>
          {['all', 'Class 8', 'Class 9', 'Class 10', 'Class 11'].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGradeFilter(g)}
              className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                selectedGradeFilter === g
                  ? 'bg-gray-700 border-gray-500 text-white font-bold'
                  : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {g === 'all' ? (isHi ? 'सभी कक्षाएं' : 'All Classes') : g}
            </button>
          ))}
        </div>

        {/* Simulation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
          {filteredSimulations.map((sim) => (
            <div
              key={sim.id}
              className="bg-[#111827] rounded-3xl border border-gray-800 hover:border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Banner */}
              <div className={`p-6 bg-gradient-to-r ${sim.gradient} relative overflow-hidden`}>
                <div className="absolute top-3 right-4 text-4xl opacity-30 group-hover:scale-125 transition-transform duration-500">
                  {sim.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    {isHi ? sim.subjectHi : sim.subject}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] backdrop-blur-sm">
                    {isHi ? sim.schoolClassHi : sim.schoolClass}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-sm">
                  {isHi ? sim.titleHi : sim.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {isHi ? sim.descriptionHi : sim.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {sim.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-400 text-[10px] font-medium border border-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Launch Button */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                    <span>⏱️</span>
                    <span>~{sim.durationMins} {isHi ? 'मिनट' : 'mins'}</span>
                  </div>
                  <button
                    onClick={() => handleOpenSim(sim.id)}
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition-all group-hover:scale-105 active:scale-95 flex items-center gap-1.5"
                  >
                    <span>{isHi ? 'सिमुलेशन चलाएं' : 'Start Simulation'}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

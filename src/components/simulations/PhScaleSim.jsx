import React, { useState } from 'react';

export const PhScaleSim = ({ lang = 'en', onBack }) => {
  const isHi = lang === 'hi';

  const [activeTab, setActiveTab] = useState('lab'); // 'lab' | 'spectrum' | 'theory' | 'quiz'

  // Internal counts of added drops
  const [hclDrops, setHclDrops] = useState(0);
  const [naohDrops, setNaohDrops] = useState(0);
  const [waterVolume, setWaterVolume] = useState(100); // mL

  // Calculate pH dynamically based on net [H+] / [OH-]
  // Neutral water: 100mL = 10^-7 M
  // Each drop of 0.1M HCl = 0.05mL of 0.1M = 5*10^-6 mol H+
  // Each drop of 0.1M NaOH = 5*10^-6 mol OH-
  const netMoles = (hclDrops - naohDrops) * 0.000005; // positive = acidic, negative = basic
  const totalVolLiters = (waterVolume + (hclDrops + naohDrops) * 0.05) / 1000;

  let currentPh = 7.0;
  if (netMoles > 0) {
    const concH = netMoles / totalVolLiters;
    currentPh = Math.max(0.5, Math.min(6.9, -Math.log10(concH)));
  } else if (netMoles < 0) {
    const concOH = Math.abs(netMoles) / totalVolLiters;
    const pOH = -Math.log10(concOH);
    currentPh = Math.min(13.8, Math.max(7.1, 14 - pOH));
  }

  const roundedPh = parseFloat(currentPh.toFixed(1));

  // Determine solution color based on Universal Indicator chart
  const getPhColor = (ph) => {
    if (ph < 2) return '#ef4444'; // Red
    if (ph < 4) return '#f97316'; // Orange
    if (ph < 6) return '#eab308'; // Yellow
    if (ph <= 7.5) return '#22c55e'; // Green (Neutral)
    if (ph < 9) return '#06b6d4'; // Cyan
    if (ph < 12) return '#3b82f6'; // Blue
    return '#8b5cf6'; // Purple/Violet
  };

  const currentColor = getPhColor(roundedPh);

  const getPhLabel = (ph) => {
    if (ph < 3) return isHi ? 'प्रबल अम्लीय (Strongly Acidic)' : 'Strongly Acidic';
    if (ph < 6.5) return isHi ? 'दुर्बल अम्लीय (Weakly Acidic)' : 'Weakly Acidic';
    if (ph <= 7.5) return isHi ? 'उदासीन (Neutral)' : 'Neutral';
    if (ph < 11) return isHi ? 'दुर्बल क्षारीय (Weakly Basic)' : 'Weakly Alkaline';
    return isHi ? 'प्रबल क्षारीय (Strongly Basic)' : 'Strongly Alkaline';
  };

  const handleAddAcid = () => setHclDrops((prev) => prev + 1);
  const handleAddBase = () => setNaohDrops((prev) => prev + 1);
  const handleAddWater = () => setWaterVolume((prev) => prev + 50);

  const handleReset = () => {
    setHclDrops(0);
    setNaohDrops(0);
    setWaterVolume(100);
  };

  const benchmarkLiquids = [
    { ph: 1.0, name: 'Battery Acid', nameHi: 'बैटरी अम्ल (H₂SO₄)', color: '#dc2626' },
    { ph: 2.2, name: 'Lemon Juice', nameHi: 'नींबू का रस (Citric Acid)', color: '#ea580c' },
    { ph: 3.0, name: 'Vinegar', nameHi: 'सिरका (Acetic Acid)', color: '#f97316' },
    { ph: 5.5, name: 'Black Coffee', nameHi: 'कॉफ़ी', color: '#eab308' },
    { ph: 7.0, name: 'Pure Water', nameHi: 'शुद्ध जल (H₂O)', color: '#22c55e' },
    { ph: 7.4, name: 'Human Blood', nameHi: 'मानव रक्त', color: '#10b981' },
    { ph: 8.5, name: 'Baking Soda', nameHi: 'बेकिंग सोडा (NaHCO₃)', color: '#06b6d4' },
    { ph: 10.0, name: 'Milk of Magnesia', nameHi: 'मिल्क ऑफ मैग्नीशिया Mg(OH)₂', color: '#3b82f6' },
    { ph: 12.5, name: 'Bleach / NaOH', nameHi: 'ब्लीच / सोडियम हाइड्रॉक्साइड', color: '#8b5cf6' }
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#111827]/90 border-b border-gray-800 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
            <button onClick={onBack} className="hover:underline flex items-center gap-1 text-gray-400 hover:text-white">
              <span>←</span>
              <span>{isHi ? 'सिमुलेशन हब' : 'Simulation Hub'}</span>
            </button>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'रसायन विज्ञान' : 'Chemistry'}</span>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'अम्ल, क्षारक एवं लवण' : 'Acids & Bases'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>🧪</span>
            <span>{isHi ? 'अम्ल-क्षार उदासीनीकरण एवं pH पैमाना' : 'Acid-Base Neutralization & pH Scale'}</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-[#1f293d] p-1 rounded-2xl border border-gray-700 text-xs font-semibold">
          {[
            { id: 'lab', label: isHi ? 'वर्चुअल बीकर लैब' : 'Beaker Lab', icon: '⚗️' },
            { id: 'spectrum', label: isHi ? 'pH स्पेक्ट्रम' : 'pH Spectrum', icon: '🌈' },
            { id: 'theory', label: isHi ? 'सिद्धांत व सूत्र' : 'Theory', icon: '📖' },
            { id: 'quiz', label: isHi ? 'प्रश्नोत्तरी' : 'Quiz', icon: '❓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="p-5 sm:p-7">
        {activeTab === 'lab' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Dropper & Reagent Controls */}
            <div className="lg:col-span-4 bg-[#111827] rounded-2xl p-5 border border-gray-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{isHi ? 'अभिकर्मक ड्रॉपर' : 'Reagent Dispensers'}</span>
                </h3>
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-rose-400 flex items-center gap-1"
                >
                  <span>🔄</span>
                  <span>{isHi ? 'बीकर धोएं' : 'Reset Beaker'}</span>
                </button>
              </div>

              {/* Add Acid Button */}
              <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300">
                    🔴 {isHi ? 'हाइड्रोक्लोरिक अम्ल (0.1M HCl)' : 'Strong Acid (0.1M HCl)'}
                  </span>
                  <span className="text-[11px] font-mono text-rose-400 font-bold">{hclDrops} {isHi ? 'बूंदें' : 'drops'}</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {isHi ? 'H⁺ आयनों की सांद्रता बढ़ाकर pH मान को घटाता है।' : 'Releases H⁺ ions, driving pH down.'}
                </p>
                <button
                  onClick={handleAddAcid}
                  className="w-full py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  + {isHi ? '1 बूंद HCl डालें' : 'Add 1 Drop HCl'}
                </button>
              </div>

              {/* Add Base Button */}
              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-300">
                    🔵 {isHi ? 'सोडियम हाइड्रॉक्साइड (0.1M NaOH)' : 'Strong Base (0.1M NaOH)'}
                  </span>
                  <span className="text-[11px] font-mono text-blue-400 font-bold">{naohDrops} {isHi ? 'बूंदें' : 'drops'}</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {isHi ? 'OH⁻ आयन प्रदान कर अम्ल को उदासीन करता है।' : 'Releases OH⁻ ions, driving pH up.'}
                </p>
                <button
                  onClick={handleAddBase}
                  className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  + {isHi ? '1 बूंद NaOH डालें' : 'Add 1 Drop NaOH'}
                </button>
              </div>

              {/* Add Water Button */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-300">
                    💧 {isHi ? 'आसुत जल (Distilled Water)' : 'Pure Water (H₂O)'}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">{waterVolume} mL</span>
                </div>
                <button
                  onClick={handleAddWater}
                  className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  + {isHi ? '50 mL जल मिलाएं' : 'Add 50 mL Water'}
                </button>
              </div>

              {/* Chemical Equation */}
              <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800 text-[11px] font-mono text-center">
                <span className="text-gray-400 block mb-1 text-[10px]">{isHi ? 'उदासीनीकरण रासायनिक समीकरण:' : 'Neutralization Reaction:'}</span>
                <span className="text-amber-400 font-bold">HCl + NaOH ⟶ NaCl + H₂O</span>
              </div>
            </div>

            {/* Right Beaker & Digital pH Meter Graphic */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="bg-slate-950 rounded-2xl p-6 border border-gray-800 flex flex-col md:flex-row items-center justify-around gap-8 min-h-[380px]">
                {/* Visual Glass Beaker */}
                <div className="relative w-48 h-64 flex flex-col justify-end">
                  {/* Glass Beaker Outline */}
                  <div className="absolute inset-0 border-4 border-t-0 border-cyan-300/40 rounded-b-3xl pointer-events-none shadow-2xl">
                    {/* Beaker Volume Tick Marks */}
                    <div className="absolute left-2 top-8 w-4 h-0.5 bg-gray-400"></div>
                    <span className="absolute left-7 top-6 text-[9px] text-gray-500 font-mono">250mL</span>
                    <div className="absolute left-2 top-20 w-4 h-0.5 bg-gray-400"></div>
                    <span className="absolute left-7 top-18 text-[9px] text-gray-500 font-mono">200mL</span>
                    <div className="absolute left-2 top-32 w-4 h-0.5 bg-gray-400"></div>
                    <span className="absolute left-7 top-30 text-[9px] text-gray-500 font-mono">150mL</span>
                    <div className="absolute left-2 top-44 w-4 h-0.5 bg-gray-400"></div>
                    <span className="absolute left-7 top-42 text-[9px] text-gray-500 font-mono">100mL</span>
                  </div>

                  {/* Liquid inside Beaker (height scales with waterVolume) */}
                  <div
                    className="w-full rounded-b-[20px] transition-all duration-700 relative overflow-hidden shadow-inner"
                    style={{
                      height: `${Math.min(90, (waterVolume / 250) * 100)}%`,
                      backgroundColor: currentColor,
                      opacity: 0.85
                    }}
                  >
                    {/* Liquid surface wave shimmer */}
                    <div className="absolute inset-x-0 top-0 h-2 bg-white/30 blur-[1px]"></div>
                  </div>

                  {/* pH Probe Dipped into liquid */}
                  <div className="absolute -top-6 right-8 w-5 h-44 bg-gray-600 rounded-full border-2 border-gray-400 shadow-xl flex flex-col items-center">
                    <div className="w-1.5 h-8 bg-cyan-400 rounded-full mt-2"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full mt-auto mb-2 animate-pulse"></div>
                  </div>
                </div>

                {/* Digital pH Meter Display Panel */}
                <div className="bg-[#111827] border border-gray-700/70 p-6 rounded-3xl shadow-2xl max-w-xs w-full text-center space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      {isHi ? 'डिजिटल pH मीटर' : 'Digital pH Meter'}
                    </span>
                    <div
                      className="font-mono text-5xl font-black mt-2 tracking-tight transition-colors duration-500 drop-shadow-md"
                      style={{ color: currentColor }}
                    >
                      {roundedPh.toFixed(1)}
                    </div>
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold transition-colors duration-500"
                      style={{
                        backgroundColor: `${currentColor}22`,
                        color: currentColor,
                        border: `1px solid ${currentColor}66`
                      }}
                    >
                      {getPhLabel(roundedPh)}
                    </span>
                  </div>

                  {/* Ion Balance Bar */}
                  <div className="pt-3 border-t border-gray-800 space-y-2 text-left">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-rose-400 font-bold">[H⁺] Ions</span>
                      <span className="text-blue-400 font-bold">[OH⁻] Ions</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden flex">
                      <div
                        className="bg-rose-500 transition-all duration-500"
                        style={{ width: `${Math.max(5, Math.min(95, ((14 - roundedPh) / 14) * 100))}%` }}
                      ></div>
                      <div
                        className="bg-blue-500 transition-all duration-500"
                        style={{ width: `${Math.max(5, Math.min(95, (roundedPh / 14) * 100))}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] text-gray-500 text-center">
                      {roundedPh < 7 ? '[H⁺] > [OH⁻] (Acidic)' : roundedPh > 7 ? '[OH⁻] > [H⁺] (Basic)' : '[H⁺] = [OH⁻] = 10⁻⁷ M (Neutral)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SPECTRUM */}
        {activeTab === 'spectrum' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-base font-extrabold text-white mb-4">
                {isHi ? 'सार्वत्रिक सूचक एवं दैनिक जीवन में pH मान' : 'Universal Indicator & Real-Life pH Scale'}
              </h3>

              {/* Rainbow Spectrum Bar */}
              <div className="h-8 rounded-xl bg-gradient-to-r from-red-600 via-amber-400 via-green-500 via-cyan-500 to-purple-600 shadow-lg flex justify-between px-3 items-center text-[10px] font-bold text-white drop-shadow mb-6">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span className="bg-black/50 px-2 py-0.5 rounded-full">7 Neutral</span>
                <span>8</span>
                <span>10</span>
                <span>12</span>
                <span>14</span>
              </div>

              {/* Everyday Benchmarks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {benchmarkLiquids.map((item) => (
                  <div key={item.ph} className="bg-[#0b0f19] p-3.5 rounded-xl border border-gray-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">{isHi ? item.nameHi : item.name}</span>
                      <span className="text-[10px] text-gray-400">
                        {item.ph < 7 ? (isHi ? 'अम्लीय' : 'Acidic') : item.ph > 7 ? (isHi ? 'क्षारीय' : 'Basic') : (isHi ? 'उदासीन' : 'Neutral')}
                      </span>
                    </div>
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      pH {item.ph.toFixed(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THEORY */}
        {activeTab === 'theory' && (
          <div className="max-w-3xl mx-auto bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-4 text-xs text-gray-300 leading-relaxed">
            <h3 className="text-base font-extrabold text-white">
              {isHi ? 'pH पैमाने की अवधारणा (सोरेनसन, 1909)' : 'Concept of pH Scale (Sørensen, 1909)'}
            </h3>
            <p>
              {isHi
                ? 'pH में "p" जर्मन शब्द "Potenz" (शक्ति/पोटेंज़) से आया है तथा "H" हाइड्रोजन आयन को दर्शाता है। pH मान किसी जलीय विलयन में हाइड्रोजन आयनों की सांद्रता का ऋणात्मक लघुगणक (Negative Logarithm) होता है: pH = -log₁₀[H⁺]।'
                : 'The term pH is derived from the German "Potenz" (power) and "H" for Hydrogen. Sørensen defined pH as the negative base-10 logarithm of the hydrogen ion concentration: pH = -log₁₀[H⁺].'}
            </p>
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-gray-800 font-mono text-amber-400 font-bold text-center text-sm">
              [H⁺] · [OH⁻] = 1.0 × 10⁻¹⁴ (at 25°C)
            </div>
          </div>
        )}

        {/* TAB 4: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-3">
              <span className="text-xs font-bold text-emerald-400">Question 1</span>
              <h4 className="text-sm font-bold text-white">
                {isHi ? 'शुद्ध आसुत जल का pH मान 25°C पर कितना होता है?' : 'What is the pH of pure distilled water at 25°C?'}
              </h4>
              <div className="p-3 rounded-xl bg-[#0b0f19] border border-gray-800 text-xs text-gray-300">
                <strong className="text-emerald-400 block mb-1">Answer: pH 7.0 (Neutral)</strong>
                {isHi ? 'शुद्ध जल में H⁺ और OH⁻ आयनों की संख्या बराबर होती है, इसलिए यह उदासीन होता है।' : 'In pure neutral water, [H⁺] equals [OH⁻] at 10⁻⁷ M, producing pH 7.0.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

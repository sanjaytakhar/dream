import React, { useState, useEffect, useRef } from 'react';

export const OhmsLawSim = ({ lang = 'en', onBack }) => {
  const isHi = lang === 'hi';

  const [activeTab, setActiveTab] = useState('circuit'); // 'circuit' | 'graph' | 'theory' | 'quiz'
  const [voltage, setVoltage] = useState(12); // Volts (1 to 24)
  const [resistance, setResistance] = useState(10); // Ohms (1 to 50)
  const [isSwitchClosed, setIsSwitchClosed] = useState(true);

  // Electrical computations
  const current = isSwitchClosed ? voltage / resistance : 0; // Amperes
  const power = isSwitchClosed ? current * voltage : 0; // Watts

  // Electron animation on canvas
  const canvasRef = useRef(null);
  const electronsRef = useRef([]);

  useEffect(() => {
    // Initialize 30 electron positions along a rectangular circuit loop
    // Rect loop: Top (80, 50) -> (420, 50) -> Right (420, 250) -> Bottom (80, 250) -> Left (80, 50)
    const count = 36;
    const initialElectrons = [];
    const perimeter = 340 + 200 + 340 + 200; // 1080px
    for (let i = 0; i < count; i++) {
      initialElectrons.push((i / count) * perimeter);
    }
    electronsRef.current = initialElectrons;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const loopW = 340;
    const loopH = 200;
    const startX = 80;
    const startY = 50;
    const perimeter = (loopW + loopH) * 2;

    const getCoord = (d) => {
      d = (d % perimeter + perimeter) % perimeter;
      if (d < loopW) return { x: startX + d, y: startY };
      d -= loopW;
      if (d < loopH) return { x: startX + loopW, y: startY + d };
      d -= loopH;
      if (d < loopW) return { x: startX + loopW - d, y: startY + loopH };
      d -= loopW;
      return { x: startX, y: startY + loopH - d };
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Circuit Wire Loop
      ctx.strokeStyle = isSwitchClosed ? '#38bdf8' : '#64748b';
      ctx.lineWidth = 6;
      ctx.strokeRect(startX, startY, loopW, loopH);

      // Component 1: DC Battery on Left Wire (x = startX, y = 150)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(startX - 18, 120, 36, 60);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.strokeRect(startX - 18, 120, 36, 60);

      // Battery plates
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX - 12, 138);
      ctx.lineTo(startX + 12, 138);
      ctx.stroke();

      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX - 7, 162);
      ctx.lineTo(startX + 7, 162);
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${voltage} V`, startX, 110);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('+', startX + 18, 138);
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('−', startX + 18, 165);

      // Component 2: Resistor / Rheostat on Top Wire (x = 250, y = startY)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(210, startY - 15, 80, 30);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(210, startY - 15, 80, 30);

      // Zig-zag resistor lines
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(215, startY);
      ctx.lineTo(225, startY - 10);
      ctx.lineTo(235, startY + 10);
      ctx.lineTo(245, startY - 10);
      ctx.lineTo(255, startY + 10);
      ctx.lineTo(265, startY - 10);
      ctx.lineTo(275, startY + 10);
      ctx.lineTo(285, startY);
      ctx.stroke();

      ctx.fillStyle = '#f97316';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`R = ${resistance} Ω`, 250, startY - 22);

      // Component 3: Light Bulb on Bottom Wire (x = 250, y = startY + loopH)
      const bulbX = 250;
      const bulbY = startY + loopH;

      // Bulb Glow (scales with power)
      if (isSwitchClosed && power > 0) {
        const glowRadius = Math.min(80, 20 + power * 1.5);
        const glow = ctx.createRadialGradient(bulbX, bulbY - 10, 5, bulbX, bulbY - 10, glowRadius);
        glow.addColorStop(0, 'rgba(254, 240, 138, 0.9)');
        glow.addColorStop(0.4, 'rgba(250, 204, 21, 0.4)');
        glow.addColorStop(1, 'rgba(250, 204, 21, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(bulbX, bulbY - 10, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bulb Glass
      ctx.fillStyle = isSwitchClosed && power > 0 ? '#fef08a' : '#475569';
      ctx.beginPath();
      ctx.arc(bulbX, bulbY - 14, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Filament
      ctx.strokeStyle = isSwitchClosed && power > 0 ? '#ea580c' : '#334155';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(bulbX - 6, bulbY - 8);
      ctx.lineTo(bulbX, bulbY - 22);
      ctx.lineTo(bulbX + 6, bulbY - 8);
      ctx.stroke();

      // Bulb socket
      ctx.fillStyle = '#334155';
      ctx.fillRect(bulbX - 8, bulbY - 4, 16, 8);
      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Bulb (${power.toFixed(1)} W)`, bulbX, bulbY + 24);

      // Component 4: Switch on Right Wire (x = startX + loopW, y = 150)
      const switchX = startX + loopW;
      const switchY = 150;
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(switchX - 15, switchY - 20, 30, 40);

      // Terminals
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(switchX, switchY - 14, 4, 0, Math.PI * 2);
      ctx.arc(switchX, switchY + 14, 4, 0, Math.PI * 2);
      ctx.fill();

      // Switch lever
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(switchX, switchY + 14);
      if (isSwitchClosed) {
        ctx.lineTo(switchX, switchY - 14);
      } else {
        ctx.lineTo(switchX + 16, switchY - 6);
      }
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(isSwitchClosed ? 'Switch [ON]' : 'Switch [OFF]', switchX + 42, switchY + 4);

      // Animated Flowing Electrons
      if (isSwitchClosed && current > 0) {
        // Speed proportional to current
        const speed = Math.min(6, Math.max(0.6, current * 1.8));
        const arr = electronsRef.current;
        for (let i = 0; i < arr.length; i++) {
          arr[i] = (arr[i] + speed) % perimeter;
          const pos = getCoord(arr[i]);

          // Draw yellow electron dot
          ctx.fillStyle = '#facc15';
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [voltage, resistance, isSwitchClosed, current, power]);

  // Data points for V-I graph
  const graphPoints = [
    { v: 4, i: 4 / resistance },
    { v: 8, i: 8 / resistance },
    { v: 12, i: 12 / resistance },
    { v: 16, i: 16 / resistance },
    { v: 20, i: 20 / resistance },
    { v: 24, i: 24 / resistance }
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#111827]/90 border-b border-gray-800 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
            <button onClick={onBack} className="hover:underline flex items-center gap-1 text-gray-400 hover:text-white">
              <span>←</span>
              <span>{isHi ? 'सिमुलेशन हब' : 'Simulation Hub'}</span>
            </button>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'भौतिक विज्ञान' : 'Physics'}</span>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'विद्युत धारा' : 'Electricity'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>⚡</span>
            <span>{isHi ? 'विद्युत परिपथ एवं ओम का नियम' : "Electric Circuit & Ohm's Law"}</span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-[#1f293d] p-1 rounded-2xl border border-gray-700 text-xs font-semibold">
          {[
            { id: 'circuit', label: isHi ? 'परिपथ सिमुलेटर' : 'Circuit Sim', icon: '🔌' },
            { id: 'graph', label: isHi ? 'V-I ग्राफ' : 'V-I Graph', icon: '📈' },
            { id: 'theory', label: isHi ? 'सिद्धांत व सूत्र' : 'Theory', icon: '📖' },
            { id: 'quiz', label: isHi ? 'प्रश्नोत्तरी' : 'Quiz', icon: '❓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white font-bold shadow-md shadow-amber-500/25'
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
        {activeTab === 'circuit' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls */}
            <div className="lg:col-span-4 bg-[#111827] rounded-2xl p-5 border border-gray-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>{isHi ? 'परिपथ नियंत्रण' : 'Circuit Controls'}</span>
                </h3>
                <span className="text-[11px] text-gray-400 font-mono bg-gray-800 px-2 py-0.5 rounded-full">
                  I = {current.toFixed(2)} A
                </span>
              </div>

              {/* 1. Voltage Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <label className="text-gray-300">{isHi ? 'वोल्टेज (विभवांतर V):' : 'Voltage (V):'}</label>
                  <span className="text-amber-400 font-bold font-mono text-sm">{voltage} V</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={voltage}
                  onChange={(e) => setVoltage(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>1 V</span>
                  <span>12 V</span>
                  <span>24 V</span>
                </div>
              </div>

              {/* 2. Resistance Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <label className="text-gray-300">{isHi ? 'प्रतिरोध (Resistance R):' : 'Resistance (R):'}</label>
                  <span className="text-orange-400 font-bold font-mono text-sm">{resistance} Ω</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={resistance}
                  onChange={(e) => setResistance(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>1 Ω (Min)</span>
                  <span>25 Ω</span>
                  <span>50 Ω (Max)</span>
                </div>
              </div>

              {/* 3. Switch Toggle Button */}
              <div className="pt-2">
                <button
                  onClick={() => setIsSwitchClosed(!isSwitchClosed)}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border ${
                    isSwitchClosed
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/20'
                      : 'bg-rose-500/20 border-rose-500 text-rose-300'
                  }`}
                >
                  <span>{isSwitchClosed ? '🟢' : '🔴'}</span>
                  <span>{isSwitchClosed ? (isHi ? 'परिपथ चालू (Switch Closed)' : 'Switch ON (Closed)') : (isHi ? 'परिपथ बंद (Switch Open)' : 'Switch OFF (Open)')}</span>
                </button>
              </div>

              {/* Meters Display */}
              <div className="pt-3 border-t border-gray-800 grid grid-cols-2 gap-3">
                <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800 text-center">
                  <span className="text-[10px] text-gray-400 block font-bold">{isHi ? 'एमीटर (धारा I)' : 'Ammeter (I)'}</span>
                  <span className="text-base font-extrabold text-sky-400 font-mono">{current.toFixed(2)} A</span>
                </div>
                <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800 text-center">
                  <span className="text-[10px] text-gray-400 block font-bold">{isHi ? 'विद्युत शक्ति (P)' : 'Power (P = VI)'}</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono">{power.toFixed(1)} W</span>
                </div>
              </div>
            </div>

            {/* Right Canvas Display */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-inner bg-slate-950 flex justify-center p-2">
                <canvas
                  ref={canvasRef}
                  width={520}
                  height={320}
                  className="max-w-full h-auto block select-none"
                />
              </div>

              {/* Ohm's Law Formula Card */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-amber-400 font-bold block">{isHi ? 'ओम का मूल नियम:' : "Ohm's Fundamental Law:"}</span>
                  <span className="font-mono text-base font-extrabold text-white">V = I · R &nbsp;⟹&nbsp; I = {voltage}V / {resistance}Ω = {current.toFixed(2)} A</span>
                </div>
                <div className="text-right text-gray-400">
                  <span>{isHi ? 'इलेक्ट्रॉन प्रवाह वेग धारा I के समानुपाती है।' : 'Electron speed directly proportional to current I.'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: V-I GRAPH */}
        {activeTab === 'graph' && (
          <div className="max-w-3xl mx-auto bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-white mb-1">
                {isHi ? 'V-I अभिलाक्षणिक ग्राफ (Linear V-I Characteristic)' : 'V-I Linear Characteristic Graph'}
              </h3>
              <p className="text-xs text-gray-400">
                {isHi ? `स्थिर प्रतिरोध R = ${resistance} Ω के लिए विभवांतर और धारा का रेखीय संबंध।` : `Linear relationship between Voltage and Current at fixed R = ${resistance} Ω.`}
              </p>
            </div>

            {/* SVG Plot */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-gray-800 flex justify-center">
              <svg width="460" height="260" viewBox="0 0 460 260">
                {/* Axes */}
                <line x1="50" y1="210" x2="420" y2="210" stroke="#64748b" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="210" stroke="#64748b" strokeWidth="2" />

                <text x="410" y="235" fill="#94a3b8" fontSize="11" fontWeight="bold">Current I (A) →</text>
                <text x="15" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold">Voltage V (V) ↑</text>

                {/* Grid ticks */}
                {[0, 1, 2, 3, 4].map((t) => (
                  <g key={t}>
                    <line x1={50 + t * 80} y1="205" x2={50 + t * 80} y2="215" stroke="#475569" />
                    <text x={50 + t * 80} y={230} fill="#64748b" fontSize="10" textAnchor="middle">{t} A</text>
                  </g>
                ))}
                {[0, 6, 12, 18, 24].map((v, idx) => (
                  <g key={v}>
                    <line x1="45" y1={210 - idx * 45} x2="55" y2={210 - idx * 45} stroke="#475569" />
                    <text x="35" y={214 - idx * 45} fill="#64748b" fontSize="10" textAnchor="end">{v} V</text>
                  </g>
                ))}

                {/* Straight Ohm's Line */}
                {(() => {
                  const maxV = 24;
                  const maxI = maxV / resistance;
                  const endX = 50 + (maxI / 4) * 320;
                  const endY = 210 - (maxV / 24) * 180;
                  return (
                    <>
                      <line x1="50" y1="210" x2={Math.min(420, endX)} y2={Math.max(20, endY)} stroke="#f59e0b" strokeWidth="3" />
                      {/* Current operating point dot */}
                      {isSwitchClosed && (
                        <circle
                          cx={Math.min(420, 50 + (current / 4) * 320)}
                          cy={Math.max(20, 210 - (voltage / 24) * 180)}
                          r="6"
                          fill="#ef4444"
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                      )}
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="bg-[#1e293b] p-4 rounded-xl text-xs text-gray-300 leading-relaxed">
              <strong className="text-amber-400 block mb-1">
                {isHi ? 'ग्राफ की ढाल (Slope):' : 'Slope of Graph:'}
              </strong>
              {isHi
                ? `इस रेखा की ढाल Slope = ΔV / ΔI = R = ${resistance} Ω दर्शाती है। यदि प्रतिरोध नियत है, तो रेखा सदैव मूल बिंदु (0,0) से गुजरने वाली एक सीधी रेखा होती है।`
                : `The slope of this line represents the resistance R = ΔV / ΔI = ${resistance} Ω. For ohmic conductors, the slope remains strictly linear at constant temperature.`}
            </div>
          </div>
        )}

        {/* TAB 3: THEORY */}
        {activeTab === 'theory' && (
          <div className="max-w-3xl mx-auto bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-4">
            <h3 className="text-base font-extrabold text-white">
              {isHi ? 'ओम के नियम का विस्तृत विवरण (NCERT कक्षा 10 अध्याय 12)' : "Ohm's Law Detailed Theory (NCERT Class 10)"}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {isHi
                ? 'जर्मन भौतिक विज्ञानी जॉर्ज साइमन ओम (1827) ने किसी धातु के तार में बहने वाली विद्युत धारा (I) तथा उसके सिरों के बीच विभवांतर (V) के संबंध को स्थापित किया। स्थिर भौतिक दशाओं में V ∝ I होता है, अर्थात् V / I = R (नियतांक)।'
                : 'Formulated by Georg Simon Ohm in 1827, Ohm’s Law dictates that current through a metallic conductor between two points is directly proportional to voltage across the two points, introducing the constant of proportionality: Resistance (R).'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800">
                <span className="text-[10px] text-amber-400 font-bold block">विभवांतर (Voltage)</span>
                <span className="font-mono text-sm font-bold text-white">V = I · R [Volt]</span>
              </div>
              <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800">
                <span className="text-[10px] text-sky-400 font-bold block">विद्युत धारा (Current)</span>
                <span className="font-mono text-sm font-bold text-white">I = V / R [Ampere]</span>
              </div>
              <div className="bg-[#0b0f19] p-3 rounded-xl border border-gray-800">
                <span className="text-[10px] text-emerald-400 font-bold block">प्रतिरोध (Resistance)</span>
                <span className="font-mono text-sm font-bold text-white">R = V / I [Ohm Ω]</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">Question 1</span>
              <h4 className="text-sm font-bold text-white">
                {isHi
                  ? 'यदि परिपथ का वोल्टेज 12V से बढ़ाकर 24V (दोगुना) कर दिया जाए और प्रतिरोध 10Ω ही रहे, तो धारा का मान क्या होगा?'
                  : 'If voltage is doubled from 12V to 24V with resistance held constant at 10Ω, what happens to current?'}
              </h4>
              <div className="p-3 rounded-xl bg-[#0b0f19] border border-gray-800 text-xs text-gray-300">
                <strong className="text-emerald-400 block mb-1">Answer: 2.4 A (Double)</strong>
                {isHi
                  ? 'I = V / R = 24 / 10 = 2.4 A. विभवांतर दोगुना करने पर धारा भी ठीक दोगुनी हो जाती है।'
                  : 'I = 24 / 10 = 2.4 A. Current doubles directly in proportion to voltage.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

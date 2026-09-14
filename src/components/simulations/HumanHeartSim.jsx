import React, { useState, useEffect } from 'react';

export const HumanHeartSim = ({ lang = 'en', onBack }) => {
  const isHi = lang === 'hi';

  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'circulation' | 'quiz'
  const [selectedPartId, setSelectedPartId] = useState('lv');
  const [bpm, setBpm] = useState(72);
  const [isPumping, setIsPumping] = useState(true);
  const [flowMode, setFlowMode] = useState('all'); // 'all' | 'oxygenated' | 'deoxygenated'
  const [quizAnswers, setQuizAnswers] = useState({});

  // Heartbeat interval timing based on BPM
  const pulseDurationSec = (60 / bpm).toFixed(2);

  // Anatomical Heart Parts Metadata
  const heartParts = [
    {
      id: 'lv',
      name: 'Left Ventricle',
      nameHi: 'बायाँ निलय',
      type: 'Chamber',
      oxygenated: true,
      color: '#ef4444',
      desc: 'The left ventricle has the thickest muscular wall of all chambers. It generates high pressure to pump oxygenated blood through the aortic valve into the systemic circulation.',
      descHi: 'बायाँ निलय हृदय का सबसे मोटा और शक्तिशाली कक्ष है। यह ऑक्सीजन युक्त शुद्ध रक्त को महाधमनी कपाट के माध्यम से पूरे शरीर में उच्च दाब पर पंप करता है।',
      facts: [
        { label: isHi ? 'भित्ति मोटाई' : 'Wall Thickness', val: '10–15 mm' },
        { label: isHi ? 'रक्त ग्रहण' : 'Receives From', val: isHi ? 'बायाँ अलिंद' : 'Left Atrium' },
        { label: isHi ? 'रक्त निष्कासन' : 'Pumps To', val: isHi ? 'महाधमनी (Aorta)' : 'Aorta' },
        { label: isHi ? 'दाब स्तर' : 'Pressure Role', val: isHi ? 'उच्चतम (120 mmHg)' : 'Highest (120 mmHg)' }
      ]
    },
    {
      id: 'rv',
      name: 'Right Ventricle',
      nameHi: 'दायाँ निलय',
      type: 'Chamber',
      oxygenated: false,
      color: '#3b82f6',
      desc: 'The right ventricle pumps deoxygenated blood under moderate pressure through the pulmonary valve into the pulmonary artery heading to the lungs.',
      descHi: 'दायाँ निलय शरीर से आए अशुद्ध (ऑक्सीजन रहित) रक्त को फुफ्फुस धमनी द्वारा फेफड़ों में ऑक्सीजन ग्रहण करने हेतु पंप करता है।',
      facts: [
        { label: isHi ? 'भित्ति मोटाई' : 'Wall Thickness', val: '4–5 mm' },
        { label: isHi ? 'रक्त ग्रहण' : 'Receives From', val: isHi ? 'दायाँ अलिंद' : 'Right Atrium' },
        { label: isHi ? 'रक्त निष्कासन' : 'Pumps To', val: isHi ? 'फुफ्फुस धमनी' : 'Pulmonary Artery' },
        { label: isHi ? 'दाब स्तर' : 'Pressure Role', val: isHi ? 'मध्यम (25 mmHg)' : 'Moderate (25 mmHg)' }
      ]
    },
    {
      id: 'la',
      name: 'Left Atrium',
      nameHi: 'बायाँ अलिंद',
      type: 'Chamber',
      oxygenated: true,
      color: '#f87171',
      desc: 'Receives freshly oxygenated blood returning from the lungs via the four pulmonary veins, then pushes it into the left ventricle.',
      descHi: 'फेफड़ों से चार फुफ्फुस शिराओं द्वारा आने वाले शुद्ध ऑक्सीजनित रक्त को ग्रहण करता है और बाएँ निलय में भेजता है।',
      facts: [
        { label: isHi ? 'प्रकार' : 'Type', val: isHi ? 'ग्राहक कक्ष' : 'Receiving Chamber' },
        { label: isHi ? 'रक्त ग्रहण' : 'Receives From', val: isHi ? 'फुफ्फुस शिराएँ' : 'Pulmonary Veins' },
        { label: isHi ? 'कपाट' : 'Exits Via', val: isHi ? 'माइट्रल (द्विकपर्दी) कपाट' : 'Mitral (Bicuspid) Valve' }
      ]
    },
    {
      id: 'ra',
      name: 'Right Atrium',
      nameHi: 'दायाँ अलिंद',
      type: 'Chamber',
      oxygenated: false,
      color: '#60a5fa',
      desc: 'Receives deoxygenated venous blood from systemic tissues via the superior and inferior vena cava. Houses the natural cardiac pacemaker (Sinoatrial Node).',
      descHi: 'शरीर के ऊपरी व निचले अंगों से महाशिरा द्वारा कार्बन डाइऑक्साइड युक्त अशुद्ध रक्त ग्रहण करता है। इसमें हृदय का पेसमेकर (SA Node) स्थित होता है।',
      facts: [
        { label: isHi ? 'पेसमेकर' : 'Pacemaker', val: 'SA Node (60–100 bpm)' },
        { label: isHi ? 'रक्त ग्रहण' : 'Receives From', val: isHi ? 'ऊर्ध्व व निम्न महाशिरा' : 'Superior & Inferior Vena Cava' },
        { label: isHi ? 'कपाट' : 'Exits Via', val: isHi ? 'त्रिकपर्दी कपाट' : 'Tricuspid Valve' }
      ]
    },
    {
      id: 'aorta',
      name: 'Aorta',
      nameHi: 'महाधमनी',
      type: 'Vessel',
      oxygenated: true,
      color: '#dc2626',
      desc: 'The largest artery in the human body. Forms the aortic arch, carrying oxygen-rich blood from the left ventricle to head, arms, and all abdominal organs.',
      descHi: 'मानव शरीर की सबसे बड़ी धमनी। यह बाएँ निलय से शुद्ध रक्त लेकर सिर, भुजाओं और पूरे शरीर के सभी अंगों तक पहुँचाती है।',
      facts: [
        { label: isHi ? 'व्यास' : 'Diameter', val: '~2.5 cm' },
        { label: isHi ? 'दाब' : 'Peak Pressure', val: '120 mmHg Systolic' },
        { label: isHi ? 'शाखाएँ' : 'Key Branches', val: isHi ? 'कोरोनरी, कैरोटिड' : 'Coronary, Carotid' }
      ]
    },
    {
      id: 'pa',
      name: 'Pulmonary Artery',
      nameHi: 'फुफ्फुस धमनी',
      type: 'Vessel',
      oxygenated: false,
      color: '#2563eb',
      desc: 'Carries deoxygenated blood from the right ventricle into the left and right lungs. It is the only artery in the postnatal human body that carries deoxygenated blood.',
      descHi: 'दाएँ निलय से अशुद्ध रक्त को फेफड़ों तक ले जाती है। यह मानव शरीर की एकमात्र ऐसी धमनी है जिसमें ऑक्सीजन रहित (अशुद्ध) रक्त बहता है।',
      facts: [
        { label: isHi ? 'अपवाद' : 'Exception', val: isHi ? 'धमनी में अशुद्ध रक्त' : 'Carries Deoxygenated Blood' },
        { label: isHi ? 'गंतव्य' : 'Destination', val: isHi ? 'फेफड़े (Lungs)' : 'Pulmonary Alveoli' }
      ]
    },
    {
      id: 'valves',
      name: 'Heart Valves (Mitral & Tricuspid)',
      nameHi: 'हृदय कपाट (वाल्व)',
      type: 'Valve',
      oxygenated: null,
      color: '#fbbf24',
      desc: 'Fibrous flaps that open and close in sync with cardiac cycle. They ensure unidirectional blood flow and produce the classical "lub-dub" heart sounds upon closing.',
      descHi: 'रक्त को एक ही दिशा में प्रवाहित रखने वाले रेशेदार कपाट। इनके बंद होने से हृदय की धड़कन की "लब-डब" (Lub-Dub) ध्वनि उत्पन्न होती है।',
      facts: [
        { label: isHi ? 'ध्वनि' : 'Heart Sounds', val: 'S1 (Lub), S2 (Dub)' },
        { label: isHi ? 'मुख्य कार्य' : 'Function', val: isHi ? 'विपरीत प्रवाह रोकना' : 'Prevent Backflow' }
      ]
    }
  ];

  const selectedPart = heartParts.find((p) => p.id === selectedPartId) || heartParts[0];

  const quizzes = [
    {
      id: 'q-heart-1',
      question: 'Why does the human left ventricle have a much thicker muscular wall than the right ventricle?',
      questionHi: 'मानव के बाएँ निलय की पेशीय भित्ति दाएँ निलय की तुलना में काफी अधिक मोटी क्यों होती है?',
      options: [
        { id: 'A', text: 'To hold more volume of blood', textHi: 'रक्त की अधिक मात्रा समाहित करने के लिए' },
        { id: 'B', text: 'To pump blood under high pressure to the whole body', textHi: 'पूरे शरीर में उच्च दाब के साथ रक्त पंप करने के लिए' },
        { id: 'C', text: 'To resist temperature variations', textHi: 'तापमान के उतार-चढ़ाव को रोकने के लिए' },
        { id: 'D', text: 'To prevent oxygen from leaking', textHi: 'ऑक्सीजन को रिसने से रोकने के लिए' }
      ],
      correct: 'B',
      explanation: 'The right ventricle only pumps blood nearby to the low-resistance lungs (25 mmHg), while the left ventricle must pump blood throughout the high-resistance systemic circulation (120 mmHg) to reach every organ from head to toes.',
      explanationHi: 'दायाँ निलय रक्त को केवल पास के फेफड़ों तक कम दाब पर भेजता है, जबकि बायाँ निलय सिर से पैर तक पूरे शरीर में उच्च दाब (120 mmHg) पर रक्त पंप करता है।'
    },
    {
      id: 'q-heart-2',
      question: 'What constitutes "Double Circulation" in humans?',
      questionHi: 'मानव में "दोहरा परिसंचरण" (Double Circulation) से क्या अभिप्राय है?',
      options: [
        { id: 'A', text: 'Blood enters and leaves the heart twice during each complete cycle', textHi: 'एक पूर्ण चक्र में रक्त का हृदय से दो बार गुजरना (फुफ्फुसीय एवं दैहिक)' },
        { id: 'B', text: 'Blood has twice the number of white cells as red cells', textHi: 'रक्त में श्वेत रक्त कणिकाओं का दोगुना होना' },
        { id: 'C', text: 'Heart beats two times per second', textHi: 'हृदय का एक सेकंड में दो बार धड़कना' },
        { id: 'D', text: 'Blood flows simultaneously in two parallel directions in each vein', textHi: 'प्रत्येक शिरा में रक्त का दो दिशाओं में बहना' }
      ],
      correct: 'A',
      explanation: 'Blood passes through the heart twice per circuit: once through the right side to the lungs (pulmonary circuit) and once through the left side to the body tissues (systemic circuit).',
      explanationHi: 'शरीर के एक पूरे चक्कर में रक्त हृदय में दो बार आता है: पहली बार अशुद्ध रक्त फेफड़ों में जाने हेतु और दूसरी बार शुद्ध रक्त शरीर में जाने हेतु।'
    }
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#111827]/90 border-b border-gray-800 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
            <button onClick={onBack} className="hover:underline flex items-center gap-1 text-gray-400 hover:text-white">
              <span>←</span>
              <span>{isHi ? 'सिमुलेशन हब' : 'Simulation Hub'}</span>
            </button>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'जीव विज्ञान' : 'Biology'}</span>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'मानव शरीर एवं परिसंचरण' : 'Human Physiology'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>🫀</span>
            <span>{isHi ? 'मानव हृदय रचना एवं रक्त परिसंचरण' : 'Human Heart 3D Anatomy & Circulation'}</span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-[#1f293d] p-1 rounded-2xl border border-gray-700 text-xs font-semibold">
          {[
            { id: 'explore', label: isHi ? 'अन्वेषण' : 'Explore', icon: '🔍' },
            { id: 'circulation', label: isHi ? 'दोहरा परिसंचरण' : 'Circulation', icon: '🔄' },
            { id: 'quiz', label: isHi ? 'प्रश्नोत्तरी' : 'Quiz', icon: '❓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="p-5 sm:p-7">
        {activeTab === 'explore' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Quick Selector & Pulse Rate Slider */}
            <div className="lg:col-span-3 bg-[#111827] rounded-2xl p-5 border border-gray-800 space-y-5">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  {isHi ? 'हृदय के मुख्य भाग' : 'Heart Chambers & Vessels'}
                </h3>
                <div className="space-y-1.5">
                  {heartParts.map((part) => {
                    const isSelected = selectedPartId === part.id;
                    return (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPartId(part.id)}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between border ${
                          isSelected
                            ? 'bg-rose-500/20 border-rose-500 text-white font-bold shadow-sm'
                            : 'bg-gray-800/40 border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: part.color }}
                          ></span>
                          <span>{isHi ? part.nameHi : part.name}</span>
                        </div>
                        {part.oxygenated !== null && (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${part.oxygenated ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {part.oxygenated ? (isHi ? 'शुद्ध' : 'O₂') : (isHi ? 'अशुद्ध' : 'CO₂')}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Heartbeat Pulse Speed Control */}
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                    <span className="text-rose-500 animate-pulse text-base">💓</span>
                    <span>{isHi ? 'धड़कन गति (BPM)' : 'Heart Rate (BPM)'}</span>
                  </span>
                  <span className="font-mono text-sm font-extrabold text-rose-400">{bpm} BPM</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>45 (Resting)</span>
                  <span className="text-emerald-400 font-bold">72 (Normal)</span>
                  <span>140 (Workout)</span>
                </div>

                <button
                  onClick={() => setIsPumping(!isPumping)}
                  className={`w-full py-2 rounded-xl text-xs font-bold border transition-all ${
                    isPumping
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-gray-800 border-gray-700 text-gray-400'
                  }`}
                >
                  {isPumping ? (isHi ? '⏸️ धड़कन रोकें' : '⏸️ Pause Pulse') : (isHi ? '▶️ धड़कन शुरू करें' : '▶️ Resume Pulse')}
                </button>
              </div>

              {/* Blood Flow Filter */}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 block">{isHi ? 'रक्त प्रवाह प्रदर्शन:' : 'Blood Flow Filter:'}</span>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: 'all', label: isHi ? 'दोनों' : 'All' },
                    { id: 'oxygenated', label: isHi ? 'शुद्ध (लाल)' : 'Oxygen' },
                    { id: 'deoxygenated', label: isHi ? 'अशुद्ध (नीला)' : 'De-O₂' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFlowMode(f.id)}
                      className={`py-1 rounded-lg text-[10px] font-bold border transition-all ${
                        flowMode === f.id
                          ? 'bg-gray-700 border-gray-500 text-white'
                          : 'bg-gray-800/50 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column: Interactive Graphic Canvas / SVG */}
            <div className="lg:col-span-5 bg-[#111827] rounded-2xl p-6 border border-gray-800 flex flex-col items-center justify-center relative min-h-[440px] overflow-hidden">
              {/* Pulsing Glow Background */}
              <div
                className={`absolute w-72 h-72 rounded-full bg-rose-600/10 blur-3xl pointer-events-none transition-all ${
                  isPumping ? 'animate-ping duration-1000' : ''
                }`}
              ></div>

              {/* Live ECG Wave Simulation Bar at the top */}
              <div className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-3 py-2 flex items-center justify-between mb-4 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">ECG Normal Sinus Rhythm</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                  <span>Cycle: {pulseDurationSec}s</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
              </div>

              {/* Interactive Anatomical Heart SVG */}
              <div
                className={`relative transition-transform cursor-pointer select-none ${
                  isPumping ? 'scale-100 animate-pulse' : ''
                }`}
                style={{ animationDuration: `${pulseDurationSec}s` }}
              >
                <svg width="340" height="340" viewBox="0 0 400 400" className="drop-shadow-2xl">
                  {/* Defs for gradients & flow patterns */}
                  <defs>
                    <linearGradient id="aortaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#991b1b" />
                    </linearGradient>
                    <linearGradient id="paGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="lvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#b91c1c" />
                    </linearGradient>
                    <linearGradient id="rvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>

                  {/* 1. Superior Vena Cava (Top Left blue pipe) */}
                  {(flowMode === 'all' || flowMode === 'deoxygenated') && (
                    <g onClick={() => setSelectedPartId('ra')} className="cursor-pointer hover:opacity-85">
                      <path d="M 120 40 L 120 120 L 155 120 L 155 40 Z" fill="url(#paGrad)" />
                      <text x="105" y="30" fill="#93c5fd" fontSize="11" fontWeight="bold">Vena Cava (महाशिरा)</text>
                    </g>
                  )}

                  {/* 2. Aorta Arch (Top Red Arch) */}
                  {(flowMode === 'all' || flowMode === 'oxygenated') && (
                    <g onClick={() => setSelectedPartId('aorta')} className="cursor-pointer hover:opacity-85">
                      <path
                        d="M 175 110 C 175 40, 260 30, 275 110 L 250 115 C 240 60, 195 65, 195 115 Z"
                        fill="url(#aortaGrad)"
                        stroke="#fca5a5"
                        strokeWidth="2"
                      />
                      {/* 3 Aortic branch pipes */}
                      <rect x="195" y="15" width="12" height="30" fill="#dc2626" rx="3" />
                      <rect x="215" y="10" width="12" height="35" fill="#dc2626" rx="3" />
                      <rect x="235" y="18" width="12" height="28" fill="#dc2626" rx="3" />
                      <text x="250" y="25" fill="#fca5a5" fontSize="12" fontWeight="bold">Aorta (महाधमनी)</text>
                    </g>
                  )}

                  {/* 3. Pulmonary Artery Crossing (Blue pipe branching left/right) */}
                  {(flowMode === 'all' || flowMode === 'deoxygenated') && (
                    <g onClick={() => setSelectedPartId('pa')} className="cursor-pointer hover:opacity-85">
                      <path
                        d="M 150 120 Q 200 135 245 100 L 255 115 Q 195 160 140 135 Z"
                        fill="url(#paGrad)"
                        stroke="#93c5fd"
                        strokeWidth="1.5"
                      />
                      <text x="250" y="145" fill="#93c5fd" fontSize="11" fontWeight="bold">Pulmonary Artery</text>
                    </g>
                  )}

                  {/* Main Heart Muscular Body Background Silhouette */}
                  <path
                    d="M 110 130 C 70 180, 80 270, 200 370 C 320 270, 330 180, 290 130 C 260 110, 220 140, 200 145 C 180 140, 140 110, 110 130 Z"
                    fill="#450a0a"
                    stroke="#7f1d1d"
                    strokeWidth="4"
                  />

                  {/* 4. Right Atrium (Top Left internal chamber) */}
                  <path
                    d="M 115 140 C 95 170, 100 215, 145 220 C 160 210, 160 160, 140 140 Z"
                    fill={selectedPartId === 'ra' ? '#3b82f6' : 'url(#rvGrad)'}
                    className="cursor-pointer transition-all hover:brightness-125"
                    onClick={() => setSelectedPartId('ra')}
                    stroke={selectedPartId === 'ra' ? '#ffffff' : '#1d4ed8'}
                    strokeWidth={selectedPartId === 'ra' ? 3 : 1.5}
                  />
                  <text x="110" y="185" fill="#ffffff" fontSize="10" fontWeight="bold" pointerEvents="none">Right Atrium</text>

                  {/* 5. Left Atrium (Top Right internal chamber) */}
                  <path
                    d="M 285 140 C 305 170, 300 215, 255 220 C 240 210, 240 160, 260 140 Z"
                    fill={selectedPartId === 'la' ? '#f43f5e' : 'url(#lvGrad)'}
                    className="cursor-pointer transition-all hover:brightness-125"
                    onClick={() => setSelectedPartId('la')}
                    stroke={selectedPartId === 'la' ? '#ffffff' : '#be123c'}
                    strokeWidth={selectedPartId === 'la' ? 3 : 1.5}
                  />
                  <text x="245" y="185" fill="#ffffff" fontSize="10" fontWeight="bold" pointerEvents="none">Left Atrium</text>

                  {/* 6. Interventricular Septum (Central separating wall) */}
                  <path
                    d="M 195 210 L 205 210 L 200 355 Z"
                    fill="#7f1d1d"
                    stroke="#991b1b"
                    strokeWidth="3"
                  />

                  {/* 7. Right Ventricle (Bottom Left chamber) */}
                  <path
                    d="M 135 230 C 130 270, 150 310, 190 340 L 192 230 Z"
                    fill={selectedPartId === 'rv' ? '#2563eb' : 'url(#rvGrad)'}
                    className="cursor-pointer transition-all hover:brightness-125"
                    onClick={() => setSelectedPartId('rv')}
                    stroke={selectedPartId === 'rv' ? '#ffffff' : '#1d4ed8'}
                    strokeWidth={selectedPartId === 'rv' ? 3 : 1.5}
                  />
                  <text x="140" y="280" fill="#ffffff" fontSize="10" fontWeight="bold" pointerEvents="none">Right Ventricle</text>

                  {/* 8. Left Ventricle (Bottom Right chamber, noticeably thicker wall) */}
                  <path
                    d="M 208 230 L 210 340 C 250 310, 275 270, 265 230 Z"
                    fill={selectedPartId === 'lv' ? '#dc2626' : 'url(#lvGrad)'}
                    className="cursor-pointer transition-all hover:brightness-125"
                    onClick={() => setSelectedPartId('lv')}
                    stroke={selectedPartId === 'lv' ? '#ffffff' : '#991b1b'}
                    strokeWidth={selectedPartId === 'lv' ? 3 : 2}
                  />
                  <text x="215" y="280" fill="#ffffff" fontSize="10" fontWeight="bold" pointerEvents="none">Left Ventricle</text>

                  {/* 9. Valve flaps */}
                  <circle cx="150" cy="225" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" onClick={() => setSelectedPartId('valves')} className="cursor-pointer" />
                  <circle cx="250" cy="225" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" onClick={() => setSelectedPartId('valves')} className="cursor-pointer" />

                  {/* Pulsing Blood Flow Arrows */}
                  {isPumping && (
                    <g className="animate-pulse">
                      {/* Blue deoxygenated arrows */}
                      {(flowMode === 'all' || flowMode === 'deoxygenated') && (
                        <>
                          <text x="135" y="110" fill="#60a5fa" fontSize="14" fontWeight="bold">↓</text>
                          <text x="145" y="210" fill="#60a5fa" fontSize="14" fontWeight="bold">↓</text>
                          <text x="175" y="195" fill="#60a5fa" fontSize="14" fontWeight="bold">↗</text>
                        </>
                      )}
                      {/* Red oxygenated arrows */}
                      {(flowMode === 'all' || flowMode === 'oxygenated') && (
                        <>
                          <text x="260" y="160" fill="#f87171" fontSize="14" fontWeight="bold">↓</text>
                          <text x="235" y="250" fill="#f87171" fontSize="14" fontWeight="bold">↓</text>
                          <text x="210" y="100" fill="#f87171" fontSize="14" fontWeight="bold">↑</text>
                        </>
                      )}
                    </g>
                  )}
                </svg>
              </div>

              {/* Active selection callout */}
              <div className="mt-4 px-4 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-xs font-semibold text-gray-300">
                {isHi ? 'चयनित अंग: ' : 'Selected: '}
                <strong className="text-white">{isHi ? selectedPart.nameHi : selectedPart.name}</strong>
              </div>
            </div>

            {/* Right Column: Part Details & Quick Facts */}
            <div className="lg:col-span-4 bg-[#111827] rounded-2xl p-5 border border-gray-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                      {selectedPart.type}
                    </span>
                    <h3 className="text-lg font-extrabold text-white">
                      {isHi ? selectedPart.nameHi : selectedPart.name}
                    </h3>
                  </div>
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedPart.color }}
                  ></span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {isHi ? selectedPart.descHi : selectedPart.desc}
                </p>

                {/* Quick Facts Grid */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {isHi ? 'मुख्य तथ्य (Quick Facts)' : 'Quick Facts'}
                  </h4>
                  <div className="bg-[#0b0f19] rounded-xl p-3 border border-gray-800 space-y-2 text-xs">
                    {selectedPart.facts.map((f, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-900 last:border-b-0">
                        <span className="text-gray-400">{f.label}:</span>
                        <span className="font-semibold text-white">{f.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heartbeat audio-visual banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-950/50 to-red-900/30 border border-rose-800/40 text-xs text-rose-200">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <span>💓</span>
                  <span>{isHi ? 'द्विचक्रिय पम्प (Lub-Dub)' : 'Dual Systemic Pump'}</span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  {isHi
                    ? 'हृदय 24 घंटे बिना थके धड़कता है और प्रतिदिन लगभग 7,000 लीटर रक्त को शरीर की 1,00,000 किमी लंबी रक्त वाहिकाओं में पंप करता है।'
                    : 'The human heart beats ~100,000 times daily without tiring, pumping over 7,000 liters of blood through 60,000 miles of vessels.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DOUBLE CIRCULATION EXPLANATION */}
        {activeTab === 'circulation' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-extrabold text-white mb-3 flex items-center gap-2">
                <span>🔄</span>
                <span>{isHi ? 'दोहरा परिसंचरण तंत्र (Double Circulation System)' : 'Double Circulation System'}</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {isHi
                  ? 'मानव में रक्त एक पूर्ण चक्र में हृदय से दो बार गुजरता है। इस प्रक्रिया को दोहरा परिसंचरण कहते हैं। यह शुद्ध और अशुद्ध रक्त को आपस में मिलने से रोकता है, जिससे शरीर को अत्यधिक मात्रा में ऑक्सीजन मिलती है।'
                  : 'In humans and mammals, blood flows through the heart twice during each complete cardiac cycle. This dual-circuit system separates oxygen-rich and oxygen-poor blood, maximizing energy efficiency for endothermic warm-blooded life.'}
              </p>

              {/* Comparison cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1e1b4b]/60 border border-blue-500/40 p-5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-blue-400 uppercase">
                    1. {isHi ? 'फुफ्फुसीय परिसंचरण (Pulmonary Circuit)' : 'Pulmonary Circulation'}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isHi ? 'हृदय → फेफड़े → हृदय' : 'Heart → Lungs → Heart'}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {isHi
                      ? 'दायाँ निलय अशुद्ध रक्त को फुफ्फुस धमनी द्वारा फेफड़ों में भेजता है। वहाँ CO₂ बाहर निकलती है और O₂ मिलती है। फिर फुफ्फुस शिरा द्वारा शुद्ध रक्त बाएँ अलिंद में लौटता है।'
                      : 'Deoxygenated blood travels from the Right Ventricle through Pulmonary Arteries to alveolar capillaries in the lungs. After absorbing O₂ and releasing CO₂, it returns via Pulmonary Veins to the Left Atrium.'}
                  </p>
                </div>

                <div className="bg-[#4c0519]/60 border border-rose-500/40 p-5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-rose-400 uppercase">
                    2. {isHi ? 'दैहिक परिसंचरण (Systemic Circuit)' : 'Systemic Circulation'}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isHi ? 'हृदय → संपूर्ण शरीर → हृदय' : 'Heart → Whole Body → Heart'}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {isHi
                      ? 'बायाँ निलय शुद्ध रक्त को महाधमनी (Aorta) द्वारा मस्तिष्क, यकृत, वृक्क, मांसपेशियों तक पंप करता है। कोशिकाओं में O₂ उपयोग होने के बाद महाशिरा द्वारा रक्त पुनः दाएँ अलिंद में आ जाता है।'
                      : 'Oxygenated blood is pumped from the Left Ventricle through the Aorta to brain, muscles, kidneys, and digestive organs. After tissue oxygen exchange, deoxygenated blood returns via Vena Cava to the Right Atrium.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {quizzes.map((q, idx) => {
              const selected = quizAnswers[q.id];
              const isAnswered = Boolean(selected);
              const isCorrect = selected === q.correct;

              return (
                <div key={q.id} className="bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-400">
                    <span>{isHi ? `प्रश्न ${idx + 1} / ${quizzes.length}` : `Question ${idx + 1} of ${quizzes.length}`}</span>
                    {isAnswered && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                        {isCorrect ? (isHi ? '✓ सही उत्तर!' : '✓ Correct!') : (isHi ? '✗ गलत उत्तर' : '✗ Incorrect')}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white leading-relaxed">
                    {isHi ? q.questionHi : q.question}
                  </h4>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      let style = 'bg-gray-800/80 border-gray-700 text-gray-300 hover:border-rose-500 hover:bg-gray-800';
                      if (isAnswered) {
                        if (opt.id === q.correct) {
                          style = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                        } else if (selected === opt.id) {
                          style = 'bg-rose-500/20 border-rose-500 text-rose-200';
                        } else {
                          style = 'bg-gray-800/40 border-gray-800 text-gray-500';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${style}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-gray-700/60 flex items-center justify-center font-bold text-xs">
                              {opt.id}
                            </span>
                            <span>{isHi ? opt.textHi : opt.text}</span>
                          </div>
                          {isAnswered && opt.id === q.correct && (
                            <span className="text-emerald-400 font-bold">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="p-4 rounded-xl bg-[#1e293b] border border-gray-700 text-xs text-gray-300 leading-relaxed">
                      <strong className="text-rose-300 block mb-1">{isHi ? 'व्याख्या:' : 'Explanation:'}</strong>
                      {isHi ? q.explanationHi : q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

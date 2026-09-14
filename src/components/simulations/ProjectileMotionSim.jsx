import React, { useState, useRef, useEffect } from 'react';

export const ProjectileMotionSim = ({ lang = 'en', onBack }) => {
  const isHi = lang === 'hi';

  // Active sub-tab: 'controls' | 'theory' | 'observations' | 'questions'
  const [activeTab, setActiveTab] = useState('controls');

  // Physical Parameters
  const [angle, setAngle] = useState(45); // degrees
  const [velocity, setVelocity] = useState(25); // m/s
  const [gravity, setGravity] = useState(9.8); // m/s²
  const [airResistance, setAirResistance] = useState(false);
  const [showTrajectory, setShowTrajectory] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  // Target distance on ground (meters)
  const [targetDistance, setTargetDistance] = useState(40);

  // Live Telemetry
  const [simTime, setSimTime] = useState(0);
  const [currentDist, setCurrentDist] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [targetHit, setTargetHit] = useState(false);

  // Observations log
  const [trials, setTrials] = useState([]);

  // Quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [showQuizExplanations, setShowQuizExplanations] = useState({});

  // Canvas ref
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const stateRef = useRef({
    t: 0,
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
    maxH: 0,
    path: [],
    particles: []
  });

  // Theoretical calculations
  const rad = (angle * Math.PI) / 180;
  const theoreticalTime = (2 * velocity * Math.sin(rad)) / gravity;
  const theoreticalMaxHeight = (Math.pow(velocity * Math.sin(rad), 2)) / (2 * gravity);
  const theoreticalRange = (Math.pow(velocity, 2) * Math.sin(2 * rad)) / gravity;

  // Render & Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    // Coordinate transformations
    // Origin (cannon base): x = 70, y = height - 60
    const originX = 70;
    const originY = height - 60;
    const scale = Math.min(width / 75, height / 35); // pixels per meter

    const drawScene = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Sky & Landscape Background
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#0f172a');
      skyGrad.addColorStop(0.5, '#1e1b4b');
      skyGrad.addColorStop(0.85, '#312e81');
      skyGrad.addColorStop(1, '#1e293b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Distant mountains
      ctx.fillStyle = '#1e1b4b88';
      ctx.beginPath();
      ctx.moveTo(0, originY);
      ctx.lineTo(80, originY - 110);
      ctx.lineTo(190, originY - 40);
      ctx.lineTo(290, originY - 140);
      ctx.lineTo(420, originY - 30);
      ctx.lineTo(540, originY - 120);
      ctx.lineTo(660, originY - 40);
      ctx.lineTo(width, originY - 90);
      ctx.lineTo(width, originY);
      ctx.closePath();
      ctx.fill();

      // Grid Lines
      if (showGrid) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        // Vertical grid lines (every 10m)
        for (let m = 0; m <= 70; m += 10) {
          const gx = originX + m * scale;
          ctx.beginPath();
          ctx.moveTo(gx, 20);
          ctx.lineTo(gx, originY);
          ctx.stroke();

          // Distance labels
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.font = '10px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`${m}m`, gx, originY + 16);
        }
        // Horizontal grid lines (every 5m)
        for (let hm = 0; hm <= 25; hm += 5) {
          const gy = originY - hm * scale;
          ctx.beginPath();
          ctx.moveTo(originX, gy);
          ctx.lineTo(width - 20, gy);
          ctx.stroke();

          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.textAlign = 'right';
          ctx.fillText(`${hm}m`, originX - 8, gy + 3);
        }
      }

      // Ground Surface
      const groundGrad = ctx.createLinearGradient(0, originY, 0, height);
      groundGrad.addColorStop(0, '#15803d');
      groundGrad.addColorStop(0.2, '#166534');
      groundGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, originY, width, height - originY);

      // Ground decorative grass line
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, originY);
      ctx.lineTo(width, originY);
      ctx.stroke();

      // Target Bullseye at targetDistance
      const targetX = originX + targetDistance * scale;
      ctx.save();
      // Target stand
      ctx.fillStyle = '#64748b';
      ctx.fillRect(targetX - 2, originY - 24, 4, 24);
      // Outer red ring
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(targetX, originY - 24, 14, 0, Math.PI * 2);
      ctx.fill();
      // Inner white ring
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(targetX, originY - 24, 9, 0, Math.PI * 2);
      ctx.fill();
      // Bullseye center
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(targetX, originY - 24, 4, 0, Math.PI * 2);
      ctx.fill();

      // Flag / Target text
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🎯 ${targetDistance}m`, targetX, originY - 42);
      ctx.restore();

      // Theoretical Parabolic Guide Arc
      if (showTrajectory) {
        ctx.save();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        const pts = 80;
        const totalT = theoreticalTime;
        for (let i = 0; i <= pts; i++) {
          const tCur = (i / pts) * totalT;
          const px = velocity * Math.cos(rad) * tCur;
          const py = velocity * Math.sin(rad) * tCur - 0.5 * gravity * tCur * tCur;
          const cx = originX + px * scale;
          const cy = originY - Math.max(0, py) * scale;
          if (i === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Drawn Path from current flight
      const st = stateRef.current;
      if (st.path.length > 1) {
        ctx.save();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(originX + st.path[0].x * scale, originY - st.path[0].y * scale);
        for (let i = 1; i < st.path.length; i++) {
          ctx.lineTo(originX + st.path[i].x * scale, originY - st.path[i].y * scale);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Cannon Base & Barrel
      ctx.save();
      ctx.translate(originX, originY);

      // Base wheel
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Cannon Barrel rotated to launch angle
      ctx.save();
      ctx.rotate(-rad);
      const barrelGrad = ctx.createLinearGradient(0, -7, 36, 7);
      barrelGrad.addColorStop(0, '#475569');
      barrelGrad.addColorStop(0.5, '#64748b');
      barrelGrad.addColorStop(1, '#94a3b8');
      ctx.fillStyle = barrelGrad;
      ctx.fillRect(0, -6, 34, 12);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(0, -6, 34, 12);
      // Muzzle rim
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(32, -8, 4, 16);
      ctx.restore();

      // Wheel hub
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Flying Projectile Ball
      if (isFlying || st.path.length > 0) {
        const ballX = originX + st.x * scale;
        const ballY = originY - st.y * scale;

        ctx.save();
        ctx.shadowColor = '#f97316';
        ctx.shadowBlur = 12;

        const ballGrad = ctx.createRadialGradient(ballX - 2, ballY - 2, 1, ballX, ballY, 8);
        ballGrad.addColorStop(0, '#fff');
        ballGrad.addColorStop(0.4, '#fb923c');
        ballGrad.addColorStop(1, '#ea580c');
        ctx.fillStyle = ballGrad;
        ctx.beginPath();
        ctx.arc(ballX, ballY, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Explosion / Splash Particles
      if (st.particles.length > 0) {
        for (let p of st.particles) {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    drawScene();
  }, [angle, velocity, gravity, targetDistance, showGrid, showTrajectory, isFlying]);

  // Launch handler
  const handleLaunch = () => {
    if (isFlying) return;
    setIsFlying(true);
    setTargetHit(false);

    const st = stateRef.current;
    st.t = 0;
    st.x = 0;
    st.y = 0;
    st.maxH = 0;
    st.path = [{ x: 0, y: 0 }];
    st.particles = [];

    const radLaunch = (angle * Math.PI) / 180;
    const v0 = velocity;
    const g = gravity;
    const dragCoeff = airResistance ? 0.04 : 0;

    let vx = v0 * Math.cos(radLaunch);
    let vy = v0 * Math.sin(radLaunch);
    let px = 0;
    let py = 0;
    let timeElapsed = 0;
    const dt = 0.02; // 20ms physics step

    const step = () => {
      timeElapsed += dt;

      // Update positions
      if (airResistance) {
        const speed = Math.sqrt(vx * vx + vy * vy);
        const ax = -dragCoeff * speed * vx;
        const ay = -g - dragCoeff * speed * vy;
        vx += ax * dt;
        vy += ay * dt;
      } else {
        vy -= g * dt;
      }

      px += vx * dt;
      py += vy * dt;

      if (py > st.maxH) st.maxH = py;

      st.t = timeElapsed;
      st.x = px;
      st.y = Math.max(0, py);
      st.path.push({ x: px, y: Math.max(0, py) });

      setSimTime(parseFloat(timeElapsed.toFixed(2)));
      setCurrentDist(parseFloat(px.toFixed(1)));
      setCurrentHeight(parseFloat(Math.max(0, py).toFixed(1)));

      // Ground impact check
      if (py <= 0 && timeElapsed > 0.05) {
        st.y = 0;
        setIsFlying(false);

        // Check target hit (within 2.5 meters)
        const hit = Math.abs(px - targetDistance) <= 2.5;
        setTargetHit(hit);

        // Record in trial observations
        setTrials((prev) => [
          {
            id: Date.now(),
            angle,
            velocity,
            gravity,
            time: parseFloat(timeElapsed.toFixed(2)),
            maxHeight: parseFloat(st.maxH.toFixed(2)),
            range: parseFloat(px.toFixed(2)),
            targetDist: targetDistance,
            hit
          },
          ...prev.slice(0, 9)
        ]);

        // Spawn hit particle effect
        const canvas = canvasRef.current;
        if (canvas) {
          const originX = 70;
          const originY = canvas.height - 60;
          const scale = Math.min(canvas.width / 75, canvas.height / 35);
          const impactX = originX + px * scale;
          const impactY = originY;

          for (let i = 0; i < 24; i++) {
            const pAngle = Math.random() * Math.PI;
            const pSpeed = Math.random() * 4 + 2;
            st.particles.push({
              x: impactX,
              y: impactY,
              vx: Math.cos(pAngle) * pSpeed,
              vy: -Math.sin(pAngle) * pSpeed,
              color: hit ? '#fbbf24' : '#fdba74',
              size: Math.random() * 4 + 2,
              life: 30
            });
          }

          // Particle decay loop
          const animateParticles = () => {
            let active = false;
            for (let p of st.particles) {
              p.x += p.vx;
              p.y += p.vy;
              p.vy += 0.2; // gravity
              p.life -= 1;
              if (p.life > 0) active = true;
            }
            st.particles = st.particles.filter((p) => p.life > 0);
            if (active) requestAnimationFrame(animateParticles);
          };
          animateParticles();
        }
        return;
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleReset = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    setIsFlying(false);
    setSimTime(0);
    setCurrentDist(0);
    setCurrentHeight(0);
    setTargetHit(false);
    stateRef.current = {
      t: 0,
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
      maxH: 0,
      path: [],
      particles: []
    };
  };

  // Quizzes defined for Projectile Motion
  const quizItems = [
    {
      id: 'q1',
      question: 'What happens to the horizontal range of a projectile if the launch angle is increased from 30° to 60° (keeping initial speed constant)?',
      questionHi: 'समान प्रारंभिक चाल रखते हुए यदि प्रक्षेपण कोण को 30° से बढ़ाकर 60° कर दिया जाए, तो क्षैतिज परास पर क्या प्रभाव पड़ेगा?',
      options: [
        { id: 'A', text: 'Range increases', textHi: 'परास बढ़ जाएगा' },
        { id: 'B', text: 'Range decreases', textHi: 'परास घट जाएगा' },
        { id: 'C', text: 'Range remains the same', textHi: 'परास समान (अपरिवर्तित) रहेगा' },
        { id: 'D', text: 'Range becomes zero', textHi: 'परास शून्य हो जाएगा' }
      ],
      correct: 'C',
      explanation: 'For a given initial velocity, complementary angles (θ and 90° - θ, like 30° and 60°) produce the exact same horizontal range because sin 2(30°) = sin 60° = sin 120° = sin 2(60°).',
      explanationHi: 'समान प्रारंभिक वेग के लिए पूरक कोणों (θ और 90° - θ, जैसे 30° और 60°) का क्षैतिज परास ठीक बराबर रहता है क्योंकि sin 2(30°) = sin 2(60°) = √3/2।'
    },
    {
      id: 'q2',
      question: 'At what launch angle will a projectile achieve its absolute maximum horizontal distance on Earth?',
      questionHi: 'पृथ्वी पर किस प्रक्षेपण कोण पर प्रक्षेप्य अपनी अधिकतम संभव क्षैतिज दूरी (Maximum Range) तय करेगा?',
      options: [
        { id: 'A', text: '30°', textHi: '30°' },
        { id: 'B', text: '45°', textHi: '45°' },
        { id: 'C', text: '60°', textHi: '60°' },
        { id: 'D', text: '90°', textHi: '90°' }
      ],
      correct: 'B',
      explanation: 'Range R = (u² sin 2θ)/g. Since sin 2θ maxes out at 1 when 2θ = 90°, the optimal angle is θ = 45°.',
      explanationHi: 'R = (u² sin 2θ)/g में sin 2θ का अधिकतम मान 1 होता है (जब 2θ = 90°), अतः θ = 45° पर अधिकतम परास मिलता है।'
    }
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="bg-[#111827]/90 border-b border-gray-800 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
            <button onClick={onBack} className="hover:underline flex items-center gap-1 text-gray-400 hover:text-white">
              <span>←</span>
              <span>{isHi ? 'सिमुलेशन हब' : 'Simulation Hub'}</span>
            </button>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'भौतिक विज्ञान' : 'Physics'}</span>
            <span className="text-gray-600">&bull;</span>
            <span>{isHi ? 'द्विविमीय गति' : 'Kinematics'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>🚀</span>
            <span>{isHi ? 'प्रक्षेप्य गति सिमुलेटर' : 'Projectile Motion Simulator'}</span>
          </h2>
        </div>

        {/* Sub-Tabs: Controls, Theory, Observations, Questions */}
        <div className="flex items-center bg-[#1f293d] p-1 rounded-2xl border border-gray-700 text-xs font-semibold">
          {[
            { id: 'controls', label: isHi ? 'नियंत्रण' : 'Controls', icon: '🎛️' },
            { id: 'theory', label: isHi ? 'सिद्धांत' : 'Theory', icon: '📖' },
            { id: 'observations', label: isHi ? 'अवलोकन' : 'Observations', icon: '📊' },
            { id: 'questions', label: isHi ? 'प्रश्नोत्तरी' : 'Quiz', icon: '❓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-7">
        {/* TAB 1: CONTROLS & LIVE SIMULATOR */}
        {activeTab === 'controls' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Control Column */}
            <div className="lg:col-span-4 bg-[#111827] rounded-2xl p-5 border border-gray-800 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    <span>{isHi ? 'प्रक्षेपण पैरामीटर' : 'Launch Parameters'}</span>
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono bg-gray-800 px-2 py-0.5 rounded-full">
                    θ = {angle}°
                  </span>
                </div>

                {/* 1. Launch Angle */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-gray-300">{isHi ? 'प्रक्षेपण कोण (Angle):' : 'Launch Angle:'}</label>
                    <span className="text-sky-400 font-bold font-mono">{angle}°</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="85"
                    value={angle}
                    disabled={isFlying}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>10°</span>
                    <span className="text-amber-400 font-bold">45° (Max Range)</span>
                    <span>85°</span>
                  </div>
                </div>

                {/* 2. Initial Velocity */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-gray-300">{isHi ? 'प्रारंभिक वेग (Velocity):' : 'Initial Velocity:'}</label>
                    <span className="text-sky-400 font-bold font-mono">{velocity} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    value={velocity}
                    disabled={isFlying}
                    onChange={(e) => setVelocity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>5 m/s</span>
                    <span>25 m/s</span>
                    <span>45 m/s</span>
                  </div>
                </div>

                {/* 3. Gravity Selector */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-gray-300">{isHi ? 'गुरुत्वाकर्षण (Gravity):' : 'Gravity Environment:'}</label>
                    <span className="text-emerald-400 font-bold font-mono">{gravity} m/s²</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    {[
                      { name: 'Earth 🌍', val: 9.8 },
                      { name: 'Moon 🌕', val: 1.6 },
                      { name: 'Mars 🔴', val: 3.7 }
                    ].map((gPreset) => (
                      <button
                        key={gPreset.name}
                        onClick={() => setGravity(gPreset.val)}
                        disabled={isFlying}
                        className={`py-1.5 px-2 rounded-xl text-[11px] font-semibold transition-all border ${
                          gravity === gPreset.val
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-gray-800/80 border-gray-700 text-gray-400 hover:text-white'
                        }`}
                      >
                        {gPreset.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Target Distance Adjuster */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-gray-300">{isHi ? 'लक्ष्य की दूरी (Target):' : 'Target Distance:'}</label>
                    <span className="text-amber-400 font-bold font-mono">{targetDistance} m</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="65"
                    value={targetDistance}
                    disabled={isFlying}
                    onChange={(e) => setTargetDistance(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                {/* Toggles: Air Resistance & Visuals */}
                <div className="pt-2 border-t border-gray-800 space-y-2.5">
                  <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer">
                    <span>{isHi ? 'हवा का प्रतिरोध (Air Drag)' : 'Air Resistance'}</span>
                    <input
                      type="checkbox"
                      checked={airResistance}
                      onChange={(e) => setAirResistance(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-gray-800 border-gray-700 focus:ring-0"
                    />
                  </label>
                  <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer">
                    <span>{isHi ? 'सैद्धांतिक प्रक्षेप्य पथ दिखाएं' : 'Show Trajectory Path'}</span>
                    <input
                      type="checkbox"
                      checked={showTrajectory}
                      onChange={(e) => setShowTrajectory(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-gray-800 border-gray-700 focus:ring-0"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  onClick={handleLaunch}
                  disabled={isFlying}
                  className={`flex-1 py-3 rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isFlying
                      ? 'bg-sky-600/50 text-sky-200 cursor-not-allowed'
                      : 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  <span>🚀</span>
                  <span>{isHi ? 'प्रक्षेपित करें' : 'Launch'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-semibold border border-gray-700 transition-all"
                >
                  <span>🔄</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Canvas & Live HUD */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-inner bg-slate-950">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={420}
                  className="w-full h-auto block select-none"
                />

                {/* Real-time Telemetry HUD (Top Right overlay like in Mockup) */}
                <div className="absolute top-4 right-4 bg-[#0f172a]/90 backdrop-blur-md border border-gray-700/60 rounded-2xl p-4 shadow-xl text-xs space-y-2 min-w-[170px]">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-800">
                    {isHi ? 'जीवंत डेटा (Telemetry)' : 'Live Telemetry'}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{isHi ? 'समय (Time):' : 'Time:'}</span>
                    <span className="font-mono font-bold text-white text-sm">{simTime} s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{isHi ? 'क्षैतिज दूरी (X):' : 'Distance:'}</span>
                    <span className="font-mono font-bold text-sky-400 text-sm">{currentDist} m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{isHi ? 'ऊँचाई (Y):' : 'Max Height:'}</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">{currentHeight} m</span>
                  </div>
                </div>

                {/* Target Hit Banner */}
                {targetHit && (
                  <div className="absolute top-4 left-4 bg-emerald-500/90 text-white font-extrabold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-sm animate-bounce">
                    <span>🎯</span>
                    <span>{isHi ? 'शानदार निशाना! लक्ष्य भेद दिया गया!' : 'Direct Hit! Target Destroyed!'}</span>
                  </div>
                )}
              </div>

              {/* Bottom Quick Reference Formula Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#111827] border border-gray-800 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-gray-400 block font-medium">{isHi ? 'सैद्धांतिक उड्डयन काल (T)' : 'Time of Flight (T)'}</span>
                  <span className="font-mono text-sm font-bold text-white">{theoreticalTime.toFixed(2)} s</span>
                </div>
                <div className="bg-[#111827] border border-gray-800 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-gray-400 block font-medium">{isHi ? 'अधिकतम ऊँचाई (H)' : 'Max Height (H)'}</span>
                  <span className="font-mono text-sm font-bold text-amber-400">{theoreticalMaxHeight.toFixed(2)} m</span>
                </div>
                <div className="bg-[#111827] border border-gray-800 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-gray-400 block font-medium">{isHi ? 'क्षैतिज परास (Range)' : 'Horizontal Range (R)'}</span>
                  <span className="font-mono text-sm font-bold text-sky-400">{theoreticalRange.toFixed(2)} m</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THEORY & FORMULAS */}
        {activeTab === 'theory' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-extrabold text-white mb-3">
                {isHi ? 'प्रक्षेप्य गति का सिद्धांत (Theory of Projectile Motion)' : 'Theory of Projectile Motion'}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {isHi
                  ? 'जब किसी पिंड को क्षैतिज से किसी कोण θ पर प्रारंभिक वेग u से अंतरिक्ष में फेंका जाता है, तो वह गुरुत्वाकर्षण के प्रभाव में एक वक्राकार (परवलयाकार) पथ पर गति करता है। इसे प्रक्षेप्य गति कहते हैं। क्षैतिज दिशा में त्वरण शून्य होता है, जबकि ऊर्ध्वाधर दिशा में गुरुत्वीय त्वरण g नीचे की ओर कार्य करता है।'
                  : 'A projectile is any object propelled into the air whose motion is influenced solely by gravity. Since horizontal acceleration is zero (neglecting air resistance), horizontal velocity remains constant, while vertical velocity experiences uniform downward acceleration g.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#1a233a] border border-sky-500/30 p-4 rounded-xl">
                  <div className="text-xs font-bold text-sky-400 uppercase mb-1">{isHi ? 'उड्डयन काल (Time of Flight)' : 'Time of Flight'}</div>
                  <div className="font-mono text-base font-extrabold text-white mb-2">T = (2 · u · sin θ) / g</div>
                  <p className="text-[11px] text-gray-400">{isHi ? 'प्रक्षेप्य के हवा में रहने का कुल समय।' : 'Total duration projectile remains airborne.'}</p>
                </div>

                <div className="bg-[#1a233a] border border-amber-500/30 p-4 rounded-xl">
                  <div className="text-xs font-bold text-amber-400 uppercase mb-1">{isHi ? 'अधिकतम ऊँचाई (Max Height)' : 'Maximum Height'}</div>
                  <div className="font-mono text-base font-extrabold text-white mb-2">H = (u² · sin² θ) / (2g)</div>
                  <p className="text-[11px] text-gray-400">{isHi ? 'पथ का उच्चतम ऊर्ध्वाधर बिंदु।' : 'Highest vertical altitude reached.'}</p>
                </div>

                <div className="bg-[#1a233a] border border-emerald-500/30 p-4 rounded-xl">
                  <div className="text-xs font-bold text-emerald-400 uppercase mb-1">{isHi ? 'क्षैतिज परास (Range)' : 'Horizontal Range'}</div>
                  <div className="font-mono text-base font-extrabold text-white mb-2">R = (u² · sin 2θ) / g</div>
                  <p className="text-[11px] text-gray-400">{isHi ? 'θ = 45° पर अधिकतम परास प्राप्त होता है।' : 'Max range achieved at θ = 45°.'}</p>
                </div>
              </div>

              {/* Complementary Angles Highlight */}
              <div className="bg-sky-950/40 border border-sky-800/60 p-4 rounded-xl flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="text-sm font-bold text-sky-300 mb-1">
                    {isHi ? 'पूरक कोणों का रहस्य (Complementary Angles Rule)' : 'Complementary Angles Rule'}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {isHi
                      ? 'यदि प्रारंभिक वेग u समान हो, तो कोण θ तथा (90° - θ) (जैसे 30° और 60°, या 20° और 70°) दोनों पर प्रक्षेप्य का क्षैतिज परास बिल्कुल बराबर होता है! आप नियंत्रण टैब में 30° और 60° पर लॉन्च करके इसका प्रत्यक्ष प्रमाण देख सकते हैं।'
                      : 'For equal initial velocities, complementary launch angles (θ and 90° - θ, such as 30° and 60°) achieve the exact same horizontal range because sin 2θ = sin 2(90° - θ). Test it yourself in the simulator!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: OBSERVATIONS TABLE */}
        {activeTab === 'observations' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">
                {isHi ? 'अवलोकन सारणी (Observation Log)' : 'Observation Log'}
              </h3>
              {trials.length > 0 && (
                <button
                  onClick={() => setTrials([])}
                  className="text-xs text-rose-400 hover:underline"
                >
                  {isHi ? 'लॉग साफ़ करें' : 'Clear Log'}
                </button>
              )}
            </div>

            {trials.length === 0 ? (
              <div className="bg-[#111827] rounded-2xl p-10 text-center border border-gray-800 text-gray-400 text-sm">
                <p className="mb-2">🚀 {isHi ? 'अभी तक कोई प्रक्षेपण दर्ज नहीं किया गया है।' : 'No launches recorded yet.'}</p>
                <p className="text-xs text-gray-500">
                  {isHi ? 'नियंत्रण टैब में जाएं और प्रक्षेप्य लॉन्च करें। सभी परीक्षण यहाँ दर्ज होंगे।' : 'Switch to Controls tab and launch a projectile. Your experimental runs will be logged here.'}
                </p>
              </div>
            ) : (
              <div className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#1f293d] text-gray-300 uppercase text-[10px] tracking-wider font-bold">
                      <tr>
                        <th className="p-3.5">#</th>
                        <th className="p-3.5">{isHi ? 'कोण (Angle)' : 'Angle'}</th>
                        <th className="p-3.5">{isHi ? 'वेग (Velocity)' : 'Velocity'}</th>
                        <th className="p-3.5">{isHi ? 'समय (Time)' : 'Flight Time'}</th>
                        <th className="p-3.5">{isHi ? 'अधिकतम ऊँचाई' : 'Max Height'}</th>
                        <th className="p-3.5">{isHi ? 'परास (Range)' : 'Range'}</th>
                        <th className="p-3.5">{isHi ? 'लक्ष्य स्थिति' : 'Result'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 font-mono text-gray-300">
                      {trials.map((t, idx) => (
                        <tr key={t.id} className="hover:bg-gray-800/40 transition-colors">
                          <td className="p-3.5 text-gray-500">{trials.length - idx}</td>
                          <td className="p-3.5 text-sky-400 font-bold">{t.angle}°</td>
                          <td className="p-3.5">{t.velocity} m/s</td>
                          <td className="p-3.5">{t.time} s</td>
                          <td className="p-3.5 text-amber-400">{t.maxHeight} m</td>
                          <td className="p-3.5 font-bold text-white">{t.range} m</td>
                          <td className="p-3.5">
                            {t.hit ? (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                                🎯 HIT
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 text-[11px]">
                                {t.range < t.targetDist ? 'Short' : 'Overshot'}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: QUICK QUIZ */}
        {activeTab === 'questions' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {quizItems.map((q, qIdx) => {
              const selectedOpt = selectedQuizAnswers[q.id];
              const isAnswered = Boolean(selectedOpt);
              const isCorrect = selectedOpt === q.correct;

              return (
                <div key={q.id} className="bg-[#111827] rounded-2xl p-6 border border-gray-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-sky-400">
                    <span>{isHi ? `प्रश्न ${qIdx + 1} / ${quizItems.length}` : `Question ${qIdx + 1} of ${quizItems.length}`}</span>
                    {isAnswered && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                        {isCorrect ? (isHi ? '✓ सही उत्तर!' : '✓ Correct!') : (isHi ? '✗ गलत उत्तर' : '✗ Incorrect')}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white leading-relaxed">
                    {isHi ? q.questionHi : q.question}
                  </h4>

                  <div className="space-y-2.5">
                    {q.options.map((opt) => {
                      const isOptionSelected = selectedOpt === opt.id;
                      let btnStyle = 'bg-gray-800/80 border-gray-700 text-gray-300 hover:border-sky-500 hover:bg-gray-800';

                      if (isAnswered) {
                        if (opt.id === q.correct) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isOptionSelected) {
                          btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                        } else {
                          btnStyle = 'bg-gray-800/40 border-gray-800 text-gray-500';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedQuizAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
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

                  {/* Feedback Explanation Card */}
                  {isAnswered && (
                    <div className="p-4 rounded-xl bg-[#1e293b] border border-gray-700 text-xs text-gray-300 leading-relaxed animate-in fade-in duration-200">
                      <strong className="text-sky-300 block mb-1">{isHi ? 'व्याख्या (Explanation):' : 'Explanation:'}</strong>
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

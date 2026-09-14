// Simulation Registry & Curriculum Experiments for GSSS 52 LNP (MANJHUWAS)
export const simulationSubjects = [
  { id: 'all', name: 'All Subjects', nameHi: 'सभी विषय', icon: '🌌' },
  { id: 'physics', name: 'Physics', nameHi: 'भौतिक विज्ञान', icon: '⚛️', color: '#7F58FA', bg: '#F3EFFF' },
  { id: 'biology', name: 'Biology', nameHi: 'जीव विज्ञान', icon: '🧬', color: '#10B981', bg: '#ECFDF5' },
  { id: 'chemistry', name: 'Chemistry', nameHi: 'रसायन विज्ञान', icon: '🧪', color: '#3B82F6', bg: '#EFF6FF' },
  { id: 'mathematics', name: 'Mathematics', nameHi: 'गणित', icon: '📐', color: '#EC4899', bg: '#FDF2F8' },
];

export const simulationsList = [
  {
    id: 'projectile-motion',
    title: 'Projectile Motion Simulator',
    titleHi: 'प्रक्षेप्य गति सिमुलेटर',
    subject: 'Physics',
    subjectHi: 'भौतिक विज्ञान',
    subjectId: 'physics',
    topic: 'Kinematics & 2D Motion',
    topicHi: 'द्विविमीय गति एवं प्रक्षेप्य पथ',
    schoolClass: 'Class 9–11',
    schoolClassHi: 'कक्षा 9–11',
    difficulty: 'Intermediate',
    difficultyHi: 'मध्यम',
    durationMins: 15,
    icon: '🚀',
    accentColor: '#38BDF8',
    gradient: 'from-sky-500 to-indigo-600',
    description: 'Launch a projectile at variable angles, velocities, and gravities. Observe real-time parabolic trajectories and hit targets.',
    descriptionHi: 'विभिन्न कोणों, प्रारंभिक वेगों और गुरुत्वाकर्षण में प्रक्षेप्य को लॉन्च करें। परवलयाकार प्रक्षेप्य पथ और लक्ष्य भेदन का जीवंत अवलोकन करें।',
    tags: ['Motion in a Plane', 'Parabolic Trajectory', 'Gravity', 'Kinematics'],
    theory: {
      intro: 'A projectile is any object thrown into space upon which the only acting force is gravity. Its path is a parabola with independent horizontal (constant velocity) and vertical (uniform gravitational acceleration) components.',
      introHi: 'प्रक्षेप्य वह पिंड है जिसे अंतरिक्ष में किसी कोण पर फेंका जाता है और उस पर केवल गुरुत्वाकर्षण बल कार्य करता है। इसका पथ परवलयाकार (Parabola) होता है जिसमें क्षैतिज गति नियत वेग से तथा ऊर्ध्वाधर गति गुरुत्वीय त्वरण के अधीन होती है।',
      formulas: [
        { label: 'Time of Flight (उड्डयन काल)', formula: 'T = (2 · u · sin θ) / g', desc: 'Total time projectile stays in the air' },
        { label: 'Maximum Height (अधिकतम ऊँचाई)', formula: 'H = (u² · sin² θ) / (2 · g)', desc: 'Peak vertical distance achieved' },
        { label: 'Horizontal Range (क्षैतिज परास)', formula: 'R = (u² · sin 2θ) / g', desc: 'Maximum distance traveled along the ground (Max at 45°)' }
      ],
      keyPoints: [
        'Complementary angles (e.g. 30° and 60°) achieve the exact same horizontal range for equal initial velocities.',
        'The maximum range is achieved at an angle of 45°.',
        'The horizontal velocity component remains constant (ux = u cos θ) when ignoring air resistance.'
      ],
      keyPointsHi: [
        'समान प्रारंभिक वेग के लिए पूरक कोणों (जैसे 30° और 60°) पर क्षैतिज परास बिल्कुल एक समान होता है।',
        'अधिकतम क्षैतिज परास 45° के कोण पर प्राप्त होता है।',
        'हवा के नगण्य प्रतिरोध की स्थिति में क्षैतिज वेग घटक (ux = u cos θ) सदैव नियत रहता है।'
      ]
    },
    quizzes: [
      {
        id: 'pm-q1',
        question: 'At what launch angle is the maximum horizontal range achieved for a given initial velocity?',
        questionHi: 'दिए गए प्रारंभिक वेग के लिए अधिकतम क्षैतिज परास (Maximum Range) किस प्रक्षेपण कोण पर प्राप्त होता है?',
        options: [
          { id: 'A', text: '30°', textHi: '30°' },
          { id: 'B', text: '45°', textHi: '45°' },
          { id: 'C', text: '60°', textHi: '60°' },
          { id: 'D', text: '90°', textHi: '90°' }
        ],
        correctAnswer: 'B',
        explanation: 'The formula for range is R = (u² sin 2θ)/g. Since sin 2θ reaches its maximum value of 1 when 2θ = 90°, the angle θ = 45° gives maximum range.',
        explanationHi: 'परास का सूत्र R = (u² sin 2θ)/g है। sin 2θ का अधिकतम मान 1 तब होता है जब 2θ = 90° हो, अतः θ = 45° पर अधिकतम परास प्राप्त होता है।'
      },
      {
        id: 'pm-q2',
        question: 'If a projectile is launched at 30° and reaches a range of 40 m, what will be its range when launched at 60° with the same speed?',
        questionHi: 'यदि किसी प्रक्षेप्य को 30° पर फेंकने पर परास 40 मीटर है, तो उसी वेग से 60° पर फेंकने पर उसका परास क्या होगा?',
        options: [
          { id: 'A', text: '20 m', textHi: '20 मीटर' },
          { id: 'B', text: '40 m', textHi: '40 मीटर' },
          { id: 'C', text: '80 m', textHi: '80 मीटर' },
          { id: 'D', text: '60 m', textHi: '60 मीटर' }
        ],
        correctAnswer: 'B',
        explanation: 'Angles θ and (90° - θ) are complementary angles. Since sin 2(30°) = sin 60° = sin 120° = sin 2(60°), both produce the exact same horizontal range (40 m).',
        explanationHi: '30° और 60° पूरक कोण (Complementary angles) हैं जिनका योग 90° होता है। sin 2(30°) = sin 2(60°) = √3/2, अतः दोनों कोणों पर क्षैतिज परास 40 मीटर ही रहेगा।'
      },
      {
        id: 'pm-q3',
        question: 'What happens to the acceleration of a projectile at the highest point of its flight?',
        questionHi: 'प्रक्षेप्य के उच्चतम बिंदु पर उसका त्वरण कितना होता है?',
        options: [
          { id: 'A', text: 'Zero', textHi: 'शून्य' },
          { id: 'B', text: 'Equal to g downward', textHi: 'नीचे की ओर g के बराबर' },
          { id: 'C', text: 'Equal to g upward', textHi: 'ऊपर की ओर g के बराबर' },
          { id: 'D', text: 'Horizontal', textHi: 'क्षैतिज दिशा में' }
        ],
        correctAnswer: 'B',
        explanation: 'Gravity constantly pulls downward at 9.8 m/s² throughout the entire trajectory, including at the peak where vertical velocity is momentarily zero.',
        explanationHi: 'संपूर्ण प्रक्षेप्य पथ के दौरान, उच्चतम बिंदु सहित, केवल गुरुत्वीय त्वरण (g = 9.8 m/s²) नीचे की ओर कार्य करता रहता है।'
      }
    ]
  },
  {
    id: 'human-heart',
    title: 'Human Heart 3D Anatomy & Circulation',
    titleHi: 'मानव हृदय रचना एवं रक्त परिसंचरण',
    subject: 'Biology',
    subjectHi: 'जीव विज्ञान',
    subjectId: 'biology',
    topic: 'Circulatory System & Life Processes',
    topicHi: 'परिसंचरण तंत्र एवं जैव प्रक्रम',
    schoolClass: 'Class 8–10',
    schoolClassHi: 'कक्षा 8–10',
    difficulty: 'Beginner to Intermediate',
    difficultyHi: 'सरल से मध्यम',
    durationMins: 15,
    icon: '🫀',
    accentColor: '#EF4444',
    gradient: 'from-rose-500 to-red-700',
    description: 'Explore the 4 chambers, valves, and double circulation of the human heart with interactive pulse animation and blood flow tracing.',
    descriptionHi: 'मानव हृदय के चारों कक्षों, कपाटों एवं दोहरे परिसंचरण तंत्र का धड़कन गति (BPM) व रक्त प्रवाह एनिमेशन के साथ अन्वेषण करें।',
    tags: ['Life Processes', 'Circulation', 'Heart Chambers', 'Double Circulation'],
    theory: {
      intro: 'The human heart is a muscular organ about the size of a fist that pumps blood through the network of arteries and veins. Humans possess double circulation: pulmonary circulation (to the lungs for oxygenation) and systemic circulation (to the rest of the body).',
      introHi: 'मानव हृदय एक पेशीय अंग है जो बंद मुट्ठी के आकार का होता है। यह धमनी और शिराओं के जाल द्वारा पूरे शरीर में रक्त पंप करता है। मानव में दोहरा परिसंचरण (Double Circulation) पाया जाता है: फुफ्फुसीय परिसंचरण (फेफड़ों में ऑक्सीजन हेतु) और दैहिक परिसंचरण (संपूर्ण शरीर में)।',
      chambers: [
        { name: 'Left Ventricle (बायाँ निलय)', desc: 'Thickest muscular chamber. Pumps oxygen-rich blood under high pressure into the Aorta.', facts: 'Wall thickness: 10–15 mm' },
        { name: 'Right Ventricle (दायाँ निलय)', desc: 'Pumps deoxygenated blood to the lungs via the pulmonary artery.', facts: 'Wall thickness: 4–5 mm' },
        { name: 'Left Atrium (बायाँ अलिंद)', desc: 'Receives oxygenated blood returning from the lungs via pulmonary veins.', facts: 'Thin-walled receiving chamber' },
        { name: 'Right Atrium (दायाँ अलिंद)', desc: 'Receives deoxygenated blood from the body tissues via Vena Cava.', facts: 'Houses Sinoatrial (SA) node' }
      ],
      keyPoints: [
        'Oxygenated blood is bright red (shown in red); deoxygenated blood is darker (shown in blue).',
        'Valves (Mitral & Tricuspid) ensure blood flows in only one direction and prevent backflow.',
        'Average resting heart rate in humans is 72 beats per minute (BPM).'
      ],
      keyPointsHi: [
        'ऑक्सीजन युक्त शुद्ध रक्त लाल रंग तथा ऑक्सीजन विहीन अशुद्ध रक्त नीले रंग द्वारा प्रदर्शित होता है।',
        'कपाट (वाल्व) रक्त को विपरीत दिशा में बहने से रोकते हैं और एकदिशीय प्रवाह सुनिश्चित करते हैं।',
        'सामान्य वयस्क मानव का हृदय औसतन 72 बार प्रति मिनट धड़कता है।'
      ]
    },
    quizzes: [
      {
        id: 'hh-q1',
        question: 'Which chamber of the human heart has the thickest muscular wall and why?',
        questionHi: 'मानव हृदय के किस कक्ष की पेशीय भित्ति सबसे मोटी होती है और क्यों?',
        options: [
          { id: 'A', text: 'Right Atrium, to collect blood', textHi: 'दायाँ अलिंद, रक्त एकत्रित करने के लिए' },
          { id: 'B', text: 'Right Ventricle, to pump blood to lungs', textHi: 'दायाँ निलय, फेफड़ों को रक्त भेजने के लिए' },
          { id: 'C', text: 'Left Ventricle, to pump blood to entire body', textHi: 'बायाँ निलय, पूरे शरीर में उच्च दाब से रक्त पंप करने के लिए' },
          { id: 'D', text: 'Left Atrium, to receive from pulmonary veins', textHi: 'बायाँ अलिंद, फुफ्फुस शिरा से रक्त लेने के लिए' }
        ],
        correctAnswer: 'C',
        explanation: 'The left ventricle pumps oxygen-rich blood into the aorta across high systemic resistance to all organs, requiring the thickest myocardium (10-15 mm).',
        explanationHi: 'बायाँ निलय पूरे शरीर के सभी अंगों तक महाधमनी द्वारा उच्च दाब पर रक्त पंप करता है, इसलिए इसकी दीवारें सबसे मोटी व मजबूत होती हैं।'
      },
      {
        id: 'hh-q2',
        question: 'Which blood vessel carries oxygen-rich blood from the lungs back to the heart?',
        questionHi: 'फेफड़ों से ऑक्सीजन युक्त शुद्ध रक्त को हृदय तक कौन सी रक्त वाहिनी लाती है?',
        options: [
          { id: 'A', text: 'Pulmonary Artery', textHi: 'फुफ्फुस धमनी' },
          { id: 'B', text: 'Pulmonary Vein', textHi: 'फुफ्फुस शिरा' },
          { id: 'C', text: 'Vena Cava', textHi: 'महाशिरा' },
          { id: 'D', text: 'Aorta', textHi: 'महाधमनी' }
        ],
        correctAnswer: 'B',
        explanation: 'Pulmonary veins are an exception: although veins typically carry deoxygenated blood, pulmonary veins carry oxygenated blood from lungs to left atrium.',
        explanationHi: 'फुफ्फुस शिरा (Pulmonary Vein) अपवाद है जो फेफड़ों से शुद्ध ऑक्सीजनित रक्त को हृदय के बाएँ अलिंद में लेकर आती है।'
      }
    ]
  },
  {
    id: 'ohms-law',
    title: "Electric Circuit & Ohm's Law",
    titleHi: 'विद्युत परिपथ एवं ओम का नियम',
    subject: 'Physics',
    subjectHi: 'भौतिक विज्ञान',
    subjectId: 'physics',
    topic: 'Electricity & Circuits',
    topicHi: 'विद्युत धारा एवं परिपथ',
    schoolClass: 'Class 10–12',
    schoolClassHi: 'कक्षा 10–12',
    difficulty: 'Intermediate',
    difficultyHi: 'मध्यम',
    durationMins: 15,
    icon: '⚡',
    accentColor: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    description: 'Build a DC circuit with battery, rheostat, ammeter, and light bulb. Change voltage and resistance to observe live electron flow and V-I graph.',
    descriptionHi: 'बैटरी, परिवर्ती प्रतिरोधक, एमीटर व बल्ब के साथ परिपथ बनाएं। वोल्टेज व प्रतिरोध बदलकर इलेक्ट्रॉनों के प्रवाह व V-I ग्राफ का जीवंत विश्लेषण करें।',
    tags: ['Ohm’s Law', 'Current', 'Voltage', 'Resistance', 'Class 10'],
    theory: {
      intro: "Ohm's law states that the electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its terminals, provided physical conditions like temperature remain constant: V = I · R.",
      introHi: 'ओम के नियम के अनुसार, यदि किसी चालक की भौतिक अवस्थाएँ (जैसे तापमान) स्थिर रहें, तो उसके सिरों पर लगाया गया विभवांतर (V) उसमें प्रवाहित विद्युत धारा (I) के समानुपाती होता है: V = I · R।',
      formulas: [
        { label: "Ohm's Law (ओम का नियम)", formula: 'V = I · R', desc: 'Voltage equals Current times Resistance' },
        { label: 'Current (विद्युत धारा)', formula: 'I = V / R', desc: 'Measured in Amperes (A)' },
        { label: 'Electric Power (विद्युत शक्ति)', formula: 'P = V · I = I² · R', desc: 'Rate of energy consumption in Watts (W)' }
      ],
      keyPoints: [
        'Doubling the voltage doubles the current if resistance stays constant.',
        'Doubling the resistance cuts the current in half for a constant voltage.',
        'The slope of a V versus I graph gives the electrical resistance (R = ΔV / ΔI).'
      ],
      keyPointsHi: [
        'यदि प्रतिरोध स्थिर रहे, तो वोल्टेज दोगुना करने पर विद्युत धारा भी दोगुनी हो जाती है।',
        'यदि वोल्टेज स्थिर रहे, तो प्रतिरोध दोगुना करने पर धारा घटकर आधी रह जाती है।',
        'V-I ग्राफ की ढाल (Slope) चालक के प्रतिरोध को दर्शाती है।'
      ]
    },
    quizzes: [
      {
        id: 'ol-q1',
        question: 'If the potential difference across a 10 Ω resistor is 20 V, what is the current passing through it?',
        questionHi: 'यदि 10 Ω के प्रतिरोधक के दोनों सिरों पर 20 V का विभवांतर है, तो उसमें से कितनी धारा प्रवाहित होगी?',
        options: [
          { id: 'A', text: '0.5 A', textHi: '0.5 A' },
          { id: 'B', text: '2 A', textHi: '2 A' },
          { id: 'C', text: '200 A', textHi: '200 A' },
          { id: 'D', text: '10 A', textHi: '10 A' }
        ],
        correctAnswer: 'B',
        explanation: 'Using Ohm’s law: I = V / R = 20 V / 10 Ω = 2 A.',
        explanationHi: 'ओम के नियम से: I = V / R = 20 V / 10 Ω = 2 A धारा प्रवाहित होगी।'
      },
      {
        id: 'ol-q2',
        question: 'What happens to the brightness of a filament bulb if you double the resistance while keeping voltage fixed?',
        questionHi: 'यदि वोल्टेज स्थिर रखते हुए परिपथ का प्रतिरोध दोगुना कर दिया जाए, तो बल्ब की चमक पर क्या प्रभाव पड़ेगा?',
        options: [
          { id: 'A', text: 'Brightness increases 4 times', textHi: 'चमक 4 गुना बढ़ जाएगी' },
          { id: 'B', text: 'Brightness remains unchanged', textHi: 'चमक में कोई परिवर्तन नहीं होगा' },
          { id: 'C', text: 'Brightness decreases', textHi: 'चमक कम (धीमी) हो जाएगी' },
          { id: 'D', text: 'Bulb burns out immediately', textHi: 'बल्ब तुरंत फ्यूज हो जाएगा' }
        ],
        correctAnswer: 'C',
        explanation: 'Power dissipated P = V² / R. Increasing resistance R decreases electrical power, causing the bulb to glow dimmer.',
        explanationHi: 'शक्ति P = V² / R होती है। प्रतिरोध बढ़ने से विद्युत धारा और कुल शक्ति कम हो जाती है, जिससे बल्ब धीमा जलेगा।'
      }
    ]
  },
  {
    id: 'ph-scale',
    title: 'Acid-Base Neutralization & pH Scale',
    titleHi: 'अम्ल-क्षार उदासीनीकरण एवं pH पैमाना',
    subject: 'Chemistry',
    subjectHi: 'रसायन विज्ञान',
    subjectId: 'chemistry',
    topic: 'Acids, Bases and Salts',
    topicHi: 'अम्ल, क्षारक एवं लवण',
    schoolClass: 'Class 7–10',
    schoolClassHi: 'कक्षा 7–10',
    difficulty: 'Beginner',
    difficultyHi: 'सरल',
    durationMins: 12,
    icon: '🧪',
    accentColor: '#10B981',
    gradient: 'from-emerald-500 to-teal-700',
    description: 'Add acid (HCl) or base (NaOH) to a virtual beaker. Watch real-time pH color shifts on universal indicator and molecular ion balance.',
    descriptionHi: 'वर्चुअल बीकर में अम्ल (HCl) अथवा क्षार (NaOH) की बूंदें डालें। सार्वत्रिक सूचक के रंग परिवर्तन व pH पैमाने (0–14) का अवलोकन करें।',
    tags: ['pH Scale', 'Acids and Bases', 'Neutralization', 'Class 10 Chemistry'],
    theory: {
      intro: 'The pH scale measures the hydrogen ion [H+] concentration in a solution. It ranges from 0 (strongly acidic) to 14 (strongly alkaline). Neutral pure water at 25°C has a pH of 7.0.',
      introHi: 'pH पैमाना किसी विलयन में उपस्थित हाइड्रोजन आयन [H+] की सांद्रता मापता है। यह 0 (प्रबल अम्लीय) से 14 (प्रबल क्षारीय) तक होता है। शुद्ध जल का pH 7.0 (उदासीन) होता है।',
      formulas: [
        { label: 'pH Definition (pH परिभाषा)', formula: 'pH = -log₁₀ [H⁺]', desc: 'Negative logarithm of hydrogen ion activity' },
        { label: 'Neutralization (उदासीनीकरण)', formula: 'HCl + NaOH → NaCl + H₂O', desc: 'Acid + Base produces Salt + Water' }
      ],
      keyPoints: [
        'pH < 7: Acidic (Red, Orange, Yellow)',
        'pH = 7: Neutral (Green, pure water)',
        'pH > 7: Basic / Alkaline (Blue, Indigo, Violet)'
      ],
      keyPointsHi: [
        'pH < 7 : अम्लीय विलयन (लाल, नारंगी, पीला)',
        'pH = 7 : उदासीन विलयन (हरा, शुद्ध जल)',
        'pH > 7 : क्षारीय विलयन (नीला, जामुनी, बैंगनी)'
      ]
    },
    quizzes: [
      {
        id: 'ph-q1',
        question: 'What is the pH of a neutral aqueous solution at 25°C?',
        questionHi: '25°C पर किसी उदासीन जलीय विलयन का pH मान क्या होता है?',
        options: [
          { id: 'A', text: '0', textHi: '0' },
          { id: 'B', text: '7', textHi: '7' },
          { id: 'C', text: '14', textHi: '14' },
          { id: 'D', text: '1', textHi: '1' }
        ],
        correctAnswer: 'B',
        explanation: 'At 25°C, pure water has [H+] = [OH-] = 10⁻⁷ M, giving pH = -log(10⁻⁷) = 7.',
        explanationHi: 'उदासीन विलयन में हाइड्रोजन आयनों और हाइड्रॉक्साइड आयनों की सांद्रता बराबर (10⁻⁷ mol/L) होती है, अतः pH = 7 होता है।'
      },
      {
        id: 'ph-q2',
        question: 'When hydrochloric acid (HCl) reacts completely with sodium hydroxide (NaOH), the resulting solution contains:',
        questionHi: 'जब हाइड्रोक्लोरिक अम्ल (HCl) और सोडियम हाइड्रॉक्साइड (NaOH) की पूर्ण अभिक्रिया होती है, तो क्या बनता है?',
        options: [
          { id: 'A', text: 'NaCl and H2O (Neutral salt water)', textHi: 'NaCl एवं H2O (उदासीन लवण जल)' },
          { id: 'B', text: 'Chlorine gas and Sodium metal', textHi: 'क्लोरीन गैस और सोडियम धातु' },
          { id: 'C', text: 'Strong acid with pH 2', textHi: 'प्रबल अम्ल जिसका pH 2 हो' },
          { id: 'D', text: 'Hydrogen gas', textHi: 'हाइड्रोजन गैस' }
        ],
        correctAnswer: 'A',
        explanation: 'This is a classical neutralization reaction: HCl + NaOH → NaCl (table salt) + H2O (water).',
        explanationHi: 'यह एक आदर्श उदासीनीकरण अभिक्रिया है: HCl + NaOH → NaCl (साधारण नमक) + H2O (जल)।'
      }
    ]
  }
];

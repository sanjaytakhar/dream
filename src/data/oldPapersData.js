// Official RBSE (Board of Secondary Education Rajasthan) Old Papers & Books Data
export const OFFICIAL_RBSE_URL = 'https://rajeduboard.rajasthan.gov.in/books/index.htm';

export const oldPapersCategories = [
  { id: 'all', labelEn: 'All Papers & Books', labelHi: 'सभी प्रश्न पत्र व बुक्स' },
  { id: 'c12', labelEn: 'Class 12 (Sr. Sec.)', labelHi: 'कक्षा 12 (उच्च माध्यमिक)' },
  { id: 'c10', labelEn: 'Class 10 (Sec.)', labelHi: 'कक्षा 10 (माध्यमिक)' },
  { id: 'model', labelEn: 'Model Papers & Blueprint', labelHi: 'मॉडल पेपर व ब्लूप्रिंट' },
  { id: 'books', labelEn: 'RBSE & NCERT Textbooks', labelHi: 'पाठ्यपुस्तकें (E-Books)' },
];

export const featuredOldPapers = [
  {
    id: 'c12-cs-2025',
    testId: 'c12-cs-board-2025',
    titleEn: 'RBSE Class 12 - Computer Science (Board Exam 2025 Paper)',
    titleHi: 'आरबीएसई कक्षा 12 - कंप्यूटर साइंस (बोर्ड परीक्षा 2025 मूल प्रश्न पत्र)',
    year: '2025',
    schoolClass: 'Class 12',
    subjectEn: 'Computer Science',
    subjectHi: 'कंप्यूटर साइंस (Python & SQL)',
    type: 'Official Board Paper',
    typeHi: 'मूल बोर्ड परीक्षा पेपर',
    totalMarks: 20,
    questions: 20,
    duration: '45 mins',
    hasCbt: true,
    officialLink: OFFICIAL_RBSE_URL,
    badge: 'Latest 2025',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    id: 'c12-cs-2023',
    testId: 'c12-cs-board-2023',
    titleEn: 'RBSE Class 12 - Computer Science (Board Exam 2023 Paper)',
    titleHi: 'आरबीएसई कक्षा 12 - कंप्यूटर साइंस (बोर्ड परीक्षा 2023 मूल प्रश्न पत्र)',
    year: '2023',
    schoolClass: 'Class 12',
    subjectEn: 'Computer Science',
    subjectHi: 'कंप्यूटर साइंस',
    type: 'Official Board Paper',
    typeHi: 'मूल बोर्ड परीक्षा पेपर',
    totalMarks: 20,
    questions: 20,
    duration: '45 mins',
    hasCbt: true,
    officialLink: OFFICIAL_RBSE_URL,
    badge: 'Previous Year',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    id: 'c12-cs-2022',
    testId: 'c12-cs-board-2022',
    titleEn: 'RBSE Class 12 - Computer Science (Board Exam 2022 Paper)',
    titleHi: 'आरबीएसई कक्षा 12 - कंप्यूटर साइंस (बोर्ड परीक्षा 2022 मूल प्रश्न पत्र)',
    year: '2022',
    schoolClass: 'Class 12',
    subjectEn: 'Computer Science',
    subjectHi: 'कंप्यूटर साइंस',
    type: 'Official Board Paper',
    typeHi: 'मूल बोर्ड परीक्षा पेपर',
    totalMarks: 20,
    questions: 20,
    duration: '45 mins',
    hasCbt: true,
    officialLink: OFFICIAL_RBSE_URL,
    badge: 'Previous Year',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'c12-cs-grand',
    testId: 'c12-cs-grand-master',
    titleEn: 'RBSE Class 12 CS - Board Papers Master Mock (2022–2025 Combined)',
    titleHi: 'आरबीएसई कक्षा 12 - बोर्ड परीक्षा विगत वर्ष महा-मॉक टेस्ट (2022–2025)',
    year: '2022-2025',
    schoolClass: 'Class 12',
    subjectEn: 'Computer Science',
    subjectHi: 'कंप्यूटर साइंस',
    type: 'Grand Master Mock',
    typeHi: 'संयुक्त महा-मॉक टेस्ट',
    totalMarks: 30,
    questions: 30,
    duration: '60 mins',
    hasCbt: true,
    officialLink: OFFICIAL_RBSE_URL,
    badge: 'Most Popular',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  }
];

export const rbseOfficialSubjects = [
  {
    schoolClass: 'Class 10 (Secondary)',
    schoolClassHi: 'कक्षा 10 (माध्यमिक परीक्षा)',
    stream: 'General',
    descriptionHi: 'गणित, विज्ञान, सामाजिक विज्ञान, हिंदी, अंग्रेज़ी एवं संस्कृत',
    descriptionEn: 'Mathematics, Science, Social Science, Hindi, English & Sanskrit',
    availableYears: ['2024', '2023', '2022', '2021', '2020', '2019'],
    subjects: [
      { nameEn: 'Mathematics', nameHi: 'गणित', icon: '📐' },
      { nameEn: 'Science', nameHi: 'विज्ञान', icon: '🔬' },
      { nameEn: 'Social Science', nameHi: 'सामाजिक विज्ञान', icon: '🌍' },
      { nameEn: 'Hindi', nameHi: 'हिंदी (अनिवार्य)', icon: '📖' },
      { nameEn: 'English', nameHi: 'अंग्रेज़ी (Compulsory)', icon: '🔤' },
      { nameEn: 'Sanskrit', nameHi: 'संस्कृत (तृतीया भाषा)', icon: '📜' }
    ]
  },
  {
    schoolClass: 'Class 12 Science Stream',
    schoolClassHi: 'कक्षा 12 (विज्ञान संकाय)',
    stream: 'Science',
    descriptionHi: 'भौतिक विज्ञान, रसायन विज्ञान, जीव विज्ञान, गणित एवं कंप्यूटर विज्ञान',
    descriptionEn: 'Physics, Chemistry, Biology, Mathematics & Computer Science',
    availableYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
    subjects: [
      { nameEn: 'Physics', nameHi: 'भौतिक विज्ञान', icon: '⚛️' },
      { nameEn: 'Chemistry', nameHi: 'रसायन विज्ञान', icon: '🧪' },
      { nameEn: 'Biology', nameHi: 'जीव विज्ञान', icon: '🧬' },
      { nameEn: 'Mathematics', nameHi: 'गणित', icon: '📐' },
      { nameEn: 'Computer Science', nameHi: 'कंप्यूटर विज्ञान', icon: '💻' },
      { nameEn: 'Hindi / English', nameHi: 'हिंदी / अंग्रेज़ी अनिवार्य', icon: '📝' }
    ]
  },
  {
    schoolClass: 'Class 12 Arts & Commerce Stream',
    schoolClassHi: 'कक्षा 12 (कला एवं वाणिज्य संकाय)',
    stream: 'Arts / Commerce',
    descriptionHi: 'इतिहास, भूगोल, राजनीति विज्ञान, अर्थशास्त्र, लेखाशास्त्र एवं व्यवसाय अध्ययन',
    descriptionEn: 'History, Geography, Political Science, Economics, Accountancy & Business Studies',
    availableYears: ['2024', '2023', '2022', '2021', '2020'],
    subjects: [
      { nameEn: 'History', nameHi: 'इतिहास', icon: '🏛️' },
      { nameEn: 'Geography', nameHi: 'भूगोल', icon: '🗺️' },
      { nameEn: 'Political Science', nameHi: 'राजनीति विज्ञान', icon: '⚖️' },
      { nameEn: 'Economics', nameHi: 'अर्थशास्त्र', icon: '📈' },
      { nameEn: 'Accountancy', nameHi: 'लेखाशास्त्र', icon: '📊' },
      { nameEn: 'Business Studies', nameHi: 'व्यवसाय अध्ययन', icon: '💼' }
    ]
  },
  {
    schoolClass: 'Class 8 Board (Elementary)',
    schoolClassHi: 'कक्षा 8 (प्रारंभिक शिक्षा पूर्णता परीक्षा)',
    stream: 'Elementary',
    descriptionHi: 'विज्ञान, गणित, सामाजिक विज्ञान एवं भाषाएं',
    descriptionEn: 'Science, Mathematics, Social Science & Languages',
    availableYears: ['2024', '2023', '2022', '2020'],
    subjects: [
      { nameEn: 'Science', nameHi: 'विज्ञान', icon: '🔬' },
      { nameEn: 'Mathematics', nameHi: 'गणित', icon: '📐' },
      { nameEn: 'Social Science', nameHi: 'सामाजिक विज्ञान', icon: '🌍' },
      { nameEn: 'Languages', nameHi: 'हिंदी / अंग्रेज़ी', icon: '📚' }
    ]
  }
];

export const rbsePortalGuide = [
  {
    step: '1',
    titleHi: 'आधिकारिक लिंक पर क्लिक करें',
    titleEn: 'Click the Official RBSE Link',
    descHi: 'पोर्टल पर दिए गए बटन से rajeduboard.rajasthan.gov.in/books/index.htm खोलें।',
    descEn: 'Open rajeduboard.rajasthan.gov.in/books/index.htm using the direct portal button.'
  },
  {
    step: '2',
    titleHi: 'बाएं मेन्यू (Left Menu) से विकल्प चुनें',
    titleEn: 'Select from Left Navigation',
    descHi: '"Old Papers", "Model Papers" या "Books" विकल्प पर क्लिक करें।',
    descEn: 'Click on "Old Papers", "Model Papers" or "Books" in the left panel.'
  },
  {
    step: '3',
    titleHi: 'परीक्षा वर्ष व कक्षा का चयन करें',
    titleEn: 'Choose Exam Year & Class',
    descHi: 'अपनी कक्षा (10वीं या 12वीं) और परीक्षा वर्ष (2019 से 2025) का चयन करें।',
    descEn: 'Select your class (10th or 12th) and examination year (2019 to 2025).'
  },
  {
    step: '4',
    titleHi: 'पीडीएफ डाउनलोड करें या ऑनलाइन टेस्ट दें',
    titleEn: 'Download PDF or Practice CBT',
    descHi: 'मूल प्रश्न पत्र पीडीएफ डाउनलोड करें अथवा हमारे पोर्टल पर ऑनलाइन टेस्ट दें।',
    descEn: 'Download official PDF paper or solve with timer on our school CBT engine.'
  }
];

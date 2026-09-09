export const class11CsQuestions = [
  // --- अध्याय 5: Getting Started with Python ---
  {
    id: 1,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Python Basics",
    question: "Python एक _____ भाषा है। (Python is a _____ language.)",
    questionHi: "Python एक _____ भाषा है।",
    options: [
      { id: "A", text: "High-level", textHi: "High-level (उच्च स्तरीय)" },
      { id: "B", text: "Low-level", textHi: "Low-level (निम्न स्तरीय)" },
      { id: "C", text: "Assembly", textHi: "Assembly" },
      { id: "D", text: "Machine", textHi: "Machine" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "Python is an interpreted, high-level, general-purpose programming language. (पायथन एक उच्च स्तरीय प्रोग्रामिंग भाषा है।)",
    timeEstimate: "30s"
  },
  {
    id: 2,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Comments",
    question: "Python में comments किस चिन्ह से शुरू होते हैं? (Comments in Python start with which symbol?)",
    questionHi: "Python में comments किस चिन्ह से शुरू होते हैं?",
    options: [
      { id: "A", text: "//", textHi: "//" },
      { id: "B", text: "/*", textHi: "/*" },
      { id: "C", text: "#", textHi: "#" },
      { id: "D", text: "--", textHi: "--" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Single line comments in Python start with the '#' character. (पायथन में टिप्पणियाँ '#' चिन्ह से शुरू होती हैं।)",
    timeEstimate: "20s"
  },
  {
    id: 3,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Keywords",
    question: "इनमें से कौन सा Python का कीवर्ड (keyword) नहीं है? (Which of the following is NOT a Python keyword?)",
    questionHi: "इनमें से कौन सा Python का कीवर्ड (keyword) नहीं है?",
    options: [
      { id: "A", text: "for", textHi: "for" },
      { id: "B", text: "while", textHi: "while" },
      { id: "C", text: "do", textHi: "do" },
      { id: "D", text: "if", textHi: "if" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "'do' is not a keyword in Python (unlike C/C++/Java). Python has 'for' and 'while'. (पायथन में 'do' कीवर्ड नहीं होता है।)",
    timeEstimate: "25s"
  },
  {
    id: 4,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Identifiers & Variables",
    question: "Python में variable का नाम किससे शुरू नहीं हो सकता? (A variable name in Python cannot start with?)",
    questionHi: "Python में variable का नाम किससे शुरू नहीं हो सकता?",
    options: [
      { id: "A", text: "Alphabet", textHi: "Alphabet (अक्षर)" },
      { id: "B", text: "Underscore (_)", textHi: "Underscore (_)" },
      { id: "C", text: "Digit (अंक)", textHi: "Digit (अंक 0-9)" },
      { id: "D", text: "None of these", textHi: "इनमें से कोई नहीं" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Identifiers cannot start with a digit. They must start with a letter (A-Z, a-z) or an underscore (_). (वेरिएबल का नाम अंक से शुरू नहीं हो सकता।)",
    timeEstimate: "25s"
  },
  {
    id: 5,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Data Types",
    question: "'type()' फ़ंक्शन का उपयोग किसलिए किया जाता है? (What is the use of 'type()' function?)",
    questionHi: "'type()' फ़ंक्शन का उपयोग किसलिए किया जाता है?",
    options: [
      { id: "A", text: "To determine Data type", textHi: "Data type जानने के लिए" },
      { id: "B", text: "To Type cast", textHi: "Type cast करने के लिए" },
      { id: "C", text: "To delete variable", textHi: "Variable delete करने के लिए" },
      { id: "D", text: "To print output", textHi: "Output print करने के लिए" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "type() function returns the class/type of an object or variable in Python. (type() फ़ंक्शन किसी चर के डेटा प्रकार को बताता है।)",
    timeEstimate: "20s"
  },
  {
    id: 6,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Operators",
    question: "Python में exponentiation (घात) के लिए कौन सा ऑपरेटर इस्तेमाल होता है? (Which operator is used for exponentiation?)",
    questionHi: "Python में exponentiation (घात) के लिए कौन सा ऑपरेटर इस्तेमाल होता है?",
    options: [
      { id: "A", text: "^", textHi: "^" },
      { id: "B", text: "**", textHi: "**" },
      { id: "C", text: "%", textHi: "%" },
      { id: "D", text: "//", textHi: "//" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "** is the exponentiation operator in Python (e.g., 2 ** 3 = 8). (^ is bitwise XOR). (** ऑपरेटर घात निकालने के लिए उपयोग होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 7,
    chapter: "Chapter 5: Getting Started with Python",
    topic: "Floor Division",
    question: "print(10 // 3) का आउटपुट क्या होगा? (What will be the output of print(10 // 3)?)",
    questionHi: "print(10 // 3) का आउटपुट क्या होगा?",
    options: [
      { id: "A", text: "3.33", textHi: "3.33" },
      { id: "B", text: "3", textHi: "3" },
      { id: "C", text: "1", textHi: "1" },
      { id: "D", text: "0", textHi: "0" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "// performs floor division, rounding down to the nearest integer. 10 // 3 = 3. (// फ्लोर डिवीजन करता है, दशमलव भाग हटा देता है।)",
    timeEstimate: "25s"
  },

  // --- अध्याय 6: Flow of Control ---
  {
    id: 8,
    chapter: "Chapter 6: Flow of Control",
    topic: "Conditional Statements",
    question: "यदि कंडीशन True है, तो कौन सा ब्लॉक एक्सीक्यूट होता है? (Which block executes if condition is True?)",
    questionHi: "यदि कंडीशन True है, तो कौन सा ब्लॉक एक्सीक्यूट होता है?",
    options: [
      { id: "A", text: "else", textHi: "else" },
      { id: "B", text: "if", textHi: "if" },
      { id: "C", text: "elif", textHi: "elif" },
      { id: "D", text: "break", textHi: "break" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "The body of the 'if' statement executes when the condition tests True. (सत्य होने पर 'if' ब्लॉक चलता है।)",
    timeEstimate: "20s"
  },
  {
    id: 9,
    chapter: "Chapter 6: Flow of Control",
    topic: "Loops",
    question: "Python में लूप्स (loops) कितने प्रकार के होते हैं? (How many types of loops are there in Python?)",
    questionHi: "Python में लूप्स (loops) कितने प्रकार के होते हैं?",
    options: [
      { id: "A", text: "1", textHi: "1" },
      { id: "B", text: "2 (for and while)", textHi: "2 (for और while)" },
      { id: "C", text: "3", textHi: "3" },
      { id: "D", text: "4", textHi: "4" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Python supports two primary loops: 'for' loop and 'while' loop. (पायथन में 2 प्रकार के लूप होते हैं: for और while।)",
    timeEstimate: "20s"
  },
  {
    id: 10,
    chapter: "Chapter 6: Flow of Control",
    topic: "Loop Control Statements",
    question: "किस स्टेटमेंट का उपयोग लूप को तुरंत समाप्त करने के लिए किया जाता है? (Which statement is used to terminate a loop immediately?)",
    questionHi: "किस स्टेटमेंट का उपयोग लूप को तुरंत समाप्त करने के लिए किया जाता है?",
    options: [
      { id: "A", text: "continue", textHi: "continue" },
      { id: "B", text: "break", textHi: "break" },
      { id: "C", text: "pass", textHi: "pass" },
      { id: "D", text: "exit", textHi: "exit" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "'break' statement terminates the loop containing it immediately. ('break' लूप को तत्काल समाप्त कर देता है।)",
    timeEstimate: "20s"
  },
  {
    id: 11,
    chapter: "Chapter 6: Flow of Control",
    topic: "Range Function",
    question: "range(5) कौन सी sequence जनरेट करेगा? (What sequence will range(5) generate?)",
    questionHi: "range(5) कौन सी sequence जनरेट करेगा?",
    options: [
      { id: "A", text: "1, 2, 3, 4, 5", textHi: "1, 2, 3, 4, 5" },
      { id: "B", text: "0, 1, 2, 3, 4, 5", textHi: "0, 1, 2, 3, 4, 5" },
      { id: "C", text: "0, 1, 2, 3, 4", textHi: "0, 1, 2, 3, 4" },
      { id: "D", text: "1, 2, 3, 4", textHi: "1, 2, 3, 4" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "range(n) starts from 0 and stops at n-1. So range(5) gives 0, 1, 2, 3, 4. (range(5) 0 से 4 तक की संख्याएं देता है।)",
    timeEstimate: "25s"
  },
  {
    id: 12,
    chapter: "Chapter 6: Flow of Control",
    topic: "Continue Statement",
    question: "लूप के करंट इटरेशन (iteration) को स्किप करने के लिए किस कीवर्ड का प्रयोग होता है? (Which keyword skips the current loop iteration?)",
    questionHi: "लूप के करंट इटरेशन (iteration) को स्किप करने के लिए किस कीवर्ड का प्रयोग होता है?",
    options: [
      { id: "A", text: "pass", textHi: "pass" },
      { id: "B", text: "skip", textHi: "skip" },
      { id: "C", text: "break", textHi: "break" },
      { id: "D", text: "continue", textHi: "continue" }
    ],
    correctAnswer: "D",
    marks: 1,
    negativeMarks: 0,
    explanation: "'continue' skips the rest of the code in current iteration and moves to next cycle. ('continue' वर्तमान इटरेशन को छोड़कर अगले पर जाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 13,
    chapter: "Chapter 6: Flow of Control",
    topic: "Nested Loops",
    question: "नेस्टेड लूप (Nested loop) का क्या अर्थ है? (What does Nested loop mean?)",
    questionHi: "नेस्टेड लूप (Nested loop) का क्या अर्थ है?",
    options: [
      { id: "A", text: "Loop inside a loop", textHi: "Loop के अंदर loop" },
      { id: "B", text: "Loop outside a loop", textHi: "Loop के बाहर loop" },
      { id: "C", text: "Infinite loop", textHi: "Infinite loop" },
      { id: "D", text: "None of these", textHi: "इनमें से कोई नहीं" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "A loop placed inside the body of another loop is called a nested loop. (एक लूप के भीतर दूसरा लूप नेस्टेड लूप कहलाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 14,
    chapter: "Chapter 6: Flow of Control",
    topic: "elif Clause",
    question: "if-elif-else में 'elif' का क्या अर्थ है? (What does 'elif' mean in if-elif-else?)",
    questionHi: "if-elif-else में 'elif' का क्या अर्थ है?",
    options: [
      { id: "A", text: "else if", textHi: "else if" },
      { id: "B", text: "empty if", textHi: "empty if" },
      { id: "C", text: "error if", textHi: "error if" },
      { id: "D", text: "equal if", textHi: "equal if" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "'elif' is short for 'else if' in Python. ('elif' का अर्थ 'else if' होता है।)",
    timeEstimate: "20s"
  },

  // --- अध्याय 7: Functions ---
  {
    id: 15,
    chapter: "Chapter 7: Functions",
    topic: "Function Definition",
    question: "Python में फ़ंक्शन को परिभाषित (define) करने के लिए किस कीवर्ड का उपयोग होता है? (Which keyword is used to define a function?)",
    questionHi: "Python में फ़ंक्शन को परिभाषित (define) करने के लिए किस कीवर्ड का उपयोग होता है?",
    options: [
      { id: "A", text: "function", textHi: "function" },
      { id: "B", text: "def", textHi: "def" },
      { id: "C", text: "fun", textHi: "fun" },
      { id: "D", text: "define", textHi: "define" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "'def' keyword is used to define a user-defined function in Python. ('def' कीवर्ड से फ़ंक्शन शुरू होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 16,
    chapter: "Chapter 7: Functions",
    topic: "Arguments",
    question: "फ़ंक्शन को कॉल करते समय जो वैल्यू पास की जाती है, उसे क्या कहते हैं? (Value passed while calling a function is called?)",
    questionHi: "फ़ंक्शन को कॉल करते समय जो वैल्यू पास की जाती है, उसे क्या कहते हैं?",
    options: [
      { id: "A", text: "Parameter", textHi: "Parameter (पैरामीटर)" },
      { id: "B", text: "Argument", textHi: "Argument (आर्ग्युमेंट)" },
      { id: "C", text: "Return value", textHi: "Return value" },
      { id: "D", text: "Keyword", textHi: "Keyword" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Arguments are the actual values passed to function during invocation; parameters are variables in header. (कॉल करते समय दी गई वैल्यू को Argument कहते हैं।)",
    timeEstimate: "25s"
  },
  {
    id: 17,
    chapter: "Chapter 7: Functions",
    topic: "Return Statement",
    question: "फ़ंक्शन से वैल्यू वापस भेजने के लिए किस स्टेटमेंट का उपयोग होता है? (Which statement returns value from a function?)",
    questionHi: "फ़ंक्शन से वैल्यू वापस भेजने के लिए किस स्टेटमेंट का उपयोग होता है?",
    options: [
      { id: "A", text: "return", textHi: "return" },
      { id: "B", text: "yield", textHi: "yield" },
      { id: "C", text: "send", textHi: "send" },
      { id: "D", text: "give", textHi: "give" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "The 'return' statement exits a function and optionally passes back an expression to caller. ('return' स्टेटमेंट परिणाम वापस भेजता है।)",
    timeEstimate: "20s"
  },
  {
    id: 18,
    chapter: "Chapter 7: Functions",
    topic: "Default Return",
    question: "यदि फ़ंक्शन कोई वैल्यू रिटर्न नहीं करता, तो वह डिफ़ॉल्ट रूप से क्या रिटर्न करता है? (If a function returns nothing, what does it return by default?)",
    questionHi: "यदि फ़ंक्शन कोई वैल्यू रिटर्न नहीं करता, तो वह डिफ़ॉल्ट रूप से क्या रिटर्न करता है?",
    options: [
      { id: "A", text: "0", textHi: "0" },
      { id: "B", text: "False", textHi: "False" },
      { id: "C", text: "None", textHi: "None" },
      { id: "D", text: "Empty string", textHi: "Empty string" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Functions without an explicit return statement return the special value 'None'. (कोई वैल्यू न लौटने पर डिफ़ॉल्ट रूप से None रिटर्न होता है।)",
    timeEstimate: "25s"
  },
  {
    id: 19,
    chapter: "Chapter 7: Functions",
    topic: "Scope of Variables",
    question: "जो वेरिएबल फ़ंक्शन के अंदर डिक्लेयर किया जाता है, उसका स्कोप क्या होता है? (What is the scope of variable declared inside function?)",
    questionHi: "जो वेरिएबल फ़ंक्शन के अंदर डिक्लेयर किया जाता है, उसका स्कोप क्या होता है?",
    options: [
      { id: "A", text: "Global", textHi: "Global" },
      { id: "B", text: "Local", textHi: "Local (स्थानीय)" },
      { id: "C", text: "Nonlocal", textHi: "Nonlocal" },
      { id: "D", text: "Universal", textHi: "Universal" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Variables defined inside a function have local scope and cannot be accessed outside. (फ़ंक्शन के अंदर बने वेरिएबल का स्कोप Local होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 20,
    chapter: "Chapter 7: Functions",
    topic: "Modules",
    question: "'math' मॉड्यूल को प्रोग्राम में शामिल करने के लिए किस स्टेटमेंट का उपयोग होता है? (Which statement includes math module?)",
    questionHi: "'math' मॉड्यूल को प्रोग्राम में शामिल करने के लिए किस स्टेटमेंट का उपयोग होता है?",
    options: [
      { id: "A", text: "include math", textHi: "include math" },
      { id: "B", text: "using math", textHi: "using math" },
      { id: "C", text: "import math", textHi: "import math" },
      { id: "D", text: "get math", textHi: "get math" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "The 'import' keyword imports modules in Python: 'import math'. (मॉड्यूल जोड़ने के लिए 'import' स्टेटमेंट का उपयोग होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 21,
    chapter: "Chapter 7: Functions",
    topic: "abs() Function",
    question: "Python में abs(-5) का आउटपुट क्या होगा? (What will be output of abs(-5) in Python?)",
    questionHi: "Python में abs(-5) का आउटपुट क्या होगा?",
    options: [
      { id: "A", text: "-5", textHi: "-5" },
      { id: "B", text: "5", textHi: "5" },
      { id: "C", text: "0", textHi: "0" },
      { id: "D", text: "Error", textHi: "Error" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "abs() function returns the absolute value of a number. abs(-5) = 5. (abs() संख्या का निरपेक्ष (धनात्मक) मान देता है।)",
    timeEstimate: "20s"
  },

  // --- अध्याय 8: Strings ---
  {
    id: 22,
    chapter: "Chapter 8: Strings",
    topic: "String Immutability",
    question: "Python में स्ट्रिंग (String) क्या है? (What is String in Python?)",
    questionHi: "Python में स्ट्रिंग (String) क्या है?",
    options: [
      { id: "A", text: "Mutable", textHi: "Mutable (परिवर्तनीय)" },
      { id: "B", text: "Immutable", textHi: "Immutable (अपरिवर्तनीय)" },
      { id: "C", text: "Integer", textHi: "Integer" },
      { id: "D", text: "List", textHi: "List" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Strings are immutable in Python; their individual characters cannot be modified in place. (स्ट्रिंग में परिवर्तन नहीं किया जा सकता, यह Immutable है।)",
    timeEstimate: "20s"
  },
  {
    id: 23,
    chapter: "Chapter 8: Strings",
    topic: "len() Function",
    question: "स्ट्रिंग की लंबाई (length) जानने के लिए किस फ़ंक्शन का उपयोग किया जाता है? (Which function finds the length of string?)",
    questionHi: "स्ट्रिंग की लंबाई (length) जानने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    options: [
      { id: "A", text: "count()", textHi: "count()" },
      { id: "B", text: "size()", textHi: "size()" },
      { id: "C", text: "len()", textHi: "len()" },
      { id: "D", text: "length()", textHi: "length()" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "len() function returns the number of items in an object, e.g. len('Python') = 6. (len() फ़ंक्शन लंबाई बताता है।)",
    timeEstimate: "20s"
  },
  {
    id: 24,
    chapter: "Chapter 8: Strings",
    topic: "String Indexing",
    question: "यदि s = \"Python\" है, तो s[1] का मान क्या होगा? (If s = \"Python\", what is s[1]?)",
    questionHi: "यदि s = \"Python\" है, तो s[1] का मान क्या होगा?",
    options: [
      { id: "A", text: "P", textHi: "P" },
      { id: "B", text: "y", textHi: "y" },
      { id: "C", text: "t", textHi: "t" },
      { id: "D", text: "h", textHi: "h" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Index in Python starts from 0. s[0] = 'P', s[1] = 'y'. (इंडेक्स 0 से शुरू होता है, अतः s[1] 'y' होगा।)",
    timeEstimate: "25s"
  },
  {
    id: 25,
    chapter: "Chapter 8: Strings",
    topic: "Negative Indexing",
    question: "स्ट्रिंग के अंत से इंडेक्सिंग (Negative indexing) की शुरुआत किस नंबर से होती है? (Negative indexing starts from which number?)",
    questionHi: "स्ट्रिंग के अंत से इंडेक्सिंग (Negative indexing) की शुरुआत किस नंबर से होती है?",
    options: [
      { id: "A", text: "0", textHi: "0" },
      { id: "B", text: "1", textHi: "1" },
      { id: "C", text: "-1", textHi: "-1" },
      { id: "D", text: "-0", textHi: "-0" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Negative indexing starts from -1 from the rightmost end. (दाएं छोर से पहली स्थिति का इंडेक्स -1 होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 26,
    chapter: "Chapter 8: Strings",
    topic: "String Concatenation",
    question: "दो स्ट्रिंग्स को जोड़ने (concatenation) के लिए किस ऑपरेटर का उपयोग होता है? (Which operator concatenates strings?)",
    questionHi: "दो स्ट्रिंग्स को जोड़ने (concatenation) के लिए किस ऑपरेटर का उपयोग होता है?",
    options: [
      { id: "A", text: "+", textHi: "+" },
      { id: "B", text: "*", textHi: "*" },
      { id: "C", text: "&", textHi: "&" },
      { id: "D", text: "-", textHi: "-" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "The '+' operator concatenates two strings: 'Hello' + 'World' = 'HelloWorld'. ('+' ऑपरेटर दो स्ट्रिंग को जोड़ता है।)",
    timeEstimate: "20s"
  },
  {
    id: 27,
    chapter: "Chapter 8: Strings",
    topic: "String Replication",
    question: "यदि s = \"Hello\" है, तो s * 2 का आउटपुट क्या होगा? (If s = \"Hello\", what is s * 2?)",
    questionHi: "यदि s = \"Hello\" है, तो s * 2 का आउटपुट क्या होगा?",
    options: [
      { id: "A", text: "Hello", textHi: "Hello" },
      { id: "B", text: "Hello2", textHi: "Hello2" },
      { id: "C", text: "HelloHello", textHi: "HelloHello" },
      { id: "D", text: "Error", textHi: "Error" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "'*' operator with a string and integer replicates string n times: 'Hello' * 2 = 'HelloHello'. ('*' ऑपरेटर स्ट्रिंग को दोहराता है।)",
    timeEstimate: "20s"
  },
  {
    id: 28,
    chapter: "Chapter 8: Strings",
    topic: "Membership Operator",
    question: "स्ट्रिंग में कोई सब-स्ट्रिंग मौजूद है या नहीं, यह जांचने के लिए किस ऑपरेटर का उपयोग होता है? (Which operator checks if substring exists?)",
    questionHi: "स्ट्रिंग में कोई सब-स्ट्रिंग मौजूद है या नहीं, यह जांचने के लिए किस ऑपरेटर का उपयोग होता है?",
    options: [
      { id: "A", text: "exists", textHi: "exists" },
      { id: "B", text: "in", textHi: "in" },
      { id: "C", text: "has", textHi: "has" },
      { id: "D", text: "find", textHi: "find" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "'in' is a membership operator: 'th' in 'Python' returns True. ('in' ऑपरेटर सदस्यता की जांच करता है।)",
    timeEstimate: "20s"
  },

  // --- अध्याय 9: Lists ---
  {
    id: 29,
    chapter: "Chapter 9: Lists",
    topic: "List Syntax",
    question: "Python में लिस्ट (List) को किन ब्रैकेट से दर्शाया जाता है? (Lists in Python are represented by which brackets?)",
    questionHi: "Python में लिस्ट (List) को किन ब्रैकेट से दर्शाया जाता है?",
    options: [
      { id: "A", text: "()", textHi: "()" },
      { id: "B", text: "{}", textHi: "{}" },
      { id: "C", text: "[]", textHi: "[]" },
      { id: "D", text: "<>", textHi: "<>" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Lists are enclosed within square brackets []. (लिस्ट को वर्गाकार कोष्ठक [] में लिखा जाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 30,
    chapter: "Chapter 9: Lists",
    topic: "List Mutability",
    question: "क्या लिस्ट (List) म्यूटेबल (mutable) होती है? (Is List mutable in Python?)",
    questionHi: "क्या लिस्ट (List) म्यूटेबल (mutable) होती है?",
    options: [
      { id: "A", text: "Yes", textHi: "हाँ" },
      { id: "B", text: "No", textHi: "नहीं" },
      { id: "C", text: "Only for integers", textHi: "केवल इंटीजर के लिए" },
      { id: "D", text: "Cannot say", textHi: "कह नहीं सकते" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "Yes, Lists in Python are mutable; their elements can be modified in place. (हाँ, लिस्ट परिवर्तनीय (mutable) होती है।)",
    timeEstimate: "20s"
  },
  {
    id: 31,
    chapter: "Chapter 9: Lists",
    topic: "append() Method",
    question: "लिस्ट के अंत में नया एलिमेंट जोड़ने के लिए कौन सा मेथड इस्तेमाल होता है? (Which method adds element at the end of list?)",
    questionHi: "लिस्ट के अंत में नया एलिमेंट जोड़ने के लिए कौन सा मेथड इस्तेमाल होता है?",
    options: [
      { id: "A", text: "add()", textHi: "add()" },
      { id: "B", text: "insert()", textHi: "insert()" },
      { id: "C", text: "append()", textHi: "append()" },
      { id: "D", text: "extend()", textHi: "extend()" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "append() adds a single element to the very end of list. (append() लिस्ट के अंत में नया तत्व जोड़ता है।)",
    timeEstimate: "20s"
  },
  {
    id: 32,
    chapter: "Chapter 9: Lists",
    topic: "insert() Method",
    question: "लिस्ट में किसी विशेष इंडेक्स पर एलिमेंट जोड़ने के लिए कौन सा मेथड उपयोग होता है? (Which method adds element at a specific index?)",
    questionHi: "लिस्ट में किसी विशेष इंडेक्स पर एलिमेंट जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    options: [
      { id: "A", text: "append()", textHi: "append()" },
      { id: "B", text: "insert()", textHi: "insert()" },
      { id: "C", text: "push()", textHi: "push()" },
      { id: "D", text: "place()", textHi: "place()" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "insert(index, element) inserts an item at the specified index position. (insert() निश्चित इंडेक्स पर तत्व जोड़ता है।)",
    timeEstimate: "25s"
  },
  {
    id: 33,
    chapter: "Chapter 9: Lists",
    topic: "pop() Method",
    question: "pop() मेथड डिफ़ॉल्ट रूप से कौन सा एलिमेंट हटाता है? (Which element does pop() remove by default?)",
    questionHi: "pop() मेथड डिफ़ॉल्ट रूप से कौन सा एलिमेंट हटाता है?",
    options: [
      { id: "A", text: "First", textHi: "पहला" },
      { id: "B", text: "Last", textHi: "आखिरी" },
      { id: "C", text: "Middle", textHi: "बीच का" },
      { id: "D", text: "None", textHi: "कोई नहीं" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Without an index argument, pop() removes and returns the last element of the list. (pop() बिना इंडेक्स के अंतिम तत्व को हटाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 34,
    chapter: "Chapter 9: Lists",
    topic: "sort() Method",
    question: "लिस्ट के सभी एलिमेंट्स को आरोही क्रम (ascending order) में लगाने के लिए कौन सा मेथड है? (Which method sorts list in ascending order?)",
    questionHi: "लिस्ट के सभी एलिमेंट्स को आरोही क्रम (ascending order) में लगाने के लिए कौन सा मेथड है?",
    options: [
      { id: "A", text: "order()", textHi: "order()" },
      { id: "B", text: "sort()", textHi: "sort()" },
      { id: "C", text: "arrange()", textHi: "arrange()" },
      { id: "D", text: "align()", textHi: "align()" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "sort() method sorts the items of list in ascending order by default. (sort() लिस्ट के तत्वों को आरोही क्रम में व्यवस्थित करता है।)",
    timeEstimate: "20s"
  },

  // --- अध्याय 10: Tuples and Dictionaries ---
  {
    id: 35,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "Tuple Syntax",
    question: "Python में टपल (Tuple) को किन ब्रैकेट से दर्शाया जाता है? (Tuples in Python are represented by which brackets?)",
    questionHi: "Python में टपल (Tuple) को किन ब्रैकेट से दर्शाया जाता है?",
    options: [
      { id: "A", text: "[]", textHi: "[]" },
      { id: "B", text: "{}", textHi: "{}" },
      { id: "C", text: "()", textHi: "()" },
      { id: "D", text: "<>", textHi: "<>" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Tuples are enclosed within parentheses (). (टपल को गोल कोष्ठक () में लिखा जाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 36,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "Tuple vs List",
    question: "टपल (Tuple) और लिस्ट (List) में मुख्य अंतर क्या है? (What is the main difference between Tuple and List?)",
    questionHi: "टपल (Tuple) और लिस्ट (List) में मुख्य अंतर क्या है?",
    options: [
      { id: "A", text: "Tuple is mutable, List is immutable", textHi: "Tuple mutable है, List immutable है" },
      { id: "B", text: "Tuple is immutable, List is mutable", textHi: "Tuple immutable है, List mutable है" },
      { id: "C", text: "Both are same", textHi: "दोनों समान हैं" },
      { id: "D", text: "Tuple only holds strings", textHi: "Tuple में केवल स्ट्रिंग होती है" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "Tuples cannot be changed once created (immutable), whereas lists can be modified (mutable). (टपल अपरिवर्तनीय (immutable) है और लिस्ट परिवर्तनीय (mutable) है।)",
    timeEstimate: "25s"
  },
  {
    id: 37,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "Dictionary Structure",
    question: "डिक्शनरी (Dictionary) में डेटा किस रूप में स्टोर होता है? (In what format is data stored in a Dictionary?)",
    questionHi: "डिक्शनरी (Dictionary) में डेटा किस रूप में स्टोर होता है?",
    options: [
      { id: "A", text: "Key-Value pair", textHi: "Key-Value pair (कुंजी-मान युग्म)" },
      { id: "B", text: "Index-Value pair", textHi: "Index-Value pair" },
      { id: "C", text: "Rows-Columns", textHi: "Rows-Columns" },
      { id: "D", text: "Nodes", textHi: "Nodes" }
    ],
    correctAnswer: "A",
    marks: 1,
    negativeMarks: 0,
    explanation: "Dictionaries store data values in key:value pairs. (डिक्शनरी में डेटा Key-Value जोड़ों में सुरक्षित होता है।)",
    timeEstimate: "20s"
  },
  {
    id: 38,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "Dictionary Syntax",
    question: "डिक्शनरी को दर्शाने के लिए किन ब्रैकेट का उपयोग होता है? (Which brackets are used to represent a Dictionary?)",
    questionHi: "डिक्शनरी को दर्शाने के लिए किन ब्रैकेट का उपयोग होता है?",
    options: [
      { id: "A", text: "()", textHi: "()" },
      { id: "B", text: "[]", textHi: "[]" },
      { id: "C", text: "{}", textHi: "{}" },
      { id: "D", text: "<>", textHi: "<>" }
    ],
    correctAnswer: "C",
    marks: 1,
    negativeMarks: 0,
    explanation: "Dictionaries are written with curly braces {}. (डिक्शनरी को मंजिले कोष्ठक {} से दर्शाया जाता है।)",
    timeEstimate: "20s"
  },
  {
    id: 39,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "keys() Method",
    question: "डिक्शनरी में सभी 'keys' प्राप्त करने के लिए कौन सा मेथड है? (Which method gets all keys in a Dictionary?)",
    questionHi: "डिक्शनरी में सभी 'keys' प्राप्त करने के लिए कौन सा मेथड है?",
    options: [
      { id: "A", text: "get_keys()", textHi: "get_keys()" },
      { id: "B", text: "keys()", textHi: "keys()" },
      { id: "C", text: "fetch_keys()", textHi: "fetch_keys()" },
      { id: "D", text: "all_keys()", textHi: "all_keys()" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "d.keys() returns a view object that displays a list of all the keys. (keys() मेथड डिक्शनरी की सभी कुंजियाँ देता है।)",
    timeEstimate: "20s"
  },
  {
    id: 40,
    chapter: "Chapter 10: Tuples & Dictionaries",
    topic: "Unique Keys",
    question: "क्या डिक्शनरी में 'keys' डुप्लीकेट हो सकती हैं? (Can keys be duplicate in a Dictionary?)",
    questionHi: "क्या डिक्शनरी में 'keys' डुप्लीकेट हो सकती हैं?",
    options: [
      { id: "A", text: "Yes", textHi: "हाँ" },
      { id: "B", text: "No", textHi: "नहीं" },
      { id: "C", text: "Only numbers", textHi: "केवल नंबर्स" },
      { id: "D", text: "Only strings", textHi: "केवल स्ट्रिंग्स" }
    ],
    correctAnswer: "B",
    marks: 1,
    negativeMarks: 0,
    explanation: "No, duplicate keys are not allowed in Python dictionaries. If a key is repeated, the latest value overrides previous. (डिक्शनरी में duplicate keys नहीं हो सकतीं।)",
    timeEstimate: "25s"
  }
];

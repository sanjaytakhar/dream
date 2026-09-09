// Class 12 Computer Science Question Bank from Official RBSE Board Papers (2022, 2023, 2025)
// Government Senior Secondary School 52 LNP (MANJHUWAS)

export const class12CsBoard2025Questions = [
  {
    "id": "c12-25-q1",
    "chapter": "अपवाद प्रबंधन (Exception Handling)",
    "question": "_________ exception is raised when there is an error in the syntax of the Python Code.",
    "questionHi": "पायथन कोड के सिंटैक्स में कोई त्रुटि होने पर .............. अपवाद उठाया जाता है। (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Value Error",
        "textHi": "Value Error (मान त्रुटि)"
      },
      {
        "id": "B",
        "text": "IO Error",
        "textHi": "IO Error (आई ओ त्रुटि)"
      },
      {
        "id": "C",
        "text": "Syntax Error",
        "textHi": "Syntax Error (वाक्य रचना त्रुटि)"
      },
      {
        "id": "D",
        "text": "Type Error",
        "textHi": "Type Error (प्रारूप त्रुटि)"
      }
    ],
    "correct": "C",
    "explanation": "Syntax Error (SyntaxError) तब उत्पन्न होता है जब पायथन पार्सर कोड में व्याकरण/सिंटैक्स संबंधी त्रुटि पाता है। (When syntax rules of Python are violated, SyntaxError is raised)."
  },
  {
    "id": "c12-25-q2",
    "chapter": "अपवाद प्रबंधन (Exception Handling)",
    "question": "Which statement is used to throw/raise an exception explicitly in Python?",
    "questionHi": "पायथन में अपवाद (Exception) को उठाने/थ्रो करने के लिए किस कथन का उपयोग किया जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "print",
        "textHi": "print (प्रिंट)"
      },
      {
        "id": "B",
        "text": "raise",
        "textHi": "raise (रेज़ / उठाएँ)"
      },
      {
        "id": "C",
        "text": "throw",
        "textHi": "throw"
      },
      {
        "id": "D",
        "text": "catch",
        "textHi": "catch"
      }
    ],
    "correct": "B",
    "explanation": "पायथन में किसी अपवाद को जबरन उठाने (throw/raise) के लिए \"raise\" कीवर्ड का उपयोग किया जाता है। (In Python, the \"raise\" keyword is used to trigger an exception manually)."
  },
  {
    "id": "c12-25-q3",
    "chapter": "फाइल हैंडलिंग (File Handling)",
    "question": "Which built-in function is used to open a file in Python?",
    "questionHi": "पायथन में फाइल खोलने के लिए हम किस फंक्शन का उपयोग करते हैं? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "open()",
        "textHi": "open()"
      },
      {
        "id": "B",
        "text": "close()",
        "textHi": "close()"
      },
      {
        "id": "C",
        "text": "write()",
        "textHi": "write()"
      },
      {
        "id": "D",
        "text": "read()",
        "textHi": "read()"
      }
    ],
    "correct": "A",
    "explanation": "पायथन में फाइल ऑब्जेक्ट बनाने और फाइल को पढ़ने या लिखने के लिए open() फंक्शन का प्रयोग किया जाता है। (The open() function opens a file and returns a corresponding file object)."
  },
  {
    "id": "c12-25-q4",
    "chapter": "फाइल हैंडलिंग (File Handling)",
    "question": "Which file access mode opens the file in read-only mode in Python?",
    "questionHi": "निम्न में से कौनसा मोड फाइल को केवल पढ़ने (read-only) के मोड में खोलता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "< w >",
        "textHi": "< w >"
      },
      {
        "id": "B",
        "text": "< rb >",
        "textHi": "< rb >"
      },
      {
        "id": "C",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "D",
        "text": "< r >",
        "textHi": "< r >"
      }
    ],
    "correct": "D",
    "explanation": "मोड \"< r >\" डिफ़ॉल्ट रूप से टेक्स्ट फाइल को केवल पढ़ने (read-only) हेतु खोलता है। (The < r > mode opens a text file for reading only; file pointer is at the beginning)."
  },
  {
    "id": "c12-25-q5",
    "chapter": "डेटा संरचना (Stack Data Structure)",
    "question": "Which operation is used to add a new element at the top of the stack?",
    "questionHi": "स्टैक के शीर्ष (Top) पर एक नया तत्व जोड़ने के लिए किस ऑपरेशन का प्रयोग किया जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "PUSH",
        "textHi": "PUSH (पुश)"
      },
      {
        "id": "B",
        "text": "POP",
        "textHi": "POP (पॉप)"
      },
      {
        "id": "C",
        "text": "ADD",
        "textHi": "ADD"
      },
      {
        "id": "D",
        "text": "DELETE",
        "textHi": "DELETE"
      }
    ],
    "correct": "A",
    "explanation": "स्टैक में शीर्ष (Top) पर नया तत्व जोड़ना PUSH कहलाता है तथा तत्व को हटाना POP कहलाता है। (PUSH operation inserts an element onto the top of the stack)."
  },
  {
    "id": "c12-25-q6",
    "chapter": "डेटा संरचना (Expressions & Notations)",
    "question": "In __________ notation, operators are placed in between the operands.",
    "questionHi": "किस नोटेशन में ऑपरेटरों को ऑपरेंड के बीच में रखा जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Infix Notation",
        "textHi": "इन्फ़िक्स (Infix) नोटेशन"
      },
      {
        "id": "B",
        "text": "Prefix Notation",
        "textHi": "प्रीफ़िक्स (Prefix) नोटेशन"
      },
      {
        "id": "C",
        "text": "Postfix Notation",
        "textHi": "पोस्टफ़िक्स (Postfix) नोटेशन"
      },
      {
        "id": "D",
        "text": "All of these",
        "textHi": "उपरोक्त सभी"
      }
    ],
    "correct": "A",
    "explanation": "Infix नोटेशन में ऑपरेटर दो ऑपरेंड्स के बीच में होता है जैसे A + B। Prefix में ऑपरेटर पहले (+ A B) और Postfix में बाद में (A B +) आता है।"
  },
  {
    "id": "c12-25-q7",
    "chapter": "डेटा संरचना (Queue Data Structure)",
    "question": "Queue follows which fundamental principle?",
    "questionHi": "पंक्ति (Queue) किस सिद्धांत का पालन करती है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "First-In Last-Out (FILO)",
        "textHi": "फर्स्ट-इन लास्ट-आउट (FILO)"
      },
      {
        "id": "B",
        "text": "Last-In First-Out (LIFO)",
        "textHi": "लास्ट-इन फर्स्ट-आउट (LIFO)"
      },
      {
        "id": "C",
        "text": "First-In First-Out (FIFO)",
        "textHi": "फर्स्ट-इन फर्स्ट-आउट (FIFO)"
      },
      {
        "id": "D",
        "text": "Random Access",
        "textHi": "रैंडम एक्सेस"
      }
    ],
    "correct": "C",
    "explanation": "कतार (Queue) FIFO (First-In, First-Out) सिद्धांत पर कार्य करती है, जिसमें पहले प्रविष्ट हुआ तत्व सबसे पहले बाहर आता है।"
  },
  {
    "id": "c12-25-q8",
    "chapter": "सर्चिंग व सॉर्टिंग (Searching & Sorting)",
    "question": "_________ is the process of ordering a given collection of elements in ascending or descending sequence.",
    "questionHi": "तत्वों के दिए गए संग्रह को एक निश्चित क्रम में रखने की प्रक्रिया को क्या कहते हैं? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Searching",
        "textHi": "खोजना (Searching)"
      },
      {
        "id": "B",
        "text": "Addition",
        "textHi": "जोड़ना (Addition)"
      },
      {
        "id": "C",
        "text": "Sorting",
        "textHi": "छंटाई / सॉर्टिंग (Sorting)"
      },
      {
        "id": "D",
        "text": "Filtering",
        "textHi": "फ़िल्टरिंग (Filtering)"
      }
    ],
    "correct": "C",
    "explanation": "सॉर्टिंग (Sorting) डेटा तत्वों को किसी विशिष्ट क्रम (बढ़ते या घटते) में व्यवस्थित करने की तकनीक है।"
  },
  {
    "id": "c12-25-q9",
    "chapter": "सर्चिंग व सॉर्टिंग (Searching & Sorting)",
    "question": "_________ is a search technique that makes use of the ordering of elements in a sorted list to quickly locate a key.",
    "questionHi": "निम्न में से कौनसी खोज तकनीक एक सॉर्टेड सूची के क्रम का उपयोग कुंजी को शीघ्र खोजने के लिए करती है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Linear Search",
        "textHi": "रैखिक खोज (Linear Search)"
      },
      {
        "id": "B",
        "text": "Binary Search",
        "textHi": "द्विआधारी खोज (Binary Search)"
      },
      {
        "id": "C",
        "text": "Bubble Search",
        "textHi": "बबल सर्च"
      },
      {
        "id": "D",
        "text": "Hashing",
        "textHi": "हैशिंग"
      }
    ],
    "correct": "B",
    "explanation": "बाइनरी सर्च (Binary Search) केवल सॉर्टेड सूची पर कार्य करती है और मध्य तत्व (middle element) से तुलना करके सूची को आधा करती जाती है (O(log n))।"
  },
  {
    "id": "c12-25-q10",
    "chapter": "सर्चिंग व सॉर्टिंग (Hashing & Tables)",
    "question": "When two distinct elements map to the same slot or index in a hash table, it is known as ______.",
    "questionHi": "जब दो भिन्न तत्व हैश तालिका में एक ही स्लॉट में मैप करते हैं, तो इसे क्या कहा जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Resolution",
        "textHi": "समाधान (Resolution)"
      },
      {
        "id": "B",
        "text": "Search",
        "textHi": "खोज (Search)"
      },
      {
        "id": "C",
        "text": "Collision",
        "textHi": "टकराव / कोलिज़न (Collision)"
      },
      {
        "id": "D",
        "text": "Key",
        "textHi": "कुंजी (Key)"
      }
    ],
    "correct": "C",
    "explanation": "जब हैश फंक्शन दो अलग-अलग कुंजियों (keys) के लिए समान स्लॉट/इंडेक्स देता है, तो इसे हैश कोलिज़न (Collision) कहते हैं।"
  },
  {
    "id": "c12-25-q11",
    "chapter": "डेटा सांख्यिकी (Data Understanding & Statistics)",
    "question": "Which central tendency represents the data value that appears the highest number of times?",
    "questionHi": "वह डेटा मान जो दिए गए आंकड़ों में सबसे अधिक बार प्रकट होता है, क्या कहलाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Mean",
        "textHi": "माध्य (Mean)"
      },
      {
        "id": "B",
        "text": "Median",
        "textHi": "माध्यिका (Median)"
      },
      {
        "id": "C",
        "text": "Range",
        "textHi": "रेंज (Range)"
      },
      {
        "id": "D",
        "text": "Mode",
        "textHi": "बहुलक (Mode)"
      }
    ],
    "correct": "D",
    "explanation": "बहुलक (Mode) वह मान है जिसकी आवृत्ति (frequency) डेटा सेट में सर्वाधिक होती है।"
  },
  {
    "id": "c12-25-q12",
    "chapter": "डेटाबेस प्रबंधन (Database Concepts)",
    "question": "The overall logical design and structure of a database is defined as ________.",
    "questionHi": "किसी डेटाबेस की समग्र तार्किक संरचना एवं डिज़ाइन को क्या कहा जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Foreign Key",
        "textHi": "फॉरेन की"
      },
      {
        "id": "B",
        "text": "Primary Key",
        "textHi": "प्राइमरी की"
      },
      {
        "id": "C",
        "text": "Database Schema",
        "textHi": "डेटाबेस स्कीमा (Database Schema)"
      },
      {
        "id": "D",
        "text": "Database Instance",
        "textHi": "डेटाबेस इंस्टेंस"
      }
    ],
    "correct": "C",
    "explanation": "डेटाबेस स्कीमा (Schema) डेटाबेस का सम्पूर्ण खाका/ब्लूप्रिंट होता है जो तालिकाओं, फील्ड्स और संबंधों को परिभाषित करता है।"
  },
  {
    "id": "c12-25-q13",
    "chapter": "डेटाबेस प्रबंधन (Relational Keys)",
    "question": "Which key is used to relate and establish a link between two tables in a relational database?",
    "questionHi": "दो तालिकाओं या संबंधों को आपस में जोड़ने के लिए किस की (Key) का उपयोग किया जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Foreign Key",
        "textHi": "फॉरेन की (Foreign Key)"
      },
      {
        "id": "B",
        "text": "Candidate Key",
        "textHi": "कैंडिडेट की"
      },
      {
        "id": "C",
        "text": "Primary Key",
        "textHi": "प्राइमरी की"
      },
      {
        "id": "D",
        "text": "Composite Key",
        "textHi": "कम्पोजिट की"
      }
    ],
    "correct": "A",
    "explanation": "फॉरेन की (Foreign Key) एक तालिका का वह कॉलम होता है जो दूसरी तालिका की प्राइमरी की को संदर्भित (reference) कर संबंध बनाता है।"
  },
  {
    "id": "c12-25-q14",
    "chapter": "एसक्यूएल (SQL Constraints)",
    "question": "Which SQL constraint ensures that all values stored in a specified column are distinct and unique?",
    "questionHi": "निम्न में से कौनसा SQL कंस्ट्रेंट सुनिश्चित करता है कि कॉलम में सभी मान अलग और अद्वितीय (distinct) हों? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "NOT NULL",
        "textHi": "NOT NULL"
      },
      {
        "id": "B",
        "text": "UNIQUE",
        "textHi": "UNIQUE"
      },
      {
        "id": "C",
        "text": "DEFAULT",
        "textHi": "DEFAULT"
      },
      {
        "id": "D",
        "text": "CHECK",
        "textHi": "CHECK"
      }
    ],
    "correct": "B",
    "explanation": "UNIQUE कंस्ट्रेंट यह सुनिश्चित करता है कि कॉलम में कोई भी दो रिकॉर्ड्स समान मान न रखें (प्रत्येक मान अद्वितीय हो)।"
  },
  {
    "id": "c12-25-q15",
    "chapter": "एसक्यूएल (SQL Functions)",
    "question": "Which SQL string function returns the number of characters in the specified string?",
    "questionHi": "कौनसा SQL स्ट्रिंग फंक्शन निर्दिष्ट स्ट्रिंग में कुल वर्णों (characters) की संख्या लौटाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "LENGTH()",
        "textHi": "LENGTH()"
      },
      {
        "id": "B",
        "text": "LEFT()",
        "textHi": "LEFT()"
      },
      {
        "id": "C",
        "text": "RIGHT()",
        "textHi": "RIGHT()"
      },
      {
        "id": "D",
        "text": "LOWER()",
        "textHi": "LOWER()"
      }
    ],
    "correct": "A",
    "explanation": "SQL में LENGTH() फंक्शन किसी स्ट्रिंग में मौजूद कुल अक्षरों की संख्या की गणना करता है (जैसे LENGTH(\"OUTLINE\") = 7)।"
  },
  {
    "id": "c12-25-q16",
    "chapter": "कंप्यूटर नेटवर्क (Computer Networks)",
    "question": "Which of the following is NOT a type of computer network based on geographical area?",
    "questionHi": "निम्न में से कौनसा भौगोलिक क्षेत्र के आधार पर नेटवर्क का प्रकार नहीं है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "WAN",
        "textHi": "WAN (वैन)"
      },
      {
        "id": "B",
        "text": "LAN",
        "textHi": "LAN (लैन)"
      },
      {
        "id": "C",
        "text": "MAN",
        "textHi": "MAN (मैन)"
      },
      {
        "id": "D",
        "text": "HUB",
        "textHi": "HUB (हब)"
      }
    ],
    "correct": "D",
    "explanation": "LAN, MAN और WAN नेटवर्क के प्रकार हैं, जबकि HUB (हब) एक हार्डवेयर नेटवर्किंग उपकरण (Network Device) है।"
  },
  {
    "id": "c12-25-q17",
    "chapter": "कंप्यूटर नेटवर्क (Network Protocols)",
    "question": "Which protocol is primarily used to access and transmit hypermedia documents across the World Wide Web?",
    "questionHi": "वर्ल्ड वाइड वेब (WWW) तक पहुँचने और वेब पेज स्थानांतरित करने के लिए प्रयुक्त मुख्य प्रोटोकॉल कौनसा है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Hypertext Transfer Protocol (HTTP)",
        "textHi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल (HTTP)"
      },
      {
        "id": "B",
        "text": "File Transfer Protocol (FTP)",
        "textHi": "फाइल ट्रांसफर प्रोटोकॉल (FTP)"
      },
      {
        "id": "C",
        "text": "Point to Point Protocol (PPP)",
        "textHi": "पॉइंट टू पॉइंट प्रोटोकॉल (PPP)"
      },
      {
        "id": "D",
        "text": "Simple Mail Transfer Protocol (SMTP)",
        "textHi": "सिंपल मेल ट्रांसफर प्रोटोकॉल (SMTP)"
      }
    ],
    "correct": "A",
    "explanation": "HTTP (Hypertext Transfer Protocol) वेब ब्राउज़र और वेब सर्वर के बीच संचार स्थापित करने वाला मुख्य प्रोटोकॉल है।"
  },
  {
    "id": "c12-25-q18",
    "chapter": "साइबर सुरक्षा व नैतिकता (Cyber Security & Ethics)",
    "question": "A skilled individual who gains unauthorized access or control of computer systems and networks is termed a ________.",
    "questionHi": "वह व्यक्ति जो कंप्यूटर सिस्टम को हैक करने या अनधिकृत नियंत्रण करने में अत्यधिक कुशल होता है, कहलाता है: (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Customer",
        "textHi": "Customer (ग्राहक)"
      },
      {
        "id": "B",
        "text": "Consumer",
        "textHi": "Consumer (उपभोक्ता)"
      },
      {
        "id": "C",
        "text": "Hacker",
        "textHi": "Hacker (हैकर)"
      },
      {
        "id": "D",
        "text": "Producer",
        "textHi": "Producer (उत्पादक)"
      }
    ],
    "correct": "C",
    "explanation": "हैकर (Hacker) वह तकनीकी रूप से कुशल व्यक्ति होता है जो कंप्यूटर सुरक्षा प्रणालियों की कमियों का पता लगाकर सिस्टम में प्रवेश करता है।"
  },
  {
    "id": "c12-25-q19",
    "chapter": "एसक्यूएल क्वेरी आउटपुट (SQL Query Outputs)",
    "question": "What is the output of the SQL query: SELECT LENGTH(\"OUTLINE\"); ?",
    "questionHi": "SQL क्वेरी SELECT LENGTH(\"OUTLINE\"); का परिणाम क्या होगा? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "7",
        "textHi": "7"
      },
      {
        "id": "B",
        "text": "6",
        "textHi": "6"
      },
      {
        "id": "C",
        "text": "8",
        "textHi": "8"
      },
      {
        "id": "D",
        "text": "\"OUTLINE\"",
        "textHi": "\"OUTLINE\""
      }
    ],
    "correct": "A",
    "explanation": "\"OUTLINE\" शब्द में O-U-T-L-I-N-E कुल 7 अक्षर हैं, अतः LENGTH() का मान 7 प्राप्त होगा।"
  },
  {
    "id": "c12-25-q20",
    "chapter": "एसक्यूएल क्वेरी आउटपुट (SQL Query Outputs)",
    "question": "What is the evaluated output of the SQL command: SELECT MOD(90, 9); ?",
    "questionHi": "SQL कमांड SELECT MOD(90, 9); का आउटपुट क्या होगा? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "0",
        "textHi": "0"
      },
      {
        "id": "B",
        "text": "10",
        "textHi": "10"
      },
      {
        "id": "C",
        "text": "9",
        "textHi": "9"
      },
      {
        "id": "D",
        "text": "1",
        "textHi": "1"
      }
    ],
    "correct": "A",
    "explanation": "MOD(90, 9) 90 को 9 से भाग देने पर शेषफल (remainder) ज्ञात करता है। चूंकि 90 = 9 × 10 + 0, शेषफल 0 प्राप्त होगा।"
  }
];

export const class12CsBoard2023Questions = [
  {
    "id": "c12-23-q1",
    "chapter": "फाइल हैंडलिंग (File Modes)",
    "question": "Which file mode in Python is used to open a file for both reading and writing simultaneously?",
    "questionHi": "निम्न में से किस मोड का उपयोग फाइल को पढ़ने और लिखने दोनों (read & write) मोड में खोलने के लिए किया जाता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "< rb >",
        "textHi": "< rb >"
      },
      {
        "id": "B",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "C",
        "text": "< r+ >",
        "textHi": "< r+ >"
      },
      {
        "id": "D",
        "text": "< a+ >",
        "textHi": "< a+ >"
      }
    ],
    "correct": "C",
    "explanation": "< r+ > मोड फाइल को पढ़ने और लिखने दोनों के लिए खोलता है और फाइल पॉइंटर फाइल के आरम्भ में स्थित रहता है।"
  },
  {
    "id": "c12-23-q2",
    "chapter": "डेटा संरचना (Queue FIFO)",
    "question": "In computer science data structures, what does the acronym FIFO stand for in Queue?",
    "questionHi": "कतार (Queue) के संदर्भ में FIFO का पूर्ण रूप क्या होता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "First Idea First Out",
        "textHi": "फर्स्ट आइडिया फर्स्ट आउट"
      },
      {
        "id": "B",
        "text": "First In First Order",
        "textHi": "फर्स्ट इन फर्स्ट ऑर्डर"
      },
      {
        "id": "C",
        "text": "First Idea First Order",
        "textHi": "फर्स्ट आइडिया फर्स्ट ऑर्डर"
      },
      {
        "id": "D",
        "text": "First In First Out",
        "textHi": "फर्स्ट इन फर्स्ट आउट (First In First Out)"
      }
    ],
    "correct": "D",
    "explanation": "FIFO का अर्थ \"First In First Out\" है, जिसका अर्थ है कि कतार में जो डेटा सबसे पहले डाला जाता है, वह सबसे पहले निकाला जाता है।"
  },
  {
    "id": "c12-23-q3",
    "chapter": "सर्चिंग एल्गोरिदम (Search Algorithms)",
    "question": "Which search algorithm takes a sorted list and repeatedly divides it in the middle?",
    "questionHi": "कौनसी खोज विधि एक श्रेणीबद्ध (Sorted) सूची लेती है और इसे बीच में से विभाजित करती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Linear Search",
        "textHi": "रैखिक खोज (Linear Search)"
      },
      {
        "id": "B",
        "text": "Binary Search",
        "textHi": "द्विआधारी खोज (Binary Search)"
      },
      {
        "id": "C",
        "text": "Both of these",
        "textHi": "उपरोक्त दोनों"
      },
      {
        "id": "D",
        "text": "None of these",
        "textHi": "इनमें से कोई नहीं"
      }
    ],
    "correct": "B",
    "explanation": "बाइनरी सर्च हमेशा सॉर्टेड एरे पर काम करती है तथा मध्य (mid) तत्व निकालकर सूची को विभाजित करती है।"
  },
  {
    "id": "c12-23-q4",
    "chapter": "डेटाबेस प्रबंधन (Data Formats)",
    "question": "Data which is organized and recorded in a well-defined tabular format is classified as ________.",
    "questionHi": "डेटा जो व्यवस्थित है और एक अच्छी तरह से परिभाषित प्रारूप (तालिका आदि) में दर्ज किया जा सकता है, उसे क्या कहते हैं? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Structured Data",
        "textHi": "संरचित डेटा (Structured Data)"
      },
      {
        "id": "B",
        "text": "Unstructured Data",
        "textHi": "असंरचित डेटा (Unstructured Data)"
      },
      {
        "id": "C",
        "text": "Abnormal Data",
        "textHi": "असामान्य डेटा"
      },
      {
        "id": "D",
        "text": "Raw Stream",
        "textHi": "रॉ स्ट्रीम"
      }
    ],
    "correct": "A",
    "explanation": "संरचित डेटा (Structured Data) वह डेटा है जो पूर्व-निर्धारित स्कीमा और पंक्तियों-स्तम्भों (rows and columns) में व्यवस्थित रहता है।"
  },
  {
    "id": "c12-23-q5",
    "chapter": "डेटाबेस प्रबंधन (RDBMS Keys)",
    "question": "Which of the following is NOT a recognized key in a Relational Database Management System (RDBMS)?",
    "questionHi": "निम्न में से कौन रिलेशनल डेटाबेस (RDBMS) में एक वैध की (Key) नहीं है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Foreign Key",
        "textHi": "फॉरेन की (Foreign Key)"
      },
      {
        "id": "B",
        "text": "Primary Key",
        "textHi": "प्राइमरी की (Primary Key)"
      },
      {
        "id": "C",
        "text": "Agree Key",
        "textHi": "एग्री की (Agree Key)"
      },
      {
        "id": "D",
        "text": "Candidate Key",
        "textHi": "कैंडिडेट की (Candidate Key)"
      }
    ],
    "correct": "C",
    "explanation": "डेटाबेस में Primary Key, Foreign Key, Candidate Key तथा Alternate Key होती हैं। \"Agree Key\" कोई डेटाबेस की नहीं है।"
  },
  {
    "id": "c12-23-q6",
    "chapter": "एसक्यूएल (SQL Fundamentals)",
    "question": "What is the full expansion of the database language SQL?",
    "questionHi": "डेटाबेस भाषा SQL का पूरा नाम क्या है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Simple Question Level",
        "textHi": "Simple Question Level"
      },
      {
        "id": "B",
        "text": "Simple Query Level",
        "textHi": "Simple Query Level"
      },
      {
        "id": "C",
        "text": "Structured Query Level",
        "textHi": "Structured Query Level"
      },
      {
        "id": "D",
        "text": "Structured Query Language",
        "textHi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज (Structured Query Language)"
      }
    ],
    "correct": "D",
    "explanation": "SQL का पूरा नाम Structured Query Language है, जो रिलेशनल डेटाबेस को मैनेज एवं क्वेरी करने की मानक भाषा है।"
  },
  {
    "id": "c12-23-q7",
    "chapter": "साइबर सुरक्षा (Cyber Security)",
    "question": "Which of the following is NOT a category of computer hacker?",
    "questionHi": "निम्न में से कौनसा हैकर का प्रकार नहीं है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Firewall",
        "textHi": "फ़ायरवॉल (Firewall)"
      },
      {
        "id": "B",
        "text": "White Hats",
        "textHi": "व्हाइट हैट्स (White Hats)"
      },
      {
        "id": "C",
        "text": "Black Hats",
        "textHi": "ब्लैक हैट्स (Black Hats)"
      },
      {
        "id": "D",
        "text": "Grey Hats",
        "textHi": "ग्रे हैट्स (Grey Hats)"
      }
    ],
    "correct": "A",
    "explanation": "White Hat (एथिकल), Black Hat (दुर्भावनापूर्ण) और Grey Hat हैकर्स के प्रकार हैं। Firewall एक सुरक्षा प्रणाली/सॉफ्टवेयर है।"
  },
  {
    "id": "c12-23-q8",
    "chapter": "कंप्यूटर नेटवर्क उपकरण (Network Devices)",
    "question": "Which network hardware device gets its name from \"Modulator Demodulator\"?",
    "questionHi": "किस नेटवर्क उपकरण का नाम \"मॉडुलेटर डेमोडुलेटर\" से बना है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Switch",
        "textHi": "स्विच (Switch)"
      },
      {
        "id": "B",
        "text": "Modem",
        "textHi": "मोडेम (Modem)"
      },
      {
        "id": "C",
        "text": "Hub",
        "textHi": "हब (Hub)"
      },
      {
        "id": "D",
        "text": "Repeater",
        "textHi": "पुनरावर्तक (Repeater)"
      }
    ],
    "correct": "B",
    "explanation": "MODEM शब्द MOdulator और DEModulator का संक्षिप्त रूप है जो एनालॉग और डिजिटल सिग्नलों का परस्पर रूपांतरण करता है।"
  },
  {
    "id": "c12-23-q9",
    "chapter": "फाइल हैंडलिंग (Python File Methods)",
    "question": "Which Python file handling method is used to write a list of multiple strings to an open file?",
    "questionHi": "एक फाइल में कई स्ट्रिंग्स (list of strings) लिखने के लिए किस विधि का उपयोग किया जाता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "write()",
        "textHi": "write()"
      },
      {
        "id": "B",
        "text": "writelines()",
        "textHi": "writelines()"
      },
      {
        "id": "C",
        "text": "read()",
        "textHi": "read()"
      },
      {
        "id": "D",
        "text": "dump()",
        "textHi": "dump()"
      }
    ],
    "correct": "B",
    "explanation": "file.writelines(lines) मेथड स्ट्रिंग्स की किसी सूची को फाइल में लिखता है।"
  },
  {
    "id": "c12-23-q10",
    "chapter": "कंप्यूटर नेटवर्क (Network Classification)",
    "question": "What is the full form of WAN in computer networking?",
    "questionHi": "कंप्यूटर नेटवर्किंग में WAN का पूर्ण रूप क्या है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Wide Area Network",
        "textHi": "वाइड एरिया नेटवर्क (Wide Area Network)"
      },
      {
        "id": "B",
        "text": "Wireless Area Network",
        "textHi": "वायरलेस एरिया नेटवर्क"
      },
      {
        "id": "C",
        "text": "Web Access Network",
        "textHi": "वेब एक्सेस नेटवर्क"
      },
      {
        "id": "D",
        "text": "World Area Node",
        "textHi": "वर्ल्ड एरिया नोड"
      }
    ],
    "correct": "A",
    "explanation": "WAN (Wide Area Network) विस्तृत भौगोलिक दूरी (देश, महाद्वीप या विश्व) में फैले नेटवर्क को कहते हैं (उदा. इंटरनेट)।"
  },
  {
    "id": "c12-23-q11",
    "chapter": "पायथन अपवाद (Assert Statement)",
    "question": "What is the primary function of the \"assert\" statement in Python program testing and debugging?",
    "questionHi": "पायथन में दृढ़तापूर्वक कथन (assert statement) का क्या उपयोग होता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Tests a condition and raises AssertionError if false",
        "textHi": "शर्त की जाँच करता है और असत्य होने पर AssertionError उठाता है"
      },
      {
        "id": "B",
        "text": "Converts a string to uppercase",
        "textHi": "स्ट्रिंग को बड़े अक्षरों में बदलता है"
      },
      {
        "id": "C",
        "text": "Creates an infinite while loop",
        "textHi": "लूप बनाता है"
      },
      {
        "id": "D",
        "text": "Terminates the operating system",
        "textHi": "ऑपरेटिंग सिस्टम बंद करता है"
      }
    ],
    "correct": "A",
    "explanation": "assert expression, [message] यह सुनिश्चित करता है कि दी गई शर्त सत्य है; यदि शर्त असत्य हो तो AssertionError रेज़ होता है।"
  },
  {
    "id": "c12-23-q12",
    "chapter": "एसक्यूएल कमांड (DDL Alter Table)",
    "question": "Which SQL statement is used to alter or modify the schema structure of an existing table?",
    "questionHi": "पहले से निर्मित टेबल की संरचना (कॉलम जोड़ना या बदलना) में परिवर्तन करने के लिए किस कथन का उपयोग होता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "UPDATE",
        "textHi": "UPDATE"
      },
      {
        "id": "B",
        "text": "ALTER TABLE",
        "textHi": "ALTER TABLE"
      },
      {
        "id": "C",
        "text": "MODIFY ROW",
        "textHi": "MODIFY ROW"
      },
      {
        "id": "D",
        "text": "CHANGE DATA",
        "textHi": "CHANGE DATA"
      }
    ],
    "correct": "B",
    "explanation": "ALTER TABLE कमांड एक DDL कमांड है जिसका उपयोग टेबल में नया कॉलम जोड़ने, हटाने या डेटा टाइप बदलने के लिए होता है।"
  },
  {
    "id": "c12-23-q13",
    "chapter": "अपवाद प्रबंधन (Finally Clause)",
    "question": "When is the \"finally\" block executed in Python exception handling?",
    "questionHi": "पायथन अपवाद प्रबंधन में \"finally\" खंड कब निष्पादित होता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Always, whether an exception occurred or not",
        "textHi": "हमेशा, चाहे अपवाद उत्पन्न हो या न हो"
      },
      {
        "id": "B",
        "text": "Only when an unhandled exception occurs",
        "textHi": "केवल जब कोई अपवाद उत्पन्न हो"
      },
      {
        "id": "C",
        "text": "Only when no exception occurs",
        "textHi": "केवल जब कोई अपवाद न हो"
      },
      {
        "id": "D",
        "text": "Only during file I/O operations",
        "textHi": "केवल फाइल खोलते समय"
      }
    ],
    "correct": "A",
    "explanation": "finally ब्लॉक अनिवार्य रूप से हर परिस्थिति में चलता है (उदा. खुली फाइलें बंद करना या कनेक्शन क्लोज़ करना)।"
  },
  {
    "id": "c12-23-q14",
    "chapter": "एसक्यूएल कमांड (Describe Table)",
    "question": "Which SQL command is used to display the field structure, types, and constraints of a created table?",
    "questionHi": "पहले से बनाई गई टेबल की संरचना (फ़ील्ड्स व प्रकार) देखने के लिए SQL सिंटैक्स क्या है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "DESC table_name; (or DESCRIBE table_name;)",
        "textHi": "DESC table_name; (अथवा DESCRIBE table_name;)"
      },
      {
        "id": "B",
        "text": "SHOW table_name;",
        "textHi": "SHOW table_name;"
      },
      {
        "id": "C",
        "text": "VIEW table_name;",
        "textHi": "VIEW table_name;"
      },
      {
        "id": "D",
        "text": "STRUCT table_name;",
        "textHi": "STRUCT table_name;"
      }
    ],
    "correct": "A",
    "explanation": "DESC table_name; या DESCRIBE table_name; टेबल के सभी कॉलम, डेटा टाइप, Nullability व Keys की जानकारी दिखाता है।"
  },
  {
    "id": "c12-23-q15",
    "chapter": "कंप्यूटर नेटवर्क (Bluetooth Technology)",
    "question": "Bluetooth wireless technology is primarily designed for which network scale?",
    "questionHi": "ब्लूटूथ वायरलेस तकनीक मुख्य रूप से किस प्रकार के नेटवर्क के लिए उपयोग की जाती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "PAN (Personal Area Network, ~10m range)",
        "textHi": "PAN (पर्सनल एरिया नेटवर्क, ~10 मीटर दूरी)"
      },
      {
        "id": "B",
        "text": "WAN (Wide Area Network across cities)",
        "textHi": "WAN (शहरों के मध्य)"
      },
      {
        "id": "C",
        "text": "MAN (Metropolitan Area Network)",
        "textHi": "MAN (मेट्रोपॉलिटन नेटवर्क)"
      },
      {
        "id": "D",
        "text": "Satellite Uplink Network",
        "textHi": "सैटेलाइट नेटवर्क"
      }
    ],
    "correct": "A",
    "explanation": "ब्लूटूथ एक कम दूरी (लगभग 10 मीटर) की 2.4 GHz रेडियो फ्रीक्वेंसी तकनीक है जो PAN (Personal Area Network) बनाती है।"
  },
  {
    "id": "c12-23-q16",
    "chapter": "फाइल हैंडलिंग (Readline Method)",
    "question": "What does the file.readline() method return in Python?",
    "questionHi": "पायथन फाइल हैंडलिंग में readline() विधि क्या लौटाती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Reads and returns one line from the file as a string",
        "textHi": "फाइल से एक पंक्ति को स्ट्रिंग के रूप में पढ़कर लौटाती है"
      },
      {
        "id": "B",
        "text": "Reads the entire file contents at once",
        "textHi": "पूरी फाइल को एक साथ पढ़ती है"
      },
      {
        "id": "C",
        "text": "Returns a list of all lines in the file",
        "textHi": "सभी पंक्तियों की सूची लौटाती है"
      },
      {
        "id": "D",
        "text": "Returns total line count",
        "textHi": "कुल पंक्तियों की संख्या"
      }
    ],
    "correct": "A",
    "explanation": "readline() फाइल पॉइंटर की वर्तमान स्थिति से अगली न्यूलाइन वर्ण तक की एक पंक्ति स्ट्रिंग के रूप में पढ़ता है।"
  },
  {
    "id": "c12-23-q17",
    "chapter": "डेटा संरचना (Infix to Postfix)",
    "question": "Convert the infix arithmetic expression: A + B - C * D into Postfix notation.",
    "questionHi": "इन्फ़िक्स व्यंजक A + B - C * D को पोस्टफ़िक्स (Postfix) नोटेशन में बदलें: (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "A B + C D * -",
        "textHi": "A B + C D * -"
      },
      {
        "id": "B",
        "text": "+ - A B * C D",
        "textHi": "+ - A B * C D"
      },
      {
        "id": "C",
        "text": "A B C D * - +",
        "textHi": "A B C D * - +"
      },
      {
        "id": "D",
        "text": "A B + - C D *",
        "textHi": "A B + - C D *"
      }
    ],
    "correct": "A",
    "explanation": "ऑपरेटर प्राथमिकता अनुसार: पहले * हल होगा: (C * D) -> CD*। फिर बाएं से दाएं + और -: ((A + B) - (CD*)) -> (AB+) - (CD*) -> A B + C D * -।"
  },
  {
    "id": "c12-23-q18",
    "chapter": "सॉर्टिंग एल्गोरिदम (Selection Sort)",
    "question": "In Selection Sort algorithm, how are elements organized in each pass?",
    "questionHi": "चयन (Selection) सॉर्ट में प्रत्येक चरण (Pass) में क्या प्रक्रिया अपनाई जाती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Finds minimum element in unsorted part and swaps with first element",
        "textHi": "अवर्गीकृत भाग से न्यूनतम तत्व ढूंढकर उसे पहले स्थान से बदलता है"
      },
      {
        "id": "B",
        "text": "Compares only adjacent elements",
        "textHi": "केवल पास-पास के तत्वों की अदला-बदली करता है"
      },
      {
        "id": "C",
        "text": "Divides list into two equal halves recursively",
        "textHi": "सूची को दो भागों में बांटता है"
      },
      {
        "id": "D",
        "text": "Hashes keys into buckets",
        "textHi": "कुंजियों को बकेट में हैश करता है"
      }
    ],
    "correct": "A",
    "explanation": "Selection Sort प्रत्येक पास में अवर्गीकृत सब-एरे में से सबसे छोटा (minimum) तत्व खोजता है और उसे सही स्थान पर स्वैप करता है।"
  },
  {
    "id": "c12-23-q19",
    "chapter": "फाइल हैंडलिंग (Tell Method)",
    "question": "In Python file handling, what value does the file.tell() method return?",
    "questionHi": "पायथन फाइल हैंडलिंग में file.tell() विधि क्या मान लौटाती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Current byte offset position of the file pointer",
        "textHi": "फाइल पॉइंटर की वर्तमान बाइट स्थिति (offset)"
      },
      {
        "id": "B",
        "text": "Total file size in megabytes",
        "textHi": "फाइल का कुल आकार"
      },
      {
        "id": "C",
        "text": "Number of lines in the file",
        "textHi": "फाइल की कुल पंक्तियाँ"
      },
      {
        "id": "D",
        "text": "Access permissions of the file",
        "textHi": "फाइल की अनुमतियाँ"
      }
    ],
    "correct": "A",
    "explanation": "file.tell() फाइल के आरंभ से लेकर फाइल कर्सर की वर्तमान स्थिति (बाइट्स में) एक पूर्णांक के रूप में लौटाता है।"
  },
  {
    "id": "c12-23-q20",
    "chapter": "फाइल हैंडलिंग (Seek Method)",
    "question": "Which method is used to reposition the file pointer to a desired offset in Python?",
    "questionHi": "पायथन में फाइल पॉइंटर की स्थिति को वांछित स्थान पर बदलने के लिए किसका उपयोग किया जाता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "seek(offset, whence)",
        "textHi": "seek(offset, whence)"
      },
      {
        "id": "B",
        "text": "locate(index)",
        "textHi": "locate(index)"
      },
      {
        "id": "C",
        "text": "move(position)",
        "textHi": "move(position)"
      },
      {
        "id": "D",
        "text": "jump(offset)",
        "textHi": "jump(offset)"
      }
    ],
    "correct": "A",
    "explanation": "seek(offset, whence) का उपयोग फाइल पॉइंटर को आगे या पीछे किसी निश्चित बाइट ऑफसेट पर स्थानांतरित करने के लिए होता है।"
  }
];

export const class12CsBoard2022Questions = [
  {
    "id": "c12-22-q1",
    "chapter": "डेटा संरचना (Queue Deletion)",
    "question": "In a standard linear Queue data structure, deletion of an element always happens at which end?",
    "questionHi": "पंक्ति (Queue) डेटा संरचना में तत्वों का विलोपन (Deletion) हमेशा किस सिरे पर होता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Rear end (पीछे से)",
        "textHi": "Rear end (पीछे से)"
      },
      {
        "id": "B",
        "text": "Front end (आगे से)",
        "textHi": "Front end (आगे से)"
      },
      {
        "id": "C",
        "text": "Middle (मध्य से)",
        "textHi": "Middle (मध्य से)"
      },
      {
        "id": "D",
        "text": "Randomly",
        "textHi": "किसी भी स्थान से"
      }
    ],
    "correct": "B",
    "explanation": "क्यू (Queue) में नया तत्व REAR (पीछे) से प्रविष्ट होता है और तत्व का निष्कासन (Deletion) हमेशा FRONT (आगे) से होता है।"
  },
  {
    "id": "c12-22-q2",
    "chapter": "पायथन अपवाद (ImportError)",
    "question": "Which built-in Python exception is raised when the requested module definition cannot be found or loaded?",
    "questionHi": "निम्न में से कौनसा अपवाद तब उठाया जाता है जब अनुरोधित मॉड्यूल की परिभाषा नहीं मिलती? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "EOFError",
        "textHi": "EOFError (ई.ओ.एफ़. त्रुटि)"
      },
      {
        "id": "B",
        "text": "TypeError",
        "textHi": "TypeError (प्रारूप त्रुटि)"
      },
      {
        "id": "C",
        "text": "ImportError",
        "textHi": "ImportError (आयात त्रुटि)"
      },
      {
        "id": "D",
        "text": "NameError",
        "textHi": "NameError (नाम त्रुटि)"
      }
    ],
    "correct": "C",
    "explanation": "ImportError तब उत्पन्न होता है जब import कथन किसी मॉड्यूल को ढूंढने या लोड करने में असमर्थ होता है।"
  },
  {
    "id": "c12-22-q3",
    "chapter": "सांख्यिकी एवं विश्लेषण (Data Measures)",
    "question": "The mathematical arithmetic average of a given set of numbers is termed as ________.",
    "questionHi": "दिए गए मानों का गणितीय औसत (Average) क्या कहलाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Range",
        "textHi": "रेंज (Range)"
      },
      {
        "id": "B",
        "text": "Mean",
        "textHi": "माध्य (Mean)"
      },
      {
        "id": "C",
        "text": "Median",
        "textHi": "माध्यिका (Median)"
      },
      {
        "id": "D",
        "text": "Mode",
        "textHi": "बहुलक (Mode)"
      }
    ],
    "correct": "B",
    "explanation": "माध्य (Mean) सभी अवलोकनों के योग को कुल अवलोकनों की संख्या से भाग देकर प्राप्त औसत मान है।"
  },
  {
    "id": "c12-22-q4",
    "chapter": "फाइल हैंडलिंग (Binary Read Mode)",
    "question": "Which file mode is used to open a file strictly in binary and read-only mode in Python?",
    "questionHi": "फाइल को बाइनरी और केवल पढ़ने (binary & read-only) के मोड में खोलने के लिए कौनसा मोड उपयोग किया जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "B",
        "text": "< a+ >",
        "textHi": "< a+ >"
      },
      {
        "id": "C",
        "text": "< +r >",
        "textHi": "< +r >"
      },
      {
        "id": "D",
        "text": "< rb >",
        "textHi": "< rb >"
      }
    ],
    "correct": "D",
    "explanation": "< rb > मोड बाइनरी फाइल (जैसे इमेज, ऑब्जेक्ट, पिकल फाइल) को केवल पढ़ने हेतु सुरक्षित रूप से खोलता है।"
  },
  {
    "id": "c12-22-q5",
    "chapter": "कंप्यूटर नेटवर्क इतिहास (WWW Invention)",
    "question": "In which historic year was the World Wide Web (WWW) invented by Sir Tim Berners-Lee at CERN?",
    "questionHi": "वर्ल्ड वाइड वेब (WWW) का आविष्कार सर टिम बर्नर्स-ली द्वारा किस वर्ष किया गया था? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "1991",
        "textHi": "1991"
      },
      {
        "id": "B",
        "text": "1989",
        "textHi": "1989"
      },
      {
        "id": "C",
        "text": "1992",
        "textHi": "1992"
      },
      {
        "id": "D",
        "text": "1990",
        "textHi": "1990"
      }
    ],
    "correct": "B",
    "explanation": "सर टिम बर्नर्स-ली ने 1989 में सर्न (CERN) में वर्ल्ड वाइड वेब का आविष्कार किया था।"
  },
  {
    "id": "c12-22-q6",
    "chapter": "डेटा संरचना वर्गीकरण (Data Structures vs Operations)",
    "question": "Which of the following is NOT a data structure but rather an operation performed on a structure?",
    "questionHi": "निम्न में से कौनसी डेटा संरचना (Data Structure) नहीं है, बल्कि एक संक्रिया (Operation) है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Stack",
        "textHi": "स्टैक (Stack)"
      },
      {
        "id": "B",
        "text": "Push",
        "textHi": "पुश (Push)"
      },
      {
        "id": "C",
        "text": "Queue",
        "textHi": "कतार (Queue)"
      },
      {
        "id": "D",
        "text": "Tree",
        "textHi": "ट्री (Tree)"
      }
    ],
    "correct": "B",
    "explanation": "Stack, Queue और Tree डेटा संरचनाएं हैं, जबकि Push स्टैक पर नया तत्व जोड़ने वाला एक ऑपरेशन है।"
  },
  {
    "id": "c12-22-q7",
    "chapter": "डेटा ट्रांसमिशन मोड (Transmission Modes)",
    "question": "Strictly unidirectional communication between two connected devices is classified as:",
    "questionHi": "दो उपकरणों के मध्य एकदिशीय (Unidirectional) संचार क्या कहलाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Half-duplex",
        "textHi": "हाफ-डुप्लेक्स (Half-duplex)"
      },
      {
        "id": "B",
        "text": "Simplex",
        "textHi": "सिम्प्लेक्स (Simplex)"
      },
      {
        "id": "C",
        "text": "Full-duplex",
        "textHi": "फुल-डुप्लेक्स (Full-duplex)"
      },
      {
        "id": "D",
        "text": "Multiplex",
        "textHi": "मल्टीप्लेक्स"
      }
    ],
    "correct": "B",
    "explanation": "सिम्प्लेक्स (Simplex) मोड में संचार केवल एक ही दिशा में होता है (जैसे कीबोर्ड से कंप्यूटर या टीवी ब्रॉडकास्ट)।"
  },
  {
    "id": "c12-22-q8",
    "chapter": "एसक्यूएल बाधाएं (SQL Constraints)",
    "question": "Which relational constraint ensures that no two records in a database table have matching non-null values in a column?",
    "questionHi": "दी गई बाधाओं में से कौन यह सुनिश्चित करती है कि तालिका के किसी कॉलम में सभी मान परस्पर भिन्न (distinct) हों? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "DEFAULT",
        "textHi": "DEFAULT"
      },
      {
        "id": "B",
        "text": "NOT NULL",
        "textHi": "NOT NULL"
      },
      {
        "id": "C",
        "text": "UNIQUE",
        "textHi": "UNIQUE"
      },
      {
        "id": "D",
        "text": "AUTO_INCREMENT",
        "textHi": "AUTO_INCREMENT"
      }
    ],
    "correct": "C",
    "explanation": "UNIQUE कंस्ट्रेंट स्तम्भ में डुप्लीकेट मान दर्ज होने से रोकता है।"
  },
  {
    "id": "c12-22-q9",
    "chapter": "रिलेशनल मॉडल शब्दावली (RDBMS Terminology)",
    "question": "In relational database theory, each single row of data in a table/relation is technically termed as a:",
    "questionHi": "रिलेशनल डेटाबेस में किसी तालिका की प्रत्येक व्यक्तिगत पंक्ति (Row) को क्या कहा जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Attribute",
        "textHi": "एट्रिब्यूट (Attribute)"
      },
      {
        "id": "B",
        "text": "Degree",
        "textHi": "डिग्री (Degree)"
      },
      {
        "id": "C",
        "text": "Tuple",
        "textHi": "टपल (Tuple)"
      },
      {
        "id": "D",
        "text": "Cardinality",
        "textHi": "कार्डिनैलिटी (Cardinality)"
      }
    ],
    "correct": "C",
    "explanation": "तालिका की पंक्ति को Tuple, स्तम्भ को Attribute, पंक्तियों की संख्या को Cardinality तथा स्तम्भों की संख्या को Degree कहते हैं।"
  },
  {
    "id": "c12-22-q10",
    "chapter": "एसक्यूएल भाषा उपसमूह (SQL Sublanguages)",
    "question": "What is the full expansion of DDL in Database Management Systems?",
    "questionHi": "डेटाबेस प्रबंधन प्रणाली में DDL का पूर्ण रूप क्या होता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Data Definition Language",
        "textHi": "डेटा डेफिनिशन लैंग्वेज (Data Definition Language)"
      },
      {
        "id": "B",
        "text": "Data Distribution Level",
        "textHi": "डेटा डिस्ट्रीब्यूशन लेवल"
      },
      {
        "id": "C",
        "text": "Database Direct Link",
        "textHi": "डेटाबेस डायरेक्ट लिंक"
      },
      {
        "id": "D",
        "text": "Data Decimal Language",
        "textHi": "डेटा डेसीमल लैंग्वेज"
      }
    ],
    "correct": "A",
    "explanation": "DDL (Data Definition Language) में CREATE, ALTER, DROP आदि कमांड्स आते हैं जो डेटाबेस संरचना का निर्माण एवं संशोधन करते हैं।"
  },
  {
    "id": "c12-22-q11",
    "chapter": "डेटा संरचना (Queue Terminology)",
    "question": "In Queue terminology, which end is officially recognized as the \"Tail\" of the queue?",
    "questionHi": "कतार (Queue) के संदर्भ में किस सिरे को कतार की \"टेल\" (Tail) के रूप में जाना जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Front",
        "textHi": "Front (फ्रंट)"
      },
      {
        "id": "B",
        "text": "Rear",
        "textHi": "Rear (रियर)"
      },
      {
        "id": "C",
        "text": "Top",
        "textHi": "Top (टॉप)"
      },
      {
        "id": "D",
        "text": "Base",
        "textHi": "Base (बेस)"
      }
    ],
    "correct": "B",
    "explanation": "क्यू के सिर (Head) को Front तथा पूंछ (Tail) को Rear कहा जाता है, जहाँ नए तत्व जुड़ते हैं।"
  },
  {
    "id": "c12-22-q12",
    "chapter": "डेटाबेस कंस्ट्रेंट (Primary Key Constraint)",
    "question": "Which constraint uniquely identifies every record in a table and cannot accept NULL values?",
    "questionHi": "प्रत्येक पंक्ति/रिकॉर्ड को विशिष्ट रूप से पहचानने के लिए किस कंस्ट्रेंट का उपयोग किया जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "PRIMARY KEY",
        "textHi": "प्राइमरी की (PRIMARY KEY)"
      },
      {
        "id": "B",
        "text": "CHECK",
        "textHi": "CHECK"
      },
      {
        "id": "C",
        "text": "DEFAULT",
        "textHi": "DEFAULT"
      },
      {
        "id": "D",
        "text": "FOREIGN KEY",
        "textHi": "FOREIGN KEY"
      }
    ],
    "correct": "A",
    "explanation": "PRIMARY KEY किसी तालिका के प्रत्येक रिकॉर्ड की विशिष्ट पहचान करती है और इसमें NULL मान स्वीकार्य नहीं होते।"
  },
  {
    "id": "c12-22-q13",
    "chapter": "स्टैक संरचना (Stack Insertion)",
    "question": "In a stack data structure, insertion of a new element is always performed at the ________.",
    "questionHi": "स्टैक डेटा संरचना में एक नए तत्व का प्रवेशन हमेशा किस स्थान पर किया जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Bottom",
        "textHi": "तल (Bottom)"
      },
      {
        "id": "B",
        "text": "Top",
        "textHi": "शीर्ष (Top)"
      },
      {
        "id": "C",
        "text": "Center",
        "textHi": "मध्य (Center)"
      },
      {
        "id": "D",
        "text": "Arbitrary index",
        "textHi": "किसी भी स्थान"
      }
    ],
    "correct": "B",
    "explanation": "स्टैक LIFO (Last In First Out) संरचना है जहाँ प्रवेशन (Push) और विलोपन (Pop) दोनों केवल TOP से ही संभव हैं।"
  },
  {
    "id": "c12-22-q14",
    "chapter": "डबल एंडेड क्यू (Deque Data Structure)",
    "question": "What does the specialized queue variant \"Deque\" stand for?",
    "questionHi": "विशिष्ट कतार \"डीक्यू\" (Deque) का विस्तृत अर्थ क्या है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Double Ended Queue",
        "textHi": "डबल एंडेड क्यू (Double Ended Queue)"
      },
      {
        "id": "B",
        "text": "Dual Entry Question",
        "textHi": "ड्यूल एंट्री क्वेश्चन"
      },
      {
        "id": "C",
        "text": "Direct Element Query",
        "textHi": "डायरेक्ट एलिमेंट क्वेरी"
      },
      {
        "id": "D",
        "text": "Dynamic Export Queue",
        "textHi": "डायनामिक एक्सपोर्ट क्यू"
      }
    ],
    "correct": "A",
    "explanation": "Deque (Double Ended Queue) वह कतार है जिसमें दोनों सिरों (Front और Rear) से प्रवेशन एवं विलोपन दोनों किए जा सकते हैं।"
  },
  {
    "id": "c12-22-q15",
    "chapter": "नेटवर्क अवधारणाएं (Channel Bandwidth)",
    "question": "What does the term \"Bandwidth\" represent in data communication networks?",
    "questionHi": "डेटा संचार में किसी चैनल की बैंडविड्थ (Bandwidth) से क्या तात्पर्य है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Maximum data transfer rate or capacity of communication channel (bps)",
        "textHi": "संचार चैनल की अधिकतम डेटा स्थानांतरण क्षमता / दर (bps)"
      },
      {
        "id": "B",
        "text": "Physical thickness of network fiber cables",
        "textHi": "केबल की मोटाई"
      },
      {
        "id": "C",
        "text": "Electric voltage of router antennas",
        "textHi": "राउटर का वोल्टेज"
      },
      {
        "id": "D",
        "text": "Total weight of computer server racks",
        "textHi": "सर्वर का भार"
      }
    ],
    "correct": "A",
    "explanation": "बैंडविड्थ (Bandwidth) एक निश्चित समय में किसी संचार चैनल द्वारा प्रेषित किए जा सकने वाले अधिकतम डेटा की मात्रा (bps/Hz) है।"
  },
  {
    "id": "c12-22-q16",
    "chapter": "स्टैक स्थिति (Stack Overflow)",
    "question": "Under what specific condition does a \"Stack Overflow\" error occur?",
    "questionHi": "स्टैक में \"ओवरफ्लो\" (Overflow) की स्थिति कब उत्पन्न होती है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "When attempting to push an element into a completely full stack",
        "textHi": "जब पहले से पूर्ण रूप से भरे स्टैक में नया तत्व पुश करने का प्रयास किया जाए"
      },
      {
        "id": "B",
        "text": "When attempting to pop an element from an empty stack",
        "textHi": "जब खाली स्टैक से पॉप करने का प्रयास किया जाए"
      },
      {
        "id": "C",
        "text": "When all elements in stack are identical",
        "textHi": "जब सभी मान समान हों"
      },
      {
        "id": "D",
        "text": "When memory is cleared",
        "textHi": "जब मेमोरी खाली हो जाए"
      }
    ],
    "correct": "A",
    "explanation": "Overflow: पूर्ण भरे स्टैक में पुश करना। Underflow: पूर्णतः खाली स्टैक में से पॉप करने का प्रयास करना।"
  },
  {
    "id": "c12-22-q17",
    "chapter": "डेटाबेस विसंगति (Data Inconsistency)",
    "question": "What is meant by \"Data Inconsistency\" in database and file systems?",
    "questionHi": "डेटाबेस व फाइल सिस्टम में \"डेटा असंगतता\" (Data Inconsistency) से आप क्या समझते हैं? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Multiple conflicting/differing copies of the same data existing at different locations",
        "textHi": "एक ही डेटा की विभिन्न स्थानों पर परस्पर विरोधी/भिन्न प्रतियों का उपस्थित होना"
      },
      {
        "id": "B",
        "text": "Encryption of database backups",
        "textHi": "डेटाबेस बैकअप का एन्क्रिप्शन"
      },
      {
        "id": "C",
        "text": "Sorting rows in alphabetical sequence",
        "textHi": "वर्णमाला क्रम में पंक्तियाँ सजाना"
      },
      {
        "id": "D",
        "text": "Deleting obsolete log files",
        "textHi": "पुरानी लॉग फाइलें हटाना"
      }
    ],
    "correct": "A",
    "explanation": "डेटा रिडंडेंसी के कारण जब एक स्थान पर डेटा अपडेट होता है और दूसरे स्थान पर नहीं, तो डेटा असंगत (Inconsistent) हो जाता है।"
  },
  {
    "id": "c12-22-q18",
    "chapter": "एक्सप्रेशन रूपांतरण (Infix to Prefix)",
    "question": "Convert the infix mathematical expression: (A - B) * (C + D) into Prefix notation.",
    "questionHi": "इन्फ़िक्स व्यंजक (A - B) * (C + D) को प्रीफ़िक्स (Prefix) नोटेशन में बदलिए: (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "* - A B + C D",
        "textHi": "* - A B + C D"
      },
      {
        "id": "B",
        "text": "A B - C D + *",
        "textHi": "A B - C D + *"
      },
      {
        "id": "C",
        "text": "- * A B + C D",
        "textHi": "- * A B + C D"
      },
      {
        "id": "D",
        "text": "* A - B + C D",
        "textHi": "* A - B + C D"
      }
    ],
    "correct": "A",
    "explanation": "कोष्ठक अनुसार: (A - B) का प्रीफ़िक्स = -AB, (C + D) का प्रीफ़िक्स = +CD। अब दोनों के मध्य * लगाने पर: * [-AB] [+CD] = * - A B + C D।"
  },
  {
    "id": "c12-22-q19",
    "chapter": "बाइनरी फाइल पिकलिंग (Pickle Dump)",
    "question": "In Python pickle module, which function is used to serialize and write an object to a binary file?",
    "questionHi": "पायथन के पिकल (Pickle) मॉड्यूल में किसी ऑब्जेक्ट को बाइनरी फाइल में लिखने के लिए किस फंक्शन का प्रयोग होता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "pickle.dump(object, file)",
        "textHi": "pickle.dump(object, file)"
      },
      {
        "id": "B",
        "text": "pickle.load(file)",
        "textHi": "pickle.load(file)"
      },
      {
        "id": "C",
        "text": "pickle.write(object)",
        "textHi": "pickle.write(object)"
      },
      {
        "id": "D",
        "text": "pickle.save(file)",
        "textHi": "pickle.save(file)"
      }
    ],
    "correct": "A",
    "explanation": "pickle.dump() पायथन ऑब्जेक्ट (डिक्शनरी, लिस्ट आदि) को बाइनरी फॉर्मेट में सीरियलाइज़ करके फाइल में राइट करता है।"
  },
  {
    "id": "c12-22-q20",
    "chapter": "बाइनरी फाइल पिकलिंग (Pickle Load)",
    "question": "Which method in Python pickle module is utilized to deserialize and read stored objects from a binary file?",
    "questionHi": "पिकल (Pickle) मॉड्यूल में बाइनरी फाइल से ऑब्जेक्ट को वापस पढ़ने (deserialize) के लिए कौनसी विधि प्रयुक्त होती है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "pickle.load(file)",
        "textHi": "pickle.load(file)"
      },
      {
        "id": "B",
        "text": "pickle.dump(object, file)",
        "textHi": "pickle.dump(object, file)"
      },
      {
        "id": "C",
        "text": "pickle.read(file)",
        "textHi": "pickle.read(file)"
      },
      {
        "id": "D",
        "text": "pickle.unpack()",
        "textHi": "pickle.unpack()"
      }
    ],
    "correct": "A",
    "explanation": "pickle.load() बाइनरी फाइल से डेटा को अनपिकल/डी-सीरियलाइज़ करके मूल पायथन ऑब्जेक्ट के रूप में लोड करता है।"
  }
];

export const class12CsGrandMasterQuestions = [
  {
    "id": "c12-grand-q1",
    "chapter": "अपवाद प्रबंधन (Exception Handling)",
    "question": "_________ exception is raised when there is an error in the syntax of the Python Code.",
    "questionHi": "पायथन कोड के सिंटैक्स में कोई त्रुटि होने पर .............. अपवाद उठाया जाता है। (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Value Error",
        "textHi": "Value Error (मान त्रुटि)"
      },
      {
        "id": "B",
        "text": "IO Error",
        "textHi": "IO Error (आई ओ त्रुटि)"
      },
      {
        "id": "C",
        "text": "Syntax Error",
        "textHi": "Syntax Error (वाक्य रचना त्रुटि)"
      },
      {
        "id": "D",
        "text": "Type Error",
        "textHi": "Type Error (प्रारूप त्रुटि)"
      }
    ],
    "correct": "C",
    "explanation": "Syntax Error (SyntaxError) तब उत्पन्न होता है जब पायथन पार्सर कोड में व्याकरण/सिंटैक्स संबंधी त्रुटि पाता है। (When syntax rules of Python are violated, SyntaxError is raised)."
  },
  {
    "id": "c12-grand-q2",
    "chapter": "अपवाद प्रबंधन (Exception Handling)",
    "question": "Which statement is used to throw/raise an exception explicitly in Python?",
    "questionHi": "पायथन में अपवाद (Exception) को उठाने/थ्रो करने के लिए किस कथन का उपयोग किया जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "print",
        "textHi": "print (प्रिंट)"
      },
      {
        "id": "B",
        "text": "raise",
        "textHi": "raise (रेज़ / उठाएँ)"
      },
      {
        "id": "C",
        "text": "throw",
        "textHi": "throw"
      },
      {
        "id": "D",
        "text": "catch",
        "textHi": "catch"
      }
    ],
    "correct": "B",
    "explanation": "पायथन में किसी अपवाद को जबरन उठाने (throw/raise) के लिए \"raise\" कीवर्ड का उपयोग किया जाता है। (In Python, the \"raise\" keyword is used to trigger an exception manually)."
  },
  {
    "id": "c12-grand-q3",
    "chapter": "फाइल हैंडलिंग (File Handling)",
    "question": "Which built-in function is used to open a file in Python?",
    "questionHi": "पायथन में फाइल खोलने के लिए हम किस फंक्शन का उपयोग करते हैं? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "open()",
        "textHi": "open()"
      },
      {
        "id": "B",
        "text": "close()",
        "textHi": "close()"
      },
      {
        "id": "C",
        "text": "write()",
        "textHi": "write()"
      },
      {
        "id": "D",
        "text": "read()",
        "textHi": "read()"
      }
    ],
    "correct": "A",
    "explanation": "पायथन में फाइल ऑब्जेक्ट बनाने और फाइल को पढ़ने या लिखने के लिए open() फंक्शन का प्रयोग किया जाता है। (The open() function opens a file and returns a corresponding file object)."
  },
  {
    "id": "c12-grand-q4",
    "chapter": "फाइल हैंडलिंग (File Handling)",
    "question": "Which file access mode opens the file in read-only mode in Python?",
    "questionHi": "निम्न में से कौनसा मोड फाइल को केवल पढ़ने (read-only) के मोड में खोलता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "< w >",
        "textHi": "< w >"
      },
      {
        "id": "B",
        "text": "< rb >",
        "textHi": "< rb >"
      },
      {
        "id": "C",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "D",
        "text": "< r >",
        "textHi": "< r >"
      }
    ],
    "correct": "D",
    "explanation": "मोड \"< r >\" डिफ़ॉल्ट रूप से टेक्स्ट फाइल को केवल पढ़ने (read-only) हेतु खोलता है। (The < r > mode opens a text file for reading only; file pointer is at the beginning)."
  },
  {
    "id": "c12-grand-q5",
    "chapter": "डेटा संरचना (Stack Data Structure)",
    "question": "Which operation is used to add a new element at the top of the stack?",
    "questionHi": "स्टैक के शीर्ष (Top) पर एक नया तत्व जोड़ने के लिए किस ऑपरेशन का प्रयोग किया जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "PUSH",
        "textHi": "PUSH (पुश)"
      },
      {
        "id": "B",
        "text": "POP",
        "textHi": "POP (पॉप)"
      },
      {
        "id": "C",
        "text": "ADD",
        "textHi": "ADD"
      },
      {
        "id": "D",
        "text": "DELETE",
        "textHi": "DELETE"
      }
    ],
    "correct": "A",
    "explanation": "स्टैक में शीर्ष (Top) पर नया तत्व जोड़ना PUSH कहलाता है तथा तत्व को हटाना POP कहलाता है। (PUSH operation inserts an element onto the top of the stack)."
  },
  {
    "id": "c12-grand-q6",
    "chapter": "डेटा संरचना (Expressions & Notations)",
    "question": "In __________ notation, operators are placed in between the operands.",
    "questionHi": "किस नोटेशन में ऑपरेटरों को ऑपरेंड के बीच में रखा जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Infix Notation",
        "textHi": "इन्फ़िक्स (Infix) नोटेशन"
      },
      {
        "id": "B",
        "text": "Prefix Notation",
        "textHi": "प्रीफ़िक्स (Prefix) नोटेशन"
      },
      {
        "id": "C",
        "text": "Postfix Notation",
        "textHi": "पोस्टफ़िक्स (Postfix) नोटेशन"
      },
      {
        "id": "D",
        "text": "All of these",
        "textHi": "उपरोक्त सभी"
      }
    ],
    "correct": "A",
    "explanation": "Infix नोटेशन में ऑपरेटर दो ऑपरेंड्स के बीच में होता है जैसे A + B। Prefix में ऑपरेटर पहले (+ A B) और Postfix में बाद में (A B +) आता है।"
  },
  {
    "id": "c12-grand-q7",
    "chapter": "डेटा संरचना (Queue Data Structure)",
    "question": "Queue follows which fundamental principle?",
    "questionHi": "पंक्ति (Queue) किस सिद्धांत का पालन करती है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "First-In Last-Out (FILO)",
        "textHi": "फर्स्ट-इन लास्ट-आउट (FILO)"
      },
      {
        "id": "B",
        "text": "Last-In First-Out (LIFO)",
        "textHi": "लास्ट-इन फर्स्ट-आउट (LIFO)"
      },
      {
        "id": "C",
        "text": "First-In First-Out (FIFO)",
        "textHi": "फर्स्ट-इन फर्स्ट-आउट (FIFO)"
      },
      {
        "id": "D",
        "text": "Random Access",
        "textHi": "रैंडम एक्सेस"
      }
    ],
    "correct": "C",
    "explanation": "कतार (Queue) FIFO (First-In, First-Out) सिद्धांत पर कार्य करती है, जिसमें पहले प्रविष्ट हुआ तत्व सबसे पहले बाहर आता है।"
  },
  {
    "id": "c12-grand-q8",
    "chapter": "सर्चिंग व सॉर्टिंग (Searching & Sorting)",
    "question": "_________ is the process of ordering a given collection of elements in ascending or descending sequence.",
    "questionHi": "तत्वों के दिए गए संग्रह को एक निश्चित क्रम में रखने की प्रक्रिया को क्या कहते हैं? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Searching",
        "textHi": "खोजना (Searching)"
      },
      {
        "id": "B",
        "text": "Addition",
        "textHi": "जोड़ना (Addition)"
      },
      {
        "id": "C",
        "text": "Sorting",
        "textHi": "छंटाई / सॉर्टिंग (Sorting)"
      },
      {
        "id": "D",
        "text": "Filtering",
        "textHi": "फ़िल्टरिंग (Filtering)"
      }
    ],
    "correct": "C",
    "explanation": "सॉर्टिंग (Sorting) डेटा तत्वों को किसी विशिष्ट क्रम (बढ़ते या घटते) में व्यवस्थित करने की तकनीक है।"
  },
  {
    "id": "c12-grand-q9",
    "chapter": "सर्चिंग व सॉर्टिंग (Searching & Sorting)",
    "question": "_________ is a search technique that makes use of the ordering of elements in a sorted list to quickly locate a key.",
    "questionHi": "निम्न में से कौनसी खोज तकनीक एक सॉर्टेड सूची के क्रम का उपयोग कुंजी को शीघ्र खोजने के लिए करती है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Linear Search",
        "textHi": "रैखिक खोज (Linear Search)"
      },
      {
        "id": "B",
        "text": "Binary Search",
        "textHi": "द्विआधारी खोज (Binary Search)"
      },
      {
        "id": "C",
        "text": "Bubble Search",
        "textHi": "बबल सर्च"
      },
      {
        "id": "D",
        "text": "Hashing",
        "textHi": "हैशिंग"
      }
    ],
    "correct": "B",
    "explanation": "बाइनरी सर्च (Binary Search) केवल सॉर्टेड सूची पर कार्य करती है और मध्य तत्व (middle element) से तुलना करके सूची को आधा करती जाती है (O(log n))।"
  },
  {
    "id": "c12-grand-q10",
    "chapter": "सर्चिंग व सॉर्टिंग (Hashing & Tables)",
    "question": "When two distinct elements map to the same slot or index in a hash table, it is known as ______.",
    "questionHi": "जब दो भिन्न तत्व हैश तालिका में एक ही स्लॉट में मैप करते हैं, तो इसे क्या कहा जाता है? (बोर्ड 2025)",
    "options": [
      {
        "id": "A",
        "text": "Resolution",
        "textHi": "समाधान (Resolution)"
      },
      {
        "id": "B",
        "text": "Search",
        "textHi": "खोज (Search)"
      },
      {
        "id": "C",
        "text": "Collision",
        "textHi": "टकराव / कोलिज़न (Collision)"
      },
      {
        "id": "D",
        "text": "Key",
        "textHi": "कुंजी (Key)"
      }
    ],
    "correct": "C",
    "explanation": "जब हैश फंक्शन दो अलग-अलग कुंजियों (keys) के लिए समान स्लॉट/इंडेक्स देता है, तो इसे हैश कोलिज़न (Collision) कहते हैं।"
  },
  {
    "id": "c12-grand-q11",
    "chapter": "फाइल हैंडलिंग (File Modes)",
    "question": "Which file mode in Python is used to open a file for both reading and writing simultaneously?",
    "questionHi": "निम्न में से किस मोड का उपयोग फाइल को पढ़ने और लिखने दोनों (read & write) मोड में खोलने के लिए किया जाता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "< rb >",
        "textHi": "< rb >"
      },
      {
        "id": "B",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "C",
        "text": "< r+ >",
        "textHi": "< r+ >"
      },
      {
        "id": "D",
        "text": "< a+ >",
        "textHi": "< a+ >"
      }
    ],
    "correct": "C",
    "explanation": "< r+ > मोड फाइल को पढ़ने और लिखने दोनों के लिए खोलता है और फाइल पॉइंटर फाइल के आरम्भ में स्थित रहता है।"
  },
  {
    "id": "c12-grand-q12",
    "chapter": "डेटा संरचना (Queue FIFO)",
    "question": "In computer science data structures, what does the acronym FIFO stand for in Queue?",
    "questionHi": "कतार (Queue) के संदर्भ में FIFO का पूर्ण रूप क्या होता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "First Idea First Out",
        "textHi": "फर्स्ट आइडिया फर्स्ट आउट"
      },
      {
        "id": "B",
        "text": "First In First Order",
        "textHi": "फर्स्ट इन फर्स्ट ऑर्डर"
      },
      {
        "id": "C",
        "text": "First Idea First Order",
        "textHi": "फर्स्ट आइडिया फर्स्ट ऑर्डर"
      },
      {
        "id": "D",
        "text": "First In First Out",
        "textHi": "फर्स्ट इन फर्स्ट आउट (First In First Out)"
      }
    ],
    "correct": "D",
    "explanation": "FIFO का अर्थ \"First In First Out\" है, जिसका अर्थ है कि कतार में जो डेटा सबसे पहले डाला जाता है, वह सबसे पहले निकाला जाता है।"
  },
  {
    "id": "c12-grand-q13",
    "chapter": "सर्चिंग एल्गोरिदम (Search Algorithms)",
    "question": "Which search algorithm takes a sorted list and repeatedly divides it in the middle?",
    "questionHi": "कौनसी खोज विधि एक श्रेणीबद्ध (Sorted) सूची लेती है और इसे बीच में से विभाजित करती है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Linear Search",
        "textHi": "रैखिक खोज (Linear Search)"
      },
      {
        "id": "B",
        "text": "Binary Search",
        "textHi": "द्विआधारी खोज (Binary Search)"
      },
      {
        "id": "C",
        "text": "Both of these",
        "textHi": "उपरोक्त दोनों"
      },
      {
        "id": "D",
        "text": "None of these",
        "textHi": "इनमें से कोई नहीं"
      }
    ],
    "correct": "B",
    "explanation": "बाइनरी सर्च हमेशा सॉर्टेड एरे पर काम करती है तथा मध्य (mid) तत्व निकालकर सूची को विभाजित करती है।"
  },
  {
    "id": "c12-grand-q14",
    "chapter": "डेटाबेस प्रबंधन (Data Formats)",
    "question": "Data which is organized and recorded in a well-defined tabular format is classified as ________.",
    "questionHi": "डेटा जो व्यवस्थित है और एक अच्छी तरह से परिभाषित प्रारूप (तालिका आदि) में दर्ज किया जा सकता है, उसे क्या कहते हैं? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Structured Data",
        "textHi": "संरचित डेटा (Structured Data)"
      },
      {
        "id": "B",
        "text": "Unstructured Data",
        "textHi": "असंरचित डेटा (Unstructured Data)"
      },
      {
        "id": "C",
        "text": "Abnormal Data",
        "textHi": "असामान्य डेटा"
      },
      {
        "id": "D",
        "text": "Raw Stream",
        "textHi": "रॉ स्ट्रीम"
      }
    ],
    "correct": "A",
    "explanation": "संरचित डेटा (Structured Data) वह डेटा है जो पूर्व-निर्धारित स्कीमा और पंक्तियों-स्तम्भों (rows and columns) में व्यवस्थित रहता है।"
  },
  {
    "id": "c12-grand-q15",
    "chapter": "डेटाबेस प्रबंधन (RDBMS Keys)",
    "question": "Which of the following is NOT a recognized key in a Relational Database Management System (RDBMS)?",
    "questionHi": "निम्न में से कौन रिलेशनल डेटाबेस (RDBMS) में एक वैध की (Key) नहीं है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Foreign Key",
        "textHi": "फॉरेन की (Foreign Key)"
      },
      {
        "id": "B",
        "text": "Primary Key",
        "textHi": "प्राइमरी की (Primary Key)"
      },
      {
        "id": "C",
        "text": "Agree Key",
        "textHi": "एग्री की (Agree Key)"
      },
      {
        "id": "D",
        "text": "Candidate Key",
        "textHi": "कैंडिडेट की (Candidate Key)"
      }
    ],
    "correct": "C",
    "explanation": "डेटाबेस में Primary Key, Foreign Key, Candidate Key तथा Alternate Key होती हैं। \"Agree Key\" कोई डेटाबेस की नहीं है।"
  },
  {
    "id": "c12-grand-q16",
    "chapter": "एसक्यूएल (SQL Fundamentals)",
    "question": "What is the full expansion of the database language SQL?",
    "questionHi": "डेटाबेस भाषा SQL का पूरा नाम क्या है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Simple Question Level",
        "textHi": "Simple Question Level"
      },
      {
        "id": "B",
        "text": "Simple Query Level",
        "textHi": "Simple Query Level"
      },
      {
        "id": "C",
        "text": "Structured Query Level",
        "textHi": "Structured Query Level"
      },
      {
        "id": "D",
        "text": "Structured Query Language",
        "textHi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज (Structured Query Language)"
      }
    ],
    "correct": "D",
    "explanation": "SQL का पूरा नाम Structured Query Language है, जो रिलेशनल डेटाबेस को मैनेज एवं क्वेरी करने की मानक भाषा है।"
  },
  {
    "id": "c12-grand-q17",
    "chapter": "साइबर सुरक्षा (Cyber Security)",
    "question": "Which of the following is NOT a category of computer hacker?",
    "questionHi": "निम्न में से कौनसा हैकर का प्रकार नहीं है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Firewall",
        "textHi": "फ़ायरवॉल (Firewall)"
      },
      {
        "id": "B",
        "text": "White Hats",
        "textHi": "व्हाइट हैट्स (White Hats)"
      },
      {
        "id": "C",
        "text": "Black Hats",
        "textHi": "ब्लैक हैट्स (Black Hats)"
      },
      {
        "id": "D",
        "text": "Grey Hats",
        "textHi": "ग्रे हैट्स (Grey Hats)"
      }
    ],
    "correct": "A",
    "explanation": "White Hat (एथिकल), Black Hat (दुर्भावनापूर्ण) और Grey Hat हैकर्स के प्रकार हैं। Firewall एक सुरक्षा प्रणाली/सॉफ्टवेयर है।"
  },
  {
    "id": "c12-grand-q18",
    "chapter": "कंप्यूटर नेटवर्क उपकरण (Network Devices)",
    "question": "Which network hardware device gets its name from \"Modulator Demodulator\"?",
    "questionHi": "किस नेटवर्क उपकरण का नाम \"मॉडुलेटर डेमोडुलेटर\" से बना है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Switch",
        "textHi": "स्विच (Switch)"
      },
      {
        "id": "B",
        "text": "Modem",
        "textHi": "मोडेम (Modem)"
      },
      {
        "id": "C",
        "text": "Hub",
        "textHi": "हब (Hub)"
      },
      {
        "id": "D",
        "text": "Repeater",
        "textHi": "पुनरावर्तक (Repeater)"
      }
    ],
    "correct": "B",
    "explanation": "MODEM शब्द MOdulator और DEModulator का संक्षिप्त रूप है जो एनालॉग और डिजिटल सिग्नलों का परस्पर रूपांतरण करता है।"
  },
  {
    "id": "c12-grand-q19",
    "chapter": "फाइल हैंडलिंग (Python File Methods)",
    "question": "Which Python file handling method is used to write a list of multiple strings to an open file?",
    "questionHi": "एक फाइल में कई स्ट्रिंग्स (list of strings) लिखने के लिए किस विधि का उपयोग किया जाता है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "write()",
        "textHi": "write()"
      },
      {
        "id": "B",
        "text": "writelines()",
        "textHi": "writelines()"
      },
      {
        "id": "C",
        "text": "read()",
        "textHi": "read()"
      },
      {
        "id": "D",
        "text": "dump()",
        "textHi": "dump()"
      }
    ],
    "correct": "B",
    "explanation": "file.writelines(lines) मेथड स्ट्रिंग्स की किसी सूची को फाइल में लिखता है।"
  },
  {
    "id": "c12-grand-q20",
    "chapter": "कंप्यूटर नेटवर्क (Network Classification)",
    "question": "What is the full form of WAN in computer networking?",
    "questionHi": "कंप्यूटर नेटवर्किंग में WAN का पूर्ण रूप क्या है? (बोर्ड 2023)",
    "options": [
      {
        "id": "A",
        "text": "Wide Area Network",
        "textHi": "वाइड एरिया नेटवर्क (Wide Area Network)"
      },
      {
        "id": "B",
        "text": "Wireless Area Network",
        "textHi": "वायरलेस एरिया नेटवर्क"
      },
      {
        "id": "C",
        "text": "Web Access Network",
        "textHi": "वेब एक्सेस नेटवर्क"
      },
      {
        "id": "D",
        "text": "World Area Node",
        "textHi": "वर्ल्ड एरिया नोड"
      }
    ],
    "correct": "A",
    "explanation": "WAN (Wide Area Network) विस्तृत भौगोलिक दूरी (देश, महाद्वीप या विश्व) में फैले नेटवर्क को कहते हैं (उदा. इंटरनेट)।"
  },
  {
    "id": "c12-grand-q21",
    "chapter": "डेटा संरचना (Queue Deletion)",
    "question": "In a standard linear Queue data structure, deletion of an element always happens at which end?",
    "questionHi": "पंक्ति (Queue) डेटा संरचना में तत्वों का विलोपन (Deletion) हमेशा किस सिरे पर होता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Rear end (पीछे से)",
        "textHi": "Rear end (पीछे से)"
      },
      {
        "id": "B",
        "text": "Front end (आगे से)",
        "textHi": "Front end (आगे से)"
      },
      {
        "id": "C",
        "text": "Middle (मध्य से)",
        "textHi": "Middle (मध्य से)"
      },
      {
        "id": "D",
        "text": "Randomly",
        "textHi": "किसी भी स्थान से"
      }
    ],
    "correct": "B",
    "explanation": "क्यू (Queue) में नया तत्व REAR (पीछे) से प्रविष्ट होता है और तत्व का निष्कासन (Deletion) हमेशा FRONT (आगे) से होता है।"
  },
  {
    "id": "c12-grand-q22",
    "chapter": "पायथन अपवाद (ImportError)",
    "question": "Which built-in Python exception is raised when the requested module definition cannot be found or loaded?",
    "questionHi": "निम्न में से कौनसा अपवाद तब उठाया जाता है जब अनुरोधित मॉड्यूल की परिभाषा नहीं मिलती? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "EOFError",
        "textHi": "EOFError (ई.ओ.एफ़. त्रुटि)"
      },
      {
        "id": "B",
        "text": "TypeError",
        "textHi": "TypeError (प्रारूप त्रुटि)"
      },
      {
        "id": "C",
        "text": "ImportError",
        "textHi": "ImportError (आयात त्रुटि)"
      },
      {
        "id": "D",
        "text": "NameError",
        "textHi": "NameError (नाम त्रुटि)"
      }
    ],
    "correct": "C",
    "explanation": "ImportError तब उत्पन्न होता है जब import कथन किसी मॉड्यूल को ढूंढने या लोड करने में असमर्थ होता है।"
  },
  {
    "id": "c12-grand-q23",
    "chapter": "सांख्यिकी एवं विश्लेषण (Data Measures)",
    "question": "The mathematical arithmetic average of a given set of numbers is termed as ________.",
    "questionHi": "दिए गए मानों का गणितीय औसत (Average) क्या कहलाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Range",
        "textHi": "रेंज (Range)"
      },
      {
        "id": "B",
        "text": "Mean",
        "textHi": "माध्य (Mean)"
      },
      {
        "id": "C",
        "text": "Median",
        "textHi": "माध्यिका (Median)"
      },
      {
        "id": "D",
        "text": "Mode",
        "textHi": "बहुलक (Mode)"
      }
    ],
    "correct": "B",
    "explanation": "माध्य (Mean) सभी अवलोकनों के योग को कुल अवलोकनों की संख्या से भाग देकर प्राप्त औसत मान है।"
  },
  {
    "id": "c12-grand-q24",
    "chapter": "फाइल हैंडलिंग (Binary Read Mode)",
    "question": "Which file mode is used to open a file strictly in binary and read-only mode in Python?",
    "questionHi": "फाइल को बाइनरी और केवल पढ़ने (binary & read-only) के मोड में खोलने के लिए कौनसा मोड उपयोग किया जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "< a >",
        "textHi": "< a >"
      },
      {
        "id": "B",
        "text": "< a+ >",
        "textHi": "< a+ >"
      },
      {
        "id": "C",
        "text": "< +r >",
        "textHi": "< +r >"
      },
      {
        "id": "D",
        "text": "< rb >",
        "textHi": "< rb >"
      }
    ],
    "correct": "D",
    "explanation": "< rb > मोड बाइनरी फाइल (जैसे इमेज, ऑब्जेक्ट, पिकल फाइल) को केवल पढ़ने हेतु सुरक्षित रूप से खोलता है।"
  },
  {
    "id": "c12-grand-q25",
    "chapter": "कंप्यूटर नेटवर्क इतिहास (WWW Invention)",
    "question": "In which historic year was the World Wide Web (WWW) invented by Sir Tim Berners-Lee at CERN?",
    "questionHi": "वर्ल्ड वाइड वेब (WWW) का आविष्कार सर टिम बर्नर्स-ली द्वारा किस वर्ष किया गया था? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "1991",
        "textHi": "1991"
      },
      {
        "id": "B",
        "text": "1989",
        "textHi": "1989"
      },
      {
        "id": "C",
        "text": "1992",
        "textHi": "1992"
      },
      {
        "id": "D",
        "text": "1990",
        "textHi": "1990"
      }
    ],
    "correct": "B",
    "explanation": "सर टिम बर्नर्स-ली ने 1989 में सर्न (CERN) में वर्ल्ड वाइड वेब का आविष्कार किया था।"
  },
  {
    "id": "c12-grand-q26",
    "chapter": "डेटा संरचना वर्गीकरण (Data Structures vs Operations)",
    "question": "Which of the following is NOT a data structure but rather an operation performed on a structure?",
    "questionHi": "निम्न में से कौनसी डेटा संरचना (Data Structure) नहीं है, बल्कि एक संक्रिया (Operation) है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Stack",
        "textHi": "स्टैक (Stack)"
      },
      {
        "id": "B",
        "text": "Push",
        "textHi": "पुश (Push)"
      },
      {
        "id": "C",
        "text": "Queue",
        "textHi": "कतार (Queue)"
      },
      {
        "id": "D",
        "text": "Tree",
        "textHi": "ट्री (Tree)"
      }
    ],
    "correct": "B",
    "explanation": "Stack, Queue और Tree डेटा संरचनाएं हैं, जबकि Push स्टैक पर नया तत्व जोड़ने वाला एक ऑपरेशन है।"
  },
  {
    "id": "c12-grand-q27",
    "chapter": "डेटा ट्रांसमिशन मोड (Transmission Modes)",
    "question": "Strictly unidirectional communication between two connected devices is classified as:",
    "questionHi": "दो उपकरणों के मध्य एकदिशीय (Unidirectional) संचार क्या कहलाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Half-duplex",
        "textHi": "हाफ-डुप्लेक्स (Half-duplex)"
      },
      {
        "id": "B",
        "text": "Simplex",
        "textHi": "सिम्प्लेक्स (Simplex)"
      },
      {
        "id": "C",
        "text": "Full-duplex",
        "textHi": "फुल-डुप्लेक्स (Full-duplex)"
      },
      {
        "id": "D",
        "text": "Multiplex",
        "textHi": "मल्टीप्लेक्स"
      }
    ],
    "correct": "B",
    "explanation": "सिम्प्लेक्स (Simplex) मोड में संचार केवल एक ही दिशा में होता है (जैसे कीबोर्ड से कंप्यूटर या टीवी ब्रॉडकास्ट)।"
  },
  {
    "id": "c12-grand-q28",
    "chapter": "एसक्यूएल बाधाएं (SQL Constraints)",
    "question": "Which relational constraint ensures that no two records in a database table have matching non-null values in a column?",
    "questionHi": "दी गई बाधाओं में से कौन यह सुनिश्चित करती है कि तालिका के किसी कॉलम में सभी मान परस्पर भिन्न (distinct) हों? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "DEFAULT",
        "textHi": "DEFAULT"
      },
      {
        "id": "B",
        "text": "NOT NULL",
        "textHi": "NOT NULL"
      },
      {
        "id": "C",
        "text": "UNIQUE",
        "textHi": "UNIQUE"
      },
      {
        "id": "D",
        "text": "AUTO_INCREMENT",
        "textHi": "AUTO_INCREMENT"
      }
    ],
    "correct": "C",
    "explanation": "UNIQUE कंस्ट्रेंट स्तम्भ में डुप्लीकेट मान दर्ज होने से रोकता है।"
  },
  {
    "id": "c12-grand-q29",
    "chapter": "रिलेशनल मॉडल शब्दावली (RDBMS Terminology)",
    "question": "In relational database theory, each single row of data in a table/relation is technically termed as a:",
    "questionHi": "रिलेशनल डेटाबेस में किसी तालिका की प्रत्येक व्यक्तिगत पंक्ति (Row) को क्या कहा जाता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Attribute",
        "textHi": "एट्रिब्यूट (Attribute)"
      },
      {
        "id": "B",
        "text": "Degree",
        "textHi": "डिग्री (Degree)"
      },
      {
        "id": "C",
        "text": "Tuple",
        "textHi": "टपल (Tuple)"
      },
      {
        "id": "D",
        "text": "Cardinality",
        "textHi": "कार्डिनैलिटी (Cardinality)"
      }
    ],
    "correct": "C",
    "explanation": "तालिका की पंक्ति को Tuple, स्तम्भ को Attribute, पंक्तियों की संख्या को Cardinality तथा स्तम्भों की संख्या को Degree कहते हैं।"
  },
  {
    "id": "c12-grand-q30",
    "chapter": "एसक्यूएल भाषा उपसमूह (SQL Sublanguages)",
    "question": "What is the full expansion of DDL in Database Management Systems?",
    "questionHi": "डेटाबेस प्रबंधन प्रणाली में DDL का पूर्ण रूप क्या होता है? (बोर्ड 2022)",
    "options": [
      {
        "id": "A",
        "text": "Data Definition Language",
        "textHi": "डेटा डेफिनिशन लैंग्वेज (Data Definition Language)"
      },
      {
        "id": "B",
        "text": "Data Distribution Level",
        "textHi": "डेटा डिस्ट्रीब्यूशन लेवल"
      },
      {
        "id": "C",
        "text": "Database Direct Link",
        "textHi": "डेटाबेस डायरेक्ट लिंक"
      },
      {
        "id": "D",
        "text": "Data Decimal Language",
        "textHi": "डेटा डेसीमल लैंग्वेज"
      }
    ],
    "correct": "A",
    "explanation": "DDL (Data Definition Language) में CREATE, ALTER, DROP आदि कमांड्स आते हैं जो डेटाबेस संरचना का निर्माण एवं संशोधन करते हैं।"
  }
];

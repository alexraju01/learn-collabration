// ============================================================
// ======================= QUIZ SECTION =======================
// ============================================================

const quizQuestions = [
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choices: ["String", "Number", "Boolean", "Character"],
    answer: "Character",
  },
  {
    question:
      "What keyword is used to declare a variable that cannot be reassigned?",
    choices: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    question: "What is the output of: console.log(typeof NaN);",
    choices: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer: "'number'",
  },
  {
    question:
      "Which of these methods can be used to convert a string to an integer?",
    choices: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What will this expression return: Boolean(0);",
    choices: ["true", "false", "undefined", "null"],
    answer: "false",
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "Which keyword refers to the current object in JavaScript?",
    choices: ["this", "self", "object", "that"],
    answer: "this",
  },
  {
    question: "Which JavaScript method is used to write into an HTML element?",
    choices: [
      "document.write()",
      "document.getElementById()",
      "innerHTML",
      "console.log()",
    ],
    answer: "document.write()",
  },
  {
    question: "What does '===' mean in JavaScript?",
    choices: [
      "Equal value only",
      "Equal type only",
      "Equal value and type",
      "Assignment",
    ],
    answer: "Equal value and type",
  },
];

const quizContainer = document.getElementById("quiz-container");

function startQuiz() {}

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
const startBtn = document.getElementById("start-btn");
let quizCurrentIndex = 0;

const startQuiz = () => {
  quizCurrentIndex = 0;
  renderQuiz();
};

const renderQuiz = () => {
  const q = quizQuestions[quizCurrentIndex];

  quizContainer.innerHTML = `
    <h1>${q.question}</h1>
    <ul id="choices"></ul>`;

  const ul = document.getElementById("choices");

  q.choices.forEach((choice) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <button type="button" class="choice" dataset-value =${choice}>${choice}</button>`;
    ul.appendChild(li);
  });
};

document.addEventListener("click", (e) => {
  if (e.target === startBtn) {
    startQuiz();
    return;
  }
  //They have pressed on a choice
  if (e.target.matches("#choices .choice")) {
    const matches =
      e.target.innerHTML === quizQuestions[quizCurrentIndex].answer;

    if (quizCurrentIndex >= quizQuestions.length - 1) {
      // All questions complete
      quizContainer.innerHTML = `<h1>You completed the quiz</h1>`;
    } else if (matches) {
      //Correct Answer
      console.log("You pressed correct");
      quizCurrentIndex++;
      renderQuiz();
    } else {
      //Incorrect Answer
      console.log("You pressed wrong");
      quizCurrentIndex++;
      renderQuiz();
    }
   
  }
});

/**
 * Timer
 * While Function
 * Sleep 1 second,
 * decriment timer
 * loop
 *
 * if hits <= 0 {end}
 */

/**
 * LOGIC
 *
 * 1. Create startQuiz function that resets index of quiz
 * 2. Create renderQuiz function --> renders quiz
 * 3.
 */

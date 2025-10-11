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
const quizCountdown = document.getElementById("quiz-timer");
const quizScore = document.getElementById("quiz-score");
const startBtn = document.getElementById("start-btn");

let quizCurrentIndex = 0;
let score = 0;
const startingMins = 1.5;
let time = startingMins * 60;

function updateTime() {
  if (time < 0)
    return (quizContainer.innerHTML = "<h1>Ooops you ran out of time! </h1>");
  const mins = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds >= 10 ? seconds : "0" + seconds;

  quizCountdown.innerText = `${mins}:${seconds}`;
  time--;
}

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

let timmerId = null;

document.addEventListener("click", (e) => {
  if (e.target === startBtn) {
    startQuiz();
    quizScore.innerText = `Score: ${score}`;

    updateTime(); //Start timer and keep updating every second

    return (timmerId = setInterval(updateTime, 1000));
  }
  // Clicked a choice
  if (e.target.matches("#choices .choice")) {
    const matches =
      e.target.innerHTML === quizQuestions[quizCurrentIndex].answer;

    if (matches) {
      score++;
      quizScore.innerText = `Score: ${score}`;
    } else {
      time -= 5;
      updateTime();
    }

    quizCurrentIndex++;
    console.log(quizCurrentIndex);
    renderQuiz();

    if (quizCurrentIndex >= quizQuestions.length - 1) {
      quizContainer.innerHTML = `<h1>You completed the quiz</h1>`;
      clearInterval(timmerId);
    }
  }
});

/**
 * check if selected choice
 * if choice correct - score++
 * if choice incorrect - timer -= 5s
 * if all questions complete - render finish quiz
 * render quiz
 */

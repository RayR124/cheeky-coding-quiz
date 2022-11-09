const startBtn = document.querySelector(".start-btn");
const viewScores = document.querySelector(".highscores");
const intro = document.querySelector(".intro");
const start = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const timerEl = document.querySelector(".seconds");

function startQuiz() {
  loadQuestion(questions);
}

// This is the Timer Object 
const timer = {
  timeRemaining: 60,
  interval: undefined,
}

// This starts the timer when the "Start Quiz" button is clicked.
  function startTimer() {
    const seconds = 60;
    function tick() {
        let counter = document.getElementById("seconds");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's Up!");
            endQuiz();
        }
    }
    tick();
  }

// This allows the timer to be decreased if the user answers a question incorrectly.
decreasetime();
{
  this.timeRemaining -= 10;
}

// This stops the timer if the time remaining falls below zero, or the last question has been answered.
stopTimer(); {
  clearInterval(timerEl);
}

function endQuiz() {
  timer.stopTimer();
};

function loadQuestion() {
  currentQuestion = 1;
  document.querySelector(questions) = "";
}

  const questions = new Map([
    [1, [["question", "Which of the following can not be stored in Arrays?"],
      [1, "Numbers and Strings"],
      [2, "Other Arrays"],
      [3, "Booleans"],
      [4, "All of the above can be store in Arrays"],
      ["answer", 4],
      [true, "Correct!"],
      [false, 'Wrong! The correct answer was "All of the above can be stored in Arrays."'],
    ],],
    [2, [["question", "When assigned to variables, string values must be enclosed within what?",],
      [1, "Commas"],
      [2, "Curly Brackets"],
      [3, "Quotation Marks"],
      [4, "Parenthesis"],
      ["answer", 3],
      [true, "Correct!"],
      [false, 'Wrong! The answer is "Quotation Marks"'],
    ],],
    [3, [["question", "Which of the following is NOT a commonly used Data Type?:"],
      [1, "Alerts"],
      [2, "Booleans"],
      [3, "Strings"],
      [4, "Numbers"],
      ["answer", 1],
      [true, "Correct!"],
      [false, 'Wrong! The answer is "Alerts"'],
    ],],
    [4, [["question", "Which of the following conditions are used to enclose an IF/ELSE statement?"],
      [1, "Square Brackets"],
      [2, "Parenthises"],
      [3, "Curly Brackets"],
      [4, "Quotes"],
      ["answer", 2],
      [true, "Correct!"],
      [false, 'Wrong! The answer is "Parenthises"'],
    ],],
    [5, [["question", "What command is used to add a comment to a single line of code in JavaScript?"],
      [1, "/* comment */"],
      [2, "// comment "],
      [3, "<!-- comment --!>"],
      [4, "// comment //"],
      ["answer", 2],
      [true, "Correct!"],
      [false, 'Wrong! The correct answer was "// comment".'],
      ],],
  ]);

  let currentQuestion = 1;

function checkAnswer(event) {
  const element = event.target;
  if (element.tagName === "BUTTON") {
    const choiceSelected = element.getAttribute("choice-index");
    const question = (questions.get(currentQuestion));
    choiceResult.textContent = question.get(
      question.get("answer") == choiceSelected);
    if (choiceResult.textContent !== "Correct!") {
      timer.decreasetime();
    }
  }
  if (currentQuestion < [...questions.keys()].length) {
    currentQuestion += 1;
    loadQuestion(questions.get(currentQuestion));
  } else {
    endQuiz();
    timer.stopTimer();
  }
  setTimeout(() => 1000);
};

document.querySelector(".highscores").addEventListener("click", function () {
  showHighScores()
});


// Displays Highscores
function showHighScores() {
  document.querySelector(".highschores");
  viewScores.querySelector("ul");
  viewScores.appendChild(score);

  for (const [index, item] of showHighScores.entries()) {
    const score = document.createElement("li");
    score.textContent = `${index + 1}. ${item.name} | Score: ${item.score}`;
    document.querySelector(".highscores").appendChild(score);
  }
};

startBtn.addEventListener("click", function () {
  startQuiz();
  countdown();
  startTimer();
  loadQuestion(questions.currentQuestion);
  document.querySelector(intro).classList.add("hidden");
});
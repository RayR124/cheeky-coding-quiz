const startBtn = document.querySelector(".start-btn");
const viewScores = document.querySelector(".highscores");
const intro = document.querySelector(".intro");
const start = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const timerEl = document.querySelector(".seconds");
const q1 = document.querySelector(".q1");

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

startBtn.addEventListener("click", function (showQ1) {
  startQuiz();
  countdown();
  startTimer();
  loadQuestion(questions.currentQuestion);
  document.getElementById(h1).classList.add("none");
});

function showQ1 () {
  document.getElementByid('q1').style.display="normal";
}
const startBtn = document.querySelector(".start-btn");
const viewScores = document.querySelector(".highscores");
const intro = document.querySelector(".intro");
const start = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const timer = document.querySelector(".seconds");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

// This is the Timer Object 
const timerEl = {
  timeRemaining: 60,
  interval: undefined,
}

// This allows the timer to be decreased if the user answers a question incorrectly.
function decreasetime() {
  timerEl.timeRemaining -= 10;
}

// This starts the timer when the "Start Quiz" button is clicked.
function startTimer() {
  let seconds = 60;
  function tick() {
    let counter = document.querySelector(".seconds");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      alert("Time's Up!");
      endQuiz();
    }
  }
  tick();
}

// This stops the timer if the time remaining falls below zero, or the last question has been answered.
function stopTimer() {
  clearInterval(timer);
}

function endQuiz() {
  timer.stopTimer();
};

// This starts the timer, hides the intro page, and displayes the first question.
startBtn.addEventListener("click", myFunction);

function myFunction() {
  startTimer();
  showQ1();
  intro.classList.add("hidden");
};

function showQ1() {
  q1.classList.remove("hidden");
}

function showQ1() {
  if (/*user checks A, B, or C, then hits submit*/) {
    alert("ERRT! -10 seconds! Try Again!");
    decreasetime();
  } else if (/*user clicks nothing and hits submit*/) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q1.classList.remove("hidden");
    alert("Hey! You got it right!");
    /*this loads the next question*/
  }
}

function showQ2() {
  q2.classList.remove("hidden");
}

function showQ3() {
  q3.classList.remove("hidden");
}

function showQ4() {
  q4.classList.remove("hidden");
}

function showQ5() {
  q5.classList.remove("hidden");
}
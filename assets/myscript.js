const startBtn = document.querySelector(".start-btn");
const endQuizBtn = document.querySelector(".endQuiz")
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
const submit1 = document.querySelector(".submit1")
const submit2 = document.querySelector(".submit2")
const submit3 = document.querySelector(".submit3")
const submit4 = document.querySelector(".submit4")

// This is the Timer Object 
const timerEl = {
  timeRemaining: 60,
  interval: undefined,
}

// This allows the timer to be decreased if the user answers a question incorrectly.
function decreaseTime() {
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
}

function showQ1() {
  q1.classList.remove("hidden");
}

submit1.addEventListener("click", showQ2);

function showQ2() {
  if (document.getElementById("A1", "B1", "C1").checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (document.getElementById("").checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q2.classList.remove("hidden");
    alert("Hey! You got it right!");
  }
}

submit2.addEventListener("click", showQ3);

function showQ3() {
  if (document.getElementById("A2", "B2", "D2").checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (document.getElementById("").checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q3.classList.remove("hidden");
    alert("Hey! You got it right!");
  }
}

submit3.addEventListener("click", showQ4);

function showQ4() {
  if (document.getElementById("B3", "C3", "D3").checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (document.getElementById("").checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q4.classList.remove("hidden");
    alert("Hey! You got it right!");
  }
}

submit4.addEventListener("click", showQ5);

function showQ5() {
  if (document.getElementById("A4", "C4", "D4").checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (document.getElementById("").checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q5.classList.remove("hidden");
    alert("Hey! You got it right!");
  }
}

function finalQ() {
  if (document.getElementById("A5", "C5", "D5").checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (document.getElementById("").checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    alert("Hey! You did it!!!");
    stopTimer();
  }
}

endQuizBtn.addEventListener("click", endQuiz(), finalQ());
const startBtn = document.querySelector(".start-btn");
const endQuizBtn = document.querySelector(".endQuiz")
const viewScores = document.querySelector(".highscoreList");
const enterInitBtn = document.querySelector(".enterinitials");
const intro = document.querySelector(".intro");
const outtro = document.querySelector(".outtro");
const start = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
let timer = document.querySelector(".seconds");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const submit1 = document.querySelector(".submit1")
const submit2 = document.querySelector(".submit2")
const submit3 = document.querySelector(".submit3")
const submit4 = document.querySelector(".submit4")
const superSecret = document.querySelector(".secretScreen");
let seconds = 60;
let gameOver = false;

// This starts the timer when the "Start Quiz" button is clicked.
function startTimer() {
  function tick() {
    let counter = document.querySelector(".seconds");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (!gameOver && seconds > 0) {
      setTimeout(tick, 1000);
    } else if (seconds === 0) {
      alert("Time's Up!");
      endQuiz();
    }
  }
  tick();
}

// This stops the timer when the final "submit" button is pressed and logs high scores to local storage.
function endQuiz() {
  q5.classList.add("hidden");
  outtro.classList.remove("hidden");
  const savedHighScores = JSON.parse(localStorage.getItem("initials")) || [];
    const initials = document.getElementById("initials").value;
    const newScore = {
      initials,
      score:seconds
    }
    localStorage.setItem("initials", JSON.stringify(savedHighScores));
};

// This detracts 10 seconds from the timer upon a wrong answer press.
function decreaseTime() {
  seconds -= 10;
}

// This starts the timer, hides the intro page, and displayes the first question.
startBtn.addEventListener("click", myFunction);

// This starts the quiz and reveals the first questions.
function myFunction() {
  startTimer();
  showQ1();
  intro.classList.add("hidden");
}

function showQ1() {
  q1.classList.remove("hidden");
}

// This hides the previous question if answered correctly and shows the next question.
submit1.addEventListener("click", showQ2);

function showQ2(event) {
  const a1 = document.getElementById("A1");
  const b1 = document.getElementById("B1");
  const c1 = document.getElementById("C1");
  const d1 = document.getElementById("D1");
  event.preventDefault();
  if (a1.checked || b1.checked || c1.checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (!a1.checked && !b1.checked && !c1.checked && !d1.checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q2.classList.remove("hidden");
    alert("Hey! You got it right!");
    q1.classList.add("hidden");
  }
}

// This hides the previous question if answered correctly and shows the next question.
submit2.addEventListener("click", showQ3);

function showQ3(event) {
  const a2 = document.getElementById("A2");
  const b2 = document.getElementById("B2");
  const d2 = document.getElementById("D2");
  const c2 = document.getElementById("C2");
  event.preventDefault();
  if (a2.checked || b2.checked || d2.checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (!a2.checked && !b2.checked && !c2.checked && !d2.checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q3.classList.remove("hidden");
    alert("Hey! You got it right!");
    q2.classList.add("hidden");
  }
}

// This hides the previous question if answered correctly and shows the next question.
submit3.addEventListener("click", showQ4);

function showQ4(event) {
  const b3 = document.getElementById("B3");
  const c3 = document.getElementById("C3");
  const d3 = document.getElementById("D3");
  const a3 = document.getElementById("A3");
  event.preventDefault();
  if (b3.checked || c3.checked || d3.checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (!a3.checked && !b3.checked && !c3.checked && !d3.checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q4.classList.remove("hidden");
    alert("Hey! You got it right!");
    q3.classList.add("hidden");
  }
}

// This hides the previous question if answered correctly and shows the next question.
submit4.addEventListener("click", showQ5);

function showQ5(event) {
  const a4 = document.getElementById("A4");
  const c4 = document.getElementById("C4");
  const d4 = document.getElementById("D4");
  const b4 = document.getElementById("B4");
  event.preventDefault();
  if (a4.checked || c4.checked || d4.checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (!a4.checked && !b4.checked && !c4.checked && !d4.checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    q5.classList.remove("hidden");
    alert("Hey! You got it right!");
    q4.classList.add("hidden");
  }
}

// This hides the previous question if answered correctly and shows the outtro page.
endQuizBtn.addEventListener("click", finalQ);

function finalQ(end) {
  const a5 = document.getElementById("A5");
  const c5 = document.getElementById("C5");
  const d5 = document.getElementById("D5");
  const b5 = document.getElementById("B5");
  end.preventDefault();
  if (a5.checked || c5.checked || d5.checked) {
    alert("ERRT! -10 seconds! Try Again!");
    decreaseTime();
  } else if (!a5.checked && !b5.checked && !c5.checked && !d5.checked) {
    alert("Hey! You gotta check at least 1 answer!");
  } else {
    alert("Hey! You did it! You completed the quiz!!!"); {
    }
  }
  gameOver = true;
  endQuiz();
}

// This logs the user's high score and displays it in a list.
viewScores.addEventListener("click", showHighScores);

function showHighScores() {
  intro.classList.add("hidden");
  // add the list of scores saved to local storage displayed here
}
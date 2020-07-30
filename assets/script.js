// DOM elements
var startQuiz = document.querySelector("#start-quiz");
var questionsDiv = document.querySelector("#questions-div");
var introDiv = document.querySelector(".intro-div");
var resultDiv = document.querySelector("#result-div");
var nextDiv = document.querySelector("#next-div");
var resultScreen = document.querySelector("#result-screen");

// global variables

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    question: "The condition in an if / else statement is enclosed within:",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correctAnswer: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "String values must be enclosed within___ when being assigned to variables",
    answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },
  {
    question:
      "A very useful too used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "Terminal/Bash", "For loops", "console.log"],
    correctAnswer: "console.log",
  },
];

var secondsLeft = 75;
var score = 0;
var index = 0;
var button;

// functions

function startGame() {
  introDiv.classList.add("hide-div");
  startTimer();
  displayQuestions();
}

function displayQuestions() {
  

//   var currentQuestion = document.createElement("h3");
//   currentQuestion.textContent = questions[index].question;
//   questionsDiv.appendChild(currentQuestion);

  if (index < questions.length) {
    var currentQuestion = document.createElement("h3");
    currentQuestion.textContent = questions[index].question;
    questionsDiv.appendChild(currentQuestion);
    for (let i = 0; i < questions[index].answers.length; i++) {
      button = document.createElement("button");
      btnData = questions[index].answers[i];
      button.textContent = btnData;
      questionsDiv.appendChild(button);
      button.classList.add("btn-display");
      button.setAttribute("id", btnData);
      questionsDiv.addEventListener("click", buttonClicked);
    }
    index++;
  } else {
    endGame();
  }
}

function buttonClicked(event) {
  nextButton();

  if (event.target.matches("button")) {
    var result = document.createElement("h4");
    resultDiv.appendChild(result);
    var currentButton = event.target.id;
    var btnArray = document.querySelectorAll(".btn-display");

    for (i = 0; i < btnArray.length; i++) {
      btnArray[i].disabled = true;
    }

    if (currentButton === questions[index - 1].correctAnswer) {
      result.textContent = "Good answer";
      score++;
    } else {
      result.textContent = "Wrong answer";
    }
  }
}

function nextButton() {
  var nextBtn = document.createElement("button");
  nextBtn.textContent = "Next ▶";
  nextBtn.setAttribute("class", "next");
  nextDiv.appendChild(nextBtn);

  nextBtn.addEventListener("click", function () {
    questionsDiv.innerHTML = "";
    resultDiv.innerHTML = "";
    nextDiv.innerHTML = "";
    displayQuestions();
  });
}

function endGame() {
  var result = document.createElement("h3");
  result.textContent = "Your total score is " + score;
  resultScreen.appendChild(result);
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    var countDown = document.querySelector("#countdown");
    countDown.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

// function that monitors the click on the answer and displays the next question

// on click events

startQuiz.addEventListener("click", startGame);


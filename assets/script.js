// DOM elements
var startQuiz = document.querySelector('#start-quiz')
var questionsDiv = document.querySelector('#questions-div')
var introDiv = document.querySelector('.intro-div')

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
    answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "String values must be enclosed within___ when being assigned to variables",
    answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },
  {
    question: "A very useful too used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "Terminal/Bash", "For loops", "console.log"],
    correctAnswer: "console.logs",
  },
];

var secondsLeft = 10




// functions

function startGame() {
    introDiv.classList.add('hide-div')
    startTimer()
    displayQuestions()
}

function displayQuestions() {

    // get the question and append it to the page
    var currentQuestion = document.createElement('h3')
    currentQuestion.textContent = questions[0].question
    questionsDiv.appendChild(currentQuestion)


    // display four buttons and store content as data-attribute
    for ( i = 0 ; i < questions[0].answers.length ; i++) {
        var button = document.createElement('button')
        btnData = questions[0].answers[i]
        button.textContent = btnData
        questionsDiv.appendChild(button)
        button.classList.add('btn-display')
        button.setAttribute('id', btnData)
    }
    questionsDiv.addEventListener('click', buttonClicked)
}

function buttonClicked(event){
    if(event.target.matches('button')) {
        var currentButton = event.target.id
        if(currentButton === questions[0].correctAnswer) {
            console.log('this is a good result')
        } else {
            console.log('this is not a good result')
        }
    }
}


function endGame(){
    console.log('end game')

}

function startTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft --
        var countDown = document.querySelector('#countdown')
        countDown.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            endGame()
        }
    }, 1000)
}

// function that monitors the click on the answer and displays the next question

// on click events

startQuiz.addEventListener('click', startGame)



// when bitton start is clicked, call a function that will display the questions

// DOM ELEMENTS
// startQuiz = document.querySelector('#start-quiz')
// questionsDiv = document.querySelector('#questions-div')
// hideDiv = document.querySelector('#hide-div')

// var secondsLeft = 76

// var myQuestions = [
//     {
//         question: "Commonly used data types DO NOT include",
//         answers: {
//             a: "strings",
//             b: "booleans",
//             c: "alerts",
//             d: "numbers"
//         },
//         correctAnswer: "c"
//     }
// ]

// var questionArray = ["this is a question"]

// // BUTTON START QUIZ
// startQuiz.addEventListener("click", function(event) {
//     hideDiv.style.display = 'none'
//     question1()
//     timer()
// })

// QUIZ QUESTIONS
// function question1() {
//     var h3Tag = document.createElement('h3')
//     var buttonArray = ['1. Strings', '2. booleans', '3. alerts', '4. numbers']

//     h3Tag.textContent = questionArray[0]
//     questionsDiv.appendChild(h3Tag)

//     for(let i = 0; i < buttonArray.length ; i++){
//         var button = button + [i]
//         button = document.createElement('button')
//         button.textContent = buttonArray[i]
//         questionsDiv.appendChild(button)
//         button.setAttribute("style", "display: block;")
//         button.classList.add('.button-answer')
//     }

//     // document.querySelector('button-answer').addEventListener("click")

// }

// TIMER FUNCTION
// function timer() {
//     var timerInterval = setInterval(function(){
//         secondsLeft --
//         document.querySelector('#countdown').textContent = secondsLeft

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval)
//         }
//     }, 1000)
// }

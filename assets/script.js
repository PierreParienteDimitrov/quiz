// DOM ELEMENTS
startQuiz = document.querySelector('#start-quiz')
questionsDiv = document.querySelector('#questions-div')
hideDiv = document.querySelector('#hide-div')

var secondsLeft = 76

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

var questionArray = ["this is a question"]

// BUTTON START QUIZ
startQuiz.addEventListener("click", function(event) {
    hideDiv.style.display = 'none'
    question1()
    timer()
})

// QUIZ QUESTIONS
function question1() {
    var h3Tag = document.createElement('h3')
    var buttonArray = ['1. Strings', '2. booleans', '3. alerts', '4. numbers']

    h3Tag.textContent = questionArray[0]
    questionsDiv.appendChild(h3Tag)

    for(let i = 0; i < buttonArray.length ; i++){
        var button = button + [i]
        button = document.createElement('button')
        button.textContent = buttonArray[i]
        questionsDiv.appendChild(button)
        button.setAttribute("style", "display: block;")
        button.classList.add('.button-answer')
    }

    // document.querySelector('button-answer').addEventListener("click")


}

// TIMER FUNCTION
function timer() {
    var timerInterval = setInterval(function(){
        secondsLeft --
        document.querySelector('#countdown').textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}
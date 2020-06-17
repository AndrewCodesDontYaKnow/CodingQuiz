// VARIABLES
// a variable to hold questions
const questions = [
    {
        question: "Which CSS position value is the default?",
        answer: [
            { text: "Relative", correct: false },
            { text: "Static", correct: true },
            { text: "Fixed", correct: false },
            { text: "Absolute", correct: false }
            
        ]
    }, {
        question: "What are the three main coding languages that make up the internet?",
        answer: [ 
            { text: "HTML, C#, Java", correct: false },
            { text: "Ruby, C+, PHP", correct: false },
            { text: "Python, Bootstrap, SQL", correct: false },
            { text: "HTML, CSS, Javascript", correct: true }
            
        ]
    }, {
        question: "Which of the following is not a javascript conditional statement?",
        answer: [ 
            { text: "if", correct: false },
            { text: "else if", correct: false },
            { text: "else or", correct: true },
            { text: "switch", correct: false }
        ]
    }, {
        question: "Which of the following is not a javascript conditional statement?",
        answer: [ 
            { text: "if", correct: false },
            { text: "else if", correct: false },
            { text: "else or", correct: true },
            { text: "switch", correct: false }
        ]
    }, {
        question: "Which Bootstrap class would style a column to be 1/3 the size of its container width?",
        answer: [ 
            { text: "col-md-12", correct: false },
            { text: "col-4", correct: true },
            { text: "col-1-3", correct: false },
            { text: "col-lg-8", correct: false }
        ]
    }, {
        question: "What is the Bootstrap class to style a column that is 1/3 the size of its container width?",
        answer: [ 
            { text: "col-md-12", correct: false },
            { text: "col-4", correct: true },
            { text: "col-1-3", correct: false },
            { text: "col-lg-8", correct: false }
        ]
    }, {
        question: "Which phrase below describes jQuery most accurately?",
        answer: [ 
            { text: "Web development language", correct: false },
            { text: "Used for animating images", correct: false },
            { text: "The whole internet runs on jQuery", correct: false },
            { text: "A Javascript library", correct: true }
        ]
    }, {
        question: "What is another name for Javascript?",
        answer: [ 
            { text: "There is no other name", correct: true },
            { text: "Java", correct: false },
            { text: "jQuery", correct: false },
            { text: "Ajax", correct: false },
        ]
    }
]
// a variable to hold correct answers                      
var rightAnswers = ["Static"]
// a variable to hold incorrect answers
var wrongAnswers = ["Relative", "Fixed", "Absolute"]
// a variable for the start button
var startButton = document.querySelector('#start-btn')
// a variable for the next button
var nextButton = document.querySelector('#next-btn')
// a variable for the question container
const questionContainerElement = document.querySelector('#question-container')
// shuffled questions and current question index variables
let shuffledQuestions, currentQuestionIndex
// a variable for the question text element
const questionElement = document.querySelector('#question-text')
// a variable to control the answer button elements
const answerButtonsElement = document.querySelector('#answer-buttons')
// variable for starting minutes
const startingMinutes = 3; 
// variable for time in seconds
let time = startingMinutes * 60;
// variable for the countdown element
const countdownEl = document.getElementById("countdown")
// a variable for high score list
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// a variable to set the length of the high score list
const maxHighScores = 5;
// a variable to represent the current players score
let mostRecentScore = localStorage.getItem("mostRecentScore")
// a variable to hold the players initials
const initialsInput = localStorage.getItem("initialsInput")
console.log(highScores)
    
    
//     [{
//     initials: "ARS",
//     score: 3
// }]
// a variable for the current score

console.log("HIGH SCORE LIST:" + highScores)


// HIGH SCORE PSEUDO CODE
// an array of objects hiScoreList will store the number of the score and initials associated with it in the player object
// on game start, IF there is no hiScoreList in localStorage, we create the hiScoreList,
// add it to storage, then create the player object and add it to hiScoreList 
// IF there IS a hiScoreList in localStorage, we only create the player object and add it to hiScoreList
// each time a correct answer is chosen, a point is added to the score value in the player object
// if the score is in the top 5 scores in local storage, the player is asked to add their initials
// their score and initials are added to the hiScoreList, the list is sorted, and the top 5 scores are displayed








// EVENT LISTENERS
// listen for the page load and hide the next btn
addEventListener("load", function() {
    document.querySelector("#next-btn").classList.add("hide")
})
// listen for a click on the start button to startGame
startButton.addEventListener("click", startGame)
// listen for a click on the next button to set the next question
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()
})


// FUNCTIONS

// create the hiscorelist and player or just player if hiScoreList exists
function createPlayer() {
    if (localStorage.getItem('initials')) {
        // create player object
    } else {
        localStorage.setItem("highScores", JSON.stringify(["10", "4"]));
        console.log(JSON.parse(localStorage.getItem("highScores")))
    }
}

saveHighScore = e => {
    console.log("clicked the save button");
    // e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initialsInput
    }
    // add the score to the highScores array
    highScores.push(score);
    // sort the array by highest score
    highScores.sort( (a,b) => b.score - a.score );
    // cut everything off after 5 items in aray 
    highScores.splice(5);
    // store the highScores array in localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    console.log(highScores)
}
saveHighScore()


// a function to start the timer
function startTimer() {
    setInterval(updateCountdown, 1000) 
}
// stop the timer, removes the timer element and fires the showResults function
function stopTimer() {
    $("#countdown").remove();
    showResults();
}

function showResults() {
    // if the current score is in the top 5 in local storage, ask player to enter initials
    // show a save button if they enter their initials too
    // if they are not in the top 5, display the top 5 list and restart button
}




// a function to update the countdown
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`
    } else {
        seconds = seconds;
    }

    countdownEl.textContent = `${minutes}:${seconds}`;

    if (countdownEl.textContent == "0:00") {
    stopTimer()
    }
    time--;
}



// a function to start the game
function startGame() {
    console.log('game started');
    startButton.classList.add('hide');
    // randomize which question is shown with sort()
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    // set the currect question index to 0
    currentQuestionIndex = 0
    // remove the class 'hide' from the question container element to show it
    questionContainerElement.classList.remove('hide');
    // call the set next question function to bring up the q and a's
    createPlayer();
    startTimer();
    setNextQuestion();
}



// a function to present the questions and answers
function setNextQuestion(questionAnswer) {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// a function to clear the old q's and a's when the new ones get added
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



// a function to display the question and answers to the user
function showQuestion(question) {
    nextButton.classList.add('hide')
    // display question by setting the q element's inner text to that of the question object in question array
    questionElement.innerText = question.question
    // for each answer in the answer array of the q object, create a button, set the innerText to the answer value,
    // add the class 'btn' to the button, and if the answer's correct value is true, give it a correct attribute
    // with dataset
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } else {
            button.dataset.correct = answer.correct
        }
        // add an event listener to the button, that listens for a click, and fires off selectAnswer
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button)
    })}



// a function for the user to select their answer
function selectAnswer(e) {
    // a variable for the button that got clicked on
    const selectedButton = e.target
    console.log(selectedButton.dataset)
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    // if the selected button's dataset.correct is true, add a point to the score
    if (selectedButton.dataset.correct == "true") {
        console.log("a correct answer was chosen");
        mostRecentScore++;
    // if the selected buttons dataset.correct is false, decrease the time remaining
    } else if (selectedButton.dataset.correct == "false") {
        console.log("a wrong answer was chosen")
    }
    // if we are NOT on the last question...show the nextButton
    if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide') 
        // else if we ARE on the last question, show restart button, add score to highScores, and showResults
    } else { startButton.innerText = 'Restart'
    startButton.classList.remove('hide');
    saveHighScore();
    showResults();
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


// a function to take in user choice and compare it to the right answer, then return right or wrong
function checkAnswer() {

}

// a function to display the outcome of the game

// function to take input and add it to the high score list if it is high enough, then display the high scor

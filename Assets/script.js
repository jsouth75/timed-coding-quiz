// add user score to local storage.  It will rewrite the top score each time, so give value to that user name.
// print user info in top scores


const startButton = document.getElementById('start-btn');
const startBtnContainer = document.getElementById('start-container');
const questionContainerElement = document.getElementById("question-container");
const timerElement = document.getElementById("countdown");
const questionElement = document.getElementById("question");
const answerBtnElement  = document.getElementById("answer-buttons");
// const nextButton = document.getElementById('next-btn')
const userInitials = document.getElementById('initials');
const endQuizContainer = document.getElementById('end-quiz-container');
const storeScores = document.getElementById('storeScores');
const submitInitials =document.getElementById('submitInitials');
// const scoreCard = JSON.stringify({table:"students",limit:20});
var scoreText;
var score = 0;
let shuffledQuestions, currentQuestionsIndex, currentScore;
let timeRemaining = 120;

// start quiz
startButton.addEventListener('click', startQuiz);
function startQuiz() {
    startBtnContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    currentScore = 0;
    questionContainerElement.classList.remove('hide');
    timerElement.classList.remove('hide');
    startTimer();
    setNextQuestion();
};

// stop quiz
function stopQuiz() {
    // score.setAttribute("") ("currentScore + timeRemaining/10}!`)
    endQuizContainer.setAttribute("class", "show")
    questionContainerElement.setAttribute("class", "hide")
    // ask for initials
}

// starts questions
function setNextQuestion() {
    resetState()
    showNextQuestion(shuffledQuestions[currentQuestionsIndex])
};

// shuffles questions
function showNextQuestion(shuffledQuestion) {
    questionElement.innerText = shuffledQuestion.question
    shuffledQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.choices;
        button.classList.add('btn')
        button.addEventListener('click', (e) => selectAnswer(e))
        console.log(button)
        answerBtnElement.appendChild(button)
    });
}

// timer function starts when start StartQuiz btn is "clicked"
function startTimer() {
    var quizInterval = setInterval(function(){
        timeRemaining--;
        document.querySelector("#time").textContent = timeRemaining;

        if(timeRemaining <= 0 || currentQuestionsIndex >= questions.length) {
            clearInterval(quizInterval)
        }
    }, 1000)
}

function resetState() {
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
        document.querySelector("#reset").textContent = timeRemaining;
        if(timeRemaining <= 0 || currentQuestionsIndex >= questions.length) {
            clearInterval(quizInterval)
        }
    }
}

function selectAnswer(e) {
    var btnClicked = e.target
    shuffledQuestions[currentQuestionsIndex].answer.forEach(option => {
        if (btnClicked.innerText === option.choices) {
            if (option.decision) {
                btnClicked.classList.add("btn-correct");
                currentScore += 10;
            } else {
                btnClicked.classList.add("btn-wrong");
                timeRemaining -= 10;
            }
        };
    });
    currentQuestionsIndex++;
    if (shuffledQuestions.length < currentQuestionsIndex + 1) {
        setTimeout(() => {
            stopQuiz();
        })
    }   else {
        setTimeout(() => {
            setNextQuestion();
        })
    }
};

// display scores
function scoreCard() {
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
        document.querySelector("#reset").textContent = timeRemaining;
        if(timeRemaining <= 0 || currentQuestionsIndex >= questions.length) {
            clearInterval(quizInterval)
        }
    }
}


function highScore(points) {
    var initials = document.getElementById("initials").ariaValueMax;
    if (localStorage.getItem('initials') == null) {
        localStorage.setItem('initials', '[]')
    }
    if (localStorage.getItem('points') == null) {
        localStorage.setItem('points', '[]');
    }
    var pointList = JSON.parse(localStorage.getItem('points'));
    pointList.push(points);
    localStorage.setItem('points', JSON.stringify(pointList));
    var initialList = JSON.parse(localStorage.getItem('initials'));
    initialList.push(initials);
    localStorage.setItem('initial', JSON.stringify(initialList));
    showHighScores();
    console.log("show me the score")
}

function showHighScores() {
    scoreCard();
}


const questions = [
    {
        question: "What is JavaScript?",
        answer: [
            {choices: "foreign language", decision:false},
            {choices: "name of a band", decision:false},
            {choices: "programming language", decision:true},
            {choices: "coffee shop", decision:false}
        ]
    },
    
    {
        question: "Who invented JavaScript?",
        answer: [
            {choices: "Mitchell Baker", decision:false},
            {choices: "Brendan Eich", decision:true},
            {choices: "Steve Jobs", decision:false},
            {choices: "Abby Covert", decision:false}
        ]
    },

    {
        question: "Which one is NOT used to declare a JavaScript variable?",
        answer: [
            {choices: "var", decision:false},
            {choices: "const", decision:false},
            {choices: "let", decision:false},
            {choices: "text", decision:true}
        ]
    },

    {
        question: "What is the result of an Array pop() method?",
        answer: [
            {choices: "deletes the entire array", decision:false},
            {choices: "deletes the first element of an array", decision:false},
            {choices: "deletes the last element of an array", decision:true},
            {choices: "adds an element to an array", decision:false}
        ]
    },

    {
        question: "What is a while loop ?",
        answer: [
            {choices: "loops through a block of code as long as a specified condition is true", decision:true},
            {choices: "loops through a block of code as long as a specified condition is false", decision:false},
            {choices: "loops through a random set of codes", decision:false},
            {choices: "none of the above", decision:false}
        ]
    },

    {
        question: "What is used for a single line comment?",
        answer: [
            {choices: "<!-- -->", decision:false},
            {choices: "/*  */", decision:false},
            {choices: "//", decision:true},
            {choices: "\\", decision:false}
        ]
    },

    {
        question: "Which of the following would be a reason to use an Array?",
        answer: [
            {choices: "to declare a function", decision:false},
            {choices: "use as a variable to hold more than one value", decision:true},
            {choices: "to list out multiple functions", decision:false},
            {choices: "to override a function", decision:false}
        ]
    },

    {
        question: "What does the Arrow functions allow us to do?",
        answer: [
            {choices: "write an array", decision:false},
            {choices: "select one of many code blocks to be excuted", decision:false},
            {choices: "jumps out of a loop", decision:false},
            {choices: "write shorter function syntax", decision:true}
        ]
    },

    {
        question: "What does a Boolean represent?",
        answer: [
            {choices: "Value that is either true or false", decision:true},
            {choices: "specified date and time", decision:false},
            {choices: "a kind of loop", decision:false},
            {choices: "math object", decision:false}
        ]
    },

    {
        question: "Which method would you use to sort an array alphabetically?",
        answer: [
            {choices: "sort(order)", decision:false},
            {choices: "sort()", decision:true},
            {choices: "sort(a)", decision:false},
            {choices: "sort.alpha()", decision:false}
        ]
    },
];
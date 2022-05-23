const startButton = document.getElementsByClassName("controls");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById("question");
// const answerBtnElement  = document.getElementById("answer-btn");
// const nextButton = document.getElementById('next-btn')
// let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide')
    // setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showNextQuestion(shuffledQuestions[currentQuestionsIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
    }
}

function selectAnswer() {

};

const questions = [
    {
        question: "What is JavaScript?",
        choices: ["foreign language", "name of a band", "programming language", "other"],
        answer: 3
    },
    
    {
        question: "What is a JavaScript function?",
        choices: ["code designed to perform a particular task", "other", "another", "last choice"],
        answer: 1
    },
];
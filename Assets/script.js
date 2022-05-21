var timer = document.querySelector('#timer')
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(e) {
    const start = prompt("questions");
    document.body.innerHTML = "start";
});


// var timeleft = 20;
// var downloadTimer = setInterval(function() {
//     if (timeleft <= {
//         clearInterval(downloadTimer)
//         documengetElementById("countdown").innerHTML = "finished";
//         }   else {
//         document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//         }
//         timeleft -= 1; 
//     }, 1000);

// document.getElementById("button").addEventListener("click", function() {
// }


var choices = document.getElementsByTagName('input[type:radio]');
var questions = [
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
for (var i = 0, i < questions.length; i++) {
    var question = questions[i].question;
    document.write (question);
    var options = questions[i].choices;
    for (var opt in options) {
        for (var radios in choices) {
            choices[radios].value = options[opt];
        }
    }
}

// var seconds = 120;
// setInterval(function)() {
//     timer.innerHTML = seconds--;
// }, 1000);

// Datastructures

var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT inlude:",
        answers: ["alerts", "booleans", "numbers", "strings"],
        answerId: 0
    },
    {
        questionText: "The condition in an if/else statement is enclosed within __________",
        answers: ["curly braces", "parenthesis", "quotes", "square brackets"],
        answerId: 1
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________",
        answers: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answerId: 3
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["commas", "curly braces", "quotes", "parenthesis"],
        answerId: 2
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the degugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerId: 3
    }
];

//basic variables
var questionsIndex = 0;
var time = questionsArray.length * 20;  // the user has 20 seconds to answer the question.

// var secondsElapsed = 0;

// targeted HTML elements.
var createQuizEl = document.querySelector("create-quiz");
var resultsEl = document.querySelector("results");
var startquizEl = document.querySelector(start - quiz);


function StartQuiz() {
    // hide the start screen.

    // present  the questions to the user.
    // start the timer.
    var interval = setInterval(UpdateTimer, 1000);  // Needed for ustilizing the setInterval & clearInterval functions.
    getQuestion();
};


function UpdateTimer() {
    // update the time left.


    // End the quiz if time  <= 0 
    if (time <= 0)
        EndQuiz();
    else
        // model 1 second has elapsed from the timer.
        time--;
}

function getQuestion() {
    // Retrieve the current question from the questions array.
    // Update the question element with this question.
    var answerOptions;
    var Display = [];
    var answersArrayLength = 4;
    // Creating HTML form with radio buttons in order to validate and then store user data.
    if (questionsIndex < questionsArray.length) {
        for (var i = 0; i < answersArrayLength; i++) {

            answerOptions.push(
                '<form>'
                    '<input type="radio" name="possibleAnswers">' 
                    '<input>' 
                          questionsArray[QuestionsIndex].answers[i]
                 '</form>'
            );
            // Q & A's  are  to be displayed on the user's display.
            Display.push(
                '<div>' + 'questionsArray[QuestionsIndex].questionText' + '</div>'
                + '<div>' + answerOptions.join('') + '</div>'
            )
        }
        questionsIndex++;
        createQuizEl.innerHTML= Display.join(); 
    }
}


// Present answer choices to the user using a for loop.
// Create a button and append  to the html element.
// upon  the choice   event being triggered, call the optionClicked() function.
var btn = document.createElement("BUTTON");   // Create a <button> element
for (j = 0; j < questionsArray[questionsIndex].answers.length; j++)
    btn.innerHTML = questionsArray[questionsIndex].answers[j];             // Insert Answer option.
document.body.appendChild(btn);               // Append <button> to <body>





function optionClicked() {
    // Penalize the incorrect answer to the question.
    if (

    // Increase the question index and also check if the number of questions is exhausted.

    if (++questionsIndex < questionsArray.length)
            getQuestion();
        else
            EndQuiz();
}      



function EndQuiz() {
    // stop the timer.
    clearInterval(interval);
    //show end screen.
    var userResponse = '';
    var Score = 0; // count of answers correct.
    //hide questions Element
    // Display the final score and time.
}for (var i=0; i < questionsArray.length; i++){
    userResponse = (resultsEl[i].querySelector("input[name=possibleAnswers;+i+]:checked').value;
}

// if answer incorrect, penalise time.

if (userResponse!== questionsArray[i].answerId)
    time -= 10;

// answer is correct, update score. P
else Score++;

function saveHighScore() {
    // Update the HighScore list.   
    var localStorage.getItem("High Score");
  //   <form>
 // <label for="Initials">Initials</label><br>
 // <input type="text" id="Initials" name="Initials"><br>
 // </form>
 

if (score > HighScore)
   localStorage.setItem(HighScore, input.ini);


}

startQuizEl.addEventListener("click", StartQuiz);





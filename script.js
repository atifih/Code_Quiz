// Datastructures

var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT inlude:",
        answers: ["alerts", "booleans", "numbers", "strings"],
        answerId: 0
    },
    {
        questionText: "The condition in an if/else statement is enclosed within __________",
        answers: ["curly braces", "parenthesis", "quotes", "square brackets"],
        answerId: 1
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________",
        answers: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answerId: 3
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["commas", "curly braces", "quotes", "parenthesis"],
        answerId: 2
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the degugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerId: 3
    }
]

//basic variables
var questionsIndex = 0;
var time = questionsArray.length*20;  // the user has 20 seconds to answer the question.
var secondsElapsed = 0;

// targeted HTML elements.
var questionsEl = document.querySelector("#Question")
var option1El = document.querySelector("#Option 1");
var option1El = document.querySelector("#Option 2");
var option1El = document.querySelector("#Option 3");
var option1El = document.querySelector("#Option 4");

function StartQuiz(){
    // hide the start screen.
    
    // unhide the questions
    
    // start the timer.

    var  interval = setInterval(UpdateTimer, 1000);
    };


function UpdateTimer(){
    // update the time left.
    time = interval - ++secondsElapsed;

    // End the quiz if time  <= 0 
    if (time <= 0 )
        EndQuiz();
}

function getQuestion(){
    // Retrieve the current question from the questions array.
    // Update the question element with this question.
    for (var i =0; i < questionsArray.length; i++){
        questionsEl.innerHTML = questionsArray[i].questionText;
    

    // Present question choices to the user using a for loop.
        // Create a button and append  to the html element.
        // upon  the choice   event being triggered, call the optionClicked() function.
        var btn = document.createElement("BUTTON");   // Create a <button> element
        for (j = 0; j < questionsArray.length; j++ )
         btn.innerHTML =  questionsArray[i].answers[j];             // Insert Answer option.
         document.body.appendChild(btn);               // Append <button> to <body>
    }

    }

function optionClicked(){
// Penalize the incorrect answer to the question.
if  (time < 0)
    time =0;

// Increase the question index and also check if the number of questions is exhausted.

if (++questionsIndex < questionsArray.length)
    getQuestion();
else EndQuiz();
}

function EndQuiz(){
    // stop the timer.
    clearInterval(interval);
    //show end screen.
    //hide questions Element
    // Display the final score and time.


  function saveHighScore(){
   // Update the HighScore list.   


}





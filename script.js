// Datastructures

var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT include:",
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
var Score = 0;
var time = questionsArray.length * 20;  // the user has 20 seconds to answer the question.
var interval;
// var secondsElapsed = 0;

// targeted HTML elements.
// var createQuizEl = document.querySelector("#create-quiz");
var resultsEl = document.querySelector("#results");
var timeEL = document.querySelector("#time-left");


function StartQuiz() {
    // hide the start screen.

    if (questionsIndex < questionsArray.length) {

        // start the timer.
        timeEL.innerHTML = time; // Update the timer  on the user's display.
        getQuestion(); // get next question.
        interval = setInterval(UpdateTimer, 1000);  // Needed for ustilizing the setInterval & clearInterval functions.
        //      getQuestion(); // present  the first question to the user.
    };
      
}

function UpdateTimer() {
    // update the time left.


    // End the quiz if time  <= 0 
    if (time <= 0) {
        EndQuiz();
    } else {
        // model 1 second has elapsed from the timer.
        time--;

    }
}


function getQuestion() {
    // Retrieve the current question from the questions array.
    // Update the question element with this question.
    var answerOptions;
    var Display = [];
    var answersArrayLength = 4;

    // Present the question to the user.
    if (questionsIndex < questionsArray.length) {
        var Question = document.createElement("p");
        Question.setAttribute("id", "Question");
        Question.innerHTML = questionsArray[questionsIndex].questionText; // Retrieve and display the current question.
        document.body.appendChild(Question);
       
    
    // Creating HTML form with radio buttons in order to validate and then store user data.
    var form = document.createElement("form");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    button1.setAttribute("id", "Option-1");
    button2.setAttribute("id", "Option-2");
    button3.setAttribute("id", "Option-3");
    button4.setAttribute("id", "Option-4");
    
    button1.textContent = questionsArray[questionsIndex].answers[0];
    button2.textContent = questionsArray[questionsIndex].answers[1];
    button3.textContent = questionsArray[questionsIndex].answers[2];
    button4.textContent = questionsArray[questionsIndex].answers[3];

    form.appendChild(button1);
    form.appendChild(button2);
    form.appendChild(button3);
    form.appendChild(button4);
    document.body.appendChild(form);
    

    // Present answer choices to the user using a for loop.
    // Create a button and append  to the html element.
    // upon  the choice   event being triggered, call the optionClicked() function.

    // Setup event listeners for the created buttons.
    var button1El = document.querySelector("#Option-1").addEventListener("click", optionClicked("button1"));
    var button2El = document.querySelector("#Option-2").addEventListener("click", optionClicked("button2"));
    var button3El = document.querySelector("#Option-3").addEventListener("click", optionClicked("button3"));
    var button4El = document.querySelector("#Option-4").addEventListener("click", optionClicked("button4"));
    }
    questionsIndex++;
}




function optionClicked(btn) {
    // Penalize the incorrect answer to the question.
    if (questionsIndex < questionsArray.length){
    if ((btn === "button1") && (questionsArray[questionsIndex].answerId) === 1) {
        Score++;
    }
    else if ((btn === "button2") && (questionsArray[questionsIndex].answerId === 2)) {
        Score++;
    }
    else if ((btn === "button3") && (questionsArray[questionsIndex].answerId === 3)) {
        Score++;
    }
    else if ((btn === "button4") && (questionsArray[questionsIndex].answerId === 4)) {
        Score++;
    }
    else {
        // answer incorrect, penalise the user.
        time -= 10;
       
    }

    questionsIndex++; 
    }
    // Increase the question index and also check if the number of questions is exhausted.
    // Emptying the DOM.
   //  document.removeChild(document.documentElement);

    if (questionsIndex < questionsArray.length) {
        getQuestion();
    }
    else {
        EndQuiz();
    }
}




function EndQuiz() {
    // stop the timer.
    clearInterval(interval);
    //show end screen.
    var userResponse = '';
    var Score = 0; // count of answers correct.
    //hide questions Element
    // Display the final score and time.


    // if answer incorrect, penalise time.
    var hs = JSON.parse(localStorage.getItem("dhigh score"));
    if ((hs !== null) && (score > hs)) {
        saveHighScore(Score);
    } else {
        // Display the final score.
        displayFinalScore(Score);
    }

}

function displayFinalScore(Score) {
    var finalScore = document.createElement("p");
    finalScore.setAttribute("id", "finalScore");
    finalScore.innerHTML = "Your final score was: " + Score;
    document.body.appendChild(finalScore);
}


function saveHighScore(Score) {
    // Update the HighScore list.   

    // <label for="Initials">Initials</label><br>
    // <input type="text" id="Initials" name="Initials"><br>
    // </form>

    var hsform = document.createElement("form");
    var username = document.createElement("input");
    hsform.appendChild(username);
    document.body.appendChild(hsform);
    localStorage.setItem("high score", JSON.stringify(score));
}




// Event Handlers
var startquizEl = document.querySelector("#startQuiz").addEventListener("click", StartQuiz);






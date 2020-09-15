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
var quizEl = document.querySelector("#Quiz");

function StartQuiz() {
    // hide the start screen.

    if (questionsIndex < questionsArray.length) {

        // start the timer.
        timeEL.innerHTML = time; // Update the timer  on the user's display.
        quizEl.innerHTML= "";
        getQuestion(); // get First question.
       // interval = setInterval(UpdateTimer, 1000);  // Needed for ustilizing the setInterval & clearInterval functions.
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
    // var Display = [];
    // var answersArrayLength = 4;

    // Present the question to the user.
    if (questionsIndex < questionsArray.length) {
        var Question = document.createElement("p");
        Question.setAttribute("id", "Question");
        Question.innerHTML = questionsArray[questionsIndex].questionText; // Retrieve and display the current question.
        document.body.appendChild(Question);


        // Creating HTML form with radio buttons in order to validate and then store user data.
        var form = document.createElement("form");
        form.setAttribute('id', 'options');
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



     // Setup event listeners for the created buttons.
     form.addEventListener("click", function (event) {
        event.preventDefault();
         // console.log('clicked EL,', event.target.id);
             optionClicked(event.target.id);
         
     });     
        
    }
    
}



    function optionClicked(btn) {
        // Penalize the incorrect answer to the question.
        debugger;
        if (questionsIndex < questionsArray.length) {
            var Answer = document.createElement("p");
            Answer.setAttribute("id", "Answer");
            
            if ((btn === "Option-1") && (questionsArray[questionsIndex].answerId === 0)) {
                console.log('correct')
                Score++;
                Answer.innerHTML = "Correct"; // Advise the user of the result.
            }
            else if ((btn === "Option-2") && (questionsArray[questionsIndex].answerId === 1)) {
                Score++;
                Answer.innerHTML = "Correct"; // Advise the user of the result.
            }
            else if ((btn === "Option-3") && (questionsArray[questionsIndex].answerId === 2)) {
                Score++;
                Answer.innerHTML = "Correct"; // Advise the user of the result.
           
            }
            else if ((btn === "Option-4") && (questionsArray[questionsIndex].answerId === 3)) {
                Score++;
                Answer.innerHTML = "Correct"; // Advise the user of the result.
           
            }
            else {
                // answer incorrect, penalise the user.
                time -= 10;
                Answer.innerHTML = "Incorrect";
           
            
        }
        document.body.appendChild(Answer);  // Display result to the user.
          // Go to the next question.
          questionsIndex++;

        if (questionsIndex < questionsArray.length) {
            console.log('option click called')
            // Clear the display. 
            quizEl.innerHTML = "";
            getQuestion(); // Display the next question to the user as long as long as not all questions have been displayed.
        
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
        var hs = JSON.parse(localStorage.getItem("high score"));
        if ((hs !== null) && (score > hs)) {
            saveHighScore(Score);
        } else {
            // Display the final score.
            displayFinalScore(Score);
        }

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




    // Event Handlers -  using event delegation as the yet to be created button is not present in the DOM,
    // so event handlers  cannot be attached to them.
    //But the parent is present in the DOM and so an event handler can be attached to the parent.


    var startquizEl = document.querySelector("#startQuiz").addEventListener("click", StartQuiz);

    
    






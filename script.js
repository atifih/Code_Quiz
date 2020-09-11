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
    var form = document.createElement("form");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    button1.setAttribute("id", "Option-1");
    button2.setAttribute("id", "Option-2");
    button3.setAttribute("id", "Option-3");
    button4.setAttribute("id", "Option-4");
    form.appendChild(button1);
    form.appendChild(button2);
    form.appendChild(button3);
    form.appendChild(button4);
    document.body.appendChild(form);

    if (questionsIndex < questionsArray.length) {
        for (var i = 0; i < answersArrayLength; i++) {

            var Question = document.createElement("p");
            Question.setAttribute("id", "Question");
            Question.appendChild(Question);
            var qtext = document.querySelector("#Question")
            qtext.innerHTML = questionsArray[questionsIndex].questionText;





            /*  
              questionsArray[QuestionsIndex].answers[i]
   
           // Q & A's  are  to be displayed on the user's display.
           Display.push(
               '<div>' + 'questionsArray[QuestionsIndex].questionText' + '</div>'
               + '<div>' + answerOptions.join('') + '</div>'
           )
       }

       */

            questionsIndex++;
            createQuizEl.innerHTML = Display.join();
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
        for (var i = 0; i < questionsArray.length; i++) {
            if ((button1.checked == true) && (questionsArray[i].answerId) === 1){
                Score++;
            }
            if ((button2.checked == true) && (questionsArray[i].answerId === 2)){
                Score++;
            }
            if ((button3.checked == true) && (questionsArray[i].answerId === 3)) {
                Score++;
            }
            if ((button4.checked == true) && (questionsArray[i].answerId === 4)){
                Score++;
            }
            else {
                // answer incorrect, penalise the user.
                time -= 10;
            }
            // Increase the question index and also check if the number of questions is exhausted.

            if (++questionsIndex < questionsArray.length){
                getQuestion();
            }
            else{
                EndQuiz();
        }   }



        function EndQuiz() {
            // stop the timer.
            clearInterval(interval);
            //show end screen.
            var userResponse = '';
            var Score = 0; // count of answers correct.
            //hide questions Element
            // Display the final score and time.
        }

        // if answer incorrect, penalise time.

        if (userResponse !== questionsArray[i].answerId)
            time -= 10;

        // answer is correct, update score. P
        else {
            Score++;
            time--;
        }


        function saveHighScore() {
            // Update the HighScore list.   
            var localStorage;
            
            localStorage.getItem("High Score");
            //   <form>
            // <label for="Initials">Initials</label><br>
            // <input type="text" id="Initials" name="Initials"><br>
            // </form>


            if (score > HighScore)
            // Enter  High Score
            var hsform = document.createElement("form");
            var username = document.createElement("input");
            hsform.appendChild(input);
            document.body.appendchild(hsform);
            document.body.appendChild(form);
            localStorage.setItem(HighScore, Initals);


        }

        // Event Handlers

        startQuizEl.addEventListener("click", StartQuiz);
        button1.addEventListener("click", function(){
            button1.checked = true;
        }
        button2.addEventListener("click", function(){
            button2.checked = true;
        }
        button3.addEventListener("click", function(){
            button3.checked = true;
        }
        button4.addEventListener("click", function(){
            button4.checked = true;
        }




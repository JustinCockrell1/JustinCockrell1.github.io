//Create a quiz class

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

};

//Create a question class

class Question {
    constructor(text, choices, answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }

    isCorrectAnswer(choice) {
        return this.answer===choice;
    }
};



//Display question
function displayQuestion(){
    if(quiz.isEnded()){
        showScores();
    }  else {
        //Show question
        let questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //Show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById('choice'+i);
            console.log(i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

//Guess function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        displayQuestion();
    }
    
}

//Show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;

}

//SHOW SCORE
function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class ="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById('quiz');
    quizElement.innerHTML = quizEndHTML;
}

//Create quiz questions
let questions = [
    new Question("What is your name?",["jeff","bob","steve","joe"],"jeff"),
    new Question("What is your name?",["jeff","bob","steve","joe"],"jeff"),
    new Question("What is your name?",["jeff","bob","steve","joe"],"jeff"),
    new Question("What is your name?",["jeff","bob","steve","joe"],"jeff")
];

let quiz = new Quiz(questions);

//Display questions
displayQuestion();

//Add a countdown
let time = 1;
let quizTimeInMinutes = time*60*60;
let quizTime = quizTimeInMinutes/60;
let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function(){
        if(quizTime <= 0){
            clearInterval(quizTimer);
            showScores();
        }else {
            quizTime--;
            let sec = Math.floor(quizTime%60);
            let minutes = Math.floor(quizTime/60) %60;
            counting.innerHTML = `Time: ${minutes}:${sec}`;
        }
    },1000);
}

startCountdown();

// /* =====================================
//    QUIZ APP - JAVASCRIPT
// ===================================== */

// // 1. GET HTML ELEMENTS

// const welcomeScreen = document.getElementById("welcome-screen");
// const quizScreen = document.getElementById("quiz-screen");
// const resultScreen = document.getElementById("result-screen");

// const startBtn = document.getElementById("start-btn");
// const nextBtn = document.getElementById("next-btn");
// const restartBtn = document.getElementById("restart-btn");

// const questionElement = document.getElementById("question");
// const answerButtons = document.querySelectorAll(".answer-btn");

// const questionCounter = document.getElementById("question-counter");
// const progressBar = document.getElementById("progress-bar");

// const scoreElement = document.getElementById("score");
// const resultMessage = document.getElementById("result-message");


// // 2. QUIZ QUESTIONS

// const questions = [

//     {
//         question: "What is the capital of Nigeria?",
//         answers: [
//             "Lagos",
//             "Abuja",
//             "Kano",
//             "Ibadan"
//         ],
//         correct: 1
//     },

//     {
//         question: "Which planet is known as the Red Planet?",
//         answers: [
//             "Earth",
//             "Venus",
//             "Mars",
//             "Jupiter"
//         ],
//         correct: 2
//     },

//     {
//         question: "How many days are there in a week?",
//         answers: [
//             "5",
//             "6",
//             "7",
//             "8"
//         ],
//         correct: 2
//     },

//     {
//         question: "Which language is used to style web pages?",
//         answers: [
//             "HTML",
//             "CSS",
//             "Python",
//             "Java"
//         ],
//         correct: 1
//     },

//     {
//         question: "What does HTML stand for?",
//         answers: [
//             "Hyper Text Markup Language",
//             "High Text Machine Language",
//             "Hyper Transfer Main Language",
//             "Home Tool Markup Language"
//         ],
//         correct: 0
//     },

//     {
//         question: "Which animal is known as the King of the Jungle?",
//         answers: [
//             "Tiger",
//             "Elephant",
//             "Lion",
//             "Leopard"
//         ],
//         correct: 2
//     },

//     {
//         question: "How many months are there in a year?",
//         answers: [
//             "10",
//             "11",
//             "12",
//             "13"
//         ],
//         correct: 2
//     },

//     {
//         question: "Which device is used to input text into a computer?",
//         answers: [
//             "Monitor",
//             "Keyboard",
//             "Speaker",
//             "Printer"
//         ],
//         correct: 1
//     },

//     {
//         question: "Which language makes websites interactive?",
//         answers: [
//             "CSS",
//             "HTML",
//             "JavaScript",
//             "SQL"
//         ],
//         correct: 2
//     },

//     {
//         question: "What is 10 multiplied by 5?",
//         answers: [
//             "15",
//             "25",
//             "50",
//             "100"
//         ],
//         correct: 2
//     }

// ];


// // 3. QUIZ VARIABLES

// let currentQuestionIndex = 0;
// let score = 0;
// let answered = false;


// // 4. START THE QUIZ

// startBtn.addEventListener("click", startQuiz);

// function startQuiz() {

//     welcomeScreen.classList.add("hidden");

//     resultScreen.classList.add("hidden");

//     quizScreen.classList.remove("hidden");

//     currentQuestionIndex = 0;
//     score = 0;

//     showQuestion();

// }


// // 5. DISPLAY QUESTIONS

// function showQuestion() {

//     // Reset answer status
//     answered = false;

//     // Hide the Next button
//     nextBtn.classList.add("hidden");

//     // Get the current question
//     const currentQuestion = questions[currentQuestionIndex];

//     // Display the question
//     questionElement.textContent = currentQuestion.question;

//     // Update question counter
//     questionCounter.textContent =
//         `Question ${currentQuestionIndex + 1} of ${questions.length}`;

//     // Update progress bar
//     const progress =
//         ((currentQuestionIndex + 1) / questions.length) * 100;

//     progressBar.style.width = `${progress}%`;

//     // Display answer options
//     answerButtons.forEach((button, index) => {

//         button.textContent = currentQuestion.answers[index];

//         button.classList.remove("correct", "wrong");

//         button.disabled = false;

//     });

// }


// // 6. CHECK THE SELECTED ANSWER

// answerButtons.forEach((button, index) => {

//     button.addEventListener("click", () => {

//         // Prevent selecting multiple answers
//         if (answered) {
//             return;
//         }

//         answered = true;

//         // Get the correct answer
//         const correctAnswer =
//             questions[currentQuestionIndex].correct;

//         // Check if the selected answer is correct
//         if (index === correctAnswer) {

//             score++;

//             button.classList.add("correct");

//         } else {

//             button.classList.add("wrong");

//             // Highlight the correct answer
//             answerButtons[correctAnswer].classList.add("correct");

//         }

//         // Disable all answer buttons
//         answerButtons.forEach((btn) => {

//             btn.disabled = true;

//         });

//         // Show Next button
//         nextBtn.classList.remove("hidden");

//         // Change button text on final question
//         if (currentQuestionIndex === questions.length - 1) {

//             nextBtn.textContent = "See Results";

//         } else {

//             nextBtn.textContent = "Next Question";

//         }

//     });

// });


// // 7. MOVE TO THE NEXT QUESTION

// nextBtn.addEventListener("click", () => {

//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {

//         showQuestion();

//     } else {

//         showResults();

//     }

// });


// // 8. DISPLAY FINAL RESULTS

// function showResults() {

//     // Hide quiz screen
//     quizScreen.classList.add("hidden");

//     // Show result screen
//     resultScreen.classList.remove("hidden");

//     // Display final score
//     scoreElement.textContent =
//         `${score} / ${questions.length}`;

//     // Display performance message
//     if (score === questions.length) {

//         resultMessage.textContent =
//             "Excellent! You got every question correct!";

//     } else if (score >= 7) {

//         resultMessage.textContent =
//             "Great job! You have excellent knowledge!";

//     } else if (score >= 5) {

//         resultMessage.textContent =
//             "Good effort! Keep practising!";

//     } else {

//         resultMessage.textContent =
//             "Keep learning! You can do even better next time!";

//     }

// }


// // 9. RESTART THE QUIZ

// restartBtn.addEventListener("click", () => {

//     // Reset score and question number
//     currentQuestionIndex = 0;

//     score = 0;

//     answered = false;

//     // Reset progress bar
//     progressBar.style.width = "0%";

//     // Show welcome screen
//     resultScreen.classList.add("hidden");

//     quizScreen.classList.add("hidden");

//     welcomeScreen.classList.remove("hidden");

// });

/* =====================================
   QUIZ APP - JAVASCRIPT
   20 QUESTIONS + RANDOM SHUFFLING
===================================== */

// 1. GET HTML ELEMENTS

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");

const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");

const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("result-message");


// 2. QUESTION BANK - 20 QUESTIONS

const questionBank = [

    {
        question: "What is the capital of Nigeria?",
        answers: ["Lagos", "Abuja", "Kano", "Ibadan"],
        correct: 1
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: 2
    },

    {
        question: "How many days are there in a week?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },

    {
        question: "Which language is used to style web pages?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: 1
    },

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Main Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        answers: ["Tiger", "Elephant", "Lion", "Leopard"],
        correct: 2
    },

    {
        question: "How many months are there in a year?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },

    {
        question: "Which device is used to type text into a computer?",
        answers: ["Monitor", "Keyboard", "Speaker", "Printer"],
        correct: 1
    },

    {
        question: "Which language makes websites interactive?",
        answers: ["CSS", "HTML", "JavaScript", "SQL"],
        correct: 2
    },

    {
        question: "What is 10 multiplied by 5?",
        answers: ["15", "25", "50", "100"],
        correct: 2
    },

    {
        question: "Which is the largest ocean in the world?",
        answers: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        correct: 3
    },

    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },

    {
        question: "Who invented the telephone?",
        answers: [
            "Thomas Edison",
            "Alexander Graham Bell",
            "Isaac Newton",
            "Albert Einstein"
        ],
        correct: 1
    },

    {
        question: "What is the chemical symbol for water?",
        answers: ["CO2", "O2", "H2O", "NaCl"],
        correct: 2
    },

    {
        question: "Which country is famous for the Eiffel Tower?",
        answers: ["Italy", "France", "Germany", "Spain"],
        correct: 1
    },

    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Saturn", "Jupiter"],
        correct: 3
    },

    {
        question: "Which organ pumps blood around the body?",
        answers: ["Brain", "Lungs", "Heart", "Kidney"],
        correct: 2
    },

    {
        question: "What is the opposite of ancient?",
        answers: ["Old", "Modern", "Historic", "Past"],
        correct: 1
    },

    {
        question: "How many sides does a triangle have?",
        answers: ["2", "3", "4", "5"],
        correct: 1
    },

    {
        question: "Which of these is a programming language?",
        answers: ["Python", "HTML", "CSS", "Photoshop"],
        correct: 0
    }

];


// 3. QUIZ VARIABLES

const QUESTIONS_PER_QUIZ = 10;

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;


// 4. SHUFFLE FUNCTION - FISHER-YATES ALGORITHM

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffled[i], shuffled[randomIndex]] =
            [shuffled[randomIndex], shuffled[i]];

    }

    return shuffled;
}


// 5. PREPARE A RANDOM QUIZ

function prepareQuiz() {

    // Shuffle all questions and select 10
    const selectedQuestions = shuffleArray(questionBank)
        .slice(0, QUESTIONS_PER_QUIZ);

    // Shuffle the answer options for every question
    questions = selectedQuestions.map(question => {

        const shuffledAnswers = shuffleArray(
            question.answers.map((answer, index) => ({
                text: answer,
                isCorrect: index === question.correct
            }))
        );

        return {
            question: question.question,
            answers: shuffledAnswers.map(answer => answer.text),
            correct: shuffledAnswers.findIndex(
                answer => answer.isCorrect
            )
        };

    });

}


// 6. START QUIZ

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    // Prepare fresh random questions
    prepareQuiz();

    // Reset quiz variables
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    // Switch screens
    welcomeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    // Show first question
    showQuestion();

}


// 7. DISPLAY QUESTIONS

function showQuestion() {

    answered = false;

    nextBtn.classList.add("hidden");

    const currentQuestion = questions[currentQuestionIndex];

    // Display question
    questionElement.textContent = currentQuestion.question;

    // Update question counter
    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Update progress bar
    const progress =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    // Display shuffled answers
    answerButtons.forEach((button, index) => {

        button.textContent = currentQuestion.answers[index];

        button.classList.remove("correct", "wrong");

        button.disabled = false;

    });

}


// 8. CHECK ANSWERS

answerButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (answered) return;

        answered = true;

        const correctAnswer =
            questions[currentQuestionIndex].correct;

        // Check selected answer
        if (index === correctAnswer) {

            score++;

            button.classList.add("correct");

        } else {

            button.classList.add("wrong");

            answerButtons[correctAnswer]
                .classList.add("correct");

        }

        // Disable all answer buttons
        answerButtons.forEach(btn => {
            btn.disabled = true;
        });

        // Show next button
        nextBtn.classList.remove("hidden");

        // Change text on final question
        nextBtn.textContent =
            currentQuestionIndex === questions.length - 1
                ? "See Results"
                : "Next Question";

    });

});


// 9. NEXT QUESTION

nextBtn.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

});


// 10. DISPLAY RESULTS

function showResults() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    scoreElement.textContent =
        `${score} / ${questions.length}`;

    if (score === questions.length) {

        resultMessage.textContent =
            "Perfect score! Excellent work!";

    } else if (score >= 7) {

        resultMessage.textContent =
            "Great job! You have excellent knowledge!";

    } else if (score >= 5) {

        resultMessage.textContent =
            "Good effort! Keep practising!";

    } else {

        resultMessage.textContent =
            "Keep learning! You can do even better!";

    }

}


// 11. RESTART QUIZ

restartBtn.addEventListener("click", () => {

    // Reset progress
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    progressBar.style.width = "0%";

    // Return to welcome screen
    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

});

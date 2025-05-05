// JavaScript Events Quiz - Starter File

// Quiz Questions
const quizQuestions = [
    {
        question: "Which event fires when a user clicks on an HTML element?",
        options: ["onclick", "onmouseover", "onchange", "onsubmit"],
        answer: 0
    },
    {
        question: "What event is triggered when an input field's value changes and the field loses focus?",
        options: ["onchange", "oninput", "onfocus", "onblur"],
        answer: 0
    },
    {
        question: "Which event fires when a page has finished loading?",
        options: ["onready", "onfinish", "onload", "oncomplete"],
        answer: 2
    },
    {
        question: "What is the best event to use when you want to detect when a user presses any key?",
        options: ["onpress", "onkey", "onkeyup", "onkeydown"],
        answer: 3
    },
    {
        question: "Which event occurs when the browser window is resized?",
        options: ["onresize", "onchange", "onmodify", "onupdate"],
        answer: 0
    }
];

// Global variables
let currentQuestion = 0;
let score = 0;
let playerName = "";
let userAnswers = [];

// DOM Elements - add these to help you quickly reference elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');
const playerNameInput = document.getElementById('player-name');
const playerNameDisplay = document.getElementById('player-name-display');
const nameError = document.getElementById('name-error');
const playerForm = document.getElementById('player-form');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const scoreEl = document.getElementById('score');
const maxScoreEl = document.getElementById('max-score');
const resultsMessage = document.getElementById('results-message');
const answerReview = document.getElementById('answer-review');
const restartBtn = document.getElementById('restart-btn');
const shortcutsGuide = document.getElementById('shortcuts-guide');
const timeRemaining = document.getElementById('time-remaining');
const timerDisplay = document.getElementById('timer');

// Initialize the quiz
// TODO: Add window event listener to load the quiz when the page is ready
// HINT: Use 'DOMContentLoaded' event


// TODO: Add form event listener for name submission
// HINT: Use 'submit' event on playerForm


// TODO: Add blur event listener to validate the name as user moves away from the input
// HINT: Check if name is 3+ characters


// Function to start the quiz
function startQuiz() {
    // TODO: Display player name
    
    // TODO: Initialize the quiz data
    
    // TODO: Show quiz container, hide welcome screen
    
    // Show the first question
    showQuestion();
    
    // TODO: Show keyboard shortcuts guide
    
    // Update progress bar
    updateProgress();
    
    // TODO: Optional - start timer
}

// Function to show a question
function showQuestion() {
    // Get the current question data
    const questionData = quizQuestions[currentQuestion];
    
    // Set question text
    questionText.textContent = questionData.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // TODO: Create and add options to the options container
    // HINT: Use a loop to create options
    // HINT: Add click event listener to each option
    
    // Update the question counter
    currentQuestionEl.textContent = currentQuestion + 1;
    totalQuestionsEl.textContent = quizQuestions.length;
    
    // TODO: Show/hide prev/next/submit buttons based on question number
    
    // Update progress bar
    updateProgress();
}

// Function to handle option selection
function selectOption(optionIndex) {
    // TODO: Handle option selection
    // HINT: Update userAnswers array
    // HINT: Add 'selected' class to selected option
    // HINT: Remove 'selected' class from other options
}

// Function to handle next button click
function nextQuestion() {
    // TODO: Move to next question if possible
    // HINT: Increment currentQuestion
    // HINT: Check if it's the last question
}

// Function to handle previous button click
function prevQuestion() {
    // TODO: Move to previous question if possible
    // HINT: Decrement currentQuestion
    // HINT: Check if it's the first question
}

// Function to update progress bar
function updateProgress() {
    const progress = (currentQuestion / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Function to submit the quiz and show results
function submitQuiz() {
    // TODO: Calculate the score
    // HINT: Compare userAnswers with correct answers
    
    // TODO: Hide quiz, show results screen
    
    // TODO: Display score and message
    
    // TODO: Create answer review
    // HINT: Show which questions were right/wrong
}

// Function to restart the quiz
function restartQuiz() {
    // TODO: Reset all quiz data
    // HINT: Reset score, currentQuestion, userAnswers
    
    // TODO: Return to welcome screen
}

// TODO: Add keyboard navigation
// HINT: Add 'keydown' event listener to window
// HINT: Handle arrow keys, number keys (1-4), Enter key, etc.


// TODO: Add optional timer functionality
// HINT: Use setInterval to count down
// HINT: Update timer display each second
// HINT: Submit quiz when timer reaches 0
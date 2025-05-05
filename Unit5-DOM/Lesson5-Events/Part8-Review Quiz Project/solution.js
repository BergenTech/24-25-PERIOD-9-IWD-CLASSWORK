// JavaScript Events Quiz - Solution File

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
let timerInterval = null;
let timeLeft = 60; // 60 seconds for the quiz

// DOM Elements
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

// Initialize the quiz when the DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - quiz initialized");
    
    // Set up total questions display
    totalQuestionsEl.textContent = quizQuestions.length;
    maxScoreEl.textContent = quizQuestions.length;
    
    // Show keyboard shortcuts guide (optional)
    shortcutsGuide.classList.remove('d-none');
});

// Add form submission event listener
playerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Validate name
    if (validatePlayerName()) {
        playerName = playerNameInput.value.trim();
        startQuiz();
    }
});

// Add blur event listener to validate name
playerNameInput.addEventListener('blur', function() {
    validatePlayerName();
});

// Name validation function
function validatePlayerName() {
    const name = playerNameInput.value.trim();
    
    if (name.length < 3) {
        nameError.classList.remove('d-none');
        playerNameInput.classList.add('is-invalid');
        return false;
    } else {
        nameError.classList.add('d-none');
        playerNameInput.classList.remove('is-invalid');
        playerNameInput.classList.add('is-valid');
        return true;
    }
}

// Start the quiz
function startQuiz() {
    // Display player name
    playerNameDisplay.textContent = playerName;
    
    // Initialize quiz data
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    
    // Show quiz container, hide welcome screen
    welcomeScreen.classList.add('d-none');
    quizContainer.classList.remove('d-none');
    quizContainer.classList.add('fade-in');
    
    // Show the first question
    showQuestion();
    
    // Start timer
    startTimer();
}

// Show the current question
function showQuestion() {
    // Get the current question data
    const questionData = quizQuestions[currentQuestion];
    
    // Set question text
    questionText.textContent = questionData.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create and add options
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        // Add click event listener
        optionElement.addEventListener('click', function() {
            selectOption(index);
        });
        
        // Add mouseover and mouseout effects
        optionElement.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        optionElement.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update the question counter
    currentQuestionEl.textContent = currentQuestion + 1;
    
    // Show/hide prev/next/submit buttons
    prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
    
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.classList.add('d-none');
        submitBtn.classList.remove('d-none');
    } else {
        nextBtn.classList.remove('d-none');
        submitBtn.classList.add('d-none');
    }
    
    // Update progress bar
    updateProgress();
}

// Handle option selection
function selectOption(optionIndex) {
    // Update user answers
    userAnswers[currentQuestion] = optionIndex;
    
    // Update UI to show selected option
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Handle next button click
nextBtn.addEventListener('click', nextQuestion);

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

// Handle previous button click
prevBtn.addEventListener('click', prevQuestion);

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Handle quiz submission
submitBtn.addEventListener('click', submitQuiz);

function submitQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].answer) {
            score++;
        }
    });
    
    // Hide quiz, show results
    quizContainer.classList.add('d-none');
    resultsScreen.classList.remove('d-none');
    resultsScreen.classList.add('fade-in');
    
    // Display score
    scoreEl.textContent = score;
    
    // Display message based on score
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 80) {
        resultsMessage.textContent = "Excellent! You're a JavaScript events expert!";
        resultsMessage.className = "lead text-success";
    } else if (percentage >= 60) {
        resultsMessage.textContent = "Good job! You understand most JavaScript events.";
        resultsMessage.className = "lead text-primary";
    } else {
        resultsMessage.textContent = "You might need more practice with JavaScript events.";
        resultsMessage.className = "lead text-warning";
    }
    
    // Create answer review
    answerReview.innerHTML = '';
    quizQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        
        const answerItem = document.createElement('div');
        answerItem.className = `answer-item ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;
        
        answerItem.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Not answered'}</p>
            <p>Correct answer: ${question.options[question.answer]}</p>
        `;
        
        answerReview.appendChild(answerItem);
    });
}

// Handle restart button
restartBtn.addEventListener('click', restartQuiz);

function restartQuiz() {
    // Reset all quiz data
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 60;
    
    // Reset UI
    timeRemaining.textContent = timeLeft;
    timerDisplay.classList.remove('timer-low');
    
    // Return to welcome screen
    resultsScreen.classList.add('d-none');
    welcomeScreen.classList.remove('d-none');
    playerNameInput.value = '';
    playerNameInput.classList.remove('is-valid');
}

// Keyboard navigation
window.addEventListener('keydown', function(e) {
    // Only process keyboard events if we're in the quiz
    if (quizContainer.classList.contains('d-none')) return;
    
    switch(e.key) {
        case 'ArrowRight':
            if (currentQuestion < quizQuestions.length - 1) {
                nextQuestion();
            }
            break;
        case 'ArrowLeft':
            if (currentQuestion > 0) {
                prevQuestion();
            }
            break;
        case 'Enter':
            if (currentQuestion === quizQuestions.length - 1) {
                submitQuiz();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex >= 0 && optionIndex < quizQuestions[currentQuestion].options.length) {
                selectOption(optionIndex);
            }
            break;
    }
});

// Timer functionality
function startTimer() {
    timeLeft = 60;
    timeRemaining.textContent = timeLeft;
    
    timerInterval = setInterval(function() {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        
        // Warning when time is running low
        if (timeLeft <= 10) {
            timerDisplay.classList.add('timer-low');
        }
        
        // Time's up
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}


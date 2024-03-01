'use strict';

// Function to update message
const updateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to update score
const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Function to update highscore
const updateHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

// Function to update background color
const updateBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

// Function to display correct number
const displayCorrectNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Global variables
let secretKey = Math.round(Math.random() * 20);
let score = Number(document.querySelector('.score').textContent);
const originalScore = Number(document.querySelector('.score').dataset.originalScore);
let highscore = Number(document.querySelector('.highscore').textContent);
let gameOver = false;
const originalMessage = document.querySelector('.message').textContent;

// Event listener for checking the guess
document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) return;

  const guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    updateMessage('Kindly Enter A Number');
  } else if (guessNum < secretKey || guessNum > secretKey) {
    updateMessage(guessNum < secretKey ? 'Low' : 'High');
    score--;
    updateScore(score);
  } else {
    updateMessage('Voila !! Correct Number');
    score++;
    updateScore(score);
    if (score > highscore) {
      highscore = score;
      updateHighscore(highscore);
    }
    displayCorrectNumber(secretKey);
    updateBackgroundColor('#AACE9C');
    gameOver = true;
  }

  if (score === 0) {
    updateMessage('💥 You lost the game! Try again.');
    gameOver = true;
  }
});

// Event listener for starting a new game
document.querySelector('.again').addEventListener('click', function () {
  score = originalScore;
  updateScore(score);
  document.querySelector('.guess').value = '';
  secretKey = Math.round(Math.random() * 20);
  gameOver = false;
  updateBackgroundColor('#222');
  document.querySelector('.number').textContent = '';
  updateMessage(originalMessage);
});

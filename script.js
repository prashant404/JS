'use strict';

// Global variables
let secretKey = Math.round(Math.random() * 20);
let score = Number(document.querySelector('.score').textContent); // Fetch initial score from HTML
let originalMessage = document.querySelector('.message').textContent;

const originalScore = Number(
  document.querySelector('.score').dataset.originalScore
); // Fetch original score from HTML
let highscore = Number(document.querySelector('.highscore').textContent); // Fetch highscore from HTML
let gameOver = false; // Variable to track if the game is over

// Event listener for checking the guess
document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) return; // If the game is already over, exit the function

  // Fetch the guessed number
  const guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    document.querySelector('.message').textContent = 'Kindly Enter A Number'; // Prompt if no number entered
  } else if (guessNum < secretKey) {
    document.querySelector('.message').textContent = 'Low'; // Prompt if guess is low
    score--; // Decrement score when guess is low
    document.querySelector('.score').textContent = score; // Update score display
  } else if (guessNum > secretKey) {
    document.querySelector('.message').textContent = 'High'; // Prompt if guess is high
    score--; // Decrement score when guess is high
    document.querySelector('.score').textContent = score; // Update score display
  } else {
    document.querySelector('.message').textContent = 'Voila !! Correct Number'; // Prompt for correct guess
    score++; // Increment score for correct guess
    document.querySelector('.score').textContent = score; // Update score display
    if (score > highscore) {
      highscore = score; // Update highscore only if the current score is higher
      document.querySelector('.highscore').textContent = highscore; // Update highscore display
    }
    document.querySelector('.number').textContent = secretKey; // Display correct number
    document.body.style.backgroundColor = '#AACE9C'; // Change background color
    gameOver = true; // Set game over flag to true
  }
  // Check if score is 0 and display game over message
  if (score === 0) {
    document.querySelector('.message').textContent =
      '💥 You lost the game! Try again.';
    gameOver = true; // Set game over flag to true
  }
});

// Event listener for starting a new game
document.querySelector('.again').addEventListener('click', function () {
  // Reset score and secret key for a new game
  score = originalScore; // Reset score to original value
  document.querySelector('.score').textContent = score; // Update score display
  document.querySelector('.guess').value = ''; // Reset input field to empty
  secretKey = Math.round(Math.random() * 20); // Generate new secret key
  gameOver = false; // Reset game over flag
  document.body.style.backgroundColor = '#222'; // Reset background color
  document.querySelector('.number').textContent = ''; // Clear displayed number
  document.querySelector('.message').textContent = originalMessage;
});

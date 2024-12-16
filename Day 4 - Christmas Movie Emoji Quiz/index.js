import { films } from './data.js';

// Get references to DOM elements
const emojiContainer = document.querySelector('.emoji-clues-container');
const guessInput = document.querySelector('#guess-input');
const messageContainer = document.querySelector('.message-container');
const form = document.querySelector('form');

let currentFilmIndex = -1;
let guessesRemaining = 3;
let usedFilms = new Set();

// Shuffle the films array to randomize order
const shuffledFilms = [...films].sort(() => Math.random() - 0.5);

// Helper to display emoji and set aria-label
function displayEmoji(film) {
    emojiContainer.innerHTML = film.emoji.join(' ');
    emojiContainer.setAttribute('aria-label', film.ariaLabel);
}

// Helper to display a message
function displayMessage(message) {
    messageContainer.textContent = message;
}

// Helper to get the next film
function getNextFilm() {
    currentFilmIndex++;
    if (currentFilmIndex < shuffledFilms.length) {
        return shuffledFilms[currentFilmIndex];
    } else {
        return null; // No more films
    }
}

// Reset the game state for the next question
function resetGameForNextFilm() {
    guessesRemaining = 3;
    const nextFilm = getNextFilm();

    if (nextFilm) {
        displayEmoji(nextFilm);
        displayMessage(`You have ${guessesRemaining} guesses remaining.`);
        guessInput.querySelector('input').value = '';
    } else {
        displayMessage("That's all folks!");
        guessInput.querySelector('input').disabled = true;
        guessInput.querySelector('button').disabled = true;
    }
}

// Check the player's guess
function checkGuess(event) {
    event.preventDefault();
    const userGuess = guessInput.querySelector('input').value.trim().toLowerCase();
    const currentFilm = shuffledFilms[currentFilmIndex];

    if (!currentFilm) return;

    if (userGuess === currentFilm.title.toLowerCase()) {
        displayMessage('Correct!');
        setTimeout(resetGameForNextFilm, 3000);
    } else {
        guessesRemaining--;
        if (guessesRemaining > 0) {
            displayMessage(`Incorrect! You have ${guessesRemaining} more guesses remaining.`);
        } else {
            displayMessage(`The film was ${currentFilm.title}!`);
            setTimeout(resetGameForNextFilm, 3000);
        }
    }
}

// Initialize the game
function initializeGame() {
    const firstFilm = getNextFilm();
    if (firstFilm) {
        displayEmoji(firstFilm);
        displayMessage(`You have ${guessesRemaining} guesses remaining.`);
    } else {
        displayMessage("That's all folks!");
    }
}

// Attach event listener to the form
form.addEventListener('submit', checkGuess);

// Start the game
initializeGame();

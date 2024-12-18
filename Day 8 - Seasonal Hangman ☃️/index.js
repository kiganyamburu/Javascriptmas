// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')
const sunglasses = document.querySelector('.sunglasses');
const puddle = document.querySelector('.puddle');
const keyboardContainer = document.getElementById('keyboard-container');

const words = ["gift", "snow", "winter", "christmas", "holiday"]; // Array of words
let word; // Declare word without initializing
let guesses = 6;
let guessedLetters = [];

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/


function initializeGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guesses = 6;
    guessedLetters = [];
    guessContainer.innerHTML = "";
    sunglasses.style.visibility = "hidden";
    puddle.style.display = "none";
    for (let part of snowmanParts) {
        part.style.display = "block";
    }
    for (let button of keyboardContainer.querySelectorAll('button')) {
        button.disabled = false;
    }
    renderWordDisplay();
}

function renderWordDisplay() {
    guessContainer.innerHTML = "";
    for (let letter of word) {
        if (guessedLetters.includes(letter)) {
            guessContainer.innerHTML += `<span class="guess-char">${letter}</span>`;
        } else {
            guessContainer.innerHTML += `<span class="guess-char">_</span>`;
        }
    }
}

function checkGuess(event) {
    if (event.target.tagName !== 'BUTTON') return;

    const letter = event.target.textContent.toLowerCase();
    event.target.disabled = true; // Disable the button

    if (word.includes(letter)) {
        guessedLetters.push(letter);
        renderWordDisplay();
        if (!Array.from(word).some(char => !guessedLetters.includes(char))) { //Check if all letters are guessed
            sunglasses.style.visibility = "visible";
            guessContainer.textContent = "You Win!";
            const newGameButton = document.createElement('button');
            newGameButton.textContent = "New Game";
            newGameButton.addEventListener('click', initializeGame);
            guessContainer.appendChild(newGameButton);
        }
    } else {
        guesses--;
        snowmanParts[guesses].style.display = "none";
        if (guesses === 0) {
            puddle.style.display = "block";
            guessContainer.textContent = "You Lose! The word was " + word;
            const newGameButton = document.createElement('button');
            newGameButton.textContent = "New Game";
            newGameButton.addEventListener('click', initializeGame);
            guessContainer.appendChild(newGameButton);
        }
    }
}

initializeGame(); 
renderKeyboard()

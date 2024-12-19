const emojis = ['🎄', '🎁', '🎅', '☃️']; // Set of emojis
let gameBoard = document.getElementById('game-board');
let restartButton = document.getElementById('restart');

// Game variables
let cards = [];
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

// Shuffle cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize the game
function initGame() {
  const emojiPairs = [...emojis, ...emojis]; // Duplicate emojis for pairs
  shuffle(emojiPairs);
  cards = emojiPairs.map((emoji, index) => ({
    id: index,
    emoji,
    matched: false,
  }));

  matchedPairs = 0;
  firstCard = null;
  secondCard = null;

  renderBoard();
  restartButton.style.display = 'none';
}

// Render the game board
function renderBoard() {
  gameBoard.innerHTML = '';
  cards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', card.matched ? 'matched' : 'hidden');
    cardElement.dataset.id = card.id;
    cardElement.textContent = card.matched || card === firstCard || card === secondCard ? card.emoji : '';
    cardElement.addEventListener('click', handleCardClick);
    gameBoard.appendChild(cardElement);
  });
}

// Handle card click
function handleCardClick(e) {
  const cardId = e.target.dataset.id;
  const clickedCard = cards.find((card) => card.id == cardId);

  if (clickedCard.matched || clickedCard === firstCard || secondCard) {
    return; // Ignore clicks on matched or already revealed cards
  }

  if (!firstCard) {
    firstCard = clickedCard;
  } else if (!secondCard) {
    secondCard = clickedCard;

    if (firstCard.emoji === secondCard.emoji) {
      // Match found
      firstCard.matched = true;
      secondCard.matched = true;
      matchedPairs++;

      if (matchedPairs === emojis.length) {
        // Game over
        setTimeout(() => alert('You found all pairs! 🎉'), 300);
        restartButton.style.display = 'block';
      }
    } else {
      // No match
      setTimeout(() => {
        firstCard = null;
        secondCard = null;
        renderBoard();
      }, 1000);
    }

    firstCard = null;
    secondCard = null;
  }

  renderBoard();
}

// Restart the game
restartButton.addEventListener('click', initGame);

// Start the game
initGame();

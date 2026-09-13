import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteBtnIcon,
  toggleFavoriteCard,
  showFavoriteBtn,
} from './src/handlers/favorites.js';
import { displayCurrentQuote } from './src/handlers/currentQuote.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';
import { getRandomQuote } from './src/handlers/randomQuote.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';

const randomQuoteBtn = document.getElementById('random-quote-btn');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuote = null;
const favoriteQuotes = [];

function toggleCurrentQuote() {
  // CURRENT QUOTE UPDATE
  // Sync app state and toggle isFavorite of the current quote
  currentQuote.isFavorite = !currentQuote.isFavorite;
  // Update UI by toggling favorite Icon (no need to display again current quote)
  toggleFavoriteBtnIcon(currentQuote.isFavorite);
  // Save current quote in the local storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  // FAVORITE QUOTES UPDATE
  // Sync app state and update favoriteQuotes array
  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } else {
    favoriteQuotes.splice(
      favoriteQuotes.findIndex((quote) => quote.id === currentQuote.id),
      1,
    );
  }
  // Update UI by adding or removing favorite card
  toggleFavoriteCard(currentQuote, favoritesContainer);

  // Save favorite quotes in the local storage
  localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
}

function setCurrentQuote({ quote, isNew = false, isFromStorage = false }) {
  if (isNew || isFromStorage) {
    // SET CURRENT QUOTE
    // Change app state and write copy of the quote to the current quote
    currentQuote = { ...quote };

    // Check if id of the current quote is among favorite quotes and set isFavorite
    currentQuote.isFavorite = !!favoriteQuotes.find(
      (favoriteQuote) => favoriteQuote.id === currentQuote.id,
    );

    // Show current quote in the UI
    displayCurrentQuote(currentQuote);
    // Display favorite icon and change its state
    showFavoriteBtn(currentQuote.isFavorite);

    // Save current quote in the local storage
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
  }
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () => toggleCurrentQuote());

// expecting new random quote { id, text, author }
randomQuoteBtn.addEventListener('click', () =>
  setCurrentQuote({
    quote: getRandomQuote(),
    isNew: true,
  }),
);

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);

  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }

  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);

  if (currentQuoteFromStorage) {
    setCurrentQuote({
      quote: currentQuoteFromStorage,
      isFromStorage: true,
    });
  }
}

window.addEventListener('load', init);

export { quoteFavoriteBtn };

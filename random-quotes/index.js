import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteBtnIcon,
  toggleFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
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

function removeFavoriteQuote(id) {
  // REMOVE FAVORITE QUOTE
  // Removing from favorites current quote by clicking on the card Remove from favorites button
  if (id === currentQuoteId) {
    toggleCurrentQuote();
  } else {
    // Removing from favorites quote which is not current quote
    // Sync app state by remove favorite quote from the favorite quotes array
    favoriteQuotes.splice(
      favoriteQuotes.findIndex((favoriteQuote) => favoriteQuote.id === id),
      1,
    );
    // Remove favorite card from UI
    removeFavoriteCard(id);
    // Save favorite quotes in the local storage
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
}

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

function setCurrentQuote(quote) {
  // SET CURRENT QUOTE WHEN LOADED FROM LOCAL STORAGE OR RECEIVED RANDOMLY
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

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', toggleCurrentQuote);

// expecting new random quote { id, text, author }
randomQuoteBtn.addEventListener('click', () =>
  setCurrentQuote(getRandomQuote()),
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
    setCurrentQuote(currentQuoteFromStorage);
  }
}

window.addEventListener('load', init);

export { quoteFavoriteBtn, removeFavoriteQuote };

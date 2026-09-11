import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteBtnIcon,
  toggleFavoriteCard,
} from './src/handlers/favorites.js';
import { displayQuote, findQuoteById } from './src/handlers/quote.js';
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

function setCurrentQuote({
  quote,
  isNew = false,
  shouldToggleIsFavorite = false,
}) {
  if (isNew) {
    // NEW RANDOM QUOTE
    // Change app state and write copy of the quote to the current quote
    currentQuote = quote;

    // Check if id of the current quote is among favorite quotes and set isFavorite
    currentQuote.isFavorite = !!favoriteQuotes.find(
      (favoriteQuote) => favoriteQuote.id === currentQuote.id,
    );

    // Show current quote in the UI
    displayQuote(currentQuote);

    // Save current quote in the local storage
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
  } else if (shouldToggleIsFavorite) {
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
    toggleFavoriteCard(currentQuote, setCurrentQuote, favoritesContainer);

    // Save favorite quotes in the local storage
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () => {
  setCurrentQuote({ quote: currentQuote, shouldToggleIsFavorite: true });
});

// expecting new random quote { id, text, author }
randomQuoteBtn.addEventListener('click', () =>
  setCurrentQuote({
    quote: getRandomQuote(),
    isNew: true,
  }),
);

function init() {
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }

  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
    });
  }
}

window.addEventListener('load', init);

export { quoteFavoriteBtn };

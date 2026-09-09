import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from './src/handlers/favorites.js';
import { displayQuote, findQuoteById } from './src/handlers/quote.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';
import { getRandomQuote } from './src/handlers/randomQuote.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';

let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote({
  quote,
  isNew = false,
  shouldToggleIsFavorite = false,
}) {
  // Change app state and write copy of the quote to the current quote
  currentQuote = quote;

  // Check if id of the current quote is among favorite quotes and set isFavorite
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (quote) => quote.id === currentQuote.id,
  );

  // Show current quote in the UI
  displayQuote(currentQuote);

  // Save current quote in the local storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id,
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () => {
  setCurrentQuote(currentQuote, true);

  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    quoteFavoriteBtn,
    favoritesContainer,
  );
});

const randomQuoteBtn = document.getElementById('random-quote-btn');
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

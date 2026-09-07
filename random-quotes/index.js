import quotes from './src/data/quotes.js';
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from './src/handlers/favorites.js';
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';

let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;

    // Change local storage favoriteQuotes
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

    localStorageSetItem('favoriteQuotes', favoriteQuotes);
  }

  currentQuote = quote;
  localStorageSetItem('currentQuote', currentQuote);
}

function init() {
  const currentQuoteFromStorage = localStorageGetItem('currentQuote');

  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);

    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);

    quote.isFavorite = currentQuoteFromStorage.isFavorite;

    currentQuote = quote;
  }
}

window.addEventListener('load', init);

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    quoteFavoriteBtn,
    favoritesContainer,
  ),
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote),
);

export { quoteFavoriteBtn };

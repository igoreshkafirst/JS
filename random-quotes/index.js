import quotes from './src/data/quotes.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
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

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorageSetItem('currentQuote', quote);
}

function init() {
  const currentQuoteFromStorage = localStorageGetItem('currentQuote');

  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);

    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);

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

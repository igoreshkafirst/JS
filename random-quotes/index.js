import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';

const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);
}

function choseRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQuote = choseRandomQuote();
  displayQuote(randomQuote);
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

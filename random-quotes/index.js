import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import {
  handleFavoriteBtn,
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';

const generateBtn = document.getElementById('generate-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavoriteBtn(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQuote = choseRandomQuote(quotes);
  displayQuote(randomQuote);
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);

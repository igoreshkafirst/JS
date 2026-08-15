import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import { handleFavorite } from './src/favoritesHandler.js';

const generateBtn = document.getElementById('generate-btn');

let currentQuoteIndex;
let currentQuote = null;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);

export { currentQuote };

import quotes from './src/quotes.js';
import { choseRandomQuote, displayQuote } from './src/quotesHandler.js';

const generateBtn = document.getElementById('generate-btn');

let currentQuote = null;

function generateAndDisplayRandomQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);

export { currentQuote };

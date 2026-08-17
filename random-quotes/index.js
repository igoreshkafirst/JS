import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';

let currentQuote = null;

function handleQuoteFn() {
  handleQuote(quotes)
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', handleQuoteFn);

export { currentQuote };

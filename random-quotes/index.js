import { handleQuote } from './src/handlers/quote.js';

let currentQuote = null;

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', handleQuote);

export { currentQuote };

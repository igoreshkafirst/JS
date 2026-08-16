import { generateAndDisplayRandomQuote } from './src/quotesHandler.js';

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateAndDisplayRandomQuote);

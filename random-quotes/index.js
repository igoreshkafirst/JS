import { handleQuote } from './src/quotesHandler.js';

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', handleQuote);

// Учебный момент.
/* Учитель сначала написал:

   import quotes from './quotes';

   Браузер выдал:
   net::ERR_ABORTED 404

   После добавления расширения .js модуль успешно загрузился. */
import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

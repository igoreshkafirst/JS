import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[currentQuoteIndex];

  // Учебная проверка.
  /* Показывает индекс случайно выбранной цитаты. */
  console.log(currentQuoteIndex);

  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

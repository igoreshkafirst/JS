import quotes from '../data/quotes.js';

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return { ...quotes[randomIndex] };
}

function getRandomQuote() {
  // Return random quote
  const randomQuote = choseRandomQuote(quotes);
}

export { getRandomQuote };

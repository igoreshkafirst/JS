import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils/math.js';

class RandomQuote {
  getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const randomQuote = quotes[randomIndex];
  }
}

function getRandomQuote() {
  return { ...quotes[generateRandomInt(quotes.length)] };
}

export { getRandomQuote };

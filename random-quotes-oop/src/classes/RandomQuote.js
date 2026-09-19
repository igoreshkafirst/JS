import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils/math.js';

class RandomQuote {
  constructor() {
    this.quotes = quotes;
  }

  getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
  }
}

import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils/math.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;

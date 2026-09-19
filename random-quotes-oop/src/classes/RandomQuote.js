import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils/math.js';

class RandomQuote {
  getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return { id: id, text: text, author: author };
  }
}

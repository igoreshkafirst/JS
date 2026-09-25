import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };
    const response = await fetch(url, options);
    const quote = await response.json();
    const { _id: id, content, author } = quote;
    return new Quote(id, content, author);
  }
}

export default RandomQuote;

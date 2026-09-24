import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((quote) => {
        console.log(quote);
        const { _id: id, content, author } = quote;
        return new Quote(id, content, author);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export default RandomQuote;

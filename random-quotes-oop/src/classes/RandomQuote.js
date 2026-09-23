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

    // Start the timer
    const startTime = performance.now();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((quote) => {
        // Stop the timer when the response is recieved
        const endTime = performance.now();
        const elapsedTime = Math.floor(endTime - startTime);
        console.log('Elapsed time (ms):', elapsedTime);
        console.log(quote);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export default RandomQuote;

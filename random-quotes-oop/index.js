import RandomQuote from './src/classes/RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteBtn.addEventListener('click', () => {
      const randomQuote = RandomQuote.getRandomQuote();
      this.displayCurrentQuote(randomQuote);
    });
  }

  displayCurrentQuote(quote) {
    const { text, author } = quote;
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    quoteTextElement.textContent = `"${text}"`;
    quoteAuthorElement.textContent = author;
  }
}

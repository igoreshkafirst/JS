import RandomQuote from './src/classes/RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = author;
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => {
      const randomQuote = RandomQuote.getRandomQuote();
      this.currentQuote = randomQuote;
      this.displayCurrentQuote();
    });
  }
}

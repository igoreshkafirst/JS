class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.isFavorite = false;
  }
}

const firstQuote = new Quote('123', 'Some text', 'Igor');

console.log(firstQuote);

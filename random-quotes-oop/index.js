class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.isFavorite = false;
  }

  toString() {
    return `Quote has id ${this.id} and author is ${this.author}`;
  }
}

const firstQuote = new Quote('123', 'Some text', 'Igor');
const secondQuote = new Quote(456, 'Other text', 'Tatiana');

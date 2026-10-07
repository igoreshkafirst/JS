class Quote {
  constructor(quote) {
    const { id, text, author } = quote;
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return `"${this.text}"`;
  }

  formatAuthor() {
    return `© ${this.author}`;
  }
}

export default Quote;

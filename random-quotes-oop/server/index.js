const express = require('express'); // CommonJS module
const quotes = require('./data/quotes.js');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});

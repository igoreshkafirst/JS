const express = require('express'); // CommonJS module
const cors = require('cors');
const quotes = require('./data/quotes.js');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.use((req, res, next) => {
  // ... must call next()
  console.log('Middleware 1 fn called');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2 fn called');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 3 fn called');
  next();
});

// Allow CORS for all origins
app.use(cors());

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});

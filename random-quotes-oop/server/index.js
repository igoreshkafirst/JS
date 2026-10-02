const express = require('express'); // CommonJS module
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/quotes', (req, res) => {
  // Creating new quote
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});

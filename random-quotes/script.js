const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex];
  const quote = randomQuote.quote + '<br>' + randomQuote.author;

  quoteElement.innerHTML = quote;
}

generateBtn.addEventListener('click', generateRandomQuote);

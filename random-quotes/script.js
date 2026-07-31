const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  // Проверка, что обработчик действительно вызывается при нажатии кнопки
  console.log('THIS FUNCTION WAS JUST CALLED');

  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Вывод случайного индекса для проверки диапазона значений
  console.log(randomIndex);

  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

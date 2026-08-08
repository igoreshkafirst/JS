import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

// 2. «Вынесение логики переключения иконки в отдельную функцию» v1.1.5
function toggleFavoriteIcon(isFavorite) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  // 3. «Использование функции переключения иконки» v1.1.5
  toggleFavoriteIcon(randomQuote.isFavorite);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function showFavoriteCard(quote, author) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
        <p>${quote}</p>
        <p class="author">${author}</p>
      `;
  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  console.log(favoriteCards);
  console.log(typeof favoriteCards);
  console.log(favoriteCards instanceof NodeList);
  console.log(favoriteCards instanceof Object);
  console.log(favoriteCards instanceof Array);
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      console.log(card);
      console.log(card.textContent);
      card.remove();
    }
  });
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.quote, currentQuote.author);
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
// Автоматическая генерация первой цитаты при загрузке страницы (Добавление обработчика избранных цитат)
generateRandomQuote();

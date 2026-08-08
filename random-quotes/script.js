import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  // Переключение состояния иконки избранного через classList
  /* Аналогичная логика будет добавлена в toggleFavorite()
     для синхронизации иконки после изменения избранного состояния. */
  if (randomQuote.isFavorite) {
    toggleFavoriteBtn.classList.add('fa');
    toggleFavoriteBtn.classList.remove('far');
  } else {
    toggleFavoriteBtn.classList.remove('fa');
    toggleFavoriteBtn.classList.add('far');
  }

  // Примечание.
  /* На этом этапе также была добавлена строка:
   */
  toggleFavoriteBtn.style.display = 'inline-block';
  /*
   Она отвечает только за первое отображение иконки избранного,
   которая предварительно скрывается через
   #toggle-favorite-btn { display: none; }.

   В истории проекта она ошибочно удалена в коммите
   «Скрытие кнопки избранного до выбора первой цитаты»,
   чтобы не создавать отдельный технический коммит. */
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  // Повторяем логику переключения иконки,
  /* поскольку здесь состояние избранного изменяется
     для текущей цитаты. */
  if (currentQuote.isFavorite) {
    toggleFavoriteBtn.classList.add('fa');
    toggleFavoriteBtn.classList.remove('far');
  } else {
    toggleFavoriteBtn.classList.remove('fa');
    toggleFavoriteBtn.classList.add('far');
  }

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
        <p>${currentQuote.quote}</p>
        <p class="author">${currentQuote.author}</p>
      `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    // Получаем все карточки избранных цитат.
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
// Автоматическая генерация первой цитаты при загрузке страницы (Добавление обработчика избранных цитат)
generateRandomQuote();

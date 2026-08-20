import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer),
);

hideBtn(favoriteBtn);

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { id, text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(id, text, author, container);
  } else {
    hideFavoriteCard(id);
  }
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(id, text, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id; // Set the data attribute
  favoriteCard.innerHTML = `
      <p>${text}</p>
      <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export { handleFavorite };

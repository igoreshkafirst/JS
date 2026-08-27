import { quoteFavoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn();
  toggleFavoriteBtnIcon(isFavorite, quoteFavoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;

  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id; // Set the data attribute

  favoriteCard.innerHTML = `
      <div class="favorite-card-content">
        <p>${text}</p>
        <p class="author">${author}</p>
      </div>
      <button class="btn btn-danger">Remove from favorites</button>
    `;
  container.appendChild(favoriteCard);

  const removeButton = favoriteCard.querySelector('.btn-danger');

  removeButton.addEventListener('click', () => {
    quote.isFavorite = !quote.isFavorite;
    hideFavoriteCard(id);

    if (
      id ===
      document.querySelector('[data-current-quote-id]').dataset.currentQuoteId
    ) {
      toggleFavoriteBtnIcon(quote.isFavorite);
    }
  });
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) card.remove(); // альтернатива "card && card.remove()"
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };

import { quoteFavoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(quote.id);
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

  function removeFavoriteQuote(quote) {
    quote.isFavorite = false;
    removeFavoriteCard(id);

    const currentQuote = document.querySelector('[data-current-quote-id]');

    const currentQuoteId = currentQuote.dataset.currentQuoteId;

    if (id === currentQuoteId) {
      toggleFavoriteBtnIcon(true);
    }
  }

  const removeButton = favoriteCard.querySelector('.btn-danger');

  removeButton.addEventListener('click', () => removeFavoriteQuote(quote));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) card.remove(); // альтернатива "card && card.remove()"
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };

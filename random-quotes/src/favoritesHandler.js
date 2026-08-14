function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showToggleFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideToggleFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(quote, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
      <p>${quote}</p>
      <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };

function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showFavoriteCard(quote, author, favoritesContainer) {
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
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

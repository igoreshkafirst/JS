const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

hideToggleFavoriteBtn(toggleFavoriteBtn);

function handleFavoriteBtn(isFavorite) {
  showToggleFavoriteBtn(toggleFavoriteBtn);
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);
}

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

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
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

export {
  handleFavoriteBtn,
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
};

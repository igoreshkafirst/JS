const toggleBtn = document.getElementById('toggle-favorite-btn');
toggleBtn.addEventListener('click', toggleFavorite);

hideBtn(toggleBtn);

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}

function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
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
  handleFavorite,
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
};

// Développement des project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // bascule la classe "active" sur la card cliquée
    card.classList.toggle('active');
  });
});







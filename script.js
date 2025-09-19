// ====== Développement des project cards ======
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

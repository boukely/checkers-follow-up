// Développement des project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // bascule la classe "active" sur la card cliquée
    card.classList.toggle('active');
  });
});
function confirmDownload() {
    let result = confirm("Do you want to download it?");
    if (result) {
      // Redirection vers le fichier si OUI
      window.location.href = "file:///O:/CHECKERS/SAMPLES/MoM Checkers SS 2026 Dvpt.xlsx";
    }
    // Si NON, rien ne se passe
  }




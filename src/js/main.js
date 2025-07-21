const items = document.querySelectorAll('li[data-section]');
const contents = document.querySelectorAll('[data-content]');

// Funzione per mostrare il contenuto target e nascondere gli altri
function showContent(target) {
  contents.forEach(content => {
    if (content.getAttribute('data-content') === target) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
}

// Controlla se siamo su mobile (per esempio larghezza < 768px)
function isMobile() {
  return window.innerWidth < 768;
}

items.forEach(item => {
  if (isMobile()) {
    // Su mobile, usa click
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-section');
      showContent(target);
    });
  } else {
    // Su desktop, usa hover
    item.addEventListener('mouseenter', () => {
      const target = item.getAttribute('data-section');
      showContent(target);
    });
  }
});

// Facoltativo: aggiungi listener resize per aggiornare comportamenti se l'utente cambia dimensione finestra
window.addEventListener('resize', () => {
  // Rimuovi tutti i listener precedenti
  items.forEach(item => {
    const clone = item.cloneNode(true);
    item.parentNode.replaceChild(clone, item);
  });

  // Riassegna i listener
  const newItems = document.querySelectorAll('li[data-section]');
  newItems.forEach(item => {
    if (isMobile()) {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-section');
        showContent(target);
      });
    } else {
      item.addEventListener('mouseenter', () => {
        const target = item.getAttribute('data-section');
        showContent(target);
      });
    }
  });
});
let lang = localStorage.getItem('lang') || 'it';
const langData = {};

async function loadLang() {
  try {
    const res = await fetch(`./src/lang/${lang}.json`);
    const data = await res.json();
    Object.assign(langData, data);
    applyTranslations();
    if (langData.title) document.title = langData.title;
  } catch (e) {
    console.error('Errore nel caricamento lingua:', e);
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (langData[key]) {
      el.textContent = langData[key];
      console.log(`Impostato testo per chiave "${key}": ${langData[key]}`);
    } else {
      console.warn(`Chiave "${key}" non trovata in langData`);
    }
  });
}

function switchLang(newLang) {
  localStorage.setItem('lang', newLang);
  location.reload();
}

window.switchLang = switchLang;

loadLang();